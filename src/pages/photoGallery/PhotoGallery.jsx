import React, { useEffect, useState } from "react";
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

    const [galleryImages, setGalleryImages] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/photos")
            .then((res) => res.json())
            .then((data) => setGalleryImages(data));
    }, []);

    const filteredImages = galleryImages.filter((img) => {
        const matchesCategory = filter === "all" || img.category === filter;

        const matchesSearch =
            img.image_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            img.short_description
                .toLowerCase()
                .includes(searchTerm.toLowerCase());

        return matchesCategory && matchesSearch;
    });

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
                            key={image._id}
                            className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="w-full h-64">
                                <img
                                    src={image.image_url}
                                    alt={image.image_title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                                <h3 className="text-white text-lg font-bold mb-1">
                                    {image.image_title}
                                </h3>
                                <p className="text-gray-200 text-sm line-clamp-2">
                                    {image.short_description}
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
