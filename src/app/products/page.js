"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

import Card from '@/components/cards/Card';
const Page = () => {


    // const userData1 = [
    //     {
    //         title: "title", thumbnail: "https://img.freepik.com/free-photo/beautiful-view-mountains-covered-snow-annapurna-conservation-area-chhusang-nepal_181624-15705.jpg?size=626&ext=jpg&ga=GA1.1.1431884988.1699449062&semt=sph", description: "discription"
    //     }
    // ]

    const [userData, setUserData] = useState([]);

    const [number, senumber] = useState(10)

    const [loading, setLoading] = useState(false)
    console.log(userData);
    const getData = async () => {
        try {
            const res = await axios.get('https://dummyjson.com/products');
            setUserData(res?.data?.products)
            setLoading(true)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <div className=' z-0 bg-base-200'>

                <div className='container m-auto p-2 '>
                    <h1 className='about-heading'> using custom css</h1>


                </div>

                {
                    !loading ?

                        <div style={{ width: "90%" }} className=' container  m-auto   my-10 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2  grid-cols-2 gap-4'>

                            {
                                Array.from({ length: 8 }).map((_, index) => (
                                    <div className="flex flex-col gap-4 w-52" key={index}>
                                        <div className="skeleton h-32 w-full"></div>
                                        <div className="skeleton h-4 w-28"></div>
                                        <div className="skeleton h-4 w-full"></div>
                                        <div className="skeleton h-4 w-full"></div>
                                    </div>
                                ))
                            }
                        </div> : <div style={{ width: "90%" }} className=' container  m-auto   my-10 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2  grid-cols-2 gap-4'>

                            {
                                userData.map((ele, index) => {
                                    return (
                                        <>
                                            <Card title={ele?.title} thumbnail={ele?.thumbnail} description={ele?.description} />
                                        </>
                                    )
                                })
                            }
                        </div >
                }
            </div >
        </>
    )
}

export default Page