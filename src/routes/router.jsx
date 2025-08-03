import { createBrowserRouter, Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import AboutUs from "../pages/aboutUs/AboutUs";
import Academic from "../pages/academic/Academic";
import Faculty from "../pages/faculty/Faculty";
import Notice from "../pages/notice/Notice";
import Result from "../pages/result/Result";
import PhotoGallery from "../pages/photoGallery/PhotoGallery";
import Contact from "../pages/contact/Contact";
import ErrorPage from "../pages/errorPage/ErrorPage";
import AdminLayout from "../layouts/AdminLayout";
import AdminHome from "../pages/adminPages/adminHome/AdminHome";
import AdminStudentList from "../pages/adminPages/adminStudentList/AdminStudentList";
import Class6List from "../pages/adminPages/adminStudentList/class6List/Class6List";
import AdminStudentDetails from "../pages/adminPages/adminStudentList/adminStudentDetails/AdminStudentDetails";
import Class7List from "../pages/adminPages/adminStudentList/class7List/Class7List";
import Class8List from "../pages/adminPages/adminStudentList/class8List/Class8List";
import Class9List from "../pages/adminPages/adminStudentList/class9List/Class9List";
import Class10List from "../pages/adminPages/adminStudentList/class10List/Class10List";
import AdminTeacherList from "../pages/adminPages/adminTeacherList/AdminTeacherList";
import AdminTeacherDetails from "../pages/adminPages/adminTeacherList/adminTeacherDetails/AdminTeacherDetails";
import AdminNotice from "../pages/adminPages/adminNotice/AdminNotice";
import AdminPhotoManagement from "../pages/adminPages/adminPhotoManagement/AdminPhotoManagement";
import AdminContact from "../pages/adminPages/adminContact/AdminContact";
import AdminDeveloperContact from "../pages/adminPages/adminDeveloperContact/AdminDeveloperContact";
import AdminDigiCard from "../pages/adminPages/adminDigiCard/AdminDigiCard";
import AddStudent from "../pages/adminPages/adminStudentList/adminAddStudent/AddStudent";
import AddTeacher from "../pages/adminPages/adminTeacherList/addTeacher/AddTeacher";
import AdminStudentResults from "../pages/adminPages/adminStudentList/adminStudentResults/AdminStudentResults";
import TeacherDetails from "../pages/teacherDetails/TeacherDetails";
import FundManagement from "../pages/adminPages/fundManagement/FundManagement";
import EventManagement from "../pages/adminPages/eventManagement/EventManagement";
import StaffManagement from "../pages/adminPages/staffManagement/StaffManagement";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/about",
                element: <AboutUs></AboutUs>,
            },
            {
                path: "/academic",
                element: <Academic></Academic>,
            },
            {
                path: "/faculty",
                element: <Faculty></Faculty>,
            },
            {
                path: "/notice",
                element: <Notice></Notice>,
            },
            {
                path: "/result",
                element: <Result></Result>,
            },
            {
                path: "/photoGallery",
                element: <PhotoGallery></PhotoGallery>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
            },
            {
                path: "teacher/:id",
                element: <TeacherDetails></TeacherDetails>,
            },
        ],
    },
    {
        path: "/admin",
        element: <AdminLayout></AdminLayout>,
        children: [
            {
                path: "/admin",
                element: <AdminHome></AdminHome>,
            },
            {
                path: "/admin/studentList",
                element: <AdminStudentList></AdminStudentList>,
            },
            {
                path: "/admin/studentList/addStudent",
                element: <AddStudent></AddStudent>,
            },
            {
                path: "/admin/studentList/6",
                element: <Class6List></Class6List>,
            },
            {
                path: "/admin/studentList/7",
                element: <Class7List></Class7List>,
            },
            {
                path: "/admin/studentList/8",
                element: <Class8List></Class8List>,
            },
            {
                path: "/admin/studentList/9",
                element: <Class9List></Class9List>,
            },
            {
                path: "/admin/studentList/10",
                element: <Class10List></Class10List>,
            },
            {
                path: "/admin/studentList/:classNo/:id",
                element: <AdminStudentDetails></AdminStudentDetails>,
            },
            {
                path: "/admin/teacherList",
                element: <AdminTeacherList></AdminTeacherList>,
            },
            {
                path: "/admin/teacherList/:id",
                element: <AdminTeacherDetails></AdminTeacherDetails>,
            },
            {
                path: "/admin/addTeacher",
                element: <AddTeacher></AddTeacher>,
            },
            {
                path: "/admin/notices",
                element: <AdminNotice></AdminNotice>,
            },
            {
                path: "/admin/photoManagement",
                element: <AdminPhotoManagement></AdminPhotoManagement>,
            },
            {
                path: "/admin/contact",
                element: <AdminContact></AdminContact>,
            },
            {
                path: "/admin/developerContact",
                element: <AdminDeveloperContact></AdminDeveloperContact>,
            },
            {
                path: "/admin/digiCardManagement",
                element: <AdminDigiCard></AdminDigiCard>,
            },
            {
                path: "/admin/studentResults",
                element: <AdminStudentResults></AdminStudentResults>,
            },
            {
                path: "/admin/funds",
                element: <FundManagement></FundManagement>,
            },
            {
                path: "/admin/events",
                element: <EventManagement></EventManagement>,
            },
            {
                path: "/admin/staffManagement",
                element: <StaffManagement></StaffManagement>,
            },
        ],
    },
]);

export default router;
