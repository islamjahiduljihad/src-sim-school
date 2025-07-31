import {
    FaChalkboardTeacher,
    FaLaptopCode,
    FaTrophy,
    FaUserGraduate,
    FaLightbulb,
    FaHandsHelping,
} from "react-icons/fa";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
    return (
        <div className="relative py-16 px-4 md:px-10 lg:px-20 overflow-hidden bg-[#eef9f0]">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-1/4 w-24 h-24 rounded-full bg-[#249742] animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-[#249742] animate-pulse delay-300"></div>
                <div className="absolute bottom-20 left-1/3 w-20 h-20 rounded-full bg-[#8E1C20] animate-pulse delay-700"></div>
                <div className="absolute bottom-1/4 right-10 w-12 h-12 rounded-full bg-[#249742] animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10">
                <SectionHeader
                    title="আমাদেরকে কেন বেছে নেবেন?"
                    subtitle="জেনে নিন কীভাবে শ্রীরায়েরচর এস.আই.এম. উচ্চ বিদ্যালয় হয়ে উঠেছে একটি বিশেষ ও সেরা শিক্ষাপ্রতিষ্ঠান"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
                    {/* Feature 1 */}
                    <motion.div
                        className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex items-start mb-4">
                            <div className="bg-[#249742]/10 rounded-full p-3 mr-4 flex-shrink-0">
                                <FaChalkboardTeacher className="text-2xl text-[#249742]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#249742] mb-2">
                                    সুদক্ষ শিক্ষকবৃন্দ
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    উদ্যমী, দক্ষ ও প্রতিশ্রুতিশীল — আমাদের
                                    শিক্ষকরা প্রতিটি শিক্ষার্থীর জন্য মানসম্মত
                                    শিক্ষার নিশয়তা দেন।
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 pt-3 border-t border-gray-100">
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-[#249742] mr-2"></span>
                                    <span>সকল শিক্ষক এম.এড ডিগ্রিধারী</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-[#249742] mr-2"></span>
                                    <span>নিয়মিত প্রশিক্ষণে অংশগ্রহণ</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-[#249742] mr-2"></span>
                                    <span>
                                        শিক্ষার্থী-কেন্দ্রিক পাঠদান পদ্ধতি
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Feature 2 */}
                    <motion.div
                        className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex items-start mb-4">
                            <div className="bg-[#249742]/10 rounded-full p-3 mr-4 flex-shrink-0">
                                <FaLaptopCode className="text-2xl text-[#249742]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#249742] mb-2">
                                    আধুনিক সুবিধা
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    ২১শ শতকের শিক্ষার জন্য স্মার্ট শ্রেণিকক্ষ,
                                    কম্পিউটার ল্যাব এবং ডিজিটাল লাইব্রেরি।
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 pt-3 border-t border-gray-100">
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-[#249742] mr-2"></span>
                                    <span>সব ক্লাসরুমে স্মার্ট বোর্ড</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-[#249742] mr-2"></span>
                                    <span>হাই-স্পিড ইন্টারনেট সংযোগ</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-[#249742] mr-2"></span>
                                    <span>ডিজিটাল লাইব্রেরি সহ ১০,০০০+ বই</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Feature 3 */}
                    <motion.div
                        className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex items-start mb-4">
                            <div className="bg-[#249742]/10 rounded-full p-3 mr-4 flex-shrink-0">
                                <FaUserGraduate className="text-2xl text-[#249742]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#249742] mb-2">
                                    শিক্ষার্থী ফোকাসড
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    আমরা প্রতিটি শিক্ষার্থীর প্রতিভা লালন করি
                                    এবং তাদের নিরাপদ পরিবেশে বিকাশে সহায়তা করি।
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 pt-3 border-t border-gray-100">
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-[#249742] mr-2"></span>
                                    <span>ব্যক্তিগত কাউন্সেলিং সেবা</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-[#249742] mr-2"></span>
                                    <span>
                                        শিক্ষার্থীদের জন্য মেন্টরশিপ প্রোগ্রাম
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-[#249742] mr-2"></span>
                                    <span>
                                        সামাজিক ও মানসিক বিকাশে কর্মসূচি
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Feature 4 */}
                    <motion.div
                        className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex items-start mb-4">
                            <div className="bg-[#249742]/10 rounded-full p-3 mr-4 flex-shrink-0">
                                <FaTrophy className="text-2xl text-[#249742]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#249742] mb-2">
                                    শিক্ষাগত উৎকর্ষতা
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    পরীক্ষার ফলাফল এবং সহশিক্ষা কার্যক্রমে
                                    ধারাবাহিক উচ্চ সাফল্য।
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 pt-3 border-t border-gray-100">
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-[#249742] mr-2"></span>
                                    <span>৯৫% পাসের হার (জেএসসি ও এসএসসি)</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-[#249742] mr-2"></span>
                                    <span>জাতীয় পর্যায়ে পুরস্কারপ্রাপ্ত</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-[#249742] mr-2"></span>
                                    <span>
                                        বিজ্ঞান ও প্রযুক্তিতে বিশেষ সাফল্য
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Feature 5 */}
                    <motion.div
                        className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex items-start mb-4">
                            <div className="bg-[#249742]/10 rounded-full p-3 mr-4 flex-shrink-0">
                                <FaHandsHelping className="text-2xl text-[#249742]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#249742] mb-2">
                                    সম্প্রদায় অংশগ্রহণ
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    অভিভাবক ও স্থানীয় সম্প্রদায়ের সাথে ঘনিষ্ঠ
                                    সম্পর্কে আমরা গর্বিত।
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 pt-3 border-t border-gray-100">
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-[#249742] mr-2"></span>
                                    <span>নিয়মিত অভিভাবক-শিক্ষক বৈঠক</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-[#249742] mr-2"></span>
                                    <span>সম্প্রদায় উন্নয়ন কর্মসূচি</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-[#249742] mr-2"></span>
                                    <span>স্থানীয় উদ্যোগে সহযোগিতা</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Feature 6 */}
                    <motion.div
                        className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex items-start mb-4">
                            <div className="bg-[#249742]/10 rounded-full p-3 mr-4 flex-shrink-0">
                                <FaLightbulb className="text-2xl text-[#249742]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#249742] mb-2">
                                    উদ্ভাবনী পাঠ্যক্রম
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    ঐতিহ্য ও আধুনিকতার সমন্বয়ে গড়ে উঠেছে
                                    আমাদের উদ্ভাবনী শিক্ষা পদ্ধতি।
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 pt-3 border-t border-gray-100">
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-[#249742] mr-2"></span>
                                    <span>প্রজেক্ট ভিত্তিক শিক্ষা</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-[#249742] mr-2"></span>
                                    <span>বাস্তব জীবনের সাথে সংযোগ স্থাপন</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-[#249742] mr-2"></span>
                                    <span>সৃজনশীল দক্ষতা উন্নয়ন</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Statistics Section */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    <div className="text-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div className="text-4xl font-bold text-[#249742] mb-2">
                            ৯৫%
                        </div>
                        <p className="text-gray-700">পাসের হার</p>
                    </div>
                    <div className="text-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div className="text-4xl font-bold text-[#249742] mb-2">
                            ৫০+
                        </div>
                        <p className="text-gray-700">অভিজ্ঞ শিক্ষক</p>
                    </div>
                    <div className="text-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div className="text-4xl font-bold text-[#249742] mb-2">
                            ১০+
                        </div>
                        <p className="text-gray-700">সহশিক্ষা কার্যক্রম</p>
                    </div>
                    <div className="text-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div className="text-4xl font-bold text-[#249742] mb-2">
                            ১০০%
                        </div>
                        <p className="text-gray-700">সন্তুষ্ট অভিভাবক</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
