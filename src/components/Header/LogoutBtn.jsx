import React from 'react'
import { BlackButton } from '../index'
// import authService from '../../appwrite_services/authService'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../store/authSlice'
import { useDispatch } from 'react-redux'
import axios from "../../api/axios"
// import conf from '../../conf/conf'

function LogoutBtn() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const logoutApiURL = `${conf.apiURL}/user/logout`

    const handleLogout = () => {
        // authService.logoutCurrentSession()
        axios.post("/user/logout")
            .then((res) => {
                console.log(res);
                if (res) {
                    dispatch(logout())
                    navigate('/')
                }
            })
            .catch((e) => {
                console.log(e);
            })
    }

    return (
        <BlackButton type='submit' onClick={handleLogout}>
            Logout
        </BlackButton>
    )
}

export default LogoutBtn