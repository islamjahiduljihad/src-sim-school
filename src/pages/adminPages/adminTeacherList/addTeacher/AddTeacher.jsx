import { useState } from "react";
import {
    User,
    Briefcase,
    CalendarDays,
    Droplet,
    CreditCard,
    HeartHandshake,
    Flag,
    Phone,
    Mail,
    CalendarCheck,
    BookOpen,
    MapPin,
    Heart,
    PhoneCall,
    PlusCircle,
    Users,
} from "lucide-react";
import { PiStudentBold } from "react-icons/pi";
import { IoDiscOutline } from "react-icons/io5";
import { FaComputer } from "react-icons/fa6";
import { LuIdCard } from "react-icons/lu";
import axios from "axios";
import Swal from "sweetalert2";

const AddTeacher = () => {
    // State to hold the new teacher's data
    const [newTeacherData, setNewTeacherData] = useState({
        teacher_id: "",
        name_bn: "",
        name_en: "",
        gender: "",
        birth_date: "",
        blood_group: "",
        national_id: "",
        religion: "",
        nationality: "বাংলাদেশী",
        phone: "",
        email: "",
        joining_date: "",
        designation: "",
        education: "",
        present_address: "",
        permanent_address: "",
        photo_url: "",
        marital_status: "",
        emergency_contact_number: "",
        emergency_contact_name: "",
        emergency_contact_relationship: "",
        subjectList: "",
        department: "",
        teacher_registration_number: "",
        extra_curricular_activities: "",
        computer_skills: "",
        addedDate: new Date().toLocaleDateString(),
    });

    // Handle input change for all form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTeacherData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await axios.post(
            "http://localhost:3000/teacher",
            newTeacherData
        );
        if (result?.data.insertedId) {
            Swal.fire({
                title: "শিক্ষক সফলভাবে যুক্ত হয়েছে!",
                text: "নতুন শিক্ষক তথ্য সংরক্ষণ করা হয়েছে।",
                icon: "success",
                confirmButtonText: "ঠিক আছে",
            });
        } else {
            Swal.fire({
                title: "ত্রুটি!",
                text: "শিক্ষক তথ্য সংরক্ষণে সমস্যা হয়েছে।",
                icon: "error",
                confirmButtonText: "পুনরায় চেষ্টা করুন",
            });
        }

        // Optionally, clear the form after submission
        setNewTeacherData({
            teacher_id: "",
            name_bn: "",
            name_en: "",
            gender: "",
            birth_date: "",
            blood_group: "",
            national_id: "",
            religion: "",
            nationality: "বাংলাদেশী",
            phone: "",
            email: "",
            joining_date: "",
            designation: "",
            department: "",
            education: "",
            present_address: "",
            permanent_address: "",
            photo_url: "",
            marital_status: "",
            subjectList: "",
            department: "",
            teacher_registration_number: "",
            extra_curricular_activities: "",
            computer_skills: "",
            emergency_contact_name: "",
            emergency_contact_relationship: "",
            emergency_contact_number: "",
        });
    };

    // Function to get icon based on label (reused from AdminTeacherDetails for consistency)
    const getIconForField = (label) => {
        switch (label) {
            case "নাম (বাংলা)":
            case "নাম (ইংরেজি)":
                return <User size={18} className="mr-2 text-[#249742]" />;
            case "পদবি":
            case "বিভাগ":
                return <Briefcase size={18} className="mr-2 text-blue-500" />;
            case "লিঙ্গ":
                return <Users size={18} className="mr-2 text-pink-500" />;
            case "জন্ম তারিখ":
                return (
                    <CalendarDays size={18} className="mr-2 text-purple-500" />
                );
            case "রক্তের গ্রুপ":
                return <Droplet size={18} className="mr-2 text-red-500" />;
            case "জাতীয় পরিচয়পত্র":
                return (
                    <CreditCard size={18} className="mr-2 text-orange-500" />
                );
            case "ধর্ম":
                return (
                    <HeartHandshake size={18} className="mr-2 text-teal-500" />
                );
            case "সাবজেক্ট লিস্ট":
                return <BookOpen size={18} className="mr-2 text-lime-600" />;
            case "জাতীয়তা":
                return <Flag size={18} className="mr-2 text-yellow-500" />;
            case "ফোন":
                return <Phone size={18} className="mr-2 text-green-500" />;
            case "ইমেইল":
                return <Mail size={18} className="mr-2 text-indigo-500" />;
            case "যোগদানের তারিখ":
                return (
                    <CalendarCheck size={18} className="mr-2 text-cyan-500" />
                );
            case "শিক্ষাগত যোগ্যতা":
                return (
                    <PiStudentBold size={18} className="mr-2 text-purple-600" />
                );
            case "এক্সট্রা কারিকুলার অ্যাক্টিভিটিস":
                return (
                    <IoDiscOutline size={18} className="mr-2 text-red-600" />
                );
            case "কম্পিউটার সম্পর্কিত দক্ষতা":
                return <FaComputer size={18} className="mr-2 text-blue-600" />;
            case "শিক্ষক নিবন্ধন নম্বর":
                return <LuIdCard size={18} className="mr-2 text-green-600" />;
            case "বর্তমান ঠিকানা":
            case "স্থায়ী ঠিকানা":
                return <MapPin size={18} className="mr-2 text-error" />;
            case "বৈবাহিক অবস্থা":
                return <Heart size={18} className="mr-2 text-pink-600" />;
            case "জরুরি যোগাযোগ":
                return <PhoneCall size={18} className="mr-2 text-red-600" />;
            case "শিক্ষক আইডি":
                return <User size={18} className="mr-2 text-gray-700" />;
            case "ছবি URL":
                return (
                    <img
                        src="https://placehold.co/18x18/cccccc/ffffff?text=IMG"
                        alt="Image Icon"
                        className="mr-2"
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="sm:p-6 md:p-8 bg-gray-50 min-h-screen">
            <div className="card bg-base-100 shadow-xl p-6 max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[#249742] border-b-2 pb-2 border-[#249742]">
                    নতুন শিক্ষক যুক্ত করুন
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3 pb-2 border-b text-gray-700 flex items-center">
                            <User size={20} className="mr-2 text-[#249742]" />{" "}
                            ব্যক্তিগত তথ্য
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {/* Teacher ID */}
                            <div>
                                <label className="label">
                                    <span className="label-text flex items-center">
                                        {getIconForField("শিক্ষক আইডি")} শিক্ষক
                                        আইডি
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="teacher_id"
                                    value={newTeacherData.teacher_id}
                                    onChange={handleChange}
                                    placeholder="TS-001,TB-001,TH-001, TG-001"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            {/* Name (Bengali) */}
                            <div>
                                <label className="label">
                                    <span className="label-text flex items-center">
                                        {getIconForField("নাম (বাংলা)")} নাম
                                        (বাংলা)
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="name_bn"
                                    value={newTeacherData.name_bn}
                                    onChange={handleChange}
                                    placeholder="শিক্ষকের বাংলা নাম"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            {/* Name (English) */}
                            <div>
                                <label className="label">
                                    <span className="label-text flex items-center">
                                        {getIconForField("নাম (ইংরেজি)")} নাম
                                        (ইংরেজি)
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="name_en"
                                    value={newTeacherData.name_en}
                                    onChange={handleChange}
                                    placeholder="Teacher's English Name"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            {/* Gender */}
                            <div>
                                <label className="label">
                                    <span className="label-text flex items-center">
                                        {getIconForField("লিঙ্গ")} লিঙ্গ
                                    </span>
                                </label>
                                <select
                                    name="gender"
                                    value={newTeacherData.gender}
                                    onChange={handleChange}
                                    className="select select-bordered w-full"
                                    required
                                >
                                    <option value="" disabled>
                                        নির্বাচন করুন
                                    </option>
                                    <option value="পুরুষ">পুরুষ</option>
                                    <option value="মহিলা">মহিলা</option>
                                    <option value="অন্যান্য">অন্যান্য</option>
                                </select>
                            </div>
                            {/* Birth Date */}
                            <div>
                                <label className="label">
                                    <span className="label-text flex items-center">
                                        {getIconForField("জন্ম তারিখ")} জন্ম
                                        তারিখ
                                    </span>
                                </label>
                                <input
                                    type="date"
                                    name="birth_date"
                                    value={newTeacherData.birth_date}
                                    onChange={handleChange}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            {/* Blood Group */}
                            <div>
                                <label className="label">
                                    <span className="label-text flex items-center">
                                        {getIconForField("রক্তের গ্রুপ")} রক্তের
                                        গ্রুপ
                                    </span>
                                </label>
                                <select
                                    name="blood_group"
                                    value={newTeacherData.blood_group}
                                    onChange={handleChange}
                                    className="select select-bordered w-full"
                                >
                                    <option value="" disabled>
                                        নির্বাচন করুন
                                    </option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                </select>
                            </div>
                            {/* National ID */}
                            <div>
                                <label className="label">
                                    <span className="label-text flex items-center">
                                        {getIconForField("জাতীয় পরিচয়পত্র")}{" "}
                                        জাতীয় পরিচয়পত্র
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="national_id"
                                    value={newTeacherData.national_id}
                                    onChange={handleChange}
                                    placeholder="জাতীয় পরিচয়পত্র নম্বর"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            {/* Religion */}
                            <div>
                                <label className="label">
                                    <span className="label-text flex items-center">
                                        {getIconForField("ধর্ম")} ধর্ম
                                    </span>
                                </label>
                                <select
                                    name="religion"
                                    value={newTeacherData.religion}
                                    onChange={handleChange}
                                    className="select select-bordered w-full"
                                >
                                    <option value="" disabled>
                                        নির্বাচন করুন
                                    </option>
                                    <option value="ইসলাম">ইসলাম</option>
                                    <option value="হিন্দু">হিন্দু</option>
                                    <option value="অন্যান্য">অন্যান্য</option>
                                </select>
                            </div>
                            {/* Nationality */}
                            <div>
                                <label className="label">
                                    <span className="label-text flex items-center">
                                        {getIconForField("জাতীয়তা")} জাতীয়তা
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="nationality"
                                    value={newTeacherData.nationality}
                                    onChange={handleChange}
                                    placeholder="বাংলাদেশী"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            {/* Phone */}
                            <div>
                                <label className="label">
                                    <span className="label-text flex items-center">
                                        {getIconForField("ফোন")} ফোন
                                    </span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={newTeacherData.phone}
                                    onChange={handleChange}
                                    placeholder="মোবাইল নম্বর"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            {/* Email */}
                            <div>
                                <label className="label">
                                    <span className="label-text flex items-center">
                                        {getIconForField("ইমেইল")} ইমেইল
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={newTeacherData.email}
                                    onChange={handleChange}
                                    placeholder="ইমেইল অ্যাড্রেস"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            {/* Marital Status */}
                            <div>
                                <label className="label">
                                    <span className="label-text flex items-center">
                                        {getIconForField("বৈবাহিক অবস্থা")}{" "}
                                        বৈবাহিক অবস্থা
                                    </span>
                                </label>
                                <select
                                    name="marital_status"
                                    value={newTeacherData.marital_status}
                                    onChange={handleChange}
                                    className="select select-bordered w-full"
                                >
                                    <option value="" disabled>
                                        নির্বাচন করুন
                                    </option>
                                    <option value="অবিবাহিত">অবিবাহিত</option>
                                    <option value="বিবাহিত">বিবাহিত</option>
                                </select>
                            </div>
                            {/* Photo URL */}
                            <div>
                                <label className="label">
                                    <span className="label-text flex items-center">
                                        {getIconForField("ছবি URL")} ছবি URL
                                    </span>
                                </label>
                                <input
                                    type="url"
                                    name="photo_url"
                                    value={newTeacherData.photo_url}
                                    onChange={handleChange}
                                    placeholder="শিক্ষকের ছবির URL"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            {/* Department */}
                            <div>
                                <label className="label">
                                    <span className="label-text flex items-center">
                                        {getIconForField("বিভাগ")} বিভাগ
                                    </span>
                                </label>
                                <select
                                    name="department"
                                    value={newTeacherData.department}
                                    onChange={handleChange}
                                    className="select select-bordered w-full"
                                    required
                                >
                                    <option value="" disabled>
                                        বিভাগ নির্বাচন করুন
                                    </option>
                                    <option value="General">জেনারেল</option>
                                    <option value="Science">বিজ্ঞান</option>
                                    <option value="Business">
                                        বব্যাবসায়িক শিক্ষা
                                    </option>
                                    <option value="Humanities">মানবিক</option>
                                </select>
                            </div>

                            {/* subjects */}
                            <div>
                                <label className="label">
                                    <span className="label-text flex items-center">
                                        {getIconForField("সাবজেক্ট লিস্ট")}{" "}
                                        সাবজেক্ট লিস্ট
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="subjectList"
                                    value={newTeacherData.subjectList}
                                    onChange={handleChange}
                                    placeholder="শিক্ষক যে যে বিষয়ে ক্লাস নিবেন তার লিস্ট কমা (,) দিয়ে"
                                    className="input input-bordered w-full"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Professional Information Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3 pb-2 border-b text-gray-700 flex items-center">
                            <Briefcase
                                size={20}
                                className="mr-2 text-blue-500"
                            />{" "}
                            পেশাগত তথ্য
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {/* Joining Date */}
                            <div>
                                <label className="label">
                                    <span className="label-text flex items-center">
                                        {getIconForField("যোগদানের তারিখ")}{" "}
                                        যোগদানের তারিখ
                                    </span>
                                </label>
                                <input
                                    type="date"
                                    name="joining_date"
                                    value={newTeacherData.joining_date}
                                    onChange={handleChange}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            {/* Teacher Designation */}
                            <div>
                                <label className="label">
                                    <span className="label-text flex items-center">
                                        {getIconForField("পদবি")} পদবি
                                    </span>
                                </label>
                                <select
                                    name="designation"
                                    value={newTeacherData.designation}
                                    onChange={handleChange}
                                    className="select select-bordered w-full"
                                    required
                                >
                                    <option value="" disabled>
                                        পদবি নির্বাচন করুন
                                    </option>
                                    <option value="Head Teacher">
                                        প্রধান শিক্ষক
                                    </option>
                                    <option value="Assistant Head Teacher">
                                        সহকারী প্রধান শিক্ষক
                                    </option>
                                    <option value="Senior Assistant Teacher">
                                        সিনিয়র সহকারী শিক্ষক
                                    </option>
                                    <option value="Assistant Teacher">
                                        সহকারী শিক্ষক
                                    </option>
                                    <option value="Librarian">
                                        গ্রন্থাগারিক
                                    </option>
                                    <option value="Physical Education Teacher">
                                        শারীরিক শিক্ষা শিক্ষক
                                    </option>
                                    <option value="Part Time Teacher">
                                        খন্ডকালীন শিক্ষক
                                    </option>
                                </select>
                            </div>

                            {/* Teacher Registration Number */}
                            <div>
                                <label className="label">
                                    <span className="label-text flex items-center">
                                        {getIconForField(
                                            "শিক্ষক নিবন্ধন নম্বর"
                                        )}{" "}
                                        শিক্ষক নিবন্ধন নম্বর
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="teacher_registration_number"
                                    value={
                                        newTeacherData.teacher_registration_number
                                    }
                                    onChange={handleChange}
                                    placeholder="শিক্ষক নিবন্ধন নম্বর"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            {/* Education */}
                            <div>
                                <label className="label">
                                    <span className="label-text flex items-center">
                                        {getIconForField("শিক্ষাগত যোগ্যতা")}{" "}
                                        শিক্ষাগত যোগ্যতা
                                    </span>
                                </label>
                                <input
                                    name="education"
                                    value={newTeacherData.education}
                                    onChange={handleChange}
                                    placeholder="শিক্ষাগত যোগ্যতা"
                                    className="input input-bordered w-full"
                                    required
                                ></input>
                            </div>

                            {/* Extra curricular activities */}
                            <div>
                                <label className="label">
                                    <span className="label-text flex items-center">
                                        {getIconForField(
                                            "এক্সট্রা কারিকুলার অ্যাক্টিভিটিস"
                                        )}{" "}
                                        এক্সট্রা কারিকুলার অ্যাক্টিভিটিস
                                    </span>
                                </label>
                                <input
                                    name="extra_curricular_activities"
                                    value={
                                        newTeacherData.extra_curricular_activities
                                    }
                                    onChange={handleChange}
                                    placeholder="কমা দিয়ে (,) অ্যাক্টিভিটিগুলো লিখুন"
                                    className="input input-bordered w-full"
                                    required
                                ></input>
                            </div>

                            {/* Computer related skills */}
                            <div>
                                <label className="label">
                                    <span className="label-text flex items-center">
                                        {getIconForField(
                                            "কম্পিউটার সম্পর্কিত দক্ষতা"
                                        )}{" "}
                                        কম্পিউটার সম্পর্কিত দক্ষতা
                                    </span>
                                </label>
                                <input
                                    name="computer_skills"
                                    value={newTeacherData.computer_skills}
                                    onChange={handleChange}
                                    placeholder="MS Office, Internet Browsing ইত্যাদি "
                                    className="input input-bordered w-full"
                                    required
                                ></input>
                            </div>
                        </div>
                    </div>

                    {/* Address Information Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3 pb-2 border-b text-gray-700 flex items-center">
                            <MapPin size={20} className="mr-2 text-gray-600" />{" "}
                            ঠিকানা
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Present Address */}
                            <div>
                                <label className="label">
                                    <span className="label-text flex items-center">
                                        {getIconForField("বর্তমান ঠিকানা")}{" "}
                                        বর্তমান ঠিকানা
                                    </span>
                                </label>
                                <textarea
                                    name="present_address"
                                    value={newTeacherData.present_address}
                                    onChange={handleChange}
                                    placeholder="বর্তমান ঠিকানা"
                                    className="textarea textarea-bordered h-24 w-full"
                                    required
                                ></textarea>
                            </div>
                            {/* Permanent Address */}
                            <div>
                                <label className="label">
                                    <span className="label-text flex items-center">
                                        {getIconForField("স্থায়ী ঠিকানা")}{" "}
                                        স্থায়ী ঠিকানা
                                    </span>
                                </label>
                                <textarea
                                    name="permanent_address"
                                    value={newTeacherData.permanent_address}
                                    onChange={handleChange}
                                    placeholder="স্থায়ী ঠিকানা"
                                    className="textarea textarea-bordered h-24 w-full"
                                    required
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Emergency Contact Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3 pb-2 border-b text-gray-700 flex items-center">
                            <PhoneCall
                                size={20}
                                className="mr-2 text-red-600"
                            />{" "}
                            জরুরি যোগাযোগ
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {/* Emergency Contact */}
                            <div>
                                <label className="label">
                                    <span className="label-text flex items-center">
                                        {getIconForField("জরুরি যোগাযোগ")} জরুরি
                                        যোগাযোগ নম্বর
                                    </span>
                                </label>
                                <input
                                    type="tel"
                                    name="emergency_contact_number"
                                    value={
                                        newTeacherData.emergency_contact_number
                                    }
                                    onChange={handleChange}
                                    placeholder="জরুরি যোগাযোগ নম্বর"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            {/* Emergency Contact */}
                            <div>
                                <label className="label">
                                    <span className="label-text flex items-center">
                                        {getIconForField("নাম (বাংলা)")}
                                        যোগাযোগের ব্যাক্তির নাম
                                    </span>
                                </label>
                                <input
                                    type="tel"
                                    name="emergency_contact_name"
                                    value={
                                        newTeacherData.emergency_contact_name
                                    }
                                    onChange={handleChange}
                                    placeholder="জরুরি যোগাযোগের ব্যক্তির নাম"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            {/* Emergency Contact Relationship */}
                            <div>
                                <label className="label">
                                    <span className="label-text flex items-center">
                                        {getIconForField("বৈবাহিক অবস্থা")}{" "}
                                        ব্যক্তির সাথে সম্পর্ক
                                    </span>
                                </label>
                                <select
                                    name="emergency_contact_relationship"
                                    value={
                                        newTeacherData.emergency_contact_relationship
                                    }
                                    onChange={handleChange}
                                    className="select select-bordered w-full"
                                >
                                    <option disabled value="">
                                        সম্পর্ক নির্বাচন করুন
                                    </option>
                                    <option value="পিতা">পিতা</option>
                                    <option value="মাতা">মাতা</option>
                                    <option value="ভাই">ভাই</option>
                                    <option value="বোন">বোন</option>
                                    <option value="স্ত্রী">স্ত্রী</option>
                                    <option value="স্বামী">স্বামী</option>
                                    <option value="বন্ধু">বন্ধু</option>
                                    <option value="অন্যান্য">অন্যান্য</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center mt-8">
                        <button
                            type="submit"
                            className="btn bg-[#249742] text-white hover:bg-green-700 px-8 py-3 text-lg"
                        >
                            <PlusCircle className="mr-2" /> শিক্ষক যুক্ত করুন
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTeacher;
