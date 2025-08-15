import { useEffect, useState } from "react";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import {
    FiChevronRight,
    FiCalendar,
    FiFileText,
    FiDownload,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const NoticeBoard = () => {
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        // Mock data for demonstration
        const mockNotices = [
            {
                _id: "1",
                date: "২০২৩-১০-১৫",
                title: "মিড টার্ম পরীক্ষার রুটিন প্রকাশ",
                shortDesc:
                    "নবম ও দশম শ্রেণির মিড টার্ম পরীক্ষার রুটিন প্রকাশ করা হলো। সকল শিক্ষার্থীদের অবগতির জন্য অনুরোধ করা হচ্ছে।",
                noticeLink: "#",
            },
            {
                _id: "2",
                date: "২০২৩-১০-১০",
                title: "বার্ষিক ক্রীড়া প্রতিযোগিতা",
                shortDesc:
                    "আগামী মাসে বার্ষিক ক্রীড়া প্রতিযোগিতা অনুষ্ঠিত হবে। আগ্রহী শিক্ষার্থীদের নাম নিবন্ধনের জন্য অনুরোধ করা হচ্ছে।",
                noticeLink: "#",
            },
            {
                _id: "3",
                date: "২০২৩-১০-০৫",
                title: "শিক্ষক প্রশিক্ষণ কর্মশালা",
                shortDesc:
                    "আগামী সপ্তাহে শিক্ষকদের জন্য একটি প্রশিক্ষণ কর্মশালার আয়োজন করা হবে। সকল শিক্ষকদের উপস্থিতি আবশ্যক।",
                noticeLink: "#",
            },
            {
                _id: "4",
                date: "২০২৩-১০-০১",
                title: "ছুটির ঘোষণা",
                shortDesc:
                    "আগামী সপ্তাহে প্রতিষ্ঠানের সকল শ্রেণির কার্যক্রম বন্ধ থাকবে। সকলকে অবগতির জন্য অনুরোধ করা হচ্ছে।",
                noticeLink: "#",
            },
            {
                _id: "5",
                date: "২০২৩-০৯-২৮",
                title: "বৃত্তি পরীক্ষার ফলাফল",
                shortDesc:
                    "বৃত্তি পরীক্ষার ফলাফল প্রকাশ করা হলো। ফলাফল অফিস থেকে সংগ্রহ করা যাবে।",
                noticeLink: "#",
            },
        ];
        setNotices(mockNotices);

        // In production, use the actual API call:
        /*
        fetch("http://localhost:3000/notices?limit=5")
            .then((res) => res.json())
            .then((data) => {
                setNotices(data);
            })
            .catch((error) => {
                console.error("Error fetching notices:", error);
            });
        */
    }, []);

    return (
        <section className="relative py-16 px-4 md:px-8 lg:px-16 ">
            {/* Decorative background elements */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="absolute top-10 left-1/4 w-24 h-24 rounded-full bg-[#249742] animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-[#249742] animate-pulse delay-300"></div>
                <div className="absolute bottom-20 left-1/3 w-20 h-20 rounded-full bg-[#8E1C20] animate-pulse delay-700"></div>
                <div className="absolute bottom-1/4 right-10 w-12 h-12 rounded-full bg-[#249742] animate-pulse delay-1000"></div>
                <div className="absolute bottom-1/2 left-10 w-16 h-16 rounded-full bg-[#249742] animate-pulse delay-1000"></div>
            </div>
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="নোটিশ বোর্ড"
                    subtitle="শ্রীরায়েরচর এস.আই.এম. উচ্চ বিদ্যালয়ের সর্বশেষ ঘোষণা ও গুরুত্বপূর্ণ তারিখগুলোর আপডেট পেতে সাথে থাকুন।"
                />

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Notice Board Card */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                        <div className="bg-[#249742] p-4 text-white">
                            <h3 className="text-xl font-bold flex items-center">
                                <FiFileText className="mr-2" />
                                সর্বশেষ নোটিশ
                            </h3>
                            <p className="text-sm mt-1 opacity-90">
                                সকল গুরুত্বপূর্ণ ঘোষণা এক নজরে
                            </p>
                        </div>
                        <div className="p-1">
                            {notices.slice(0, 4).map((notice, index) => (
                                <div
                                    key={notice?._id}
                                    className="p-4 border-b border-gray-100 last:border-b-0 hover:bg-[#f9fcfb] transition-colors duration-200"
                                >
                                    <div className="flex">
                                        <div className="flex-shrink-0 mr-4">
                                            <div className="bg-[#249742]/10 w-10 h-10 rounded-full flex items-center justify-center">
                                                <span className="text-[#249742] font-bold">
                                                    {index + 1}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex items-center text-sm text-gray-500 mb-1">
                                                <FiCalendar className="mr-1" />
                                                {notice.date}
                                            </div>
                                            <h4 className="font-semibold text-gray-800 mb-1 line-clamp-1">
                                                {notice?.title}
                                            </h4>
                                            <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                                                {notice?.shortDesc}
                                            </p>
                                            <a
                                                href={notice?.noticeLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-[#249742] font-medium text-sm hover:underline"
                                            >
                                                বিস্তারিত পড়ুন
                                                <FiChevronRight className="ml-1" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Upcoming Events Card */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                        <div className="bg-[#8E1C20] p-4 text-white">
                            <h3 className="text-xl font-bold flex items-center">
                                <FiCalendar className="mr-2" />
                                আগামী কর্মসূচি
                            </h3>
                            <p className="text-sm mt-1 opacity-90">
                                গুরুত্বপূর্ণ তারিখ ও ইভেন্টসমূহ
                            </p>
                        </div>
                        <div className="p-1">
                            {[
                                {
                                    date: "২০২৩-১১-১০",
                                    title: "বার্ষিক পুরস্কার বিতরণী",
                                    desc: "বিদ্যালয়ের বার্ষিক পুরস্কার বিতরণী অনুষ্ঠান",
                                },
                                {
                                    date: "২০২৩-১১-২০",
                                    title: "মূল্যায়ন পরীক্ষা",
                                    desc: "ষষ্ঠ থেকে নবম শ্রেণির মূল্যায়ন পরীক্ষা",
                                },
                                {
                                    date: "২০২৩-১২-০৫",
                                    title: "শীতকালীন ছুটি",
                                    desc: "শীতকালীন ছুটি শুরু",
                                },
                                {
                                    date: "২০২৩-১২-২৫",
                                    title: "পুনরায় ক্লাস শুরু",
                                    desc: "শীতকালীন ছুটির পর পুনরায় ক্লাস শুরু",
                                },
                            ].map((event, index) => (
                                <div
                                    key={index}
                                    className="p-4 border-b border-gray-100 last:border-b-0 hover:bg-[#f9fcfb] transition-colors duration-200"
                                >
                                    <div className="flex">
                                        <div className="flex-shrink-0 mr-4">
                                            <div className="bg-[#8E1C20]/10 w-10 h-10 rounded-full flex items-center justify-center">
                                                <FiCalendar className="text-[#8E1C20]" />
                                            </div>
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex items-center text-sm text-gray-500 mb-1">
                                                <FiCalendar className="mr-1" />
                                                {event.date}
                                            </div>
                                            <h4 className="font-semibold text-gray-800 mb-1">
                                                {event.title}
                                            </h4>
                                            <p className="text-gray-600 text-sm">
                                                {event.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Downloads Card */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                        <div className="bg-[#249742] p-4 text-white">
                            <h3 className="text-xl font-bold flex items-center">
                                <FiDownload className="mr-2" />
                                ডাউনলোড
                            </h3>
                            <p className="text-sm mt-1 opacity-90">
                                গুরুত্বপূর্ণ ফরম ও ফাইলসমূহ
                            </p>
                        </div>
                        <div className="p-1">
                            {[
                                {
                                    title: "ভর্তি ফরম ২০২৪",
                                    type: "PDF",
                                    size: "1.2 MB",
                                },
                                {
                                    title: "শিক্ষক নিয়োগ ফরম",
                                    type: "DOC",
                                    size: "0.8 MB",
                                },
                                {
                                    title: "প্রবেশপত্র ফরম",
                                    type: "PDF",
                                    size: "0.5 MB",
                                },
                                {
                                    title: "বার্ষিক পরীক্ষার রুটিন",
                                    type: "PDF",
                                    size: "0.9 MB",
                                },
                            ].map((file, index) => (
                                <div
                                    key={index}
                                    className="p-4 border-b border-gray-100 last:border-b-0 hover:bg-[#f9fcfb] transition-colors duration-200"
                                >
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 mr-4">
                                            <div className="bg-[#249742]/10 w-10 h-10 rounded-full flex items-center justify-center">
                                                <FiFileText className="text-[#249742]" />
                                            </div>
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="font-semibold text-gray-800 mb-1">
                                                {file.title}
                                            </h4>
                                            <div className="flex text-sm text-gray-500">
                                                <span className="mr-3">
                                                    {file.type}
                                                </span>
                                                <span>{file.size}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="bg-[#249742] hover:bg-[#1e7a37] text-white p-2 rounded-full">
                                                <FiDownload />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <Link
                        to={"/notice"}
                        className="btn btn-lg bg-gradient-to-r from-[#249742] to-[#1c6e36] hover:from-[#1c6e36] hover:to-[#155a2b] text-white font-semibold rounded-3xl cursor-pointer z-50"
                    >
                        সকল নোটিশ দেখুন
                        <FiChevronRight className="text-xl ml-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NoticeBoard;
