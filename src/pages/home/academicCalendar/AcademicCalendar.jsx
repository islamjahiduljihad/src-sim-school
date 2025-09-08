import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import {
    FaCalendarAlt,
    FaChevronLeft,
    FaChevronRight,
    FaRegCalendarCheck,
} from "react-icons/fa";

// Custom calendar navigation
const CustomNavigation = ({
    date,
    view,
    onViewChange,
    onDrillUp,
    onDrillDown,
}) => (
    <div className="flex justify-between items-center p-4 bg-[#249742] text-white rounded-t-lg">
        <button
            onClick={() => onDrillUp()}
            className="p-1 rounded-full hover:bg-[#1c6e36] transition-colors"
        >
            <FaChevronLeft />
        </button>

        <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-xl" />
            <h3 className="text-xl font-bold">
                {date.toLocaleDateString("bn-BD", {
                    year: "numeric",
                    month: "long",
                })}
            </h3>
        </div>

        <button
            onClick={() => onDrillDown()}
            className="p-1 rounded-full hover:bg-[#1c6e36] transition-colors"
        >
            <FaChevronRight />
        </button>
    </div>
);

const AcademicCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [activeView, setActiveView] = useState("month");
    const [events, setEvents] = useState([
        {
            date: new Date(2025, 0, 1),
            title: "শিক্ষাবর্ষের শুরু",
            description: "নতুন শিক্ষাবর্ষের আনুষ্ঠানিক উদ্বোধনী অনুষ্ঠান",
        },
        {
            date: new Date(2025, 0, 15),
            title: "বার্ষিক ক্রীড়া প্রতিযোগিতা",
            description:
                "বিদ্যালয় প্রাঙ্গণে বার্ষিক ক্রীড়া প্রতিযোগিতার উদ্বোধন",
        },
        {
            date: new Date(2025, 1, 21),
            title: "একুশে ফেব্রুয়ারি পালন",
            description: "আন্তর্জাতিক মাতৃভাষা দিবসের অনুষ্ঠানমালা",
        },
        {
            date: new Date(2025, 2, 17),
            title: "স্বাধীনতা দিবস",
            description: "স্বাধীনতা দিবস উদযাপন ও সাংস্কৃতিক অনুষ্ঠান",
        },
        {
            date: new Date(2025, 2, 26),
            title: "জাতীয় দিবস",
            description: "জাতীয় দিবসের কুচকাওয়াজ ও সাংস্কৃতিক অনুষ্ঠান",
        },
        {
            date: new Date(2025, 3, 14),
            title: "পহেলা বৈশাখ",
            description: "বাংলা নববর্ষ উদযাপন",
        },
        {
            date: new Date(2025, 4, 1),
            title: "মে দিবস",
            description: "আন্তর্জাতিক শ্রম দিবস উদযাপন",
        },
        {
            date: new Date(2028, 5, 15),
            title: "মিড টার্ম পরীক্ষা",
            description: "ষষ্ঠ থেকে দশম শ্রেণির মিড টার্ম পরীক্ষা শুরু",
        },
        {
            date: new Date(2028, 8, 1),
            title: "বার্ষিক পরীক্ষা",
            description: "ষষ্ঠ থেকে দশম শ্রেণির বার্ষিক পরীক্ষা শুরু",
        },
        {
            date: new Date(2028, 10, 10),
            title: "প্রাক্তন শিক্ষার্থী সম্মিলন",
            description: "বার্ষিক প্রাক্তন শিক্ষার্থী সম্মিলনী",
        },
        {
            date: new Date(2028, 11, 16),
            title: "বিজয় দিবস",
            description: "বিজয় দিবস উদযাপন",
        },
        {
            date: new Date(2028, 11, 25),
            title: "বার্ষিক পুরস্কার বিতরণ",
            description: "বার্ষিক পুরস্কার বিতরণী অনুষ্ঠান",
        },
    ]);
    // Filter events for the selected date
    const filteredEvents = events.filter(
        (event) =>
            selectedDate &&
            event.date.toDateString() === selectedDate.toDateString()
    );

    // Check if a date has an event
    const hasEvent = (date) => {
        return events.some(
            (event) => event.date.toDateString() === date.toDateString()
        );
    };

    // Get upcoming events (next 5 events)
    const upcomingEvents = events
        .filter((event) => event.date >= new Date())
        .slice(0, 5);

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 relative">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-1/4 w-24 h-24 rounded-full bg-[#249742] animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-[#249742] animate-pulse delay-300"></div>
                <div className="absolute bottom-20 left-1/3 w-20 h-20 rounded-full bg-[#8E1C20] animate-pulse delay-700"></div>
                <div className="absolute bottom-1/4 right-10 w-12 h-12 rounded-full bg-[#249742] animate-pulse delay-1000"></div>
            </div>
            <div className="w-full mx-auto mb-12">
                <SectionHeader
                    title={"একাডেমিক ক্যালেন্ডার ২০২৫"}
                    subtitle={
                        "আমাদের একাডেমিক ক্যালেন্ডার সেকশন এ ২০২৫ সালের সকল কার্যক্রম এর ইভেন্ট রয়েছে।"
                    }
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Calendar Section */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-xl overflow-hidden border-gray-200 border p-8">
                    <Calendar
                        onChange={setSelectedDate}
                        value={selectedDate}
                        className="border-0 w-full rounded m-4"
                        navigationLabel={({ date, view }) => (
                            <CustomNavigation
                                date={date}
                                view={view}
                                onDrillUp={() => setActiveView("year")}
                                onDrillDown={() => setActiveView("month")}
                            />
                        )}
                        tileContent={({ date, view }) => {
                            if (view === "month" && hasEvent(date)) {
                                return (
                                    <div className="absolute bottom-1 right-1">
                                        <span className="w-2 h-2 rounded-full bg-[#249742] block"></span>
                                    </div>
                                );
                            }
                            return null;
                        }}
                        tileClassName={({ date, view }) => {
                            let classes =
                                "relative h-20 md:h-24 border border-gray-100 hover:bg-gray-50 transition-colors";

                            // Today's date
                            const today = new Date();
                            if (date.toDateString() === today.toDateString()) {
                                classes += " bg-[#249742]/10";
                            }

                            // Selected date
                            if (
                                selectedDate &&
                                date.toDateString() ===
                                    selectedDate.toDateString()
                            ) {
                                classes += " bg-[#8E1C20]/10 border-[#8E1C20]";
                            }

                            // Weekend styling
                            if (date.getDay() === 0) {
                                // Sunday
                                classes += " text-red-500";
                            } else if (date.getDay() === 5) {
                                // Friday
                                classes += " text-green-600";
                            } else if (date.getDay() === 6) {
                                // Saturday
                                classes += " text-blue-500";
                            }

                            return classes;
                        }}
                        formatShortWeekday={(locale, date) =>
                            ["র", "স", "ম", "ব", "বৃ", "শু", "শ"][date.getDay()]
                        }
                        nextLabel={
                            <FaChevronRight className="text-[#249742]" />
                        }
                        prevLabel={<FaChevronLeft className="text-[#249742]" />}
                        next2Label={null}
                        prev2Label={null}
                        minDetail="year"
                        view={activeView}
                        onViewChange={({ view }) => setActiveView(view)}
                    />
                </div>

                {/* Upcoming Events */}
                <div className="bg-gradient-to-br from-[#249742] to-[#1c6e36] rounded-xl shadow-xl p-6 text-white">
                    <div className="flex items-center gap-3 mb-6">
                        <FaRegCalendarCheck className="text-2xl" />
                        <h3 className="text-2xl font-bold">আসন্ন ইভেন্টসমূহ</h3>
                    </div>

                    <div className="space-y-4">
                        {upcomingEvents.map((event, idx) => (
                            <div
                                key={idx}
                                className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:border-white/40 transition-all"
                            >
                                <div className="flex items-start">
                                    <div className="bg-white text-[#249742] rounded-lg p-2 text-center min-w-[70px] mr-4">
                                        <div className="text-2xl font-bold">
                                            {event.date.toLocaleDateString(
                                                "bn-BD",
                                                { day: "numeric" }
                                            )}
                                        </div>
                                        <div className="text-sm">
                                            {event.date.toLocaleDateString(
                                                "bn-BD",
                                                { month: "short" }
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">
                                            {event.title}
                                        </h4>
                                        <p className="text-white/80 text-sm mt-1">
                                            {event.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Selected Date Events */}
            {selectedDate && (
                <div className="mt-8 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                    <div className="bg-[#249742] p-4 text-white">
                        <h3 className="text-xl font-bold flex items-center gap-2">
                            <FaCalendarAlt />
                            {selectedDate.toLocaleDateString("bn-BD", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                weekday: "long",
                            })}
                        </h3>
                    </div>

                    <div className="p-6">
                        {filteredEvents.length > 0 ? (
                            <div className="space-y-4">
                                {filteredEvents.map((event, idx) => (
                                    <div key={idx} className="flex items-start">
                                        <div className="bg-[#249742]/10 p-3 rounded-full mr-4 mt-1">
                                            <div className="w-3 h-3 rounded-full bg-[#249742]"></div>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-800">
                                                {event.title}
                                            </h4>
                                            <p className="text-gray-600 mt-1">
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-8">
                                <div className="text-5xl text-gray-200 mb-4">
                                    📅
                                </div>
                                <p className="text-gray-500 text-lg">
                                    এই দিনে কোন ইভেন্ট নির্ধারিত নেই
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* All Events Table */}
            <div className="mt-12 bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-[#249742] p-4 text-white">
                    <h3 className="text-xl font-bold">
                        ২০২৫ শিক্ষাবর্ষের সকল ইভেন্ট
                    </h3>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead className="bg-[#249742]/10">
                            <tr>
                                <th className="py-3 px-4 text-left">তারিখ</th>
                                <th className="py-3 px-4 text-left">ইভেন্ট</th>
                                <th className="py-3 px-4 text-left">বর্ণনা</th>
                            </tr>
                        </thead>
                        <tbody>
                            {events.map((event, idx) => (
                                <tr
                                    key={idx}
                                    className={
                                        idx % 2 === 0
                                            ? "bg-white"
                                            : "bg-gray-50"
                                    }
                                >
                                    <td className="py-3 px-4 border-b border-gray-100">
                                        {event.date.toLocaleDateString(
                                            "bn-BD",
                                            {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            }
                                        )}
                                    </td>
                                    <td className="py-3 px-4 border-b border-gray-100 font-medium">
                                        {event.title}
                                    </td>
                                    <td className="py-3 px-4 border-b border-gray-100 text-gray-600">
                                        {event.description}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AcademicCalendar;
