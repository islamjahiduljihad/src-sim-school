import React, { useState } from "react";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import axios from "axios";
import Swal from "sweetalert2";
import {
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaPaperPlane,
    FaClock,
    FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        phone: "",
        contact_status: "pending",
        date: new Date().toISOString().slice(0, 10),
    });

    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState("contact");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await axios.post(
                "http://localhost:3000/contact",
                formData
            );

            if (res.data.insertedId) {
                Swal.fire({
                    title: "ধন্যবাদ!",
                    text: "আপনার বার্তাটি আমরা পেয়েছি। যত দ্রুত সম্ভব আপনার সাথে যোগাযোগ করা হবে।",
                    icon: "success",
                    confirmButtonText: "বন্ধ করুন",
                    customClass: {
                        popup: "rounded-xl shadow-xl",
                        confirmButton:
                            "bg-[#249742] hover:bg-[#1e7a37] px-6 py-2 rounded-lg",
                    },
                });

                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                    phone: "",
                    contact_status: "pending",
                    date: new Date().toDateString(),
                });
            } else {
                Swal.fire({
                    title: "দুঃখিত!",
                    text: "কোথাও সমস্যা হয়েছে, আবার চেষ্টা করুন।",
                    icon: "error",
                    confirmButtonText: "ঠিক আছে",
                    customClass: {
                        popup: "rounded-xl shadow-xl",
                        confirmButton:
                            "bg-[#8E1C20] hover:bg-[#6c1518] px-6 py-2 rounded-lg",
                    },
                });
            }
        } catch (err) {
            console.error("Server error:", err);
            Swal.fire({
                title: "সার্ভার সমস্যা!",
                text: "দয়া করে পরে আবার চেষ্টা করুন।",
                icon: "error",
                confirmButtonText: "ঠিক আছে",
                customClass: {
                    popup: "rounded-xl shadow-xl",
                    confirmButton:
                        "bg-[#8E1C20] hover:bg-[#6c1518] px-6 py-2 rounded-lg",
                },
            });
        } finally {
            setLoading(false);
        }
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

            <div className="max-w-6xl mx-auto relative z-10">
                <SectionHeader
                    title={"যোগাযোগ করুন"}
                    subtitle={
                        "যেকোনো প্রয়জনে আমাদের সাথে যোগাযোগ করুন। আমরা সর্বদা আপনার সেবায় প্রস্তুত"
                    }
                />

                {/* Tab Navigation */}
                <div className="flex justify-center mb-10">
                    <div className="inline-flex bg-gray-100 rounded-xl p-1">
                        <button
                            onClick={() => setActiveTab("contact")}
                            className={`px-6 py-3 rounded-xl font-medium text-lg transition-all ${
                                activeTab === "contact"
                                    ? "bg-gradient-to-r from-[#249742] to-[#1c6e36] text-white shadow-md"
                                    : "text-gray-600 hover:text-gray-800"
                            }`}
                        >
                            যোগাযোগ
                        </button>
                        <button
                            onClick={() => setActiveTab("location")}
                            className={`px-6 py-3 rounded-xl font-medium text-lg transition-all ${
                                activeTab === "location"
                                    ? "bg-gradient-to-r from-[#249742] to-[#1c6e36] text-white shadow-md"
                                    : "text-gray-600 hover:text-gray-800"
                            }`}
                        >
                            আমাদের অবস্থান
                        </button>
                    </div>
                </div>

                {activeTab === "contact" ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* Contact Information */}
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <h2 className="text-2xl font-bold mb-6 text-[#249742] flex items-center">
                                <FaPaperPlane className="mr-3" />
                                আমাদের সাথে যোগাযোগ করুন
                            </h2>

                            <p className="mb-8 text-gray-700 text-lg">
                                আপনার যেকোনো প্রশ্ন, মতামত বা পরামর্শ জানাতে
                                আমাদের সাথে যোগাযোগ করুন। আমরা দ্রুততম সময়ে
                                আপনার সাথে যোগাযোগ করবো।
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-[#249742]/10 p-3 rounded-full mr-4">
                                        <FaPhone className="text-[#249742] text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-800">
                                            ফোন নম্বর
                                        </h3>
                                        <p className="mt-1 text-gray-600">
                                            01312-345678
                                        </p>
                                        <p className="mt-1 text-gray-600">
                                            01789-101112
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-[#249742]/10 p-3 rounded-full mr-4">
                                        <FaEnvelope className="text-[#249742] text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-800">
                                            ইমেইল ঠিকানা
                                        </h3>
                                        <p className="mt-1 text-gray-600">
                                            schooldemo@email.com
                                        </p>
                                        <p className="mt-1 text-gray-600">
                                            info@schoolname.edu.bd
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-[#249742]/10 p-3 rounded-full mr-4">
                                        <FaMapMarkerAlt className="text-[#249742] text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-800">
                                            ঠিকানা
                                        </h3>
                                        <p className="mt-1 text-gray-600">
                                            শ্রীরায়ের চর, মুরাদনগর, কুমিল্লা
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-[#249742]/10 p-3 rounded-full mr-4">
                                        <FaClock className="text-[#249742] text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-800">
                                            কর্মঘণ্টা
                                        </h3>
                                        <p className="mt-1 text-gray-600">
                                            শনিবার - বৃহস্পতিবার: সকাল ৮:০০ -
                                            বিকাল ৫:০০
                                        </p>
                                        <p className="mt-1 text-gray-600">
                                            শুক্রবার: সকাল ৮:০০ - দুপুর ১২:০০
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-[#249742]/10 p-3 rounded-full mr-4">
                                        <FaWhatsapp className="text-[#249742] text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-800">
                                            হোয়াটসঅ্যাপ
                                        </h3>
                                        <p className="mt-1 text-gray-600">
                                            আমাদের হোয়াটসঅ্যাপ নম্বর:
                                            01789-101112
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 bg-gradient-to-r from-[#249742] to-[#1c6e36] rounded-xl p-6 text-white">
                                <h3 className="text-lg font-bold mb-3">
                                    জরুরি যোগাযোগ
                                </h3>
                                <p className="mb-4">
                                    যেকোনো জরুরি পরিস্থিতিতে এই নম্বরে কল করুন:
                                    01911-223344
                                </p>
                                <button className="bg-white text-[#249742] font-semibold px-4 py-2 rounded-lg hover:bg-gray-100">
                                    কল করুন
                                </button>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <h2 className="text-2xl font-bold mb-6 text-[#8E1C20] flex items-center">
                                <FaPaperPlane className="mr-3" />
                                বার্তা পাঠান
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block mb-2 font-medium text-gray-700">
                                            নাম *
                                        </label>
                                        <input
                                            placeholder="আপনার নাম লিখুন"
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#249742] focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 font-medium text-gray-700">
                                            ইমেইল *
                                        </label>
                                        <input
                                            placeholder="আপনার ইমেইল লিখুন"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#249742] focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block mb-2 font-medium text-gray-700">
                                            মোবাইল নাম্বার *
                                        </label>
                                        <input
                                            placeholder="আপনার মোবাইল নাম্বার লিখুন"
                                            type="text"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#249742] focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 font-medium text-gray-700">
                                            বিষয় *
                                        </label>
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#249742] focus:border-transparent"
                                        >
                                            <option value="">
                                                বিষয় নির্বাচন করুন
                                            </option>
                                            <option value="ভর্তি সম্পর্কিত">
                                                ভর্তি সম্পর্কিত
                                            </option>
                                            <option value="ফলাফল সম্পর্কিত">
                                                ফলাফল সম্পর্কিত
                                            </option>
                                            <option value="ফি সম্পর্কিত">
                                                ফি সম্পর্কিত
                                            </option>
                                            <option value="অন্যান্য">
                                                অন্যান্য
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block mb-2 font-medium text-gray-700">
                                        বার্তা *
                                    </label>
                                    <textarea
                                        placeholder="আপনার বার্তার বিস্তারিত লিখুন"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#249742] focus:border-transparent"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-gradient-to-r from-[#249742] to-[#1c6e36] text-white py-3 px-6 rounded-xl font-bold text-lg hover:from-[#1c6e36] hover:to-[#155a2b] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                                >
                                    {loading ? (
                                        <>
                                            <svg
                                                className="animate-spin h-5 w-5 text-white mr-2"
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
                                            পাঠানো হচ্ছে...
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane className="mr-2" />
                                            বার্তা পাঠান
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="p-8">
                            <h2 className="text-2xl font-bold mb-6 text-[#249742] flex items-center">
                                <FaMapMarkerAlt className="mr-3" />
                                আমাদের অবস্থান
                            </h2>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                <div>
                                    <h3 className="text-xl font-bold mb-4 text-[#8E1C20]">
                                        ঠিকানা
                                    </h3>
                                    <p className="mb-6 text-gray-700 text-lg">
                                        শ্রীরায়ের চর, মুরাদনগর, কুমিল্লা,
                                        বাংলাদেশ
                                    </p>

                                    <div className="bg-[#f9fcfb] rounded-xl p-6 border border-[#249742]/30 mb-6">
                                        <h4 className="font-bold text-lg text-[#249742] mb-3">
                                            কিভাবে যাবেন
                                        </h4>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="bg-[#249742]/10 text-[#249742] w-6 h-6 rounded-full flex items-center justify-center mr-3">
                                                    ১
                                                </span>
                                                <span>
                                                    কুমিল্লা শহর থেকে বাসে করে
                                                    মুরাদনগর যান
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="bg-[#249742]/10 text-[#249742] w-6 h-6 rounded-full flex items-center justify-center mr-3">
                                                    ২
                                                </span>
                                                <span>
                                                    মুরাদনগর বাসস্ট্যান্ড থেকে
                                                    অটোরিকশা নিন
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="bg-[#249742]/10 text-[#249742] w-6 h-6 rounded-full flex items-center justify-center mr-3">
                                                    ৩
                                                </span>
                                                <span>
                                                    অটোরিকশায় করে শ্রীরায়ের চর
                                                    স্কুলে যান (১০ মিনিটের পথ)
                                                </span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-gradient-to-r from-[#8E1C20] to-[#6c1518] rounded-xl p-6 text-white">
                                        <h4 className="font-bold text-lg mb-3">
                                            জরুরি যোগাযোগ
                                        </h4>
                                        <p className="mb-4">
                                            স্কুলে আসার আগে ফোন করে নিশ্চিত হয়ে
                                            নিন
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <button className="bg-white text-[#8E1C20] font-semibold px-4 py-2 rounded-lg hover:bg-gray-100">
                                                কল করুন
                                            </button>
                                            <button className="bg-[#25D366] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#128C7E] flex items-center">
                                                <FaWhatsapp className="mr-2" />
                                                হোয়াটসঅ্যাপ
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-200 rounded-xl overflow-hidden h-96">
                                    {/* Map Placeholder - Replace with actual map component */}
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#249742] to-[#1c6e36]">
                                        <div className="text-center text-white p-6">
                                            <FaMapMarkerAlt className="text-4xl mx-auto mb-4" />
                                            <h3 className="text-2xl font-bold mb-2">
                                                শ্রীরায়ের চর এস.আই.এম. উচ্চ
                                                বিদ্যালয়
                                            </h3>
                                            <p className="mb-4">
                                                কুমিল্লা, বাংলাদেশ
                                            </p>
                                            <button className="bg-white text-[#249742] font-semibold px-6 py-2 rounded-lg hover:bg-gray-100">
                                                গুগল ম্যাপে দেখুন
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Contact Team Section */}
                <div className="mt-16 bg-gradient-to-r from-[#249742] to-[#1c6e36] rounded-2xl p-8 text-white shadow-2xl">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-2xl font-bold mb-4">
                            আমাদের সাথে সরাসরি যোগাযোগ করুন
                        </h3>
                        <p className="mb-6">
                            আমাদের দল সর্বদা আপনার প্রশ্নের উত্তর দিতে এবং
                            সহায়তা প্রদান করতে প্রস্তুত। সরাসরি ফোন কল, ইমেইল
                            বা আমাদের অফিসে পরিদর্শনের মাধ্যমে যোগাযোগ করুন।
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="bg-white text-[#249742] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-md">
                                কল করুন: 01312-345678
                            </button>
                            <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                                ইমেইল করুন
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
