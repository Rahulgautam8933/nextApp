import Button from "@/components/button/Button";
import Card from "@/components/cards/Card";
import Headers from "@/components/headers/Headers";
import Sidebar from "@/components/sidebar/Sidebar";
import Image from "next/image";

export default function Home() {


  const latestProduct = [
    {
      id: "1",
      title: "product1",
      description: "product discription1",
      price: "1200",
      qyt: "12",
      thumbnail: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
    {
      id: "2",
      title: "product2",
      description: "product discription2",
      price: "1200",
      qyt: "12",
      thumbnail: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
    {
      id: "3",
      title: "product3",
      description: "product discription3",
      price: "1200",
      qyt: "12",
      thumbnail: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
    {
      id: "4",
      title: "product4",
      description: "product discription4",
      price: "1200",
      qyt: "12",
      thumbnail: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    },
  ]


  return (
    <>
      <div className="hero min-h-screen   backgroung-img">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <h4 className="text-center my-5 font-bold text-2xl md:text-gl">Latest Products</h4>

      <div className=' container  m-auto   my-10 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2  grid-cols-2 gap-4'>



        {
          latestProduct.map((ele, ind) => {
            return (
              <>
                <Card title={ele?.title} thumbnail={ele?.thumbnail} description={ele?.description} price={ele?.price} id={ele?.id} />
              </>
            )
          })
        }

      </div>




    </>

  );
}
