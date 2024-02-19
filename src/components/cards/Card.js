import Image from 'next/image'
import React from 'react'

const Card = ({ title, thumbnail, description, price }) => {

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

            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={thumbnail} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{sliceText(title, 12)}</h2>
                    <h1>&#8377; {price}</h1>
                    <p>{sliceText(description, 30)}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-neutral">Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card