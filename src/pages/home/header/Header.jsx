import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        mode: "free-snap",
        slides: { origin: "center", perView: 1, spacing: 0 },
        slideChanged(s) {
            setCurrentSlide(s.track.details.rel);
            resetProgress();
        },
        created() {
            resetProgress();
        },
    });

    const [currentSlide, setCurrentSlide] = useState(0);
    const [progress, setProgress] = useState(0);
    const progressRef = useRef();

    useEffect(() => {
        const interval = setInterval(() => {
            if (slider.current) {
                slider.current.next();
            }
        }, 8000);

        return () => clearInterval(interval);
    }, [slider]);

    const resetProgress = () => {
        setProgress(0);
        let start = Date.now();
        const duration = 8000;

        const animate = () => {
            let now = Date.now();
            let timePassed = now - start;
            let percent = Math.min(timePassed / duration, 1) * 100;
            setProgress(percent);

            if (percent < 100) {
                progressRef.current = requestAnimationFrame(animate);
            }
        };

        cancelAnimationFrame(progressRef.current);
        progressRef.current = requestAnimationFrame(animate);
    };

    const slides = [
        {
            id: 1,
            title: "সহশিক্ষা কার্যক্রমে নেতৃত্বের চর্চা",
            desc: "স্রীরায়েরচর এসআইএম উচ্চ বিদ্যালয়ে শিক্ষার্থীরা পায় মানসম্পন্ন শিক্ষা, দৃঢ় নৈতিক মূল্যবোধ এবং একটি উজ্জ্বল ভবিষ্যতের জন্য সুস্পষ্ট দিকনির্দেশনা। আমরা কেবল একাডেমিক উৎকর্ষ নয়, সুনাগরিক তৈরিতেও বিশ্বাসী।",
            bg: "https://i.ibb.co/SxtJdzT/school.jpg",
        },
        {
            id: 2,
            title: "শিক্ষাই জাতির মেরুদণ্ড",
            desc: "আমাদের শিক্ষা শুধুমাত্র বইয়ের গণ্ডিতে সীমাবদ্ধ নয়। বিতর্ক, কুইজ, বিজ্ঞান মেলা ও খেলাধুলার মাধ্যমে আমরা আত্মবিশ্বাসী, দক্ষ নেতৃত্ব গড়ে তুলি যারা বিশ্বজয় করতে প্রস্তুত।",
            bg: "https://i.ibb.co/q5FTsWz/c2acb51d-317b-4956-9b66-40d60f60ff4b.jpg",
        },
        {
            id: 3,
            title: "সেবা করার মানসিকতা তৈরি",
            desc: "স্রীরায়েরচর এসআইএম উচ্চ বিদ্যালয় এমন একটি পরিবেশ তৈরি করেছে যেখানে স্বপ্ন প্রসারিত হয়, সৃষ্টিশীলতা প্রবাহিত হয়, আর শিক্ষার্থীরা জীবনের প্রতিটি ধাপে অসাধারণ কিছু করার অনুপ্রেরণা পায়।",
            bg: "https://i.ibb.co/BCL8yTm/school2.jpg",
        },
    ];

    return (
        <div className="relative">
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-24 h-24 rounded-full opacity-10 bg-[#249742] animate-pulse z-10"></div>
            <div className="absolute bottom-20 right-10 w-16 h-16 rounded-full opacity-10 bg-[#249742] animate-pulse delay-300 z-10"></div>

            <div
                ref={sliderRef}
                className="keen-slider h-[600px] overflow-hidden"
            >
                {slides.map((slide, idx) => (
                    <div
                        key={slide.id}
                        className="keen-slider__slide relative flex items-center justify-center"
                    >
                        {/* Background image with parallax effect */}
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
                            style={{
                                backgroundImage: `url(${slide.bg})`,
                                transform: `scale(1.1)`,
                            }}
                        ></div>

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70"></div>

                        {/* Pattern overlay */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-10"></div>

                        {/* Content */}
                        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full flex flex-col justify-center h-full">
                            <div className="max-w-3xl">
                                {/* School emblem */}
                                <div className="bg-[#249742]/20 backdrop-blur-sm w-24 h-24 rounded-full flex items-center justify-center mb-8 border-2 border-white/30">
                                    <FaGraduationCap className="text-white text-4xl" />
                                </div>

                                {/* Title with animated underline */}
                                <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
                                    <span className="text-[#34d45f] drop-shadow-lg">
                                        {slide.title}
                                    </span>
                                </h2>

                                <div className="relative mb-8">
                                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
                                        {slide.desc}
                                    </p>
                                    <div className="absolute -bottom-4 left-0 w-32 h-1 bg-[#34d45f] rounded-full"></div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                    <Link
                                        to={"/about"}
                                        className="bg-gradient-to-r from-[#249742] to-[#1c6e36] hover:from-[#1c6e36] hover:to-[#155a2b] text-white px-8 py-4 rounded-full font-semibold shadow-lg flex items-center gap-2 transition-all duration-300 hover:scale-105"
                                    >
                                        আমাদের সম্পর্কে
                                        <FaChevronRight className="transition-transform group-hover:translate-x-1" />
                                    </Link>
                                    <Link
                                        to={"/admission"}
                                        className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-full font-semibold shadow-lg flex items-center gap-2 transition-all duration-300 hover:scale-105"
                                    >
                                        ভর্তি প্রক্রিয়া
                                        <FaChevronRight className="transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={() => slider.current?.prev()}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#249742] text-white p-4 rounded-full hover:bg-[#1c6e36] z-10 shadow-lg cursor-pointer transition-all duration-300 hover:scale-110"
                aria-label="Previous slide"
            >
                <FaChevronLeft size={24} />
            </button>
            <button
                onClick={() => slider.current?.next()}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#249742] text-white p-4 rounded-full hover:bg-[#1c6e36] z-10 shadow-lg cursor-pointer transition-all duration-300 hover:scale-110"
                aria-label="Next slide"
            >
                <FaChevronRight size={24} />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => slider.current?.moveToIdx(idx)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            currentSlide === idx
                                ? "bg-[#34d45f] w-8"
                                : "bg-white/40"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-4 right-4 w-32 h-1 bg-white/20 rounded-full overflow-hidden z-10">
                <div
                    className="h-full bg-[#34d45f] transition-all duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-[#249742] rounded-tl-lg z-10"></div>
            <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-[#249742] rounded-tr-lg z-10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-[#249742] rounded-bl-lg z-10"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-[#249742] rounded-br-lg z-10"></div>
        </div>
    );
};

export default Header;
