import React, { useEffect, useState } from 'react'
import { PostForm } from '../components'
import { useParams, useNavigate } from 'react-router-dom'
import databaseService from '../appwrite_services/databaseService';


function EditPost() {

    const { slug } = useParams();
    const [post, setPost] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            databaseService.getPost(slug)
                .then((post) => setPost(post))
        } else {
            navigate('/')
        }
    }, [slug, navigate])

    // console.log(post.title);

    return (
        post ? <PostForm post={post} /> : null
    )
}

export default EditPost