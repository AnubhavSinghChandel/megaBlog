import React, { useEffect, useState } from 'react'
import { PostForm } from '../components'
import { useParams, useNavigate } from 'react-router-dom'
// import databaseService from '../appwrite_services/databaseService';
import axios from '../api/axios';


function EditPost() {

    const { slug } = useParams();
    console.log(slug);
    const [post, setPost] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            axios.get(`/blog/${slug}`)
                .then((res) => setPost(res.data.data[0]))
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