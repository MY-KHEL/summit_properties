import { Heart } from "iconsax-react";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Properties = () => {
    const [properties, setProperties] = useState([
        { id: 1, name: "Classic Apartment", price: "1,500,000", isFavourite: false, link: "/estate.jpg" },
        { id: 2, name: "Luxury Villa", price: "3,200,000", isFavourite: false, link: "/villa.jpg" },
        { id: 3, name: "Modern Condo", price: "2,000,000", isFavourite: false, link: "/villa2.jpg" },
        { id: 4, name: "Cozy Bungalow", price: "1,200,000", isFavourite: false, link: "/villla4.jpg" },
        { id: 5, name: "Penthouse Suite", price: "4,500,000", isFavourite: false, link: "/villa3.jpg" },
        { id: 6, name: "Beach House", price: "5,000,000", isFavourite: false, link: "/villa5.jpg" },
    ]);

    const propertiesRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            propertiesRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2, // Stagger each card's appearance
                ease: "power2.out",
                scrollTrigger: {
                    trigger: propertiesRef.current[0], // Trigger when first card is in view
                    start: "top 80%",
                    toggleActions: "play none none none",
                }
            }
        );
    }, []);

    const handleFavouriteToggle = (id) => {
        setProperties((prevProperties) =>
            prevProperties.map((property) =>
                property.id === id ? { ...property, isFavourite: !property.isFavourite } : property
            )
        );
    };

    return (
        <div className="p-4 mt-8">
            <div className="text-center">
                <h1 className="text-2xl font-semibold text-projectblack">All Properties Types</h1>
                <p className="text-projectgrey mt-2">
                    Discover a variety of properties that match your needs and lifestyle.
                </p>
            </div>
            <div className="grid md:grid-cols-3 mt-8 gap-8">
                {properties.map((property, index) => (
                    <div 
                        key={property.id} 
                        ref={(el) => (propertiesRef.current[index] = el)} 
                        className="w-full inset-ring inset-ring-projectgrey/20 rounded-2xl relative opacity-0"
                    >
                        <div className="relative">
                            <img
                                src={property.link}
                                alt={property.name}
                                className="w-full h-[250px] object-cover rounded-t-2xl"
                            />
                            <span
                                className="absolute right-5 top-2 bg-white p-1 cursor-pointer rounded-full"
                                onClick={() => handleFavouriteToggle(property.id)}
                            >
                                {property.isFavourite ? (
                                    <Heart variant="Bold" color="red" size={24} />
                                ) : (
                                    <Heart color="black" size={24} />
                                )}
                            </span>
                        </div>
                        <div className="container-info p-3">
                            <div className="flex justify-between items-center">
                                <h1 className="text-xl font-semibold">{property.name}</h1>
                                <h1 className="text-xl font-semibold">&#36;{property.price}</h1>
                            </div>
                            <p className="text-projectgrey mt-2 text-sm">
                            One Hyde Park, London, England, SW1X United Kingdom
                            </p>
                            <div className="flex mt-2 items-start">
                                <button className="border-projectblue border py-2 px-6 rounded cursor-pointer hover:bg-projectblue hover:text-white">
                                    Buy
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
             <Link to={'/products'}>
            <button className="flex items-center mx-auto border-2 border-projectblue px-6 py-3 mt-6 cursor-pointer"> 
                View All Properties  
            </button>
            </Link>
        </div>
    );
};

export default Properties;
