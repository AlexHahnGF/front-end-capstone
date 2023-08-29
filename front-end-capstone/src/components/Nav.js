import { ReactComponent as Brand } from '../icons_assets/Logo.svg'
import { useState } from 'react'
import { ReactComponent as Hamburger } from '../icons_assets/icon _hamburger menu.svg'
import '../styles/navbar.css'
// import { NavLink } from "react-router-dom";

export default function Nav() {
    const [showNavbar, setShowNavBar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavBar(!showNavbar);
    }

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <Brand />
                    {/* <img src={logo} alt="Little lemon logo" /> */}
                </div>
                <div className='menu-icon' onClick={handleShowNavbar}>
                    <Hamburger />
                </div>
                <div className={`nav-elements ${showNavbar && 'active'}`}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/book">Reservations</a></li>
                        <li><a href="/order">Order Online</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}