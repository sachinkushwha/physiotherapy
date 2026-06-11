export const Footer = () => {
    return (
        <div className="gap-8 bg-gray-800 text-white  px-4 sm:px-8 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-gray-800 text-white py-8 px-4 sm:px-8">

                {/* Therapies */}
                <div>
                    <h1 className="text-xl sm:text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">
                        Therapies
                    </h1>
                    <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                        <li className="hover:text-green-500 transition">Cupping Therapy</li>
                        <li className="hover:text-green-500 transition">Physiotherapy</li>
                        <li className="hover:text-green-500 transition">Geriatric</li>
                        <li className="hover:text-green-500 transition">Rehabilitation</li>
                        <li className="hover:text-green-500 transition">Diagnostics</li>
                        <li className="hover:text-green-500 transition">Acupuncture</li>
                    </ul>
                </div>

                {/* Social Feed */}
                <div>
                    <h1 className="text-xl sm:text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">
                        Social Feed
                    </h1>
                    <div className="flex gap-4">

                        <a href="https://www.instagram.com/iam_kalimullah?igsh=djFsN2licjRsbm4z&utm_source=qr" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
                            <radialGradient id="IG1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stopColor="#fd5" />
                                <stop offset=".328" stopColor="#ff543f" />
                                <stop offset=".348" stopColor="#fc5245" />
                                <stop offset=".504" stopColor="#e64771" />
                                <stop offset=".643" stopColor="#d53e91" />
                                <stop offset=".761" stopColor="#cc39a4" />
                                <stop offset=".841" stopColor="#c837ab" />
                            </radialGradient>
                            <path fill="url(#IG1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20C42.014,38.383,38.417,41.986,34.017,41.99z" />
                            <radialGradient id="IG2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stopColor="#4168c9" />
                                <stop offset=".999" stopColor="#4168c9" stopOpacity="0" />
                            </radialGradient>
                            <path fill="url(#IG2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20C42.014,38.383,38.417,41.986,34.017,41.99z" />
                            <path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5
    s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"/>
                            <circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />
                            <path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12
    C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"/>
                        </svg>
                        </a>
                        <a href="https://www.facebook.com/share/15kybvbcvL/?mibextid=wwXIfr" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
                            <path fill="#1877F2" d="M24 4C12.96 4 4 12.96 4 24c0 9.96 7.28 18.22 16.8 19.76V29.64h-5.04v-5.64h5.04v-4.28c0-5 3-7.76 7.52-7.76 2.16 0 4.4.4 4.4.4v4.88h-2.48c-2.44 0-3.2 1.52-3.2 3.08v3.68h5.44l-.88 5.64h-4.56V43.8C36.72 42.24 44 33.96 44 24c0-11.04-8.96-20-20-20z" />
                            <path fill="#FFF" d="M29.52 29.64l.88-5.64h-5.44v-3.68c0-1.56.76-3.08 3.2-3.08h2.48v-4.88s-2.24-.4-4.4-.4c-4.52 0-7.52 2.76-7.52 7.76v4.28h-5.04v5.64h5.04V43.8c1.04.16 2.12.24 3.2.24s2.16-.08 3.2-.24V29.64h4.56z" />
                        </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/kalimullah-siddique-806881271?trk=contact-info" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-blue-700" viewBox="0 0 24 24">
                            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6V24h-4v-8.2c0-2-.03-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.5V24h-4V8z" />
                        </svg>
                        </a>
                    </div>
                </div>

                {/* Clinic Address */}
                <div>
                    <h1 className="text-xl sm:text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">
                        Clinic Address
                    </h1>
                    <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                        <li className="hover:text-green-500 transition">Home visit</li>
                        <li className="hover:text-green-500 transition">Mon - Sat: 9AM - 8PM</li>
                        <li className="hover:text-green-500 transition">Sunday: Closed</li>
                        <li className="hover:text-green-500 transition">Emergency: 24x7</li>
                    </ul>

                </div>

                {/* Extra Column (if needed) */}
                <div>
                    <h1 className="text-xl sm:text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">
                        Contact Info
                    </h1>
                    <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                        {/* <li className="hover:text-green-500 transition">4958 Norman Street, Los Angeles, CA 90042</li> */}
                        <li className="hover:text-green-500 transition"><a href="tel:+917546921395">📞+91 7546921395</a></li>
                        {/* <li className="hover:text-green-500 transition">yaha ke liye bhi ek number bata de bhai</li> */}
                        <li className="hover:text-green-500 transition"><a href="mailto:Kalimullahsiddique5@gmail.com">Kalimullahsiddique5@gmail.com</a></li>
                    </ul>
                </div>

            </div>
            <div className="border-b border-gray-600 w-full">
            </div>
            <div className="w-full flex-col text-center text-sm text-white h-10 flex justify-center items-center">
                <p> © {new Date().getFullYear()} drkalimphysio Clinic. All rights reserved.</p>
                <p>Developed by sachin kushwaha</p>
            </div>
        </div>
    );
};