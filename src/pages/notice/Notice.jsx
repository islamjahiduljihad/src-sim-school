import { useEffect, useState } from "react";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import {
    FiCalendar,
    FiFileText,
    FiDownload,
    FiChevronRight,
    FiExternalLink,
} from "react-icons/fi";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Notice = () => {
    const [notices, setNotices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [events, setEvents] = useState([]);
    const [downloads, setDownloads] = useState([]);

    useEffect(() => {
        // Fetch notices from API
        const fetchNotices = async () => {
            try {
                setLoading(true);
                const response = await fetch("http://localhost:3000/notices");

                if (!response.ok) {
                    throw new Error("Failed to fetch notices");
                }

                const data = await response.json();
                setNotices(
                    data.filter((notice) => notice?.category === "notice")
                );
                setEvents(
                    data.filter((notice) => notice?.category === "event")
                );
                setDownloads(
                    data.filter((notice) => notice?.category === "download")
                );
                setError(null);
            } catch (err) {
                console.error("Error fetching notices:", err);
                setError(
                    "নোটিশ লোড করতে সমস্যা হয়েছে। দয়া করে পরে আবার চেষ্টা করুন"
                );
            } finally {
                setLoading(false);
            }
        };

        fetchNotices();
    }, []);

    return (
        <div className="relative min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-10 z-0">
                <div className="absolute top-10 left-1/4 w-24 h-24 rounded-full bg-[#249742] animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-[#249742] animate-pulse delay-300"></div>
                <div className="absolute bottom-20 left-1/3 w-20 h-20 rounded-full bg-[#8E1C20] animate-pulse delay-700"></div>
                <div className="absolute bottom-1/4 right-10 w-12 h-12 rounded-full bg-[#249742] animate-pulse delay-1000"></div>
                <div className="absolute bottom-1/2 left-10 w-16 h-16 rounded-full bg-[#249742] animate-pulse delay-1000"></div>
            </div>

            <Helmet>
                <title>নোটিশ বোর্ড | এস এস আই এম</title>
                <meta
                    name="description"
                    content="এস এস আই এম এর সকল প্রকার নোটিশ, ইভেন্ট এবং ডাউনলোড দেখুন"
                />
            </Helmet>

            <div className="max-w-7xl mx-auto relative z-10">
                <SectionHeader
                    title={"নোটিশ বোর্ড"}
                    subtitle={
                        "এখানে এস এস আই এম এর সকল নোটিশ, ইভেন্ট এবং ডাউনলোড পাওয়া যাবে"
                    }
                />

                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#249742]"></div>
                        <p className="ml-4 text-gray-600 text-lg">
                            নোটিশ লোড হচ্ছে...
                        </p>
                    </div>
                ) : error ? (
                    <div className="max-w-2xl mx-auto mt-8 bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                        <div className="text-red-700 font-bold text-lg">
                            {error}
                        </div>
                        <button
                            onClick={() => window.location.reload()}
                            className="mt-4 bg-[#8E1C20] text-white px-6 py-2 rounded-full hover:bg-[#6c1518] transition-colors"
                        >
                            আবার চেষ্টা করুন
                        </button>
                    </div>
                ) : (
                    <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Notice Section */}
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                            <div className="bg-gradient-to-r from-[#249742] to-[#1c6e36] p-5 text-white">
                                <div className="flex items-center">
                                    <FiFileText className="text-2xl mr-3" />
                                    <h3 className="text-xl font-bold">
                                        সর্বশেষ নোটিশ
                                    </h3>
                                </div>
                                <p className="text-sm mt-1 opacity-90">
                                    সকল গুরুত্বপূর্ণ ঘোষণা এক নজরে
                                </p>
                            </div>
                            <div className="divide-y divide-gray-100">
                                {notices.map((notice, index) => (
                                    <div
                                        key={notice.id}
                                        className="p-5 hover:bg-[#f9fcfb] transition-colors duration-200"
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
                                                    <FiCalendar className="mr-2" />
                                                    {notice.date}
                                                </div>
                                                <h4 className="font-semibold text-gray-800 mb-1">
                                                    {notice.title}
                                                </h4>
                                                <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                                                    {notice.shortDesc ||
                                                        "এই নোটিশ সম্পর্কে বিস্তারিত জানতে ডাউনলোড করুন"}
                                                </p>
                                                {notice.noticeLink ? (
                                                    <a
                                                        href={notice.noticeLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center text-[#249742] font-medium text-sm hover:underline"
                                                    >
                                                        বিস্তারিত পড়ুন
                                                        <FiChevronRight className="ml-1" />
                                                    </a>
                                                ) : (
                                                    <span className="text-gray-400 text-sm italic">
                                                        লিংক নেই
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Events Section */}
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                            <div className="bg-gradient-to-r from-[#8E1C20] to-[#6c1518] p-5 text-white">
                                <div className="flex items-center">
                                    <FiCalendar className="text-2xl mr-3" />
                                    <h3 className="text-xl font-bold">
                                        আগামী কর্মসূচি
                                    </h3>
                                </div>
                                <p className="text-sm mt-1 opacity-90">
                                    গুরুত্বপূর্ণ তারিখ ও ইভেন্টসমূহ
                                </p>
                            </div>
                            <div className="divide-y divide-gray-100">
                                {events.map((event) => (
                                    <div
                                        key={event.id}
                                        className="p-5 hover:bg-[#fdf8f8] transition-colors duration-200"
                                    >
                                        <div className="flex">
                                            <div className="flex-shrink-0 mr-4">
                                                <div className="bg-[#8E1C20]/10 w-10 h-10 rounded-full flex items-center justify-center">
                                                    <FiCalendar className="text-[#8E1C20]" />
                                                </div>
                                            </div>
                                            <div className="flex-grow">
                                                <div className="flex items-center text-sm text-gray-500 mb-1">
                                                    <FiCalendar className="mr-2" />
                                                    {event.date}
                                                </div>
                                                <h4 className="font-semibold text-gray-800 mb-1">
                                                    {event.title}
                                                </h4>
                                                <p className="text-gray-600 text-sm">
                                                    {event.shortDesc}
                                                </p>
                                                <a
                                                    href={event.noticeLink}
                                                    className="mt-2 text-[#8E1C20] hover:underline"
                                                >
                                                    বিস্তারিত পরুন
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Downloads Section */}
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                            <div className="bg-gradient-to-r from-[#249742] to-[#1c6e36] p-5 text-white">
                                <div className="flex items-center">
                                    <FiDownload className="text-2xl mr-3" />
                                    <h3 className="text-xl font-bold">
                                        ডাউনলোড
                                    </h3>
                                </div>
                                <p className="text-sm mt-1 opacity-90">
                                    গুরুত্বপূর্ণ ফরম ও ফাইলসমূহ
                                </p>
                            </div>
                            <div className="divide-y divide-gray-100">
                                {downloads.map((file) => (
                                    <div
                                        key={file.id}
                                        className="p-5 hover:bg-[#f9fcfb] transition-colors duration-200"
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
                                                <p>{file?.shortDesc}</p>
                                            </div>
                                            <div>
                                                <Link
                                                    target="_blank"
                                                    to={file.noticeLink}
                                                    className="btn bg-[#249742] hover:bg-[#1e7a37] text-white p-2 rounded-lg transition-colors"
                                                >
                                                    <FiDownload className="text-lg" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Additional Info Section */}
                <div className="mt-16 bg-gradient-to-r from-[#249742] to-[#1c6e36] rounded-2xl p-8 text-white shadow-xl">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-2xl font-bold mb-4">
                            নোটিশ সম্পর্কে আরও জানুন
                        </h3>
                        <p className="mb-6">
                            আমাদের নোটিশ বোর্ডে প্রতিষ্ঠানের সকল প্রকার ঘোষণা,
                            ইভেন্ট এবং ডাউনলোড উপকরণ প্রকাশ করা হয়। আপনি যদি
                            কোনো নির্দিষ্ট নোটিশ খুঁজে না পান, তাহলে আমাদের
                            অফিসে যোগাযোগ করতে পারেন।
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="bg-white text-[#249742] font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
                                যোগাযোগ করুন
                            </button>
                            <button className="bg-transparent border-2 border-white text-white font-semibold px-6 py-2 rounded-full hover:bg-white/10 transition-colors">
                                আরও তথ্য
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notice;
