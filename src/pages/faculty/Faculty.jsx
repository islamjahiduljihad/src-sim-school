import { useEffect, useState } from "react";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import { Link } from "react-router-dom";

const departments = ["general", "science", "business", "humanities"];

const Faculty = () => {
    const [teachers, setTeachers] = useState([]);
    console.log("Teachers:", teachers);
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
                <div>
                    <SectionHeader
                        title={"আমাদের অভিজ্ঞ ফ্যাকাল্টি"}
                        subtitle={"আমাদের রয়েছে অভিজ্ঞ ও সুদক্ষ ফ্যাকাল্টি।"}
                    ></SectionHeader>
                </div>

                {departments.map((dept) => {
                    const deptTeachers = teachers.filter(
                        (t) => t.department === dept
                    );

                    return (
                        <div key={dept} className="mb-12">
                            <h3 className="text-2xl font-semibold text-[#249742] mb-6 border-b pb-2">
                                {dept} বিভাগ
                            </h3>

                            {deptTeachers.length > 0 ? (
                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {deptTeachers.map((teacher) => (
                                        <div
                                            key={teacher.id}
                                            className=" bg-white rounded-xl shadow hover:shadow-lg transition p-5 flex flex-col items-center text-center"
                                        >
                                            <img
                                                src={teacher.image}
                                                alt={teacher.name}
                                                className="w-24 h-24 rounded-full border-4 border-[#249742] object-cover mb-4 p-1"
                                            />
                                            <h4 className="text-lg font-semibold text-gray-800">
                                                {teacher.name}
                                            </h4>
                                            <p className="text-sm text-gray-500">
                                                {teacher.subject} |{" "}
                                                {teacher.designation}
                                            </p>
                                            <p className="mt-3 text-sm text-gray-700 text-center mb-4">
                                                {teacher.description}
                                            </p>
                                            <Link className="btn bg-[#249742] text-white rounded-lg">
                                                ডিটেইলস দেখুন
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-500">
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
