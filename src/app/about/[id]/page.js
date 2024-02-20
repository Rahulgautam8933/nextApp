"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import ReactStars from "react-rating-stars-component";
import { IoClose } from "react-icons/io5";
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import StarRatings from 'react-star-ratings';
import { useParams, usePathname } from 'next/navigation';
import axios from 'axios';

const Page = () => {

    const path = useParams();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [productCount, setProductCount] = useState(1)
    const [singleProduct, setSingleProduct] = useState()
    const [img, setImg] = useState([])

    console.log(singleProduct);
    console.log(img);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");

    const reviewData = {
        productId: path.id,
        comment,
        rating,
    };

    const dicresecount = () => {
        if (productCount === 1) {
            setProductCount(1)
        }
        else {
            setProductCount(productCount - 1)
        }
    }


    const getSingleProduct = async () => {
        try {
            const res = await axios.get(`http://localhost:4000/api/v1/product/${path.id}`)
            setSingleProduct(res?.data?.product);
            setImg(res?.data?.product?.images)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSingleProduct();
    }, [])




    return (
        <>

            <div className='bg-base-300'>
                <div style={{ width: "90%" }} className='container m-auto grid   md:grid-cols-2  grid-cols-1 gap-4  py-20'>

                    <div >
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                                borderRadius: "12px",

                            }}
                            loop={true}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}

                        >

                            {
                                img.map((ele, ind) => {
                                    return (
                                        <>
                                            <SwiperSlide>
                                                <img src={ele?.url} />
                                            </SwiperSlide>
                                        </>
                                    )
                                })
                            }

                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                        >
                            {
                                img.map((ele, ind) => {
                                    return (
                                        <>
                                            <SwiperSlide>
                                                <img src={ele?.url} />
                                            </SwiperSlide>
                                        </>
                                    )
                                })
                            }

                        </Swiper>

                    </div>

                    <div>
                        <h1 className='text-2xl'>{singleProduct?.name}</h1>
                        <h3 className='text-xl my-3'> &#8377; {singleProduct?.price}</h3>
                        <p className='my-3'>{singleProduct?.description}</p>
                        <div className='text-xl'>
                            <StarRatings
                                rating={singleProduct?.ratings}
                                starRatedColor="orange"
                                // changeRating={this.changeRating}
                                numberOfStars={5}
                                name='rating'
                                starDimension="30px"
                            />
                        </div>

                        <div className='my-6'>
                            <button className='btn btn-neutral text-lg' onClick={dicresecount}> -</button>
                            <input type="text" value={productCount} className="input  w-12 text-center p-0 mx-3 input-success " disabled />
                            <button className='btn btn-neutral text-lg' onClick={() => setProductCount(productCount + 1)}> +</button>
                        </div>


                        <label htmlFor="my_modal_6" className="btn">Write a Reviews</label>

                        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                        <div className="modal" role="dialog">
                            <div className="modal-box">

                                <div className="modal-action mt-0">
                                    <label htmlFor="my_modal_6" className="btn text-xl"><IoClose /></label>
                                </div>
                                <div className='flex flex-col'>

                                    <p>Rating</p>

                                    <ReactStars
                                        count={5}
                                        onChange={(newRating) => setRating(newRating)}
                                        size={44}
                                        activeColor="#ffd700"
                                    />

                                    <p className='mt-5'>Comment</p>
                                    <textarea name='comment' value={comment} onChange={(e) => setComment(e.target.value)} className="textarea textarea-bordered mt-2" rows="5" placeholder="Bio"></textarea>

                                    <div className='text-end mt-3'>
                                        <button className='btn btn-base-400'>Submit</button>
                                    </div>
                                </div>


                            </div>
                        </div>



                    </div>

                </div>


                <h2 className='text-center text-2xl text-yellow-600 '>REVIEWS & RATING</h2>




            </div>

        </>
    )
}

export default Page