import Link from 'next/link'
import React from 'react'

const Login = () => {
    return (
        <>
            <div className='bg-base-200'>

                <div style={{ width: "90%" }} className=' m-auto pt-10'>

                    <div className="hero min-h-screen ">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="text-center lg:text-left">
                                <h1 className="text-5xl font-bold">Login now!</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            </div>
                            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <form className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" className="input input-bordered" required />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control ">
                                        <button className="btn btn-neutral">Login</button>
                                    </div>
                                    <p className='text-center'>Create an Account ? <Link className='text-primary' href="/signUp"> Sign Up </Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login