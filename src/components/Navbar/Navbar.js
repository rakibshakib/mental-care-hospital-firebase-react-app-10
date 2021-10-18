import React from 'react'
import { AiOutlinePhone, AiOutlineMail } from "react-icons/all";
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../image/logo.png'

const Navbar = () => {
    const { user, logOutUser } = useAuth();
    return (
        <nav>
            <div className='flex justify-between items-center container mx-auto'>
                <figure>
                    <img src={logo} alt="" />
                </figure>
                <div className='flex justify-between items-center text-xl font-medium'>
                    <AiOutlinePhone />
                    <p className='ml-3'>+88 01234567896</p>
                </div>
                <div className='flex justify-between items-center text-xl font-medium'>
                    <AiOutlineMail />
                    <p className='ml-3'>mentalCare@gmail.com</p>
                </div>
            </div>

            <div className='bg-green-700'>
                <div className='text-white text-md py-3 container mx-auto font-medium flex items-center justify-between'>
                    <div>
                        <NavLink className='nav-items py-3 px-2 transition delay-75 duration-300 ease-in-out' to="/">Home</NavLink>
                        <NavLink className=' nav-items py-3 px-2 ml-5 transition delay-75 duration-300 ease-in-out' to="/booking">Apointment</NavLink>
                        <NavLink className='nav-items py-3 px-2 ml-5 transition delay-75 duration-300 ease-in-out' to="/about">About</NavLink>
                        <NavLink className='nav-items py-3 px-2 ml-5 transition delay-75 duration-300 ease-in-ou' to="/contact">Contact</NavLink>
                    </div>
                    <div>
                        {
                            user?.email && <p className='inline-block mr-5 font-medium border-b-2 px-2 '>{user.displayName}</p>
                        }
                        {
                            user.email ? <button onClick={logOutUser} className='nav-items px-2 ml-5 transition delay-75 duration-300 ease-in-ou'>Logout</button>
                                :
                                <NavLink className='nav-items py-3 px-2 ml-5 transition delay-75 duration-300 ease-in-ou' to="/login">Login</NavLink>
                        }

                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
