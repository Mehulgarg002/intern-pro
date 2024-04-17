import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import authContext from '../useContext/authContext';
import { useNavigate } from 'react-router-dom';

const Designer = () => {
    let navigate = useNavigate();
    let { signedUp, signedIn } = useContext(authContext);

    useEffect(() => {
        if (signedUp === true && signedIn === false && localStorage.getItem('token')) {

        }
        else if (signedUp === false && signedIn === true && localStorage.getItem('token')) {
            navigate('/')
        }
        else {
            navigate("/signin")
        }
    },)

    const onSubmit = () =>{
        navigate('/')
    }

    const [selectedOption, setSelectedOption] = useState({
        First: false,
        Seconed: false,
        Third: false
    });

    const handleChange1 = () => {
        setSelectedOption({
            ...selectedOption,
            First: !selectedOption.First
        });
    };

    const handleChange2 = () => {
        setSelectedOption({
            ...selectedOption,
            Seconed: !selectedOption.Seconed
        });
    };

    const handleChange3 = () => {
        setSelectedOption({
            ...selectedOption,
            Third: !selectedOption.Third
        });
    };

    return (
        <div>
            <div className='mt-6 ml-6 flex'>
                <img src="dribble.png" alt="" />
                <button className='ml-2 h-[44px] w-[44px] bg-gray-100 rounded-lg font-semibold'><Link to="/profile">&lt;</Link></button>
            </div>
            <div className="text-center my-4">
                <h1 className='text-4xl font-bold'>What brings you to Dribble?</h1>
                <p className='mt-3 text-gray-600'>Select the best options that best describe you. Don't worry,you can explore other options later.</p>
            </div>
            <div className="w-3/4 mx-auto grid md:grid-cols-3 py-14 md:mt-12">
                <div className={`mx-2 my-2 rounded-xl border font-bold text-xl text-center border-gray-300 px-10 gap-y-6 ${selectedOption.First === true ? 'max-h-80 border-2 border-pink-600 ' : ''}`}>
                    <img src="s1.png" className={`object-cover object-center mx-auto max-h-[40%] mt-10 ${selectedOption.First === true ? '-translate-y-28' : ''} `} alt='' />
                    <div className={` ${selectedOption.First === true ? '-translate-y-24' : 'mt-5'}`}>  I'm designer looking to &nbsp;&nbsp;&nbsp;share my work </div>
                    {selectedOption.First === true ? <p className='text-sm text-gray-500 text-center font-medium -translate-y-20 tracking-wide w-44 mx-auto'>
                        with over 7 million shots from a vast
                        community of designers,Dribble is
                        the leading source for design
                        inspiration
                    </p> : ""}
                    <label className={`relative flex items-center p-3 rounded-full justify-center cursor-pointer ${selectedOption.First === true ? '-translate-y-20' : ''} `} htmlFor="customStyle">
                        <input
                            type="checkbox"
                            className="form-checkbox before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-full border border-gray-300  transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-300 checked:bg-pink-500 checked:before:bg-pink-500 hover:scale-105 hover:before:opacity-0"
                            checked={selectedOption.First}
                            onChange={handleChange1}
                        />
                        <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                        </span>
                    </label>
                </div>
                <div className={`mx-2 my-2 rounded-xl border font-bold text-xl text-center border-gray-300 px-10 ${selectedOption.Seconed === true ? 'max-h-80 border-2 border-pink-600 mt-12 lg:mt-0' : ''}`}>
                    <img src="s2.png" className={`object-cover object-center mx-auto max-w-[78%] max-h-[40%] mt-10 ${selectedOption.Seconed === true ? '-translate-y-28' : ''}`} alt='' />
                    <div className={` ${selectedOption.Seconed === true ? '-translate-y-24' : 'mt-5'}`}>I'm looking to hire a &nbsp;&nbsp; designer</div>
                    {selectedOption.Seconed === true ? <p className='text-sm text-gray-500 text-center font-medium -translate-y-20 tracking-wide w-44 mx-auto'>
                        with over 7 million shots from a vast
                        community of designers,Dribble is
                        the leading source for design
                        inspiration
                    </p> : ""}
                    <label className={`relative flex items-center p-3 rounded-full justify-center cursor-pointer ${selectedOption.Seconed === true ? '-translate-y-20' : ''} `} htmlFor="customStyle">
                        <input
                            type="checkbox"
                            className="form-checkbox before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-full border border-gray-300  transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-300 checked:bg-pink-500 checked:before:bg-pink-500 hover:scale-105 hover:before:opacity-0"
                            checked={selectedOption.Seconed}
                            onChange={handleChange2}
                        />
                        <span className="form-radio absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                        </span>
                    </label>
                </div>
                <div className={`mx-2 my-2 rounded-xl border font-bold text-xl text-center border-gray-300 px-10 ${selectedOption.Third === true ? 'max-h-80 border-2 border-pink-600 mt-12 lg:mt-0' : ''}`}>
                    <img src="s3.png" className={`object-cover object-center mx-auto max-w-[78%] max-h-[40%] mt-10 ${selectedOption.Third === true ? '-translate-y-28' : ''}`} alt='' />
                    <div className={` ${selectedOption.Third === true ? '-translate-y-24' : 'mt-5'}`}>I'm looking for design inspiration</div>
                    {selectedOption.Third === true ? <p className='text-sm text-gray-500 text-center font-medium -translate-y-20 tracking-wide w-44 mx-auto'>
                        with over 7 million shots from a vast
                        community of designers,Dribble is
                        the leading source for design
                        inspiration
                    </p> : ""}
                    <label className={`relative flex items-center p-3 rounded-full justify-center cursor-pointer ${selectedOption.Third === true ? '-translate-y-20' : ''} `} htmlFor="customStyle">
                        <input
                            type="checkbox"
                            className="form-checkbox before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-full border border-gray-300  transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-300 checked:bg-pink-500 checked:before:bg-pink-500 hover:scale-105 hover:before:opacity-0"
                            checked={selectedOption.Third}
                            onChange={handleChange3}
                        />
                        <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                        </span>
                    </label>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-8 mb-2 lg:mb-0">
                {selectedOption.First === false && selectedOption.Seconed === false && selectedOption.Third === false ? "" :
                    <h1 className='font-bold'>Anything else? You can select multiple</h1>}
                <button onClick={onSubmit} className={` text-white px-12 py-1 rounded-md mt-3 ${selectedOption.First === false && selectedOption.Seconed === false && selectedOption.Third === false ? "bg-pink-100" : "bg-pink-500 hover:bg-pink-200"}`} disabled={selectedOption.First === false && selectedOption.Seconed === false && selectedOption.Third === false | ""}>Finish</button>
                <Link to="/profile">{!(selectedOption.First === false && selectedOption.Seconed === false && selectedOption.Third === false) && <button className='text-sm text-gray-400 font-bold mt-3 flex'>Or Press Return</button>}</Link>
            </div>
        </div>
    )
}

export default Designer






