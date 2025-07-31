import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const OurTeachers = () => {
    const [teachersData, setTeachersData] = useState([]);

    useEffect(() => {
        // Mock data for demonstration
        const mockTeachers = [
            {
                _id: "1",
                name_en: "Zakir Hossain",
                name_bn: "জাকির হোসেন",
                photoUrl: "https://i.ibb.co/Fk2sWQyS/cst-09.jpg",
                subjectList: "আইসিটি, ইংলিশ",
                designation: "সহকারী শিক্ষক",
                department: "সাধারণ বিভাগ",
            },
            {
                _id: "2",
                name_en: "Fatema Begum",
                name_bn: "ফাতেমা বেগম",
                photoUrl:
                    "https://i.ibb.co/60fzLj9m/photo-1544717305-2782549b5136.jpg",
                subjectList: "গণিত, পদার্থবিজ্ঞান",
                designation: "সহকারী শিক্ষক",
                department: "বিজ্ঞান বিভাগ",
            },
            {
                _id: "3",
                name_en: "Rahim Uddin",
                name_bn: "রহিম উদ্দিন",
                photoUrl:
                    "https://i.ibb.co/hRdpntqQ/photo-1557862921-37829c790f19.jpg",
                subjectList: "রসায়ন, জীববিজ্ঞান",
                designation: "সহকারী শিক্ষক",
                department: "বিজ্ঞান বিভাগ",
            },
            {
                _id: "4",
                name_en: "Nusrat Jahan",
                name_bn: "নুসরাত জাহান",
                photoUrl:
                    "https://i.ibb.co/9Hyh3Wfs/premium-photo-1690479510584-88e88bb4a44b.jpg",
                subjectList: "ব্যবসায় শিক্ষা, অর্থনীতি",
                designation: "সহকারী শিক্ষক",
                department: "ব্যবসায় শিক্ষা",
            },
        ];
        setTeachersData(mockTeachers);

        // In production, use the actual API call:
        /*
        fetch("http://localhost:3000/teachers?limit=4")
            .then((res) => res.json())
            .then((data) => {
                setTeachersData(data);
            })
            .catch((error) =>
                console.error("Error fetching teachers data:", error)
            );
        */
    }, []);

    return (
        <section className="relative py-16 px-4 md:px-8 lg:px-16 bg-[#eef9f0] overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-24 h-24 rounded-full opacity-10 bg-[#249742] animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-16 h-16 rounded-full opacity-10 bg-[#249742] animate-pulse delay-300"></div>
            <div className="absolute top-40 right-40 w-16 h-16 rounded-full opacity-10 bg-[#249742] animate-pulse delay-300"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <SectionHeader
                    title={"আমাদের সুদক্ষ শিক্ষকবৃন্দ"}
                    subtitle={
                        "আমাদের রয়েছে একদল অভিজ্ঞ শিক্ষক, যারা শুধু পাঠ্যশিক্ষাই নয় — আদব-কায়দা ও বাস্তবজীবনের মূল্যবান শিক্ষা দেন।"
                    }
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {teachersData.map((teacher, index) => (
                        <motion.div
                            key={teacher?._id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={teacher?.photoUrl}
                                    alt={teacher?.name_bn}
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src =
                                            "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-4 left-4">
                                    <div className="bg-[#249742] text-white px-3 py-1 rounded-full text-sm font-medium">
                                        {teacher?.designation}
                                    </div>
                                </div>
                            </div>

                            <div className="p-5">
                                <div className="flex flex-col items-center -mt-14 mb-4">
                                    <div className="bg-white rounded-full p-1 shadow-lg">
                                        <img
                                            src={teacher?.photoUrl}
                                            alt={teacher?.name_bn}
                                            className="w-20 h-20 rounded-full object-cover border-4 border-white"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src =
                                                    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                                        {teacher?.name_bn}
                                    </h3>
                                    <p className="text-gray-600 mb-2">
                                        {teacher?.name_en}
                                    </p>

                                    <div className="mb-3">
                                        <span className="inline-block bg-[#249742]/10 text-[#249742] text-sm px-3 py-1 rounded-full">
                                            {teacher?.subjectList}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-center text-sm text-gray-600 mb-4">
                                        <span className="bg-gray-100 px-2 py-1 rounded">
                                            {teacher?.department}
                                        </span>
                                    </div>

                                    <Link
                                        to={`/teachers/${teacher?._id}`}
                                        className="inline-flex items-center justify-center gap-1 text-[#249742] font-medium hover:text-[#1c6e36] transition-colors group-hover:underline"
                                    >
                                        বিস্তারিত দেখুন
                                        <BsArrowRight className="transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <Link
                        to="/faculty"
                        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#249742] to-[#1c6e36] hover:from-[#1c6e36] hover:to-[#155a2b] text-white font-semibold px-6 py-3 rounded-full shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-300"
                    >
                        সকল শিক্ষকদের দেখুন
                        <BsArrowRight className="text-xl transition-transform group-hover:translate-x-1" />
                    </Link>
                </motion.div>

                {/* Statistics Section */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                        <div className="text-4xl font-bold text-[#249742] mb-2">
                            ১৫+
                        </div>
                        <p className="text-gray-700">বছরের অভিজ্ঞতা</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                        <div className="text-4xl font-bold text-[#249742] mb-2">
                            ৯৫%
                        </div>
                        <p className="text-gray-700">সন্তুষ্ট শিক্ষার্থী</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                        <div className="text-4xl font-bold text-[#249742] mb-2">
                            ৫০+
                        </div>
                        <p className="text-gray-700">প্রশিক্ষণ কর্মশালা</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                        <div className="text-4xl font-bold text-[#249742] mb-2">
                            ১০০%
                        </div>
                        <p className="text-gray-700">এম.এড ডিগ্রিধারী</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTeachers;
