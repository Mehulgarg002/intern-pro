import React from 'react'

const Footer = () => {
    return (

        <footer className="  bottom-0 w-full text-gray-600 body-font ">
            <div className=" container px-5  pb-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <span className="text-xl"><img src="dribble.png" alt="" /></span>
                    </div>
                    <div className="mt-4 text-sm text-gray-900 ">Dribble is the world's leading community for creatives to share, grow and get hired</div>
                    <div className="flex flex-row mt-4 justify-center md:justify-normal ">
                        <div className="text-gray-500 ">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </div>
                        <div className="ml-3 text-gray-500">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </div>
                        <div className="ml-3 text-gray-500">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </div>
                        <div className="ml-3 text-gray-500">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/5 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"><b>For designers</b></h2>
                        <nav className="list-none mb-10 flex flex-col gap-y-3">
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">Go Pro!</div>
                            </li>
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">Explore design work</div>
                            </li>
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">Design blog</div>
                            </li>
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">Overtime podcast</div>
                            </li>
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">Playoffs</div>
                            </li>
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">Weekly Wsarm-up</div>
                            </li>
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">Refer a friend</div>
                            </li>
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">Code of conduct</div>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/5 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"><b>Hire designers</b></h2>
                        <nav className="list-none mb-10 flex flex-col gap-y-3">
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">Post a job opening</div>
                            </li>
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">Post a freelance project</div>
                            </li>
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">Search for Designers</div>
                            </li>
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">Fourth Link</div>
                            </li>
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm "><b>Brands</b></h2>
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">Advertise with us</div>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/5 md:w-1/2 w-full px-4">

                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"><b>Company</b></h2>
                        <nav className="list-none mb-10 flex flex-col gap-y-3">
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">About </div>
                            </li>
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">Careers</div>
                            </li>
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">Support</div>
                            </li>
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">Media kit</div>
                            </li>
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">Testimonials</div>
                            </li>
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">API</div>
                            </li>
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">Terms of Service</div>
                            </li>
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">Privacy policy</div>
                            </li>
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">Cookie policy</div>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/5 md:w-1/2 w-full px-4">

                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"><b>Directories</b></h2>
                        <nav className="list-none mb-10 flex flex-col gap-y-3">
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">Design Jobs</div>
                            </li>
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">Designers for hier</div>
                            </li>
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">Freelancer Designers for hier</div>
                            </li>
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">Tags</div>
                            </li>
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">Places</div>
                            </li>
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm "><b>Design Assets</b></h2>
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">Dribble Marketplace</div>
                            </li>
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">Creative Market</div>
                            </li>
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">Fontspring</div>
                            </li>
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">Font squirrel</div>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/5 md:w-1/2 w-full px-4">

                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"><b>Design Resources</b></h2>
                        <nav className="list-none mb-10 flex flex-col gap-y-3">
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">Freelancing</div>
                            </li>
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">Design Hiring</div>
                            </li>
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">Design portfolio</div>
                            </li>
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">Design Education</div>
                            </li>
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">Creative Process</div>
                            </li>
                            <li>
                                <div className="text-gray-600 hover:text-gray-800">Design Industry Trends</div>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <div className="text-gray-500 text-sm text-center sm:text-left">© 2023 Dribble.All rights reserved
                    </div>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <div className="text-gray-500">
                            <b className='text-black'>20,501,853</b> shots dribbled
                        </div>
                        <img src="bb.png" className='max-w-[14%] bg-gray-100 ml-2' alt="" />
                    </span>
                </div>
            </div>
        </footer>

    )
}

export default Footer


