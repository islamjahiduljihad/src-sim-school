import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import { useEffect, useState } from "react";

const OurTeachers = () => {
    const [teachersData, setTeachersData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/teachers?limit=4")
            .then((res) => res.json())
            .then((data) => {
                setTeachersData(data);
                console.log(data);
            })
            .catch((error) =>
                console.error("Error fetching teachers data:", error)
            );
    }, []);

    return (
        <div className="bg-[#f8f9fa] py-16 px-4 md:px-8 lg:px-10 text-center">
            <div className="w-[95%] mx-auto">
                <SectionHeader
                    title={"আমাদের সুদক্ষ শিক্ষকবৃন্দ"}
                    subtitle={
                        "আমাদের রয়েছে একদল অভিজ্ঞ শিক্ষক, যারা শুধু পাঠ্যশিক্ষাই নয় — আদব-কায়দা ও বাস্তবজীবনের মূল্যবান শিক্ষা দেন।"
                    }
                ></SectionHeader>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-8">
                {teachersData.map((teacher) => (
                    <div
                        key={teacher?._id}
                        className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition duration-300"
                    >
                        <img
                            src={teacher?.photoUrl}
                            alt={teacher?.name_bn}
                            className="w-24 h-24 rounded-full mx-auto mb-2 object-cover border-4 border-[#249742] p-1"
                        />
                        <div className="flex items-center justify-center">
                            <p className="text-sm text-[#249742] bg-[#24974336] rounded-2xl w-max px-1">
                                {teacher?.subjectList}
                            </p>
                        </div>
                        <h3 className="md:text-lg font-bold text-gray-800 mb-1">
                            {teacher?.name_en}
                        </h3>

                        <p className="text-xs text-gray-500 mt-1 italic">
                            {teacher?.group?.group}
                        </p>
                        <Link
                            to={`/teachers/${teacher?._id}`}
                            className="btn w-max mt-4 text-white bg-[#249742] hover:bg-[#1e7f36] rounded-full"
                        >
                            ডিটেইলস দেখুন
                        </Link>
                    </div>
                ))}
            </div>

            <div className="mt-10">
                <Link
                    to="/faculty"
                    className="btn btn-lg rounded-lg bg-[#249742] text-white"
                >
                    সকল শিক্ষকদের দেখুন <BsArrowRight size={16} />
                </Link>
            </div>
        </div>
    );
};

export default OurTeachers;
