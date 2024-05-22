
import React from 'react';
import { Link } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";


const Navbar = () => {

    const user = false

    return (
        <>
            <div className='flex items-center justify-between px-6 md:px-[200px] py-4 '>

                <div>
                    <h1 className='text-lg md:text-xl font-semibold'><Link to='/'> Creative Blog </Link></h1>
                </div>


                <div className='flex justify-center items-center space-x-0'>
                    <p><IoSearchOutline /></p>
                    <input className=' outline-none px-3' placeholder='Search a Post' type="text" />

                </div>


                <div className='flex justify-center items-center space-x-2 md:space-x-4'>
                    {user ? <h3> <Link to='/create-post'> Your are Logged in Now you can Create Post </Link> </h3> : <h3> <Link to='/login'> Login </Link> </h3>}
                    {user ? <h3> <Link to='/profile'> Your are registerd Now you can see profile </Link> </h3> : <h3> <Link to='/register'> Register </Link> </h3>}
                </div>

            </div>


        </>
    );
};

export default Navbar;