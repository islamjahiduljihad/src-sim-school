import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    FaPhone,
    FaEnvelope,
    FaUser,
    FaCalendar,
    FaGraduationCap,
    FaHome,
    FaMapMarkerAlt,
    FaBook,
    FaUsers,
    FaChalkboardTeacher,
} from "react-icons/fa";
import SectionHeader from "../../components/sectionHeader/SectionHeader";

const TeacherPublicProfile = () => {
    const { id } = useParams();
    const [teacher, setTeacher] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showContactModal, setShowContactModal] = useState(false);

    // Primary color
    const primaryColor = "#249742";

    // Fetch teacher data
    useEffect(() => {
        const fetchTeacher = async () => {
            try {
                // Simulating API call
                setTimeout(() => {
                    const mockTeacher = {
                        birth_date: "2025-07-17",
                        department: "General",
                        designation: "Assistant Teacher",
                        education: "মাস্টার্স ইন সি এস ই",
                        email: "zakir@gmail.com",
                        extra_curricular_activities: "স্কাউটস, রেড ক্রিসেন্ট",
                        joining_date: "2025-07-30",
                        name_bn: "জাকির হোসাইন নেইমার",
                        name_en: "Zakir Hossain",
                        phone: "০১৯৬৫৪৮৫২১০",
                        photo_url: "https://i.ibb.co/Fk2sWQyS/cst-09.jpg",
                        present_address: "শ্রীরায়েরচর, দাউদকান্দি, কুমিল্লা",
                        subjectList: "আইসিটি, ইংলিশ, বিজ্ঞান",
                        teacher_id: "T-01",
                    };

                    setTeacher(mockTeacher);
                    setLoading(false);
                }, 800);
            } catch (error) {
                console.error("Error fetching teacher data:", error);
                setLoading(false);
            }
        };
        fetchTeacher();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div
                    className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4"
                    style={{ borderColor: primaryColor }}
                ></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 py-8 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                {/* <SectionHeader title={"শিক্ষকের বিবরণ"} subtitle={"শিক্ষকের বিস্তারিত তথ্য"}></SectionHeader> */}

                {/* Main Card */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform hover:shadow-2xl">
                    <div className="flex flex-col md:flex-row">
                        {/* Profile Image */}
                        <div className="md:w-2/5 p-8 flex flex-col items-center bg-gradient-to-b from-green-50 to-white">
                            <div className="relative">
                                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
                                    <img
                                        src={teacher.photo_url}
                                        alt={teacher.name_en}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src =
                                                "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
                                        }}
                                    />
                                </div>
                                <div
                                    className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 px-6 py-1 rounded-full text-white font-medium shadow-md"
                                    style={{ backgroundColor: primaryColor }}
                                >
                                    {teacher.designation}
                                </div>
                            </div>

                            <h2 className="mt-10 text-2xl font-bold text-gray-800">
                                {teacher.name_bn}
                            </h2>
                            <p className="text-gray-600">{teacher.name_en}</p>

                            <div className="mt-6 w-full">
                                <h3 className="text-lg font-semibold mb-3 text-center">
                                    বিষয়সমূহ
                                </h3>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {teacher.subjectList
                                        .split(", ")
                                        .map((subject, index) => (
                                            <span
                                                key={index}
                                                className="px-4 py-1.5 rounded-full text-sm font-medium"
                                                style={{
                                                    backgroundColor: `${primaryColor}20`,
                                                    color: primaryColor,
                                                }}
                                            >
                                                {subject}
                                            </span>
                                        ))}
                                </div>
                            </div>

                            <button
                                onClick={() => setShowContactModal(true)}
                                className="mt-8 px-6 py-3 rounded-lg font-medium text-white flex items-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                                style={{ backgroundColor: primaryColor }}
                            >
                                <FaPhone className="mr-3" /> যোগাযোগ করুন
                            </button>
                        </div>

                        {/* Details */}
                        <div className="md:w-3/5 p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Personal Info */}
                                <div
                                    className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-all"
                                    style={{
                                        borderTop: `4px solid ${primaryColor}`,
                                    }}
                                >
                                    <div className="flex items-center mb-4">
                                        <div
                                            className="p-2 rounded-full mr-3"
                                            style={{
                                                backgroundColor: `${primaryColor}10`,
                                            }}
                                        >
                                            <FaUser
                                                className="text-lg"
                                                style={{ color: primaryColor }}
                                            />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            ব্যক্তিগত তথ্য
                                        </h3>
                                    </div>
                                    <div className="space-y-3">
                                        <InfoItem
                                            label="জন্ম তারিখ"
                                            value={teacher.birth_date}
                                            icon={
                                                <FaCalendar
                                                    style={{
                                                        color: primaryColor,
                                                    }}
                                                />
                                            }
                                        />
                                        <InfoItem
                                            label="যোগদানের তারিখ"
                                            value={teacher.joining_date}
                                            icon={
                                                <FaCalendar
                                                    style={{
                                                        color: primaryColor,
                                                    }}
                                                />
                                            }
                                        />
                                    </div>
                                </div>

                                {/* Education */}
                                <div
                                    className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-all"
                                    style={{
                                        borderTop: `4px solid ${primaryColor}`,
                                    }}
                                >
                                    <div className="flex items-center mb-4">
                                        <div
                                            className="p-2 rounded-full mr-3"
                                            style={{
                                                backgroundColor: `${primaryColor}10`,
                                            }}
                                        >
                                            <FaGraduationCap
                                                className="text-lg"
                                                style={{ color: primaryColor }}
                                            />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            শিক্ষাগত যোগ্যতা
                                        </h3>
                                    </div>
                                    <div className="space-y-3">
                                        <InfoItem
                                            label="উচ্চতর ডিগ্রী"
                                            value={teacher.education}
                                            icon={
                                                <FaBook
                                                    style={{
                                                        color: primaryColor,
                                                    }}
                                                />
                                            }
                                        />
                                    </div>
                                </div>

                                {/* Contact */}
                                <div
                                    className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-all"
                                    style={{
                                        borderTop: `4px solid ${primaryColor}`,
                                    }}
                                >
                                    <div className="flex items-center mb-4">
                                        <div
                                            className="p-2 rounded-full mr-3"
                                            style={{
                                                backgroundColor: `${primaryColor}10`,
                                            }}
                                        >
                                            <FaHome
                                                className="text-lg"
                                                style={{ color: primaryColor }}
                                            />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            ঠিকানা
                                        </h3>
                                    </div>
                                    <div className="space-y-3">
                                        <InfoItem
                                            label="বর্তমান ঠিকানা"
                                            value={teacher.present_address}
                                            icon={
                                                <FaMapMarkerAlt
                                                    style={{
                                                        color: primaryColor,
                                                    }}
                                                />
                                            }
                                        />
                                    </div>
                                </div>

                                {/* Activities */}
                                <div
                                    className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-all"
                                    style={{
                                        borderTop: `4px solid ${primaryColor}`,
                                    }}
                                >
                                    <div className="flex items-center mb-4">
                                        <div
                                            className="p-2 rounded-full mr-3"
                                            style={{
                                                backgroundColor: `${primaryColor}10`,
                                            }}
                                        >
                                            <FaUsers
                                                className="text-lg"
                                                style={{ color: primaryColor }}
                                            />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            অতিরিক্ত কার্যক্রম
                                        </h3>
                                    </div>
                                    <div className="space-y-3">
                                        <InfoItem
                                            label="সহশিক্ষা কার্যক্রম"
                                            value={
                                                teacher.extra_curricular_activities
                                            }
                                            icon={
                                                <FaChalkboardTeacher
                                                    style={{
                                                        color: primaryColor,
                                                    }}
                                                />
                                            }
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Teacher ID */}
                            <div
                                className="mt-8 p-4 rounded-xl text-center"
                                style={{ backgroundColor: `${primaryColor}10` }}
                            >
                                <p className="text-gray-700 font-medium">
                                    <span
                                        className="font-semibold"
                                        style={{ color: primaryColor }}
                                    >
                                        শিক্ষক আইডি:
                                    </span>{" "}
                                    {teacher.teacher_id}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Modal */}
            {showContactModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl transform transition-all duration-300 scale-95 animate-scale-in">
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                                যোগাযোগ করুন
                            </h3>

                            <div className="flex flex-col gap-4 mb-6">
                                <div className="flex items-center p-4 rounded-xl bg-gray-50 border border-gray-200">
                                    <div
                                        className="p-3 rounded-full mr-4"
                                        style={{
                                            backgroundColor: `${primaryColor}20`,
                                        }}
                                    >
                                        <FaPhone
                                            style={{ color: primaryColor }}
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">
                                            ফোন নম্বর
                                        </p>
                                        <p className="text-lg font-medium">
                                            {teacher.phone}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center p-4 rounded-xl bg-gray-50 border border-gray-200">
                                    <div
                                        className="p-3 rounded-full mr-4"
                                        style={{
                                            backgroundColor: `${primaryColor}20`,
                                        }}
                                    >
                                        <FaEnvelope
                                            style={{ color: primaryColor }}
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">
                                            ইমেইল
                                        </p>
                                        <p className="text-lg font-medium">
                                            {teacher.email}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center gap-4">
                                <a
                                    href={`tel:${teacher.phone}`}
                                    className="btn px-5 py-3 rounded-lg font-medium text-white flex items-center transition-all hover:opacity-90"
                                    style={{ backgroundColor: primaryColor }}
                                >
                                    <FaPhone className="mr-2" /> কল করুন
                                </a>
                                <a
                                    href={`mailto:${teacher.email}`}
                                    className="btn px-5 py-3 rounded-lg font-medium text-white flex items-center transition-all hover:opacity-90"
                                    style={{ backgroundColor: "#3b82f6" }}
                                >
                                    <FaEnvelope className="mr-2" /> মেইল করুন
                                </a>
                            </div>
                        </div>
                        <div className="bg-gray-100 px-6 py-4 flex justify-center">
                            <button
                                onClick={() => setShowContactModal(false)}
                                className="text-gray-600 hover:text-gray-800 font-medium px-4 py-2 transition-colors"
                            >
                                বন্ধ করুন
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Decorative elements */}
            <div
                className="absolute top-10 left-10 w-24 h-24 rounded-full opacity-10"
                style={{ backgroundColor: primaryColor }}
            ></div>
            <div
                className="absolute bottom-20 right-10 w-16 h-16 rounded-full opacity-10"
                style={{ backgroundColor: primaryColor }}
            ></div>
            <div
                className="absolute top-1/3 right-1/4 w-8 h-8 rounded-full opacity-10"
                style={{ backgroundColor: primaryColor }}
            ></div>
        </div>
    );
};

// Reusable Info Item Component
const InfoItem = ({ icon, label, value }) => (
    <div className="flex items-start">
        <div className="mt-1 mr-3">{icon}</div>
        <div>
            <p className="text-sm text-gray-600">{label}</p>
            <p className="font-medium">{value}</p>
        </div>
    </div>
);

export default TeacherPublicProfile;
