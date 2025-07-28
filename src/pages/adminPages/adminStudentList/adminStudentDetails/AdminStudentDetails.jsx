import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
    FaUser,
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
} from "react-icons/fa";
import {
    MdSchool,
    MdLocationCity,
    MdOutlineAssignmentInd,
    MdMoodBad,
    MdDeleteForever,
} from "react-icons/md";
import { LiaIdCardSolid } from "react-icons/lia";
import DigiCard from "../../../../components/digiCard/DigiCard";

const student = {
    student_id: "SSIM-06-005",
    name_bn: "সাদিয়া রহমান",
    name_en: "Sadia Rahman",
    birth_date: "২০১১-০৬-১৭",
    class: "৬ষ্ঠ",
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
    birth_certificate_no: "১৯৮৭২৩৪৫৭১",
};

const AdminStudentDetails = () => {
    const { id, classNo } = useParams();
    console.log("Student ID from URL:", id, "classNo:", classNo);

    const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
    const [isComplaintModalOpen, setIsComplaintModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [complaintDetails, setComplaintDetails] = useState({
        subject: "",
        description: "",
    });
    const [updatedStudentData, setUpdatedStudentData] = useState(student);
    const [studentData, setStudentData] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/student/${classNo}/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setStudentData(data);
                console.log("Fetched Student Data:", data);
            });
    }, [id]);

    const handleComplaintSubmit = (e) => {
        e.preventDefault();
        console.log("Complaint Submitted:", complaintDetails);
        // Here you would typically send this data to your backend
        setIsComplaintModalOpen(false);
        setComplaintDetails({ subject: "", description: "" }); // Clear form
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
            <div className="card bg-base-100 shadow-xl p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Left: Student Photo */}
                    <div className="col-span-1 flex flex-col items-center justify-center">
                        <img
                            src={student.student_photo_url}
                            alt={student.name_en}
                            className="w-40 h-40 rounded-full shadow-md object-cover border-2 border-[#249742] p-1"
                        />
                        <div className="mt-4 text-center">
                            <h2 className="text-lg font-bold">
                                {student.name_bn}
                            </h2>
                            <p className="text-sm text-gray-500">
                                {student.name_en}
                            </p>
                            <p className="badge badge-success mt-2">
                                <MdSchool className="mr-1" />
                                {student.class} শ্রেণি, {student.session}
                            </p>
                            <p className="text-sm mt-1">
                                <FaIdBadge className="inline mr-1" />{" "}
                                {student.student_id}
                            </p>

                            <Link className="btn mt-2 btn-sm bg-[#249742] text-white border-none">
                                <LiaIdCardSolid />
                                ডিজি-কার্ড
                            </Link>
                        </div>
                    </div>

                    {/* Right: Personal Info */}
                    <div className="col-span-2 space-y-3">
                        <h3 className="text-xl font-semibold mb-2 border-b pb-1">
                            ব্যক্তিগত তথ্য
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <p>
                                <FaBirthdayCake className="inline mr-1" /> জন্ম
                                তারিখ: {student.birth_date}
                            </p>
                            <p>
                                <FaVenusMars className="inline mr-1" /> লিঙ্গ:{" "}
                                {student.gender}
                            </p>
                            <p>
                                <FaTint className="inline mr-1" /> রক্তের গ্রুপ:{" "}
                                {student.blood_group}
                            </p>
                            <p>
                                <FaFlag className="inline mr-1" /> জাতীয়তা:{" "}
                                {student.nationality}
                            </p>
                            <p>
                                <FaPrayingHands className="inline mr-1" /> ধর্ম:{" "}
                                {student.religion}
                            </p>
                            <p>
                                <MdOutlineAssignmentInd className="inline mr-1" />{" "}
                                জন্ম সনদ নম্বর: {student.birth_certificate_no}
                            </p>
                        </div>

                        <div className="divider">অভিভাবক তথ্য</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <p>
                                <FaMale className="inline mr-1" /> পিতার নাম:{" "}
                                {student.father_name}
                            </p>
                            <p>
                                <FaFemale className="inline mr-1" /> মাতার নাম:{" "}
                                {student.mother_name}
                            </p>
                            <p>
                                <MdLocationCity className="inline mr-1" /> পেশা
                                (পিতা): {student.father_occupation}
                            </p>
                            <p>
                                <MdLocationCity className="inline mr-1" /> পেশা
                                (মাতা): {student.mother_occupation}
                            </p>
                            <p>
                                <FaPhoneAlt className="inline mr-1" /> মোবাইল
                                নম্বর: {student.guardian_phone}
                            </p>
                        </div>

                        <div className="divider">ঠিকানা</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <p>
                                <FaMapMarkerAlt className="inline mr-1" />{" "}
                                বর্তমান ঠিকানা: {student.present_address}
                            </p>
                            <p>
                                <FaMapMarkerAlt className="inline mr-1" />{" "}
                                স্থায়ী ঠিকানা: {student.permanent_address}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-2 mt-4 pt-4 border-t">
                    <button
                        onClick={() => setIsPhoneModalOpen(true)}
                        className="btn bg-[#249742] text-white border-none"
                    >
                        <FaPhoneSquareAlt />
                        অভিভাবককে ফোন করুন
                    </button>
                    <button
                        onClick={() => setIsComplaintModalOpen(true)}
                        className="btn btn-info text-white border-none"
                    >
                        <MdMoodBad />
                        অভিযোগ যুক্ত করুন
                    </button>
                    <button
                        onClick={() => setIsUpdateModalOpen(true)}
                        className="btn btn-warning text-white border-none"
                    >
                        <FaPenSquare />
                        তথ্য আপডেট করুন
                    </button>
                    <Link className="btn btn-error text-white border-none">
                        <MdDeleteForever />
                        শিক্ষার্থী মুছে ফেলুন
                    </Link>
                </div>
            </div>

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
                            {student.guardian_phone}
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
                                        value={updatedStudentData.name_bn}
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
                                    <input
                                        type="text"
                                        name="class"
                                        value={updatedStudentData.class}
                                        onChange={handleUpdateChange}
                                        className="input input-bordered w-full"
                                    />
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
