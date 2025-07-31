import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";

const AtAGlance = () => {
    return (
        <section className="relative my-10 md:my-16 py-8 md:py-12 overflow-hidden">
            {/* Bubble Background Design */}
            <div className="absolute inset-0 -z-10 opacity-10">
                <div className="absolute top-10 left-1/4 w-24 h-24 rounded-full bg-[#249743] animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-[#249743] animate-pulse delay-300"></div>
                <div className="absolute bottom-20 left-1/3 w-20 h-20 rounded-full bg-[#8E1C20] animate-pulse delay-700"></div>
                <div className="absolute bottom-1/4 right-10 w-12 h-12 rounded-full bg-[#249743] animate-pulse delay-1000"></div>
                <div className="absolute top-1/4 left-10 w-14 h-14 rounded-full bg-[#8E1C20] animate-pulse delay-500"></div>
                <div className="absolute bottom-10 right-1/3 w-18 h-18 rounded-full bg-[#249743] animate-pulse delay-1200"></div>
            </div>

            <div className="w-[95%] mx-auto max-w-7xl">
                <SectionHeader
                    title="এক নজরে এস.এস.আই.এম উচ্চ বিদ্যালয়"
                    subtitle="শ্রীরায়েরচর এস.আই.এম. উচ্চ বিদ্যালয় — আমাদের যাত্রা, মূল্যবোধ এবং মানসম্পন্ন শিক্ষার প্রতি আমাদের অঙ্গীকার।"
                />
            </div>

            <div className="mt-10 md:mt-16 w-[95%] md:w-[90%] lg:w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Content Section - Moved to left for better flow */}
                <div className="space-y-6 order-2 lg:order-1">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-[#8E1C20] mb-4 leading-tight">
                        আমাদের সম্পর্কে{" "}
                        <span className="text-[#249743]">এক নজরে</span>
                    </h1>

                    <div className="space-y-4">
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
                            আমাদের বিদ্যালয় একটি ঐতিহ্যবাহী ও মানসম্মত শিক্ষা
                            প্রতিষ্ঠান, যেখানে শিক্ষার্থীদের সার্বিক উন্নয়নের
                            ওপর জোর দেওয়া হয়। ক্লাস ৬ থেকে ১০ পর্যন্ত
                            শিক্ষাদান কার্যক্রম পরিচালিত হয় এবং নবম শ্রেণিতে
                            শিক্ষার্থীরা তাদের পছন্দ অনুযায়ী বিজ্ঞান, ব্যবসায়
                            শিক্ষা অথবা মানবিক বিভাগ বেছে নিতে পারে।
                        </p>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
                            শিক্ষার্থীদের মেধা ও মননের বিকাশে আমরা নিয়মিত
                            পাঠ্যবহির্ভূত কার্যক্রম পরিচালনা করে থাকি, যার মধ্যে
                            আছে বিতর্ক প্রতিযোগিতা, বিজ্ঞান মেলা, কুইজ ও
                            সাংস্কৃতিক অনুষ্ঠান। বিদ্যালয়ের আধুনিক পাঠদান
                            পদ্ধতি ও প্রযুক্তিনির্ভর শ্রেণিকক্ষ শিক্ষার মানকে
                            আরও উন্নত করেছে।
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 md:gap-4 mt-6">
                        <div className="bg-white p-4 rounded-xl border border-[#249743]/20 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center">
                                <div className="bg-[#249743]/10 p-2 rounded-full mr-3">
                                    <span className="text-[#249743] font-bold text-xl">
                                        ১০+
                                    </span>
                                </div>
                                <span className="text-sm font-medium text-gray-700">
                                    বছর ধরে সেবায়
                                </span>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-[#249743]/20 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center">
                                <div className="bg-[#249743]/10 p-2 rounded-full mr-3">
                                    <span className="text-[#249743] font-bold text-xl">
                                        ৫০০+
                                    </span>
                                </div>
                                <span className="text-sm font-medium text-gray-700">
                                    প্রাক্তন শিক্ষার্থী
                                </span>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-[#249743]/20 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center">
                                <div className="bg-[#249743]/10 p-2 rounded-full mr-3">
                                    <span className="text-[#249743] font-bold text-xl">
                                        ৫০+
                                    </span>
                                </div>
                                <span className="text-sm font-medium text-gray-700">
                                    অভিজ্ঞ শিক্ষক
                                </span>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-[#249743]/20 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center">
                                <div className="bg-[#249743]/10 p-2 rounded-full mr-3">
                                    <span className="text-[#249743] font-bold text-xl">
                                        ৫+
                                    </span>
                                </div>
                                <span className="text-sm font-medium text-gray-700">
                                    নিয়মিত স্টাফ
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <Link
                            to="/about"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#249743] to-[#1c6e36] hover:from-[#1c6e36] hover:to-[#155a2b] transition-all duration-300 text-white font-semibold px-6 py-3 rounded-full shadow-lg transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#249743] focus:ring-opacity-50"
                        >
                            আরো পড়ুন{" "}
                            <IoIosArrowDropright className="text-xl ml-1 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>

                {/* Image Section - Moved to right */}
                <div className="relative w-full h-auto rounded-xl overflow-hidden order-1 lg:order-2 transform transition-all duration-500 group">
                    {/* Decorative frame elements */}
                    <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#249743] rounded-tl-xl z-10"></div>
                    <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-[#8E1C20] rounded-tr-xl z-10"></div>
                    <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-[#8E1C20] rounded-bl-xl z-10"></div>
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#249743] rounded-br-xl z-10"></div>

                    {/* Main image with elegant frame */}
                    <div className="relative overflow-hidden rounded-xl shadow-2xl border-8 border-white">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                        <img
                            className="w-full h-[350px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                            src="https://i.ibb.co/DYd16TV/5680e4eb-33ea-48b7-85a1-a2c75c66651f.jpg"
                            alt="বার্ষিক বিজ্ঞান মেলায় শিক্ষার্থীরা"
                        />
                        <div className="absolute bottom-6 left-6 z-20 text-white">
                            <div className="bg-[#249743] px-4 py-2 rounded-lg inline-block">
                                <p className="text-sm font-medium">
                                    বার্ষিক বিজ্ঞান মেলায় শিক্ষার্থীরা
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Decorative accent element */}
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-[#8E1C20] opacity-20 z-0"></div>
                </div>
            </div>
        </section>
    );
};

export default AtAGlance;
