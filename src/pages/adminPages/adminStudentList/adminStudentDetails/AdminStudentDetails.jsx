import { use, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
    FaBirthdayCake,
    FaVenusMars,
    FaTint,
    FaFlag,
    FaPrayingHands,
    FaPhoneAlt,
    FaMale,
    FaFemale,
    FaMapMarkerAlt,
    FaIdBadge,
    FaPhoneSquareAlt,
    FaPenSquare,
    FaClock,
    FaRegEnvelope,
    FaUsers,
} from "react-icons/fa";
import {
    MdSchool,
    MdOutlineAssignmentInd,
    MdMoodBad,
    MdDeleteForever,
    MdWork,
    MdWarning,
} from "react-icons/md";
import { LiaIdCardSolid } from "react-icons/lia";
import axios from "axios";
import Swal from "sweetalert2";

const AdminStudentDetails = () => {
    const { id, classNo } = useParams();

    const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
    const [isComplaintModalOpen, setIsComplaintModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [complaintDetails, setComplaintDetails] = useState({
        subject: "",
        description: "",
        studentId: id,
        date: new Date().toLocaleDateString("bn-BD", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        }),
    });
    const [studentData, setStudentData] = useState({});
    const [updatedStudentData, setUpdatedStudentData] = useState(studentData);
    const [complains, setComplains] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/complains/student/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setComplains(data);
                console.log("Fetched Complains:", data);
            });
    }, []);

    useEffect(() => {
        fetch(`http://localhost:3000/student/${classNo}/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setStudentData(data);
                console.log("Fetched Student Data:", data);
            });
    }, [id]);

    useEffect(() => {
        if (studentData && Object.keys(studentData).length > 0) {
            setUpdatedStudentData(studentData);
        }
    }, [studentData]);

    console.log("Updated Student Data:", updatedStudentData);

    const handleComplaintSubmit = async (e) => {
        e.preventDefault();
        console.log("Complaint Submitted:", complaintDetails);

        const result = await axios.post(
            "http://localhost:3000/complain",
            complaintDetails
        );

        if (result.data.success) {
            Swal.fire({
                title: "অভিযোগ সফলভাবে জমা হয়েছে!",
                text: "আপনার অভিযোগটি পর্যালোচনা করা হবে।",
                icon: "success",
                confirmButtonText: "ঠিক আছে",
            });
        } else {
            Swal.fire({
                title: "অভিযোগ জমা দিতে ব্যর্থ!",
                text: "দয়া করে আবার চেষ্টা করুন।",
                icon: "error",
                confirmButtonText: "ঠিক আছে",
            });
        }
        // Here you would typically send this data to your backend
        setIsComplaintModalOpen(false);
    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        console.log("Student Data Updated:", updatedStudentData);
        // Here you would typically send this updated data to your backend
        setIsUpdateModalOpen(false);
    };

    const handleUpdateChange = (e) => {
        const { name, value } = e.target;
        setUpdatedStudentData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="p-4">
            <div className="card bg-base-100 shadow-2xl p-6 lg:p-10 rounded-xl max-w-7xl mx-auto border border-gray-200">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-[#249742] mb-2">
                        শিক্ষার্থী প্রোফাইল
                    </h1>
                    <p className="text-lg text-gray-600">
                        শিক্ষার্থীর বিস্তারিত তথ্য এক নজরে
                    </p>
                    <div className="divider"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-4 gap-8">
                    {/* Left Column: Student Photo & Basic Info */}
                    <div className="lg:col-span-1 flex flex-col items-center justify-start p-6 bg-base-200 rounded-lg shadow-md">
                        <div className="mb-6 flex justify-center">
                            <img
                                src={
                                    studentData?.student_photo_url ||
                                    "https://via.placeholder.com/192"
                                }
                                alt={studentData?.name_en || "Student Photo"}
                                className="object-cover w-32 h-32 rounded-full p-1 border-4 border-[#249742]"
                            />
                        </div>

                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                {studentData.name_bn}
                            </h2>
                            <p className="text-xl text-gray-600 font-medium mb-3">
                                {studentData.name_en}
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
                                <span
                                    className="badge badge-lg text-white font-semibold"
                                    style={{ backgroundColor: "#249742" }}
                                >
                                    <MdSchool className="text-xl" />
                                    {studentData.classNo}-
                                    {studentData.department}
                                </span>
                                <span className="badge badge-info badge-lg text-white font-semibold">
                                    <FaClock className="mr-2 text-xl" />
                                    {studentData.session}
                                </span>
                            </div>
                            <p className="text-md text-gray-700 flex items-center justify-center gap-2">
                                <FaIdBadge className="inline text-xl text-[#249742]" />
                                {studentData.student_id}
                            </p>
                            <Link
                                to="#"
                                className="btn bg-[#249742] text-white mt-6 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <LiaIdCardSolid className="text-2xl" />
                                ডিজি-কার্ড
                            </Link>
                        </div>
                    </div>

                    {/* Right Columns: Personal, Guardian & Address Info */}
                    <div className="lg:col-span-3 space-y-10 p-6 bg-base-200 rounded-lg shadow-md">
                        {/* Personal Info */}
                        <section>
                            <h3 className="text-2xl font-bold mb-5 text-[#249742] border-b-2 border-[#249742] pb-3 flex items-center">
                                <FaUsers className="mr-3 text-2xl" />
                                ব্যক্তিগত তথ্য
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5">
                                <p className="flex items-center text-lg text-gray-700">
                                    <FaBirthdayCake className="mr-3 text-xl text-[#249742]" />
                                    <span className="font-semibold">
                                        জন্ম তারিখ:
                                    </span>{" "}
                                    {studentData.birth_date}
                                </p>
                                <p className="flex items-center text-lg text-gray-700">
                                    <FaVenusMars className="mr-3 text-xl text-[#249742]" />
                                    <span className="font-semibold">
                                        লিঙ্গ:
                                    </span>{" "}
                                    {studentData.gender}
                                </p>
                                <p className="flex items-center text-lg text-gray-700">
                                    <FaTint className="mr-3 text-xl text-[#249742]" />
                                    <span className="font-semibold">
                                        রক্তের গ্রুপ:
                                    </span>{" "}
                                    {studentData.blood_group}
                                </p>
                                <p className="flex items-center text-lg text-gray-700">
                                    <FaFlag className="mr-3 text-xl text-[#249742]" />
                                    <span className="font-semibold">
                                        জাতীয়তা:
                                    </span>{" "}
                                    {studentData.nationality}
                                </p>
                                <p className="flex items-center text-lg text-gray-700">
                                    <FaPrayingHands className="mr-3 text-xl text-[#249742]" />
                                    <span className="font-semibold">ধর্ম:</span>{" "}
                                    {studentData.religion}
                                </p>
                                <p className="flex items-center text-lg text-gray-700">
                                    <MdOutlineAssignmentInd className="mr-3 text-xl text-[#249742]" />
                                    <span className="font-semibold">
                                        জন্ম সনদ:
                                    </span>{" "}
                                    {studentData.birth_certificate_no}
                                </p>
                                <p className="flex items-center text-lg text-gray-700">
                                    <FaRegEnvelope className="mr-3 text-xl text-[#249742]" />
                                    <span className="font-semibold">
                                        ইমেইল:
                                    </span>{" "}
                                    {studentData.student_email}
                                </p>
                                <p className="flex items-center text-lg text-gray-700">
                                    <FaPhoneAlt className="mr-3 text-xl text-[#249742]" />
                                    <span className="font-semibold">ফোন:</span>{" "}
                                    {studentData.student_phone}
                                </p>
                            </div>
                        </section>

                        {/* Guardian Info */}
                        <section>
                            <h3 className="text-2xl font-bold mb-5 text-[#249742] border-b-2 border-[#249742] pb-3 flex items-center">
                                <FaUsers className="mr-3 text-2xl" />
                                অভিভাবক তথ্য
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                                <p className="flex items-center text-lg text-gray-700">
                                    <FaMale className="mr-3 text-xl text-[#249742]" />
                                    <span className="font-semibold">
                                        পিতার নাম:
                                    </span>{" "}
                                    {studentData.father_name}
                                </p>
                                <p className="flex items-center text-lg text-gray-700">
                                    <FaFemale className="mr-3 text-xl text-[#249742]" />
                                    <span className="font-semibold">
                                        মাতার নাম:
                                    </span>{" "}
                                    {studentData.mother_name}
                                </p>
                                <p className="flex items-center text-lg text-gray-700">
                                    <MdWork className="mr-3 text-xl text-[#249742]" />
                                    <span className="font-semibold">
                                        পিতার পেশা:
                                    </span>{" "}
                                    {studentData.father_occupation}
                                </p>
                                <p className="flex items-center text-lg text-gray-700">
                                    <MdWork className="mr-3 text-xl text-[#249742]" />
                                    <span className="font-semibold">
                                        মাতার পেশা:
                                    </span>{" "}
                                    {studentData.mother_occupation}
                                </p>
                                <p className="flex items-center text-lg text-gray-700">
                                    <FaPhoneAlt className="mr-3 text-xl text-[#249742]" />
                                    <span className="font-semibold">ফোন:</span>{" "}
                                    {studentData.guardian_phone}
                                </p>
                                <p className="flex items-center text-lg text-gray-700">
                                    <FaRegEnvelope className="mr-3 text-xl text-[#249742]" />
                                    <span className="font-semibold">ইমেল:</span>{" "}
                                    {studentData.guardian_email}
                                </p>
                            </div>
                        </section>

                        {/* Address Info */}
                        <section>
                            <h3 className="text-2xl font-bold mb-5 text-[#249742] border-b-2 border-[#249742] pb-3 flex items-center">
                                <FaMapMarkerAlt className="mr-3 text-2xl" />
                                ঠিকানা
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                                <p className="flex items-center text-lg text-gray-700">
                                    <FaMapMarkerAlt className="mr-3 text-xl text-[#249742]" />
                                    <span className="font-semibold">
                                        বর্তমান ঠিকানা:
                                    </span>{" "}
                                    {studentData.present_address}
                                </p>
                                <p className="flex items-center text-lg text-gray-700">
                                    <FaMapMarkerAlt className="mr-3 text-xl text-[#249742]" />
                                    <span className="font-semibold">
                                        স্থায়ী ঠিকানা:
                                    </span>{" "}
                                    {studentData.permanent_address}
                                </p>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4 mt-10 pt-8 border-t border-gray-200">
                    <button
                        onClick={() => setIsPhoneModalOpen(true)}
                        className="btn btn-lg text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                        style={{
                            backgroundColor: "#249742",
                            borderColor: "#249742",
                        }}
                    >
                        <FaPhoneSquareAlt className="text-2xl" />
                        অভিভাবককে ফোন করুন
                    </button>
                    <button
                        onClick={() => setIsComplaintModalOpen(true)}
                        className="btn btn-info btn-lg text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                    >
                        <MdMoodBad className="text-2xl" />
                        অভিযোগ যুক্ত করুন
                    </button>
                    <button
                        onClick={() => setIsUpdateModalOpen(true)}
                        className="btn btn-warning btn-lg text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                    >
                        <FaPenSquare className="text-2xl" />
                        তথ্য আপডেট করুন
                    </button>
                    <Link
                        to="#"
                        className="btn btn-error btn-lg text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                    >
                        <MdDeleteForever className="text-2xl" />
                        শিক্ষার্থী মুছে ফেলুন
                    </Link>
                </div>
            </div>

            {/* Complain card */}
            <div className="mt-4 card bg-base-100 shadow-2xl p-6 lg:p-10 rounded-xl max-w-7xl mx-auto border border-gray-200">
                <h1 className="text-2xl font-bold text-[#249742]">
                    শিক্ষার্থী সম্পর্কে অভিযোগ ({complains?.length})
                </h1>
                <div className="mt-4 text-lg text-gray-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {complains?.map((complain) => (
                        <div className="card w-full bg-base-100 shadow-xl border border-gray-200 rounded-lg overflow-hidden">
                            <div className="card-body p-6">
                                {/* Complaint Header */}
                                <div className="mb-2">
                                    <h3 className="card-title text-xl font-bold text-gray-800 flex items-center gap-3">
                                        <span className="text-[#249742]">
                                            {complain?.subject}
                                        </span>
                                    </h3>
                                </div>

                                {/* Complaint Description */}
                                <div className="text-gray-700 leading-relaxed mb-4">
                                    <p className="text-base">
                                        {complain?.description}
                                    </p>
                                </div>

                                {/* Optional: Add an action button or status */}
                                <div className="card-actions justify-end mt-4">
                                    <p className="text-base">
                                        {complain?.date}
                                    </p>
                                    <span className="badge badge-lg badge-warning text-gray-700 font-medium">
                                        পর্যালোচনাধীন
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Complain card end */}

            {/* Phone Number Modal */}
            {isPhoneModalOpen && (
                <dialog
                    id="phone_modal"
                    className="modal modal-bottom sm:modal-middle"
                    open
                >
                    <div className="modal-box text-center">
                        <h3 className="font-bold text-lg mb-4">
                            অভিভাবকের মোবাইল নম্বর
                        </h3>
                        <p className="py-4 text-4xl font-extrabold text-[#249742]">
                            {studentData.guardian_phone}
                        </p>
                        <div className="modal-action justify-center">
                            <form method="dialog">
                                <button
                                    className="btn bg-[#249742] text-white"
                                    onClick={() => setIsPhoneModalOpen(false)}
                                >
                                    বন্ধ করুন
                                </button>
                            </form>
                        </div>
                    </div>
                </dialog>
            )}

            {/* Complaint Modal */}
            {isComplaintModalOpen && (
                <dialog
                    id="complaint_modal"
                    className="modal modal-bottom sm:modal-middle"
                    open
                >
                    <div className="modal-box">
                        <h3 className="font-bold text-lg mb-4">
                            অভিযোগ যুক্ত করুন
                        </h3>
                        <form
                            onSubmit={handleComplaintSubmit}
                            className="space-y-4"
                        >
                            <div>
                                <label className="label">
                                    <span className="label-text">
                                        অভিযোগের বিষয়
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="বিষয় লিখুন"
                                    className="input input-bordered w-full"
                                    value={complaintDetails.subject}
                                    onChange={(e) =>
                                        setComplaintDetails({
                                            ...complaintDetails,
                                            subject: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">
                                        অভিযোগের বিস্তারিত
                                    </span>
                                </label>
                                <textarea
                                    name="description"
                                    placeholder="বিস্তারিত লিখুন"
                                    className="textarea textarea-bordered h-24 w-full"
                                    value={complaintDetails.description}
                                    onChange={(e) =>
                                        setComplaintDetails({
                                            ...complaintDetails,
                                            description: e.target.value,
                                        })
                                    }
                                    required
                                ></textarea>
                            </div>
                            <div className="modal-action">
                                <button
                                    type="submit"
                                    className="btn bg-[#249742] text-white"
                                >
                                    জমা দিন
                                </button>
                                <button
                                    type="button"
                                    className="btn"
                                    onClick={() =>
                                        setIsComplaintModalOpen(false)
                                    }
                                >
                                    বাতিল করুন
                                </button>
                            </div>
                        </form>
                    </div>
                </dialog>
            )}

            {/* Update Student Info Modal */}
            {isUpdateModalOpen && (
                <dialog
                    id="update_modal"
                    className="modal modal-bottom sm:modal-middle"
                    open
                >
                    <div className="modal-box max-w-2xl">
                        <h3 className="font-bold text-lg mb-4">
                            শিক্ষার্থীর তথ্য আপডেট করুন
                        </h3>
                        <form
                            onSubmit={handleUpdateSubmit}
                            className="space-y-4"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Personal Info */}
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            বাংলা নাম
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name_bn"
                                        value={updatedStudentData?.name_bn}
                                        onChange={handleUpdateChange}
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            ইংরেজি নাম
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name_en"
                                        value={updatedStudentData.name_en}
                                        onChange={handleUpdateChange}
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            জন্ম তারিখ
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="birth_date"
                                        value={updatedStudentData.birth_date}
                                        onChange={handleUpdateChange}
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            শ্রেণি
                                        </span>
                                    </label>
                                    <select
                                        name="classNo"
                                        value={updatedStudentData.classNo}
                                        onChange={handleUpdateChange}
                                        className="select select-bordered w-full"
                                    >
                                        <option value="">
                                            শ্রেণি সিলেক্ট করুন
                                        </option>
                                        <option value="6">৬ষ্ঠ শ্রেণি</option>
                                        <option value="7">৭ম শ্রেণি</option>
                                        <option value="8">৮ম শ্রেণি</option>
                                        <option value="9">৯ম শ্রেণি</option>
                                        <option value="10">১০ম শ্রেণি</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="label">
                                        <span className="label-text">সেশন</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="session"
                                        value={updatedStudentData.session}
                                        onChange={handleUpdateChange}
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            লিঙ্গ
                                        </span>
                                    </label>
                                    <select
                                        name="gender"
                                        value={updatedStudentData.gender}
                                        onChange={handleUpdateChange}
                                        className="select select-bordered w-full"
                                    >
                                        <option>পুরুষ</option>
                                        <option>মহিলা</option>
                                        <option>অন্যান্য</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            রক্তের গ্রুপ
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="blood_group"
                                        value={updatedStudentData.blood_group}
                                        onChange={handleUpdateChange}
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            জাতীয়তা
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="nationality"
                                        value={updatedStudentData.nationality}
                                        onChange={handleUpdateChange}
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">ধর্ম</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="religion"
                                        value={updatedStudentData.religion}
                                        onChange={handleUpdateChange}
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            জন্ম সনদ নম্বর
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="birth_certificate_no"
                                        value={
                                            updatedStudentData.birth_certificate_no
                                        }
                                        onChange={handleUpdateChange}
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                {/* Guardian Info */}
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            পিতার নাম
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="father_name"
                                        value={updatedStudentData.father_name}
                                        onChange={handleUpdateChange}
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            পিতার পেশা
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="father_occupation"
                                        value={
                                            updatedStudentData.father_occupation
                                        }
                                        onChange={handleUpdateChange}
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            মাতার নাম
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="mother_name"
                                        value={updatedStudentData.mother_name}
                                        onChange={handleUpdateChange}
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            মাতার পেশা
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="mother_occupation"
                                        value={
                                            updatedStudentData.mother_occupation
                                        }
                                        onChange={handleUpdateChange}
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            অভিভাবকের ফোন
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="guardian_phone"
                                        value={
                                            updatedStudentData.guardian_phone
                                        }
                                        onChange={handleUpdateChange}
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                {/* Address Info */}
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            বর্তমান ঠিকানা
                                        </span>
                                    </label>
                                    <textarea
                                        name="present_address"
                                        value={
                                            updatedStudentData.present_address
                                        }
                                        onChange={handleUpdateChange}
                                        className="textarea textarea-bordered h-12 w-full"
                                    ></textarea>
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            স্থায়ী ঠিকানা
                                        </span>
                                    </label>
                                    <textarea
                                        name="permanent_address"
                                        value={
                                            updatedStudentData.permanent_address
                                        }
                                        onChange={handleUpdateChange}
                                        className="textarea textarea-bordered h-12 w-full"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="modal-action">
                                <button
                                    type="submit"
                                    className="btn btn-warning text-white"
                                >
                                    আপডেট করুন
                                </button>
                                <button
                                    type="button"
                                    className="btn"
                                    onClick={() => setIsUpdateModalOpen(false)}
                                >
                                    বাতিল করুন
                                </button>
                            </div>
                        </form>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default AdminStudentDetails;
