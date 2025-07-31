import SectionHeader from "../../components/sectionHeader/SectionHeader";
import {
    FaGraduationCap,
    FaHistory,
    FaLightbulb,
    FaUserFriends,
    FaBook,
    FaMedal,
} from "react-icons/fa";

const AboutUs = () => {
    return (
        <section className="relative bg-white py-16 px-4 md:px-8 lg:px-16 text-gray-800 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 -z-10">
                <div className="absolute top-20 left-1/4 w-24 h-24 rounded-full bg-[#249742] animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-[#249742] animate-pulse delay-300"></div>
                <div className="absolute bottom-20 left-1/3 w-20 h-20 rounded-full bg-[#249742] animate-pulse delay-700"></div>
                <div className="absolute bottom-1/4 right-10 w-12 h-12 rounded-full bg-[#249742] animate-pulse delay-1000"></div>
                <div className="absolute top-1/4 left-10 w-14 h-14 rounded-full bg-[#249742] animate-pulse delay-500"></div>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="mb-8 md:mb-12 lg:mb-16">
                    <SectionHeader
                        title={"প্রতিষ্ঠান সম্পর্কে বিস্তারিত"}
                        subtitle={
                            "জানুন আমাদের প্রতিষ্ঠানের ইতিহাস ও ঐতিহ্যের গুল্প এবং আমাদের লক্ষ্য ও উদ্দেশ্য।"
                        }
                    ></SectionHeader>
                </div>

                {/* Hero image with decorative elements */}
                <div className="mt-6 mb-12 relative rounded-xl overflow-hidden shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#249742]/80 to-transparent z-10"></div>
                    <div className="absolute top-6 right-6 z-20">
                        <div className="bg-white px-4 py-2 rounded-full shadow-md">
                            <p className="text-[#249742] font-medium">
                                প্রতিষ্ঠিত: ১৯৬৫ সাল
                            </p>
                        </div>
                    </div>
                    <img
                        className="w-full h-[400px] object-cover transition-transform duration-700 hover:scale-105"
                        src="https://i.ibb.co/SxtJdzT/school.jpg"
                        alt="শ্রীরায়ের চর এস আই এম উচ্চ বিদ্যালয়"
                    />
                    <div className="absolute bottom-6 left-6 z-20">
                        <h2 className="text-3xl font-bold text-white drop-shadow-lg">
                            শ্রীরায়ের চর এস আই এম উচ্চ বিদ্যালয়
                        </h2>
                        <p className="text-white mt-2 max-w-lg">
                            একটি ঐতিহ্যবাহী শিক্ষা প্রতিষ্ঠান যেখানে গড়ে উঠছে
                            আগামীর নেতৃত্ব
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {/* Overview Section */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 border-l-4 border-[#249742]">
                            <div className="flex items-center mb-5">
                                <div className="bg-[#249742]/10 p-3 rounded-full mr-4">
                                    <FaGraduationCap className="text-2xl text-[#249742]" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">
                                    প্রতিষ্ঠান সম্পর্কে সংক্ষিপ্ত বিবরণ
                                </h3>
                            </div>
                            <p className="text-lg leading-relaxed text-gray-700">
                                শ্রীরায়ের চর এস আই এম উচ্চ বিদ্যালয় ১৯৬৫ সালে
                                প্রতিষ্ঠিত হয়। প্রতিষ্ঠার পর থেকে এটি অত্র
                                অঞ্চলের শিক্ষার্থীদের মানসম্মত শিক্ষা প্রদানের
                                লক্ষ্যে কাজ করে যাচ্ছে। আধুনিক সুযোগ-সুবিধা,
                                দক্ষ শিক্ষকবৃন্দ এবং উন্নত পাঠদান পদ্ধতির
                                মাধ্যমে প্রতিষ্ঠানটি একটি মডেল শিক্ষা
                                প্রতিষ্ঠানে রূপান্তরিত হয়েছে।
                            </p>
                        </div>
                    </div>

                    {/* Mission and Vision */}
                    <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 border-l-4 border-[#8E1C20]">
                        <div className="flex items-center mb-5">
                            <div className="bg-[#8E1C20]/10 p-3 rounded-full mr-4">
                                <FaLightbulb className="text-2xl text-[#8E1C20]" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800">
                                আমাদের লক্ষ্য ও উদ্দেশ্য
                            </h3>
                        </div>
                        <p className="text-lg leading-relaxed text-gray-700">
                            শিক্ষার্থীদের নৈতিক, সামাজিক ও একাডেমিক দিক থেকে
                            পরিপূর্ণ মানুষ হিসেবে গড়ে তোলা আমাদের প্রধান
                            লক্ষ্য। আমরা এমন একটি পরিবেশ নিশ্চিত করতে চাই যেখানে
                            শিক্ষার্থী আত্মবিশ্বাস, নেতৃত্ব ও মূল্যবোধ নিয়ে
                            বেড়ে উঠবে।
                        </p>
                    </div>
                </div>

                {/* History Timeline Section */}
                <div className="mb-16">
                    <div className="flex items-center mb-8">
                        <div className="bg-[#249742]/10 p-3 rounded-full mr-4">
                            <FaHistory className="text-2xl text-[#249742]" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">
                            আমাদের ইতিহাসের ধারা
                        </h3>
                    </div>

                    <div className="relative pl-8 border-l-2 border-[#249742] ml-4">
                        {/* Timeline item */}
                        <div className="mb-10 relative">
                            <div className="absolute -left-10 w-6 h-6 rounded-full bg-[#249742] border-4 border-white"></div>
                            <h4 className="text-xl font-bold text-[#249742] mb-2">
                                ১৯৬৫: প্রতিষ্ঠার সূচনা
                            </h4>
                            <p className="text-gray-700">
                                স্থানীয় শিক্ষানুরাগী ব্যক্তিবর্গের উদ্যোগে
                                প্রতিষ্ঠিত হয় শ্রীরায়ের চর এস আই এম উচ্চ
                                বিদ্যালয়। শুরুতে মাত্র ৩টি কক্ষ ও ৫০ জন
                                শিক্ষার্থী নিয়ে যাত্রা শুরু করে প্রতিষ্ঠানটি।
                            </p>
                        </div>

                        {/* Timeline item */}
                        <div className="mb-10 relative">
                            <div className="absolute -left-10 w-6 h-6 rounded-full bg-[#249742] border-4 border-white"></div>
                            <h4 className="text-xl font-bold text-[#249742] mb-2">
                                ১৯৭৮: প্রথম সরকারি স্বীকৃতি
                            </h4>
                            <p className="text-gray-700">
                                প্রতিষ্ঠানের একাডেমিক সাফল্য ও অবকাঠামোগত
                                উন্নতির স্বীকৃতি স্বরূপ প্রাপ্ত হয় সরকারি
                                অনুমোদন।
                            </p>
                        </div>

                        {/* Timeline item */}
                        <div className="mb-10 relative">
                            <div className="absolute -left-10 w-6 h-6 rounded-full bg-[#249742] border-4 border-white"></div>
                            <h4 className="text-xl font-bold text-[#249742] mb-2">
                                ২০০৫: বিজ্ঞান ভবন উদ্বোধন
                            </h4>
                            <p className="text-gray-700">
                                আধুনিক বিজ্ঞান ল্যাব ও কম্পিউটার ল্যাব সমৃদ্ধ
                                নতুন বিজ্ঞান ভবনের উদ্বোধন করা হয়।
                            </p>
                        </div>

                        {/* Timeline item */}
                        <div className="relative">
                            <div className="absolute -left-10 w-6 h-6 rounded-full bg-[#249742] border-4 border-white"></div>
                            <h4 className="text-xl font-bold text-[#249742] mb-2">
                                ২০২০: ডিজিটাল ক্লাসরুম
                            </h4>
                            <p className="text-gray-700">
                                প্রতিষ্ঠানের সকল শ্রেণিকক্ষে আধুনিক ডিজিটাল
                                স্মার্ট ক্লাসরুম চালু করা হয়।
                            </p>
                        </div>
                    </div>
                </div>

                {/* Facilities Section */}
                <div className="mb-16">
                    <div className="flex items-center mb-8">
                        <div className="bg-[#249742]/10 p-3 rounded-full mr-4">
                            <FaBook className="text-2xl text-[#249742]" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">
                            আমাদের সুযোগ-সুবিধা
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-xl shadow-md p-6 text-center border-t-4 border-[#249742] hover:shadow-lg transition-all">
                            <div className="bg-[#249742]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaGraduationCap className="text-2xl text-[#249742]" />
                            </div>
                            <h4 className="text-xl font-bold mb-2">
                                আধুনিক পাঠাগার
                            </h4>
                            <p className="text-gray-700">
                                ১০,০০০+ বই সমৃদ্ধ সমৃদ্ধ গ্রন্থাগার
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-md p-6 text-center border-t-4 border-[#249742] hover:shadow-lg transition-all">
                            <div className="bg-[#249742]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaMedal className="text-2xl text-[#249742]" />
                            </div>
                            <h4 className="text-xl font-bold mb-2">
                                বিজ্ঞান গবেষণাগার
                            </h4>
                            <p className="text-gray-700">
                                আধুনিক যন্ত্রপাতি সমৃদ্ধ বিজ্ঞান ল্যাব
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-md p-6 text-center border-t-4 border-[#249742] hover:shadow-lg transition-all">
                            <div className="bg-[#249742]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaUserFriends className="text-2xl text-[#249742]" />
                            </div>
                            <h4 className="text-xl font-bold mb-2">
                                সাংস্কৃতিক চর্চা কেন্দ্র
                            </h4>
                            <p className="text-gray-700">
                                নাচ, গান ও আবৃত্তির জন্য বিশেষায়িত স্থান
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-md p-6 text-center border-t-4 border-[#249742] hover:shadow-lg transition-all">
                            <div className="bg-[#249742]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaBook className="text-2xl text-[#249742]" />
                            </div>
                            <h4 className="text-xl font-bold mb-2">
                                ডিজিটাল শ্রেণিকক্ষ
                            </h4>
                            <p className="text-gray-700">
                                সব শ্রেণিকক্ষে স্মার্ট ক্লাসরুম সুবিধা
                            </p>
                        </div>
                    </div>
                </div>

                {/* Founder and Principal */}
                <div className="mb-16">
                    <div className="flex items-center mb-8">
                        <div className="bg-[#249742]/10 p-3 rounded-full mr-4">
                            <FaUserFriends className="text-2xl text-[#249742]" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">
                            প্রতিষ্ঠাতা ও প্রধান শিক্ষক এর বাণী
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-white to-[#249742]/10 rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl">
                            <div className="p-6 md:p-8">
                                <div className="flex flex-col md:flex-row items-center">
                                    <div className="mb-4 md:mb-0 md:mr-6">
                                        <div className="relative">
                                            <img
                                                className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                                                src="https://res.cloudinary.com/dvhkcr2jb/image/upload/v1753203431/premium_photo-1683121413514-502338cb0b74_guik5n.avif"
                                                alt="Sirajul Islam"
                                            />
                                            <div className="absolute -bottom-2 -right-2 bg-[#249742] text-white px-3 py-1 rounded-full text-sm font-medium">
                                                প্রতিষ্ঠাতা
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="text-2xl font-extrabold text-[#249742] mb-1">
                                            শ্রদ্ধেয় সিরাজুল ইসলাম
                                        </h1>
                                        <p className="text-gray-600 font-medium mb-4">
                                            প্রতিষ্ঠাতা, এস এস আই এম এস
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-6 pt-4 border-t border-gray-200">
                                    <p className="text-gray-700 leading-relaxed">
                                        "শিক্ষার্থীদের নৈতিক, সামাজিক ও একাডেমিক
                                        দিক থেকে পরিপূর্ণ মানুষ হিসেবে গড়ে তোলা
                                        আমাদের প্রধান লক্ষ্য। আমরা এমন একটি
                                        পরিবেশ নিশ্চিত করতে চাই যেখানে
                                        শিক্ষার্থী আত্মবিশ্বাস, নেতৃত্ব ও
                                        মূল্যবোধ নিয়ে বেড়ে উঠবে।"
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-white to-[#8E1C20]/10 rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl">
                            <div className="p-6 md:p-8">
                                <div className="flex flex-col md:flex-row items-center">
                                    <div className="mb-4 md:mb-0 md:mr-6">
                                        <div className="relative">
                                            <img
                                                className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                                                src="https://res.cloudinary.com/dvhkcr2jb/image/upload/v1753203431/premium_photo-1683121413514-502338cb0b74_guik5n.avif"
                                                alt="Sirajul Islam"
                                            />
                                            <div className="absolute -bottom-2 -right-2 bg-[#8E1C20] text-white px-3 py-1 rounded-full text-sm font-medium">
                                                প্রধান শিক্ষক
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="text-2xl font-extrabold text-[#8E1C20] mb-1">
                                            জয়নাল আবেদীন শিকদার
                                        </h1>
                                        <p className="text-gray-600 font-medium mb-4">
                                            প্রধান শিক্ষক, এস এস আই এম এস
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-6 pt-4 border-t border-gray-200">
                                    <p className="text-gray-700 leading-relaxed">
                                        "আমাদের প্রত্যাশা প্রতিটি শিক্ষার্থী যেন
                                        তাদের মেধা ও মননের পূর্ণ বিকাশ ঘটাতে
                                        পারে। আমরা বিশ্বাস করি যে শিক্ষার প্রকৃত
                                        উদ্দেশ্য জ্ঞানের পাশাপাশি চরিত্র গঠন ও
                                        মানবিক মূল্যবোধের বিকাশ।"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
