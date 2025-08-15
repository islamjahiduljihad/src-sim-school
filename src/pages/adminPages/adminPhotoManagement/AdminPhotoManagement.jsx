import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FaPlus, FaEye, FaEdit, FaTrash } from "react-icons/fa";

const AdminPhotoManagement = () => {
    const [photos, setPhotos] = useState([]);
    const [modalType, setModalType] = useState(null);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [formData, setFormData] = useState({
        image_title: "",
        short_description: "",
        image_url: "",
        category: "",
    });

    const fetchPhotos = () => {
        fetch("http://localhost:3000/photos")
            .then((res) => res.json())
            .then((data) => setPhotos(data));
    };

    useEffect(() => {
        fetchPhotos();
    }, []);

    const openModal = (type, photo = null) => {
        setModalType(type);
        setSelectedPhoto(photo);
        setFormData({
            image_title: photo?.image_title || "",
            image_url: photo?.image_url || "",
            short_description: photo?.short_description || "",
            category: photo?.category || "",
        });
    };

    const closeModal = () => {
        setModalType(null);
        setSelectedPhoto(null);
        setFormData({
            image_title: "",
            image_url: "",
            short_description: "",
            category: "",
        });
    };

    const handleSubmit = async () => {
        const payload = {
            ...formData,
            date: new Date().toISOString().split("T")[0],
        };
        try {
            console.log("Submitting photo:", payload);
            const res = await axios.post(
                "http://localhost:3000/photo",
                payload
            );
            if (res.data.insertedId) {
                Swal.fire("Success", "ছবি সংরক্ষণ করা হয়েছে", "success");
                fetchPhotos();
                closeModal();
            }
        } catch {
            Swal.fire("Error", "ছবি সংরক্ষণ ব্যর্থ হয়েছে", "error");
        }
    };

    const handleUpdate = async () => {
        try {
            const res = await axios.put(
                `http://localhost:3000/photo/${selectedPhoto._id}`,
                formData
            );
            if (res.data?.success === true) {
                Swal.fire("Updated", "ছবি আপডেট হয়েছে", "success");
                fetchPhotos();
                closeModal();
            }
        } catch {
            Swal.fire("Error", "আপডেট ব্যর্থ হয়েছে", "error");
        }
    };

    const handleDelete = async (id) => {
        const confirm = await Swal.fire({
            title: "আপনি কি নিশ্চিত?",
            text: "এই ছবি মুছে ফেলা হবে!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "হ্যাঁ, মুছে ফেলুন!",
        });
        if (confirm.isConfirmed) {
            await axios.delete(`http://localhost:3000/photo/${id}`);
            fetchPhotos();
        }
    };

    return (
        <div className="p-4 sm:p-8 bg-white rounded-xl shadow">
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center mb-6 gap-4 shadow-lg md:shadow-none p-4 md:p-0 rounded-lg border md:border-none border-gray-200">
                <h1 className="text-2xl md:text-3xl font-bold text-[#249742] border-b-2 border-[#249742] pb-2">
                    ফটো গ্যালারী ম্যানেজমেন্ট
                </h1>
                <button
                    onClick={() => openModal("add")}
                    className="btn bg-[#249742] hover:bg-[#1f7c38] text-white"
                >
                    <FaPlus className="mr-2" /> নতুন ছবি যোগ করুন
                </button>
            </div>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {photos.map((photo) => (
                    <div
                        key={photo._id}
                        className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition"
                    >
                        <img
                            src={photo.image_url}
                            alt={photo.image_title}
                            className="rounded-t-lg w-full h-48 object-cover"
                        />
                        <div className="p-4 space-y-2">
                            <h2 className="text-lg font-semibold text-[#249742]">
                                {photo.image_title}
                            </h2>
                            <p className="text-sm text-gray-600">
                                আপলোড: {photo.date}
                            </p>
                            <p>বিবরণ: {photo.short_description}</p>
                            <p>বিভাগ: {photo.category}</p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                <button
                                    onClick={() => openModal("view", photo)}
                                    className="flex items-center gap-1 bg-[#249742] hover:bg-[#1f7c38] text-white px-3 py-1 rounded text-sm"
                                >
                                    <FaEye /> View
                                </button>
                                <button
                                    onClick={() => openModal("edit", photo)}
                                    className="flex items-center gap-1 border border-[#249742] text-[#249742] hover:bg-[#249742] hover:text-white px-3 py-1 rounded text-sm"
                                >
                                    <FaEdit /> Update
                                </button>
                                <button
                                    onClick={() => handleDelete(photo._id)}
                                    className="flex items-center gap-1 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-3 py-1 rounded text-sm"
                                >
                                    <FaTrash /> Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                {photos.length === 0 && (
                    <p className="text-gray-500 text-center col-span-full py-4">
                        কোনো ছবি আপলোড করা হয়নি।
                    </p>
                )}
            </div>

            {/* MODAL */}
            {modalType && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
                        >
                            ✕
                        </button>

                        {modalType === "view" ? (
                            <div className="text-center space-y-4">
                                <img
                                    src={selectedPhoto?.image_url}
                                    alt={selectedPhoto?.image_title}
                                    className="w-full rounded-lg object-cover h-64"
                                />
                                <h2 className="text-xl font-bold text-[#249742]">
                                    {selectedPhoto?.image_title}
                                </h2>
                                <p className="text-sm text-gray-600">
                                    আপলোড তারিখ: {selectedPhoto?.date}
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <h2 className="text-xl font-bold text-[#249742]">
                                    {modalType === "add"
                                        ? "নতুন ছবি যোগ করুন"
                                        : "ছবি আপডেট করুন"}
                                </h2>
                                <input
                                    type="text"
                                    placeholder="ছবির শিরোনাম"
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                    value={formData.image_title}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            image_title: e.target.value,
                                        })
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder="ছবির সংক্ষিপ্ত বিবরণ"
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                    value={formData.short_description}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            short_description: e.target.value,
                                        })
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder="ছবির URL"
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                    value={formData.image_url}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            image_url: e.target.value,
                                        })
                                    }
                                />
                                <select
                                    className="select select-bordered w-full"
                                    name="category"
                                    id=""
                                >
                                    <option value="">
                                        ক্যাটাগরি নির্বাচন করুন
                                    </option>
                                    <option value="campus">ক্যাম্পাস</option>
                                    <option value="events">অনুষ্ঠান</option>
                                    <option value="activities">
                                        কার্যক্রম
                                    </option>
                                </select>
                                <button
                                    onClick={
                                        modalType === "add"
                                            ? handleSubmit
                                            : handleUpdate
                                    }
                                    className="bg-[#249742] hover:bg-[#1f7c38] text-white px-4 py-2 rounded w-full"
                                >
                                    {modalType === "add"
                                        ? "যোগ করুন"
                                        : "আপডেট করুন"}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminPhotoManagement;
