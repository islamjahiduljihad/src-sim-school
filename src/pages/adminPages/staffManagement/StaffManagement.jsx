const StaffManagement = () => {
    const handleAddStaff = (e) => {
        e.preventDefault();

        const form = e.target;

        const staffName = form.staffName.value;
        const staffPhoto = form.staffPhoto.value;
        const staffMobile = form.staffMobile.value;
        const staffDOB = form.staffDOB.value;
        const staffAddress = form.staffAddress.value;
        const joiningDate = form.joiningDate.value;

        const newStaff = {
            staffName,
            staffPhoto,
            staffMobile,
            staffDOB,
            staffAddress,
            joiningDate,
            addedAt: new Date().toLocaleString(),
        };

        console.log("New Staff Added:", newStaff);
    };

    const staffs = [
        {
            id: 1,
            name: "John Doe",
            photo: "https://via.placeholder.com/150",
            mobile: "1234567890",
            dob: "1990-01-01",
            address: "123 Main St, City, Country",
            joiningDate: "2023-01-01",
        },
        {
            id: 2,
            name: "Jane Smith",
            photo: "https://via.placeholder.com/150",
            mobile: "0987654321",
            dob: "1992-02-02",
            address: "456 Elm St, City, Country",
            joiningDate: "2023-02-01",
        },
        {
            id: 3,
            name: "Alice Johnson",
            photo: "https://via.placeholder.com/150",
            mobile: "1122334455",
            dob: "1995-03-03",
            address: "789 Oak St, City, Country",
            joiningDate: "2023-03-01",
        },
    ];
    return (
        <div className="bg-white p-4 md:p-6 rounded-lg">
            <div className="shadow-xl md:shadow-none p-4 border md:border-none border-gray-200 rounded-lg flex flex-col md:flex-row items-center justify-between text-center md:text-left">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#249742]">
                        স্টাফ ম্যানেজমেন্ট
                    </h1>
                    <p>এখানে আপনি স্টাফদের তথ্য পরিচালনা করতে পারবেন।</p>
                </div>
                <button
                    onClick={() => {
                        const modal =
                            document.getElementById("staff_add_modal");
                        modal.showModal();
                    }}
                    className="btn bg-[#249742] text-white"
                >
                    স্টাফ যোগ
                </button>
            </div>

            {/* Staff list */}

            <div className="overflow-x-auto mt-4">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-[#249742] text-white">
                            <th>#</th>
                            <th>ছবি</th>
                            <th>নাম</th>
                            <th>মোবাইল</th>
                            <th>জন্ম তারিখ</th>
                            <th>একশন</th>
                        </tr>
                    </thead>
                    <tbody>
                        {staffs?.map((staff, index) => (
                            <tr>
                                <td>1</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={staff?.photo}
                                                    alt={staff?.name}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h1>{staff?.name}</h1>
                                </td>
                                <td>
                                    <h1>{staff?.mobile}</h1>
                                </td>
                                <td>
                                    <h1>{staff?.dob}</h1>
                                </td>
                                <td>
                                    <button className="btn btn-sm bg-[#249742] text-white">
                                        ডিটেইলস দেখুন
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Add staff modal */}
            <dialog id="staff_add_modal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-xl text-[#249742]">
                        নতুন স্টাফ যোগ করুন
                    </h3>
                    <div>
                        <form onSubmit={handleAddStaff} action="">
                            <div className="py-2">
                                <label className="label">
                                    <span className="label-text">
                                        স্টাফের নাম
                                    </span>
                                </label>
                                <input
                                    name="staffName"
                                    type="text"
                                    placeholder="স্টাফের নাম লিখুন"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div className="py-2">
                                <label className="label">
                                    <span className="label-text">
                                        ফটো ইউআরএল
                                    </span>
                                </label>
                                <input
                                    name="staffPhoto"
                                    type="url"
                                    placeholder="ফটো ইউআরএল লিখুন"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div className="py-2">
                                <label className="label">
                                    <span className="label-text">
                                        মোবাইল নম্বর
                                    </span>
                                </label>
                                <input
                                    name="staffMobile"
                                    className="input input-bordered w-full"
                                    placeholder="স্টাফের মোবাইল নম্বর লিখুন"
                                ></input>
                            </div>
                            <div className="py-2">
                                <label className="label">
                                    <span className="label-text">
                                        জন্ম তারিখ
                                    </span>
                                </label>
                                <input
                                    name="staffDOB"
                                    type="date"
                                    className="input input-bordered w-full"
                                    placeholder="জন্ম তারিখ লিখুন"
                                ></input>
                            </div>
                            <div className="py-2">
                                <label className="label">
                                    <span className="label-text">ঠিকানা</span>
                                </label>
                                <input
                                    name="staffAddress"
                                    type="text"
                                    className="input input-bordered w-full"
                                    placeholder="ঠিকানা লিখুন"
                                ></input>
                            </div>
                            <div className="py-2">
                                <label className="label">
                                    <span className="label-text">
                                        যোগদানের তারিখ
                                    </span>
                                </label>
                                <input
                                    name="joiningDate"
                                    type="date"
                                    className="input input-bordered w-full"
                                    placeholder="যোগদানের তারিখ লিখুন"
                                ></input>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <button className="btn bg-[#249742] text-white border-none shadow-none">
                                    যুক্ত করুন
                                </button>
                                <button
                                    onClick={() => {
                                        document
                                            .getElementById("staff_add_modal")
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
                </div>
            </dialog>
            {/* Add staff modal end */}
        </div>
    );
};

export default StaffManagement;
