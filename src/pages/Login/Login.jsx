import { handler } from 'daisyui';
import React from 'react';

const Login = () => {

const handleLogin = event =>{
    event.preventDefault();
}

    return (
        <div className="hero h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse space-x-20">
                <div className="text-center lg:text-left">
                    <img className='h-screen' src="https://app.dubbpie.com/assets/images/login-img.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold mb-5 text-center">Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-outline" type="submit" value="Login" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;