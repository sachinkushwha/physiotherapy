"use client"
import { useEffect, useState } from 'react';
// import { data, Link } from 'react-router-dom';
import Link from 'next/link';
// import { useAuth0 } from '@auth0/auth0-react';
// import { authentication } from '../services/backend';
export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const { logout, isAuthenticated, getAccessTokenSilently } = useAuth0();

    // useEffect(() => {
    //     async function cal() {
    //         const Token = await getAccessTokenSilently();
    //         await authentication(Token).then((data) => {
    //         })
    //     }
    //     cal();

    // })

    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full bg-white shadow z-50">
            <div className="w-[97%] mx-auto flex flex-wrap items-center justify-between py-4">
                <a href="https://wa.me/917546921395" target="_blank" className="fixed bottom-5 right-5 z-50">
                    <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="WhatsApp" className="w-12 h-12 hover:scale-110 transition-transform duration-300" />
                </a>


                {/* Logo */}
                <Link href="/" className="font-bold text-1xl text-gray-800">Dr.Kalimullah</Link>

                {/* Mobile Hamburger */}
                {
                    !isOpen && (
                        <a href="tel:+917546921395" className="text-gray-700 hover:text-blue-600 md:hidden">📞+91 7546921395</a>
                    )
                }

                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="space-y-1">
                        <span className="block w-6 h-0.5 bg-black"></span>
                        <span className="block w-6 h-0.5 bg-black"></span>
                        <span className="block w-6 h-0.5 bg-black"></span>
                    </div>
                </button>

                {/* Desktop Links */}
                <ul className="hidden md:flex gap-4 text-lg">
                    <li><Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
                    <li><Link href="/servicelist" className="text-gray-700 hover:text-blue-600">Service List</Link></li>
                    <li><Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link></li>
                    <li><a href="tel:+917546921395" className="text-gray-700 hover:text-blue-600">📞+91 7546921395</a></li>
                    {/* {isAuthenticated && <li><button className="text-gray-700 hover:text-blue-600" onClick={() => { logout({ logoutParams: { returnTo: window.location.origin } }) }}>logout</button></li>} */}


                </ul>

                {/* Mobile Links */}
                {isOpen && (
                    <ul className="w-full mt-4 flex flex-col gap-3 text-lg md:hidden">
                        <li><Link href="/" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link></li>
                        <li><Link href="/service" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Service List</Link></li>
                        <li><Link href="/about" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link></li>
                        <li><a href="tel:+917546921395" className="text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>📞+91 7546921395</a></li>
                        {/* {isAuthenticated && <li><button className="text-gray-700 hover:text-blue-600" onClick={() => { logout({ logoutParams: { returnTo: window.location.origin } }) }}>logout</button></li>} */}
                    </ul>
                )}
            </div>
        </nav>
    );
};
