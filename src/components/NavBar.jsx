import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { BsBagXFill } from "react-icons/bs";
import { LiaCircleSolid } from "react-icons/lia";
const NavBar = () => {
    return (

        <nav className='md:flex md:justify-start flex justify-between'>

            <div className='ml-2 flex title-font font-medium items-center mt-2'>
                <span className="ml-3 text-xl"><img src="dblack.png" alt="" /></span>
            </div>

            <div className='hidden md:ml-5 md:flex mt-2 items-center  '>
                <div className="mr-5 text-sm text-gray-500 hover:text-gray-900"><b>Inspiration</b></div>
                <div className="mr-5 text-sm text-gray-500 hover:text-gray-900"><b>Find Work</b></div>
                <div className="mr-5 text-sm text-gray-500 hover:text-gray-900"><b>Learn Design</b></div>
                <div className="mr-5 text-sm text-gray-500 hover:text-gray-900"><b>Go Pro</b></div>
                <div className="mr-5 text-sm text-gray-500 hover:text-gray-900"><b>Hire Designers</b></div>
            </div>

            <div className='flex md:flex md:ml-auto mr-2 items-center mt-2'>
                <button className="inline-flex bg-gray-100 border-0 py-2 px-3 focus:outline-none hover:bg-gray-200 rounded text-base ">
                    <div> <AiOutlineSearch className="mr-1 " style={{ color: '#aaa7a7', fontSize: '20px' }} />
                    </div>
                    Search </button>
                <div className='ml-2'>
                    <BsBagXFill style={{ color: '#aaa7a7', }} />
                </div>
                <div className='ml-2'>
                    <LiaCircleSolid style={{ color: '#aaa7a7', fontSize: '30px' }} />
                </div>
                <button className='bg-pink-500 border-0 py-2 px-3 focus:outline-none hover:bg-pink-300 rounded text-base text-white ml-4'>Upload</button>
            </div>

        </nav>
    )
}

export default NavBar




// import React from 'react'
// import { AiOutlineSearch } from "react-icons/ai";

// const NavBar = () => {
//     return (
//         <header className="text-gray-600 body-font">
//             <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row ">
//                 <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-pink-500 rounded-full" viewBox="0 0 24 24">
//                         <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//                     </svg>
//                     <span className="ml-3 text-xl">Dribble</span>
//                 </div>
//                 <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4  md:border-gray-400	flex flex-wrap items-center text-base justify-center">
//                     <div className="mr-5 hover:text-gray-900">Inspiration</div>
//                     <div className="mr-5 hover:text-gray-900">Find Work</div>
//                     <div className="mr-5 hover:text-gray-900">Learn Design</div>
//                     <div className="mr-5 hover:text-gray-900">Go Pro</div>
//                     <div className="mr-5 hover:text-gray-900">Hire Designers</div>
//                 </nav>
//                 <div className='-top-0'>
//                 <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
//                     <div> <AiOutlineSearch className="mr-1" style={{ color: '#aaa7a7', fontSize: '20px'}} /> </div>
//                         Search
//                 </button>
//                 <button className='ml-4 py-1 px-3 text-white rounded-md bg-pink-500'>Upload</button>
//                 </div>
//             </div>
//         </header>
//     )
// }

// export default NavBar

