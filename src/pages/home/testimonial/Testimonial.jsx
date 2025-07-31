import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";

const testimonials = [
    {
        id: 1,
        name: "রাকিব হাসান",
        batch: "2018",
        feedback:
            "আমার জীবনের ভিত্তি তৈরি হয়েছে এই স্কুলেই। শিক্ষকরা শুধু পড়াশোনা নয়, জীবনের মূল্যবোধ শেখাতেন। এখনো তাদের শিক্ষা ও পরামর্শ জীবনে কাজে লাগে। এমন সহানুভূতিশীল পরিবেশ আমি আর কোথাও পাইনি।",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&h=300&fit=crop",
        rating: 5,
    },
    {
        id: 2,
        name: "নুসরাত জাহান",
        batch: "2019",
        feedback:
            "স্কুল জীবনের প্রতিটি মুহূর্ত ছিল অসাধারণ। বন্ধুরা, শিক্ষকরা এবং প্রতিটি ক্লাসের স্মৃতি এখনো মনে পড়ে। লেখাপড়ার পাশাপাশি সাংস্কৃতিক চর্চা আমাকে আত্মবিশ্বাসী করে তুলেছে।",
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=300&fit=crop",
        rating: 4,
    },
    {
        id: 3,
        name: "তানভীর রহমান",
        batch: "2020",
        feedback:
            "স্কুলের প্রতিটি দিনই ছিল শেখার সুযোগে ভরা। শিক্ষকরা সবসময় উৎসাহ দিতেন এবং আমার দুর্বল দিকগুলো নিয়েও কাজ করেছেন। আজ আমি যা কিছু শিখেছি, তার ভিত্তি এই প্রতিষ্ঠানেই।",
        image: "https://images.unsplash.com/photo-1629114112651-a4cd6e401942?w=300&h=300&fit=crop",
        rating: 5,
    },
    {
        id: 4,
        name: "সাদিয়া ইসলাম",
        batch: "2021",
        feedback:
            "এই স্কুল আমাকে স্বপ্ন দেখতে শিখিয়েছে। শিক্ষকদের ভালবাসা আর সহানুভূতিশীল আচরণ আমাকে অনুপ্রাণিত করেছে। ক্লাসরুমের পরিবেশ, লাইব্রেরি আর অ্যাক্টিভিটিগুলো এখনো মনে পড়ে।",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop",
        rating: 5,
    },
    {
        id: 5,
        name: "মাহাদি হোসেন",
        batch: "2017",
        feedback:
            "আমার আত্মবিশ্বাস এবং দক্ষতার পেছনে এই স্কুলের অবদান অপরিসীম। প্রতিটি শিক্ষক ছিলেন দিকনির্দেশক। ক্লাসের বাইরেও তারা সবসময় পাশে ছিলেন। আমি গর্বিত এই স্কুলের ছাত্র হতে পেরে।",
        image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=300&h=300&fit=crop",
        rating: 4,
    },
    {
        id: 6,
        name: "তাসনিম আক্তার",
        batch: "2016",
        feedback:
            "এই স্কুল শুধু শিক্ষা নয়, ভালো মানুষ হতে শিখিয়েছে। শিক্ষক ও সহপাঠীদের সহযোগিতা আমাকে সবসময় অনুপ্রাণিত করেছে। জীবনের বহু মূল্যবান পাঠ এখানেই পেয়েছি।",
        image: "https://images.unsplash.com/photo-1614287752068-3b8b2fd7c4de?w=300&h=300&fit=crop",
        rating: 5,
    },
    {
        id: 7,
        name: "আরাফাত হোসেন",
        batch: "2015",
        feedback:
            "এই স্কুলের পড়াশোনা, ডিসিপ্লিন ও সংস্কৃতিমূলক পরিবেশ আমাকে অন্য রকমভাবে গড়ে তুলেছে। স্কুলের প্রতিটি মুহূর্ত এখনো হৃদয়ে গাঁথা। আমি গর্বিত এই স্কুলের ছাত্র হয়ে।",
        image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&h=300&fit=crop",
        rating: 4,
    },
];

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    };

    // Custom next arrow component
    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} hidden md:block`}
                style={{ ...style, display: "block", right: "-30px" }}
                onClick={onClick}
            >
                <div className="w-10 h-10 rounded-full bg-[#249742] flex items-center justify-center text-white shadow-lg hover:bg-[#1c6e36] transition-colors">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </div>
            </div>
        );
    }

    // Custom prev arrow component
    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} hidden md:block`}
                style={{ ...style, display: "block", left: "-30px" }}
                onClick={onClick}
            >
                <div className="w-10 h-10 rounded-full bg-[#249742] flex items-center justify-center text-white shadow-lg hover:bg-[#1c6e36] transition-colors">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </div>
            </div>
        );
    }

    // Add custom arrows to settings
    settings.nextArrow = <NextArrow />;
    settings.prevArrow = <PrevArrow />;

    return (
        <section className="relative py-16 px-4 md:px-8 overflow-hidden bg-[#eef9f0]">
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-24 h-24 rounded-full opacity-10 bg-[#249742] animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-16 h-16 rounded-full opacity-10 bg-[#249742] animate-pulse delay-300"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <SectionHeader
                    title={"প্রাক্তন শিক্ষার্থীদের অভিমত"}
                    subtitle={
                        "আমাদের প্রাক্তন শিক্ষার্থীদের অভিজ্ঞতা জানুন—যারা এই বিদ্যালয়কে আজীবনের ভালোবাসা দিয়ে মনে রেখেছে।"
                    }
                />

                <div className="mt-12">
                    <Slider {...settings}>
                        {testimonials.map((t, index) => (
                            <div key={index} className="px-3">
                                <div className="bg-white shadow-xl rounded-2xl border border-gray-200 p-6 text-left relative overflow-hidden group transition-all duration-300 hover:shadow-2xl">
                                    {/* Decorative corner element */}
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#249742] opacity-10 -translate-y-1/2 translate-x-1/2 rotate-45 rounded-lg"></div>

                                    {/* Quote icons */}
                                    <FaQuoteLeft className="text-[#249742] text-3xl opacity-20 absolute top-6 left-6" />

                                    <div className="relative z-10">
                                        {/* Rating stars */}
                                        <div className="flex mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar
                                                    key={i}
                                                    className={`text-lg ${
                                                        i < t.rating
                                                            ? "text-yellow-400"
                                                            : "text-gray-300"
                                                    }`}
                                                />
                                            ))}
                                        </div>

                                        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                                            {t.feedback}
                                        </p>

                                        <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
                                            <div className="relative">
                                                <img
                                                    src={t.image}
                                                    alt={t.name}
                                                    className="w-14 h-14 object-cover rounded-full border-2 border-[#249742] p-1"
                                                    onError={(e) => {
                                                        e.target.onerror = null;
                                                        e.target.src =
                                                            "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
                                                    }}
                                                />
                                                <div className="absolute -bottom-1 -right-1 bg-[#8E1C20] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                                                    {t.batch}
                                                </div>
                                            </div>

                                            <div className="text-left">
                                                <h4 className="font-semibold text-[#249742] text-lg">
                                                    {t.name}
                                                </h4>
                                                <p className="text-sm text-gray-600">
                                                    প্রাক্তন শিক্ষার্থী
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Statistics section */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                        <div className="text-4xl font-bold text-[#249742] mb-2">
                            ১০০০+
                        </div>
                        <p className="text-gray-700">প্রাক্তন শিক্ষার্থী</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                        <div className="text-4xl font-bold text-[#249742] mb-2">
                            ৯৫%
                        </div>
                        <p className="text-gray-700">উচ্চশিক্ষা গ্রহণকারী</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                        <div className="text-4xl font-bold text-[#249742] mb-2">
                            ৫০+
                        </div>
                        <p className="text-gray-700">পেশাজীবী</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                        <div className="text-4xl font-bold text-[#249742] mb-2">
                            ৪.৮/৫
                        </div>
                        <p className="text-gray-700">সন্তুষ্টির হার</p>
                    </div>
                </div>

                {/* Alumni success stories */}
                <div className="mt-16 bg-gradient-to-r from-[#249742] to-[#1c6e36] rounded-2xl shadow-xl p-8 text-white">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                আমাদের শিক্ষার্থীদের সাফল্য
                            </h3>
                            <p className="mb-6 max-w-2xl">
                                আমাদের প্রাক্তন শিক্ষার্থীরা দেশ-বিদেশে বিভিন্ন
                                ক্ষেত্রে সাফল্যের সাথে অবদান রাখছেন। অনেকেই
                                উচ্চশিক্ষা গ্রহণ করেছেন এবং বিভিন্ন পেশায়
                                নিজেদের প্রতিষ্ঠিত করেছেন।
                            </p>
                            <button className="bg-white text-[#249742] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
                                সাফল্যের গল্পগুলো দেখুন
                            </button>
                        </div>

                        <div className="flex -space-x-4">
                            {[1, 2, 3, 4, 5].map((item, index) => (
                                <div
                                    key={index}
                                    className="w-16 h-16 rounded-full border-2 border-white overflow-hidden"
                                >
                                    <img
                                        src={`https://randomuser.me/api/portraits/${
                                            index % 2 === 0 ? "men" : "women"
                                        }/${item + 20}.jpg`}
                                        alt={`Alumni ${item}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center border-2 border-white">
                                <span className="font-bold">১০০+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
