import { Call, Google, Whatsapp } from "iconsax-react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
    const [form, setForm] = useState("");

    const handleSubmit = () => {
        setForm("");
    };

    return (
        <div className="bg-projectblack w-full p-4 md:px-20 text-white/50">
            <div className="mt-20">
                <div className="grid md:grid-cols-3">
                    {/* Contact Section */}
                    <div>
                        <img src="./summit2.png" alt="" className="w-[100px]" />
                        <p className="text-2xl font-semibold underline mt-3">Get In Touch</p>
                        <p className="mt-3">
                        Summit Properties
🏡 Your Dream Home, Our Priority

Stay connected with us for the latest property listings, expert real estate advice, and exclusive deals.

<p> <Link to="tel:+2348179983075">
                                <Call size="24" color="#797979" className="inline-flex items-center" /> Call Us
                            </Link>  </p>
<p className="my-2">  <Link
                                to="https://wa.me/+2348179983075"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Whatsapp color="#797979" size={24} className="inline" /> Chat US
                            </Link> </p>
<p>  <Google color="#797979" size={24} className="inline" />  Send that mail today</p>


{/* 📧 Email: info@summitproperties.com */}








                        </p>
                    </div>

                    {/* Empty Div for Layout Balance */}
                    <div></div>

                    {/* Contact Form */}
                    <div className="max-md:mt-16 w-full">
                        <form className="mt-2">
                            <label htmlFor="text" className="text-white/50">
                                Enter Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email address"
                                className="bg-white text-black p-2 w-full"
                                value={form}
                                onChange={(e) => setForm(e.target.value)}
                            />
                            <input
                                type="button"
                                className="bg-projectblue cursor-pointer py-2 px-6 rounded mt-3 text-white"
                                value="Submit"
                                onClick={handleSubmit}
                            />
                        </form>

                        {/* Social Links */}
                        <div className=" mt-4">
                            <p>📢 Follow Us:
Facebook | Instagram | Twitter | LinkedIn

© 2025 Summit Properties. All rights reserved.</p>
                          
                            
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
