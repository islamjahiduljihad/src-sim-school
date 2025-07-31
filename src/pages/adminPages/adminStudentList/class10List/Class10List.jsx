import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaSearch, FaFilter } from "react-icons/fa";
import { MdOutlineKeyboardReturn } from "react-icons/md";

const Class10List = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [studentsData, setStudentsData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/students/10")
            .then((response) => response.json())
            .then((data) => {
                setStudentsData(data);
                console.log("Fetched Students Data:", data);
            })
            .catch((error) => {
                console.error("Error fetching students data:", error);
            });
    }, []);
    const [filter, setFilter] = useState({
        gender: "",
        blood_group: "",
        religion: "",
    });

    const filteredStudents = studentsData.filter((student) => {
        const matchesSearch =
            student.name_bn.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.student_id
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
            student.guardian_phone.includes(searchTerm);

        const matchesGender = filter.gender
            ? student.gender === filter.gender
            : true;
        const matchesBlood = filter.blood_group
            ? student.blood_group === filter.blood_group
            : true;
        const matchesReligion = filter.religion
            ? student.religion === filter.religion
            : true;

        return (
            matchesSearch && matchesGender && matchesBlood && matchesReligion
        );
    });

    return (
        <div className="bg-gray-50 min-h-screen">
            {" "}
            {/* Added a light background */}
            <div className="card bg-base-100 shadow-xl p-6 mb-6">
                {" "}
                {/* Unified card styling */}
                <div className="text-center mb-6 pb-4 border-b-2 border-[#249742]">
                    <h1 className="text-2xl md:text-3xl font-extrabold text-[#249742]">
                        ১০ম শ্রেনী শিক্ষার্থী ম্যানেজমেন্ট পোর্টাল
                    </h1>
                </div>
                {/* Top Section: Add Student, Filters, Search */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {/* Add New Student Button */}
                    <Link
                        to={"/admin/studentList/addStudent"}
                        className="btn bg-[#249742] hover:bg-green-700 text-white text-lg font-semibold py-4 px-6 rounded-lg shadow-md flex items-center justify-center transition-all duration-300 transform hover:scale-105"
                    >
                        <FaPlus className="mr-2" /> নতুন শিক্ষার্থী যুক্ত করুন
                    </Link>

                    {/* Filters Section */}
                    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between">
                        <label className="label text-gray-700 font-semibold mb-2">
                            <FaFilter className="inline mr-2 text-warning" />{" "}
                            ফিল্টার অপশন:
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            <select
                                className="select select-bordered select-sm w-full text-black bg-gray-100 border-gray-300"
                                onChange={(e) =>
                                    setFilter({
                                        ...filter,
                                        gender: e.target.value,
                                    })
                                }
                                value={filter.gender}
                            >
                                <option value="">লিঙ্গ</option>
                                <option value="পুরুষ">পুরুষ</option>
                                <option value="মহিলা">মহিলা</option>
                                <option value="অন্যান্য">অন্যান্য</option>
                            </select>
                            <select
                                className="select select-bordered select-sm w-full text-black bg-gray-100 border-gray-300"
                                onChange={(e) =>
                                    setFilter({
                                        ...filter,
                                        blood_group: e.target.value,
                                    })
                                }
                                value={filter.blood_group}
                            >
                                <option value="">রক্তের গ্রুপ</option>
                                <option value="A+">A+</option>
                                <option value="B+">B+</option>
                                <option value="O+">O+</option>
                                <option value="O−">O−</option>
                                <option value="AB+">AB+</option>
                                <option value="AB−">AB−</option>{" "}
                                {/* Added AB- for completeness */}
                            </select>
                            <select
                                className="select select-bordered select-sm w-full text-black bg-gray-100 border-gray-300"
                                onChange={(e) =>
                                    setFilter({
                                        ...filter,
                                        religion: e.target.value,
                                    })
                                }
                                value={filter.religion}
                            >
                                <option value="">ধর্ম</option>
                                <option value="ইসলাম">ইসলাম</option>
                                <option value="হিন্দু">হিন্দু</option>
                                <option value="খ্রিস্টান">খ্রিস্টান</option>
                                <option value="বৌদ্ধ">বৌদ্ধ</option>{" "}
                                {/* Added Buddhist for completeness */}
                                <option value="অন্যান্য">অন্যান্য</option>
                            </select>
                        </div>
                    </div>

                    {/* Search Input */}
                    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between">
                        <label className="label text-gray-700 font-semibold mb-2">
                            <FaSearch className="inline mr-2 text-success" />{" "}
                            শিক্ষার্থী খুঁজুন:
                        </label>
                        <input
                            className="input input-bordered w-full text-black bg-gray-100 border-gray-300"
                            placeholder="নাম, আইডি অথবা অভিভাবকের ফোন নম্বর"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                {/* Students Table */}
                <div className="w-full overflow-x-auto rounded-lg shadow-lg border border-gray-200">
                    {" "}
                    {/* Added stronger shadow and border */}
                    <table className="table w-full bg-white text-base">
                        {" "}
                        {/* Base text size for readability */}
                        <thead className="bg-[#249742] text-white">
                            <tr>
                                <th className="py-3 px-4 text-left">
                                    শিক্ষার্থী আইডি
                                </th>
                                <th className="py-3 px-4 text-left">নাম</th>
                                <th className="py-3 px-4 text-left">ঠিকানা</th>
                                <th className="py-3 px-4 text-left">
                                    অভিভাবকের ফোন
                                </th>
                                <th className="py-3 px-4 text-center">
                                    অ্যাকশন
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredStudents.length > 0 ? (
                                filteredStudents.map((student, index) => (
                                    <tr
                                        key={index}
                                        className="hover border-b border-gray-100 last:border-b-0"
                                    >
                                        <td className="py-3 px-4">
                                            {student?.student_id}
                                        </td>
                                        <td className="py-3 px-4 font-medium text-gray-800">
                                            {student?.name_bn}
                                        </td>
                                        <td className="py-3 px-4 text-gray-600">
                                            {student?.present_address}
                                        </td>
                                        <td className="py-3 px-4 text-gray-600">
                                            {student?.guardian_phone}
                                        </td>
                                        <td className="py-3 px-4 text-center">
                                            <Link
                                                to={`/admin/studentList/${student?.classNo}/${student?._id}`}
                                                className="btn btn-sm bg-[#249742] hover:bg-green-700 text-white transition-colors duration-200"
                                            >
                                                বিস্তারিত দেখুন
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="5"
                                        className="text-center py-6 text-gray-500 text-lg"
                                    >
                                        কোনো শিক্ষার্থী খুঁজে পাওয়া যায়নি।
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                {/* Back Button */}
                <div className="flex justify-center mt-6">
                    <Link
                        to={"/admin/studentList"}
                        className="btn bg-[#249742] text-white hover:bg-gray-700 px-6 py-3 rounded-lg shadow-md flex items-center transition-colors duration-200"
                    >
                        <MdOutlineKeyboardReturn className="mr-2 text-xl" />{" "}
                        পেছনে ফিরে যান
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Class10List;
