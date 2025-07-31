import { useEffect, useState } from "react";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import { Link } from "react-router-dom";
import {
    FaSearch,
    FaGraduationCap,
    FaChalkboardTeacher,
    FaFilter,
} from "react-icons/fa";

const Faculty = () => {
    const [teachers, setTeachers] = useState([]);
    const [filteredTeachers, setFilteredTeachers] = useState([]);
    const [activeDepartment, setActiveDepartment] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        // Simulating API call with mock data
        const mockTeachers = [
            {
                _id: "1",
                name_en: "Zakir Hossain",
                name_bn: "জাকির হোসেন",
                photo_url: "https://i.ibb.co/Fk2sWQyS/cst-09.jpg",
                designation: "সহকারী শিক্ষক",
                department: "General",
                subjectList: "আইসিটি, ইংলিশ",
                education: "এম.এসসি ইন কম্পিউটার সায়েন্স",
                experience: "১০ বছর",
            },
            {
                _id: "2",
                name_en: "Fatema Begum",
                name_bn: "ফাতেমা বেগম",
                photo_url: "https://i.ibb.co/1rJQYf8/teacher2.jpg",
                designation: "সহকারী শিক্ষক",
                department: "Science",
                subjectList: "গণিত, পদার্থবিজ্ঞান",
                education: "এম.এসসি ইন গণিত",
                experience: "৮ বছর",
            },
            {
                _id: "3",
                name_en: "Rahim Uddin",
                name_bn: "রহিম উদ্দিন",
                photo_url: "https://i.ibb.co/2FjSg3Z/teacher3.jpg",
                designation: "সহকারী শিক্ষক",
                department: "Science",
                subjectList: "রসায়ন, জীববিজ্ঞান",
                education: "এম.এসসি ইন কেমিস্ট্রি",
                experience: "১২ বছর",
            },
            {
                _id: "4",
                name_en: "Nusrat Jahan",
                name_bn: "নুসরাত জাহান",
                photo_url: "https://i.ibb.co/KWzX7Hc/teacher4.jpg",
                designation: "সহকারী শিক্ষক",
                department: "Business",
                subjectList: "ব্যবসায় শিক্ষা, অর্থনীতি",
                education: "এমবিএ, বিএড",
                experience: "৭ বছর",
            },
            {
                _id: "5",
                name_en: "Kamal Hossain",
                name_bn: "কামাল হোসেন",
                photo_url: "https://i.ibb.co/0XJb5yT/teacher5.jpg",
                designation: "প্রধান শিক্ষক",
                department: "General",
                subjectList: "ইংরেজি, বাংলা",
                education: "এম.এ ইন ইংরেজি",
                experience: "১৫ বছর",
            },
            {
                _id: "6",
                name_en: "Shamima Akter",
                name_bn: "শামীমা আক্তার",
                photo_url: "https://i.ibb.co/6wYH0zT/teacher6.jpg",
                designation: "সহকারী শিক্ষক",
                department: "Humanities",
                subjectList: "ইতিহাস, ভূগোল",
                education: "এম.এ ইন ইতিহাস",
                experience: "৯ বছর",
            },
            {
                _id: "7",
                name_en: "Abdul Karim",
                name_bn: "আব্দুল করিম",
                photo_url: "https://i.ibb.co/7yX6q0y/teacher7.jpg",
                designation: "সহকারী শিক্ষক",
                department: "Science",
                subjectList: "গণিত, উচ্চতর গণিত",
                education: "এম.এসসি ইন গণিত",
                experience: "১১ বছর",
            },
            {
                _id: "8",
                name_en: "Rina Parvin",
                name_bn: "রিনা পারভীন",
                photo_url: "https://i.ibb.co/0fV0RcF/teacher8.jpg",
                designation: "সহকারী শিক্ষক",
                department: "Humanities",
                subjectList: "সমাজবিজ্ঞান, নাগরিকতা",
                education: "এম.এসএস ইন সমাজবিজ্ঞান",
                experience: "৬ বছর",
            },
        ];

        setTeachers(mockTeachers);
        setFilteredTeachers(mockTeachers);

        // In production, use the actual API call:
        /*
        fetch("http://localhost:3000/teachers")
            .then((res) => res.json())
            .then((data) => {
                setTeachers(data);
                setFilteredTeachers(data);
            });
        */
    }, []);

    // Filter teachers based on department and search term
    useEffect(() => {
        let result = teachers;

        if (activeDepartment !== "all") {
            result = result.filter(
                (teacher) =>
                    teacher.department?.toLowerCase() ===
                    activeDepartment.toLowerCase()
            );
        }

        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            result = result.filter(
                (teacher) =>
                    teacher.name_bn?.toLowerCase().includes(term) ||
                    teacher.name_en?.toLowerCase().includes(term) ||
                    teacher.subjectList?.toLowerCase().includes(term) ||
                    teacher.designation?.toLowerCase().includes(term)
            );
        }

        setFilteredTeachers(result);
    }, [activeDepartment, searchTerm, teachers]);

    const departmentMap = {
        all: "সকল বিভাগ",
        general: "সাধারণ বিভাগ",
        science: "বিজ্ঞান বিভাগ",
        business: "ব্যবসায় শিক্ষা",
        humanities: "মানবিক বিভাগ",
    };

    return (
        <section className="py-16 bg-gradient-to-b from-[#f8f9fa] to-[#eef9f0]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-16">
                    <SectionHeader
                        title={"আমাদের অভিজ্ঞ ফ্যাকাল্টি"}
                        subtitle={
                            "আমাদের রয়েছে অভিজ্ঞ ও সুদক্ষ ফ্যাকাল্টি সদস্য যারা শিক্ষার্থীদের জ্ঞানের আলোয় আলোকিত করছেন"
                        }
                    />
                </div>

                {/* Filter and Search Section */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="w-full md:w-1/2">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="শিক্ষকের নাম বা বিষয় লিখুন..."
                                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#249742] focus:border-transparent"
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                />
                                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>

                        <div className="w-full md:w-auto">
                            <div className="flex items-center gap-3">
                                <FaFilter className="text-[#249742]" />
                                <span className="font-medium">
                                    বিভাগ ফিল্টার:
                                </span>
                                <div className="flex flex-wrap gap-2">
                                    {Object.entries(departmentMap).map(
                                        ([key, value]) => (
                                            <button
                                                key={key}
                                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                                    activeDepartment === key
                                                        ? "bg-[#249742] text-white"
                                                        : "bg-gray-100 hover:bg-gray-200"
                                                }`}
                                                onClick={() =>
                                                    setActiveDepartment(key)
                                                }
                                            >
                                                {value}
                                            </button>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Statistics Banner */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    <div className="bg-gradient-to-r from-[#249742] to-[#1c6e36] rounded-xl p-6 text-white text-center">
                        <div className="text-3xl font-bold mb-2">
                            {teachers.length}+
                        </div>
                        <p>মোট শিক্ষক</p>
                    </div>
                    <div className="bg-gradient-to-r from-[#8E1C20] to-[#6d1518] rounded-xl p-6 text-white text-center">
                        <div className="text-3xl font-bold mb-2">১০+</div>
                        <p>বছরের গড় অভিজ্ঞতা</p>
                    </div>
                    <div className="bg-gradient-to-r from-[#249742] to-[#1c6e36] rounded-xl p-6 text-white text-center">
                        <div className="text-3xl font-bold mb-2">১০০%</div>
                        <p>এম.এড ডিগ্রিধারী</p>
                    </div>
                    <div className="bg-gradient-to-r from-[#8E1C20] to-[#6d1518] rounded-xl p-6 text-white text-center">
                        <div className="text-3xl font-bold mb-2">৯৫%</div>
                        <p>সন্তুষ্ট শিক্ষার্থী</p>
                    </div>
                </div>

                {/* Teacher Cards */}
                {filteredTeachers.length > 0 ? (
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredTeachers.map((teacher) => (
                            <div
                                key={teacher._id}
                                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                            >
                                {/* Department ribbon */}
                                <div
                                    className={`absolute top-4 right-0 px-4 py-1 text-white font-medium ${
                                        teacher.department === "General"
                                            ? "bg-[#249742]"
                                            : teacher.department === "Science"
                                            ? "bg-[#8E1C20]"
                                            : teacher.department === "Business"
                                            ? "bg-[#f59e0b]"
                                            : "bg-[#3b82f6]"
                                    }`}
                                >
                                    {teacher.department === "General"
                                        ? "সাধারণ"
                                        : teacher.department === "Science"
                                        ? "বিজ্ঞান"
                                        : teacher.department === "Business"
                                        ? "ব্যবসায়"
                                        : "মানবিক"}
                                </div>

                                <div className="p-6 flex flex-col items-center text-center">
                                    <div className="relative mb-6">
                                        <div className="bg-gradient-to-br from-[#249742] to-[#1c6e36] p-1 rounded-full inline-block">
                                            <img
                                                src={teacher.photo_url}
                                                alt={
                                                    teacher.name_bn ||
                                                    teacher.name_en
                                                }
                                                className="w-32 h-32 rounded-full object-cover border-4 border-white"
                                            />
                                        </div>
                                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md text-sm font-medium text-[#249742] border border-[#249742]/20">
                                            {teacher.experience} অভিজ্ঞতা
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <h4 className="text-xl font-bold text-gray-800 mb-1">
                                            {teacher.name_bn || teacher.name_en}
                                        </h4>
                                        <p className="text-[#249742] font-medium mb-2">
                                            {teacher.designation}
                                        </p>
                                        <div className="flex flex-wrap justify-center gap-2 mb-3">
                                            {teacher.subjectList
                                                .split(", ")
                                                .map((subject, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-3 py-1 text-xs bg-[#249742]/10 text-[#249742] rounded-full"
                                                    >
                                                        {subject}
                                                    </span>
                                                ))}
                                        </div>
                                    </div>

                                    <div className="w-full bg-gray-100 rounded-lg p-4 mb-4 text-left">
                                        <div className="flex items-start mb-3">
                                            <FaGraduationCap className="text-[#249742] mt-1 mr-2" />
                                            <span className="font-medium">
                                                শিক্ষাগত যোগ্যতা:
                                            </span>
                                        </div>
                                        <p className="text-gray-700 text-sm">
                                            {teacher.education}
                                        </p>
                                    </div>

                                    <Link
                                        to={`/teacher/${teacher._id}`}
                                        className="btn w-full bg-gradient-to-r from-[#249742] to-[#1c6e36] border-none text-white rounded-lg py-3 hover:from-[#1c6e36] hover:to-[#155a2b] transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        বিস্তারিত দেখুন
                                        <FaChalkboardTeacher />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                        <FaSearch className="text-5xl text-gray-300 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-700 mb-2">
                            কোন শিক্ষক পাওয়া যায়নি
                        </h3>
                        <p className="text-gray-600 mb-6">
                            আপনার অনুসন্ধানের সাথে মিল রেখে কোন শিক্ষক পাওয়া
                            যায়নি। অনুগ্রহ করে ভিন্ন শব্দে আবার চেষ্টা করুন।
                        </p>
                        <button
                            className="btn bg-[#249742] text-white hover:bg-[#1e7a36]"
                            onClick={() => {
                                setSearchTerm("");
                                setActiveDepartment("all");
                            }}
                        >
                            সব শিক্ষক দেখুন
                        </button>
                    </div>
                )}

                {/* Department Head Section */}
                <div className="mt-16 bg-gradient-to-r from-[#249742] to-[#1c6e36] rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-8 text-white">
                        <h2 className="text-2xl font-bold mb-6">
                            বিভাগীয় প্রধানগণ
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    name: "ড. মোহাম্মদ আলী",
                                    department: "বিজ্ঞান বিভাগ",
                                    education: "পিএইচডি ইন ফিজিক্স",
                                    experience: "১৮ বছর",
                                },
                                {
                                    name: "প্রফেসর সেলিনা আক্তার",
                                    department: "ব্যবসায় শিক্ষা",
                                    education: "পিএইচডি ইন বিজনেস স্টাডিজ",
                                    experience: "১৫ বছর",
                                },
                                {
                                    name: "ড. আব্দুল হক",
                                    department: "মানবিক বিভাগ",
                                    education: "পিএইচডি ইন হিস্ট্রি",
                                    experience: "২০ বছর",
                                },
                                {
                                    name: "প্রফেসর রেহানা পারভীন",
                                    department: "সাধারণ বিভাগ",
                                    education: "পিএইচডি ইন এডুকেশন",
                                    experience: "১৬ বছর",
                                },
                            ].map((head, index) => (
                                <div
                                    key={index}
                                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                                >
                                    <h3 className="text-xl font-bold mb-2">
                                        {head.name}
                                    </h3>
                                    <p className="mb-3 font-medium">
                                        {head.department}
                                    </p>
                                    <p className="text-sm opacity-80 mb-2">
                                        {head.education}
                                    </p>
                                    <p className="text-sm opacity-80">
                                        অভিজ্ঞতা: {head.experience}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Join Faculty Section */}
                <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        আমাদের শিক্ষক দলে যোগ দিন
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                        আপনি যদি শিক্ষাদানে আগ্রহী এবং যোগ্য হন, তাহলে আমাদের
                        শিক্ষক দলে যোগ দেওয়ার জন্য আবেদন করুন। আমরা প্রতিভাবান
                        এবং নিবেদিতপ্রাণ শিক্ষকদের জন্য সবসময় উন্মুক্ত।
                    </p>
                    <button className="btn bg-gradient-to-r from-[#249742] to-[#1c6e36] text-white px-8 py-3 rounded-full font-semibold hover:from-[#1c6e36] hover:to-[#155a2b] transition-all">
                        আবেদন করুন
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Faculty;
