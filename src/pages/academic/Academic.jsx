import React from "react";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import {
    FaBook,
    FaCalendarAlt,
    FaChalkboardTeacher,
    FaClipboardList,
    FaGraduationCap,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const classSubjects = {
    "ক্লাস ৬-৮": [
        "বাংলা",
        "ইংরেজি",
        "গণিত",
        "বিজ্ঞান",
        "সামাজিক বিজ্ঞান",
        "ধর্ম ও নৈতিক শিক্ষা",
    ],
    "ক্লাস ৯-১০ (বিজ্ঞান)": [
        "বাংলা",
        "ইংরেজি",
        "গণিত",
        "ফিজিক্স",
        "কেমিস্ট্রি",
        "বায়োলজি",
        "আইসিটি",
    ],
    "ক্লাস ৯-১০ (ব্যবসায় শিক্ষা)": [
        "বাংলা",
        "ইংরেজি",
        "গণিত",
        "অ্যাকাউন্টিং",
        "বিজনেস এন্ট্রিপ্রেনরশিপ",
        "অর্থনীতি",
        "আইসিটি",
    ],
    "ক্লাস ৯-১০ (মানবিক)": [
        "বাংলা",
        "ইংরেজি",
        "ইতিহাস",
        "ভূগোল",
        "সামাজিক বিজ্ঞান",
        "অর্থনীতি",
    ],
};

const academicCalendarSummary = [
    { date: "১ জানুয়ারি ২০২৫", event: "শিক্ষাবর্ষের শুরু" },
    { date: "১৫ ফেব্রুয়ারি ২০২৫", event: "বার্ষিক ক্রীড়া প্রতিযোগিতা" },
    { date: "২১ ফেব্রুয়ারি ২০২৫", event: "একুশে ফেব্রুয়ারি পালন" },
    { date: "১ মে ২০২৫", event: "শ্রমিক দিবস" },
    { date: "৩০ অক্টোবর ২০২৫", event: "বার্ষিক পরীক্ষা শুরু" },
];

const examRoutine = [
    { subject: "বাংলা", date: "১০ অক্টোবর ২০২৫" },
    { subject: "গণিত", date: "১২ অক্টোবর ২০২৫" },
    { subject: "ইংরেজি", date: "১৪ অক্টোবর ২০২৫" },
    { subject: "বিজ্ঞান", date: "১৬ অক্টোবর ২০২৫" },
    { subject: "অ্যাকাউন্টিং", date: "১৮ অক্টোবর ২০২৫" },
];

const teacherSummary = [
    {
        name: "মোঃ রফিকুল ইসলাম",
        subject: "গণিত",
        designation: "প্রধান শিক্ষক",
        img: "https://i.ibb.co/9kPS76VN/28-21-CST-10.jpg",
    },
    {
        name: "সালমা খাতুন",
        subject: "ইতিহাস",
        designation: "সহকারী প্রধান শিক্ষক",
        img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    },
];

const Academic = () => {
    return (
        <div className="relative min-h-screen bg-gradient-to-b from-white to-[#f0fdf4] py-16 px-4 md:px-8">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-10 z-0">
                <div className="absolute top-10 left-1/4 w-24 h-24 rounded-full bg-[#249742] animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-[#249742] animate-pulse delay-300"></div>
                <div className="absolute bottom-20 left-1/3 w-20 h-20 rounded-full bg-[#8E1C20] animate-pulse delay-700"></div>
                <div className="absolute bottom-1/4 right-10 w-12 h-12 rounded-full bg-[#249742] animate-pulse delay-1000"></div>
                <div className="absolute bottom-1/2 left-10 w-16 h-16 rounded-full bg-[#249742] animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <SectionHeader
                    title="একাডেমিক প্রোগ্রাম"
                    subtitle="শ্রেণী ৬ থেকে ১০ পর্যন্ত আমাদের একাডেমিক প্রোগ্রাম ও পরীক্ষা সম্পর্কিত সকল তথ্য"
                    icon={
                        <FaGraduationCap className="text-4xl text-[#8E1C20]" />
                    }
                />

                {/* Subjects by Class - Enhanced Card Design */}
                <div className="mt-16">
                    <div className="flex items-center mb-6">
                        <FaBook className="text-3xl text-[#8E1C20] mr-3" />
                        <h3 className="text-2xl font-bold text-[#8E1C20]">
                            ক্লাস ভিত্তিক সাবজেক্ট লিস্ট
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(classSubjects).map(
                            ([className, subjects]) => (
                                <div
                                    key={className}
                                    className="bg-white border border-[#249742]/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex items-center mb-4">
                                        <div className="bg-[#249742] w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-3">
                                            {className.includes("৬-৮")
                                                ? "৬-৮"
                                                : className.includes("বিজ্ঞান")
                                                ? "বি"
                                                : className.includes("ব্যবসায়")
                                                ? "ব্য"
                                                : "ম"}
                                        </div>
                                        <h3 className="text-xl font-bold text-[#249742]">
                                            {className}
                                        </h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {subjects.map((subj, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start py-2 border-b border-gray-100 last:border-b-0"
                                            >
                                                <div className="bg-[#249742]/10 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1">
                                                    <span className="text-[#249742] text-xs font-bold">
                                                        {i + 1}
                                                    </span>
                                                </div>
                                                <span className="text-gray-700 hover:text-[#8E1C20] transition-colors">
                                                    {subj}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        )}
                    </div>
                </div>

                {/* Academic Calendar Summary - Enhanced Design */}
                <div className="mt-16 bg-white rounded-2xl p-6 shadow-lg border border-[#8E1C20]/20">
                    <div className="flex items-center mb-6">
                        <FaCalendarAlt className="text-3xl text-[#8E1C20] mr-3" />
                        <h3 className="text-2xl font-bold text-[#8E1C20]">
                            একাডেমিক ক্যালেন্ডার সংক্ষিপ্তসার
                        </h3>
                    </div>

                    <div className="relative">
                        {/* Timeline */}
                        <div className="absolute left-3 top-0 bottom-0 w-1 bg-[#249742]/20"></div>

                        <ul className="space-y-6 ml-8">
                            {academicCalendarSummary.map(
                                ({ date, event }, i) => (
                                    <li key={i} className="relative">
                                        {/* Timeline dot */}
                                        <div className="absolute -left-11 top-3 w-6 h-6 rounded-full bg-white border-4 border-[#249742] z-10"></div>

                                        <div className="bg-[#f9fcfb] rounded-xl p-4 border border-[#249742]/30 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex justify-between items-start">
                                                <div className="bg-[#249742]/10 text-[#249742] px-3 py-1 rounded-lg text-sm font-medium">
                                                    {date}
                                                </div>
                                                <div className="bg-[#8E1C20]/10 text-[#8E1C20] px-3 py-1 rounded-lg text-sm font-medium">
                                                    ইভেন্ট
                                                </div>
                                            </div>
                                            <div className="mt-3 font-semibold text-lg text-gray-800">
                                                {event}
                                            </div>
                                        </div>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    <div className="mt-8 text-center">
                        <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#8E1C20] to-[#6c1518] text-white font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all">
                            সম্পূর্ণ ক্যালেন্ডার ডাউনলোড করুন
                            <FaClipboardList className="ml-1" />
                        </button>
                    </div>
                </div>

                {/* Exam Routine - Enhanced Table Design */}
                <div className="mt-16 bg-white rounded-2xl p-6 shadow-lg border border-[#249742]/20">
                    <div className="flex items-center mb-6">
                        <FaClipboardList className="text-3xl text-[#249742] mr-3" />
                        <h3 className="text-2xl font-bold text-[#249742]">
                            পরবর্তী পরীক্ষার রুটিন
                        </h3>
                    </div>

                    <div className="overflow-x-auto rounded-xl shadow-sm">
                        <table className="w-full text-left">
                            <thead className="bg-gradient-to-r from-[#249742] to-[#1c6e36] text-white">
                                <tr>
                                    <th className="py-4 px-6 font-semibold text-lg">
                                        বিষয়
                                    </th>
                                    <th className="py-4 px-6 font-semibold text-lg">
                                        পরীক্ষার তারিখ
                                    </th>
                                    <th className="py-4 px-6 font-semibold text-lg">
                                        সময়
                                    </th>
                                    <th className="py-4 px-6 font-semibold text-lg">
                                        কক্ষ নং
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {examRoutine.map(({ subject, date }, i) => (
                                    <tr
                                        key={i}
                                        className={`border-b border-gray-200 ${
                                            i % 2 === 0
                                                ? "bg-white"
                                                : "bg-[#f9fcfb]"
                                        } hover:bg-[#e8f5e9] transition-colors`}
                                    >
                                        <td className="py-4 px-6 font-medium">
                                            {subject}
                                        </td>
                                        <td className="py-4 px-6">{date}</td>
                                        <td className="py-4 px-6">
                                            সকাল ১০:০০ - দুপুর ১:০০
                                        </td>
                                        <td className="py-4 px-6">
                                            #{i + 101}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 flex justify-between items-center">
                        <div className="text-sm text-gray-500">
                            সর্বশেষ আপডেট: ১৫ সেপ্টেম্বর ২০২৫
                        </div>
                        <button className="bg-[#249742] hover:bg-[#1e7a37] text-white px-4 py-2 rounded-lg flex items-center">
                            প্রিন্ট রুটিন
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Teacher Summary - Enhanced Card Design */}
                <div className="mt-16">
                    <div className="flex items-center mb-6">
                        <FaChalkboardTeacher className="text-3xl text-[#8E1C20] mr-3" />
                        <h3 className="text-2xl font-bold text-[#8E1C20]">
                            সম্মানিত প্রধান শিক্ষক ও সহকারী প্রধান শিক্ষক
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {teacherSummary.map(
                            ({ name, subject, img, designation }, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300"
                                >
                                    <div className="flex flex-col md:flex-row">
                                        <div className="w-full md:w-1/3 bg-gradient-to-b from-[#249742] to-[#1c6e36] p-6 flex items-center justify-center">
                                            <img
                                                src={img}
                                                alt={name}
                                                className="w-40 h-40 rounded-full border-4 border-white object-cover"
                                            />
                                        </div>
                                        <div className="w-full md:w-2/3 p-6">
                                            <span className="inline-block bg-[#8E1C20] text-white px-3 py-1 rounded-full text-sm mb-3">
                                                {designation}
                                            </span>
                                            <h4 className="text-2xl font-bold text-gray-800 mb-2">
                                                {name}
                                            </h4>
                                            <div className="flex items-center text-gray-600 mb-4">
                                                <span className="mr-2">
                                                    বিষয়:
                                                </span>
                                                <span className="font-semibold">
                                                    {subject}
                                                </span>
                                            </div>

                                            <div className="mt-6 flex flex-wrap gap-3">
                                                <Link
                                                    className="btn bg-gradient-to-r from-[#249742] to-[#1c6e36] text-white border-none rounded-full px-6 shadow-md hover:shadow-lg"
                                                    to={"/"}
                                                >
                                                    প্রোফাইল দেখুন
                                                </Link>
                                                <button className="btn bg-white border border-[#249742] text-[#249742] rounded-full px-6 hover:bg-[#f0fdf4]">
                                                    বার্তা পাঠান
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="mt-20 bg-gradient-to-r from-[#249742] to-[#1c6e36] rounded-2xl p-8 text-center text-white shadow-2xl">
                    <h3 className="text-2xl font-bold mb-4">আরও জানতে চান?</h3>
                    <p className="max-w-2xl mx-auto mb-6">
                        আমাদের একাডেমিক প্রোগ্রাম সম্পর্কে বিস্তারিত জানতে অথবা
                        কোন প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন। আমরা আপনার
                        যেকোনো জিজ্ঞাসার উত্তর দিতে প্রস্তুত।
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="bg-white text-[#249742] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-md">
                            যোগাযোগ করুন
                        </button>
                        <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                            ভর্তি তথ্য
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Academic;
