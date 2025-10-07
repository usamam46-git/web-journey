import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    const links = [
        {url: "/", name: "Home"},
        {url: "/blog", name: "Blog"},
        {url: "/users", name: "Users"},
        {url: "/about-us", name: "About us"},
        {url: "/contact-us", name: "Contact us"},
        {url: "/help", name: "Help"},
    ]
    const activeCss = "text-red-500";
  return (
    <header>
        <nav className='m-4 flex justify-between items-center'>
            <div className='bg-white/70 p-3 rounded'>Logo</div>
            <div className='bg-white/70 p-3 rounded flex gap-4'>
            {links.map((link, i)=>{
                return (
                    <span key={i} className='block'>
                    <NavLink className={(e) => e.isActive ? activeCss : "text-gray-400"} to={link.url}>
                        {link.name}
                    </NavLink> { "  "}
                    </span>
                )
            })}
            </div>
        </nav>
    </header>
  )
}

export default Navbar