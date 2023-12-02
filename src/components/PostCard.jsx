import React from 'react'
import storageService from '../appwrite_services/storageService'
import { useSelector } from 'react-redux'

function PostCard({ post }) {
    // console.log(post)
    const userName = useSelector((state) => {
        if (state.loginStatus) {
            return state.userData.name
        }
    })
    // console.log(userName);
    const postDate = new Date(post.$updatedAt)
    // console.log(postDate.toDateString());


    return (
        <div key={post.$id} className="border">
            <img src={storageService.getFilePreview(post.featuredImage)} className="aspect-video w-full rounded-md" />
            <div className="min-h-min p-3">
                {/* <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                    #{post.category}
                </p> */}
                <p className="mt-4 flex-1 text-base font-semibold text-gray-900">{post.title}</p>
                {/* <p className="mt-4 w-full text-sm leading-normal text-gray-600">
                    {post.content}
                </p> */}
                <div className="mt-4 flex space-x-3 ">
                    <div>
                        <p className="text-sm font-semibold leading-tight text-gray-900">
                            {userName}
                        </p>
                        <p className="text-sm leading-tight text-gray-600">Last Updated on: {postDate.toDateString()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard