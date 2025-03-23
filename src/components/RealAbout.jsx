import { ArrowLeft2 } from "iconsax-react";
import Button from "./molecules/Button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

const RealAbout = () => {
    const imageRef = useRef(null)
    const textRef = useRef(null)



    useEffect(() => {
        const imageElement = imageRef.current
        const textElement = textRef.current
        gsap.fromTo(
            imageElement,
            {
                opacity: 0,
                x: -30
            },
            {
                opacity: 1,
                x: 0,
                duration: 1.5,
                scrollTrigger: {
                    trigger: imageElement,
                    start: 'top 70%',
                    toggleActions: 'play none none none'

                }

            }
        )


        gsap.fromTo(
            textElement,
            {
                opacity: 0,
                x: 30
            },
            {
                opacity: 1,
                x: 0,
                duration: 1.5,
                scrollTrigger: {
                    trigger: textElement,
                    start: 'top 80%',
                    toggleActions: 'play none none none'

                }

            }
        )

    }, [])


    return (
        <>
        <div className="bg-projectblack w-full text-center p-4 text-white/50">
        <h1 className="text-5xl  my-3 font-semibold text-center">About Us</h1>
        </div>
        <div className="py-4 lg:px-20">
            <div className="max-md:p-4 md:mt-12 mb-6">
                <div className="grid md:grid-cols-2">
                    <div className="col-span-1 mt-8 md:relative opacity-0" ref={imageRef}>

                        <div className=" w-full md:w-3/4 h-full  bg-projectblue/80 rounded items-center flex md:relative " >
                            <img src="./estate.jpg" alt="" className="w-full h-full cursor-pointer hover:top-2 hover:ease-in hover:left-2 md:absolute top-3 left-3 rounded" />
                        </div>

                    </div>
                    <div className="col-span-1 opacity-0" ref={textRef}>

                       

                        <p className="text-projectgrey mt-6 max-md:text-md ">
                        Only one network of agents represents the longest standing tastemaker in the world. In the spirit of innovation, an exceptional luxury real estate company bearing the  name was launched in 2015. Beyond the beautiful properties and the personal touch of our agents, only one brand can deliver a lifestyle that caters to you. With a network of homes for sale worldwide, our website lets you search property listings globally, and includes a large inventory of luxury homes for sale, including houses, condos, townhomes, villas, and more.
                        </p>
                        <p className="text-projectgrey mt-2 max-md:text-md ">
                        With experts in every part of the world, we are local everywhere, allowing us to walk alongside our clients at every stage of their journey. With innovative technology and unrivaled service, we ensure that your home is connected with buyers, locally and worldwide.
                        </p>

                    </div>

                </div>
            </div>
            </div>
        </>
    );
}

export default RealAbout;