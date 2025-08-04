import { BiMenu } from "react-icons/bi";
import { Outlet, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiHome9Line, RiRadioButtonLine } from "react-icons/ri";
import { PiStudentBold } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { SlCalculator } from "react-icons/sl";
import {
    MdEventAvailable,
    MdOutlineContactPhone,
    MdOutlineDeveloperMode,
    MdOutlinePhotoLibrary,
} from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { FaRegIdCard } from "react-icons/fa";
import { CgReadme } from "react-icons/cg";
import { BsPeople } from "react-icons/bs";
import { TbCoinTaka } from "react-icons/tb";
import AuthContext from "../context/AuthContext/AuthContext";
import Swal from "sweetalert2";

const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const { user, logout, updateUserProfile } = useContext(AuthContext);

    console.log(user);

    const handleUpdateUser = (e) => {
        e.preventDefault();

        const form = e.target;

        const displayName = form.displayName.value;
        const photoURL = form.photoURL.value;

        updateUserProfile({ displayName, photoURL })
            .then(() => {
                Swal.fire({
                    title: "প্রোফাইল আপডেট হয়েছে!",
                    text: "আপনার প্রোফাইল সফলভাবে আপডেট হয়েছে।",
                    icon: "success",
                    confirmButtonText: "ঠিক আছে",
                });
                form.reset();
                document.getElementById("profile_update_modal").close();
            })
            .catch((error) => {
                console.error("Error updating profile:", error);
            });
    };

    return (
        <div className="h-screen md:flex overflow-hidden">
            {/* Sidebar */}
            <aside
                className={`overflow-y-auto bg-white shadow-xl fixed md:static top-0 left-0 h-full w-64 z-50 transform transition-transform duration-300 ease-in-out
                ${
                    isSidebarOpen
                        ? "translate-x-0"
                        : "-translate-x-full md:translate-x-0"
                }`}
            >
                <div className="p-6 border-b flex items-center justify-between sticky top-0 z-20 bg-white">
                    <h2 className="text-2xl font-extrabold text-[#249742]">
                        অ্যাডমিন প্যানেল
                    </h2>
                    <button onClick={toggleSidebar} className="md:hidden">
                        <IoClose size={22} />
                    </button>
                </div>
                <div className="overflow-y-auto">
                    <nav className="p-4 space-y-2 text-gray-700 font-medium">
                        <Link
                            to="/admin"
                            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#249742] hover:text-white"
                        >
                            <RiHome9Line className="text-[#249742]" />
                            এডমিন হোম
                        </Link>
                        <Link
                            to="/admin/funds"
                            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#249742] hover:text-white"
                        >
                            <TbCoinTaka className="text-[#249742]" />
                            স্কুল ফান্ড ম্যানেজমেন্ট
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
                            to="/admin/events"
                            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#249742] hover:text-white"
                        >
                            <MdEventAvailable className="text-[#249742]" />
                            ইভেন্ট ম্যানেজমেন্ট
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
                            to="/admin/staffManagement"
                            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#249742] hover:text-white"
                        >
                            <MdOutlinePhotoLibrary className="text-[#249742]" />
                            স্টাফ ম্যানেজমেন্ট
                        </Link>
                        <Link
                            to="/admin/contact"
                            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#249742] hover:text-white"
                        >
                            <MdOutlineContactPhone className="text-[#249742]" />
                            যোগাযোগ পাতা
                        </Link>
                        <Link
                            to="/admin"
                            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#249742] hover:text-white"
                        >
                            <CgReadme className="text-[#249742]" />
                            ভর্তি ম্যানেজমেন্ট
                        </Link>
                        <Link
                            to="/admin"
                            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#249742] hover:text-white"
                        >
                            <BsPeople className="text-[#249742]" />
                            ম্যানেজিং কমিটি
                        </Link>
                        <Link
                            to="/admin/developerContact"
                            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#249742] hover:text-white"
                        >
                            <MdOutlineDeveloperMode className="text-[#249742]" />
                            ডেভেলপার কন্টাক্ট
                        </Link>
                    </nav>
                </div>

                <div>
                    <div className="mx-3 px-2 py-4 border-t">
                        <div className="flex items-center gap-2">
                            <img
                                className="w-12 h-12 p-1 rounded-full border-2 border-[#249742]"
                                src={
                                    user?.photoURL ||
                                    "https://cdn-icons-png.flaticon.com/128/15239/15239514.png"
                                }
                                alt="admin avatar"
                            />
                            <div>
                                <h1 className="text-[#249742] font-bold">
                                    {user?.displayName || "অ্যাডমিন"}
                                </h1>
                                <p>#১০২১</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <button
                                onClick={() => {
                                    document
                                        .getElementById("profile_modal")
                                        .showModal();
                                }}
                                className="btn btn-sm rounded-3xl bg-[#249742] text-white border-none shadow-none"
                            >
                                প্রোফাইল
                            </button>
                            <button
                                onClick={() => {
                                    logout()
                                        .then(() => {
                                            console.log(
                                                "Logged out successfully"
                                            );
                                        })
                                        .catch((error) => {
                                            console.error(
                                                "Logout failed:",
                                                error
                                            );
                                        });
                                }}
                                className="flex items-center gap-1 btn btn-sm rounded-3xl border-none btn-error text-white"
                            >
                                <AiOutlineLogout />
                                লগআউট
                            </button>
                        </div>
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
                            className="p-[2px] w-10 h-10 rounded-full border-2 border-[#249742]"
                            src={
                                user?.photoURL ||
                                "https://cdn-icons-png.flaticon.com/128/15239/15239514.png"
                            }
                            alt="admin avatar"
                        />
                    </div>
                </header>

                {/* Scrollable Content */}
                <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50 w-full">
                    <Outlet />
                </main>
            </div>

            {/* Profile modal */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog
                id="profile_modal"
                className="modal modal-bottom sm:modal-middle"
            >
                <div className="modal-box">
                    <h3 className="font-bold text-2xl text-[#249742]">
                        অ্যাডমিন প্রোফাইল
                    </h3>
                    {/* Main content */}
                    <div>
                        <div className="flex items-center gap-4 mt-4">
                            <img
                                className="w-24 h-24 border-2 rounded-full p-1 border-[#249742]"
                                src={
                                    user?.photoURL ||
                                    "https://cdn-icons-png.flaticon.com/128/15239/15239514.png"
                                }
                                alt="Admin"
                            />

                            <div>
                                <h1 className="text-xl font-bold text-[#249742]">
                                    {user?.displayName
                                        ? user.displayName
                                        : "এসএসআইএমএইচএস অ্যাডমিন"}
                                </h1>
                                <p className="text-gray-600 font-semibold">
                                    {user?.email}
                                </p>
                            </div>
                        </div>
                        <table className="table w-full mt-6">
                            <tbody>
                                <tr>
                                    <td>একাউন্ট তৈরির সময়ঃ</td>
                                    <td>{user?.metadata?.creationTime}</td>
                                </tr>
                                <tr>
                                    <td>লাস্ট সাইন ইনঃ</td>
                                    <td>{user?.metadata?.lastSignInTime}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-4">
                        <button
                            onClick={() => {
                                document
                                    .getElementById("profile_update_modal")
                                    .showModal();
                            }}
                            className="btn bg-[#249742] text-white shadow-none border-none"
                        >
                            প্রোফাইল আপডেট
                        </button>
                        <button
                            className="btn btn-error ml-2 text-white shadow-none border-none"
                            onClick={() => {
                                document
                                    .getElementById("profile_modal")
                                    .close();
                            }}
                        >
                            বন্ধ করুন
                        </button>
                    </div>
                </div>
            </dialog>

            {/* Profile update modal */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog
                id="profile_update_modal"
                className="modal modal-bottom sm:modal-middle"
            >
                <div className="modal-box">
                    <h3 className="font-bold text-xl text-[#249742]">
                        অ্যাডমিন প্রোফাইল আপডেট
                    </h3>
                    {/* Main */}
                    <div>
                        <form onSubmit={handleUpdateUser} action="">
                            <div>
                                <label htmlFor="">নাম</label>
                                <input
                                    name="displayName"
                                    type="text"
                                    className="input input-bordered w-full"
                                    defaultValue={user?.displayName || ""}
                                />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="">ফটো ইউআরএল</label>
                                <input
                                    name="photoURL"
                                    type="url"
                                    className="input input-bordered w-full"
                                    defaultValue={user?.photoURL || ""}
                                />
                            </div>

                            <div className="mt-4 flex justify-end">
                                <button className="btn bg-[#249742] text-white shadow-none border-none">
                                    আপডেট করুন
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-error ml-2 text-white shadow-none border-none"
                                    onClick={() => {
                                        document
                                            .getElementById(
                                                "profile_update_modal"
                                            )
                                            .close();
                                    }}
                                >
                                    বাতিল করুন
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AdminLayout;
