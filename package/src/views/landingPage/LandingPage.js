import React, { useState } from 'react';
import regress_logo from '../../assets/images/regress_logo.png';
import landing_page from '../../assets/images/landing_page.jpeg';
import 'tailwindcss/tailwind.css';

const LandingPage = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="overflow-x-hidden bg-white">
            <header className="py-2 md:py-4">
                <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="flex-shrink-0">
                            <a
                                href="#/app"
                                title=""
                                className="flex rounded outline-none"
                            >
                                <img
                                    className="w-auto h-16 lg:h-24"
                                    src={regress_logo}
                                    alt=""
                                />
                            </a>
                        </div>

                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="text-gray-900"
                                onClick={() => setExpanded(!expanded)}
                                aria-expanded={expanded}
                            >
                                {expanded ? (
                                    <svg
                                        className="w-7 h-7"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="w-7 h-7"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>

                        <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
                            <a
                                href="#/login"
                                title=""
                                className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-blue-500 border border-transparent rounded-xl hover:bg-blue-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                role="button"                            >
                                Sign in
                            </a>
                            <a
                                href="#/signup"
                                title=""
                                className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-blue-500 hover:text-white focus:text-white hover:border-white focus:border-gray-900"
                                role="button"
                            >
                                Sign up
                            </a>
                        </div>
                    </div>

                    {expanded && (
                        <nav>
                            <div className="px-1 py-8">
                                <div className="grid gap-y-7">
                                    <a
                                        href="#/login"
                                        title=""
                                        className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-blue-500 border border-transparent rounded-xl hover:bg-blue-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                        role="button"
                                    >
                                        Sign in
                                    </a>
                                    <a
                                        href="#/signup"
                                        title=""
                                        className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-blue-500 focus:bg-blue-500 hover:text-white focus:text-white hover:border-white focus:border-white"
                                        role="button"
                                    >
                                        Sign up
                                    </a>
                                </div>
                            </div>
                        </nav>
                    )}
                </div>
            </header>

            <section className="pt-6 bg-white sm:pt-8">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h1 className="px-6 text-lg text-gray-600 font-inter">
                            Smart KPIs Manager for Teachers and Students
                        </h1>
                        <p className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
                            Make your
                            <span className="relative inline-flex sm:inline px-2">
                                <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                                <span className="relative"> KPIs </span>
                            </span>
                            easy to manage
                        </p>

                        <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                            <a
                                href="#/login"
                                title=""
                                className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-blue-500 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                role="button"
                            >
                                Try it now !
                            </a>

                            <a
                                href="#/app"
                                title=""
                                className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-blue-500 hover:text-white hover:border-white"
                                role="button"
                            >
                                <svg
                                    className="w-5 h-5 mr-2"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    stroke="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                                        strokeWidth="2"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                Watch demo
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-4 pb-12 bg-white">
                    <div className="relative">
                        <div className="absolute inset-0 h-2/3 bg-white"></div>
                        <div className="relative mx-0">
                            <div className="lg:max-w-5xl lg:mx-auto">
                                <img
                                    className="transform scale-90"
                                    src={landing_page}
                                    alt=""

                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;