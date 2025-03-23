import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./molecules/Button";
import { HambergerMenu, CloseCircle } from "iconsax-react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false); // ✅ State to toggle mobile menu

    const navLinks = [
        { title: "Home", path: "/" },
        { title: "About Us", path: "/about" },
        { title: "All Products", path: "/products" },
        { title: "Contact Us", path: "/contact" }
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
                <div className="hidden md:inline">
                    <Link to={"/contact"}>
                        <Button value={"Get in Touch"} classname={"cursor-pointer"} />
                    </Link>
                </div>

                {/* Mobile Menu Icon */}
                <div className="inline md:hidden">
                    <HambergerMenu size="30" color="#52aeff" onClick={() => setMenuOpen(true)} className="cursor-pointer" />
                </div>
            </nav>

            {/* Mobile Navigation Menu */}
            <div
                className={`fixed top-0 left-0 h-full w-full bg-white transition-transform duration-300 ${
                    menuOpen ? "translate-x-0" : "-translate-x-full"
                } z-50`}
            >
                {/* Close Button */}
                <div className="flex justify-end p-4">
                    <CloseCircle size="30" color="#52aeff" onClick={() => setMenuOpen(false)} className="cursor-pointer mt-2" />
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col p-4 space-y-3">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            className="text-lg px-4 py-2 hover:text-projectblue"
                            onClick={() => setMenuOpen(false)} // ✅ Close menu on click
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>

                {/* Mobile CTA Button */}
                <div className="p-6">
                    <Link to={"https://wa.me/+2348179983075"}>
                        <Button value={"Get Started"} classname={"w-full"} />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
