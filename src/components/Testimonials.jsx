import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProfileCircle } from "iconsax-react";
import "./testimonials.css";

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

const testimonials = [
    { id: 1, name: "John Doe", role: "CEO, TechCorp", text: "This product has changed my life! Highly recommended.", image: "/john.jpg" },
    { id: 2, name: "Jane Smith", role: "Marketing Manager", text: "Incredible service and support. Exceeded my expectations!", image: "/jane.jpg" },
    { id: 3, name: "Michael Brown", role: "Software Engineer", text: "A must-have for any professional. Great experience overall.", image: "/michael.jpg" },
    { id: 4, name: "Eric Bright", role: "Software Engineer", text: "A must-have for any professional. Great experience overall.", image: "/michael.jpg" },
    { id: 5, name: "Bil Brown", role: "Software Engineer", text: "A must-have for any professional. Great experience overall.", image: "/michael.jpg" },
    { id: 6, name: "Michael Adeyinka", role: "Software Engineer", text: "A must-have for any professional. Great experience overall.", image: "/michael.jpg" },
];

const Testimonials = () => {
    const testimonialsRef = useRef(null);
    const testimonials2Ref = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        const element = testimonialsRef.current;
        const element2 = testimonials2Ref.current;

        gsap.fromTo(
            element,
            { opacity: 0, x: 50 },
            {
                opacity: 1,
                x: 0,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%", // Starts when 80% of the section is in view
                    toggleActions: "play none none none", // Runs once
                },
            }
        );
        gsap.fromTo(
            element2,
            { opacity: 1, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: element2,
                    start: "top 80%", // Starts when 80% of the section is in view
                    toggleActions: "play none none none", // Runs once
                },
            }
        );
    }, []);

    return (
        <div className="md:px-20 bg-projectgrey/10 w-full md:pb-3 relative">
            {/* Testimonials Section */}
            <div className="mt-12 p-4 relative rounded-2xl opacity-0" ref={testimonialsRef}>
                <h2 className="text-3xl font-semibold text-center md:mb-6">Feedbacks from our Trusted Clients</h2>

                <div className="relative w-full mx-auto md:py-3">
                    <Swiper
                        modules={[Pagination, Navigation, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        className="relative"
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id} className="py-8 my-4 bg-white rounded-xl shadow-lg shadow-projectgrey/30">
                                <div className="flex flex-col items-center">
                                    <ProfileCircle size="32" color="#16284c " variant="Bold" />
                                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    <p className="text-center mt-3 text-gray-700">{testimonial.text}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons (Hidden on small screens) */}
                    <button
                        className="absolute left-0 z-10 top-1/2 transform -translate-y-1/2 cursor-pointer bg-projectblue text-white p-3 shadow-md hover:bg-projectblue/90 transition md:block hidden"
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        ❮
                    </button>

                    <button
                        className="absolute right-0 z-10 top-1/2 transform -translate-y-1/2 cursor-pointer bg-projectblue text-white p-3 shadow-md hover:bg-projectblue/90 transition md:block hidden"
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        ❯
                    </button>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="bg-white p-4 md:p-8 md:mt-12 rounded h-full relative -bottom-20 " ref={testimonials2Ref}>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="col-span-1">
                        <h1 className="text-3xl md:text-5xl text-projectblack font-semibold text-center">Let's Get Started</h1>
                        <p className="text-md text-projectgrey mt-6 md:mb-50">
                        With experts in every part of the world, we are local everywhere, allowing us to walk alongside our clients at every stage of their journey. With innovative technology and unrivaled service, we ensure that your home is connected with buyers, locally and worldwide.
                        </p>
                    </div>
                    <div className="col-span-1 md:mt-8">
                        <div className="md:w-3/4 h-full bg-projectblue/80 rounded items-end flex relative">
                            <img
                                src="./estate.jpg"
                                alt=""
                                className="w-full h-full cursor-pointer hover:top-2 hover:ease-in hover:right-2 md:absolute top-3 right-3 rounded"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
