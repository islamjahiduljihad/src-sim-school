import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement
);

const StudentStatistics = () => {
    const [studentStat, setStudentStat] = useState({});

    console.log(studentStat);

    useEffect(() => {
        fetch("http://localhost:3000/statistics/student")
            .then((res) => res.json())
            .then((data) => setStudentStat(data));
    }, []);
    // Demo Student Data
    const totalStudents = 500;
    const boys = 280;
    const girls = 220;

    const classData = {
        "ক্লাস ০৬": 90,
        "ক্লাস ০৭": 95,
        "ক্লাস ০৮": 85,
        "ক্লাস ০৯": 120,
        "ক্লাস ১০": 110,
    };

    const departmentData = {
        Science: 80,
        "Business Studies": 70,
        Humanities: 80,
    };

    // Gender Pie Chart Data
    const genderData = {
        labels: ["বালক", "বালিকা"],
        datasets: [
            {
                label: "শিক্ষার্থী",
                data: [
                    studentStat?.data?.totalMaleFemaleCount.পুরুষ,
                    studentStat?.data?.totalMaleFemaleCount.মহিলা,
                ],
                backgroundColor: ["#249742", "#8E1C20"],
                hoverOffset: 30,
                borderWidth: 0,
            },
        ],
    };

    // Class-wise Bar Chart Data
    const barData = {
        labels: Object.keys(classData),
        datasets: [
            {
                label: "শিক্ষার্থীর সংখ্যা",
                data: Object.values(classData),
                backgroundColor: "#249742",
                borderRadius: 6,
                borderWidth: 0,
            },
        ],
    };

    // Department-wise Pie Chart Data
    const departmentPieData = {
        labels: Object.keys(departmentData),
        datasets: [
            {
                label: "ডিপার্টমেন্ট",
                data: Object.values(departmentData),
                backgroundColor: ["#249742", "#8E1C20", "#f59e0b"],
                hoverOffset: 30,
                borderWidth: 0,
            },
        ],
    };

    return (
        <section className="py-16 px-4 md:px-8 lg:px-16 relative">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-1/4 w-24 h-24 rounded-full bg-[#249742] animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-[#249742] animate-pulse delay-300"></div>
                <div className="absolute bottom-20 left-1/3 w-20 h-20 rounded-full bg-[#8E1C20] animate-pulse delay-700"></div>
                <div className="absolute bottom-1/4 right-10 w-12 h-12 rounded-full bg-[#249742] animate-pulse delay-1000"></div>
                <div className="absolute bottom-1/2 left-10 w-16 h-16 rounded-full bg-[#249742] animate-pulse delay-1000"></div>
            </div>
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title={"শিক্ষার্থী পরিসংখ্যান"}
                    subtitle={
                        "আমাদের শিক্ষার্থীদের লিঙ্গ ও শ্রেণি ভিত্তিক সার্বিক বিবরণ। আমাদের স্কুল বৈচিত্র্য এবং সমতা ভিত্তিক সমগ্র উন্নয়নকে মূল্য দেয়।"
                    }
                />

                {/* Summary Boxes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-16">
                    <motion.div
                        className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center border-b-4 border-[#249742]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-[#249742]/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                            <span className="text-3xl font-bold text-[#249742]">
                                {
                                    studentStat?.data?.studentsCount
                                        ?.totalStudentCount
                                }
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                            মোট শিক্ষার্থী
                        </h3>
                        <p className="text-gray-600">
                            আমাদের বিদ্যালয়ের সকল শ্রেণির শিক্ষার্থীর সংখ্যা
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center border-b-4 border-[#249742]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-[#249742]/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                            <span className="text-3xl font-bold text-[#249742]">
                                {studentStat?.data?.totalMaleFemaleCount.পুরুষ}
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                            বালক শিক্ষার্থী
                        </h3>
                        <p className="text-gray-600">
                            ষষ্ঠ থেকে দশম শ্রেণির বালক শিক্ষার্থীর সংখ্যা
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center border-b-4 border-[#8E1C20]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-[#8E1C20]/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                            <span className="text-3xl font-bold text-[#8E1C20]">
                                {studentStat?.data?.totalMaleFemaleCount.মহিলা}
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                            বালিকা শিক্ষার্থী
                        </h3>
                        <p className="text-gray-600">
                            ষষ্ঠ থেকে দশম শ্রেণির বালিকা শিক্ষার্থীর সংখ্যা
                        </p>
                    </motion.div>
                </div>

                {/* Chart Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Gender Pie Chart */}
                    <motion.div
                        className="bg-white rounded-2xl shadow-xl p-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center mb-6">
                            <div className="bg-[#249742]/10 rounded-full p-2 mr-4">
                                <div className="w-3 h-3 rounded-full bg-[#249742]"></div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">
                                লিঙ্গের অনুপাত
                            </h3>
                        </div>
                        <div className="h-[300px] flex items-center justify-center">
                            <Pie
                                data={genderData}
                                options={{
                                    plugins: {
                                        legend: {
                                            position: "bottom",
                                            labels: {
                                                font: {
                                                    size: 14,
                                                    family: "'Hind Siliguri', sans-serif",
                                                },
                                                padding: 20,
                                            },
                                        },
                                    },
                                }}
                            />
                        </div>
                        <div className="mt-6 flex justify-center gap-4">
                            <div className="flex items-center">
                                <div className="w-4 h-4 rounded-full bg-[#249742] mr-2"></div>
                                <span>
                                    বালক:{" "}
                                    {
                                        studentStat?.data?.totalMaleFemaleCount
                                            .পুরুষ
                                    }{" "}
                                    (
                                    {(
                                        (studentStat?.data?.totalMaleFemaleCount
                                            .পুরুষ /
                                            studentStat?.data?.studentsCount
                                                ?.totalStudentCount) *
                                        100
                                    ).toFixed(1)}
                                    %)
                                </span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-4 h-4 rounded-full bg-[#8E1C20] mr-2"></div>
                                <span>
                                    বালিকা:{" "}
                                    {
                                        studentStat?.data?.totalMaleFemaleCount
                                            .মহিলা
                                    }{" "}
                                    (
                                    {(
                                        (studentStat?.data?.totalMaleFemaleCount
                                            .মহিলা /
                                            studentStat?.data?.studentsCount
                                                ?.totalStudentCount) *
                                        100
                                    ).toFixed(1)}
                                    %)
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Class Distribution */}
                    <motion.div
                        className="bg-white rounded-2xl shadow-xl p-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center mb-6">
                            <div className="bg-[#249742]/10 rounded-full p-2 mr-4">
                                <div className="w-3 h-3 rounded-full bg-[#249742]"></div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">
                                ক্লাস ভেদে শিক্ষার্থী
                            </h3>
                        </div>
                        <div className="h-[300px]">
                            <Bar
                                data={barData}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    plugins: {
                                        legend: { display: false },
                                    },
                                    scales: {
                                        y: {
                                            beginAtZero: true,
                                            ticks: { stepSize: 20 },
                                            grid: {
                                                color: "rgba(0, 0, 0, 0.05)",
                                            },
                                        },
                                        x: {
                                            grid: {
                                                display: false,
                                            },
                                        },
                                    },
                                }}
                            />
                        </div>
                        <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-3">
                            {Object.entries(classData).map(
                                ([className, count], index) => (
                                    <div
                                        key={index}
                                        className="bg-[#249742]/5 p-2 rounded text-center"
                                    >
                                        <div className="font-medium">
                                            {className}
                                        </div>
                                        <div className="font-bold text-[#249742]">
                                            {count}
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </motion.div>

                    {/* Department Distribution */}
                    <motion.div
                        className="bg-white rounded-2xl shadow-xl p-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center mb-6">
                            <div className="bg-[#249742]/10 rounded-full p-2 mr-4">
                                <div className="w-3 h-3 rounded-full bg-[#249742]"></div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">
                                বিভাগ ভিত্তিক শিক্ষার্থী
                            </h3>
                        </div>
                        <div className="h-[300px] flex items-center justify-center">
                            <Pie
                                data={departmentPieData}
                                options={{
                                    plugins: {
                                        legend: {
                                            position: "bottom",
                                            labels: {
                                                font: {
                                                    size: 14,
                                                    family: "'Hind Siliguri', sans-serif",
                                                },
                                                padding: 20,
                                            },
                                        },
                                    },
                                }}
                            />
                        </div>
                        <div className="mt-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                <div className="bg-[#249742]/5 p-3 rounded text-center">
                                    <div className="font-medium">বিজ্ঞান</div>
                                    <div className="font-bold text-[#249742] text-xl">
                                        {departmentData.Science}
                                    </div>
                                    <div className="text-sm">
                                        {(
                                            (departmentData.Science / 230) *
                                            100
                                        ).toFixed(1)}
                                        %
                                    </div>
                                </div>
                                <div className="bg-[#8E1C20]/5 p-3 rounded text-center">
                                    <div className="font-medium">
                                        ব্যবসায় শিক্ষা
                                    </div>
                                    <div className="font-bold text-[#8E1C20] text-xl">
                                        {departmentData["Business Studies"]}
                                    </div>
                                    <div className="text-sm">
                                        {(
                                            (departmentData[
                                                "Business Studies"
                                            ] /
                                                230) *
                                            100
                                        ).toFixed(1)}
                                        %
                                    </div>
                                </div>
                                <div className="bg-[#f59e0b]/5 p-3 rounded text-center">
                                    <div className="font-medium">মানবিক</div>
                                    <div className="font-bold text-[#f59e0b] text-xl">
                                        {departmentData.Humanities}
                                    </div>
                                    <div className="text-sm">
                                        {(
                                            (departmentData.Humanities / 230) *
                                            100
                                        ).toFixed(1)}
                                        %
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Additional Statistics */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl shadow-xl p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-6">
                            শিক্ষার্থী বৃদ্ধির হার
                        </h3>
                        <div className="relative h-64">
                            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#249742]/10 to-transparent rounded-lg"></div>
                            <div className="absolute bottom-0 left-0 w-full flex items-end justify-around h-48 px-6">
                                {[40, 65, 80, 95, 120].map((height, index) => (
                                    <motion.div
                                        key={index}
                                        className="w-10 bg-[#249742] rounded-t-lg mx-1"
                                        style={{ height: `${height}px` }}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${height}px` }}
                                        transition={{
                                            duration: 1,
                                            delay: index * 0.2,
                                        }}
                                        viewport={{ once: true }}
                                    ></motion.div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-around mt-4">
                            {["2019", "2020", "2021", "2022", "2023"].map(
                                (year, index) => (
                                    <div key={index} className="text-center">
                                        <div className="font-medium">
                                            {year}
                                        </div>
                                        <div className="text-[#249742] font-bold">
                                            {[400, 425, 450, 480, 500][index]}
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-6">
                            শিক্ষার্থীদের সাফল্যের হার
                        </h3>
                        <div className="space-y-6">
                            {[
                                {
                                    class: "ক্লাস ১০",
                                    passRate: 98,
                                    distinction: 45,
                                },
                                {
                                    class: "ক্লাস ৯",
                                    passRate: 96,
                                    distinction: 42,
                                },
                                {
                                    class: "ক্লাস ৮",
                                    passRate: 95,
                                    distinction: 40,
                                },
                                {
                                    class: "ক্লাস ৭",
                                    passRate: 97,
                                    distinction: 48,
                                },
                                {
                                    class: "ক্লাস ৬",
                                    passRate: 99,
                                    distinction: 50,
                                },
                            ].map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-20 font-medium">
                                        {item.class}
                                    </div>
                                    <div className="flex-1 ml-4">
                                        <div className="flex justify-between mb-1">
                                            <span className="text-sm">
                                                পাসের হার: {item.passRate}%
                                            </span>
                                            <span className="text-sm">
                                                এ+ প্রাপ্ত: {item.distinction}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <motion.div
                                                className="bg-[#249742] h-2.5 rounded-full"
                                                style={{
                                                    width: `${item.passRate}%`,
                                                }}
                                                initial={{ width: 0 }}
                                                whileInView={{
                                                    width: `${item.passRate}%`,
                                                }}
                                                transition={{
                                                    duration: 1,
                                                    delay: index * 0.1,
                                                }}
                                                viewport={{ once: true }}
                                            ></motion.div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StudentStatistics;
