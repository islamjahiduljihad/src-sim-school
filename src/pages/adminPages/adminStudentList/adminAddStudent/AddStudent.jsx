import axios from "axios";
import { useState } from "react";
import { FaUser, FaMale, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import Swal from "sweetalert2";

const AddStudent = () => {
    const [newStudentData, setNewStudentData] = useState({
        student_id: "",
        name_bn: "",
        name_en: "",
        birth_date: "",
        classNo: "",
        department: "",
        session: "",
        gender: "",
        blood_group: "",
        nationality: "বাংলাদেশী",
        religion: "",
        permanent_address: "",
        present_address: "",
        father_name: "",
        father_occupation: "",
        mother_name: "",
        mother_occupation: "",
        guardian_phone: "",
        student_photo_url: "",
        birth_certificate_no: "",
        guardian_email: "",
        student_email: "",
        student_phone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewStudentData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(
                `http://localhost:3000/student/${newStudentData?.classNo}`,
                newStudentData
            )
            .then((response) => {
                if (response.data.success) {
                    Swal.fire({
                        title: "শিক্ষার্থী যুক্ত হয়েছে!",
                        text: "নতুন শিক্ষার্থী সফলভাবে যুক্ত হয়েছে।",
                        icon: "success",
                        confirmButtonText: "ঠিক আছে",
                    });
                } else {
                    Swal.fire({
                        title: "ত্রুটি!",
                        text:
                            response.data.message ||
                            "শিক্ষার্থী যুক্ত করতে সমস্যা হয়েছে।",
                        icon: "error",
                        confirmButtonText: "ঠিক আছে",
                    });
                }
            })
            .catch((error) => {
                console.error("Error adding student:", error);
                alert("শিক্ষার্থী যুক্ত করতে সমস্যা হয়েছে।");
            });
        setNewStudentData({
            student_id: "",
            name_bn: "",
            name_en: "",
            birth_date: "",
            classNo: "",
            department: "",
            session: "",
            gender: "",
            blood_group: "",
            nationality: "বাংলাদেশী",
            religion: "",
            permanent_address: "",
            present_address: "",
            father_name: "",
            father_occupation: "",
            mother_name: "",
            mother_occupation: "",
            guardian_phone: "",
            student_photo_url: "",
            birth_certificate_no: "",
            guardian_email: "",
            student_email: "",
            student_phone: "",
        });
    };

    return (
        <div>
            <div className="card bg-base-100 shadow-xl p-6">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[#249742] border-b-2 pb-4">
                    নতুন শিক্ষার্থী যুক্ত করুন
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Student Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3 border-b pb-2 text-gray-700">
                            <FaUser className="inline mr-2 text-[#249742]" />{" "}
                            ব্যক্তিগত তথ্য
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div>
                                <label className="label">
                                    <span className="label-text">
                                        শিক্ষার্থী আইডি
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="student_id"
                                    value={newStudentData.student_id}
                                    onChange={handleChange}
                                    placeholder="SSIM-XX-XXX"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">
                                        বাংলা নাম
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="name_bn"
                                    value={newStudentData.name_bn}
                                    onChange={handleChange}
                                    placeholder="শিক্ষার্থীর নাম লিখুন"
                                    className="input input-bordered w-full"
                                    required
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
                                    value={newStudentData.name_en}
                                    onChange={handleChange}
                                    placeholder="শিক্ষার্থীর নাম ইংরেজিতে"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">
                                        জন্ম তারিখ
                                    </span>
                                </label>
                                <input
                                    type="date"
                                    name="birth_date"
                                    value={newStudentData.birth_date}
                                    onChange={handleChange}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">শ্রেণি</span>
                                </label>
                                <select
                                    name="classNo"
                                    value={newStudentData.classNo}
                                    onChange={handleChange}
                                    className="select select-bordered w-full"
                                    required
                                >
                                    <option value="">
                                        শ্রেণি নির্বাচন করুন
                                    </option>
                                    <option value="6">৬ষ্ঠ</option>
                                    <option value="7">৭ম</option>
                                    <option value="8">৮ম</option>
                                    <option value="9">৯ম</option>
                                    <option value="10">১০ম</option>
                                </select>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">বিভাগ</span>
                                </label>
                                <select
                                    name="department"
                                    value={newStudentData.department}
                                    onChange={handleChange}
                                    className="select select-bordered w-full"
                                    required
                                >
                                    <option value="">
                                        বিভাগ নির্বাচন করুন
                                    </option>
                                    <option value="general">জেনারেল</option>
                                    <option value="science">বিজ্ঞান</option>
                                    <option value="business">
                                        ব্যাবসায় শিক্ষা
                                    </option>
                                    <option value="humanities">মানবিক</option>
                                </select>
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text">সেশন</span>
                                </label>
                                <input
                                    type="text"
                                    name="session"
                                    value={newStudentData.session}
                                    onChange={handleChange}
                                    placeholder="সেশন লিখুন"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">লিঙ্গ</span>
                                </label>
                                <select
                                    name="gender"
                                    value={newStudentData.gender}
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
                            <div>
                                <label className="label">
                                    <span className="label-text">
                                        রক্তের গ্রুপ
                                    </span>
                                </label>
                                <select
                                    name="blood_group"
                                    value={newStudentData.blood_group}
                                    onChange={handleChange}
                                    className="select select-bordered w-full"
                                    required
                                >
                                    <option value="">
                                        রক্তের গ্রুপ নির্বাচন করুন
                                    </option>
                                    <option value="A+">A+</option>
                                    <option value="A−">A−</option>
                                    <option value="B+">B+</option>
                                    <option value="B−">B−</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB−">AB−</option>
                                    <option value="O+">O+</option>
                                    <option value="O−">O−</option>
                                </select>
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text">জাতীয়তা</span>
                                </label>
                                <input
                                    type="text"
                                    name="nationality"
                                    value={newStudentData.nationality}
                                    onChange={handleChange}
                                    placeholder="বাংলাদেশী"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">ধর্ম</span>
                                </label>
                                <select
                                    name="religion"
                                    value={newStudentData.religion}
                                    onChange={handleChange}
                                    className="select select-bordered w-full"
                                    required
                                >
                                    <option value="">ধর্ম নির্বাচন করুন</option>
                                    <option value="ইসলাম">ইসলাম</option>
                                    <option value="হিন্দু">হিন্দু</option>
                                    <option value="অন্যান্য">অন্যান্য</option>
                                </select>
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
                                    value={newStudentData.birth_certificate_no}
                                    onChange={handleChange}
                                    placeholder="জন্ম সনদের নাম্বার দিন"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">
                                        শিক্ষার্থী ছবির URL
                                    </span>
                                </label>
                                <input
                                    type="url"
                                    name="student_photo_url"
                                    value={newStudentData.student_photo_url}
                                    onChange={handleChange}
                                    placeholder="imagebb তে আপলোড করা ছবির লিঙ্ক দিন"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">
                                        শিক্ষার্থীর নিজের ইমেইল
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    name="student_email"
                                    value={newStudentData.student_email}
                                    onChange={handleChange}
                                    placeholder="শিক্ষার্থীর ইমেইল দিন"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">
                                        শিক্ষার্থীর নিজের মোবাইল নম্বর
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="student_phone"
                                    value={newStudentData.student_phone}
                                    onChange={handleChange}
                                    placeholder="শিক্ষার্থীর মোবাইল নম্বর দিন"
                                    className="input input-bordered w-full"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Guardian Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3 border-b pb-2 text-gray-700">
                            <FaMale className="inline mr-2 text-[#249742]" />{" "}
                            অভিভাবক তথ্য
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="label">
                                    <span className="label-text">
                                        পিতার নাম
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="father_name"
                                    value={newStudentData.father_name}
                                    onChange={handleChange}
                                    placeholder="পিতার নাম দিন"
                                    className="input input-bordered w-full"
                                    required
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
                                    value={newStudentData.mother_name}
                                    onChange={handleChange}
                                    placeholder="মাতার নাম দিন"
                                    className="input input-bordered w-full"
                                    required
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
                                    value={newStudentData.father_occupation}
                                    onChange={handleChange}
                                    placeholder="পিতার পেশা দিন"
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
                                    value={newStudentData.mother_occupation}
                                    onChange={handleChange}
                                    placeholder="মাতার পেশা দিন"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">
                                        অভিভাবকের মোবাইল নম্বর
                                    </span>
                                </label>
                                <input
                                    type="tel"
                                    name="guardian_phone"
                                    value={newStudentData.guardian_phone}
                                    onChange={handleChange}
                                    placeholder="অভিবাবকের মোবাইল নাম্বার দিন"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">
                                        অভিভাবকের ইমেইল
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    name="guardian_email"
                                    value={newStudentData.guardian_email}
                                    onChange={handleChange}
                                    placeholder="অভিবাবকের ইমেইল দিন"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Address Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3 border-b pb-2 text-gray-700">
                            <FaMapMarkerAlt className="inline mr-2 text-[#249742]" />{" "}
                            ঠিকানা
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="label">
                                    <span className="label-text">
                                        বর্তমান ঠিকানা
                                    </span>
                                </label>
                                <textarea
                                    name="present_address"
                                    value={newStudentData.present_address}
                                    onChange={handleChange}
                                    placeholder="বর্তমান ঠিকানা দিন"
                                    className="textarea textarea-bordered h-24 w-full"
                                    required
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
                                    value={newStudentData.permanent_address}
                                    onChange={handleChange}
                                    placeholder="স্থায়ী ঠিকানা দিন (বর্তমান ও স্থায়ী ঠিকানা একই হলে S লিখে রাখুন)"
                                    className="textarea textarea-bordered h-24 w-full"
                                    required
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-8">
                        <button
                            type="submit"
                            className="btn bg-[#249742] text-white hover:bg-green-700 px-8"
                        >
                            শিক্ষার্থী যুক্ত করুন <MdOutlinePersonAddAlt1 />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddStudent;
