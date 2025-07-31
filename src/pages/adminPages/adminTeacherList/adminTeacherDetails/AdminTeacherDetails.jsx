import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import {
    FaEnvelope,
    FaPhone,
    FaIdCard,
    FaUserGraduate,
    FaBriefcase,
    FaVenusMars,
    FaBirthdayCake,
    FaHandsHelping,
    FaUserMd,
    FaInfoCircle,
    FaEdit,
    FaTrash,
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaUserCircle,
    FaAddressCard,
    FaBook,
    FaLaptopCode,
    FaRunning,
    FaPray,
    FaRegIdCard,
} from "react-icons/fa";
import { MdOutlineBloodtype } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";

const AdminTeacherDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [teacherData, setTeacherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [formData, setFormData] = useState({});

    // Fetch Teacher Data
    useEffect(() => {
        const fetchTeacher = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/teacher/${id}`
                );
                setTeacherData(response.data);
                setFormData(response.data);
            } catch (err) {
                setError("শিক্ষকের তথ্য আনতে ব্যর্থ।");
                console.error("Error fetching teacher data:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchTeacher();
    }, [id]);

    // Handle Contact Button - Phone/Email Modal
    const handleContact = () => {
        Swal.fire({
            title: "যোগাযোগ করুন",
            html: `
                <div class="flex flex-col items-center justify-center p-4">
                    <p class="text-xl font-semibold mb-4 text-primary">শিক্ষকের ফোন নম্বর:</p>
                    <a href="tel:${
                        teacherData?.phone
                    }" class="text-3xl font-bold text-blue-600 mb-6 hover:underline">
                        ${teacherData?.phone || "অজানা"}
                    </a>
                    <button id="mail-teacher-btn" class="btn btn-primary text-white shadow-lg transform transition-transform hover:scale-105">
                        <FaEnvelope className="mr-2" /> মেইল করুন
                    </button>
                </div>
            `,
            showConfirmButton: false,
            showCancelButton: false,
            focusConfirm: false,
            didOpen: () => {
                document
                    .getElementById("mail-teacher-btn")
                    .addEventListener("click", () => {
                        Swal.close();
                        window.location.href = `mailto:${teacherData?.email}`;
                    });
            },
        });
    };

    // Handle Update Button - Open Modal with Pre-filled Form
    const handleUpdate = () => {
        setIsUpdateModalOpen(true);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/teacher/${id}`, formData);
            setTeacherData(formData); // Update local state with new data
            setIsUpdateModalOpen(false);
            Swal.fire({
                icon: "success",
                title: "সফল!",
                text: "শিক্ষকের তথ্য সফলভাবে আপডেট হয়েছে।",
                confirmButtonColor: "#249742",
            });
        } catch (err) {
            console.error("Error updating teacher data:", err);
            Swal.fire({
                icon: "error",
                title: "ত্রুটি!",
                text: "শিক্ষকের তথ্য আপডেট করতে ব্যর্থ হয়েছে।",
                confirmButtonColor: "#249742",
            });
        }
    };

    // Handle Delete Button
    const handleDelete = async () => {
        Swal.fire({
            title: "আপনি কি নিশ্চিত?",
            text: "আপনি এই শিক্ষকের তথ্য মুছে ফেলতে চান?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#249742",
            cancelButtonColor: "#d33",
            confirmButtonText: "হ্যাঁ, মুছে ফেলুন!",
            cancelButtonText: "না, বাতিল করুন",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`http://localhost:3000/teacher/${id}`);
                    Swal.fire(
                        "মুছে ফেলা হয়েছে!",
                        "শিক্ষকের তথ্য সফলভাবে মুছে ফেলা হয়েছে।",
                        "success"
                    );
                    navigate("/admin/teacherList");
                } catch (err) {
                    console.error("Error deleting teacher data:", err);
                    Swal.fire(
                        "ত্রুটি!",
                        "শিক্ষকের তথ্য মুছে ফেলতে ব্যর্থ হয়েছে।",
                        "error"
                    );
                }
            }
        });
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <span className="loading loading-spinner loading-lg text-[#249742]"></span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100 text-red-600 text-lg font-semibold">
                {error}
            </div>
        );
    }

    if (!teacherData) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100 text-gray-700 text-lg">
                কোনো শিক্ষকের তথ্য পাওয়া যায়নি।
            </div>
        );
    }

    const renderInfoRow = (icon, label, value) => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-2 py-2 border-b border-gray-200 last:border-b-0">
            <div className="flex items-center text-gray-700 font-medium col-span-1">
                {icon}
                <span className="ml-2">{label}:</span>
            </div>
            <div className="text-gray-900 col-span-2">{value || "N/A"}</div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden animate-fade-in-up">
                {/* Header Section */}
                <div className="bg-[#249742] h-48 flex flex-col justify-end p-6 text-white">
                    <div className="flex items-center">
                        <div className="w-32 h-32 rounded-full shadow-lg">
                            <img
                                src={
                                    teacherData.photo_url ||
                                    "https://via.placeholder.com/150"
                                }
                                alt={`${teacherData.name_en}'s Photo`}
                                className="w-full h-full object-cover rounded-full border-2 border-white p-1"
                            />
                        </div>
                        <div className="ml-6 -mb-4">
                            <h1 className="text-3xl font-bold mb-1">
                                {teacherData.name_bn}
                            </h1>
                            <p className="text-xl font-light">
                                {teacherData.name_en}
                            </p>
                            <p className="text-lg font-medium opacity-90">
                                {teacherData.designation}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="p-6 pt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact & Action Buttons */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6 border border-gray-200">
                            <h2 className="text-2xl font-semibold text-[#249742] mb-4 flex items-center">
                                <FaInfoCircle className="mr-2" /> বিস্তারিত তথ্য
                            </h2>
                            <div className="space-y-3">
                                {renderInfoRow(
                                    <FaIdCard className="text-gray-500" />,
                                    "আইডি",
                                    teacherData.teacher_id
                                )}
                                {renderInfoRow(
                                    <FaRegIdCard className="text-gray-500" />,
                                    "টিআরএন",
                                    teacherData.teacher_registration_number
                                )}
                                {renderInfoRow(
                                    <FaBook className="text-gray-500" />,
                                    "বিষয়",
                                    teacherData.subjectList
                                )}
                                {renderInfoRow(
                                    <FaLaptopCode className="text-gray-500" />,
                                    "কম্পিউটার দক্ষতা",
                                    teacherData.computer_skills
                                )}
                                {renderInfoRow(
                                    <FaRunning className="text-gray-500" />,
                                    "সহ-পাঠ্যক্রমিক কার্যক্রম",
                                    teacherData.extra_curricular_activities
                                )}
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6 border border-gray-200">
                            <h2 className="text-2xl font-semibold text-[#249742] mb-4 flex items-center">
                                <FaHandsHelping className="mr-2" /> জরুরী
                                যোগাযোগ
                            </h2>
                            <div className="space-y-3">
                                {renderInfoRow(
                                    <FaUserCircle className="text-gray-500" />,
                                    "নাম",
                                    teacherData.emergency_contact_name
                                )}
                                {renderInfoRow(
                                    <FaPhone className="text-gray-500" />,
                                    "ফোন",
                                    teacherData.emergency_contact_number
                                )}
                                {renderInfoRow(
                                    <FaUserMd className="text-gray-500" />,
                                    "সম্পর্ক",
                                    teacherData.emergency_contact_relationship
                                )}
                                {renderInfoRow(
                                    <FaInfoCircle className="text-gray-500" />,
                                    "অতিরিক্ত",
                                    teacherData.emergency_contact
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col space-y-4">
                            <button
                                className="btn bg-[#249742] text-white text-lg py-3 px-6 rounded-lg shadow-lg flex items-center justify-center transform transition-transform hover:scale-105"
                                onClick={handleContact}
                            >
                                <FaPhone className="mr-2" /> যোগাযোগ করুন
                            </button>
                            <button
                                className="btn btn-info text-white text-lg py-3 px-6 rounded-lg shadow-lg flex items-center justify-center transform transition-transform hover:scale-105"
                                onClick={handleUpdate}
                            >
                                <FaEdit className="mr-2" /> তথ্য আপডেট করুন
                            </button>
                            <button
                                className="btn btn-error text-white text-lg py-3 px-6 rounded-lg shadow-lg flex items-center justify-center transform transition-transform hover:scale-105"
                                onClick={handleDelete}
                            >
                                <FaTrash className="mr-2" /> ডিলিট করুন
                            </button>
                        </div>
                    </div>

                    {/* Personal and Professional Details */}
                    <div className="lg:col-span-2">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6 border border-gray-200">
                            <h2 className="text-2xl font-semibold text-[#249742] mb-4 flex items-center">
                                <FaUserCircle className="mr-2" /> ব্যক্তিগত তথ্য
                            </h2>
                            <div className="space-y-3">
                                {renderInfoRow(
                                    <FaPhone className="text-gray-500" />,
                                    "ফোন",
                                    teacherData.phone
                                )}
                                {renderInfoRow(
                                    <FaEnvelope className="text-gray-500" />,
                                    "ইমেইল",
                                    teacherData.email
                                )}
                                {renderInfoRow(
                                    <FaVenusMars className="text-gray-500" />,
                                    "লিঙ্গ",
                                    teacherData.gender
                                )}
                                {renderInfoRow(
                                    <FaBirthdayCake className="text-gray-500" />,
                                    "জন্ম তারিখ",
                                    teacherData.birth_date
                                )}
                                {renderInfoRow(
                                    <MdOutlineBloodtype className="text-gray-500" />,
                                    "রক্তের গ্রুপ",
                                    teacherData.blood_group
                                )}
                                {renderInfoRow(
                                    <GiNotebook className="text-gray-500" />,
                                    "বৈবাহিক অবস্থা",
                                    teacherData.marital_status
                                )}
                                {renderInfoRow(
                                    <FaRegIdCard className="text-gray-500" />,
                                    "জাতীয় পরিচয়পত্র",
                                    teacherData.national_id
                                )}
                                {renderInfoRow(
                                    <FaAddressCard className="text-gray-500" />,
                                    "জাতীয়তা",
                                    teacherData.nationality
                                )}
                                {renderInfoRow(
                                    <FaPray className="text-gray-500" />,
                                    "ধর্ম",
                                    teacherData.religion
                                )}
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6 border border-gray-200">
                            <h2 className="text-2xl font-semibold text-[#249742] mb-4 flex items-center">
                                <FaBriefcase className="mr-2" /> পেশাগত তথ্য
                            </h2>
                            <div className="space-y-3">
                                {renderInfoRow(
                                    <FaUserGraduate className="text-gray-500" />,
                                    "শিক্ষাগত যোগ্যতা",
                                    teacherData.education
                                )}
                                {renderInfoRow(
                                    <FaIdCard className="text-gray-500" />,
                                    "পদবী",
                                    teacherData.designation
                                )}
                                {renderInfoRow(
                                    <FaBriefcase className="text-gray-500" />,
                                    "বিভাগ",
                                    teacherData.department
                                )}
                                {renderInfoRow(
                                    <FaCalendarAlt className="text-gray-500" />,
                                    "যোগদানের তারিখ",
                                    teacherData.joining_date
                                )}
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
                            <h2 className="text-2xl font-semibold text-[#249742] mb-4 flex items-center">
                                <FaMapMarkerAlt className="mr-2" /> ঠিকানা
                            </h2>
                            <div className="space-y-3">
                                {renderInfoRow(
                                    <FaMapMarkerAlt className="text-gray-500" />,
                                    "বর্তমান ঠিকানা",
                                    teacherData.present_address
                                )}
                                {renderInfoRow(
                                    <FaMapMarkerAlt className="text-gray-500" />,
                                    "স্থায়ী ঠিকানা",
                                    teacherData.permanent_address
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Update Teacher Modal */}
            {isUpdateModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in">
                    <div className="bg-white rounded-lg shadow-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto transform scale-95 animate-scale-in">
                        <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                            শিক্ষকের তথ্য আপডেট করুন
                        </h2>
                        <form
                            onSubmit={handleUpdateSubmit}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                            {Object.keys(formData).map((key) => {
                                // Exclude _id as it's not editable and photo_url will be handled separately if needed
                                if (key === "_id" || key === "photo_url")
                                    return null;

                                return (
                                    <div key={key} className="form-control">
                                        <label className="label">
                                            <span className="label-text capitalize font-medium text-gray-700">
                                                {key.replace(/_/g, " ")}:
                                            </span>
                                        </label>
                                        <input
                                            type={
                                                key.includes("date")
                                                    ? "date"
                                                    : key === "email"
                                                    ? "email"
                                                    : key.includes("phone") ||
                                                      key.includes("number")
                                                    ? "tel"
                                                    : "text"
                                            }
                                            name={key}
                                            value={formData[key] || ""}
                                            onChange={handleFormChange}
                                            className="input input-bordered w-full focus:border-primary focus:ring-primary transition duration-200"
                                            required={
                                                key === "name_en" ||
                                                key === "email" ||
                                                key === "phone"
                                            } // Basic required fields
                                        />
                                    </div>
                                );
                            })}
                            <div className="col-span-1 md:col-span-2 flex justify-end gap-4 mt-6">
                                <button
                                    type="button"
                                    className="btn btn-outline btn-error text-lg px-6 py-2 rounded-lg transition-colors duration-200 hover:bg-red-50"
                                    onClick={() => setIsUpdateModalOpen(false)}
                                >
                                    বাতিল করুন
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary text-white text-lg px-6 py-2 rounded-lg shadow-md transform transition-transform hover:scale-105"
                                >
                                    আপডেট করুন
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminTeacherDetails;
