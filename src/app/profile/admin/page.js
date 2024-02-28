import React from 'react'

const takeTime = async () => {
    await new Promise((resolve) => {
        setTimeout(resolve, 3000)
    })
} 

const page = async () => {
    await takeTime()
    return (
        <>
            <div className='bg-base-200'>

                <div className='container m-auto p-2 '>
                    <h1>this is profile admin page</h1>
                </div>
            </div>
        </>
    )
}

export default page