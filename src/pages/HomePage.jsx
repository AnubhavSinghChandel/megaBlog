import { useState, useEffect } from 'react'
import databaseService from '../appwrite_services/databaseService'
import { Prompt, ButtonLarge, PostCard } from '../components'
import { Link, useNavigate } from 'react-router-dom'

function HomePage() {

    const [posts, setPosts] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        databaseService.getActivePosts()
            .then((posts) => {
                setPosts(posts.documents)
                console.log(posts);
            })
            .catch((e) => console.log(e))
    }, [])

    const allPosts = () => navigate('/allposts')
    const createPost = () => navigate('/createblog')

    if (posts.length === 0) {
        return (
            <Prompt />
        )
    } else
        return (
            <div className='flex flex-row'>
                <div className="grid gap-6 gap-y-10 p-10 mt-10 mb-28 align-middle md:grid-cols-2 lg:grid-cols-3">
                    {posts.slice(0, 6).map((post) => (
                        <div key={post.$id}>
                            <Link to={`/post/${post.$id}`}>
                                <PostCard post={post} />
                            </Link>
                        </div>
                    ))}
                    <div className='flex flex-col gap-6 item-center mx-36 justify-center mt-40 mb-60'>
                        <ButtonLarge
                            type='button'
                            label='All Posts'
                            onClick={allPosts}
                        />
                        <ButtonLarge
                            type='button'
                            label='Create New'
                            onClick={createPost}
                        />
                    </div>
                </div>
            </div>
        )
}

export default HomePage