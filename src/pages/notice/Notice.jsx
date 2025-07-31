import { useEffect, useState } from "react";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import { Link } from "lucide-react";

const Notice = () => {
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/notices")
            .then((res) => res.json())
            .then((data) => {
                setNotices(data);
            })
            .catch((error) => {
                console.error("Error fetching notices:", error);
            });
    }, []);
    return (
        <div className="p-4 md:p-8">
            <div>
                <SectionHeader
                    title={"নোটিশ বোর্ড"}
                    subtitle={"এখানে এস এস আই এম এর সকল নোটিশ পাওয়া যাবে।"}
                ></SectionHeader>
            </div>
            <div className="overflow-x-auto shadow rounded-lg w-[95%] md:w-[80%] mx-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#249742] text-white">
                        <tr>
                            <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                                #
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                                নোটিশ
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                                প্রকাশের তারিখ
                            </th>
                            <th className="px-4 py-3 text-center text-sm font-semibold uppercase tracking-wider">
                                ডাউনলোড
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {notices.map((notice, idx) => (
                            <tr key={notice?.id} className="hover:bg-gray-50">
                                <td className="px-4 py-3 text-sm text-gray-700">
                                    {idx + 1}
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-800">
                                    {notice?.title}
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-600">
                                    {notice?.date}
                                </td>
                                <td className="px-4 py-3 text-center">
                                    {notice?.noticeLink ? (
                                        <a
                                            href={notice.noticeLink}
                                            className="btn bg-[#249742] text-white"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            দেখুন
                                        </a>
                                    ) : (
                                        <span className="text-gray-400 italic">
                                            কোনো লিংক নেই
                                        </span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Notice;
