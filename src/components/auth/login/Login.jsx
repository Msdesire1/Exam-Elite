
// "use client"
// import React, { useState } from "react";
// import Link from "next/link";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { useRouter } from "next/navigation";
// import { Eye, EyeOff, User, Lock } from "lucide-react";

// export default function Login() {
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const handleLogin = (role) => {
//     setIsLoading(true);
//     // Simulate loading delay
//     setTimeout(() => {
//       // Redirect based on selected role
//       router.push(`/dashboard/${role}/dashboard`);
//       setIsLoading(false);
//     }, 5000);
//   };

//   const validationSchema = Yup.object().shape({
//     email: Yup.string().email("Please enter a valid email").required("Email is required"),
//     password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
//     role: Yup.string().required("Please select a role"),
//   });

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//       role: "",
//     },
//     validationSchema,
//     onSubmit: (values) => {
//       handleLogin(values.role);
//     },
//   });

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
//       <div className="w-full max-w-md">
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold mb-2 text-gray-900">Exam Elite</h1>
//           <p className="text-gray-600">Sign in to your account</p>
//         </div>

//         <div className="w-full bg-white rounded-lg shadow-lg border-t-4 border-t-blue-600 p-6">
//           <div className="mb-6 text-center">
//             <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
//             <p className="text-gray-600">Enter your credentials to access your account</p>
//           </div>

//           <form onSubmit={formik.handleSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                 Email
//               </label>
//               <div className="relative">
//                 <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   placeholder="Enter your email"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.email}
//                   disabled={isLoading}
//                   className="w-full pl-10 h-11 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
//                 />
//               </div>
//               {formik.touched.email && formik.errors.email ? (
//                 <p className="mt-1 text-sm text-red-600">{formik.errors.email}</p>
//               ) : null}
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//                 Password
//               </label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                 <input
//                   id="password"
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Enter your password"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.password}
//                   disabled={isLoading}
//                   className="w-full pl-10 h-11 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-0 top-0 h-11 px-3 text-gray-400 hover:text-gray-600"
//                 >
//                   {showPassword ? (
//                     <EyeOff className="h-4 w-4" />
//                   ) : (
//                     <Eye className="h-4 w-4" />
//                   )}
//                 </button>
//               </div>
//               <div className="flex justify-end mt-1">
//                 <Link
//                   href="/auth/forgotpassword"
//                   className="text-xs text-blue-600 hover:underline"
//                 >
//                   Forgot password?
//                 </Link>
//               </div>
//               {formik.touched.password && formik.errors.password ? (
//                 <p className="mt-1 text-sm text-red-600">{formik.errors.password}</p>
//               ) : null}
//             </div>

//             <div>
//               <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
//                 Role
//               </label>
//               <select
//                 id="role"
//                 name="role"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.role}
//                 disabled={isLoading}
//                 className="w-full h-11 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
//               >
//                 <option value="">Select your role</option>
//                 <option value="student">Student</option>
//                 <option value="teacher">Teacher</option>
//                 <option value="admin">Administrator</option>
//               </select>
//               {formik.touched.role && formik.errors.role ? (
//                 <p className="mt-1 text-sm text-red-600">{formik.errors.role}</p>
//               ) : null}
//             </div>

//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {isLoading ? (
//                 <span className="flex items-center justify-center">
//                   <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Signing in...
//                 </span>
//               ) : (
//                 "Sign In"
//               )}
//             </button>
//           </form>

//           <div className="mt-6 text-center">
//             <p className="text-sm text-gray-600">
//               Don't have an account?{" "}
//               <Link href="/auth/register" className="text-blue-600 hover:underline">
//                 Sign up
//               </Link>
//             </p>
//           </div>
//         </div>

//         <div className="text-center mt-8">
//           <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
//             ← Back to home
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }





"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    school: '',
    role: 'student', // Default role is student
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const schools = [
    { id: '1', name: 'Riverside High School' },
    { id: '2', name: 'Oakwood Academy' },
    { id: '3', name: 'Pine Valley College' },
    { id: '4', name: 'Lakeshore University' },
    { id: '5', name: 'Other' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSchoolChange = (e) => {
    setFormData(prev => ({ ...prev, school: e.target.value }));
  };

  const handleRoleChange = (e) => {
    setFormData(prev => ({ ...prev, role: e.target.value }));
  };

  const toggleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // In a real implementation, you would verify credentials with a backend
      console.log('Login data:', formData, 'Remember me:', rememberMe);

      toast.success('Login successful! Redirecting to dashboard...');

      // Determine dashboard based on selected role
      const dashboardPath =
        formData.role === 'teacher' ? '/dashboard/teacher/dashboard' :
        formData.role === 'admin' ? '/dashboard/admin/dashboard' :
        '/dashboard/student/dashboard';

      setTimeout(() => {
        router.push(dashboardPath);
      }, 1500);
    } catch (error) {
      toast.error('Login failed. Please check your credentials.');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-600">Exam Elite</h1>
          </div>
          <div className="w-full bg-white rounded-lg shadow-lg border-t-4 border-t-blue-600 p-6">
            <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
           <p className="text-gray-600">Enter your credentials to access your account</p>
           </div>
          </div>
          <div className="bg-white shadow-md  p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  onChange={handleRoleChange}
                  value={formData.role}
                  disabled={isLoading}
                  className="w-full h-11 text-gray-700 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                >
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                  <option value="admin">Administrator</option>
                </select>
              </div>

              <div>
                <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-1">
                  Select Your School
                </label>
                <select
                  id="school"
                  name="school"
                  value={formData.school}
                  onChange={handleSchoolChange}
                  required
                  className="w-full h-11 text-gray-700 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a school</option>
                  {schools.map((school) => (
                    <option key={school.id} value={school.id}>
                      {school.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@school.edu"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full  text-gray-700 pl-10 h-11 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <a href="/auth/forgotpassword" className="text-sm text-blue-600 hover:underline">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full text-black  pl-10 h-11 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                  <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Logging in...
                  </>
                ) : 'Log in'}
              </button>
            </form>

            <div className="mt-4 text-center text-sm">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <a href="/auth/register" className="font-medium text-blue-600 hover:underline">
                  Register
                </a>
              </p>
              <p className="mt-2 text-xs text-gray-400">
                By logging in, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;