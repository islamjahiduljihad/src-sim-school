import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCheck, FaTimes, FaEye, FaPhoneVolume } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Swal from "sweetalert2";

const AdminContact = () => {
    const [selectedContact, setSelectedContact] = useState(null);
    const [showPhoneModal, setShowPhoneModal] = useState(false);
    const [contacts, setContacts] = useState([]);

    console.log("Contact data:", contacts);

    useEffect(() => {
        fetch("http://localhost:3000/contacts")
            .then((res) => res.json())
            .then((data) => {
                setContacts(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="p-4 sm:p-8 bg-white rounded-xl shadow w-full">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <h1 className="text-2xl sm:text-3xl font-bold text-[#249742] border-b-2 border-[#249742] pb-2">
                    যোগাযোগ তালিকা
                </h1>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full text-sm sm:text-base">
                    <thead className="bg-[#249742] text-white text-left">
                        <tr>
                            <th className="py-3 px-2">#</th>
                            <th className="py-3 px-2">নাম</th>
                            <th className="py-3 px-2">ফোন</th>
                            <th className="py-3 px-2">বিষয়</th>
                            <th className="py-3 px-2">তারিখ</th>
                            <th className="py-3 px-2">স্ট্যাটাস</th>
                            <th className="py-3 px-2">অ্যাকশন</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact, index) => (
                            <tr
                                key={contact.id}
                                className="hover:bg-gray-50 transition"
                            >
                                <td className="py-1 px-2 font-semibold">
                                    {index + 1}
                                </td>
                                <td className="py-1 px-2 text-[#249742] font-medium">
                                    {contact.name}
                                </td>
                                <td className="py-1 px-2">{contact?.phone}</td>
                                <td className="py-1 px-2">
                                    {contact?.subject}
                                </td>
                                <td className="py-1 px-2">{contact?.date}</td>
                                <td className="py-1 px-2">
                                    <p
                                        className={`${
                                            contact?.contact_status == "success"
                                                ? "bg-success"
                                                : contact?.contact_status ==
                                                  "failed"
                                                ? "bg-error"
                                                : "bg-warning"
                                        } px-1 text-center rounded-xl`}
                                    >
                                        {contact?.contact_status == "success"
                                            ? "সফল"
                                            : contact?.contact_status ==
                                              "failed"
                                            ? "অসফল"
                                            : "পেন্ডিং"}
                                    </p>
                                </td>
                                <td className="py-3 px-4">
                                    <div className="flex gap-2">
                                        <button
                                            onClick={async () => {
                                                const result = await axios.put(
                                                    `http://localhost:3000/contact/${contact?._id}`,
                                                    {
                                                        contact_status:
                                                            "success",
                                                    }
                                                );

                                                if (
                                                    result.data.success === true
                                                ) {
                                                    Swal.fire({
                                                        title: "সফল",
                                                        text: "যোগাযোগ সফল হয়েছে তাই এইটার কার্যক্রম বন্ধ করা হলো।",
                                                        icon: "success",
                                                        confirmButtonText:
                                                            "বন্ধ করুন",
                                                    });
                                                } else {
                                                    console.log(
                                                        result?.message?.message
                                                    );
                                                }
                                            }}
                                            disabled={
                                                contact?.contact_status ==
                                                "success"
                                            }
                                            className={`flex items-center gap-1 bg-[#249742] hover:bg-[#1f7c38] text-white px-3 py-1 rounded text-sm transition btn btn-sm`}
                                        >
                                            <FaCheck /> সফল
                                        </button>

                                        <button
                                            onClick={async () => {
                                                const result = await axios.put(
                                                    `http://localhost:3000/contact/${contact?._id}`,
                                                    {
                                                        contact_status:
                                                            "failed",
                                                    }
                                                );

                                                if (
                                                    result.data.success === true
                                                ) {
                                                    Swal.fire({
                                                        title: "সফল",
                                                        text: "যোগাযোগ অসফল হয়েছে তাই এইটার কার্যক্রম বন্ধ করা হলো।",
                                                        icon: "success",
                                                        confirmButtonText:
                                                            "বন্ধ করুন",
                                                    });
                                                } else {
                                                    console.log(
                                                        result?.message?.message
                                                    );
                                                }
                                            }}
                                            disabled={
                                                contact?.contact_status !==
                                                "pending"
                                            }
                                            className={`flex items-center gap-1 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-3 py-1 rounded text-sm transition btn btn-sm ${
                                                contact?.contact_status !==
                                                "pending"
                                                    ? "opacity-50 cursor-not-allowed"
                                                    : ""
                                            }`}
                                        >
                                            <FaTimes /> ব্যর্থ
                                        </button>
                                        <button
                                            onClick={() =>
                                                setSelectedContact(contact)
                                            }
                                            className="flex items-center gap-1 border border-gray-500 text-gray-700 hover:bg-gray-100 px-3 py-1 rounded text-sm transition btn btn-sm"
                                        >
                                            <FaEye /> বিস্তারিত
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {contacts.length === 0 && (
                            <tr>
                                <td
                                    colSpan="7"
                                    className="text-center py-4 text-gray-500"
                                >
                                    কোনো যোগাযোগ পাওয়া যায়নি।
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* বিস্তারিত Modal */}
            {selectedContact && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000c2] bg-opacity-50 p-4">
                    <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
                        <h2 className="text-xl font-bold text-[#249742] mb-4 border-b pb-2">
                            বিস্তারিত তথ্য
                        </h2>
                        <div className="space-y-2 text-sm sm:text-base">
                            <p>
                                <strong>নাম:</strong> {selectedContact.name}
                            </p>
                            <p>
                                <strong>ফোন:</strong> {selectedContact.phone}
                            </p>
                            <p>
                                <strong>ইমেইল:</strong> {selectedContact.email}
                            </p>
                            <p>
                                <strong>বিষয়:</strong> {selectedContact.subject}
                            </p>
                            <p>
                                <strong>তারিখ:</strong> {selectedContact.date}
                            </p>
                            <p>
                                <strong>বার্তা:</strong>{" "}
                                {selectedContact.message}
                            </p>
                        </div>
                        <button
                            onClick={() => setSelectedContact(null)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
                        >
                            ×
                        </button>

                        <div className="grid grid-cols-2 gap-2 mt-4">
                            <a
                                className="flex items-center justify-center gap-2 bg-[#249742] hover:bg-[#1f7c38] text-white px-3 py-2 rounded transition"
                                href={`mailto:${selectedContact.email}`}
                            >
                                <FiMail /> মেইল করুন
                            </a>
                            <button
                                className="flex items-center justify-center gap-2 bg-[#249742] hover:bg-[#1f7c38] text-white px-3 py-2 rounded transition"
                                onClick={() => setShowPhoneModal(true)}
                            >
                                <FaPhoneVolume /> কল করুন
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* কল করুন Modal */}
            {showPhoneModal && selectedContact && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
                    <div className="bg-white rounded-lg p-6 max-w-xs w-full text-center relative shadow-xl">
                        <h3 className="text-2xl font-semibold text-[#249742] mb-4">
                            কল করার নম্বর
                        </h3>
                        <p className="text-3xl font-bold text-gray-800">
                            {selectedContact.phone}
                        </p>
                        <button
                            onClick={() => setShowPhoneModal(false)}
                            className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-red-500"
                        >
                            ×
                        </button>
                        <button
                            className="mt-4 bg-[#249742] text-white px-4 py-2 rounded hover:bg-[#1f7c38] transition"
                            onClick={() => setShowPhoneModal(false)}
                        >
                            বুঝেছি
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminContact;
