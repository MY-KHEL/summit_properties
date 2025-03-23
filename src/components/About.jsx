import { ArrowLeft2 } from "iconsax-react";
import Button from "./molecules/Button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

const About = () => {
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
            <div className="max-md:p-4 md:mt-12 mb-6">
                <div className="grid md:grid-cols-2">
                    <div className="col-span-1 mt-8 relative opacity-0" ref={imageRef}>

                        <div className="w-3/4 h-full  bg-projectblue/80 rounded items-center flex relative " >
                            <img src="./estate.jpg" alt="" className="w-full h-full cursor-pointer hover:top-2 hover:ease-in hover:left-2 absolute top-3 left-3 rounded" />
                        </div>

                    </div>
                    <div className="col-span-1 opacity-0" ref={textRef}>

                        <h1 className="text-5xl text-projectblack font-semibold text-center ">About Us</h1>

                        <p className="text-projectgrey mt-6 max-md:text-md ">
                        Only one network of agents represents the longest standing tastemaker in the world. In the spirit of innovation, an exceptional luxury real estate company bearing the  name was launched in 2015. Beyond the beautiful properties and the personal touch of our agents, only one brand can deliver a lifestyle that caters to you. With a network of homes for sale worldwide, our website lets you search property listings globally, and includes a large inventory of luxury homes for sale, including houses, condos, townhomes, villas, and more.
                        </p>
                        <Link to={'/about'}>
                        <Button value={'Read More'} classname={'mt-4 md:mb-20 cursor-pointer'} />
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
}

export default About;