import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaPlus, FaSearch, FaFilter } from "react-icons/fa";
const AdminTeacherList = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [teachersData, setTeachersData] = useState([]);
    const [filter, setFilter] = useState({
        gender: "",
        department: "",
        designation: "",
    });

    useEffect(() => {
        fetch("http://localhost:3000/teachers")
            .then((response) => response.json())
            .then((data) => {
                setTeachersData(data);
            })
            .catch((error) => {
                console.error("Error fetching teachers data:", error);
            });
    }, []);

    console.log("Teachers data:", teachersData);

    const filteredTeachers = teachersData.filter((teacher) => {
        const matchesSearch =
            teacher?.name_bn.toLowerCase().includes(searchTerm.toLowerCase()) ||
            teacher?.name_en.toLowerCase().includes(searchTerm.toLowerCase()) ||
            teacher?.teacher_id
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
            teacher?.phone.includes(searchTerm);

        const matchesGender = filter.gender
            ? teacher?.gender === filter.gender
            : true;
        const matchesDepartment = filter.department
            ? teacher?.department === filter.department
            : true;
        const matchesDesignation = filter.designation
            ? teacher?.designation === filter.designation
            : true;

        return (
            matchesSearch &&
            matchesGender &&
            matchesDepartment &&
            matchesDesignation
        );
    });

    // Extract unique values for filters
    const uniqueDepartments = [
        ...new Set(teachersData.map((t) => t.department)),
    ];
    const uniqueDesignations = [
        ...new Set(teachersData.map((t) => t.designation)),
    ];

    return (
        <div className="p-4 bg-gray-50 min-h-screen">
            <div className="card bg-base-100 shadow-xl p-6 mb-6">
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6 pb-4 border-b-2 border-[#249742]">
                    <h1 className="text-3xl font-extrabold text-[#249742] mb-3 sm:mb-0">
                        শিক্ষক ম্যানেজমেন্ট পোর্টাল
                    </h1>
                    <Link
                        to="/admin/addTeacher" // Assuming a route for adding teachers
                        className="btn bg-[#249742] hover:bg-green-700 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md flex items-center justify-center transition-all duration-300 transform hover:scale-105"
                    >
                        <FaPlus className="mr-2" /> নতুন শিক্ষক যোগ করুন
                    </Link>
                </div>

                {/* Filter and Search Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {/* Filters */}
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
                                        department: e.target.value,
                                    })
                                }
                                value={filter.department}
                            >
                                <option value="">বিভাগ</option>
                                {uniqueDepartments.map((dept) => (
                                    <option key={dept} value={dept}>
                                        {dept}
                                    </option>
                                ))}
                            </select>
                            <select
                                className="select select-bordered select-sm w-full text-black bg-gray-100 border-gray-300"
                                onChange={(e) =>
                                    setFilter({
                                        ...filter,
                                        designation: e.target.value,
                                    })
                                }
                                value={filter.designation}
                            >
                                <option value="">পদবি</option>
                                {uniqueDesignations.map((desig) => (
                                    <option key={desig} value={desig}>
                                        {desig}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Search Input */}
                    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between md:col-span-2 lg:col-span-1">
                        <label className="label text-gray-700 font-semibold mb-2">
                            <FaSearch className="inline mr-2 text-success" />{" "}
                            শিক্ষক খুঁজুন:
                        </label>
                        <input
                            className="input input-bordered w-full text-black bg-gray-100 border-gray-300"
                            placeholder="নাম, আইডি অথবা ফোন নম্বর"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {/* Optional Extra section */}
                    <div className="shadow-md p-4 rounded-lg">
                        <h1 className="text-[#249742] font-semibold">
                            শিক্ষক অপসারণের ক্ষেত্রে অবশ্যই নির্দিষ্ট কারণ
                            উল্লেখ করে অপসারণ করতে হবে। অন্যথায় তা বাতিল করা
                            হবে।
                        </h1>
                    </div>
                </div>

                {/* Teachers Table */}
                <div className="w-full overflow-x-auto rounded-lg shadow-lg border border-gray-200">
                    <table className="table w-full text-base">
                        <thead className="bg-[#249742] text-white">
                            <tr>
                                <th className="py-3 px-4 text-left">ছবি</th>
                                <th className="py-3 px-4 text-left">নাম</th>
                                <th className="py-3 px-4 text-left">পদবি</th>
                                <th className="py-3 px-4 text-left">বিভাগ</th>
                                <th className="py-3 px-4 text-left">ফোন</th>
                                <th className="py-3 px-4 text-center">
                                    অ্যাকশন
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTeachers?.length > 0 ? (
                                filteredTeachers?.map((teacher) => (
                                    <tr
                                        key={teacher?.teacher_id}
                                        className="hover border-b border-gray-100 last:border-b-0"
                                    >
                                        <td className="py-3 px-4">
                                            <div className="avatar">
                                                <div className="w-12 h-12 rounded-full ring ring-[#249742] ring-offset-base-100 ring-offset-2 overflow-hidden">
                                                    <img
                                                        src={teacher?.photo_url}
                                                        alt={teacher?.name_bn}
                                                        onError={(e) => {
                                                            e.target.onerror =
                                                                null;
                                                            e.target.src =
                                                                "https://placehold.co/48x48/cccccc/ffffff?text=No+Image";
                                                        }} // Fallback image
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-4">
                                            <div className="font-semibold text-gray-800">
                                                {teacher?.name_bn}
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                {teacher?.name_en}
                                            </div>
                                        </td>
                                        <td className="py-3 px-4 text-gray-600">
                                            {teacher?.designation}
                                        </td>
                                        <td className="py-3 px-4 text-gray-600">
                                            {teacher?.department}
                                        </td>
                                        <td className="py-3 px-4 text-gray-600">
                                            {teacher?.phone}
                                        </td>
                                        <td className="py-3 px-4 text-center">
                                            <Link
                                                to={`/admin/teacherList/${teacher?.teacher_id}`}
                                                className="btn btn-sm bg-[#249742] hover:bg-green-700 text-white transition-colors duration-200"
                                            >
                                                <FaEye className="mr-1" />{" "}
                                                বিস্তারিত
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="6"
                                        className="text-center py-6 text-gray-500 text-lg"
                                    >
                                        কোনো শিক্ষক খুঁজে পাওয়া যায়নি।
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminTeacherList;
