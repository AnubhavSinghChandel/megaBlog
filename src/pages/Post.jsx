import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import databaseService from '../appwrite_services/databaseService'
import storageService from '../appwrite_services/storageService'
import { useSelector } from 'react-redux'
import { BlackButton } from '../components'
import parse from 'html-react-parser'

function Post() {

    const { slug } = useParams()
    const [post, setPost] = useState(null)
    const navigate = useNavigate()
    const userData = useSelector((state) => state.userData)

    // console.log(userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false

    useEffect(() => {
        if (slug) {
            databaseService.getPost(slug)
                .then((post) => {
                    if (post) {
                        setPost(post)
                    } else {
                        navigate('/')
                    }
                })
        }
    }, [slug, navigate])

    const deletePost = async () => {
        await databaseService.deleteDocument(slug)
            .then((response) => {
                if (response) {
                    storageService.deleteFile(post.featuredImage)
                    navigate('/')
                }
            })
    }

    console.log(post);

    return post ? (
        <div className='p-10 flex flex-col'>
            <div className="rounded-lg bg-gray-200 p-3">
                <img
                    className="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[400px]"
                    src={storageService.getFilePreview(post.featuredImage)}
                />
            </div>
            {isAuthor && (
                <div className='flex justify-center flex-row gap-6'>
                    <BlackButton type='button' label='Update Post' onClick={() => navigate(`/edit-post/${post.$id}`)}>
                        Update Post
                    </BlackButton>

                    <BlackButton type='button' label='Delete Post' onClick={deletePost}>
                        Delete Post
                    </BlackButton>
                </div>
            )}
            <div className='felx fex-col gap-6'>
                <h1 className='text-4xl font-bold my-10 '>
                    {post.title}
                </h1>
                <div className='text-center rounded-lg bg-gray-50 lg:h-auto mb-11'>
                    {parse(post.content)}
                </div>
            </div>
        </div>
    ) : null
}

export default Post