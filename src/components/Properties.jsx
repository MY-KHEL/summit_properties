import { Heart } from "iconsax-react";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

const Properties = () => {
    

    const [properties, setProperties] = useState([
        { id: 1, name: "Classic Apartment", price: "1,500,000", isFavourite: false, link: "/estate.jpg" , text:' 4040 Via Marisol APT 321, Los Angeles, CA 90042', bed:"4"},
        { id: 2, name: "Luxury Villa", price: "400,000", isFavourite: false, link: "/villa.jpg" , text:' 13031 Villosa Pl APT 117, Playa Vista, CA 90094', bed:"1"},
        { id: 3, name: "Modern Condo", price: "449,000", isFavourite: false, link: "/villa2.jpg" , text:' 1701 Clinton St APT 319, Los Angeles, CA 90026', bed:"2"},
        { id: 4, name: "Cozy Bungalow", price: "560,000", isFavourite: false, link: "/villla4.jpg" , text:'7740 Redlands St UNIT M1082, Playa Del Rey, CA 90293', bed:"2"},
       
        { id: 5, name: "Penthouse Suite", price: "450,000", isFavourite: false, link: "/villa3.jpg", text:'1827 Greenfield Ave APT 103, Los Angeles, CA 90025', bed:"3" },
        { id: 6, name: "Beach House", price: "600,000", isFavourite: false, link: "/villa5.jpg", text:'5800 Owensmouth Ave APT 53, Woodland Hills, CA 91367', bed:"3" },
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
        <>
        <div className=" w-full p-4 md:px-20 mt-8">
            <div className="text-center">
                <h1 id="response"></h1>
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
                                className="w-full h-[200px] object-cover rounded-t-2xl"
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
                           {property.text}
                            </p>
                            <div className="flex mt-2 items-center justify-between">
                                <span>{property.bed} Beds</span>
                                <button className="border-projectblue border-2 py-2 px-6 rounded cursor-pointer hover:bg-projectblue hover:text-white">
                                    Buy
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
          
        </div>
        
        </>
    );
};

export default Properties;
