import { useEffect, useState } from 'react'
// import databaseService from '../appwrite_services/databaseService'
import { PostCard } from './index'
import { Link } from 'react-router-dom'
import axios from '../api/axios'
// import conf from "../conf/conf";

function AllPosts() {

    const [posts, setPosts] = useState([])

    // const getAllPost = `${conf.apiURL}/blog/`
    // console.log(conf);

    useEffect(() => {
        // databaseService.getActivePosts()
        //     .then((posts) => {
        //         setPosts(posts.documents)
        //         console.log(posts);
        //     })
        //     .catch((e) => console.log(e))

        axios.get("/blog/")
            .then((res) => {
                setPosts(res.data.data);
            })
            .catch((e) => console.log(e))

    }, [])

    console.log("POsts", posts);

    return (
        <div className='flex flex-row'>
            <div className="grid gap-6 gap-y-10 p-10 my-28 align-middle md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <div key={post._id}>
                        <Link to={`/post/${post._id}`}>
                            <PostCard post={post} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllPosts