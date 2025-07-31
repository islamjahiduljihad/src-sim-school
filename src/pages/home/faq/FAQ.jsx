import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import {
    FaCalendarAlt,
    FaMoneyBillWave,
    FaBook,
    FaClock,
    FaPhone,
    FaGraduationCap,
    FaUsers,
    FaQuestionCircle,
} from "react-icons/fa";

const FAQ = () => {
    return (
        <section className="py-16 px-4 md:px-8 relative">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-1/4 w-24 h-24 rounded-full bg-[#249742] animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-[#249742] animate-pulse delay-300"></div>
                <div className="absolute bottom-20 left-1/3 w-20 h-20 rounded-full bg-[#8E1C20] animate-pulse delay-700"></div>
                <div className="absolute bottom-1/4 right-10 w-16 h-16 rounded-full bg-[#249742] animate-pulse delay-1000"></div>
                <div className="absolute top-1/4 left-10 w-12 h-12 rounded-full bg-[#249742] animate-pulse delay-1000"></div>
            </div>
            <div className="max-w-4xl mx-auto">
                <div className="w-full mx-auto mb-12">
                    <SectionHeader
                        title={"সচরাচর জিগ্যাসিত প্রশ্ন"}
                        subtitle={
                            "আপনি এইখানে সচারাচর জিগ্যেস করা প্রস্নের উত্তর পাবেন।"
                        }
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left Column - FAQ Items */}
                    <div className="space-y-4">
                        {/* FAQ 1 */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
                            <div className="collapse collapse-arrow">
                                <input type="checkbox" className="peer" />
                                <div className="collapse-title flex items-center gap-3 text-lg font-medium bg-white py-4 px-6">
                                    <div className="bg-[#249742]/10 p-2 rounded-full">
                                        <FaCalendarAlt className="text-[#249742] text-lg" />
                                    </div>
                                    <span>ভর্তি কবে শুরু হয়?</span>
                                </div>
                                <div className="collapse-content bg-[#f9fcfb] text-gray-700 py-4 px-6 border-t border-gray-100">
                                    <p>
                                        সাধারণত প্রতি বছর জানুয়ারি মাসে নতুন
                                        শিক্ষাবর্ষের ভর্তি কার্যক্রম শুরু হয়।
                                        ভর্তি বিজ্ঞপ্তি স্কুলের নোটিশ বোর্ড এবং
                                        ওয়েবসাইটে প্রকাশ করা হয়। ভর্তি প্রক্রিয়া
                                        সাধারণত ২ সপ্তাহ স্থায়ী হয় এবং নির্দিষ্ট
                                        তারিখে লিখিত পরীক্ষা ও মৌখিক পরীক্ষা
                                        অনুষ্ঠিত হয়।
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* FAQ 2 */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
                            <div className="collapse collapse-arrow">
                                <input type="checkbox" className="peer" />
                                <div className="collapse-title flex items-center gap-3 text-lg font-medium bg-white py-4 px-6">
                                    <div className="bg-[#249742]/10 p-2 rounded-full">
                                        <FaMoneyBillWave className="text-[#249742] text-lg" />
                                    </div>
                                    <span>ভর্তি ফি কত?</span>
                                </div>
                                <div className="collapse-content bg-[#f9fcfb] text-gray-700 py-4 px-6 border-t border-gray-100">
                                    <p>
                                        ভর্তি ফি প্রতি বছর সামান্য পরিবর্তন হতে
                                        পারে। সাধারণত এটি ২০০০-৩০০০ টাকার মধ্যে
                                        থাকে। বিস্তারিত তথ্য ভর্তি বিজ্ঞপ্তিতে
                                        উল্লেখ থাকে। ভর্তি ফিতে নিম্নলিখিত
                                        বিষয়গুলি অন্তর্ভুক্ত:
                                    </p>
                                    <ul className="mt-2 space-y-1">
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 rounded-full bg-[#249742] mr-2"></span>
                                            <span>ভর্তি ফি: ১০০০ টাকা</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 rounded-full bg-[#249742] mr-2"></span>
                                            <span>সেশন ফি: ১৫০০ টাকা</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 rounded-full bg-[#249742] mr-2"></span>
                                            <span>
                                                সিকিউরিটি ফি: ৫০০ টাকা
                                                (প্রত্যাবর্তনযোগ্য)
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* FAQ 3 */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
                            <div className="collapse collapse-arrow">
                                <input type="checkbox" className="peer" />
                                <div className="collapse-title flex items-center gap-3 text-lg font-medium bg-white py-4 px-6">
                                    <div className="bg-[#249742]/10 p-2 rounded-full">
                                        <FaBook className="text-[#249742] text-lg" />
                                    </div>
                                    <span>বই ও ইউনিফর্ম কোথা থেকে কিনবো?</span>
                                </div>
                                <div className="collapse-content bg-[#f9fcfb] text-gray-700 py-4 px-6 border-t border-gray-100">
                                    <p>
                                        বই ও ইউনিফর্ম বিদ্যালয়ের নির্ধারিত দোকান
                                        থেকে সংগ্রহ করতে বলা হয়। ভর্তি হওয়ার পর
                                        প্রয়োজনীয় তথ্য সরবরাহ করা হয়। আমাদের
                                        বিদ্যালয়ের সাথে সংশ্লিষ্ট দোকানসমূহ:
                                    </p>
                                    <ul className="mt-2 space-y-1">
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 rounded-full bg-[#249742] mr-2"></span>
                                            <span>
                                                শিক্ষা পুস্তক ভাণ্ডার: স্কুল
                                                গেটের ডান পাশে
                                            </span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 rounded-full bg-[#249742] mr-2"></span>
                                            <span>
                                                ইউনিফর্ম হাউজ: স্কুল গেটের
                                                বিপরীত পাশে
                                            </span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 rounded-full bg-[#249742] mr-2"></span>
                                            <span>
                                                স্টেশনারী দোকান: বিদ্যালয়ের
                                                অভ্যন্তরে
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* FAQ 4 */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
                            <div className="collapse collapse-arrow">
                                <input type="checkbox" className="peer" />
                                <div className="collapse-title flex items-center gap-3 text-lg font-medium bg-white py-4 px-6">
                                    <div className="bg-[#249742]/10 p-2 rounded-full">
                                        <FaClock className="text-[#249742] text-lg" />
                                    </div>
                                    <span>ক্লাস শুরু হওয়ার সময় কখন?</span>
                                </div>
                                <div className="collapse-content bg-[#f9fcfb] text-gray-700 py-4 px-6 border-t border-gray-100">
                                    <p>
                                        ক্লাস সাধারণত সকাল ৮:৩০ মিনিটে শুরু হয়
                                        এবং দুপুর ১:৩০ মিনিটে শেষ হয়। সপ্তাহের
                                        কার্যক্রম অনুযায়ী সময় পরিবর্তন হতে পারে।
                                        বিভিন্ন দিনের ক্লাস রুটিন:
                                    </p>
                                    <div className="mt-3 overflow-x-auto">
                                        <table className="min-w-full text-sm">
                                            <thead className="bg-[#249742]/10">
                                                <tr>
                                                    <th className="py-2 px-3 text-left">
                                                        দিন
                                                    </th>
                                                    <th className="py-2 px-3 text-left">
                                                        শুরু
                                                    </th>
                                                    <th className="py-2 px-3 text-left">
                                                        শেষ
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {[
                                                    {
                                                        day: "শনিবার",
                                                        start: "৮:৩০ AM",
                                                        end: "১:৩০ PM",
                                                    },
                                                    {
                                                        day: "রবিবার",
                                                        start: "৮:৩০ AM",
                                                        end: "১:৩০ PM",
                                                    },
                                                    {
                                                        day: "সোমবার",
                                                        start: "৮:৩০ AM",
                                                        end: "১:৩০ PM",
                                                    },
                                                    {
                                                        day: "মঙ্গলবার",
                                                        start: "৮:৩০ AM",
                                                        end: "১:৩০ PM",
                                                    },
                                                    {
                                                        day: "বুধবার",
                                                        start: "৮:৩০ AM",
                                                        end: "১:৩০ PM",
                                                    },
                                                    {
                                                        day: "বৃহস্পতিবার",
                                                        start: "৮:৩০ AM",
                                                        end: "১২:৩০ PM",
                                                    },
                                                ].map((item, index) => (
                                                    <tr
                                                        key={index}
                                                        className={
                                                            index % 2 === 0
                                                                ? "bg-white"
                                                                : "bg-gray-50"
                                                        }
                                                    >
                                                        <td className="py-2 px-3">
                                                            {item.day}
                                                        </td>
                                                        <td className="py-2 px-3">
                                                            {item.start}
                                                        </td>
                                                        <td className="py-2 px-3">
                                                            {item.end}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - FAQ Items */}
                    <div className="space-y-4">
                        {/* FAQ 5 */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
                            <div className="collapse collapse-arrow">
                                <input type="checkbox" className="peer" />
                                <div className="collapse-title flex items-center gap-3 text-lg font-medium bg-white py-4 px-6">
                                    <div className="bg-[#249742]/10 p-2 rounded-full">
                                        <FaPhone className="text-[#249742] text-lg" />
                                    </div>
                                    <span>
                                        স্কুলের সাথে কিভাবে যোগাযোগ করবো?
                                    </span>
                                </div>
                                <div className="collapse-content bg-[#f9fcfb] text-gray-700 py-4 px-6 border-t border-gray-100">
                                    <p>
                                        যোগাযোগের জন্য আমাদের অফিসিয়াল ফোন
                                        নাম্বার এবং ইমেইল দেওয়া আছে Contact Us
                                        সেকশনে। এছাড়াও ওয়েবসাইটে Contact ফর্ম
                                        রয়েছে। আমাদের যোগাযোগের মাধ্যমসমূহ:
                                    </p>
                                    <ul className="mt-3 space-y-2">
                                        <li className="flex items-center">
                                            <div className="bg-[#249742]/10 p-2 rounded-full mr-3">
                                                <FaPhone className="text-[#249742]" />
                                            </div>
                                            <div>
                                                <div className="font-medium">
                                                    ফোন
                                                </div>
                                                <div className="text-gray-600">
                                                    ০১৯১২-৩৪৫৬৭৮, ০১৭১২-৯৮৭৬৫৪
                                                </div>
                                            </div>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="bg-[#249742]/10 p-2 rounded-full mr-3">
                                                <FaGraduationCap className="text-[#249742]" />
                                            </div>
                                            <div>
                                                <div className="font-medium">
                                                    ইমেইল
                                                </div>
                                                <div className="text-gray-600">
                                                    info@srims.edu.bd
                                                </div>
                                            </div>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="bg-[#249742]/10 p-2 rounded-full mr-3">
                                                <FaUsers className="text-[#249742]" />
                                            </div>
                                            <div>
                                                <div className="font-medium">
                                                    সোশ্যাল মিডিয়া
                                                </div>
                                                <div className="text-gray-600">
                                                    ফেসবুক পেজ:
                                                    fb.com/srims.school
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* FAQ 6 */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
                            <div className="collapse collapse-arrow">
                                <input type="checkbox" className="peer" />
                                <div className="collapse-title flex items-center gap-3 text-lg font-medium bg-white py-4 px-6">
                                    <div className="bg-[#249742]/10 p-2 rounded-full">
                                        <FaGraduationCap className="text-[#249742] text-lg" />
                                    </div>
                                    <span>স্কলারশিপ সুবিধা আছে কি?</span>
                                </div>
                                <div className="collapse-content bg-[#f9fcfb] text-gray-700 py-4 px-6 border-t border-gray-100">
                                    <p>
                                        হ্যাঁ, আমাদের বিদ্যালয়ে মেধাবী ও অসচ্ছল
                                        শিক্ষার্থীদের জন্য বিভিন্ন ধরনের
                                        স্কলারশিপ সুবিধা রয়েছে:
                                    </p>
                                    <ul className="mt-2 space-y-2">
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 rounded-full bg-[#249742] mr-2"></span>
                                            <span>
                                                মেধাবৃত্তি: বার্ষিক পরীক্ষায়
                                                জিপিএ ৫ প্রাপ্ত শিক্ষার্থীদের
                                                জন্য
                                            </span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 rounded-full bg-[#249742] mr-2"></span>
                                            <span>
                                                অসচ্ছল শিক্ষার্থী বৃত্তি:
                                                আর্থিকভাবে অসচ্ছল মেধাবী
                                                শিক্ষার্থীদের জন্য
                                            </span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 rounded-full bg-[#249742] mr-2"></span>
                                            <span>
                                                বিশেষ প্রতিভা বৃত্তি: ক্রীড়া ও
                                                সাংস্কৃতিক ক্ষেত্রে বিশেষ
                                                প্রতিভার অধিকারী শিক্ষার্থীদের
                                                জন্য
                                            </span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 rounded-full bg-[#249742] mr-2"></span>
                                            <span>
                                                প্রাক্তন শিক্ষার্থী বৃত্তি:
                                                বিদ্যালয়ের প্রাক্তন
                                                শিক্ষার্থীদের প্রদত্ত বৃত্তি
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* FAQ 7 */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
                            <div className="collapse collapse-arrow">
                                <input type="checkbox" className="peer" />
                                <div className="collapse-title flex items-center gap-3 text-lg font-medium bg-white py-4 px-6">
                                    <div className="bg-[#249742]/10 p-2 rounded-full">
                                        <FaUsers className="text-[#249742] text-lg" />
                                    </div>
                                    <span>অভিভাবক-শিক্ষক সভা কতবার হয়?</span>
                                </div>
                                <div className="collapse-content bg-[#f9fcfb] text-gray-700 py-4 px-6 border-t border-gray-100">
                                    <p>
                                        প্রতি তিন মাসে একবার নিয়মিত
                                        অভিভাবক-শিক্ষক সভা অনুষ্ঠিত হয়। বিশেষ
                                        প্রয়োজনে অতিরিক্ত সভার আয়োজন করা হতে
                                        পারে। সভার সময়সূচী:
                                    </p>
                                    <div className="mt-3">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[
                                                {
                                                    quarter: "প্রথম ত্রৈমাসিক",
                                                    date: "এপ্রিল ১৫, ২০২৫",
                                                },
                                                {
                                                    quarter:
                                                        "দ্বিতীয় ত্রৈমাসিক",
                                                    date: "জুলাই ২০, ২০২৫",
                                                },
                                                {
                                                    quarter: "তৃতীয় ত্রৈমাসিক",
                                                    date: "অক্টোবর ১০, ২০২৫",
                                                },
                                                {
                                                    quarter: "চতুর্থ ত্রৈমাসিক",
                                                    date: "ডিসেম্বর ২০, ২০২৫",
                                                },
                                            ].map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-[#249742]/5 p-3 rounded-lg border border-[#249742]/20"
                                                >
                                                    <div className="font-medium text-[#249742]">
                                                        {item.quarter}
                                                    </div>
                                                    <div className="text-gray-700">
                                                        {item.date}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FAQ 8 */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
                            <div className="collapse collapse-arrow">
                                <input type="checkbox" className="peer" />
                                <div className="collapse-title flex items-center gap-3 text-lg font-medium bg-white py-4 px-6">
                                    <div className="bg-[#249742]/10 p-2 rounded-full">
                                        <FaQuestionCircle className="text-[#249742] text-lg" />
                                    </div>
                                    <span>
                                        অন্যান্য প্রশ্নের জন্য কাকে যোগাযোগ
                                        করবো?
                                    </span>
                                </div>
                                <div className="collapse-content bg-[#f9fcfb] text-gray-700 py-4 px-6 border-t border-gray-100">
                                    <p>
                                        অন্যান্য যেকোন প্রশ্নের জন্য আপনি আমাদের
                                        একাডেমিক অফিসে যোগাযোগ করতে পারেন।
                                        যোগাযোগের বিবরণ:
                                    </p>
                                    <div className="mt-4 p-4 bg-[#249742]/5 rounded-lg">
                                        <h4 className="font-bold text-[#249742] mb-2">
                                            একাডেমিক অফিস
                                        </h4>
                                        <p className="mb-1">
                                            <span className="font-medium">
                                                সময়:
                                            </span>{" "}
                                            সকাল ৯টা থেকে বিকাল ৪টা
                                            (শনি-বৃহস্পতিবার)
                                        </p>
                                        <p className="mb-1">
                                            <span className="font-medium">
                                                যোগাযোগ ব্যক্তি:
                                            </span>{" "}
                                            জনাব মোঃ রফিকুল ইসলাম
                                        </p>
                                        <p className="mb-1">
                                            <span className="font-medium">
                                                মোবাইল:
                                            </span>{" "}
                                            ০১৯১২-৩৪৫৬৭৮
                                        </p>
                                        <p>
                                            <span className="font-medium">
                                                ইমেইল:
                                            </span>{" "}
                                            academic@srims.edu.bd
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Help Section */}
                <div className="mt-12 bg-gradient-to-r from-[#249742] to-[#1c6e36] rounded-xl shadow-xl p-8 text-white">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-3">
                                আরও সাহায্য প্রয়োজন?
                            </h3>
                            <p className="max-w-xl">
                                আপনার যদি আরও প্রশ্ন থাকে বা বিশেষ সাহায্যের
                                প্রয়োজন হয়, তাহলে আমাদের সহায়তা দল আপনার জন্য
                                প্রস্তুত। নিচের ফর্মটি পূরণ করুন অথবা সরাসরি
                                আমাদের সাথে যোগাযোগ করুন।
                            </p>
                        </div>
                        <button className="bg-white text-[#249742] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap">
                            সহায়তা ফর্ম পূরণ করুন
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
