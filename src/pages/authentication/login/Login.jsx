import { useContext, useState } from "react";
import { FaLock, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import AuthContext from "../../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
    const { user, setUser, loading, setLoading, login } =
        useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(() => {
                Swal.fire({
                    title: "লগইন সফল!",
                    text: "আপনি সফলভাবে লগইন করেছেন।",
                    icon: "success",
                    confirmButtonText: "ঠিক আছে",
                });
            })
            .catch((error) => {
                Swal.fire({
                    title: "লগইন ব্যর্থ!",
                    text: error.message,
                    icon: "error",
                    confirmButtonText: "পুনরায় চেষ্টা করুন",
                });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0fdf4] to-[#d1fae5] p-4">
            <div className="w-full max-w-md">
                {/* Logo Header */}
                <div className="mb-6 flex items-center gap-4 justify-center">
                    <div className="bg-gradient-to-r from-[#249742] to-[#1c6e36] w-20 h-20 rounded-full flex items-center justify-center">
                        <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center">
                            <FaLock className="text-2xl text-[#249742]" />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">
                            অ্যাডমিন লগইন
                        </h1>
                        <p className="text-gray-600">
                            শ্রীরায়েরচর এস.আই.এম উচ্চ বিদ্যালয়
                        </p>
                    </div>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="bg-gradient-to-r from-[#249742] to-[#1c6e36] p-5 text-white text-center">
                        <h2 className="text-xl font-bold">
                            অ্যাডমিনিস্ট্রেটর লগইন
                        </h2>
                        <p className="text-sm opacity-90">
                            আপনার ক্রেডেনশিয়াল দিয়ে লগইন করুন
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="p-6">
                        <div className="mb-5">
                            <label
                                className="block text-gray-700 mb-2 font-medium"
                                htmlFor="email"
                            >
                                ইমেইল এড্রেস
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaEnvelope className="text-gray-400" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#249742] focus:border-transparent"
                                    placeholder="admin@school.edu"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label
                                className="block text-gray-700 mb-2 font-medium"
                                htmlFor="password"
                            >
                                পাসওয়ার্ড
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaLock className="text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#249742] focus:border-transparent"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                >
                                    {showPassword ? (
                                        <FaEyeSlash className="text-gray-400 hover:text-gray-600" />
                                    ) : (
                                        <FaEye className="text-gray-400 hover:text-gray-600" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    className="h-4 w-4 text-[#249742] focus:ring-[#249742] border-gray-300 rounded"
                                />
                                <label
                                    htmlFor="remember"
                                    className="ml-2 block text-sm text-gray-700"
                                >
                                    আমাকে মনে রাখুন
                                </label>
                            </div>

                            <a
                                href="#"
                                className="text-sm text-[#249742] hover:text-[#1c6e36] font-medium"
                            >
                                পাসওয়ার্ড ভুলে গেছেন?
                            </a>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-[#249742] to-[#1c6e36] text-white py-3 px-4 rounded-lg font-semibold hover:from-[#1c6e36] hover:to-[#155a2b] transition-all duration-300 flex items-center justify-center"
                        >
                            {loading ? (
                                <>
                                    <svg
                                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    আপনাকে অথেনটিকেট করা হচ্ছে
                                </>
                            ) : (
                                "লগইন করুন"
                            )}
                        </button>
                    </form>

                    <div className="bg-gray-50 px-6 py-4 text-center">
                        <p className="text-sm text-[#249742]">
                            একাউন্ট সংক্রান্ত সমস্যা হলে ডেভেলপার এর সাথে
                            যোগাযোগ করুন।
                        </p>
                    </div>
                </div>

                <div className="mt-8 text-center text-sm text-gray-600">
                    <p>
                        © {new Date().getFullYear()} শ্রীরায়েরচর এস.আই.এম উচ্চ
                        বিদ্যালয়। সকল অধিকার সংরক্ষিত।
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
