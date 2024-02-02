import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
// import databaseService from '../appwrite_services/databaseService'
// import storageService from '../appwrite_services/storageService'
import { useSelector } from 'react-redux'
import { BlackButton } from '../components'
import HtmlParser from 'html-react-parser'
import axios from '../api/axios'

function Post() {

    const { slug } = useParams()
    console.log(slug);
    const [post, setPost] = useState(null)
    const navigate = useNavigate()
    const userData = useSelector((state) => state.userData)

    const isAuthor = post && userData ? post.createdBy._id === userData._id : false

    // console.log(post);

    // console.log(userData);

    useEffect(() => {
        if (slug) {
            // databaseService.getPost(slug)
            //     .then((post) => {
            //         if (post) {
            //             setPost(post)
            //         } else {
            //             navigate('/')
            //         }
            //     })

            axios.get(`/blog/${slug}`)
                .then((res) => {
                    if (res) {
                        setPost(res.data.data[0])
                    } else {
                        navigate('/')
                    }
                })
                .catch((e) => {
                    console.log(e);
                })

        }
    }, [slug, navigate])


    const deletePost = async () => {
        // await databaseService.deleteDocument(slug)
        //     .then((response) => {
        //         if (response) {
        //             storageService.deleteFile(post.featuredImage)
        //             navigate('/')
        //         }
        //     })

        const res = await axios.delete(`/blog/${slug}`)
        if (res.status === 200) {
            navigate('/')
        }
    }


    return post ? (
        <div className='lg:px-32 lg:mx-28 lg:py-20 md:px-20 md:mx-14 md:pt-10 sm:px-5 sm:mx-3 sm:pt-4 flex flex-col'>
            <div className="rounded-lg bg-gray-200 p-3">
                <img
                    className="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[400px]"
                    src={post.featuredImage}
                />
            </div>
            {isAuthor && (
                <div className='mt-10 flex justify-center flex-row gap-6'>
                    <BlackButton type='button' label='Update Post' onClick={() => navigate(`/edit-post/${post._id}`)}>
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
                <div className='p-20 rounded-lg bg-gray-50 lg:h-auto mb-11'>
                    {HtmlParser(post.content)}
                </div>
            </div>
        </div>
    ) : null
}

export default Post