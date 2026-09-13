import { useState } from "react";

import NavLogo from "../assets/logo-text.png";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white">

        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">


            <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl md:hidden"
            >
            ☰
            </button>


        <a
            href="#home"
            className="flex items-center gap-2"
            >

            <img className="  rounded-lg flex items-center justify-center" src={NavLogo} alt="" />
        </a>


            <div className="hidden md:flex gap-6">

            <a href="#home">Home</a>

            <a href="#technologies">
                Technologies
            </a>

            <a href="#projects">
                Projects
            </a>

            <a href="#about">
                About
            </a>

            <a href="#contact">
                Contact
            </a>

            </div>


            <div className="flex gap-2">

            <button className="hidden sm:block px-3 py-2">
                Sign In
            </button>

            <button className="gradient-bg text-white px-5 py-2 rounded-full">
                Sign Up
            </button>

            </div>

        </div>


        {menuOpen && (

            <div className="md:hidden border-t p-5">

            <div className="flex flex-col gap-4">

                <a href="#home">Home</a>

                <a href="#technologies">
                Technologies
                </a>

                <a href="#projects">
                Projects
                </a>

                <a href="#about">
                About
                </a>

                <a href="#contact">
                Contact
                </a>

            </div>

            </div>

        )}

        </nav>
    );
}

export default Navbar;