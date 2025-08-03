import { FaRegCalendarPlus } from "react-icons/fa";

const EventManagement = () => {
    const events = [
        {
            id: 1,
            title: "Sports Day",
            shortDesc: "Annual sports event with various competitions.",
            date: "2023-12-01",
            eventLink: "https://example.com/sports-day",
        },
        {
            id: 2,
            title: "Science Fair",
            shortDesc: "Showcasing student projects in science and technology.",
            date: "2023-12-15",
            eventLink: "https://example.com/science-fair",
        },
        {
            id: 3,
            title: "Cultural Fest",
            shortDesc: "A celebration of cultural diversity with performances.",
            date: "2024-01-10",
            eventLink: "https://example.com/cultural-fest",
        },
        {
            id: 4,
            title: "Annual Day",
            shortDesc: "Celebrating the achievements of the academic year.",
            date: "2024-02-05",
            eventLink: "https://example.com/annual-day",
        },
        {
            id: 5,
            title: "Art Exhibition",
            shortDesc: "Display of student artworks and creative projects.",
            date: "2024-03-20",
            eventLink: "https://example.com/art-exhibition",
        },
    ];

    const handleAddEvent = (e) => {
        e.preventDefault();

        const form = e.target;

        const eventTitle = form.eventTitle.value;
        const eventDate = form.eventDate.value;
        const eventDescription = form.eventDescription.value;
        const eventLink = form.eventLink.value;

        const newEvent = {
            title: eventTitle,
            date: eventDate,
            shortDesc: eventDescription,
            eventLink: eventLink,
            publishedAt: new Date().toLocaleString(),
        };

        console.log("New Event:", newEvent);
    };

    const handleDeleteEvent = async (eventId) => {
        console.log("Deleting event with ID:", eventId);
    };
    return (
        <div>
            <div className="bg-white rounded p-4 md:p-6">
                {/* Header section */}
                <div className="flex items-center justify-between border-b-2 border-[#249742] pb-4 mb-6">
                    <h1 className="text-2xl md:text-3xl text-[#249742] font-bold">
                        ইভেন্ট ম্যানেজমেন্ট
                    </h1>
                    <button
                        onClick={() => {
                            document
                                .getElementById("add_event_modal")
                                .showModal();
                        }}
                        className="cursor-pointer bg-[#249742] text-white py-2 px-4 rounded flex items-center gap-1"
                    >
                        <FaRegCalendarPlus />
                        ইভেন্ট তৈরি
                    </button>
                </div>
                {/* Header section end */}

                {/* Main content */}
                <div className="overflow-x-auto">
                    <table className="table w-full text-base">
                        <thead className="bg-[#249742] text-white">
                            <tr>
                                <th className="py-3 px-4 text-left">#</th>
                                <th className="py-3 px-4 text-left">
                                    ইভেন্ট টাইটেল
                                </th>
                                <th className="py-3 px-4 text-left">
                                    সংক্ষিপ্ত বিবরণ
                                </th>
                                <th className="py-3 px-4 text-left">তারিখ</th>
                                <th className="py-3 px-4 text-center">
                                    অ্যাকশন
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {events.length > 0 ? (
                                events.map((event, index) => (
                                    <tr
                                        key={event.id}
                                        className="hover border-b border-gray-100 last:border-b-0"
                                    >
                                        <td className="py-3 px-4 font-semibold text-gray-800">
                                            {index + 1}
                                        </td>
                                        <td className="py-3 px-4 text-[#249742] font-medium">
                                            {event.title}
                                        </td>
                                        <td className="py-3 px-4 text-gray-600">
                                            {event.shortDesc}
                                        </td>
                                        <td className="py-3 px-4 text-gray-600">
                                            {event.date}
                                        </td>
                                        <td className="py-3 px-4 text-center">
                                            <div className="flex justify-center gap-2">
                                                <a
                                                    href={event?.eventLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-sm bg-[#249742] hover:bg-green-700 text-white transition-colors duration-200"
                                                >
                                                    দেখুন
                                                </a>

                                                <button
                                                    onClick={() => {
                                                        handleDeleteEvent(
                                                            event.id
                                                        );
                                                    }}
                                                    className="btn btn-sm border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-200"
                                                >
                                                    ডিলিট
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="5"
                                        className="text-center py-6 text-gray-500 text-lg"
                                    >
                                        কোনো নোটিশ পাওয়া যায়নি।
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                {/* Main content end */}
            </div>
            {/* Modal */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="add_event_modal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-xl text-[#249742]">
                        নতুন ইভেন্ট যুক্ত করুন
                    </h3>

                    <form onSubmit={handleAddEvent} action="">
                        <div className="py-2">
                            <label className="label">
                                <span className="label-text">ইভেন্টের নাম</span>
                            </label>
                            <input
                                name="eventTitle"
                                type="text"
                                placeholder="ইভেন্টের নাম লিখুন"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="py-2">
                            <label className="label">
                                <span className="label-text">তারিখ</span>
                            </label>
                            <input
                                name="eventDate"
                                type="date"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="py-2">
                            <label className="label">
                                <span className="label-text">বর্ণনা</span>
                            </label>
                            <textarea
                                name="eventDescription"
                                className="textarea textarea-bordered w-full"
                                placeholder="ইভেন্টের বর্ণনা লিখুন"
                            ></textarea>
                        </div>
                        <div className="py-2">
                            <label className="label">
                                <span className="label-text">ইভেন্ট লিংক</span>
                            </label>
                            <input
                                name="eventLink"
                                type="url"
                                className="input input-bordered w-full"
                                placeholder="ইভেন্টের লিংক লিখুন"
                            ></input>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <button className="btn bg-[#249742] text-white border-none shadow-none">
                                যুক্ত করুন
                            </button>
                            <button
                                onClick={() => {
                                    document
                                        .getElementById("add_event_modal")
                                        .close();
                                }}
                                type="button"
                                className="btn btn-error text-white border-none shadow-none"
                            >
                                বাতিল করুন
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
            {/* Modal end */}
        </div>
    );
};

export default EventManagement;
