import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import logo from '../../assets/image/R_energy.png'
// import RefreshTwoToneIcon from '@mui/icons-material/RefreshTwoTone';
// import LoadingButton from '@mui/lab/LoadingButton';

const Login = () => {

       const navigate = useNavigate();
  return (
 
    <>
    <Helmet>
      Login to Ripple Finance</Helmet>


    <div className='text-xl  mt-10 grid place-items-center text-[#653434]'>
   <div className='flex gap-2'>
   <img src={logo} className='w-16' alt='Ripple' /> 
   <span className='mt-4'>Ripple Finance</span>
     </div>
      <div className="flex flex-col justify-center mt-10 overflow-hidden flex-wrap ">
            <div className="p-6 m-auto bg-white rounded-md shadow-lg md:w-[30rem]">
                <h1 className="text-xl  text-center text-[#653434]">
                   LOGIN
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2  bg-white border   focus:outline-none"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                       <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2  bg-white border focus:outline-none"
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-[#653434] hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button 
                        onClick={()=> navigate('/app/overview')}
                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#653434] rounded-md hover:bg-[#906161] focus:outline-none focus:bg-[#905656]">
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-[#653434] hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </div>
        </div>

      </div>
    
    </>
  )
}

export default Login;