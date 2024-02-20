import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Card = ({ title, thumbnail, description, price, id }) => {

    const maxLength = 50;
    function sliceText(text, maxLength) {
        // If the text length is greater than the maximum length, slice it and append '...' at the end
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text; // Return the original text if it's within the maximum length
    }


    return (
        <>

            <Link href={`/about/${id}`}>
                <div className="  card  bg-base-100 shadow-xl">
                    <figure><img src={thumbnail} alt="Shoes" /></figure>
                    <div className="md:p-3 p-3 card-body">
                        <h2 className="card-title md:text-lg sm:text-base  text-xs">{sliceText(title, 12)}</h2>
                        <h1 className='md:text-lg sm:text-base  text-xs'>&#8377; {price}</h1>
                        <p className='md:text-lg sm:text-base  text-xs'>{sliceText(description, 30)}</p>
                        <div className="card-actions justify-end">
                            <button className=" px-3 btn btn-neutral md:text-lg sm:text-base  text-xs">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Card