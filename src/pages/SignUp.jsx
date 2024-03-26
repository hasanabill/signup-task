import banner from '../assets/left-banner.png'
import { FaGlobeAmericas } from "react-icons/fa";
import { SiTypeform } from "react-icons/si";
// import { HiVideoCamera } from "react-icons/hi2";
import { RiArrowDownSLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { BsMicrosoft } from "react-icons/bs";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdError } from "react-icons/md";


const SignUp = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState('English');
    const [form, setForm] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <>
            <div className="w-[45.6%] h-screen text-white absolute flex flex-col justify-center items-center " >
                <div className="text-center mb-[35px]">
                    <h1 className='text-[36px] leading-[44px]'>Sign up <br /> and come on in</h1>
                </div>
                <img src={banner} alt="banner" />
                <p className='absolute bottom-[24px] mb-[20px] text-[14px]'>© Typeform</p>
            </div>

            <div className="flex flex-col justify-between bg-[#ffffff] lg:w-[55.4%] w-full h-screen absolute right-0 lg:rounded-s-2xl overflow-x-auto">
                <div className='flex justify-between px-[24px] py-[8px] h-[52px]'>
                    <div className='flex items-center gap-1 text-[14px]' onClick={() => setIsOpen(!isOpen)}>
                        <FaGlobeAmericas />
                        {/* <select className='cursor-pointer  px-2 py-2'>
                            <option value="english"><p>English</p></option>
                            <option value="espanol"><p>Espanol</p></option>
                        </select> */}
                        <p className='flex cursor-pointer items-center select-none relative'>{language}<RiArrowDownSLine /></p>
                        <div className={`absolute w-[100px] shadow-lg top-10 left-12 ${isOpen ? 'inline-block' : 'hidden'}`}>
                            <p onClick={() => setLanguage("English")} className='cursor-pointer px-3 py-1 hover:bg-slate-200 select-none'>English</p>
                            <p onClick={() => setLanguage("Espanol")} className='cursor-pointer px-3 py-1 hover:bg-slate-200 select-none'>Espanol</p>
                        </div>

                    </div>
                    <div className='flex items-center gap-2'>
                        <h2 className='text-[14px]'>Already have an account?</h2>
                        <a href='#' className='text-[12px] px-[10px] py-[3px] border border-black rounded-md'>Log in</a>
                    </div>
                </div>

                <div className=' flex flex-col gap-3 justify-center items-center lg:max-w-[542px] max-w-full mx-auto'>
                    <div className='flex gap-2 items-center'>
                        {/* copied the svgs from the website */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="22" fill="none">
                            <path fill="currentColor" fillRule="evenodd" d="M0 5.34C0 1.82 1.39 0 3.72 0c2.34 0 3.73 1.82 3.73 5.34V16c0 3.52-1.4 5.34-3.73 5.34S0 19.52 0 16V5.34ZM25.08 0h-7.7c-6.9 0-7.44 2.98-7.44 6.96l-.01 7.42c0 4.14.52 6.96 7.48 6.96h7.67c6.92 0 7.43-2.97 7.43-6.94V6.97c0-3.99-.53-6.97-7.43-6.97Z" clipRule="evenodd"></path>
                        </svg>
                        <SiTypeform className='text-[100px]' />
                    </div>
                    <h2 className='text-[24px] text-[#5e5e5e] text-center px-16 md:px-0  mb-[24px]'>Get better data with conversational forms, surveys, quizzes & more.</h2>
                    {
                        form ? <>
                            <form className='flex flex-col justify-center items-start gap-2' onSubmit={handleSubmit(onSubmit)}>
                                <input placeholder='Email' className='w-[242px] h-[38px] px-[8px] py-[6px] rounded-md border border-gray-400' type='email' {...register("email", { required: true })} />
                                {errors.email && <span className='text-red-700 text-[14px] flex items-center gap-2'><MdError /> This field cannot be left blank</span>}
                                <input placeholder='Password' className='w-[242px] h-[38px] px-[8px] py-[6px] rounded-md border border-gray-400' type='password' {...register("password", { required: true })} />
                                {errors.password && <span className='text-red-700 text-[14px] flex items-center gap-2'><MdError />This field cannot be left blank</span>}
                                <label className='flex w-[242px] justify-center items-start  gap-1'>
                                    <input type="checkbox" className="checkbox inline" {...register("terms", { required: true })} />
                                    <p className='w-[252px] text-[14px]'>I agree to Typeform’s
                                        <a className='underline' href="#">Terms of Service</a>
                                        ,
                                        <a className='underline' href="#">Privacy Policy</a>
                                        and <a className='underline' href="#">Data Processing Agreement</a>.</p>
                                </label>
                                {errors.terms && <span className='text-red-700 w-[252px] text-[14px] flex gap-2'> <MdError className='text-[23px]' />Please accept the terms and conditions to finish the signup</span>}
                                <div className="collapse w-[242px] text-[14px] collapse-arrow">
                                    <input type="checkbox" />
                                    <div className="collapse-title">
                                        See options
                                    </div>
                                    <div className="collapse-content">
                                        <div className='mb-2'>
                                            <p>Get useful tips, inspiration, and offers via e-communication.</p>
                                            <div className='flex gap-1 items-center'>
                                                <input className='mx-2 radio' type="radio" {...register("newsletter")} />
                                                <label >Yes</label>
                                                <input className='mx-2 radio' type="radio" {...register("newsletter")} />
                                                <label>No</label>
                                            </div>
                                        </div>
                                        <div className='mb-2'>
                                            <p>Tailor Typeform to my needs based on my activity.See Privacy Policy</p>
                                            <div className='flex gap-1 items-center'>
                                                <input className='mx-2 radio' type="radio" {...register("newsletter")} />
                                                <label >Yes</label>
                                                <input className='mx-2 radio' type="radio" {...register("newsletter")} />
                                                <label>No</label>
                                            </div>
                                        </div>
                                        <div className='mb-2'>
                                            <p>Enrich my data with select third parties for more relevant content.See Privacy Policy</p>
                                            <div className='flex gap-1 items-center'>
                                                <input className='mx-2 radio' type="radio" {...register("newsletter")} />
                                                <label >Yes</label>
                                                <input className='mx-2 radio' type="radio" {...register("newsletter")} />
                                                <label>No</label>
                                            </div>
                                        </div>
                                        <p className='text-gray-500'>You can update your preferences in your Profile at any time</p>
                                    </div>
                                </div>
                                <button className='bg-black w-[240px] text-white text-center px-3 py-[8px] rounded-md' type="submit" >Create my free account</button>
                            </form>
                        </> : <>
                            <a href="#" className='flex items-center gap-3 w-[252px] text-center border border-black px-[16px] py-[8px] rounded-lg'><FcGoogle className='text-2xl' />Sign up with Google</a>
                            <a href="#" className='flex items-center gap-3 w-[252px] text-center border border-black px-[16px] py-[8px] rounded-lg'><BsMicrosoft className='text-2xl' />Sign up with Microsoft</a>

                            <h1>OR</h1>

                            <button onClick={() => setForm(true)} className='w-[252px] bg-black text-white text-center px-[16px] py-[8px] rounded-lg'>Sign up with Microsoft</button>
                        </>
                    }
                </div>

                <div className='h-[52px]'></div>
            </div>
        </>
    )
}

export default SignUp