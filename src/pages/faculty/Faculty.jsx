import { useEffect, useState } from "react";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import { Link } from "react-router-dom";

const departments = ["general", "science", "business", "humanities"];

const Faculty = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/teachers")
            .then((res) => res.json())
            .then((data) => {
                setTeachers(data);
            });
    }, []);

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <SectionHeader
                    title={"আমাদের অভিজ্ঞ ফ্যাকাল্টি"}
                    subtitle={"আমাদের রয়েছে অভিজ্ঞ ও সুদক্ষ ফ্যাকাল্টি।"}
                />

                {departments.map((dept) => {
                    const deptTeachers = teachers.filter(
                        (t) =>
                            t.department?.toLowerCase() === dept.toLowerCase()
                    );

                    return (
                        <div key={dept} className="mb-12">
                            <h3 className="text-2xl font-semibold text-[#249742] mb-6 border-b pb-2">
                                {dept?.toLowerCase() === "general"
                                    ? "সাধারণ"
                                    : dept?.toLowerCase() === "science"
                                    ? "বিজ্ঞান"
                                    : dept?.toLowerCase() === "business"
                                    ? "ব্যবসায়"
                                    : "মানবিক"}{" "}
                                বিভাগ
                            </h3>

                            {deptTeachers.length > 0 ? (
                                // ... আপনার কম্পোনেন্টের অন্যান্য কোড ...

                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                    {" "}
                                    {/* Added xl:grid-cols-4 for larger screens */}
                                    {deptTeachers.map((teacher) => (
                                        <div
                                            key={teacher._id}
                                            className="group relative bg-[#24974315] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out p-6 flex flex-col items-center text-center overflow-hidden transform hover:-translate-y-1" // Added hover effects
                                        >
                                            {/* Overlay for subtle effect on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>

                                            <div className="relative z-10">
                                                {" "}
                                                <div className="flex justify-center">
                                                    {/* Ensure content is above overlay */}
                                                    <img
                                                        src={
                                                            teacher.photo_url ||
                                                            "https://via.placeholder.com/150/249742/FFFFFF?text=No+Photo"
                                                        } // Added placeholder if no photo_url
                                                        alt={
                                                            teacher.name_bn ||
                                                            teacher.name_en
                                                        }
                                                        className="w-28 h-28 rounded-full border-4 border-[#249742] object-cover mb-4 p-1 shadow-md group-hover:scale-105 transition-transform duration-300" // Increased size slightly, added shadow, hover effect
                                                    />
                                                </div>
                                                <h4 className="text-xl font-bold text-gray-800 mb-1">
                                                    {" "}
                                                    {/* Increased font size and boldness */}
                                                    {teacher.name_bn ||
                                                        teacher.name_en}
                                                </h4>
                                                <p className="text-base text-gray-600 font-medium mb-2">
                                                    {" "}
                                                    {/* Adjusted text color and weight */}
                                                    {teacher.designation}
                                                </p>
                                                <p className="text-sm text-gray-500 mb-4">
                                                    বিষয়:{" "}
                                                    {teacher.subjectList ||
                                                        "অনির্দিষ্ট"}
                                                </p>
                                                {/* Description (Optional) - using conditional rendering */}
                                                {teacher.description && (
                                                    <p className="mt-3 text-sm text-gray-700 text-center mb-4 italic">
                                                        {teacher.description}
                                                    </p>
                                                )}
                                                {/* Fallback description if no specific description field */}
                                                {!teacher.description && (
                                                    <p className="mt-3 text-sm text-gray-700 text-center mb-4">
                                                        অভিজ্ঞ ও নিবেদিত শিক্ষক
                                                    </p>
                                                )}
                                                <Link
                                                    to={`/teachers/${teacher.teacher_id}`}
                                                    className="btn bg-[#249742] border-none text-white text-base rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
                                                >
                                                    ডিটেইলস দেখুন
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-500 text-center italic">
                                    এই বিভাগে কোনো শিক্ষক খুঁজে পাওয়া যায়নি।
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Faculty;
