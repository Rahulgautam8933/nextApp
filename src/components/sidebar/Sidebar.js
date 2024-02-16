"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useRef } from 'react'

const Sidebar = () => {

    const pathName = usePathname();

    const drawerRef = useRef(null);

    const closeSidebar = () => {
        if (drawerRef.current) {
            drawerRef.current.checked = false;
        }
    };

    console.log(pathName)

    return (
        <>
            <div className="drawer">
                <div className="" >


                    <input id="my-drawer" type="checkbox" className="drawer-toggle" ref={drawerRef} />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer" className="btn btn-square hover:bg-base-300 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay "></label>
                        <ul className="menu p-4 w-80 min-h-full bg-sky-500 text-base-content">

                            <li className={` ${pathName == '/' ? 'text-primary font-bold ' : ''}`} ><Link href="/" onClick={closeSidebar} >Home</Link></li>
                            <li className={` ${pathName == '/about' ? 'text-primary font-bold ' : ''}`} ><Link href="/about" onClick={closeSidebar} >About Us</Link></li>
                            <li className={` ${pathName == '/profile' ? 'text-primary font-bold ' : ''}`} ><Link href="/profile" onClick={closeSidebar} >Profile</Link></li>
                            <li className={` ${pathName == '/contactUs' ? 'text-primary font-bold ' : ''}`} ><Link href="/contactUs" onClick={closeSidebar} >Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>


            {/* <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                Link with href
            </a>
           
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                    </div>
                    <div class="dropdown mt-3">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            Dropdown button
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div> */}

        </>
    )
}

export default Sidebar