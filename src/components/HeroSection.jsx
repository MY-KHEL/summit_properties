import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Button from "./molecules/Button";
import { Link } from "react-router-dom";

// Register the GSAP Text Plugin
gsap.registerPlugin(TextPlugin);

const HeroSection = () => {
    const words = [" Home", " Apartment", " Property", " Suite"];
    const textRef = useRef(null);
    const heroRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(
            heroRef.current,
            {opacity:0,y:50},
            {opacity:1, y:0,duration:2,stagger:2}
        )

        let wordIndex = 0;
        const typeSpeed = 1; // Speed of typing
        const pauseDuration = 1.5; // How long the word stays before fading
        const fadeDuration = 0; // Speed of fade out

        const typeAndFadeWord = () => {
            const word = words[wordIndex];

            let tl = gsap.timeline();
            tl.to(textRef.current, { text: word, duration: typeSpeed, ease: "power1.inOut" }) // Type effect
              .to(textRef.current, { opacity: 1, duration: pauseDuration }) // Pause before fading
              .to(textRef.current, { opacity: 0, duration: fadeDuration }) // Fade out
              .call(() => {
                  wordIndex = (wordIndex + 1) % words.length; // Move to next word
                  gsap.set(textRef.current, { text: " ", opacity: 1 }); // Reset text & opacity
                  typeAndFadeWord(); // Recursive call
              });
        };

        typeAndFadeWord();
    }, []);



    return ( 
        <>
            <div  className="">
                <div ref={heroRef} className="p-4 md:p-0 mt-6 grid grid-cols-1  gap-12 md:grid-cols-2 opacity-0">
                    <div className="col-span-1">
                        <h1 className="text-5xl md:text-6xl text-projectblack font-semibold">
                            Let's Find Your Dream  <span className="text-projectblue text-5xl md:text-7xl" ref={textRef}></span>
                        </h1>
                        <div className=""></div>
                        <p className="text-projectgrey text-md md:text-lg mt-4">
                        Summit Properties, the one for an exceptional home and life.

                        
                        </p>
                        <p className="text-projectgrey text-md md:text-lg ">
                        We give you the lifestyle that fits you.


                        </p>
                        <Link to={'/products'}><Button value={'Find a House'} classname={'mt-4 cursor-pointer'} /></Link>
                        

                        <div className="mt-6 md:flex justify-between w-full">
                            <div className="text-center md:border-r border-projectgrey/30">
                                <h1 className="text-3xl text-projectblue font-semibold">&#36;120M+</h1>
                                <p className="text-projectgrey">processed across all of our clients</p>
                            </div>
                            <div className="text-center max-md:mt-4 md:border-r border-projectgrey/30">
                                <h1 className="text-3xl text-projectblue font-semibold">300</h1>
                                <p className="text-projectgrey">clients in our experts database</p>
                            </div>
                            <div className="text-center">
                                <h1 className="text-3xl max-md:mt-4 text-projectblue font-semibold">&#36;10M+</h1>
                                <p className="text-projectgrey">of seed funding from various investors</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 relative mt-0">
                        <div className="w-full h-full bg-projectblue/40 blur-[72px] hidden md:inline rounded-full absolute top-0"></div>
                        <div className="relative">
                            <img src="/herobuiding.jpg" alt="" className="mix-blend-multiply rounded-md w-full h-full opacity-90"/>
                        </div>
                    </div>
                </div>
                <div className="flex items-center max-md:mx-4 md:inline-flex gap-4 mt-8 outline-2 outline-projectblue p-2">
                    <p className="bg-projectblue text-white py-2 px-4 rounded-md">Buy</p>
                    <p className="py-2 px-4 rounded-md">Rent</p>
                    <p className="py-2 px-4 rounded-md">Sell</p>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
