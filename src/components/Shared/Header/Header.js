import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hamburgerMenu from '../../../images/header/hamburger-menu.png';
import logo from '../../../images/logos/logo (1).png';
const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <div >
            <nav className="relative flex flex-wrap items-center justify-between px-2 pt-3 nav-font">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <span
                            className="flex items-center"
                        >
                            <Link to="/"><img src={logo} className="my-2" alt="logo" /></Link>
                        </span>
                        <button
                            className=" inline-flex items-center justify-center p-2 rounded-md text-white-600   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white lg:hidden"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <img
                                className="block h-8 w-8"
                                src={hamburgerMenu}
                                alt=""
                            />
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <div className="flex flex-col lg:flex-row lg:ml-auto lg:px-10 text-md">
                            <Link
                                className="nav-item px-3 py-2 flex items-center   hover:opacity-75 font-semibold text-amber-900  hover: border-amber-900 
                                hover:border-b-2"
                                as={Link} to="/perfumes">
                                Perfumes
                            </Link>
                            <Link
                                className="nav-item px-3 py-2 flex items-center   hover:opacity-75 font-semibold text-amber-900  hover: border-amber-900 
                                hover:border-b-2"
                                as={Link} to="/About">
                                About
                            </Link>
                            <Link
                                className="nav-item px-3 py-2 flex items-center   hover:opacity-75 font-semibold text-amber-900  hover: border-amber-900 
                                hover:border-b-2"
                                as={Link} to="/Inventory">
                                Inventory
                            </Link>
                            <Link
                                className="nav-item px-3 py-2 flex items-center   hover:opacity-75 font-semibold text-amber-900  hover: border-amber-900 
                                hover:border-b-2"
                                as={Link} to="/blog">
                                Blog
                            </Link>
                            <Link
                                className="nav-item px-3 py-2 flex items-center   hover:opacity-75 font-semibold text-amber-900 mt-3"
                                as={Link} to="/login">
                                <button type="button" className="
                                border  border-amber-800 hover:bg-amber-700
                                hover:text-white focus:ring-4 text-amber-900 font-medium rounded-lg text-md px-12 py-2 mr-2 mb-2">Login</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;