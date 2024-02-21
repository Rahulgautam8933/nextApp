"use client"

import Button from "@/components/button/Button";
import Card from "@/components/cards/Card";
import Headers from "@/components/headers/Headers";
import Sidebar from "@/components/sidebar/Sidebar";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [product, setProduct] = useState([])

  const [loading, setLoading] = useState(false)



  console.log(product);

  const getProducts = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/api/v1/products/lastFour`);
      setProduct(res?.data?.products)
      setLoading(true)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])



  return (
    <div className="bg-slate-100">


      <div className="hero min-h-screen  backgroung-img">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <h4 className="text-center py-5 font-bold text-2xl md:text-gl">Latest Products</h4>

      {
        !loading ?
          <div style={{ width: "90%" }} className=' container  m-auto    py-10 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2  grid-cols-2 gap-4'>

            {
              Array.from({ length: 4 }).map((_, index) => (
                <div className="flex flex-col gap-4 " key={index}>
                  <div className="skeleton bg-slate-50  h-32 w-full"></div>
                  <div className="skeleton bg-slate-50 h-4 "></div>
                  <div className="skeleton bg-slate-50 h-4 w-full"></div>
                  <div className="skeleton bg-slate-50 h-4 w-full"></div>
                </div>
              ))
            }
          </div> : <div style={{ width: "90%" }} className=' container  m-auto   py-10 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2  grid-cols-2 gap-4'>

            {
              product.map((ele, ind) => {
                return (
                  <>
                    <Card title={ele?.name} thumbnail={ele?.thumbnail?.url} description={ele?.description} price={ele?.price} id={ele?._id} />
                  </>
                )
              })
            }

          </div>


      }






    </div>

  );
}
