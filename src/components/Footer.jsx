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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
                            dolore expedita exercitationem corrupti voluptatibus temporibus numquam
                            ratione placeat qui nesciunt. Totam aspernatur sunt dicta quaerat veniam
                            qui tempore voluptas in.
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
                        <div className="flex mt-4 gap-6">
                            <Link to="tel:+2348179983075">
                                <Call size="24" color="#797979" />
                            </Link>
                            <Link
                                to="https://wa.me/+2348179983075"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Whatsapp color="#797979" size={24} />
                            </Link>
                            <Google color="#797979" size={24} />
                        </div>

                        <p className="text-white/50 text-md mt-2">
                            Click the icon above to contact us on the respective platform.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
