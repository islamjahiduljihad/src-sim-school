import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState, useRef } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
    const [sliderRef, slider] = useKeenSlider({
        loop: true,
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
            <div
                ref={sliderRef}
                className="keen-slider h-[600px] overflow-hidden"
            >
                {slides.map((slide, idx) => (
                    <div
                        key={slide.id}
                        className="keen-slider__slide relative flex items-center justify-center"
                    >
                        <img
                            src={slide.bg}
                            alt={slide.title}
                            className="w-full h-full object-center blur-[2px]"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-[#00000063] "></div>

                        {/* Content */}
                        <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-white">
                            {/* Gradient Overlay to protect text visibility, keep bg visible */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>

                            <div className="relative z-10 max-w-3xl space-y-6">
                                <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
                                    <span className="text-[#34d45f]">
                                        {slide.title}
                                    </span>
                                </h2>
                                <p className="text-lg md:text-xl text-white/90">
                                    {slide.desc}
                                </p>

                                <div className="flex justify-center gap-6 mt-4">
                                    <Link
                                        to={"/about"}
                                        className="bg-[#249743] hover:bg-[#1e7a34] transition-colors duration-300 text-white px-8 py-3 rounded-full font-semibold shadow-lg flex items-center gap-2"
                                    >
                                        আমাদের সম্পর্কে
                                        <IoIosArrowDropright />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}

            <IoIosArrowDropleft
                onClick={() => slider.current?.prev()}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#249742] text-white p-2 rounded-full hover:bg-opacity-80 z-10 shadow-md cursor-pointer"
                size={48}
            />
            <IoIosArrowDropright
                onClick={() => slider.current?.next()}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#249742] text-white p-2 rounded-full hover:bg-opacity-80 z-10 shadow-md cursor-pointer"
                size={48}
            />

            {/* Progress Bar */}
            <div className="absolute bottom-4 right-4 w-24 h-2 bg-white bg-opacity-30 rounded-full overflow-hidden">
                <div
                    className="h-full bg-[#8E1C20] transition-all duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};

export default Header;
