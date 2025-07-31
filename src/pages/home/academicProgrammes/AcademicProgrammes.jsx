import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import {
    FaFlask,
    FaChartLine,
    FaLandmark,
    FaBook,
    FaUsers,
    FaGraduationCap,
} from "react-icons/fa";
import { motion } from "framer-motion";

const AcademicProgrammes = () => {
    return (
        <section className="relative py-16 px-4 md:px-8 lg:px-16 bg-[#eef9f0] overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-24 h-24 rounded-full opacity-10 bg-[#249742] animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-16 h-16 rounded-full opacity-10 bg-[#249742] animate-pulse delay-300"></div>
            <div className="absolute top-1/3 right-1/4 w-8 h-8 rounded-full opacity-10 bg-[#8E1C20] animate-pulse delay-700"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <SectionHeader
                    title="শিক্ষাগত কার্যক্রম"
                    subtitle="আমাদের বিদ্যালয়ে ষষ্ঠ শ্রেণি থেকে দশম শ্রেণি পর্যন্ত শিক্ষার্থীদের সুনির্দিষ্ট লক্ষ্য এবং পছন্দ অনুযায়ী শিক্ষায় পথপ্রদর্শন করা হয়।"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                    {/* Classes 6-8 */}
                    <motion.div
                        className="bg-white rounded-2xl shadow-xl overflow-hidden border-l-4 border-[#249742]"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="p-6 md:p-8">
                            <div className="flex items-start mb-6">
                                <div className="bg-[#249742]/10 rounded-full p-4 mr-5">
                                    <FaBook className="text-2xl text-[#249742]" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-[#249742] mb-2">
                                        ষষ্ঠ থেকে অষ্টম শ্রেণি
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        এই স্তরে শিক্ষার্থীরা বাংলা, ইংরেজি,
                                        গণিত, বিজ্ঞান, সমাজবিজ্ঞানসহ সকল বিষয়ে
                                        একটি শক্তিশালী ভিত্তি গড়ে তোলে। পরবর্তী
                                        শ্রেণিগুলোর জন্য এটি গুরুত্বপূর্ণ
                                        প্রস্তুতির সময়।
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 pt-5 border-t border-gray-100">
                                <h4 className="font-semibold text-gray-800 mb-3">
                                    মূল বৈশিষ্ট্য:
                                </h4>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-[#249742] mr-2"></span>
                                        <span>
                                            সমন্বিত পাঠ্যক্রমের মাধ্যমে মৌলিক
                                            ধারণা গঠন
                                        </span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-[#249742] mr-2"></span>
                                        <span>
                                            ব্যক্তিগত বিকাশের জন্য সহশিক্ষা
                                            কার্যক্রম
                                        </span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-[#249742] mr-2"></span>
                                        <span>
                                            গবেষণা ও অনুসন্ধানমূলক শিক্ষা পদ্ধতি
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Classes 9-10 */}
                    <motion.div
                        className="bg-white rounded-2xl shadow-xl overflow-hidden border-l-4 border-[#8E1C20]"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="p-6 md:p-8">
                            <div className="flex items-start mb-6">
                                <div className="bg-[#8E1C20]/10 rounded-full p-4 mr-5">
                                    <FaGraduationCap className="text-2xl text-[#8E1C20]" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-[#8E1C20] mb-2">
                                        নবম ও দশম শ্রেণি
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        নবম শ্রেণি থেকে শিক্ষার্থীরা তাদের আগ্রহ
                                        ও ভবিষ্যৎ লক্ষ্য অনুযায়ী বিভাগ নির্বাচন
                                        করে – বিজ্ঞান, ব্যবসায় শিক্ষা অথবা
                                        মানবিক। প্রতিটি বিভাগে সংশ্লিষ্ট বিষয়ের
                                        উপর বিশেষ গুরুত্ব দেওয়া হয়।
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6">
                                <h4 className="font-semibold text-gray-800 mb-4">
                                    বিভাগ সমূহ:
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {/* Science */}
                                    <motion.div
                                        className="bg-gradient-to-br from-white to-[#249742]/10 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300"
                                        whileHover={{ y: -5 }}
                                    >
                                        <div className="flex flex-col items-center text-center gap-3">
                                            <div className="bg-[#249742]/10 rounded-full p-3 mb-2">
                                                <FaFlask className="text-2xl text-[#249742]" />
                                            </div>
                                            <h4 className="text-lg font-bold text-[#249742]">
                                                বিজ্ঞান বিভাগ
                                            </h4>
                                            <p className="text-gray-700 text-sm mt-1">
                                                পদার্থবিজ্ঞান, রসায়ন, জীববিজ্ঞান
                                                এবং উচ্চতর গণিতের উপর বিশেষজ্ঞতা
                                            </p>
                                            <div className="mt-3 text-xs text-gray-500">
                                                <span>
                                                    পেশা: ডাক্তার, ইঞ্জিনিয়ার,
                                                    গবেষক
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Business Studies */}
                                    <motion.div
                                        className="bg-gradient-to-br from-white to-[#249742]/10 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300"
                                        whileHover={{ y: -5 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <div className="flex flex-col items-center text-center gap-3">
                                            <div className="bg-[#249742]/10 rounded-full p-3 mb-2">
                                                <FaChartLine className="text-2xl text-[#249742]" />
                                            </div>
                                            <h4 className="text-lg font-bold text-[#249742]">
                                                ব্যবসায় শিক্ষা
                                            </h4>
                                            <p className="text-gray-700 text-sm mt-1">
                                                হিসাববিজ্ঞান, ব্যবসায় সংগঠন,
                                                ফিন্যান্স এবং মার্কেটিং
                                            </p>
                                            <div className="mt-3 text-xs text-gray-500">
                                                <span>
                                                    পেশা: ব্যবসায়ী, ব্যাংকার,
                                                    হিসাবরক্ষক
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Humanities */}
                                    <motion.div
                                        className="bg-gradient-to-br from-white to-[#249742]/10 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300"
                                        whileHover={{ y: -5 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <div className="flex flex-col items-center text-center gap-3">
                                            <div className="bg-[#249742]/10 rounded-full p-3 mb-2">
                                                <FaLandmark className="text-2xl text-[#249742]" />
                                            </div>
                                            <h4 className="text-lg font-bold text-[#249742]">
                                                মানবিক বিভাগ
                                            </h4>
                                            <p className="text-gray-700 text-sm mt-1">
                                                ইতিহাস, ভূগোল, দর্শন এবং
                                                সমাজবিজ্ঞানের গভীর অনুসন্ধান
                                            </p>
                                            <div className="mt-3 text-xs text-gray-500">
                                                <span>
                                                    পেশা: শিক্ষক, লেখক,
                                                    সমাজকর্মী
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Additional Info Section */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                        className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center mb-4">
                            <div className="bg-[#249742]/10 rounded-full p-3 mr-4">
                                <FaUsers className="text-xl text-[#249742]" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">
                                শিক্ষার্থী-শিক্ষক অনুপাত
                            </h3>
                        </div>
                        <p className="text-gray-700">
                            আমাদের বিদ্যালয়ে শিক্ষার্থী-শিক্ষকের অনুপাত ২০:১,
                            যা প্রতিটি শিক্ষার্থীর ব্যক্তিগত মনোযোগ নিশ্চিত করে।
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center mb-4">
                            <div className="bg-[#249742]/10 rounded-full p-3 mr-4">
                                <FaGraduationCap className="text-xl text-[#249742]" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">
                                উচ্চশিক্ষা প্রস্তুতি
                            </h3>
                        </div>
                        <p className="text-gray-700">
                            আমরা দশম শ্রেণির পর উচ্চশিক্ষার জন্য শিক্ষার্থীদের
                            প্রস্তুত করি বিশেষ কাউন্সেলিং এবং গাইডেন্স
                            প্রোগ্রামের মাধ্যমে।
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center mb-4">
                            <div className="bg-[#249742]/10 rounded-full p-3 mr-4">
                                <FaFlask className="text-xl text-[#249742]" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">
                                ব্যবহারিক শিক্ষা
                            </h3>
                        </div>
                        <p className="text-gray-700">
                            প্রতিটি বিভাগে আধুনিক ল্যাবরেটরি এবং ব্যবহারিক
                            ক্লাসের মাধ্যমে তাত্ত্বিক জ্ঞানের বাস্তব প্রয়োগ
                            শেখানো হয়।
                        </p>
                    </motion.div>
                </div>

                {/* Statistics Section */}
                <div className="mt-12 bg-gradient-to-r from-[#249742] to-[#1c6e36] rounded-2xl shadow-xl p-8 text-white">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold mb-2">
                                ৯৫%
                            </div>
                            <p className="text-sm">পাসের হার</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold mb-2">
                                ৫০+
                            </div>
                            <p className="text-sm">বিভাগীয় শিক্ষক</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold mb-2">
                                ১০+
                            </div>
                            <p className="text-sm">বিশেষায়িত ল্যাব</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold mb-2">
                                ১০০%
                            </div>
                            <p className="text-sm">বৃত্তিপ্রাপ্ত</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AcademicProgrammes;
