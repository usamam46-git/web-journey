import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import Users from '../pages/Users'
import About from '../pages/About'
import Contactus from '../pages/Contactus'
import Page404 from '../pages/Page404'
import Help from '../pages/Help'
import UserDetails from '../pages/UserDetails'

const Routes = () => {
    const router = createBrowserRouter([
        {path: "/", element: <Home />},
        {path: "/blog", element: <Blog />},
        {path: "/users", element: <Users />},
        {path: "/users/:id", element: <UserDetails />},
        {path: "/about-us", element: <About />},
        {path: "/contact-us", element: <Contactus />},
        {path: "/help", element: <Help />},
        {path: "*", element: <Page404 />},
    ])
    return (
        <RouterProvider router={router}/>
    )
}

export default Routes