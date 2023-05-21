import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }


    const navItems = <div className='lg:flex space-x-5'>
        <li><Link className='text-xl font-semibold' to="/">Home</Link></li>
        <li><Link className='text-xl font-semibold' to="/allToy">All Toys</Link></li>
        <li><Link className='text-xl font-semibold' to="/blog">Blog</Link></li>



        {user?.email ?
            <div className='lg:flex space-x-4'>
                <li><Link className='text-xl font-semibold' to="/addToy">Add A Toy</Link></li>
                <li><Link className='text-xl font-semibold' to="/myToys">My Toy</Link></li>
                <button className="btn btn-outline font-bold" onClick={handleLogOut}>Log Out</button>

            </div>

            : <Link to='/login'><button className="btn btn-outline font-bold">Log in</button></Link>
        }

    </div>
    return (
        <div className="navbar bg-blue-500 h-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">
                    <img className='h-20 -mt-4' src="https://rosen-pbl-static-content.s3.amazonaws.com/files/boxes/luOwl-logo.png" alt="" />
                </Link>
                <h2 className='text-4xl font-bold my-auto ml-2'>Toyland</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;