import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./molecules/Button";
import { HambergerMenu, CloseCircle } from "iconsax-react";
import SearchForm from "./SearchForm";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchFormOpen, setSearchFormOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false); // Ensures smooth initial load

    useEffect(() => {
        setIsMounted(true); // Marks component as mounted
    }, []);

    useEffect(() => {
        // Disable scrolling when menu is open
        if (menuOpen) {
            document.body.style.overflow = "hidden";
            document.body.style.width = "100%";  // Ensure no horizontal overflow
        } else {
            document.body.style.overflow = "auto";
            document.body.style.width = "auto"; // Restore width when closed
        }
    }, [menuOpen]);
    
    const navLinks = [
        { title: "Home", path: "/" },
        { title: "About Us", path: "/about" },
        { title: "All Products", path: "/products" },
        { title: "Contact Us", path: "/contact" },
    ];

    return (
        <>
            {/* Navbar */}
            <nav className="flex justify-between items-center w-full p-4">
                {/* Logo */}
                <div className="text-projectblue font-semibold text-xl uppercase">
                    <img src="./summit_properties.png" alt="" className="w-[120px]" />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex text-projectblack space-x-8">
                    {navLinks.map((link, index) => (
                        <Link key={index} to={link.path} className="text-lg hover:text-projectblue">
                            {link.title}
                        </Link>
                    ))}
                </div>

                {/* Desktop Button */}
                <div className="hidden md:inline-flex">
                    <span className="text-lg mr-5 cursor-pointer flex items-center" onClick={() => setSearchFormOpen(!searchFormOpen)}>
                        Search
                    </span>
                    <Link to={"/contact"}>
                        <Button value={"Get in Touch"} classname={"cursor-pointer"} />
                    </Link>
                </div>

                {/* Mobile Menu Icon */}
                <div className="inline md:hidden">
                    <HambergerMenu
                        size="30"
                        color="#52aeff"
                        onClick={() => setMenuOpen(true)}
                        className="cursor-pointer"
                    />
                </div>
            </nav>

            {/* Search Form */}
            {searchFormOpen && (
                <div className="fixed top-0 left-0 md:px-20 py-0 w-full  bg-white/2   z-70 flex justify-end ">
                    <div className="relative w-full h-screen md:h-full md:w-3/4 max-w-md md:mt-20 bg-white rounded-lg shadow-lg">
                        <button className="absolute top-0 right-0 p-2" onClick={() => setSearchFormOpen(false)}>
                            <CloseCircle size="24" color="#52aeff" />
                        </button>
                        <SearchForm />
                    </div>
                </div>
            )}

            {/* Mobile Navigation Menu */}
            <div
    className={`fixed top-0 right-0 h-full w-full px-4 overflow-x-hidden bg-white transition-transform duration-300 ease-in-out ${
        isMounted ? (menuOpen ? "translate-x-0" : "translate-x-full") : "translate-x-full"
    } z-50 md:hidden`}
>

                {/* Close Button */}
                <div className="flex justify-start ">
                    <CloseCircle size="30" color="#52aeff" onClick={() => setMenuOpen(false)} className="cursor-pointer mt-2" />
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            className="text-lg py-4 hover:text-projectblue"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>

                {/* Mobile CTA Button */}
                <div className=" w-full">
                    <span className="text-lg text-projectblue" onClick={() => setSearchFormOpen(true)}>
                        Search
                    </span>
                    <Link to={"https://wa.me/+2348179983075"}>
                        <Button value={"Get Started"} classname={"w-3/4 block mt-4"} />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
