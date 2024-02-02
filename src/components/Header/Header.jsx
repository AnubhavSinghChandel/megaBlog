import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { BlackButton } from '../index'
import LogoutBtn from './LogoutBtn'
import { useDispatch } from 'react-redux'
// import authService from '../../appwrite_services/authService'
import { login } from '../../store/authSlice'
import { useEffect } from 'react'
import axios from '../../api/axios'


function Header() {

    const dispatch = useDispatch()

    useEffect(() => {
        // authService.currentUser()
        axios.get("/user/")
            .then((res) => {
                if (res) {
                    dispatch(login(res.data.data))
                    // console.log(user);
                }
            })
            .catch((e) => console.error(e))
    }, [])

    const authStatus = useSelector((state) => state.loginStatus)


    const buttons = [
        {
            name: 'Sign in',
            slug: '/login',
            isActive: !authStatus
        },
        {
            name: 'Sign up',
            slug: '/signup',
            isActive: !authStatus
        }
    ]

    return (
        <>
            <div className="relative w-full bg-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                    <Link >
                        <div className="inline-flex items-center space-x-2">
                            <span>
                                <img
                                    width="30"
                                    height="30"
                                    // viewBox="0 0 50 56"
                                    // fill="none"
                                    src="/src/assets/book.svg"
                                >
                                </img>
                            </span>
                            <span className="font-bold">megaBlog</span>
                        </div>
                    </Link>
                    <div className="hidden grow items-end lg:flex">
                        <ul className="ml-12 inline-flex space-x-8">
                            <li>
                                <Link to={`/`}>Home</Link>
                            </li>
                            {/* <li>
                                <Link to='/about'>
                                    About
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="ml-2 h-4 w-4"
                                        >
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </span>
                                </Link>
                            </li> */}
                            {/*<li>
                                 <Link to='/contact'>
                                    Contact
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="ml-2 h-4 w-4"
                                        >
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </span>
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                    <div className="space-x-2 lg:block">
                        < div className='flex gap-5'>
                            {
                                buttons.map((button) => (
                                    button.isActive ?
                                        <Link key={button.name} to={button.slug}>
                                            <BlackButton type='button'>{button.name}</BlackButton>
                                        </Link>
                                        : null
                                ))
                            }
                        </div>
                        {authStatus && (
                            <LogoutBtn />
                        )}

                    </div>
                </div>
            </div >
        </>
    )
}

export default Header