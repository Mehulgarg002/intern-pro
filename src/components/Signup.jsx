import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import authContext from '../useContext/authContext';


const Signup = () => {
    let { setSignedUp } = useContext(authContext);
    let navigate = useNavigate();
    const [cred, setCred] = useState({ name: "", username: "", email: "", password: "" })

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://intern-pro-10.onrender.com/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            }, body: JSON.stringify({ name: cred.name, username: cred.username, email: cred.email, password: cred.password })
        });
        // console.log(cred)
        const json = await response.json()
        // console.log(json)
        if (json) {
            setSignedUp(true)
            localStorage.setItem('token', JSON.stringify(json))
            navigate("/profile");
        }
        else {
            setSignedUp(false)
            alert("invalid credentials")
        }
    }
    const onChange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value })
    };
    return (
        <form onSubmit={handleOnSubmit}>
            <section className="text-gray-600 body-font">
                <div className=" lg:overflow-y-hidden mx-auto flex flex-wrap">
                    <div className="lg:w-1/3 w-full mb-10 lg:mb-0  overflow-hidden">
                        <img alt="feature" className="object-cover object-center h-[100vh] " src="dribblein.png" />
                    </div>
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-2/3 lg:pl-12 lg:text-left text-center">
                        <p className='lg:self-end lg:mr-4'><b>Already a member? <Link to="/signin" className='text-purple-700' href="#">Sign In</Link></b></p>
                        <section className="text-gray-600 body-font relative">
                            <div className="container pt-8 pb-[6rem] px-5 mx-auto">
                                <div className="flex flex-col text-center w-full mb-12">
                                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"><b>Sign Up to Dribble</b></h1>
                                    {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p> */}
                                </div>
                                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                                    <div className="flex flex-wrap -m-2">
                                        <div className="p-2 w-1/2">
                                            <div className="relative">
                                                <label htmlFor="name" className="form-label leading-7 text-lg text-gray-800"><b>Name</b></label>
                                                <input type="text" id="name" name="name" onChange={onChange} value={cred.name} className="form-control w-full bg-gray-200 bg-opacity-50 rounded-md  focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>
                                        <div className="p-2 w-1/2">
                                            <div className="relative">
                                                <label htmlFor="username" className="form-label leading-7 text-lg text-gray-800"><b>Username</b></label>
                                                <input type="username" id="username" name="username" onChange={onChange} value={cred.username} className="form-control w-full bg-gray-200 bg-opacity-50 rounded-md  focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>
                                        <div className="p-2 w-full">
                                            <div className="relative">
                                                <label htmlFor="email" className="form-label leading-7 text-lg text-gray-800"><b>Email</b></label>
                                                <input type="email" id="email" name="email" onChange={onChange} value={cred.email} className="form-control w-full bg-gray-200 bg-opacity-50 rounded-md  focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>
                                        <div className="p-2 w-full">
                                            <div className="relative">
                                                <label htmlFor="password" className="form-label leading-7 text-lg text-gray-800"><b>Password</b></label>
                                                <input type="password" id="password" name="password" onChange={onChange} value={cred.password} className="form-control w-full bg-gray-200 bg-opacity-50 rounded-md  focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>
                                        <div className="p-2 w-full flex">
                                            <div className="relative ">
                                                <input type="checkbox" id="myCheckbox" name="myCheckbox" className="form-checkbox h-5 w-5 text-pink-600 border-gray-300 rounded focus:ring-pink-500" />
                                            </div>
                                            <label htmlFor="myCheckbox" className="ml-2 text-gray-700">Creating an account means you're okay with our <button className='text-purple-700'>Terms of Service</button>,<button className='text-purple-700'>Privacy Policy</button>and our defualt <button className='text-purple-700'>Notification Settings</button> .</label>
                                        </div>
                                        <div className="p-2 w-full flex mt-5 justify-center md:justify-start">
                                            <div className="relative "><button className='px-14 py-3 text-white bg-pink-600 hover:bg-pink-300 rounded-lg'>Create Account</button>
                                            </div>
                                        </div>
                                        <div className="p-2 w-full flex">
                                            <div className="relative text-xs">
                                                The site is protected by reCAPTCHA and the Google <br /> <button className='text-purple-700'>Privacy Policy</button> and <button className='text-purple-700'>Terms of Service</button> .
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>

                    </div >
                </div >
            </section >
        </form>
    )
}

export default Signup