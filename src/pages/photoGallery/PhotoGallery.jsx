import React, { useState } from "react";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import {
    FaSearch,
    FaTimes,
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";

const PhotoGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [filter, setFilter] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");

    const galleryImages = [
        {
            id: 1,
            src: "https://i.ibb.co/DYd16TV/5680e4eb-33ea-48b7-85a1-a2c75c66651f.jpg",
            category: "events",
            title: "বার্ষিক পুরস্কার বিতরণী",
            description:
                "২০২৩ শিক্ষাবর্ষের বার্ষিক পুরস্কার বিতরণী অনুষ্ঠানে প্রধান অতিথি",
        },
        {
            id: 2,
            src: "https://i.ibb.co/SxtJdzT/school.jpg",
            category: "campus",
            title: "বিদ্যালয় প্রাঙ্গণ",
            description: "সকালের সূর্যালোকে বিদ্যালয়ের মূল ভবন",
        },
        {
            id: 3,
            src: "https://i.ibb.co/q5FTsWz/c2acb51d-317b-4956-9b66-40d60f60ff4b.jpg",
            category: "activities",
            title: "বিজ্ঞান মেলা",
            description: "বার্ষিক বিজ্ঞান মেলায় শিক্ষার্থীদের প্রদর্শনী",
        },
        {
            id: 4,
            src: "https://i.ibb.co/BCL8yTm/school2.jpg",
            category: "campus",
            title: "খেলার মাঠ",
            description:
                "বিদ্যালয়ের ক্রীড়া মাঠ, যেখানে প্রতিদিন খেলাধুলা ও শরীরচর্চা হয়",
        },
        {
            id: 5,
            src: "https://i.ibb.co/ZBfZjr7/school1.jpg",
            category: "events",
            title: "স্বাধীনতা দিবস",
            description: "স্বাধীনতা দিবস উপলক্ষ্যে আয়োজিত সাংস্কৃতিক অনুষ্ঠান",
        },
        {
            id: 6,
            src: "https://i.ibb.co/DYd16TV/5680e4eb-33ea-48b7-85a1-a2c75c66651f.jpg",
            category: "activities",
            title: "শিক্ষা সফর",
            description: "ঐতিহাসিক স্থান পরিদর্শনে শিক্ষা সফরের কিছু মুহূর্ত",
        },
        {
            id: 7,
            src: "https://i.ibb.co/SxtJdzT/school.jpg",
            category: "campus",
            title: "গ্রন্থাগার",
            description:
                "বিদ্যালয়ের সমৃদ্ধ গ্রন্থাগার, যেখানে জ্ঞানের ভাণ্ডার",
        },
        {
            id: 8,
            src: "https://i.ibb.co/q5FTsWz/c2acb51d-317b-4956-9b66-40d60f60ff4b.jpg",
            category: "events",
            title: "বিজয় দিবস",
            description: "বিজয় দিবসের কুচকাওয়াজে শিক্ষার্থীদের অংশগ্রহণ",
        },
        {
            id: 9,
            src: "https://i.ibb.co/BCL8yTm/school2.jpg",
            category: "activities",
            title: "বিতর্ক প্রতিযোগিতা",
            description:
                "বার্ষিক বিতর্ক প্রতিযোগিতায় অংশগ্রহণকারী শিক্ষার্থীরা",
        },
        {
            id: 10,
            src: "https://i.ibb.co/ZBfZjr7/school1.jpg",
            category: "events",
            title: "শিক্ষক দিবস",
            description: "শিক্ষক দিবসে শিক্ষকদের প্রতি শ্রদ্ধা নিবেদন",
        },
        {
            id: 11,
            src: "https://i.ibb.co/SxtJdzT/school.jpg",
            category: "campus",
            title: "বিজ্ঞান গবেষণাগার",
            description: "আধুনিক যন্ত্রপাতি সমৃদ্ধ বিজ্ঞান গবেষণাগার",
        },
        {
            id: 12,
            src: "https://i.ibb.co/q5FTsWz/c2acb51d-317b-4956-9b66-40d60f60ff4b.jpg",
            category: "activities",
            title: "বৃক্ষরোপণ কর্মসূচি",
            description: "পরিবেশ দিবসে বিদ্যালয় প্রাঙ্গণে বৃক্ষরোপণ কর্মসূচি",
        },
    ];

    const filteredImages = galleryImages.filter((img) => {
        const matchesCategory = filter === "all" || img.category === filter;
        const matchesSearch =
            img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            img.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const openLightbox = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = "auto";
    };

    const navigateImage = (direction) => {
        const currentIndex = filteredImages.findIndex(
            (img) => img.id === selectedImage.id
        );
        let newIndex;

        if (direction === "prev") {
            newIndex =
                currentIndex === 0
                    ? filteredImages.length - 1
                    : currentIndex - 1;
        } else {
            newIndex =
                currentIndex === filteredImages.length - 1
                    ? 0
                    : currentIndex + 1;
        }

        setSelectedImage(filteredImages[newIndex]);
    };

    return (
        <div className="relative min-h-screen bg-gradient-to-b from-white to-[#f0fdf4] py-12 px-4 md:px-8">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-10 z-0">
                <div className="absolute top-10 left-1/4 w-24 h-24 rounded-full bg-[#249742] animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-[#249742] animate-pulse delay-300"></div>
                <div className="absolute bottom-20 left-1/3 w-20 h-20 rounded-full bg-[#8E1C20] animate-pulse delay-700"></div>
                <div className="absolute bottom-1/4 right-10 w-12 h-12 rounded-full bg-[#249742] animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <SectionHeader
                    title={"ফটো গ্যালারি"}
                    subtitle={
                        "আমাদের স্কুলের ইতিহাসের কিছু স্মরণীয় মুহূর্ত ও স্থিরচিত্র"
                    }
                />

                {/* Gallery Controls */}
                <div className="mt-10 bg-white rounded-2xl shadow-lg p-6 mb-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="w-full md:w-1/3 relative">
                            <input
                                type="text"
                                placeholder="ছবি অনুসন্ধান করুন..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#249742] focus:border-transparent"
                            />
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <button
                                onClick={() => setFilter("all")}
                                className={`px-4 py-2 rounded-full ${
                                    filter === "all"
                                        ? "bg-gradient-to-r from-[#249742] to-[#1c6e36] text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                            >
                                সব ছবি
                            </button>
                            <button
                                onClick={() => setFilter("campus")}
                                className={`px-4 py-2 rounded-full ${
                                    filter === "campus"
                                        ? "bg-gradient-to-r from-[#249742] to-[#1c6e36] text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                            >
                                বিদ্যালয় প্রাঙ্গণ
                            </button>
                            <button
                                onClick={() => setFilter("events")}
                                className={`px-4 py-2 rounded-full ${
                                    filter === "events"
                                        ? "bg-gradient-to-r from-[#8E1C20] to-[#6c1518] text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                            >
                                অনুষ্ঠান
                            </button>
                            <button
                                onClick={() => setFilter("activities")}
                                className={`px-4 py-2 rounded-full ${
                                    filter === "activities"
                                        ? "bg-gradient-to-r from-[#249742] to-[#1c6e36] text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                            >
                                কার্যক্রম
                            </button>
                        </div>
                    </div>

                    {searchTerm && (
                        <div className="mt-4 text-center">
                            <p className="text-gray-600">
                                <span className="font-semibold">
                                    {filteredImages.length}
                                </span>{" "}
                                টি ছবি পাওয়া গেছে "{searchTerm}" এর জন্য
                            </p>
                        </div>
                    )}
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredImages.map((image) => (
                        <div
                            key={image.id}
                            className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            onClick={() => openLightbox(image)}
                        >
                            <div className="aspect-w-16 aspect-h-12">
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                                <h3 className="text-white text-lg font-bold mb-1">
                                    {image.title}
                                </h3>
                                <p className="text-gray-200 text-sm line-clamp-2">
                                    {image.description}
                                </p>
                                <div className="mt-2 text-xs text-gray-300 capitalize">
                                    {image.category === "campus" &&
                                        "বিদ্যালয় প্রাঙ্গণ"}
                                    {image.category === "events" && "অনুষ্ঠান"}
                                    {image.category === "activities" &&
                                        "কার্যক্রম"}
                                </div>
                            </div>

                            <div className="absolute top-4 right-4 bg-white/80 text-gray-800 px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {image.category === "campus" && <span>📷</span>}
                                {image.category === "events" && <span>🎉</span>}
                                {image.category === "activities" && (
                                    <span>⚽</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {filteredImages.length === 0 && (
                    <div className="text-center py-16">
                        <div className="bg-gray-100 border-2 border-dashed rounded-xl p-8 inline-block max-w-lg">
                            <div className="text-6xl mb-4">📷</div>
                            <h3 className="text-xl font-bold text-gray-700 mb-2">
                                কোনো ছবি পাওয়া যায়নি
                            </h3>
                            <p className="text-gray-600">
                                আপনার অনুসন্ধানের সাথে মিলে এমন কোনো ছবি পাওয়া
                                যায়নি। অনুগ্রহ করে ভিন্ন শব্দে আবার চেষ্টা
                                করুন।
                            </p>
                        </div>
                    </div>
                )}

                {/* Lightbox Modal */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        onClick={closeLightbox}
                    >
                        <button
                            className="absolute top-6 right-6 text-white text-3xl z-10"
                            onClick={closeLightbox}
                        >
                            <FaTimes />
                        </button>

                        <button
                            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white text-3xl z-10 bg-black/50 p-3 rounded-full hover:bg-black/70 transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateImage("prev");
                            }}
                        >
                            <FaChevronLeft />
                        </button>

                        <button
                            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white text-3xl z-10 bg-black/50 p-3 rounded-full hover:bg-black/70 transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateImage("next");
                            }}
                        >
                            <FaChevronRight />
                        </button>

                        <div
                            className="max-w-6xl w-full max-h-[90vh] relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-2/3">
                                    <img
                                        src={selectedImage.src}
                                        alt={selectedImage.title}
                                        className="w-full h-full max-h-[70vh] object-contain rounded-xl"
                                    />
                                </div>

                                <div className="md:w-1/3 bg-white/90 text-gray-800 rounded-xl p-6">
                                    <h3 className="text-2xl font-bold mb-3">
                                        {selectedImage.title}
                                    </h3>
                                    <p className="mb-6">
                                        {selectedImage.description}
                                    </p>

                                    <div className="mb-4">
                                        <span className="font-semibold">
                                            বিষয়শ্রেণী:
                                        </span>
                                        <span className="ml-2 px-3 py-1 bg-gray-200 rounded-full text-sm capitalize">
                                            {selectedImage.category ===
                                                "campus" &&
                                                "বিদ্যালয় প্রাঙ্গণ"}
                                            {selectedImage.category ===
                                                "events" && "অনুষ্ঠান"}
                                            {selectedImage.category ===
                                                "activities" && "কার্যক্রম"}
                                        </span>
                                    </div>

                                    <div className="mt-8">
                                        <button className="bg-[#249742] hover:bg-[#1e7a37] text-white px-6 py-2 rounded-lg flex items-center gap-2">
                                            <FaDownload />
                                            ছবি ডাউনলোড করুন
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="text-white text-center mt-4">
                                {filteredImages.findIndex(
                                    (img) => img.id === selectedImage.id
                                ) + 1}{" "}
                                / {filteredImages.length}
                            </div>
                        </div>
                    </div>
                )}

                {/* Call to Action */}
                <div className="mt-16 bg-gradient-to-r from-[#8E1C20] to-[#6c1518] rounded-2xl p-8 text-center text-white shadow-2xl">
                    <h3 className="text-2xl font-bold mb-4">
                        আপনার স্মরণীয় মুহূর্ত শেয়ার করুন
                    </h3>
                    <p className="max-w-2xl mx-auto mb-6">
                        আপনি যদি আমাদের বিদ্যালয়ের সাথে সম্পর্কিত কোন স্মরণীয়
                        ছবি বা মুহূর্ত ক্যাপচার করে থাকেন, তাহলে সেগুলো আমাদের
                        সাথে শেয়ার করুন। আপনার ছবি এই গ্যালারিতে স্থান পেতে
                        পারে।
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="bg-white text-[#8E1C20] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-md">
                            ছবি আপলোড করুন
                        </button>
                        <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                            গ্যালারি গাইডলাইন
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;
