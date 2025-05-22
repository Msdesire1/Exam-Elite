"use client"
import { usePathname } from 'next/navigation';
import Navbar from '../components/Navbar';

const AppWrapper = ({ children }) => {
  const pathname = usePathname();

  const pathsWithoutNavbar = [
     "/dashboard/admin/dashboard",
    "/dashboard/student/dashboard",
    "/dashboard/teacher/dashboard",
    "/dashboard/student/studentclass",
    "/dashboard/student/studentresult",
    "/dashboard/student/studentexam",
    "/dashboard/student/test-algebra",
    "/dashboard/student/results/results-physics",
    "/dashboard/student/results/results-chemistry",
    "/dashboard/student/results/results-english",
    "/dashboard/student/studentprofile",
    "/dashboard/teacher/teacherclass",
    "/dashboard/teacher/teacherresult",
    "/dashboard/teacher/teacherproflie",
    "/dashboard/admin/classes",
    "/dashboard/admin/exam",
    "/dashboard/admin/setting",
    "/dashboard/admin/student",
    "/dashboard/teacher/studentt",
    "/dashboard/teacher/analytics",
    "/dashboard/teacher/analytics",
    "/dashboard/teacher/analytics",
    "/dashboard/teacher/analytics",
    "/auth/login",
    "/auth/register",
    "/dashboard/student/studentexam/examcalender",
    "/auth/restpassword",
    "/dashboard/student/studentexam/prepareexam",
    "/auth/verify",
    "/dashboard/student/studentexam/examst",
    "/auth/forgotpassword",
    "/dashboard/student/studentexam/detailsrt",
    "/dashboard/student/studentclass/materials",
    "/dashboard/student/studentclass/classdetail",
    "/dashboard/teacher/create-test",
"/dashboard/student/studentexam/resources",
"/dashboard/student/studentexam/resourcesid",
"/dashboard/student/test",
"/dashboard/student/test-algebra",
"/dashboard/student/test/test-biology",
"/dashboard/student/test/test-history",
  ];

  // Only show navbar if current path isn't in the hidden list
  const shouldDisplayNavbar = !pathsWithoutNavbar.includes(pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {shouldDisplayNavbar && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
};

export default AppWrapper;

