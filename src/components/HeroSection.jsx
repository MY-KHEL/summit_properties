import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Button from "./molecules/Button";
import { Link, useNavigate } from "react-router-dom";
import { CloseSquare, Home } from "iconsax-react";
import '.././App.css'
import Properties from "./Properties";

// Register the GSAP Text Plugin
gsap.registerPlugin(TextPlugin);

const HeroSection = () => {
    const words = [" Home", " Apartment", " Property", " Suite"];
    const textRef = useRef(null);
    const heroRef = useRef(null)

   
   
 
  

    useEffect(() => {
        gsap.fromTo(
            heroRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 2, stagger: 2 }
        );

        let wordIndex = 0;
        const typeSpeed = 1;
        const pauseDuration = 1.5;
        const fadeDuration = 0;

        const typeAndFadeWord = () => {
            const word = words[wordIndex];

            let tl = gsap.timeline();
            tl.to(textRef.current, { text: word, duration: typeSpeed, ease: "power1.inOut" })
                .to(textRef.current, { opacity: 1, duration: pauseDuration })
                .to(textRef.current, { opacity: 0, duration: fadeDuration })
                .call(() => {
                    wordIndex = (wordIndex + 1) % words.length;
                    gsap.set(textRef.current, { text: " ", opacity: 1 });
                    typeAndFadeWord();
                });
        };

        typeAndFadeWord();
    }, []);

    return (
        <>
            <div className="">
                <div ref={heroRef} className="p-4 md:p-0 mt-6 grid grid-cols-1  gap-12 md:grid-cols-2 opacity-0">
                    <div className="col-span-1">
                        <h1 className="text-4xl md:text-6xl text-projectblack font-semibold">
                            Let's Find Your Dream  <span className="text-projectblue text-4xl md:text-7xl" ref={textRef}></span>
                        </h1>
                        <p className="text-projectgrey text-md md:text-lg mt-4">
                            Summit Properties, the one for an exceptional home and life.
                        </p>
                        <p className="text-projectgrey text-md md:text-lg ">
                            We give you the lifestyle that fits you.
                        </p>
                        <Link to={'/products'}><Button value={'Find a House'} classname={'mt-4 cursor-pointer'} /></Link>
                    </div>
                    <div className="col-span-1 relative mt-0">
                        <div className="w-full h-full bg-projectblue/40 blur-[72px] hidden md:inline rounded-full absolute top-0"></div>
                        <div className="relative">
                            <img src="/herobuiding.jpg" alt="" className="mix-blend-multiply rounded-md w-full h-full opacity-90" />
                        </div>
                    </div>
                </div>
                


            </div>
        </>
    );
};

export default HeroSection;
