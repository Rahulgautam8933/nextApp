"use client"

import React, { useRef } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Image from 'next/image'
import Link from 'next/link'
// import Image from './Assets/img/img1.png'

const Headers = () => {


    return (
        <>
            <div className=" flex navbar bg-slate-200 fixed z-40">
                <div className="lg:hidden md:hidden">
                    <Sidebar />
                </div>
                <div className="navbar-start">
                    <a className=" text-xl mx-2">daisyUI</a>
                </div>
                <div className=' navbar-center hidden md:block'>
                    <ul className='flex gap-9'>
                        <li><Link href="/"> Home</Link></li>
                        <li><Link href="/about"> About</Link></li>

                        <div className="dropdown dropdown-center">
                            <button> profile</button>

                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link href="/profile"> profile</Link></li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                        <li><a href="/studentlist"> Student List</a></li>
                        <li><a href="/contactUs"> Contact Us</a></li>
                    </ul>

                </div>
                <div className='navbar-end'>

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">

                                <Image width={100} height={100} src="/Assets/img/img1.png" alt="" />

                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Profile</a></li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Headers