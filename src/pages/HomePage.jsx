import { useState, useEffect } from 'react'
// import databaseService from '../appwrite_services/databaseService'
import { Prompt, ButtonLarge, PostCard } from '../components'
import { Link, useNavigate } from 'react-router-dom'
// import conf from '../conf/conf'
import axios from '../api/axios'

function HomePage() {

    const [posts, setPosts] = useState([])

    const navigate = useNavigate()

    // const currentUserBlogApi = `${conf.apiURL}/current-user/blogs`

    useEffect(() => {
        // databaseService.getActivePosts()

        axios.get("/blog/current-user/blogs")
            .then((res) => {
                // console.log(res.data.data);
                setPosts(res.data.data)
            })
            .catch((e) => console.log(e))

        // console.log(posts);
    }, [])


    const allPosts = () => navigate('/allposts')
    const createPost = () => navigate('/createblog')

    if (posts.length === 0) {
        return (
            <Prompt />
        )
    } else
        return (
            <div className='flex flex-row w-5/6 h-screen justify-center'>
                <div className="grid gap-6  gap-y-10 p-10 mt-10 justify-center md:grid-cols-2 lg:grid-cols-3">
                    {posts.slice(0, 6).map((post) => (
                        <div key={post._id} className='h-96'>
                            <Link to={`/post/${post._id}`}>
                                <PostCard post={post} />
                            </Link>
                        </div>
                    ))}
                    <div className='flex flex-col justify-center h-96 items-center gap-6 '>
                        <ButtonLarge
                            type='button'
                            label='All Posts'
                            className='w-1/2'
                            onClick={allPosts}
                        />
                        <ButtonLarge
                            type='button'
                            className='w-1/2'
                            label='Create New'
                            onClick={createPost}
                        />
                    </div>
                </div>
            </div>
        )
}

export default HomePage