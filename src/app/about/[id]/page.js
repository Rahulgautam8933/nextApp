"use client"
import React, { useRef, useState } from 'react';
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

const Page = () => {

    const path = useParams();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [productCount, setProductCount] = useState(1)
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
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                            </SwiperSlide>
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
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                            </SwiperSlide>
                        </Swiper>

                    </div>

                    <div>
                        <h1 className='text-2xl'>Product name</h1>
                        <h3 className='text-xl my-3'> &#8377; 2200</h3>
                        <p className='my-3'>A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words, it provides all the information and details of your product on your ecommerce site. These product details can be one sentence, a short paragraph or bulleted.</p>
                        <div className='text-xl'>
                            <StarRatings
                                rating={2.5}
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