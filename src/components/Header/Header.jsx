// import React from 'react'
import {Container, LogoApp, LogoutBtn} from '../index.js'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import authService from '../../appwrite/auth'

function Header() {
    const authStatus = useSelector((state) => state.auth && state.auth.status);

    const navigate = useNavigate()

    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true
          }, 
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ]

  return (
    <header className='shadow bg-base-200'>
        <Container>
            <nav className='flex navbar bg-base-200'>
                <div className='mr-4'>
                    <Link to='/'>
                        <LogoApp width='70px' />
                    </Link>
                </div>
                <ul className='flex ml-auto'>
                    {navItems.map((item) => 
                    item.active ? (
                        <li key={item.name}>
                            <button
                            onClick={() => navigate(item.slug)}
                            className='inline-block px-6 py-2 duration-300 hover:gs-blue-100 rounded-full btn-ghost'
                            >{item.name}</button>
                        </li>
                    ) : null
                    )}
                    {authStatus && (
                        <li>
                            <LogoutBtn />
                        </li>
                    )}
                </ul>
            </nav>
        </Container>
    </header>
  )
}

export default Header