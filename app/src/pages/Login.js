import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex flex-wrap justify-center mt-20'>
            <div className='w-full max-w-lg'>
                <h1 className='font-extrabold text-lg pb-6 mb-5 text-center'>LOGIN</h1>
                <form action='' className='shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                    <div className='mb-6'>
                        <label htmlFor='username' className='block text-gray-700 text-sm font-bold mb-2'>
                            Username
                        </label>
                        <input type='text' className='shadow appearance-none border rounded-w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Username' />
                    </div>

                    <div className='mb-6'>
                        <label htmlFor='password' className='block text-gray-700 text-sm font-bold mb-2'>
                            Password
                        </label>
                        <input type='password' className='shadow appearance-none border rounded-w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Password' />
                    </div>

                    <div className='flex items-center justify-between'>
                        <Link to='/'>
                            <button className='bg-black text-white font-bold py-2 px-4 rounded hover:bg-[#4285F6] duration-500 focus:outline-none focus:shadow-outline'>
                                Sign In
                            </button>
                        </Link>
                        <Link to='/'>
                            <h5 className='inline-block align-baseline font-bold text-sm text-black hover:text-[#4285F6]'>Forgot Password</h5>
                        </Link>
                    </div>
                    

                </form>
            </div>
        </div>
    );
}

export default Login