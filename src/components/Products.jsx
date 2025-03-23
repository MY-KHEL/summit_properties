import { ArrowRight2 } from "iconsax-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
    const productData = [
        { title: "Apartments", small_text: "lorem ipsy tunre" },
        { title: "Condo", small_text: "lorem ipsum nitti" },
        { title: "House", small_text: "Lorem ipsum door" },
        { title: "Office", small_text: "one property" },
        { title: "Villa", small_text: "lotrem isit ihi" },
        { title: "Duplex", small_text: "lorem gile rer" },
        { title: "Commercial", small_text: "lorem ipsum dit" },
        { title: "Townhome", small_text: "lorem ipsum sit" },
    ];
    
    const mobileProperties = [
        { title: "Duplex", small_text: "lorem gile rer" },
        { title: "Commercial", small_text: "lorem ipsum dit" },
        { title: "Townhome", small_text: "lorem ipsum sit" },
    ];

    const propertiesRef = useRef([]);

    useEffect(() => {
        if (propertiesRef.current.length > 0) {
            gsap.fromTo(
                propertiesRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: propertiesRef.current[0],
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }
    }, []);

    return (
        <div className="max-md:p-4 md:mt-20">
            <h2 className="text-xl font-semibold mb-8 decoration-2 decora decoration-projectblue">
                Explore Properties Types
            </h2>
            <div className="">
                {/* Desktop View */}
                <div className="hidden md:grid md:grid-cols-4 gap-8 p-4">
                    {productData.map((product, index) => (
                        <Link to={'/products'}>
                        <div
                            ref={(el) => (propertiesRef.current[index] = el)}
                            key={product.title}
                            className="bg-white drop-shadow-md opacity-0 shadow-projectgray/15 hover:shadow-md hover:shadow-projectblue cursor-pointer p-2 flex justify-between items-center"
                        >
                            <img src="./estate.jpg" alt="" className="w-1/3 h-[60px]" />
                            <div>
                                <h1 className="text-sm font-semibold">{product.title}</h1>
                                {/* <p className="text-sm">{product.small_text}</p> */}
                            </div>
                            <div>
                                <ArrowRight2 size="20" color="#52aeff" />
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>

                {/* Mobile View */}
                <div className="md:hidden grid md:grid-cols-4 gap-8 p-4">
                    {mobileProperties.map((product) => (
                        <Link to={'/products'}>
                        <div
                            key={product.title}
                            className="bg-white drop-shadow-md shadow-projectgray/15 hover:shadow-md hover:shadow-projectblue cursor-pointer p-2 flex justify-between items-center"
                        >
                            <img src="./estate.jpg" alt="" className="w-1/3 h-[60px]" />
                            <div>
                                <h1 className="text-sm font-semibold">{product.title}</h1>
                                <p className="text-sm">{product.small_text}</p>
                            </div>
                            <div>
                                <ArrowRight2 size="20" color="#52aeff" />
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
