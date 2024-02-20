"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

import Card from '@/components/cards/Card';
const Page = () => {

    const [userData, setUserData] = useState([]);

    const [number, senumber] = useState(10)

    const keyword = ""

    const page = 1
    const amount = [0, 25000]

    const [loading, setLoading] = useState(false)
    console.log(userData);
    const getData = async () => {
        try {
            const res = await axios.get(`http://localhost:4000/api/v1/products?keyword=${keyword}&price[gt]=${amount[0]}&price[lt]=${amount[1]}&page=${page}`);
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

                <div style={{ width: "90%" }} className=' m-auto my-10 grid md:grid-cols-12 grid-cols-1 gap-1 '>

                    <div className='col-span-2 relative'>
                        <div>

                            <p>Search</p>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className='my-3'>
                            <p>selcet</p>
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Who shot first?</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                        </div>

                    </div>
                    <div className='col-span-10 relative'>


                        {
                            !loading ?

                                <div className='my-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  grid-cols-2 gap-4'>
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
                                </div> : <div style={{ width: "90%" }} className=' container m-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  grid-cols-2 gap-4'>

                                    {
                                        userData.map((ele, index) => {
                                            return (
                                                <>
                                                    <Card title={ele?.name} thumbnail={ele?.thumbnail?.url} description={ele?.description} price={ele?.price} id={ele?._id} />
                                                </>
                                            )
                                        })
                                    }
                                </div >
                        }

                    </div>

                </div>


            </div >
        </>
    )
}

export default Page