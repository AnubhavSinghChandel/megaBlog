import React from 'react'
// import storageService from '../appwrite_services/storageService'
import { useSelector } from 'react-redux'

function PostCard({ post }) {
    // console.log(post)
    // const userName = useSelector((state) => {
    //     if (state.loginStatus) {
    //         return state.userData.name
    //     }
    // })
    // console.log(userName);
    const fullName = post.createdBy.fullName
    const username = post.createdBy.username
    const postDate = new Date(post.updatedAt)
    // console.log(postDate.toDateString());


    return (
        <div key={post._id} className="border">
            <img src={post.featuredImage} className="aspect-video w-full rounded-md" />
            <div className="min-h-min p-3">
                <p className="mt-4 flex-1 text-base font-semibold text-gray-900">{post.title}</p>
                <div className="mt-4 flex space-x-3 ">
                    <div>
                        <p className="text-sm font-semibold leading-tight text-gray-900">
                            {fullName}
                        </p>
                        <p className="text-sm leading-tight text-gray-600">
                            @{username}
                        </p>
                        <p className="text-sm leading-tight text-gray-600">
                            Last Updated on: {postDate.toDateString()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard