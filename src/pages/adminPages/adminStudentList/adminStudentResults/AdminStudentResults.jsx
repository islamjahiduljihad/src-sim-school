import React, { useState, useEffect } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

// Helper function to format subject names for value (English, no spaces)
const formatSubjectValue = (name) => {
    return name.replace(/\s/g, ""); // Remove all spaces
};

// Subject data with both Bangla display names and English (no space) values
const classSubjects = {
    6: [
        { displayName: "চারুপাঠ", value: formatSubjectValue("Carupath") },
        { displayName: "আনন্দপাঠ", value: formatSubjectValue("Anandapath") },
        {
            displayName: "বাংলা ব্যাকরণ ও নির্মিতি",
            value: formatSubjectValue("BanglaBekoronONirmiti"),
        },
        {
            displayName: "ইংলিশ ফর টুডে",
            value: formatSubjectValue("EnglishForToday"),
        },
        {
            displayName: "ইংলিশ গ্রামার এন্ড কম্পোজিশন",
            value: formatSubjectValue("EnglishGrammarAndComposition"),
        },
        { displayName: "গণিত", value: formatSubjectValue("Mathematics") },
        {
            displayName: "তথ্য ও যোগাযোগ প্রযুক্তি",
            value: formatSubjectValue("ICT"),
        },
        {
            displayName: "বাংলাদেশ ও বিশ্বপরিচয়",
            value: formatSubjectValue("BangladeshOBissoporichoy"),
        },
        { displayName: "বিজ্ঞান", value: formatSubjectValue("Biggan") },
        {
            displayName: "শারীরিক শিক্ষা",
            value: formatSubjectValue("SaririkShikkha"),
        },
        {
            displayName: "কর্ম ও জীবনমুখী শিক্ষা",
            value: formatSubjectValue("KormoOJibonmukhiShikkha"),
        },
        {
            displayName: "কৃষি শিক্ষা",
            value: formatSubjectValue("KrisiShikkha"),
        },
        {
            displayName: "ইসলাম ও নৈতিক শিক্ষা",
            value: formatSubjectValue("IslamONoitikSikkha"),
        },
        {
            displayName: "চারু ও কারু কলা",
            value: formatSubjectValue("CaruOKaruKola"),
        },
    ],
    7: [
        { displayName: "চারুপাঠ", value: formatSubjectValue("Carupath") },
        { displayName: "আনন্দপাঠ", value: formatSubjectValue("Anandapath") },
        {
            displayName: "বাংলা ব্যাকরণ ও নির্মিতি",
            value: formatSubjectValue("BanglaBekoronONirmiti"),
        },
        {
            displayName: "ইংলিশ ফর টুডে",
            value: formatSubjectValue("EnglishForToday"),
        },
        {
            displayName: "ইংলিশ গ্রামার এন্ড কম্পোজিশন",
            value: formatSubjectValue("EnglishGrammarAndComposition"),
        },
        { displayName: "গণিত", value: formatSubjectValue("Mathematics") },
        {
            displayName: "তথ্য ও যোগাযোগ প্রযুক্তি",
            value: formatSubjectValue("ICT"),
        },
        {
            displayName: "বাংলাদেশ ও বিশ্বপরিচয়",
            value: formatSubjectValue("BangladeshOBissoporichoy"),
        },
        { displayName: "বিজ্ঞান", value: formatSubjectValue("Biggan") },
        {
            displayName: "শারীরিক শিক্ষা",
            value: formatSubjectValue("SaririkShikkha"),
        },
        {
            displayName: "কর্ম ও জীবনমুখী শিক্ষা",
            value: formatSubjectValue("KormoOJibonmukhiShikkha"),
        },
        {
            displayName: "কৃষি শিক্ষা",
            value: formatSubjectValue("KrisiShikkha"),
        },
        {
            displayName: "ইসলাম ও নৈতিক শিক্ষা",
            value: formatSubjectValue("IslamONoitikSikkha"),
        },
        {
            displayName: "চারু ও কারু কলা",
            value: formatSubjectValue("CaruOKaruKola"),
        },
    ],
    8: [
        { displayName: "চারুপাঠ", value: formatSubjectValue("Carupath") },
        { displayName: "আনন্দপাঠ", value: formatSubjectValue("Anandapath") },
        {
            displayName: "বাংলা ব্যাকরণ ও নির্মিতি",
            value: formatSubjectValue("BanglaBekoronONirmiti"),
        },
        {
            displayName: "ইংলিশ ফর টুডে",
            value: formatSubjectValue("EnglishForToday"),
        },
        {
            displayName: "ইংলিশ গ্রামার এন্ড কম্পোজিশন",
            value: formatSubjectValue("EnglishGrammarAndComposition"),
        },
        { displayName: "গণিত", value: formatSubjectValue("Mathematics") },
        {
            displayName: "তথ্য ও যোগাযোগ প্রযুক্তি",
            value: formatSubjectValue("ICT"),
        },
        {
            displayName: "বাংলাদেশ ও বিশ্বপরিচয়",
            value: formatSubjectValue("BangladeshOBissoporichoy"),
        },
        { displayName: "বিজ্ঞান", value: formatSubjectValue("Biggan") },
        {
            displayName: "শারীরিক শিক্ষা",
            value: formatSubjectValue("SaririkShikkha"),
        },
        {
            displayName: "কর্ম ও জীবনমুখী শিক্ষা",
            value: formatSubjectValue("KormoOJibonmukhiShikkha"),
        },
        {
            displayName: "কৃষি শিক্ষা",
            value: formatSubjectValue("KrisiShikkha"),
        },
        {
            displayName: "ইসলাম ও নৈতিক শিক্ষা",
            value: formatSubjectValue("IslamONoitikSikkha"),
        },
        {
            displayName: "চারু ও কারু কলা",
            value: formatSubjectValue("CaruOKaruKola"),
        },
    ],
    9: {
        Science: [
            {
                displayName: "বাংলা সাহিত্য",
                value: formatSubjectValue("BanglaSahitto"),
            },
            {
                displayName: "বাংলা সহপাঠ",
                value: formatSubjectValue("BanglaSohopath"),
            },
            {
                displayName: "বাংলা ভাষার ব্যাকরণ ও নির্মিতি",
                value: formatSubjectValue("BanglaVasarBekoronONirmiti"),
            },
            {
                displayName: "ইংলিশ ফর টুডে",
                value: formatSubjectValue("EnglishForToday"),
            },
            {
                displayName: "ইংলিশ গ্রামার এন্ড কম্পোজিশন",
                value: formatSubjectValue("EnglishGrammarAndComposition"),
            },
            { displayName: "গণিত", value: formatSubjectValue("Mathematics") },
            {
                displayName: "তথ্য ও যোগাযোগ প্রযুক্তি",
                value: formatSubjectValue("ICT"),
            },
            {
                displayName: "পদার্থবিজ্ঞান",
                value: formatSubjectValue("Physics"),
            },
            { displayName: "রসায়ন", value: formatSubjectValue("Chemistry") },
            { displayName: "জীববিজ্ঞান", value: formatSubjectValue("Biology") },
            {
                displayName: "উচ্চতর গণিত",
                value: formatSubjectValue("HigherMathematics"),
            },
            {
                displayName: "ইসলাম শিক্ষা",
                value: formatSubjectValue("IslamShikkha"),
            },
            {
                displayName: "ক্যারিয়ার শিক্ষা",
                value: formatSubjectValue("CareerShikkha"),
            },
            {
                displayName: "বাংলাদেশ ও বিশ্বপরিচয়",
                value: formatSubjectValue("BangladeshOBissoPoricoy"),
            },
            {
                displayName: "চারু ও কারু কলা",
                value: formatSubjectValue("CaruOKaruKola"),
            },
            {
                displayName: "বাংলাদেশের ইতিহাস ও বিশ্ব সভ্যতা",
                value: formatSubjectValue("BangladeshErItihasOBissoSovvota"),
            },
        ],
        "Business Studies": [
            {
                displayName: "বাংলা সাহিত্য",
                value: formatSubjectValue("BanglaSahitto"),
            },
            {
                displayName: "বাংলা সহপাঠ",
                value: formatSubjectValue("BanglaSohopath"),
            },
            {
                displayName: "বাংলা ভাষার ব্যাকরণ ও নির্মিতি",
                value: formatSubjectValue("BanglaVasarBekoronONirmiti"),
            },
            {
                displayName: "ইংলিশ ফর টুডে",
                value: formatSubjectValue("EnglishForToday"),
            },
            {
                displayName: "ইংলিশ গ্রামার এন্ড কম্পোজিশন",
                value: formatSubjectValue("EnglishGrammarAndComposition"),
            },
            { displayName: "গণিত", value: formatSubjectValue("Mathematics") },
            {
                displayName: "তথ্য ও যোগাযোগ প্রযুক্তি",
                value: formatSubjectValue("ICT"),
            },
            { displayName: "বিজ্ঞান", value: formatSubjectValue("Biggan") }, // Only for Business and Humanities
            {
                displayName: "ভূগোল ও পরিবেশ",
                value: formatSubjectValue("VugolOPoribesh"),
            },
            { displayName: "অর্থনীতি", value: formatSubjectValue("Orthoniti") },
            {
                displayName: "কৃষি শিক্ষা",
                value: formatSubjectValue("KrisiShikkha"),
            },
            {
                displayName: "গার্হস্থ্য বিজ্ঞান",
                value: formatSubjectValue("GrahostoBiggan"),
            },
            {
                displayName: "পৌরনীতি ও নাগরিকত্ব",
                value: formatSubjectValue("PouronitiONagorikotto"),
            },
            {
                displayName: "হিসাব বিজ্ঞান",
                value: formatSubjectValue("HisabBiggan"),
            },
            {
                displayName: "ফিন্যান্স ও ব্যাংকিং",
                value: formatSubjectValue("FinanceOBanking"),
            },
            {
                displayName: "ব্যবসায় উদ্যোগ",
                value: formatSubjectValue("BebsayUddeg"),
            },
            {
                displayName: "ইসলাম শিক্ষা",
                value: formatSubjectValue("IslamShikkha"),
            },
            {
                displayName: "ক্যারিয়ার শিক্ষা",
                value: formatSubjectValue("CareerShikkha"),
            },
            {
                displayName: "বাংলাদেশ ও বিশ্বপরিচয়",
                value: formatSubjectValue("BangladeshOBissoPoricoy"),
            },
            {
                displayName: "চারু ও কারু কলা",
                value: formatSubjectValue("CaruOKaruKola"),
            },
            {
                displayName: "বাংলাদেশের ইতিহাস ও বিশ্ব সভ্যতা",
                value: formatSubjectValue("BangladeshErItihasOBissoSovvota"),
            },
        ],
        Humanities: [
            {
                displayName: "বাংলা সাহিত্য",
                value: formatSubjectValue("BanglaSahitto"),
            },
            {
                displayName: "বাংলা সহপাঠ",
                value: formatSubjectValue("BanglaSohopath"),
            },
            {
                displayName: "বাংলা ভাষার ব্যাকরণ ও নির্মিতি",
                value: formatSubjectValue("BanglaVasarBekoronONirmiti"),
            },
            {
                displayName: "ইংলিশ ফর টুডে",
                value: formatSubjectValue("EnglishForToday"),
            },
            {
                displayName: "ইংলিশ গ্রামার এন্ড কম্পোজিশন",
                value: formatSubjectValue("EnglishGrammarAndComposition"),
            },
            { displayName: "গণিত", value: formatSubjectValue("Mathematics") },
            {
                displayName: "তথ্য ও যোগাযোগ প্রযুক্তি",
                value: formatSubjectValue("ICT"),
            },
            { displayName: "বিজ্ঞান", value: formatSubjectValue("Biggan") }, // Only for Business and Humanities
            {
                displayName: "ভূগোল ও পরিবেশ",
                value: formatSubjectValue("VugolOPoribesh"),
            },
            { displayName: "অর্থনীতি", value: formatSubjectValue("Orthoniti") },
            {
                displayName: "কৃষি শিক্ষা",
                value: formatSubjectValue("KrisiShikkha"),
            },
            {
                displayName: "গার্হস্থ্য বিজ্ঞান",
                value: formatSubjectValue("GrahostoBiggan"),
            },
            {
                displayName: "পৌরনীতি ও নাগরিকত্ব",
                value: formatSubjectValue("PouronitiONagorikotto"),
            },
            {
                displayName: "ইসলাম শিক্ষা",
                value: formatSubjectValue("IslamShikkha"),
            },
            {
                displayName: "ক্যারিয়ার শিক্ষা",
                value: formatSubjectValue("CareerShikkha"),
            },
            {
                displayName: "বাংলাদেশ ও বিশ্বপরিচয়",
                value: formatSubjectValue("BangladeshOBissoPoricoy"),
            },
            {
                displayName: "চারু ও কারু কলা",
                value: formatSubjectValue("CaruOKaruKola"),
            },
            {
                displayName: "বাংলাদেশের ইতিহাস ও বিশ্ব সভ্যতা",
                value: formatSubjectValue("BangladeshErItihasOBissoSovvota"),
            },
        ],
    },
    10: {
        Science: [
            {
                displayName: "বাংলা সাহিত্য",
                value: formatSubjectValue("BanglaSahitto"),
            },
            {
                displayName: "বাংলা সহপাঠ",
                value: formatSubjectValue("BanglaSohopath"),
            },
            {
                displayName: "বাংলা ভাষার ব্যাকরণ ও নির্মিতি",
                value: formatSubjectValue("BanglaVasarBekoronONirmiti"),
            },
            {
                displayName: "ইংলিশ ফর টুডে",
                value: formatSubjectValue("EnglishForToday"),
            },
            {
                displayName: "ইংলিশ গ্রামার এন্ড কম্পোজিশন",
                value: formatSubjectValue("EnglishGrammarAndComposition"),
            },
            { displayName: "গণিত", value: formatSubjectValue("Mathematics") },
            {
                displayName: "তথ্য ও যোগাযোগ প্রযুক্তি",
                value: formatSubjectValue("ICT"),
            },
            {
                displayName: "পদার্থবিজ্ঞান",
                value: formatSubjectValue("Physics"),
            },
            { displayName: "রসায়ন", value: formatSubjectValue("Chemistry") },
            { displayName: "জীববিজ্ঞান", value: formatSubjectValue("Biology") },
            {
                displayName: "উচ্চতর গণিত",
                value: formatSubjectValue("HigherMathematics"),
            },
            {
                displayName: "ইসলাম শিক্ষা",
                value: formatSubjectValue("IslamShikkha"),
            },
            {
                displayName: "ক্যারিয়ার শিক্ষা",
                value: formatSubjectValue("CareerShikkha"),
            },
            {
                displayName: "বাংলাদেশ ও বিশ্বপরিচয়",
                value: formatSubjectValue("BangladeshOBissoPoricoy"),
            },
            {
                displayName: "চারু ও কারু কলা",
                value: formatSubjectValue("CaruOKaruKola"),
            },
            {
                displayName: "বাংলাদেশের ইতিহাস ও বিশ্ব সভ্যতা",
                value: formatSubjectValue("BangladeshErItihasOBissoSovvota"),
            },
        ],
        "Business Studies": [
            {
                displayName: "বাংলা সাহিত্য",
                value: formatSubjectValue("BanglaSahitto"),
            },
            {
                displayName: "বাংলা সহপাঠ",
                value: formatSubjectValue("BanglaSohopath"),
            },
            {
                displayName: "বাংলা ভাষার ব্যাকরণ ও নির্মিতি",
                value: formatSubjectValue("BanglaVasarBekoronONirmiti"),
            },
            {
                displayName: "ইংলিশ ফর টুডে",
                value: formatSubjectValue("EnglishForToday"),
            },
            {
                displayName: "ইংলিশ গ্রামার এন্ড কম্পোজিশন",
                value: formatSubjectValue("EnglishGrammarAndComposition"),
            },
            { displayName: "গণিত", value: formatSubjectValue("Mathematics") },
            {
                displayName: "তথ্য ও যোগাযোগ প্রযুক্তি",
                value: formatSubjectValue("ICT"),
            },
            { displayName: "বিজ্ঞান", value: formatSubjectValue("Biggan") }, // Only for Business and Humanities
            {
                displayName: "ভূগোল ও পরিবেশ",
                value: formatSubjectValue("VugolOPoribesh"),
            },
            { displayName: "অর্থনীতি", value: formatSubjectValue("Orthoniti") },
            {
                displayName: "কৃষি শিক্ষা",
                value: formatSubjectValue("KrisiShikkha"),
            },
            {
                displayName: "গার্হস্থ্য বিজ্ঞান",
                value: formatSubjectValue("GrahostoBiggan"),
            },
            {
                displayName: "পৌরনীতি ও নাগরিকত্ব",
                value: formatSubjectValue("PouronitiONagorikotto"),
            },
            {
                displayName: "হিসাব বিজ্ঞান",
                value: formatSubjectValue("HisabBiggan"),
            },
            {
                displayName: "ফিন্যান্স ও ব্যাংকিং",
                value: formatSubjectValue("FinanceOBanking"),
            },
            {
                displayName: "ব্যবসায় উদ্যোগ",
                value: formatSubjectValue("BebsayUddeg"),
            },
            {
                displayName: "ইসলাম শিক্ষা",
                value: formatSubjectValue("IslamShikkha"),
            },
            {
                displayName: "ক্যারিয়ার শিক্ষা",
                value: formatSubjectValue("CareerShikkha"),
            },
            {
                displayName: "বাংলাদেশ ও বিশ্বপরিচয়",
                value: formatSubjectValue("BangladeshOBissoPoricoy"),
            },
            {
                displayName: "চারু ও কারু কলা",
                value: formatSubjectValue("CaruOKaruKola"),
            },
            {
                displayName: "বাংলাদেশের ইতিহাস ও বিশ্ব সভ্যতা",
                value: formatSubjectValue("BangladeshErItihasOBissoSovvota"),
            },
        ],
        Humanities: [
            {
                displayName: "বাংলা সাহিত্য",
                value: formatSubjectValue("BanglaSahitto"),
            },
            {
                displayName: "বাংলা সহপাঠ",
                value: formatSubjectValue("BanglaSohopath"),
            },
            {
                displayName: "বাংলা ভাষার ব্যাকরণ ও নির্মিতি",
                value: formatSubjectValue("BanglaVasarBekoronONirmiti"),
            },
            {
                displayName: "ইংলিশ ফর টুডে",
                value: formatSubjectValue("EnglishForToday"),
            },
            {
                displayName: "ইংলিশ গ্রামার এন্ড কম্পোজিশন",
                value: formatSubjectValue("EnglishGrammarAndComposition"),
            },
            { displayName: "গণিত", value: formatSubjectValue("Mathematics") },
            {
                displayName: "তথ্য ও যোগাযোগ প্রযুক্তি",
                value: formatSubjectValue("ICT"),
            },
            { displayName: "বিজ্ঞান", value: formatSubjectValue("Biggan") }, // Only for Business and Humanities
            {
                displayName: "ভূগোল ও পরিবেশ",
                value: formatSubjectValue("VugolOPoribesh"),
            },
            { displayName: "অর্থনীতি", value: formatSubjectValue("Orthoniti") },
            {
                displayName: "কৃষি শিক্ষা",
                value: formatSubjectValue("KrisiShikkha"),
            },
            {
                displayName: "গার্হস্থ্য বিজ্ঞান",
                value: formatSubjectValue("GrahostoBiggan"),
            },
            {
                displayName: "পৌরনীতি ও নাগরিকত্ব",
                value: formatSubjectValue("PouronitiONagorikotto"),
            },
            {
                displayName: "ইসলাম শিক্ষা",
                value: formatSubjectValue("IslamShikkha"),
            },
            {
                displayName: "ক্যারিয়ার শিক্ষা",
                value: formatSubjectValue("CareerShikkha"),
            },
            {
                displayName: "বাংলাদেশ ও বিশ্বপরিচয়",
                value: formatSubjectValue("BangladeshOBissoPoricoy"),
            },
            {
                displayName: "চারু ও কারু কলা",
                value: formatSubjectValue("CaruOKaruKola"),
            },
            {
                displayName: "বাংলাদেশের ইতিহাস ও বিশ্ব সভ্যতা",
                value: formatSubjectValue("BangladeshErItihasOBissoSovvota"),
            },
        ],
    },
};

const AdminStudentResults = () => {
    const [studentId, setStudentId] = useState("");
    const [selectedClass, setSelectedClass] = useState("");
    const [selectedExam, setSelectedExam] = useState("");
    const [selectedDepartment, setSelectedDepartment] = useState("");
    const [availableSubjects, setAvailableSubjects] = useState([]);
    const [marksInput, setMarksInput] = useState([{ subject: "", marks: "" }]);

    useEffect(() => {
        let subjects = [];
        if (selectedClass) {
            if (["6", "7", "8"].includes(selectedClass)) {
                subjects = classSubjects[selectedClass];
                setSelectedDepartment(""); // Reset department for lower classes
            } else if (["9", "10"].includes(selectedClass)) {
                if (
                    selectedDepartment &&
                    classSubjects[selectedClass][selectedDepartment]
                ) {
                    subjects = classSubjects[selectedClass][selectedDepartment];
                } else {
                    subjects = []; // No department selected or invalid, so no subjects
                }
            }
            setAvailableSubjects(subjects);
            setMarksInput([{ subject: "", marks: "" }]);
        } else {
            setAvailableSubjects([]);
            setSelectedDepartment("");
            setMarksInput([{ subject: "", marks: "" }]);
        }
    }, [selectedClass, selectedDepartment]);

    const handleMarksChange = (index, field, value) => {
        const newMarksInput = [...marksInput];
        newMarksInput[index][field] = value;
        setMarksInput(newMarksInput);
    };

    const addMarksField = () => {
        setMarksInput([...marksInput, { subject: "", marks: "" }]);
    };

    const removeMarksField = (index) => {
        const newMarksInput = marksInput.filter((_, i) => i !== index);
        setMarksInput(newMarksInput);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Filter out any empty subject/marks entries before submission
        const filteredResults = marksInput.filter(
            (item) => item.subject && item.marks
        );

        const studentResults = {
            studentId,
            classNo: selectedClass,
            department: selectedDepartment || null,
            results: filteredResults.map((item) => ({
                subject: item.subject,
                marks: parseFloat(item.marks),
            })),
            examName: selectedExam || null,
        };

        console.log(
            "Submitted Results:",
            JSON.stringify(studentResults, null, 2)
        ); // Pretty print JSON
        // Instead of alert, you might use a modal or a toast notification in a real app
        // For this example, we'll keep the alert as requested, but it's not ideal for user experience.
        alert(
            "এই অপশন টি এখনো ডেভেলপমেন্ট এ আছে। ইনশাআল্লাহ অপশন টি কার্যকর করা হবে শীঘ্রই।"
        );

        // Optionally reset form after submission
        setStudentId("");
        setSelectedClass("");
        setSelectedDepartment("");
        setMarksInput([{ subject: "", marks: "" }]);
    };

    return (
        <div className="min-h-screen bg-gray-100 sm:p-6 lg:p-8 flex items-center justify-center font-sans">
            <div className="bg-white shadow-xl rounded-lg p-6 sm:p-8 w-full max-w-4xl border-t-4 border-[#249742]">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
                    <span className="text-[#249742]">এডমিন</span> শিক্ষার্থীর
                    ফলাফল ইনপুট
                </h2>
                <p className="text-center text-gray-600 mb-2">
                    এখানে শিক্ষার্থীর আইডি, শ্রেণি এবং বিভাগ অনুযায়ী পরীক্ষার
                    ফলাফল ইনপুট দিন।
                </p>
                <p className="text-center text-error text-sm font-semibold mb-8">
                    রেস্ট্রিক্টেডঃ রেজাল্ট আপলোড এর নিয়ম না যেনে রেজাল্ট আপলোড
                    করবেন না। এতে সফটওয়্যার ক্র্যাশ হতে পারে।
                </p>

                <form onSubmit={handleSubmit}>
                    {/* Student ID and Class Selection */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        <div>
                            <label
                                htmlFor="studentId"
                                className="block text-gray-700 text-sm font-medium mb-2"
                            >
                                শিক্ষার্থীর আইডি (Student ID)
                            </label>
                            <input
                                type="text"
                                id="studentId"
                                className="input input-bordered w-full focus:border-[#249742] focus:ring focus:ring-[#249742] focus:ring-opacity-50"
                                placeholder="শিক্ষার্থীর আইডি লিখুন"
                                value={studentId}
                                onChange={(e) => setStudentId(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="classNo"
                                className="block text-gray-700 text-sm font-medium mb-2"
                            >
                                শ্রেণি (Class No.)
                            </label>
                            <select
                                id="classNo"
                                className="select select-bordered w-full focus:border-[#249742] focus:ring focus:ring-[#249742] focus:ring-opacity-50"
                                value={selectedClass}
                                onChange={(e) =>
                                    setSelectedClass(e.target.value)
                                }
                                required
                            >
                                <option value="" disabled>
                                    শ্রেণি নির্বাচন করুন
                                </option>
                                <option value="6">৬</option>
                                <option value="7">৭</option>
                                <option value="8">৮</option>
                                <option value="9">৯</option>
                                <option value="10">১০</option>
                            </select>
                        </div>
                        <div>
                            <label
                                htmlFor="examName"
                                className="block text-gray-700 text-sm font-medium mb-2"
                            >
                                পরীক্ষার নাম (Exam Name)
                            </label>
                            <select
                                id="examName"
                                className="select select-bordered w-full focus:border-[#249742] focus:ring focus:ring-[#249742] focus:ring-opacity-50"
                                value={selectedExam}
                                onChange={(e) =>
                                    setSelectedExam(e.target.value)
                                }
                                required
                            >
                                <option value="" disabled>
                                    পরীক্ষার নাম নির্বাচন করুন
                                </option>
                                <option value="first_term">প্রথম সাময়িক</option>
                                <option value="half_yearly">
                                    অর্ধ বার্ষিক
                                </option>
                                <option value="final_exam">বার্ষিক</option>
                            </select>
                        </div>
                    </div>

                    {/* Department Selection (Conditional for Class 9 & 10) */}
                    {["9", "10"].includes(selectedClass) && (
                        <div className="mb-8">
                            <label
                                htmlFor="department"
                                className="block text-gray-700 text-sm font-medium mb-2"
                            >
                                বিভাগ (Department)
                            </label>
                            <select
                                id="department"
                                className="select select-bordered w-full focus:border-[#249742] focus:ring focus:ring-[#249742] focus:ring-opacity-50"
                                value={selectedDepartment}
                                onChange={(e) =>
                                    setSelectedDepartment(e.target.value)
                                }
                                required
                            >
                                <option value="" disabled>
                                    বিভাগ নির্বাচন করুন
                                </option>
                                {Object.keys(classSubjects[selectedClass]).map(
                                    (dept) => (
                                        <option key={dept} value={dept}>
                                            {dept === "Science"
                                                ? "বিজ্ঞান"
                                                : dept === "Business Studies"
                                                ? "ব্যবসায় শিক্ষা"
                                                : "মানবিক"}
                                        </option>
                                    )
                                )}
                            </select>
                        </div>
                    )}

                    {/* Subject and Marks Input Fields */}
                    <div className="mb-6 border border-gray-200 rounded-lg p-4 bg-gray-50">
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">
                            বিষয়ভিত্তিক নম্বর (Subject Marks)
                        </h3>
                        {marksInput.map((mark, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 items-end"
                            >
                                <div className="col-span-2">
                                    <label
                                        htmlFor={`subject-${index}`}
                                        className="block text-gray-700 text-xs font-medium mb-1"
                                    >
                                        বিষয় {index + 1}
                                    </label>
                                    <select
                                        id={`subject-${index}`}
                                        className="select select-bordered w-full focus:border-[#249742] focus:ring focus:ring-[#249742] focus:ring-opacity-50"
                                        value={mark.subject}
                                        onChange={(e) =>
                                            handleMarksChange(
                                                index,
                                                "subject",
                                                e.target.value
                                            )
                                        }
                                        required
                                        disabled={
                                            !selectedClass ||
                                            (["9", "10"].includes(
                                                selectedClass
                                            ) &&
                                                !selectedDepartment)
                                        }
                                    >
                                        <option value="" disabled>
                                            বিষয় নির্বাচন করুন
                                        </option>
                                        {availableSubjects.length > 0 ? (
                                            availableSubjects.map((subject) => (
                                                <option
                                                    key={subject.value}
                                                    value={subject.value}
                                                >
                                                    {subject.displayName}
                                                </option>
                                            ))
                                        ) : (
                                            <option value="" disabled>
                                                প্রথমে শ্রেণি ও বিভাগ নির্বাচন
                                                করুন
                                            </option>
                                        )}
                                    </select>
                                </div>
                                <div>
                                    <label
                                        htmlFor={`marks-${index}`}
                                        className="block text-gray-700 text-xs font-medium mb-1"
                                    >
                                        নম্বর (Marks)
                                    </label>
                                    <div className="flex items-center">
                                        <input
                                            type="number"
                                            id={`marks-${index}`}
                                            className="input input-bordered w-full focus:border-[#249742] focus:ring focus:ring-[#249742] focus:ring-opacity-50"
                                            placeholder="নম্বর লিখুন"
                                            value={mark.marks}
                                            onChange={(e) =>
                                                handleMarksChange(
                                                    index,
                                                    "marks",
                                                    e.target.value
                                                )
                                            }
                                            min="0"
                                            max="100" // Assuming marks are out of 100
                                            required
                                        />
                                        {marksInput.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    removeMarksField(index)
                                                }
                                                className="btn btn-ghost btn-circle text-error ml-2"
                                                title="বিষয়টি সরান"
                                            >
                                                <FaTrash />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={addMarksField}
                            className="btn btn-outline btn-sm bg-[#249742] border-none text-white mt-4 flex items-center gap-2 hover:bg-[#1e7a36] hover:text-white"
                        >
                            <FaPlus /> আরও বিষয় যোগ করুন
                        </button>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="btn bg-[#249742] text-white btn-lg w-full max-w-xs transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#1e7a36]"
                        >
                            ফলাফল যুক্ত করুন
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminStudentResults;
