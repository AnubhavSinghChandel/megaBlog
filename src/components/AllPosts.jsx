import { useEffect, useState } from 'react'
import databaseService from '../appwrite_services/databaseService'
import { PostCard } from './index'
import { Link } from 'react-router-dom'

function AllPosts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        databaseService.getActivePosts()
            .then((posts) => {
                setPosts(posts.documents)
                console.log(posts);
            })
            .catch((e) => console.log(e))
    }, [])

    return (
        <div className='flex flex-row'>
            <div className="grid gap-6 gap-y-10 p-10 my-28 align-middle md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <div key={post.$id}>
                        <Link to={`/post/${post.$id}`}>
                            <PostCard post={post} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllPosts