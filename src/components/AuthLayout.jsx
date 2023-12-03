import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Loader } from './index'

export default function Protected({ children, authentication = true }) {

    const [loader, setLoader] = useState(true)
    const loginStatus = useSelector((state) => state.loginStatus)
    const navigate = useNavigate()

    useEffect(() => {
        if (authentication && loginStatus !== authentication) {
            navigate('/login')
        } else if (!authentication && loginStatus !== authentication) {
            navigate('/')
        }
        setInterval(() => {
            setLoader(false)
        }, 1000)
    }, [loginStatus, navigate, authentication])


    return loader ?
        <div className=''>
            <Loader />
        </div>
        : <>{children}</>
}
