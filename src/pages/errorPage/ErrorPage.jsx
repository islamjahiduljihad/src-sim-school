import { MdErrorOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import lottieData from "../../assets/lottie/404Error.json";
import Lottie from "lottie-react";

const ErrorPage = () => {
    return (
        <section className="flex items-center h-[100vh] sm:p-16">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                <div>
                    <Lottie animationData={lottieData} loop={true} />
                </div>
                <h1 className="text-3xl font-bold text-info">
                    আপনার পেজটি পাওয়া যায়নি
                </h1>
                <p>
                    দুঃখিত, আমরা আপনার অনুরোধকৃত পেজটি খুঁজে পেতে পারিনি।
                    কিছুক্ষণ পরে আবার চেষ্টা করুন অথবা সাপোর্টে যোগাযোগ করুন
                </p>
                <div className="flex flex-col md:flex-row items-center gap-2">
                    <Link
                        rel="noopener noreferrer"
                        to={"/"}
                        className="btn btn-info border-none rounded-lg text-white shadow-none"
                    >
                        হোম পেজে ফিরে যান
                        <MdErrorOutline className="ml-2" />
                    </Link>
                    <Link
                        rel="noopener noreferrer"
                        to={"/contact"}
                        className="btn btn-info border-none rounded-lg text-white shadow-none"
                    >
                        সাপোর্টে যোগাযোগ করুন
                        <MdErrorOutline className="ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;
