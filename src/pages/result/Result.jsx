import React, { useState, useEffect } from "react";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import {
    FaSearch,
    FaPrint,
    FaDownload,
    FaUserGraduate,
    FaRedo,
} from "react-icons/fa";

const Result = () => {
    const [studentId, setStudentId] = useState("");
    const [studentClass, setStudentClass] = useState("");
    const [examType, setExamType] = useState("");
    const [foundResult, setFoundResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const demoResults = [
        {
            studentId: "1",
            class: "9",
            examType: "বার্ষিক",
            name: "মোঃ রাকিবুল ইসলাম",
            fatherName: "মোঃ আব্দুল হালিম",
            motherName: "মোসাঃ রেহানা বেগম",
            roll: "25",
            section: "ক",
            results: [
                { subject: "বাংলা", marks: 85, grade: "A+" },
                { subject: "ইংরেজি", marks: 78, grade: "A" },
                { subject: "গণিত", marks: 90, grade: "A+" },
                { subject: "ফিজিক্স", marks: 82, grade: "A+" },
                { subject: "কেমিস্ট্রি", marks: 79, grade: "A" },
                { subject: "বায়োলজি", marks: 87, grade: "A+" },
                { subject: "আইসিটি", marks: 92, grade: "A+" },
            ],
        },
        {
            studentId: "202302",
            class: "9",
            examType: "অর্ধ বার্ষিক",
            name: "আফরোজা নাসরিন",
            fatherName: "মোঃ আব্দুল হামিদ",
            motherName: "মোসাঃ ফাতেমা খাতুন",
            roll: "12",
            section: "খ",
            results: [
                { subject: "বাংলা", marks: 72, grade: "A-" },
                { subject: "ইংরেজি", marks: 69, grade: "B+" },
                { subject: "গণিত", marks: 80, grade: "A" },
                { subject: "ফিজিক্স", marks: 75, grade: "A" },
                { subject: "কেমিস্ট্রি", marks: 68, grade: "B+" },
                { subject: "বায়োলজি", marks: 82, grade: "A+" },
                { subject: "আইসিটি", marks: 88, grade: "A+" },
            ],
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setIsSubmitted(true);

        // Simulate API call
        setTimeout(() => {
            const result = demoResults.find(
                (res) =>
                    res.studentId === studentId &&
                    res.class === studentClass &&
                    res.examType === examType
            );

            if (result) {
                setFoundResult(result);
                setError(null);
            } else {
                setFoundResult(null);
                setError(
                    "ফলাফল পাওয়া যায়নি। অনুগ্রহ করে তথ্যগুলো আবার যাচাই করুন।"
                );
            }

            setLoading(false);
        }, 1500);
    };

    const handleReset = () => {
        setStudentId("");
        setStudentClass("");
        setExamType("");
        setFoundResult(null);
        setError(null);
        setIsSubmitted(false);
    };

    const calculateTotal = () => {
        if (!foundResult) return 0;
        return foundResult.results.reduce(
            (total, subject) => total + subject.marks,
            0
        );
    };

    const calculateAverage = () => {
        if (!foundResult) return 0;
        return (calculateTotal() / foundResult.results.length).toFixed(2);
    };

    const getGrade = (average) => {
        if (average >= 80) return "A+";
        if (average >= 70) return "A";
        if (average >= 60) return "A-";
        if (average >= 50) return "B";
        if (average >= 40) return "C";
        return "F";
    };

    const getGPA = (average) => {
        if (average >= 80) return 5.0;
        if (average >= 70) return 4.0;
        if (average >= 60) return 3.5;
        if (average >= 50) return 3.0;
        if (average >= 40) return 2.0;
        return 0.0;
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

            <div className="max-w-4xl mx-auto relative z-10">
                <SectionHeader
                    title={"ফলাফল"}
                    subtitle={
                        "এই পোর্টাল এ শিক্ষার্থীরা তাদের রোল, শ্রেণী আর পরীক্ষার টাইপ ইনপুট দিয়ে ফলাফল দেখতে পারবে"
                    }
                    icon={
                        <FaUserGraduate className="text-4xl text-[#8E1C20]" />
                    }
                />

                <div className="mt-10 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#249742] to-[#1c6e36] p-5 text-white">
                        <h3 className="text-xl font-bold flex items-center">
                            <FaSearch className="mr-3" />
                            ফলাফল অনুসন্ধান করুন
                        </h3>
                        <p className="text-sm mt-1 opacity-90">
                            আপনার শিক্ষার্থী আইডি, শ্রেণী এবং পরীক্ষার ধরন
                            নির্বাচন করুন
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label
                                    className="block text-gray-700 mb-2 font-medium"
                                    htmlFor="studentId"
                                >
                                    শিক্ষার্থী আইডি
                                </label>
                                <input
                                    id="studentId"
                                    type="text"
                                    placeholder="স্টুডেন্ট আইডি দিন"
                                    value={studentId}
                                    onChange={(e) =>
                                        setStudentId(e.target.value)
                                    }
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#249742] focus:border-transparent"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    className="block text-gray-700 mb-2 font-medium"
                                    htmlFor="studentClass"
                                >
                                    শ্রেণী
                                </label>
                                <select
                                    id="studentClass"
                                    value={studentClass}
                                    onChange={(e) =>
                                        setStudentClass(e.target.value)
                                    }
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#249742] focus:border-transparent"
                                    required
                                >
                                    <option value="">
                                        -- নির্বাচন করুন --
                                    </option>
                                    <option value="6">ষষ্ঠ</option>
                                    <option value="7">সপ্তম</option>
                                    <option value="8">অষ্টম</option>
                                    <option value="9">নবম</option>
                                    <option value="10">দশম</option>
                                </select>
                            </div>

                            <div>
                                <label
                                    className="block text-gray-700 mb-2 font-medium"
                                    htmlFor="examType"
                                >
                                    পরীক্ষার ধরন
                                </label>
                                <select
                                    id="examType"
                                    value={examType}
                                    onChange={(e) =>
                                        setExamType(e.target.value)
                                    }
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#249742] focus:border-transparent"
                                    required
                                >
                                    <option value="">
                                        -- নির্বাচন করুন --
                                    </option>
                                    <option value="প্রথম সাময়িক">
                                        প্রথম সাময়িক
                                    </option>
                                    <option value="অর্ধ বার্ষিক">
                                        অর্ধ বার্ষিক
                                    </option>
                                    <option value="বার্ষিক">বার্ষিক</option>
                                </select>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#249742] to-[#1c6e36] hover:from-[#1c6e36] hover:to-[#155a2b] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
                            >
                                {loading ? (
                                    <>
                                        <svg
                                            className="animate-spin h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                        অনুসন্ধান করা হচ্ছে...
                                    </>
                                ) : (
                                    <>
                                        <FaSearch className="mr-1" />
                                        ফলাফল দেখুন
                                    </>
                                )}
                            </button>

                            <button
                                type="button"
                                onClick={handleReset}
                                className="flex items-center justify-center gap-2 bg-white border border-[#249742] text-[#249742] hover:bg-[#f0fdf4] font-semibold px-8 py-3 rounded-full shadow-sm transition-colors"
                            >
                                <FaRedo className="mr-1" />
                                রিসেট করুন
                            </button>
                        </div>
                    </form>
                </div>

                {loading && (
                    <div className="mt-10 bg-white rounded-2xl shadow-lg p-8 text-center">
                        <div className="flex flex-col items-center">
                            <svg
                                className="animate-spin h-12 w-12 text-[#249742]"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                            <p className="mt-4 text-gray-600 text-lg">
                                আপনার ফলাফল অনুসন্ধান করা হচ্ছে...
                            </p>
                        </div>
                    </div>
                )}

                {error && isSubmitted && !loading && (
                    <div className="mt-10 bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
                        <div className="flex flex-col items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-16 w-16 text-red-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <h3 className="mt-4 text-xl font-bold text-red-700">
                                ফলাফল পাওয়া যায়নি
                            </h3>
                            <p className="mt-2 text-red-600">{error}</p>
                            <button
                                onClick={handleReset}
                                className="mt-6 bg-[#8E1C20] hover:bg-[#6c1518] text-white font-semibold px-6 py-2 rounded-full transition-colors"
                            >
                                আবার চেষ্টা করুন
                            </button>
                        </div>
                    </div>
                )}

                {foundResult && !loading && (
                    <div className="mt-10 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                        <div className="bg-gradient-to-r from-[#8E1C20] to-[#6c1518] p-5 text-white">
                            <h3 className="text-xl font-bold text-center">
                                {foundResult.examType} পরীক্ষার ফলাফল
                            </h3>
                        </div>

                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-[#f9fcfb] rounded-xl p-4 border border-[#249742]/30">
                                    <h4 className="text-lg font-bold text-[#249742] mb-3">
                                        শিক্ষার্থীর তথ্য
                                    </h4>
                                    <div className="space-y-2">
                                        <div className="flex">
                                            <span className="w-1/3 font-medium">
                                                নাম:
                                            </span>
                                            <span className="w-2/3">
                                                {foundResult.name}
                                            </span>
                                        </div>
                                        <div className="flex">
                                            <span className="w-1/3 font-medium">
                                                পিতার নাম:
                                            </span>
                                            <span className="w-2/3">
                                                {foundResult.fatherName}
                                            </span>
                                        </div>
                                        <div className="flex">
                                            <span className="w-1/3 font-medium">
                                                মাতার নাম:
                                            </span>
                                            <span className="w-2/3">
                                                {foundResult.motherName}
                                            </span>
                                        </div>
                                        <div className="flex">
                                            <span className="w-1/3 font-medium">
                                                শ্রেণী:
                                            </span>
                                            <span className="w-2/3">
                                                {foundResult.class} শ্রেণী (
                                                {foundResult.section} শাখা)
                                            </span>
                                        </div>
                                        <div className="flex">
                                            <span className="w-1/3 font-medium">
                                                রোল নং:
                                            </span>
                                            <span className="w-2/3">
                                                {foundResult.roll}
                                            </span>
                                        </div>
                                        <div className="flex">
                                            <span className="w-1/3 font-medium">
                                                শিক্ষার্থী আইডি:
                                            </span>
                                            <span className="w-2/3">
                                                {foundResult.studentId}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-[#f9fcfb] rounded-xl p-4 border border-[#249742]/30">
                                    <h4 className="text-lg font-bold text-[#249742] mb-3">
                                        ফলাফল সারাংশ
                                    </h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                                            <div className="text-sm text-gray-600">
                                                মোট নম্বর
                                            </div>
                                            <div className="text-2xl font-bold text-[#249742]">
                                                {calculateTotal()}
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                                            <div className="text-sm text-gray-600">
                                                গড় নম্বর
                                            </div>
                                            <div className="text-2xl font-bold text-[#249742]">
                                                {calculateAverage()}
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                                            <div className="text-sm text-gray-600">
                                                গ্রেড
                                            </div>
                                            <div className="text-2xl font-bold text-[#8E1C20]">
                                                {getGrade(calculateAverage())}
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                                            <div className="text-sm text-gray-600">
                                                জিপিএ
                                            </div>
                                            <div className="text-2xl font-bold text-[#8E1C20]">
                                                {getGPA(calculateAverage())}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="overflow-x-auto rounded-xl shadow-sm">
                                <table className="w-full text-left">
                                    <thead className="bg-gradient-to-r from-[#249742] to-[#1c6e36] text-white">
                                        <tr>
                                            <th className="py-4 px-6 font-semibold">
                                                বিষয়
                                            </th>
                                            <th className="py-4 px-6 font-semibold text-center">
                                                প্রাপ্ত নম্বর
                                            </th>
                                            <th className="py-4 px-6 font-semibold text-center">
                                                গ্রেড
                                            </th>
                                            <th className="py-4 px-6 font-semibold text-center">
                                                মন্তব্য
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {foundResult.results.map((res, idx) => (
                                            <tr
                                                key={idx}
                                                className={`border-b border-gray-200 ${
                                                    idx % 2 === 0
                                                        ? "bg-white"
                                                        : "bg-[#f9fcfb]"
                                                } hover:bg-[#e8f5e9] transition-colors`}
                                            >
                                                <td className="py-4 px-6 font-medium">
                                                    {res.subject}
                                                </td>
                                                <td className="py-4 px-6 text-center font-bold">
                                                    {res.marks}
                                                </td>
                                                <td className="py-4 px-6 text-center font-bold text-[#8E1C20]">
                                                    {res.grade}
                                                </td>
                                                <td className="py-4 px-6 text-center">
                                                    {res.marks >= 80
                                                        ? "অসাধারণ"
                                                        : res.marks >= 70
                                                        ? "ভালো"
                                                        : res.marks >= 60
                                                        ? "মোটামুটি"
                                                        : res.marks >= 50
                                                        ? "সন্তোষজনক"
                                                        : "অতিরিক্ত মনোযোগ প্রয়োজন"}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-8 flex flex-wrap justify-between items-center">
                                <div className="text-sm text-gray-500">
                                    ফলাফল প্রকাশের তারিখ: ১৫ ডিসেম্বর ২০২৫
                                </div>
                                <div className="flex gap-3">
                                    <button className="bg-[#249742] hover:bg-[#1e7a37] text-white px-6 py-2 rounded-lg flex items-center gap-2">
                                        <FaPrint />
                                        প্রিন্ট করুন
                                    </button>
                                    <button className="bg-[#8E1C20] hover:bg-[#6c1518] text-white px-6 py-2 rounded-lg flex items-center gap-2">
                                        <FaDownload />
                                        ডাউনলোড করুন
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {!foundResult && !loading && !error && isSubmitted && (
                    <div className="mt-10 bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-center">
                        <div className="flex flex-col items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-16 w-16 text-yellow-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                />
                            </svg>
                            <h3 className="mt-4 text-xl font-bold text-yellow-700">
                                দুঃখিত!
                            </h3>
                            <p className="mt-2 text-yellow-600">
                                আপনার প্রদত্ত তথ্যের সাথে মিলে এমন কোনো ফলাফল
                                পাওয়া যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।
                            </p>
                            <button
                                onClick={handleReset}
                                className="mt-6 bg-[#249742] hover:bg-[#1e7a37] text-white font-semibold px-6 py-2 rounded-full transition-colors"
                            >
                                আবার চেষ্টা করুন
                            </button>
                        </div>
                    </div>
                )}

                <div className="mt-16 bg-gradient-to-r from-[#249742] to-[#1c6e36] rounded-2xl p-8 text-white text-center shadow-2xl">
                    <h3 className="text-2xl font-bold mb-4">
                        ফলাফল সম্পর্কে আরও জানুন
                    </h3>
                    <p className="max-w-2xl mx-auto mb-6">
                        আপনার ফলাফল সম্পর্কে কোন প্রশ্ন থাকলে বা ফলাফল
                        পুনঃনিরীক্ষণের জন্য আমাদের একাডেমিক অফিসে যোগাযোগ করুন।
                        আমরা আপনাকে সর্বোচ্চ সহযোগিতা করতে প্রস্তুত।
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="bg-white text-[#249742] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-md">
                            যোগাযোগ করুন
                        </button>
                        <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                            ফলাফল নীতিমালা
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Result;
