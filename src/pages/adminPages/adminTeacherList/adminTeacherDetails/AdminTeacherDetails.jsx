import React, { useState, useEffect } from "react";
import {
    MailCheck,
    Edit,
    Trash2,
    Printer,
    User,
    Calendar,
    Droplet,
    CreditCard,
    BookOpenText,
    Flag,
    Phone,
    Mail,
    Home,
    MapPin,
    HeartHandshake,
    Briefcase,
    GraduationCap,
    Laptop,
    Users,
    StickyNote,
    Sigma,
} from "lucide-react";

// Shadcn/ui Card and Button components (simplified for direct use)
const Card = ({ children, className }) => (
    <div
        className={`rounded-xl border bg-card text-card-foreground shadow ${className}`}
    >
        <div className="p-6">{children}</div>
    </div>
);

const Button = ({
    children,
    onClick,
    variant = "default",
    type = "button",
    className,
}) => {
    let baseClasses =
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2";
    let variantClasses = "";

    switch (variant) {
        case "default":
            variantClasses =
                "bg-[#249742] text-white hover:bg-[#1e7f38] shadow-md"; // Your theme color
            break;
        case "info":
            variantClasses =
                "bg-blue-500 text-white hover:bg-blue-600 shadow-md";
            break;
        case "destructive":
            variantClasses = "bg-red-500 text-white hover:bg-red-600 shadow-md";
            break;
        case "outline":
            variantClasses =
                "border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm";
            break;
        default:
            variantClasses =
                "bg-[#249742] text-white hover:bg-[#1e7f38] shadow-md";
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseClasses} ${variantClasses} ${className}`}
        >
            {children}
        </button>
    );
};

// Mock Link component for mailto
const Link = ({ to, children, className }) => (
    <a href={to} className={className}>
        {children}
    </a>
);

const App = () => {
    const [teacher, setTeacher] = useState({
        birth_date: "২০২৫-০৭-১৭",
        blood_group: "A+",
        computer_skills: "এম এস অফিস, ইন্টারনেট ব্রাউজিং, নেটওয়ার্কিং",
        department: "জেনারেল",
        designation: "সহকারী শিক্ষক",
        education: "মাস্টার্স ইন সি এস ই",
        email: "zakir@gmail.com",
        emergency_contact_number: "০১৮৬৫৪৯৫৩৬৪",
        emergency_contact_name: "রহিম মিয়া",
        emergency_contact_relationship: "পিতা",
        extra_curricular_activities: "স্কাউটস, রেড ক্রিসেন্ট",
        gender: "পুরুষ",
        joining_date: "২০২৫-০৭-৩০",
        marital_status: "বিবাহিত",
        name_bn: "জাকির হোসাইন",
        name_en: "Zakir Hossain",
        national_id: "৬৫৪৩০২৮৯৫৪",
        nationality: "বাংলাদেশী",
        permanent_address: "শ্রীরায়েরচর, দাউদকান্দি, কুমিল্লা",
        phone: "০১৯৬৫৪৮৫২১০",
        photo_url: "https://i.ibb.co/Fk2sWQyS/cst-09.jpg",
        present_address: "শ্রীরায়েরচর, দাউদকান্দি, কুমিল্লা",
        religion: "ইসলাম",
        subjectList: "আইসিটি, ইংলিশ, বিজ্ঞান",
        teacher_id: "T-01",
        teacher_registration_number: "৫৪৮৫৬৯৮৩",
    });

    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [updatedTeacherData, setUpdatedTeacherData] = useState({});

    useEffect(() => {
        // Initialize updatedTeacherData with current teacher data when modal opens
        if (isUpdateModalOpen) {
            setUpdatedTeacherData({ ...teacher });
        }
    }, [isUpdateModalOpen, teacher]);

    const handleUpdateChange = (e) => {
        const { name, value } = e.target;
        setUpdatedTeacherData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send updatedTeacherData to your backend
        console.log("Updated Teacher Data:", updatedTeacherData);
        setTeacher(updatedTeacherData); // Update local state for demonstration
        setIsUpdateModalOpen(false);
        // In a real application, you'd handle success/error messages here
    };

    const handlePrintSummary = () => {
        console.log("Printing summary for:", teacher.name_bn);
        // In a real application, you would trigger a print functionality
        window.print();
    };

    // Helper function to get icon for each field
    const getIconForField = (label) => {
        switch (label) {
            case "শিক্ষক আইডি":
                return <User size={18} className="mr-2 text-[#249742]" />;
            case "নাম (বাংলা)":
                return <User size={18} className="mr-2 text-[#249742]" />;
            case "নাম (ইংরেজি)":
                return <User size={18} className="mr-2 text-[#249742]" />;
            case "লিঙ্গ":
                return <Users size={18} className="mr-2 text-[#249742]" />;
            case "জন্ম তারিখ":
                return <Calendar size={18} className="mr-2 text-[#249742]" />;
            case "রক্তের গ্রুপ":
                return <Droplet size={18} className="mr-2 text-[#249742]" />;
            case "জাতীয় পরিচয়পত্র":
                return <CreditCard size={18} className="mr-2 text-[#249742]" />;
            case "ধর্ম":
                return (
                    <BookOpenText size={18} className="mr-2 text-[#249742]" />
                );
            case "জাতীয়তা":
                return <Flag size={18} className="mr-2 text-[#249742]" />;
            case "ফোন":
                return <Phone size={18} className="mr-2 text-[#249742]" />;
            case "ইমেইল":
                return <Mail size={18} className="mr-2 text-[#249742]" />;
            case "বৈবাহিক অবস্থা":
                return (
                    <HeartHandshake size={18} className="mr-2 text-[#249742]" />
                );
            case "যোগদানের তারিখ":
                return <Calendar size={18} className="mr-2 text-[#249742]" />;
            case "পদবি":
                return <Briefcase size={18} className="mr-2 text-[#249742]" />;
            case "বিভাগ":
                return <Users size={18} className="mr-2 text-[#249742]" />;
            case "শিক্ষাগত যোগ্যতা":
                return (
                    <GraduationCap size={18} className="mr-2 text-[#249742]" />
                );
            case "এক্সট্রা কারিকুলার অ্যাক্টিভিটিস":
                return <StickyNote size={18} className="mr-2 text-[#249742]" />;
            case "কম্পিউটার সম্পর্কিত দক্ষতা":
                return <Laptop size={18} className="mr-2 text-[#249742]" />;
            case "বর্তমান ঠিকানা":
                return <Home size={18} className="mr-2 text-[#249742]" />;
            case "স্থায়ী ঠিকানা":
                return <MapPin size={18} className="mr-2 text-[#249742]" />;
            case "জরুরি যোগাযোগের নাম":
                return <User size={18} className="mr-2 text-[#249742]" />;
            case "জরুরি যোগাযোগের নম্বর":
                return <Phone size={18} className="mr-2 text-[#249742]" />;
            case "জরুরি যোগাযোগের সম্পর্ক":
                return (
                    <HeartHandshake size={18} className="mr-2 text-[#249742]" />
                );
            case "সাবজেক্ট লিস্ট":
                return <Sigma size={18} className="mr-2 text-[#249742]" />;
            default:
                return <User size={18} className="mr-2 text-[#249742]" />;
        }
    };

    return (
        <div className="p-4 sm:p-6 md:p-8 bg-gray-50 min-h-screen">
            <Card className="max-w-5xl mx-auto border-gray-200">
                {/* Teacher Header Section */}
                <div className="flex flex-col md:flex-row items-center gap-6 pb-6 border-b border-gray-200 mb-6">
                    <div className="flex-shrink-0">
                        <img
                            src={
                                teacher?.photo_url ||
                                "https://placehold.co/128x128/e2e8f0/64748b?text=ছবি"
                            }
                            alt={teacher?.name_bn || "শিক্ষক ছবি"}
                            className="p-1 w-32 h-32 rounded-full border-4 border-[#249742] object-cover shadow-md"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src =
                                    "https://placehold.co/128x128/e2e8f0/64748b?text=ছবি";
                            }}
                        />
                    </div>
                    <div className="text-center md:text-left flex-grow">
                        <h2 className="text-3xl font-bold text-gray-800 mb-1">
                            {teacher?.name_bn}{" "}
                            <span className="text-gray-500 text-xl">
                                ({teacher.name_en})
                            </span>
                        </h2>
                        <p className="mt-1 text-[#249742] font-semibold text-lg">
                            {teacher.designation}, {teacher.department}
                        </p>
                        <p className="mt-1 font-semibold text-gray-700">
                            শিক্ষক আইডি:{" "}
                            <span className="text-gray-600">
                                {teacher?.teacher_id}
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
                        {/* Mail Button */}
                        <Link
                            to={`mailto:${teacher.email}`}
                            className="btn btn-lg rounded-lg bg-[#249742] text-white hover:bg-[#1e7f38] px-4 py-2"
                        >
                            <MailCheck size={18} className="mr-2" /> মেইল করুন
                        </Link>
                        {/* Update Info Button */}
                        <Button
                            variant="info"
                            onClick={() => setIsUpdateModalOpen(true)}
                        >
                            <Edit size={18} className="mr-2" /> তথ্য আপডেট
                        </Button>
                        {/* Remove Button (Placeholder) */}
                        <Button variant="destructive">
                            <Trash2 size={18} className="mr-2" /> রিমুভ করুন
                        </Button>
                    </div>
                </div>

                {/* Teacher Information Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 mb-8">
                    {/* Personal Information */}
                    <h3 className="col-span-full text-xl font-semibold text-gray-700 mt-4 mb-2 border-b pb-2">
                        ব্যক্তিগত তথ্য
                    </h3>
                    <div className="flex items-center p-2 bg-gray-50 rounded-md shadow-sm">
                        {getIconForField("শিক্ষক আইডি")}
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-500 font-medium">
                                শিক্ষক আইডি
                            </span>
                            <span className="font-semibold text-gray-800 text-sm">
                                {teacher.teacher_id}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center p-2 bg-gray-50 rounded-md shadow-sm">
                        {getIconForField("নাম (বাংলা)")}
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-500 font-medium">
                                নাম (বাংলা)
                            </span>
                            <span className="font-semibold text-gray-800 text-sm">
                                {teacher.name_bn}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center p-2 bg-gray-50 rounded-md shadow-sm">
                        {getIconForField("নাম (ইংরেজি)")}
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-500 font-medium">
                                নাম (ইংরেজি)
                            </span>
                            <span className="font-semibold text-gray-800 text-sm">
                                {teacher.name_en}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center p-2 bg-gray-50 rounded-md shadow-sm">
                        {getIconForField("লিঙ্গ")}
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-500 font-medium">
                                লিঙ্গ
                            </span>
                            <span className="font-semibold text-gray-800 text-sm">
                                {teacher.gender}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center p-2 bg-gray-50 rounded-md shadow-sm">
                        {getIconForField("জন্ম তারিখ")}
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-500 font-medium">
                                জন্ম তারিখ
                            </span>
                            <span className="font-semibold text-gray-800 text-sm">
                                {teacher.birth_date}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center p-2 bg-gray-50 rounded-md shadow-sm">
                        {getIconForField("রক্তের গ্রুপ")}
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-500 font-medium">
                                রক্তের গ্রুপ
                            </span>
                            <span className="font-semibold text-gray-800 text-sm">
                                {teacher.blood_group}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center p-2 bg-gray-50 rounded-md shadow-sm">
                        {getIconForField("জাতীয় পরিচয়পত্র")}
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-500 font-medium">
                                জাতীয় পরিচয়পত্র
                            </span>
                            <span className="font-semibold text-gray-800 text-sm">
                                {teacher.national_id}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center p-2 bg-gray-50 rounded-md shadow-sm">
                        {getIconForField("ধর্ম")}
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-500 font-medium">
                                ধর্ম
                            </span>
                            <span className="font-semibold text-gray-800 text-sm">
                                {teacher.religion}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center p-2 bg-gray-50 rounded-md shadow-sm">
                        {getIconForField("জাতীয়তা")}
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-500 font-medium">
                                জাতীয়তা
                            </span>
                            <span className="font-semibold text-gray-800 text-sm">
                                {teacher.nationality}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center p-2 bg-gray-50 rounded-md shadow-sm">
                        {getIconForField("ফোন")}
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-500 font-medium">
                                ফোন
                            </span>
                            <span className="font-semibold text-gray-800 text-sm">
                                {teacher.phone}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center p-2 bg-gray-50 rounded-md shadow-sm">
                        {getIconForField("ইমেইল")}
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-500 font-medium">
                                ইমেইল
                            </span>
                            <span className="font-semibold text-gray-800 text-sm">
                                {teacher.email}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center p-2 bg-gray-50 rounded-md shadow-sm">
                        {getIconForField("বৈবাহিক অবস্থা")}
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-500 font-medium">
                                বৈবাহিক অবস্থা
                            </span>
                            <span className="font-semibold text-gray-800 text-sm">
                                {teacher.marital_status}
                            </span>
                        </div>
                    </div>

                    <div className="col-span-full">
                        {/* Professional Information */}
                        <h3 className="col-span-full text-xl font-semibold text-gray-700 mt-4 mb-2 border-b pb-2">
                            পেশাগত তথ্য
                        </h3>
                        <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="flex items-center p-2 bg-gray-50 rounded-md shadow-sm">
                                {getIconForField("যোগদানের তারিখ")}
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-500 font-medium">
                                        যোগদানের তারিখ
                                    </span>
                                    <span className="font-semibold text-gray-800 text-sm">
                                        {teacher.joining_date}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center p-2 bg-gray-50 rounded-md shadow-sm">
                                {getIconForField("পদবি")}
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-500 font-medium">
                                        পদবি
                                    </span>
                                    <span className="font-semibold text-gray-800 text-sm">
                                        {teacher.designation}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center p-2 bg-gray-50 rounded-md shadow-sm">
                                {getIconForField("শিক্ষক নিবন্ধন নম্বর")}
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-500 font-medium">
                                        শিক্ষক নিবন্ধন নম্বর
                                    </span>
                                    <span className="font-semibold text-gray-800 text-sm">
                                        {teacher.teacher_registration_number}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center p-2 bg-gray-50 rounded-md shadow-sm">
                                {getIconForField("শিক্ষাগত যোগ্যতা")}
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-500 font-medium">
                                        শিক্ষাগত যোগ্যতা
                                    </span>
                                    <span className="font-semibold text-gray-800 text-sm">
                                        {teacher.education}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center p-2 bg-gray-50 rounded-md shadow-sm col-span-1 sm:col-span-2">
                                {getIconForField(
                                    "এক্সট্রা কারিকুলার অ্যাক্টিভিটিস"
                                )}
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-500 font-medium">
                                        এক্সট্রা কারিকুলার অ্যাক্টিভিটিস
                                    </span>
                                    <span className="font-semibold text-gray-800 text-sm">
                                        {teacher.extra_curricular_activities}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center p-2 bg-gray-50 rounded-md shadow-sm col-span-1 sm:col-span-2">
                                {getIconForField("কম্পিউটার সম্পর্কিত দক্ষতা")}
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-500 font-medium">
                                        কম্পিউটার সম্পর্কিত দক্ষতা
                                    </span>
                                    <span className="font-semibold text-gray-800 text-sm">
                                        {teacher.computer_skills}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Address Information */}
                        <h3 className="col-span-full text-xl font-semibold text-gray-700 mt-4 mb-2 border-b pb-2">
                            ঠিকানা
                        </h3>
                        <div className="flex items-center p-2 bg-gray-50 rounded-md shadow-sm">
                            {getIconForField("বর্তমান ঠিকানা")}
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500 font-medium">
                                    বর্তমান ঠিকানা
                                </span>
                                <span className="font-semibold text-gray-800 text-sm">
                                    {teacher.present_address}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center p-2 bg-gray-50 rounded-md shadow-sm">
                            {getIconForField("স্থায়ী ঠিকানা")}
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500 font-medium">
                                    স্থায়ী ঠিকানা
                                </span>
                                <span className="font-semibold text-gray-800 text-sm">
                                    {teacher.permanent_address}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Emergency Contact */}
                    <h3 className="col-span-full text-xl font-semibold text-gray-700 mt-4 mb-2 border-b pb-2">
                        জরুরি যোগাযোগ
                    </h3>
                    <div className="flex items-center p-2 bg-gray-50 rounded-md shadow-sm">
                        {getIconForField("জরুরি যোগাযোগের নাম")}
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-500 font-medium">
                                জরুরি যোগাযোগের নাম
                            </span>
                            <span className="font-semibold text-gray-800 text-sm">
                                {teacher.emergency_contact_name}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center p-2 bg-gray-50 rounded-md shadow-sm">
                        {getIconForField("জরুরি যোগাযোগের নম্বর")}
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-500 font-medium">
                                জরুরি যোগাযোগের নম্বর
                            </span>
                            <span className="font-semibold text-gray-800 text-sm">
                                {teacher.emergency_contact_number}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center p-2 bg-gray-50 rounded-md shadow-sm">
                        {getIconForField("জরুরি যোগাযোগের সম্পর্ক")}
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-500 font-medium">
                                জরুরি যোগাযোগের সম্পর্ক
                            </span>
                            <span className="font-semibold text-gray-800 text-sm">
                                {teacher.emergency_contact_relationship}
                            </span>
                        </div>
                    </div>

                    {/* School & Subject Info */}
                    <h3 className="col-span-full text-xl font-semibold text-gray-700 mt-4 mb-2 border-b pb-2">
                        স্কুল ও বিষয়
                    </h3>
                    <div className="flex items-center p-2 bg-gray-50 rounded-md shadow-sm">
                        {getIconForField("বিভাগ")}
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-500 font-medium">
                                বিভাগ
                            </span>
                            <span className="font-semibold text-gray-800 text-sm">
                                {teacher.department}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center p-2 bg-gray-50 rounded-md shadow-sm col-span-1 sm:col-span-2">
                        {getIconForField("সাবজেক্ট লিস্ট")}
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-500 font-medium">
                                সাবজেক্ট লিস্ট
                            </span>
                            <span className="font-semibold text-gray-800 text-sm">
                                {teacher.subjectList}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Print Summary Button */}
                <div className="flex justify-center mt-6">
                    <Button variant="default" onClick={handlePrintSummary}>
                        <Printer size={18} className="mr-2" /> সামারি প্রিন্ট
                        করুন
                    </Button>
                </div>
            </Card>

            {/* Update Teacher Info Modal */}
            {isUpdateModalOpen && (
                <dialog
                    id="update_teacher_modal"
                    className="modal modal-bottom sm:modal-middle"
                    open
                >
                    <div className="modal-box max-w-3xl">
                        <h3 className="font-bold text-lg mb-4 text-[#249742]">
                            শিক্ষকের তথ্য আপডেট করুন
                        </h3>
                        <form
                            onSubmit={handleUpdateSubmit}
                            className="space-y-4"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {/* Individual fields for update */}
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            নাম (বাংলা)
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name_bn"
                                        value={updatedTeacherData.name_bn || ""}
                                        onChange={handleUpdateChange}
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            নাম (ইংরেজি)
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name_en"
                                        value={updatedTeacherData.name_en || ""}
                                        onChange={handleUpdateChange}
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            লিঙ্গ
                                        </span>
                                    </label>
                                    <select
                                        name="gender"
                                        value={updatedTeacherData.gender || ""}
                                        onChange={handleUpdateChange}
                                        className="select select-bordered w-full"
                                        required
                                    >
                                        <option value="" disabled>
                                            নির্বাচন করুন
                                        </option>
                                        <option value="পুরুষ">পুরুষ</option>
                                        <option value="মহিলা">মহিলা</option>
                                        <option value="অন্যান্য">
                                            অন্যান্য
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            জন্ম তারিখ
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="birth_date"
                                        value={
                                            updatedTeacherData.birth_date || ""
                                        }
                                        onChange={handleUpdateChange}
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            রক্তের গ্রুপ
                                        </span>
                                    </label>
                                    <select
                                        name="blood_group"
                                        value={
                                            updatedTeacherData.blood_group || ""
                                        }
                                        onChange={handleUpdateChange}
                                        className="select select-bordered w-full"
                                    >
                                        <option value="">নির্বাচন করুন</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            জাতীয় পরিচয়পত্র
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="national_id"
                                        value={
                                            updatedTeacherData.national_id || ""
                                        }
                                        onChange={handleUpdateChange}
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">ধর্ম</span>
                                    </label>
                                    <select
                                        name="religion"
                                        value={
                                            updatedTeacherData.religion || ""
                                        }
                                        onChange={handleUpdateChange}
                                        className="select select-bordered w-full"
                                        required
                                    >
                                        <option value="" disabled>
                                            নির্বাচন করুন
                                        </option>
                                        <option value="ইসলাম">ইসলাম</option>
                                        <option value="হিন্দু">হিন্দু</option>
                                        <option value="অন্যান্য">
                                            অন্যান্য
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            জাতীয়তা
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="nationality"
                                        value={
                                            updatedTeacherData.nationality || ""
                                        }
                                        onChange={handleUpdateChange}
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">ফোন</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={updatedTeacherData.phone || ""}
                                        onChange={handleUpdateChange}
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            ইমেইল
                                        </span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={updatedTeacherData.email || ""}
                                        onChange={handleUpdateChange}
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            বৈবাহিক অবস্থা
                                        </span>
                                    </label>
                                    <select
                                        name="marital_status"
                                        value={
                                            updatedTeacherData.marital_status ||
                                            ""
                                        }
                                        onChange={handleUpdateChange}
                                        className="select select-bordered w-full"
                                    >
                                        <option value="">নির্বাচন করুন</option>
                                        <option value="অবিবাহিত">
                                            অবিবাহিত
                                        </option>
                                        <option value="বিবাহিত">বিবাহিত</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            যোগদানের তারিখ
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="joining_date"
                                        value={
                                            updatedTeacherData.joining_date ||
                                            ""
                                        }
                                        onChange={handleUpdateChange}
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">পদবি</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="designation"
                                        value={
                                            updatedTeacherData.designation || ""
                                        }
                                        onChange={handleUpdateChange}
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            বিভাগ
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="department"
                                        value={
                                            updatedTeacherData.department || ""
                                        }
                                        onChange={handleUpdateChange}
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>
                                <div className="">
                                    <label className="label">
                                        <span className="label-text">
                                            শিক্ষাগত যোগ্যতা
                                        </span>
                                    </label>
                                    <input
                                        name="education"
                                        value={
                                            updatedTeacherData.education || ""
                                        }
                                        onChange={handleUpdateChange}
                                        className="input w-full"
                                        required
                                    ></input>
                                </div>
                                <div className="col-span-1 md:col-span-2 lg:col-span-3">
                                    <label className="label">
                                        <span className="label-text">
                                            এক্সট্রা কারিকুলার অ্যাক্টিভিটিস
                                        </span>
                                    </label>
                                    <input
                                        name="extra_curricular_activities"
                                        value={
                                            updatedTeacherData.extra_curricular_activities ||
                                            ""
                                        }
                                        onChange={handleUpdateChange}
                                        className="input w-full"
                                    ></input>
                                </div>
                                <div className="col-span-1 md:col-span-2 lg:col-span-3">
                                    <label className="label">
                                        <span className="label-text">
                                            কম্পিউটার সম্পর্কিত দক্ষতা
                                        </span>
                                    </label>
                                    <input
                                        name="computer_skills"
                                        value={
                                            updatedTeacherData.computer_skills ||
                                            ""
                                        }
                                        onChange={handleUpdateChange}
                                        className="input w-full"
                                    ></input>
                                </div>
                                <div className="col-span-1 md:col-span-2 lg:col-span-3">
                                    <label className="label">
                                        <span className="label-text">
                                            বর্তমান ঠিকানা
                                        </span>
                                    </label>
                                    <input
                                        name="present_address"
                                        value={
                                            updatedTeacherData.present_address ||
                                            ""
                                        }
                                        onChange={handleUpdateChange}
                                        className="input w-full"
                                        required
                                    ></input>
                                </div>
                                <div className="col-span-1 md:col-span-2 lg:col-span-3">
                                    <label className="label">
                                        <span className="label-text">
                                            স্থায়ী ঠিকানা
                                        </span>
                                    </label>
                                    <input
                                        name="permanent_address"
                                        value={
                                            updatedTeacherData.permanent_address ||
                                            ""
                                        }
                                        onChange={handleUpdateChange}
                                        className="input w-full"
                                        required
                                    ></input>
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            জরুরি যোগাযোগের নাম
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="emergency_contact_name"
                                        value={
                                            updatedTeacherData.emergency_contact_name ||
                                            ""
                                        }
                                        onChange={handleUpdateChange}
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            জরুরি যোগাযোগের নম্বর
                                        </span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="emergency_contact_number"
                                        value={
                                            updatedTeacherData?.emergency_contact_number ||
                                            ""
                                        }
                                        onChange={handleUpdateChange}
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            জরুরি যোগাযোগের সম্পর্ক
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        name="emergency_contact_relationship"
                                        value={
                                            updatedTeacherData.emergency_contact_relationship ||
                                            ""
                                        }
                                        onChange={handleUpdateChange}
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>
                                <div className="col-span-1 md:col-span-2 lg:col-span-3">
                                    <label className="label">
                                        <span className="label-text">
                                            সাবজেক্ট লিস্ট
                                        </span>
                                    </label>
                                    <input
                                        name="subjectList"
                                        value={
                                            updatedTeacherData.subjectList || ""
                                        }
                                        onChange={handleUpdateChange}
                                        className="input w-full"
                                    ></input>
                                </div>
                                {/* Photo URL can be handled separately if file upload is needed */}
                                <div className="col-span-full">
                                    <label className="label">
                                        <span className="label-text">
                                            ছবি URL
                                        </span>
                                    </label>
                                    <input
                                        type="url"
                                        name="photo_url"
                                        value={
                                            updatedTeacherData.photo_url || ""
                                        }
                                        onChange={handleUpdateChange}
                                        className="input input-bordered w-full"
                                    />
                                </div>
                            </div>
                            <div className="modal-action justify-center mt-6">
                                <Button type="submit" variant="default">
                                    আপডেট করুন
                                </Button>
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => setIsUpdateModalOpen(false)}
                                >
                                    বাতিল করুন
                                </Button>
                            </div>
                        </form>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default App;
