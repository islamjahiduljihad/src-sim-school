import React, { useState, useEffect } from "react";
import {
    FaPlus,
    FaMinus,
    FaChartLine,
    FaHistory,
    FaSearch,
    FaFilter,
    FaPrint,
    FaFileExport,
} from "react-icons/fa";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const FundManagement = () => {
    const [showCreditModal, setShowCreditModal] = useState(false);
    const [showDebitModal, setShowDebitModal] = useState(false);
    const [funds, setFunds] = useState([]);
    const [filteredFunds, setFilteredFunds] = useState([]);
    const [totalBalance, setTotalBalance] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState("all");
    const [dateFilter, setDateFilter] = useState("all");

    // Form states
    const [creditForm, setCreditForm] = useState({
        source: "",
        amount: "",
        date: "",
        description: "",
    });

    const [debitForm, setDebitForm] = useState({
        purpose: "",
        amount: "",
        date: "",
        recipient: "",
        description: "",
    });

    // Initialize with sample data
    useEffect(() => {
        const sampleData = [
            {
                id: 1,
                type: "credit",
                source: "টিউশন ফি",
                amount: 50000,
                date: "2023-10-05",
                description: "মাসিক টিউশন সংগ্রহ",
            },
            {
                id: 2,
                type: "credit",
                source: "দান",
                amount: 20000,
                date: "2023-10-10",
                description: "অ্যালামনাই দান",
            },
            {
                id: 3,
                type: "debit",
                purpose: "অবকাঠামো",
                amount: 35000,
                date: "2023-10-15",
                description: "ক্লাসরুম সংস্কার",
                recipient: "স্কুল নির্মাণ কোম্পানি",
            },
            {
                id: 4,
                type: "debit",
                purpose: "ক্রীড়া সরঞ্জাম",
                amount: 12000,
                date: "2023-10-20",
                description: "বাস্কেটবল কোর্টের সরঞ্জাম",
                recipient: "স্পোর্টস ওয়ার্ল্ড",
            },
            {
                id: 5,
                type: "credit",
                source: "সরকারি অনুদান",
                amount: 80000,
                date: "2023-11-01",
                description: "বার্ষিক শিক্ষা অনুদান",
            },
            {
                id: 6,
                type: "debit",
                purpose: "শিক্ষক প্রশিক্ষণ",
                amount: 25000,
                date: "2023-11-05",
                description: "পেশাদার উন্নয়ন কর্মশালা",
                recipient: "শিক্ষা উৎকর্ষ",
            },
        ];

        setFunds(sampleData);
        setFilteredFunds(sampleData);

        // Calculate initial total balance
        const balance = sampleData.reduce((total, fund) => {
            return fund.type === "credit"
                ? total + fund.amount
                : total - fund.amount;
        }, 0);

        setTotalBalance(balance);
    }, []);

    // Filter funds based on search and filters
    useEffect(() => {
        let result = funds;

        // Filter by type
        if (filterType !== "all") {
            result = result.filter((fund) => fund.type === filterType);
        }

        // Filter by date
        if (dateFilter === "thisMonth") {
            const currentMonth = new Date().getMonth();
            const currentYear = new Date().getFullYear();

            result = result.filter((fund) => {
                const fundDate = new Date(fund.date);
                return (
                    fundDate.getMonth() === currentMonth &&
                    fundDate.getFullYear() === currentYear
                );
            });
        } else if (dateFilter === "lastMonth") {
            const currentDate = new Date();
            const lastMonth =
                currentDate.getMonth() === 0 ? 11 : currentDate.getMonth() - 1;
            const year =
                currentDate.getMonth() === 0
                    ? currentDate.getFullYear() - 1
                    : currentDate.getFullYear();

            result = result.filter((fund) => {
                const fundDate = new Date(fund.date);
                return (
                    fundDate.getMonth() === lastMonth &&
                    fundDate.getFullYear() === year
                );
            });
        }

        // Filter by search term
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            result = result.filter(
                (fund) =>
                    (fund.type === "credit" &&
                        fund.source.toLowerCase().includes(term)) ||
                    (fund.type === "debit" &&
                        fund.purpose.toLowerCase().includes(term)) ||
                    fund.description.toLowerCase().includes(term) ||
                    (fund.type === "debit" &&
                        fund.recipient.toLowerCase().includes(term))
            );
        }

        setFilteredFunds(result);
    }, [funds, searchTerm, filterType, dateFilter]);

    // Handle form changes
    const handleCreditChange = (e) => {
        const { name, value } = e.target;
        setCreditForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleDebitChange = (e) => {
        const { name, value } = e.target;
        setDebitForm((prev) => ({ ...prev, [name]: value }));
    };

    // Submit credit form
    const handleCreditSubmit = (e) => {
        e.preventDefault();

        const newCredit = {
            id: funds.length + 1,
            type: "credit",
            source: creditForm.source,
            amount: Number(creditForm.amount),
            date: creditForm.date || new Date().toISOString().slice(0, 10),
            description: creditForm.description,
        };

        setFunds((prev) => [...prev, newCredit]);
        setTotalBalance((prev) => prev + Number(creditForm.amount));
        setCreditForm({ source: "", amount: "", date: "", description: "" });
        setShowCreditModal(false);
    };

    // Submit debit form
    const handleDebitSubmit = (e) => {
        e.preventDefault();

        const newDebit = {
            id: funds.length + 1,
            type: "debit",
            purpose: debitForm.purpose,
            amount: Number(debitForm.amount),
            date: debitForm.date || new Date().toISOString().slice(0, 10),
            recipient: debitForm.recipient,
            description: debitForm.description,
        };

        setFunds((prev) => [...prev, newDebit]);
        setTotalBalance((prev) => prev - Number(debitForm.amount));
        setDebitForm({
            purpose: "",
            amount: "",
            date: "",
            recipient: "",
            description: "",
        });
        setShowDebitModal(false);
    };

    // Prepare chart data
    const getChartData = () => {
        // Group transactions by month
        const monthlyData = {};

        funds.forEach((fund) => {
            const date = new Date(fund.date);
            const monthYear = `${date.getFullYear()}-${(date.getMonth() + 1)
                .toString()
                .padStart(2, "0")}`;

            if (!monthlyData[monthYear]) {
                monthlyData[monthYear] = { credit: 0, debit: 0 };
            }

            if (fund.type === "credit") {
                monthlyData[monthYear].credit += fund.amount;
            } else {
                monthlyData[monthYear].debit += fund.amount;
            }
        });

        // Sort months chronologically
        const sortedMonths = Object.keys(monthlyData).sort();

        const labels = sortedMonths.map((month) => {
            const [year, monthNum] = month.split("-");
            const monthNames = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ];
            return `${monthNames[parseInt(monthNum) - 1]} ${year}`;
        });

        const creditData = sortedMonths.map(
            (month) => monthlyData[month].credit
        );
        const debitData = sortedMonths.map((month) => monthlyData[month].debit);

        return {
            labels,
            datasets: [
                {
                    label: "আয়",
                    data: creditData,
                    borderColor: "#249742",
                    backgroundColor: "rgba(36, 151, 66, 0.1)",
                    fill: true,
                    tension: 0.3,
                },
                {
                    label: "ব্যয়",
                    data: debitData,
                    borderColor: "#8E1C20",
                    backgroundColor: "rgba(142, 28, 32, 0.1)",
                    fill: true,
                    tension: 0.3,
                },
            ],
        };
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Monthly Income vs Expenses",
                font: {
                    size: 16,
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value) {
                        return "৳" + value.toLocaleString();
                    },
                },
            },
        },
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        ফান্ড ম্যানেজমেন্ট
                    </h1>
                    <p className="text-gray-600">
                        স্কুলের ফান্ডের আয়-ব্যয়ের বিস্তারিত তথ্য এবং রিপোর্ট
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
                    <button
                        onClick={() => setShowCreditModal(true)}
                        className="flex items-center gap-2 bg-gradient-to-r from-[#249742] to-[#1c6e36] text-white px-4 py-2 rounded-lg hover:from-[#1c6e36] hover:to-[#155a2b] transition-all"
                    >
                        <FaPlus /> ফান্ড যোগ করুন
                    </button>

                    <button
                        onClick={() => setShowDebitModal(true)}
                        className="flex items-center gap-2 bg-gradient-to-r from-[#8E1C20] to-[#6c1518] text-white px-4 py-2 rounded-lg hover:from-[#6c1518] hover:to-[#4a0f10] transition-all"
                    >
                        <FaMinus /> ফান্ড খরচ করুন
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow p-6 border-l-4 border-[#249742]">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-600">
                                মোট ব্যালেন্স
                            </h3>
                            <p className="text-3xl font-bold mt-2">
                                ৳{totalBalance.toLocaleString()}
                            </p>
                        </div>
                        <div className="bg-[#249742]/10 p-3 rounded-full">
                            <FaChartLine className="text-[#249742] text-xl" />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow p-6 border-l-4 border-[#249742]">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-600">
                                মোট আয়
                            </h3>
                            <p className="text-3xl font-bold mt-2">
                                ৳
                                {funds
                                    .filter((f) => f.type === "credit")
                                    .reduce((sum, f) => sum + f.amount, 0)
                                    .toLocaleString()}
                            </p>
                        </div>
                        <div className="bg-[#249742]/10 p-3 rounded-full">
                            <FaPlus className="text-[#249742] text-xl" />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow p-6 border-l-4 border-[#8E1C20]">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-600">
                                মোট খরচ
                            </h3>
                            <p className="text-3xl font-bold mt-2">
                                ৳
                                {funds
                                    .filter((f) => f.type === "debit")
                                    .reduce((sum, f) => sum + f.amount, 0)
                                    .toLocaleString()}
                            </p>
                        </div>
                        <div className="bg-[#8E1C20]/10 p-3 rounded-full">
                            <FaMinus className="text-[#8E1C20] text-xl" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Chart Section */}
            <div className="bg-white rounded-xl shadow p-6 mb-8">
                <div className="h-80">
                    <Line data={getChartData()} options={chartOptions} />
                </div>
            </div>

            {/* Transaction History */}
            <div className="bg-white rounded-xl shadow p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                        <FaHistory /> ট্রানজেকশন হিস্টোরি
                    </h2>

                    <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="ট্রানজেকশন সার্চ করুন..."
                                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#249742]"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>

                        <div className="flex gap-2">
                            <select
                                className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#249742]"
                                value={filterType}
                                onChange={(e) => setFilterType(e.target.value)}
                            >
                                <option value="all">সকল তথ্য</option>
                                <option value="credit">আয় তথ্য</option>
                                <option value="debit">ব্যয় তথ্য</option>
                            </select>

                            <select
                                className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#249742]"
                                value={dateFilter}
                                onChange={(e) => setDateFilter(e.target.value)}
                            >
                                <option value="all">সকল তারিখ</option>
                                <option value="thisMonth">এই মাস</option>
                                <option value="lastMonth">গত মাস</option>
                            </select>
                        </div>

                        <div className="flex gap-2">
                            <button className="flex items-center gap-1 border rounded-lg px-3 py-2 hover:bg-gray-50">
                                <FaPrint /> প্রিন্ট করুন
                            </button>
                            <button className="flex items-center gap-1 border rounded-lg px-3 py-2 hover:bg-gray-50">
                                <FaFileExport /> এক্সপোর্ট করুন
                            </button>
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    তারিখ
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    প্রকার
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    উৎস/উদ্দেশ্য
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    বর্ণনা
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    পরিমাণ
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    প্রাপক
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredFunds.length > 0 ? (
                                filteredFunds.map((fund) => (
                                    <tr
                                        key={fund.id}
                                        className="hover:bg-gray-50"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {fund.date}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                    fund.type === "credit"
                                                        ? "bg-green-100 text-green-800"
                                                        : "bg-red-100 text-red-800"
                                                }`}
                                            >
                                                {fund.type === "credit"
                                                    ? "Income"
                                                    : "Expense"}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {fund.type === "credit"
                                                ? fund.source
                                                : fund.purpose}
                                        </td>
                                        <td className="px-6 py-4">
                                            {fund.description}
                                        </td>
                                        <td
                                            className={`px-6 py-4 whitespace-nowrap font-medium ${
                                                fund.type === "credit"
                                                    ? "text-green-600"
                                                    : "text-red-600"
                                            }`}
                                        >
                                            {fund.type === "credit" ? "+" : "-"}
                                            ৳{fund.amount.toLocaleString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {fund.type === "debit"
                                                ? fund.recipient
                                                : "-"}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="6"
                                        className="px-6 py-4 text-center text-gray-500"
                                    >
                                        কোন ট্রানজেকশন পাওয়া যায়নি
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {filteredFunds.length > 0 && (
                    <div className="mt-4 text-sm text-gray-500">
                        {filteredFunds.length} এর মধ্যে {funds.length} টি দেখানো
                        হয়েছে।
                    </div>
                )}
            </div>

            {/* Add Funds Modal */}
            {showCreditModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl shadow-lg w-full max-w-md">
                        <div className="bg-gradient-to-r from-[#249742] to-[#1c6e36] text-white p-4 rounded-t-xl">
                            <h2 className="text-xl font-bold">
                                ফান্ড যোগ করুন
                            </h2>
                            <p>স্কুল ফান্ডে নতুন আয় রেকর্ড করুন</p>
                        </div>

                        <form onSubmit={handleCreditSubmit} className="p-6">
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">
                                    উৎস
                                </label>
                                <input
                                    type="text"
                                    name="source"
                                    value={creditForm.source}
                                    onChange={handleCreditChange}
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#249742]"
                                    placeholder="টিউশন ফি, দান, সরকারি অনুদান, ইত্যাদি"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">
                                    পরিমাণ (৳)
                                </label>
                                <input
                                    type="number"
                                    name="amount"
                                    value={creditForm.amount}
                                    onChange={handleCreditChange}
                                    required
                                    min="1"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#249742]"
                                    placeholder="টাকার পরিমাণ লিখুন"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">
                                    তারিখ
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    value={creditForm.date}
                                    onChange={handleCreditChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#249742]"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 mb-2">
                                    ডেসক্রিপশন
                                </label>
                                <textarea
                                    name="description"
                                    value={creditForm.description}
                                    onChange={handleCreditChange}
                                    required
                                    rows="3"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#249742]"
                                    placeholder="এই আয়ের বিস্তারিত"
                                ></textarea>
                            </div>

                            <div className="flex justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={() => setShowCreditModal(false)}
                                    className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50"
                                >
                                    বাতিল করুন
                                </button>
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-[#249742] to-[#1c6e36] text-white px-4 py-2 rounded-lg hover:from-[#1c6e36] hover:to-[#155a2b]"
                                >
                                    ফান্ড যোগ করুন
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Debit Funds Modal */}
            {showDebitModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl shadow-lg w-full max-w-md">
                        <div className="bg-gradient-to-r from-[#8E1C20] to-[#6c1518] text-white p-4 rounded-t-xl">
                            <h2 className="text-xl font-bold">
                                ফান্ড খরচ করুন
                            </h2>
                            <p>স্কুলের তহবিল থেকে নতুন ব্যয় রেকর্ড করুন</p>
                        </div>

                        <form onSubmit={handleDebitSubmit} className="p-6">
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">
                                    উদ্দেশ্য
                                </label>
                                <input
                                    type="text"
                                    name="purpose"
                                    value={debitForm.purpose}
                                    onChange={handleDebitChange}
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#249742]"
                                    placeholder="অবকাঠামো, সরবরাহ, বেতন, ইত্যাদি"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">
                                    পরিমাণ (৳)
                                </label>
                                <input
                                    type="number"
                                    name="amount"
                                    value={debitForm.amount}
                                    onChange={handleDebitChange}
                                    required
                                    min="1"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#249742]"
                                    placeholder="টাকার পরিমাণ লিখুন"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">
                                    প্রাপক
                                </label>
                                <input
                                    type="text"
                                    name="recipient"
                                    value={debitForm.recipient}
                                    onChange={handleDebitChange}
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#249742]"
                                    placeholder="কে তহবিল পেয়েছে?"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">
                                    তারিখ
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    value={debitForm.date}
                                    onChange={handleDebitChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#249742]"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 mb-2">
                                    বর্ণনা
                                </label>
                                <textarea
                                    name="description"
                                    value={debitForm.description}
                                    onChange={handleDebitChange}
                                    required
                                    rows="3"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#249742]"
                                    placeholder="এই ব্যয়ের বিস্তারিত"
                                ></textarea>
                            </div>

                            <div className="flex justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={() => setShowDebitModal(false)}
                                    className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50"
                                >
                                    বাতিল
                                </button>
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-[#8E1C20] to-[#6c1518] text-white px-4 py-2 rounded-lg hover:from-[#6c1518] hover:to-[#4a0f10]"
                                >
                                    তহবিল ডেবিট করুন
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FundManagement;
