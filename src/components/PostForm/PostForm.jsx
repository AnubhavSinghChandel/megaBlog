import { useCallback, useEffect } from "react"
import { useForm } from 'react-hook-form'
import authService from "../../appwrite_services/authService"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import storageService from "../../appwrite_services/storageService"
import databaseService from "../../appwrite_services/databaseService"
import { BlackButton, Input, RTE } from "../index"

function PostForm({ post }) {

    const { register, handleSubmit, watch, setValue, control, getValues, reset } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || true,
        },
    })

    useEffect(() => {
        reset({
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || true,
        })
    }, [post, reset])


    const navigate = useNavigate()
    const userData = useSelector((state) => state.userData)

    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? await storageService.uploadFile(data.image[0]) : null
            if (file) {
                storageService.deleteFile(post.featuredImage)
            }
            const updatePost = await databaseService.updatePost(
                post.$id,
                {
                    ...data,
                    featuredImage: file ? file.$id : post.featuredImage
                }
            )
            if (updatePost) {
                navigate(`/post/${updatePost.id}`)
            }
        } else {
            // console.log(data);
            const file = await storageService.uploadFile(data.image[0])
            // console.log(file);
            if (file) {
                const image = file.$id
                data.featuredImage = image
                const newPost = await databaseService.createPost({
                    ...data,
                    userId: userData.$id,
                })
                if (newPost) {
                    navigate(`/post/${newPost}`)
                }
            }
        }
    }

    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string') {
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, '-')
                .replace(/\s/g, '-')
        }
        return ''
    }, [])

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === 'title') {
                setValue('slug', slugTransform(value.title, { shouldValidate: true }))
            }
        })
        return () => subscription.unsubscribe()
    }, [watch, slugTransform, setValue])

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap mb-16 px-5 pt-10">
            <div className="w-2/3 px-2 flex flex-col gap-3">
                <Input
                    label="Title"
                    placeholder="Title"
                    // value={post?.title}
                    className="mb-4"
                    {...register('title', { required: true })}
                />
                <Input
                    label="Slug"
                    placeholder="Slug"
                    className="mb-4"
                    // value={post?.$id}
                    {...register('slug', { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content" name="content" control={control} defaultValue={getValues('content')} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={storageService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg mt-5"
                        />
                    </div>
                )}
                {/* <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                /> */}
                <BlackButton type='submit' className="w-full">
                    {post ? "Update" : "Submit"}
                </BlackButton>
            </div>
        </form>
    )
}

export default PostForm