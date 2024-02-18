import axios from "axios"

export default axios.create({
    baseURL: "http://mega-blog-backend.vercel.app/",
    withCredentials: true,
});