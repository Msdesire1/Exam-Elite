// "use client"
// import { useState } from "react";
// import Link from "next/link";
// import {
//   Book,
//   CheckCircle,
//   Clock,
//   GraduationCap,
//   LineChart,
//   Menu,
//   Monitor,
//   Shield,
//   Users,
//   X
// } from "lucide-react";
// import Footer from "../components/Footer";

// export default function Home() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50  ">
//  {/* Hero */}
//       <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-100  to-gray-100 overflow-hidden">
//         <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-center bg-no-repeat bg-cover opacity-5"></div>
//         <div className=" relative px-4 sm:px-6 lg:px-20">
//           <div className="grid gap-12 md:grid-cols-2 items-center">
//             <div className="flex flex-col gap-6">
//               <span className="w-fit px-3 py-1 rounded-full bg-blue-600 text-white text-sm font-medium">
//                 Modern CBT Platform
//               </span>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black">
//                 The Ultimate <span className="text-blue-600">Examination</span> Platform
//               </h1>
//               <p className="text-lg text-gray-600 ">
//                 Streamline your educational assessment with our advanced  computer-based <br/> testing solution. Perfect for schools, teachers, and students.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4 mt-4">
//                 <Link  href="/auth/register">
//                   <button className="w-full sm:w-auto px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700">
//                     Get Started
//                   </button>
//                 </Link>
//                 <Link  href="/website/features">
//                   <button className="w-full sm:w-auto px-6 py-3 text-black rounded-md border border-gray-300 font-medium hover:bg-gray-50">
//                     Learn More
//                   </button>
//                 </Link>
//               </div>
//             </div>

//             <div className="relative aspect-video md:aspect-square rounded-lg overflow-hidden shadow-xl border border-gray-200">
//               <img
//                 src="/asset/hero1.svg"
//                 alt="Exam Platform"
//                 className="w-full h-full "
//               />
//   {/* <div style={{ position: 'relative', paddingBottom: '60.25%', height: 0, overflow: 'hidden' }}>
//   <iframe
//     src="https://www.youtube-nocookie.com/embed/shXUfZ6bC4w?rel=0&modestbranding=1"
//     style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
//     allowFullScreen
//     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//     loading="lazy"
//     title="Computer-Based Exams in African Schools"
//   />
// </div> */}
//               <div className="absolute lg:bottom-4 lg:left-4 right-4 bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200">
//                 <div className="flex items-center gap-3">
//                   <div className="w-2 h-2 rounded-full bg-green-500"></div>
//                   <span className="text-sm font-medium text-black">Live Exam in Progress</span>
//                 </div>
//                 <div className="mt-2 flex justify-between items-center">
//                   <span className="text-sm text-gray-600">Mathematics - Grade 10</span>
//                   <span className="text-sm font-semibold flex items-center text-black">
//                     <Clock className="h-3 w-3 mr-1" /> 45:22
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
//             <div className="flex flex-col items-center text-center p-4 rounded-lg bg-white border border-gray-200">
//               <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
//                 <Users className="h-6 w-6 text-blue-600" />
//               </div>
//               <h3 className="font-semibold  text-black">5,000+</h3>
//               <p className="text-sm text-gray-600">Students</p>
//             </div>

//             <div className="flex flex-col items-center text-center p-4 rounded-lg bg-white border border-gray-200">
//               <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
//                 <GraduationCap className="h-6 w-6 text-blue-600" />
//               </div>
//               <h3 className="font-semibold  text-black">250+</h3>
//               <p className="text-sm text-gray-600">Teachers</p>
//             </div>

//             <div className="flex flex-col items-center text-center p-4 rounded-lg bg-white border border-gray-200">
//               <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
//                 <Book className="h-6 w-6 text-blue-600" />
//               </div>
//               <h3 className="font-semibold text-black">1,200+</h3>
//               <p className="text-sm text-gray-600">Exams</p>
//             </div>

//             <div className="flex flex-col items-center text-center p-4 rounded-lg bg-white border border-gray-200">
//               <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
//                 <CheckCircle className="h-6 w-6 text-blue-600" />
//               </div>
//               <h3 className="font-semibold  text-black">95%</h3>
//               <p className="text-sm text-gray-600">Satisfaction</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features */}
//       <section className="py-20 bg-gray-100/30">
//         <div className=" px-4 sm:px-6 lg:px-20">
//           <div className="text-center mb-16">
//             <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-2">
//               Features
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold  text-black">Why Choose Exam Elite?</h2>
//             <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//               Our platform offers a comprehensive suite of tools to make computer-based testing efficient, secure, and effective for educational institutions.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <div className="bg-white border border-gray-200 rounded-lg p-6 transition-all hover:shadow-md hover:border-blue-200">
//               <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
//                 <Monitor className="h-6 w-6 text-blue-600" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2  text-black">Easy Exam Creation</h3>
//               <p className="text-gray-600">
//                 Teachers can quickly create multiple-choice questions with our intuitive interface. Automatic grading saves time and reduces errors.
//               </p>
//             </div>

//             <div className="bg-white border border-gray-200 rounded-lg p-6 transition-all hover:shadow-md hover:border-blue-200">
//               <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
//                 <Shield className="h-6 w-6 text-blue-600" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2  text-black">Secure Testing</h3>
//               <p className="text-gray-600">
//                 Our platform ensures exam integrity with randomized questions, time limits, and access controls to prevent cheating.
//               </p>
//             </div>

//             <div className="bg-white border border-gray-200 rounded-lg p-6 transition-all hover:shadow-md hover:border-blue-200">
//               <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
//                 <LineChart className="h-6 w-6 text-blue-600" />
//               </div>
//               <h3 className="text-xl font-semibold mb-2  text-black">Comprehensive Analytics</h3>
//               <p className="text-gray-600">
//                 Get detailed insights into student performance with our advanced analytics dashboard, helping identify areas for improvement.
//               </p>
//             </div>
//           </div>

//           <div className="text-center mt-12">
//             <Link  href="/website/features">
//               <button className="px-4 py-2 text-sm font-medium  text-black rounded-md border border-gray-300 hover:bg-gray-50">
//                 View All Features
//               </button>
//             </Link>
//           </div>
//         </div>
//       </section>


// <section className="py-20 bg-gradient-to-b from-education-primary/20 from-blue-100">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-10 lg:px-20 px-5">
//          <div>
//         <h2 className="text-3xl font-bold  text-black mb-6">
//         Ready to Transform Your Examination Process?
//           </h2>
//           <p className="text-xl text-black max-w-3xl mx-auto mb-8">
//           Join thousands of educational institutions that have already streamlined their assessment workflow with Exam Elite.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4 lg:py-40 py-20">
//             <a
//               href="/auth/register"
//               className="bg-[#1447E6] text-white hover:bg-gray-300 px-8 py-3 rounded-md font-medium text-lg transition-colors"
//             >
//           Sign Up Now
//             </a>
//             <a
//               href="/auth/register"
//               className="bg-black text-white border border-white hover:bg-blue-500 px-8 py-3 rounded-md font-medium text-lg transition-colors"
//             >
//              Contact Sales
//             </a>
//           </div>
// </div>

// <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-xl">
//               <img
//                 src="/asset/homeb.svg"
//                 alt="Question bank"
//                 className="w-full h-auto"
//               />
//             </div>
//         </div>
//       </section>

// <Footer/>
//     </div>
//   );
// };





"use client"
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Book,
  CheckCircle,
  Clock,
  GraduationCap,
  LineChart,
  Menu,
  Monitor,
  Shield,
  Users,
  X
} from "lucide-react";
import Footer from "../components/Footer";

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

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-100 to-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-center bg-no-repeat bg-cover opacity-5"></div>
        <div className="relative px-4 sm:px-6 lg:px-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="grid gap-12 md:grid-cols-2 items-center"
          >
            <div className="flex flex-col gap-6">
              <motion.span
                variants={popIn}
                className="w-fit px-3 py-1 rounded-full bg-blue-600 text-white text-sm font-medium"
              >
                Modern CBT Platform
              </motion.span>

              <motion.h1
                variants={item}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black"
              >
                The Ultimate <motion.span
                  className="text-blue-600 inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >Examination</motion.span> Platform
              </motion.h1>

              <motion.p
                variants={textFadeIn}
                className="text-lg text-gray-600"
              >
                Streamline your educational assessment with our advanced computer-based <br/> testing solution. Perfect for schools, teachers, and students.
              </motion.p>

              <motion.div
                variants={item}
                className="flex flex-col sm:flex-row gap-4 mt-4"
              >
                <Link href="/auth/register">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700"
                  >
                    Get Started
                  </motion.button>
                </Link>
                <Link href="/website/features">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-6 py-3 text-black rounded-md border border-gray-300 font-medium hover:bg-gray-50"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            <motion.div
              variants={imageScaleIn}
              className="relative aspect-video md:aspect-square rounded-lg overflow-hidden shadow-xl border border-gray-200"
            >
              <motion.img
                src="/asset/hero1.svg"
                alt="Exam Platform"
                className="w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute lg:bottom-4 lg:left-4 right-4 bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-2 h-2 rounded-full bg-green-500"
                  ></motion.div>
                  <motion.span
                    className="text-sm font-medium text-black"
                    variants={textFadeIn}
                  >
                    Live Exam in Progress
                  </motion.span>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <motion.span
                    className="text-sm text-gray-600"
                    variants={textFadeIn}
                  >
                    Mathematics - Grade 10
                  </motion.span>
                  <motion.span
                    className="text-sm font-semibold flex items-center text-black"
                    variants={textFadeIn}
                  >
                    <Clock className="h-3 w-3 mr-1" /> 45:22
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          >
            {[
              { icon: <Users className="h-6 w-6 text-blue-600" />, value: "5,000+", label: "Students" },
              { icon: <GraduationCap className="h-6 w-6 text-blue-600" />, value: "250+", label: "Teachers" },
              { icon: <Book className="h-6 w-6 text-blue-600" />, value: "1,200+", label: "Exams" },
              { icon: <CheckCircle className="h-6 w-6 text-blue-600" />, value: "95%", label: "Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center p-4 rounded-lg bg-white border border-gray-200"
              >
                <motion.div
                  className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.h3
                  className="font-semibold text-black"
                  whileInView={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.h3>
                <motion.p
                  className="text-sm text-gray-600"
                  variants={textFadeIn}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-100/30">
        <div className="px-4 sm:px-6 lg:px-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
            className="text-center mb-16"
          >
            <motion.span
              variants={item}
              className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-2"
            >
              Features
            </motion.span>
            <motion.h2
              variants={item}
              className="text-3xl md:text-4xl font-bold text-black"
            >
              Why Choose Exam Elite?
            </motion.h2>
            <motion.p
              variants={textFadeIn}
              className="mt-4 text-gray-600 max-w-2xl mx-auto"
            >
              Our platform offers a comprehensive suite of tools to make computer-based testing efficient, secure, and effective for educational institutions.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <Monitor className="h-6 w-6 text-blue-600" />,
                title: "Easy Exam Creation",
                desc: "Teachers can quickly create multiple-choice questions with our intuitive interface. Automatic grading saves time and reduces errors."
              },
              {
                icon: <Shield className="h-6 w-6 text-blue-600" />,
                title: "Secure Testing",
                desc: "Our platform ensures exam integrity with randomized questions, time limits, and access controls to prevent cheating."
              },
              {
                icon: <LineChart className="h-6 w-6 text-blue-600" />,
                title: "Comprehensive Analytics",
                desc: "Get detailed insights into student performance with our advanced analytics dashboard, helping identify areas for improvement."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="bg-white border border-gray-200 rounded-lg p-6 transition-all"
              >
                <motion.div
                  className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4"
                  whileHover={{ rotate: 10 }}
                >
                  {feature.icon}
                </motion.div>
                <motion.h3
                  className="text-xl font-semibold mb-2 text-black"
                  whileHover={{ color: "#2563eb" }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600"
                  variants={textFadeIn}
                >
                  {feature.desc}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/website/features">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-sm font-medium text-black rounded-md border border-gray-300 hover:bg-gray-50"
              >
                View All Features
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-education-primary/20 from-blue-100">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-10 lg:px-20 px-5"
        >
          <div>
            <motion.h2
              variants={item}
              className="text-3xl font-bold text-black mb-6"
            >
              Ready to Transform Your Examination Process?
            </motion.h2>
            <motion.p
              variants={textFadeIn}
              className="text-xl text-black max-w-3xl mx-auto mb-8"
            >
              Join thousands of educational institutions that have already streamlined their assessment workflow with Exam Elite.
            </motion.p>
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row justify-center gap-4 lg:py-40 py-20"
            >
              <Link href="/auth/register">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#1447E6] text-white hover:bg-gray-300 px-8 py-3 rounded-md font-medium text-lg transition-colors"
                >
                  Sign Up Now
                </motion.button>
              </Link>
              <Link href="/auth/register">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white border border-white hover:bg-blue-500 px-8 py-3 rounded-md font-medium text-lg transition-colors"
                >
                  Contact Sales
                </motion.button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={imageScaleIn}
            className="order-2 md:order-1 rounded-lg overflow-hidden shadow-xl"
          >
            <motion.img
              src="/asset/homeb.svg"
              alt="Question bank"
              className="w-full h-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};