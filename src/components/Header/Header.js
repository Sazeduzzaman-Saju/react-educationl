import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../img/Logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header sticky top-0'>
            <div className="navbar container mx-auto px-4">
                <div className="navbar-start mx-auto">
                    <div className="">
                        <NavLink to='/'><img src={Logo} alt="" /></NavLink>
                    </div>
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to={'home'} className='navLinks'>Home</NavLink>
                            <NavLink to={'howtoworks'} className='navLinks'>How It Works</NavLink>
                            <NavLink to={'about'} className='navLinks'>About</NavLink>
                            <NavLink to={'contact'} className='navLinks'>Contact</NavLink>
                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <NavLink to={'home'} className='navLinks'>Home</NavLink>
                        <NavLink to={'howtoworks'} className='navLinks'>How It Works</NavLink>
                        <NavLink to={'about'} className='navLinks'>About</NavLink>
                        <NavLink to={'contact'} className='navLinks'>Contact</NavLink>
                    </ul>
                </div >
                <div className="navbar-end">
                    <button className='login-btn font-semibold'>Login</button>
                </div>
            </div >
        </div >
    );
};

export default Header;