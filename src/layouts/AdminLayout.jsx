import { BiMenu } from "react-icons/bi";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiHome9Line, RiRadioButtonLine } from "react-icons/ri";
import { PiStudentBold } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { SlCalculator } from "react-icons/sl";
import {
    MdOutlineContactPhone,
    MdOutlineDeveloperMode,
    MdOutlinePhotoLibrary,
} from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { FaRegIdCard } from "react-icons/fa";

const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="h-screen flex overflow-hidden">
            {/* Sidebar */}
            <aside
                className={`bg-white shadow-xl fixed md:static top-0 left-0 h-full w-64 z-50 transform transition-transform duration-300 ease-in-out
                ${
                    isSidebarOpen
                        ? "translate-x-0"
                        : "-translate-x-full md:translate-x-0"
                }`}
            >
                <div className="p-6 border-b flex items-center justify-between">
                    <h2 className="text-2xl font-extrabold text-[#249742]">
                        অ্যাডমিন প্যানেল
                    </h2>
                    <button onClick={toggleSidebar} className="md:hidden">
                        <IoClose size={22} />
                    </button>
                </div>
                <nav className="p-4 space-y-2 text-gray-700 font-medium">
                    <Link
                        to="/admin"
                        className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#249742] hover:text-white"
                    >
                        <RiHome9Line className="text-[#249742]" />
                        হোম
                    </Link>
                    <Link
                        to="/admin/studentList"
                        className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#249742] hover:text-white"
                    >
                        <PiStudentBold className="text-[#249742]" />
                        শিক্ষার্থী ম্যানেজমেন্ট
                    </Link>
                    <Link
                        to="/admin/teacherList"
                        className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#249742] hover:text-white"
                    >
                        <LiaChalkboardTeacherSolid className="text-[#249742]" />
                        শিক্ষক ম্যানেজমেন্ট
                    </Link>
                    <Link
                        to="/admin/notices"
                        className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#249742] hover:text-white"
                    >
                        <HiOutlineBellAlert className="text-[#249742]" />
                        নোটিশ ম্যানেজমেন্ট
                    </Link>
                    <Link
                        to="/admin/studentResults"
                        className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#249742] hover:text-white"
                    >
                        <SlCalculator className="text-[#249742]" />
                        ফলাফল ম্যানেজমেন্ট
                    </Link>
                    <Link
                        to="/admin/digiCardManagement"
                        className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#249742] hover:text-white"
                    >
                        <FaRegIdCard className="text-[#249742]" />
                        ডিজি-কার্ড ম্যানেজমেন্ট
                    </Link>
                    <Link
                        to="/admin/photoManagement"
                        className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#249742] hover:text-white"
                    >
                        <MdOutlinePhotoLibrary className="text-[#249742]" />
                        ফটো ম্যানেজমেন্ট
                    </Link>
                    <Link
                        to="/admin/contact"
                        className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#249742] hover:text-white"
                    >
                        <MdOutlineContactPhone className="text-[#249742]" />
                        যোগাযোগ পাতা
                    </Link>
                    <Link
                        to="/admin/notices"
                        className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#249742] hover:text-white"
                    >
                        <RiRadioButtonLine className="text-[#249742]" />
                        শিক্ষার্থী পোর্টাল
                    </Link>
                    <Link
                        to="/admin/developerContact"
                        className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#249742] hover:text-white"
                    >
                        <MdOutlineDeveloperMode className="text-[#249742]" />
                        ডেভেলপার কন্টাক্ট
                    </Link>
                </nav>

                <div>
                    <div className="mx-3 px-2 py-4 border-t">
                        <div className="flex items-center gap-2">
                            <img
                                className="w-12 h-12 p-1 rounded-full border-2 border-[#249742]"
                                src="https://res.cloudinary.com/dvhkcr2jb/image/upload/v1753203431/premium_photo-1683121413514-502338cb0b74_guik5n.avif"
                                alt="admin avatar"
                            />
                            <div>
                                <h1 className="text-[#249742] font-bold">
                                    জাকির হোসাইন
                                </h1>
                                <p>#১০২১</p>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 mt-3 btn btn-sm rounded-3xl border-none bg-[#249742] text-white w-full">
                            <AiOutlineLogout />
                            লগআউট
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Area */}
            <div className="flex-1 flex flex-col h-full">
                {/* Topbar */}
                <header className="bg-white border-b shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-30 md:hidden">
                    <div className="p-2 flex items-center space-x-3">
                        <button
                            className="md:hidden text-gray-600"
                            onClick={toggleSidebar}
                        >
                            <BiMenu size={26} />
                        </button>
                        <h1 className="text-2xl md:text-2xl font-semibold text-[#249742]">
                            স্বাগতম, অ্যাডমিন
                        </h1>
                    </div>
                    <div>
                        <img
                            className="w-10 h-10 rounded-full border-2 border-[#249742]"
                            src="https://res.cloudinary.com/dvhkcr2jb/image/upload/v1753203431/premium_photo-1683121413514-502338cb0b74_guik5n.avif"
                            alt="admin avatar"
                        />
                    </div>
                </header>

                {/* Scrollable Content */}
                <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
