import { useEffect, useState } from "react";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NoticeBoard = () => {
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/notices?limit=5")
            .then((res) => res.json())
            .then((data) => {
                setNotices(data);
            })
            .catch((error) => {
                console.error("Error fetching notices:", error);
            });
    }, []);
    return (
        <section className="py-16 px-6 md:px-12 lg:px-20">
            <SectionHeader
                title="নোটিশ বোর্ড"
                subtitle="শ্রীরায়েরচর এস.আই.এম. উচ্চ বিদ্যালয়ের সর্বশেষ ঘোষণা ও গুরুত্বপূর্ণ তারিখগুলোর আপডেট পেতে সাথে থাকুন।"
            />

            <div className="w-[95%] md:w-[80%] lg:w-[70%] mx-auto">
                <div className="overflow-x-auto mt-8 shadow-lg rounded-2xl border border-[#C6F6D5]">
                    <table className="min-w-full text-sm text-left text-gray-700 bg-white">
                        <thead className="bg-[#249742] text-white text-sm uppercase tracking-wide">
                            <tr>
                                <th className="px-6 py-4">ক্রমিক</th>
                                <th className="px-6 py-4">তারিখ</th>
                                <th className="px-6 py-4">শিরোনাম</th>
                                <th className="px-6 py-4">বর্ণনা</th>
                                <th className="px-6 py-4 text-center">
                                    অ্যাকশন
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {notices.map((notice, index) => (
                                <tr
                                    key={notice?._id}
                                    className={`border-b border-gray-200 hover:bg-[#f7fcf9] transition-colors duration-200 ${
                                        index % 2 === 0
                                            ? "bg-[#F0FFF4]"
                                            : "bg-white"
                                    }`}
                                >
                                    <td className="px-6 py-4 font-medium text-[#8E1C20]">
                                        #{index + 1}
                                    </td>
                                    <td className="px-6 py-4">{notice.date}</td>
                                    <td className="px-6 py-4 font-semibold text-[#249742]">
                                        {notice?.title}
                                    </td>
                                    <td className="px-6 py-4 line-clamp-2">
                                        {notice?.shortDesc}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <a
                                            href={notice?.noticeLink}
                                            target="_blank"
                                            className="btn btn-sm bg-[#249742] hover:bg-[#1f7d39] text-white"
                                        >
                                            বিস্তারিত
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="text-center mt-10">
                <Link
                    to={"/notice"}
                    className="btn bg-[#249742] hover:bg-[#1e7a37] text-white"
                >
                    সকল নোটিশ দেখুন
                    <FiChevronRight className="ml-2" />
                </Link>
            </div>
        </section>
    );
};

export default NoticeBoard;
