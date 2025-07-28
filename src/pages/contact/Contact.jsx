import React, { useState } from "react";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import axios from "axios";
import Swal from "sweetalert2";

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

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "http://localhost:3000/contact",
                formData
            );

            // Console log result
            console.log("Server response:", res.data);

            if (res.data.insertedId) {
                Swal.fire({
                    title: "ধন্যবাদ",
                    text: "আপনার বার্তাটি আমরা পেয়েছি। যত দ্রুত সম্ভব আপনার সাথে যোগাযোগ করা হবে।",
                    icon: "success",
                    confirmButtonText: "বন্ধ করুন",
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
                    title: "দুঃখিত",
                    text: "কোথাও সমস্যা হয়েছে, আবার চেষ্টা করুন।",
                    icon: "error",
                    confirmButtonText: "ঠিক আছে",
                });
            }
        } catch (err) {
            console.error("Server error:", err);
            Swal.fire({
                title: "সার্ভার সমস্যা",
                text: "দয়া করে পরে আবার চেষ্টা করুন।",
                icon: "error",
                confirmButtonText: "ঠিক আছে",
            });
        }
    };

    return (
        <div className="px-4 py-16 bg-[#f4f6fa] text-gray-800">
            <div>
                <SectionHeader
                    title={"যোগাযোগ"}
                    subtitle={"যেকোনো প্রয়জনে আমাদের সাথে যোগাযোগ করুন।"}
                ></SectionHeader>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Contact Info */}
                <div>
                    <h2 className="text-2xl font-bold mb-6 text-[#249742]">
                        যোগাযোগ করুন
                    </h2>
                    <p className="mb-4 text-gray-700">
                        আপনার যেকোনো প্রশ্ন, মতামত বা পরামর্শ জানাতে নিচের
                        ফর্মটি পূরণ করে পাঠান। আমরা দ্রুততম সময়ে আপনার সাথে
                        যোগাযোগ করবো।
                    </p>
                    <div className="space-y-4 mt-6">
                        <div>
                            <p className="font-semibold">📞 ফোন:</p>
                            <p>01312-345678</p>
                        </div>
                        <div>
                            <p className="font-semibold">✉️ ইমেইল:</p>
                            <p>schooldemo@email.com</p>
                        </div>
                        <div>
                            <p className="font-semibold">📍 ঠিকানা:</p>
                            <p>শ্রীরায়ের চর, মুরাদনগর, কুমিল্লা</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-md rounded-lg p-8 space-y-6"
                >
                    <h2 className="text-2xl font-bold mb-6 text-[#249742]">
                        ইমেইল করুন
                    </h2>
                    <div>
                        <label className="block mb-1 font-medium">নাম *</label>
                        <input
                            placeholder="আপনার নাম লিখুন"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b795]"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">
                            ইমেইল *
                        </label>
                        <input
                            placeholder="আপনার ইমেইল লিখুন"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b795]"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">
                            মোবাইল নাম্বার *
                        </label>
                        <input
                            placeholder="আপনার মোবাইল নাম্বার লিখুন"
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b795]"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">
                            বিষয় *
                        </label>
                        <input
                            placeholder="বিষয় লিখুন"
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b795]"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">
                            বার্তা *
                        </label>
                        <textarea
                            placeholder="ম্যাসেজ এর বিস্তারিত লিখুন"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b795]"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-[#249742] text-white py-2 px-6 rounded-lg hover:bg-[#009e84] transition-all duration-300"
                    >
                        বার্তা পাঠান
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
