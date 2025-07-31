import React, { useState } from "react";
import logoTransparent from "../../../assets/logo/logoTransparent.png";
import {
    User,
    CalendarDays,
    Droplet,
    Phone,
    MapPin,
    Search,
    BookOpen,
    School,
    ShieldCheck,
    Hash,
} from "lucide-react";

const demoStudentData = [
    {
        student_id: "SSIM-06-005",
        name_bn: "সাদিয়া রহমান",
        name_en: "Sadia Rahman",
        birth_date: "২০১১-০৬-১৭",
        class: "৬ষ্ঠ",
        section: "ক",
        session: "২০২৪",
        gender: "মহিলা",
        blood_group: "O−",
        nationality: "বাংলাদেশী",
        religion: "হিন্দু",
        permanent_address: "দিনাজপুর, রংপুর বিভাগ",
        present_address: "মিরপুর, ঢাকা",
        father_name: "বিপ্লব কুমার",
        father_occupation: "শিক্ষক",
        mother_name: "সুমনা দত্ত",
        mother_occupation: "গৃহিণী",
        guardian_phone: "০১৬১২৩৪৫৬৭৮",
        student_photo_url:
            "https://i.ibb.co/8QSdzpm/463b3ad3-8d02-4eac-8d28-60f36b71cfe2.jpg",
        school_name_bn: "আদর্শ উচ্চ বিদ্যালয়",
        school_name_en: "Ideal High School",
        school_address: "মতিঝিল, ঢাকা-১০০০",
        principal_name: "ড. আব্দুল করিম",
        principal_signature_url: "https://i.ibb.co/3sQ8YzH/signature.png",
        issue_date: "২০২৪-০১-০১",
        valid_until: "২০২৫-১২-৩১",
    },
];

const AdminDigiCard = () => {
    const [studentIdInput, setStudentIdInput] = useState("");
    const [foundStudent, setFoundStudent] = useState(null);
    const [message, setMessage] = useState("");

    const handleInputChange = (e) => {
        setStudentIdInput(e.target.value);
        setMessage("");
        setFoundStudent(null);
    };

    const handleGenerateCard = () => {
        if (!studentIdInput) {
            setMessage("অনুগ্রহ করে শিক্ষার্থীর আইডি দিন।");
            return;
        }

        const student = demoStudentData.find(
            (s) => s.student_id.toLowerCase() === studentIdInput.toLowerCase()
        );

        if (student) {
            setFoundStudent(student);
            setMessage("");
        } else {
            setFoundStudent(null);
            setMessage("এই আইডি দিয়ে কোনো শিক্ষার্থী খুঁজে পাওয়া যায়নি।");
        }
    };

    return (
        <div className="sm:p-6 md:p-8 bg-white min-h-screen flex flex-col items-center">
            <div className="card bg-white shadow-2xl p-6 w-full max-w-2xl mb-8 rounded-xl border border-green-100">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-[#1a5632] mb-2">
                        ডিজিটাল আইডি কার্ড জেনারেটর
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#1a5632] to-[#4CAF50] mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center mb-6">
                    <div className="form-control flex-grow w-full">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-green-600">
                                <Search size={20} />
                            </div>
                            <input
                                type="text"
                                placeholder="শিক্ষার্থীর আইডি লিখুন (যেমন: SSIM-06-005)"
                                className="input input-bordered w-full pl-10 text-lg py-4 border-green-300 focus:border-green-500 focus:ring-1 focus:ring-green-300"
                                value={studentIdInput}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <button
                        onClick={handleGenerateCard}
                        className="btn w-full sm:w-auto bg-gradient-to-r from-[#1a5632] to-[#4CAF50] hover:from-[#134028] hover:to-[#3d8c40] text-white text-lg font-bold py-4 px-8 rounded-xl shadow-lg flex items-center justify-center transition-all duration-300"
                    >
                        কার্ড তৈরি করুন
                    </button>
                </div>

                {message && (
                    <div className="alert alert-warning shadow-lg mb-6 rounded-lg bg-yellow-50 border border-yellow-200">
                        <div className="text-yellow-800">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current flex-shrink-0 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                />
                            </svg>
                            <span>{message}</span>
                        </div>
                    </div>
                )}
            </div>

            {foundStudent && (
                <div className="w-full max-w-md bg-[#0f1d17] rounded-3xl shadow-2xl overflow-hidden relative border-4 border-[#2e7d32] transform transition-transform duration-300">
                    {/* Watermark Background Graphics */}
                    <div className="absolute inset-0 z-0 opacity-10">
                        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-green-700 blur-2xl"></div>
                        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-green-700 blur-2xl"></div>
                        <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-green-600 blur-xl"></div>
                    </div>

                    {/* Header Section */}
                    <div className="relative py-5 px-6 text-white">
                        <div className="flex justify-between items-center border-b pb-3 border-[#249742]">
                            <div className="flex items-center">
                                <div className="bg-white p-1 rounded-full mr-3 shadow-md">
                                    <img
                                        className="w-10 h-10 md:w-12 md:h-12"
                                        src={logoTransparent}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <h2 className="text-sm md:text-xl font-bold">
                                        শ্রীরায়েরচর এস আই এম উচ্চ বিদ্যালয়{" "}
                                    </h2>
                                    <p className="text-sm md:text-lg opacity-90 font-bold">
                                        Sreerayerchar S.I.M High School
                                    </p>
                                </div>
                            </div>
                            <ShieldCheck size={32} className="text-green-100" />
                        </div>
                    </div>

                    {/* Decorative Wave */}
                    <div className="h-4 bg-gradient-to-r from-[#1a5632] to-[#2E7D32] relative overflow-hidden">
                        <div className="absolute -top-2 w-full h-8 bg-[#0f1d17]"></div>
                    </div>

                    {/* Student Info Section */}
                    <div className="relative z-10 px-6 py-5">
                        <div className="flex items-center justify-between mb-5">
                            <div>
                                <p className="text-sm text-gray-400 flex items-center">
                                    <Hash size={14} className="mr-1" /> আইডি নং
                                </p>
                                <p className="text-lg font-bold text-green-400">
                                    {foundStudent.student_id}
                                </p>
                            </div>
                            <div className="bg-gray-300 border-4 border-green-600 rounded-xl w-28 h-28 overflow-hidden shadow-lg">
                                <img
                                    src={foundStudent.student_photo_url}
                                    alt={foundStudent.name_en}
                                    className="w-full h-full object-cover"
                                    onError={(e) =>
                                        (e.target.src =
                                            "https://via.placeholder.com/150")
                                    }
                                />
                            </div>
                        </div>

                        <div className="mb-5">
                            <div className="flex justify-between border-b border-green-700 pb-2 mb-3">
                                <div>
                                    <p className="text-2xl font-bold text-white">
                                        {foundStudent.name_bn}
                                    </p>
                                    <p className="text-md text-green-300">
                                        {foundStudent.name_en}
                                    </p>
                                </div>
                                <div className="bg-green-800 text-white px-3 py-1 rounded-full text-sm font-semibold self-center">
                                    {foundStudent.class} শ্রেণি
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-white">
                                <div className="flex items-start">
                                    <BookOpen
                                        size={18}
                                        className="text-green-400 mt-1 mr-2"
                                    />
                                    <div>
                                        <p className="text-xs text-gray-400">
                                            শাখা
                                        </p>
                                        <p className="font-medium">
                                            {foundStudent.section}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <CalendarDays
                                        size={18}
                                        className="text-green-400 mt-1 mr-2"
                                    />
                                    <div>
                                        <p className="text-xs text-gray-400">
                                            সেশন
                                        </p>
                                        <p className="font-medium">
                                            {foundStudent.session}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <User
                                        size={18}
                                        className="text-green-400 mt-1 mr-2"
                                    />
                                    <div>
                                        <p className="text-xs text-gray-400">
                                            পিতার নাম
                                        </p>
                                        <p className="font-medium">
                                            {foundStudent.father_name}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Droplet
                                        size={18}
                                        className="text-green-400 mt-1 mr-2"
                                    />
                                    <div>
                                        <p className="text-xs text-gray-400">
                                            রক্তের গ্রুপ
                                        </p>
                                        <p className="font-medium">
                                            {foundStudent.blood_group}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start text-white">
                                    <Phone
                                        size={18}
                                        className="text-green-400 mt-1 mr-2"
                                    />
                                    <div>
                                        <p className="text-xs text-gray-400">
                                            অভিভাবক ফোন
                                        </p>
                                        <p className="font-medium">
                                            {foundStudent.guardian_phone}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start text-white">
                                    <MapPin
                                        size={18}
                                        className="text-green-400 mt-1 mr-2"
                                    />
                                    <div>
                                        <p className="text-xs text-gray-400">
                                            বর্তমান ঠিকানা
                                        </p>
                                        <p className="font-medium">
                                            {foundStudent.present_address}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Section */}
                    <div className="bg-[#163522] px-6 py-4 border-t border-green-900">
                        <div className="flex justify-between items-center text-white">
                            <div className="flex-1">
                                <p className="text-xs text-gray-400 mb-1">
                                    ইস্যু তারিখ
                                </p>
                                <p className="font-medium">
                                    {foundStudent.issue_date}
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <p>নুর আজিজ</p>
                                <p className="text-xs font-bold text-green-300">
                                    প্রধান শিক্ষকের স্বাক্ষর
                                </p>
                            </div>
                            <div className="flex-1 text-right">
                                <p className="text-xs text-gray-400 mb-1">
                                    মেয়াদ শেষ
                                </p>
                                <p className="font-medium">
                                    {foundStudent.valid_until}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Security Footer */}
                    <div className="px-6 py-2 bg-[#0e1b15] text-center border-t border-green-900">
                        <p className="text-xs text-green-400 flex items-center justify-center">
                            <ShieldCheck
                                size={12}
                                className="mr-1 text-green-500"
                            />
                            এই কার্ডটি ইলেক্ট্রিক্যালি জেনারেটেড।
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDigiCard;
