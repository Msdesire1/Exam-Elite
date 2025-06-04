
// import React from "react";

// import Footer from "../../../components/Footer";
// import { Star, Award, GraduationCap, BookOpen, CheckCircle } from "lucide-react";
// export default function TeachersPage() {

//   const featuredTeachers = [
//     {
//       id: 1,
//       name: "Dr. Sarah Johnson",
//       role: "Mathematics Department Head",
//       image: "/asset/Classroom.svg",
//       expertise: "Advanced Calculus, Algebra",
//       experience: "15+ years",
//       education: "Ph.D. in Mathematics, Harvard ",
//       rating: 4.9
//     },
//     {
//       id: 2,
//       name: "Prof. Michael Chen",
//       role: "Science Department Head",
//       image: "/asset/Lesson.svg",
//       expertise: "Physics, Chemistry",
//       experience: "12+ years",
//       education: "Ph.D. in Physics, MIT",
//       rating: 4.8
//     },
//     {
//       id: 3,
//       name: "Ms. Emily Rodriguez",
//       role: "English Department Head",
//       image: "/asset/teaher3.svg",
//       expertise: "Literature, Creative Writing",
//       experience: "10+ years",
//       education: "M.A. in English Literature, Stanford ",
//       rating: 4.7
//     },
//     {
//       id: 4,
//       name: "Dr. James Wilson",
//       role: "History Department Head",
//       image: "/asset/seminar.svg",
//       expertise: "World History, Political Science",
//       experience: "18+ years",
//       education: "Ph.D. in History, Columbia University",
//       rating: 4.9
//     },
//     {
//       id: 5,
//       name: "Prof. Olivia Thompson",
//       role: "Computer Science Instructor",
//       image: "/asset/teacher.svg",
//       expertise: "Programming, Data Structures",
//       experience: "8+ years",
//       education: "M.S. in Computer Science, UC",
//       rating: 4.6
//     },
//     {
//       id: 6,
//       name: "Dr. Robert Lee",
//       role: "Economics Department Head",
//       image: "/asset/teacher2.svg",
//       expertise: "Macroeconomics, Finance",
//       experience: "14+ years",
//       education: "Ph.D. in Economics, Yale",
//       rating: 4.8
//     }
//   ];

//   return (
//     <div className="bg-gray-50 ">
//       {/* Hero Section */}
//       <section className="py-28 bg-gradient-to-b from-blue-100 to-white">
//         <div className="px-4 mx-auto max-w-6xl">
//           <div className="flex flex-col items-center text-center">
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Meet Our Expert Teachers
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mb-8">
//               Our qualified and experienced faculty are dedicated to helping students excel in their academic journey
//             </p>
//             <div className="w-24 h-1 bg-blue-600 rounded mb-12"></div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Teachers Section */}
//       <section className="py-10 bg-white">
//         <div className=" px-4 mx-auto max-w-6xl">
//           <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
//             Our Featured Teachers
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {featuredTeachers.map((teacher) => (
//               <div key={teacher.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 duration-300">
//                 <div className="h-64 overflow-hidden">
//                   <img
//                     src={teacher.image}
//                     alt={teacher.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <div className="flex justify-between items-start mb-2">
//                     <h3 className="text-xl font-bold text-gray-900">
//                       {teacher.name}
//                     </h3>
//                     <div className="flex items-center bg-yellow-100 px-2 py-1 rounded">
//                       <Star className="h-4 w-4 text-yellow-500 mr-1" />
//                       <span className="text-sm font-medium text-yellow-700">{teacher.rating}</span>
//                     </div>
//                   </div>
//                   <p className="text-blue-600 mb-4">{teacher.role}</p>

//                   <div className="space-y-2 mb-4">
//                     <div className="flex items-start">
//                       <BookOpen className="h-5 w-5 text-gray-900 mt-0.5 mr-2" />
//                       <span className="text-gray-900">{teacher.expertise}</span>
//                     </div>
//                     <div className="flex items-start">
//                       <GraduationCap className="h-5 w-5 text-gray-900 mt-0.5 mr-2" />
//                       <span className="text-gray-700">{teacher.education}</span>
//                     </div>
//                     <div className="flex items-start">
//                       <Award className="h-5 w-5 text-gray-500 mt-0.5 mr-2" />
//                       <span className="text-gray-700">{teacher.experience}</span>
//                     </div>
//                   </div>

//                   <button className="w-full px-4 py-2  text-black border border-gray-300 rounded-md hover:bg-gray-50">
//                     View Profile
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Our Teachers Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container px-4 mx-auto max-w-6xl">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               Why Choose Our Teachers
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Our faculty brings together academic excellence and practical experience
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="bg-white p-6 rounded-lg shadow-md text-center">
//               <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
//                 <GraduationCap className="h-8 w-8 text-blue-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">
//                 Highly Qualified
//               </h3>
//               <p className="text-gray-600">
//                 All teachers hold advanced degrees from prestigious universities and maintain current certifications.
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-lg shadow-md text-center">
//               <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
//                 <Award className="h-8 w-8 text-blue-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">
//                 Industry Experience
//               </h3>
//               <p className="text-gray-600">
//                 Our teachers bring real-world experience to the classroom, enriching the learning experience.
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-lg shadow-md text-center">
//               <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
//                 <CheckCircle className="h-8 w-8 text-blue-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">
//                 Continuous Training
//               </h3>
//               <p className="text-gray-600">
//                 Teachers regularly participate in professional development to stay current with best practices.
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-lg shadow-md text-center">
//               <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
//                 <BookOpen className="h-8 w-8 text-blue-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">
//                 Dedicated Mentors
//               </h3>
//               <p className="text-gray-600">
//                 Beyond teaching, our faculty are committed to mentoring students and supporting their goals.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-16 bg-white">
//         <div className="container px-4 mx-auto max-w-6xl">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               What Students Say
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Hear from students who have experienced our teachers' exceptional guidance
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-gray-50 p-8 rounded-lg shadow-md relative">
//               <div className="text-4xl text-blue-200 font-serif absolute top-4 left-4">"</div>
//               <p className="text-gray-600 mb-6 pt-6">
//                 Dr. Johnson's approach to teaching mathematics made complex concepts understandable.
//                 Her patience and dedication helped me develop confidence in my abilities.
//               </p>
//               <div className="flex items-center">
//                 <div className="h-12 w-12 rounded-full bg-gray-300 overflow-hidden mr-4">
//                   <img src="/asset/onteacher.svg" alt="Student" className="w-full h-full object-cover" />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-medium text-gray-900">Alex Thompson</h4>
//                   <p className="text-sm text-gray-500">Senior Student, Mathematics</p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gray-50 p-8 rounded-lg shadow-md relative">
//               <div className="text-4xl text-blue-200 font-serif absolute top-4 left-4">"</div>
//               <p className="text-gray-600 mb-6 pt-6">
//                 Professor Chen's physics class was the highlight of my academic year.
//                 His practical demonstrations and clear explanations made physics fascinating.
//               </p>
//               <div className="flex items-center">
//                 <div className="h-12 w-12 rounded-full bg-gray-300 overflow-hidden mr-4">
//                   <img src="/asset/onteacher.svg" alt="Student" className="w-full h-full object-cover" />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-medium text-gray-900">Sophia Martinez</h4>
//                   <p className="text-sm text-gray-500">Junior Student, Science</p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gray-50 p-8 rounded-lg shadow-md relative">
//               <div className="text-4xl text-blue-200 font-serif absolute top-4 left-4">"</div>
//               <p className="text-gray-600 mb-6 pt-6">
//                 Ms. Rodriguez's passion for literature is contagious. Her creative teaching methods
//                 have inspired me to pursue a career in writing and literary studies.
//               </p>
//               <div className="flex items-center">
//                 <div className="h-12 w-12 rounded-full bg-gray-300 overflow-hidden mr-4">
//                   <img src="/asset/onteacher.svg" alt="Student" className="w-full h-full object-cover" />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-medium text-gray-900">David Williams</h4>
//                   <p className="text-sm text-gray-500">Senior Student, English</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Join Our Team CTA */}
//        <section className="py-20 bg-gradient-to-b from-education-primary/20 from-blue-100">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-10 px-10">
//          <div>
//         <h2 className="text-3xl font-bold text-black  mb-6">
//         Interested in Joining Our Teaching Team?
//           </h2>
//           <p className="text-xl text-black  max-w-3xl mx-auto mb-8">
//           We're always looking for talented educators who are passionate about student success.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4 lg:py-40 py-20">
//             <a
//               href="/contact"
//               className="bg-[#1447E6] text-white hover:bg-gray-300 px-8 py-3 rounded-md font-medium text-lg transition-colors"
//             >
//            View Open Positions
//             </a>
//             <a
//               href="/register"
//               className="bg-black text-white border border-white hover:bg-blue-500 px-8 py-3 rounded-md font-medium text-lg transition-colors"
//             >
//                Learn About Benefits
//             </a>
//           </div>
//          </div>

//            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-xl">
//               <img
//                 src="/asset/onteacher.svg"
//                 alt="Question bank"
//                 className="w-full h-auto"
//               />
//             </div>



//         </div>
//       </section>
// <Footer/>
//     </div>
//   );
// }

"use client";
import React from "react";
import { motion } from "framer-motion";
import Footer from "../../../components/Footer";
import { Star, Award, GraduationCap, BookOpen, CheckCircle } from "lucide-react";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

const popIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const textFadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const imageScaleIn = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function TeachersPage() {
  const featuredTeachers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Mathematics Department Head",
      image: "/asset/Classroom.svg",
      expertise: "Advanced Calculus, Algebra",
      experience: "15+ years",
      education: "Ph.D. in Mathematics, Harvard",
      rating: 4.9
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      role: "Science Department Head",
      image: "/asset/Lesson.svg",
      expertise: "Physics, Chemistry",
      experience: "12+ years",
      education: "Ph.D. in Physics, MIT",
      rating: 4.8
    },
    {
      id: 3,
      name: "Ms. Emily Rodriguez",
      role: "English Department Head",
      image: "/asset/teaher3.svg",
      expertise: "Literature, Creative Writing",
      experience: "10+ years",
      education: "M.A. in English Literature, Stanford",
      rating: 4.7
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      role: "History Department Head",
      image: "/asset/seminar.svg",
      expertise: "World History, Political Science",
      experience: "18+ years",
      education: "Ph.D. in History, Columbia University",
      rating: 4.9
    },
    {
      id: 5,
      name: "Prof. Olivia Thompson",
      role: "Computer Science Instructor",
      image: "/asset/teacher.svg",
      expertise: "Programming, Data Structures",
      experience: "8+ years",
      education: "M.S. in Computer Science, UC",
      rating: 4.6
    },
    {
      id: 6,
      name: "Dr. Robert Lee",
      role: "Economics Department Head",
      image: "/asset/teacher2.svg",
      expertise: "Macroeconomics, Finance",
      experience: "14+ years",
      education: "Ph.D. in Economics, Yale",
      rating: 4.8
    }
  ];

  const teacherBenefits = [
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      title: "Highly Qualified",
      desc: "All teachers hold advanced degrees from prestigious universities and maintain current certifications."
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Industry Experience",
      desc: "Our teachers bring real-world experience to the classroom, enriching the learning experience."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
      title: "Continuous Training",
      desc: "Teachers regularly participate in professional development to stay current with best practices."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Dedicated Mentors",
      desc: "Beyond teaching, our faculty are committed to mentoring students and supporting their goals."
    }
  ];

  const testimonials = [
    {
      quote: "Dr. Johnson's approach to teaching mathematics made complex concepts understandable. Her patience and dedication helped me develop confidence in my abilities.",
      name: "Alex Thompson",
      role: "Senior Student, Mathematics"
    },
    {
      quote: "Professor Chen's physics class was the highlight of my academic year. His practical demonstrations and clear explanations made physics fascinating.",
      name: "Sophia Martinez",
      role: "Junior Student, Science"
    },
    {
      quote: "Ms. Rodriguez's passion for literature is contagious. Her creative teaching methods have inspired me to pursue a career in writing and literary studies.",
      name: "David Williams",
      role: "Senior Student, English"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-28 bg-gradient-to-b from-blue-100 to-white">
        <div className="px-4 mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="flex flex-col items-center text-center"
          >
            <motion.h1
              variants={popIn}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Meet Our Expert Teachers
            </motion.h1>
            <motion.p
              variants={textFadeIn}
              className="text-xl text-gray-600 max-w-3xl mb-8"
            >
              Our qualified and experienced faculty are dedicated to helping students excel in their academic journey
            </motion.p>
            <motion.div
              variants={fadeIn}
              className="w-24 h-1 bg-blue-600 rounded mb-12"
            ></motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Teachers Section */}
      <section className="py-10 bg-white">
        <div className="px-4 mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
          >
            Our Featured Teachers
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredTeachers.map((teacher) => (
              <motion.div
                key={teacher.id}
                variants={item}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all"
              >
                <motion.div
                  className="h-64 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  />
                </motion.div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <motion.h3
                      className="text-xl font-bold text-gray-900"
                      whileHover={{ color: "#2563eb" }}
                    >
                      {teacher.name}
                    </motion.h3>
                    <motion.div
                      className="flex items-center bg-yellow-100 px-2 py-1 rounded"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-medium text-yellow-700">{teacher.rating}</span>
                    </motion.div>
                  </div>
                  <motion.p
                    className="text-blue-600 mb-4"
                    variants={textFadeIn}
                  >
                    {teacher.role}
                  </motion.p>

                  <div className="space-y-2 mb-4">
                    <motion.div
                      className="flex items-start"
                      variants={textFadeIn}
                    >
                      <BookOpen className="h-5 w-5 text-gray-900 mt-0.5 mr-2" />
                      <span className="text-gray-900">{teacher.expertise}</span>
                    </motion.div>
                    <motion.div
                      className="flex items-start"
                      variants={textFadeIn}
                    >
                      <GraduationCap className="h-5 w-5 text-gray-900 mt-0.5 mr-2" />
                      <span className="text-gray-700">{teacher.education}</span>
                    </motion.div>
                    <motion.div
                      className="flex items-start"
                      variants={textFadeIn}
                    >
                      <Award className="h-5 w-5 text-gray-500 mt-0.5 mr-2" />
                      <span className="text-gray-700">{teacher.experience}</span>
                    </motion.div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-4 py-2 text-black border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    View Profile
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Our Teachers Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
            className="text-center mb-12"
          >
            <motion.h2 variants={item} className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Teachers
            </motion.h2>
            <motion.p variants={textFadeIn} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our faculty brings together academic excellence and practical experience
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teacherBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <motion.div
                  className="inline-block p-4 bg-blue-100 rounded-full mb-4"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  {benefit.icon}
                </motion.div>
                <motion.h3
                  className="text-xl font-bold text-gray-900 mb-3"
                  whileHover={{ color: "#2563eb" }}
                >
                  {benefit.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600"
                  variants={textFadeIn}
                >
                  {benefit.desc}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
            className="text-center mb-12"
          >
            <motion.h2 variants={item} className="text-3xl font-bold text-gray-900 mb-4">
              What Students Say
            </motion.h2>
            <motion.p variants={textFadeIn} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from students who have experienced our teachers' exceptional guidance
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-8 rounded-lg shadow-md relative"
              >
                <div className="text-4xl text-blue-200 font-serif absolute top-4 left-4">"</div>
                <motion.p
                  className="text-gray-600 mb-6 pt-6"
                  variants={textFadeIn}
                >
                  {testimonial.quote}
                </motion.p>
                <div className="flex items-center">
                  <motion.div
                    className="h-12 w-12 rounded-full bg-gray-300 overflow-hidden mr-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.img
                      src="/asset/onteacher.svg"
                      alt="Student"
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                  <div>
                    <motion.h4
                      className="text-lg font-medium text-gray-900"
                      whileHover={{ color: "#2563eb" }}
                    >
                      {testimonial.name}
                    </motion.h4>
                    <motion.p
                      className="text-sm text-gray-500"
                      variants={textFadeIn}
                    >
                      {testimonial.role}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gradient-to-b from-education-primary/20 from-blue-100">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-10 px-10"
        >
          <div>
            <motion.h2 variants={item} className="text-3xl font-bold text-black mb-6">
              Interested in Joining Our Teaching Team?
            </motion.h2>
            <motion.p variants={textFadeIn} className="text-xl text-black max-w-3xl mx-auto mb-8">
              We're always looking for talented educators who are passionate about student success.
            </motion.p>
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row justify-center gap-4 lg:py-40 py-20"
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#1447E6] text-white hover:bg-gray-300 px-8 py-3 rounded-md font-medium text-lg transition-colors"
              >
                View Open Positions
              </motion.a>
              <motion.a
                href="/register"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white border border-white hover:bg-blue-500 px-8 py-3 rounded-md font-medium text-lg transition-colors"
              >
                Learn About Benefits
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            variants={imageScaleIn}
            className="order-2 md:order-1 rounded-lg overflow-hidden shadow-xl"
          >
            <motion.img
              src="/asset/onteacher.svg"
              alt="Question bank"
              className="w-full h-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}