import React from 'react'

const Card = ({ title, thumbnail, description }) => {
    return (
        <>

            <div className='m-2 z-0'>
                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img className='aspect-video  bg-cover' src={thumbnail} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>{description}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card