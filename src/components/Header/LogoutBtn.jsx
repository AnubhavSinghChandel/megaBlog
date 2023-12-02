import React from 'react'
import { BlackButton } from '../index'
import authService from '../../appwrite_services/authService'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../store/authSlice'
import { useDispatch } from 'react-redux'

function LogoutBtn() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = () => {
        authService.logoutCurrentSession()
        dispatch(logout())
        navigate('/')
    }

    return (
        <BlackButton type='submit' onClick={handleLogout}>
            Logout
        </BlackButton>
    )
}

export default LogoutBtn