
"use client"
import React from "react";
import Footer from "../../../components/Footer";
import { Shield, Clock, LineChart, BookOpen, Users, BarChart3, CheckCircle, Zap, Settings } from "lucide-react";
import { motion } from "framer-motion";

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

const slideInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Features = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-10 bg-gradient-to-b from-education-primary/20 from-blue-100 to-white dark:from-education-primary/10">
        <div className="px-4 mx-auto max-w-6xl lg:pt-20 pt-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="flex flex-col items-center text-center"
          >
            <motion.h1
              variants={item}
              className="text-4xl md:text-5xl font-bold text-black mb-6"
            >
              Powerful Features for Modern Education
            </motion.h1>
            <motion.p
              variants={item}
              className="text-xl text-black max-w-3xl mb-8"
            >
              Discover how Exam Elite transforms assessment management with our comprehensive feature set
            </motion.p>
            <motion.div
              variants={item}
              className="w-24 h-1 bg-education-primary rounded mb-12"
            />
          </motion.div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-5">
        <div className="px-4 mx-auto max-w-6xl">
          {/* Secure Examination */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20"
          >
            <motion.div variants={slideInFromLeft}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block p-4 bg-education-primary/10 rounded-full mb-4"
              >
                <Shield className="h-8 w-8 text-[#1447E6]" />
              </motion.div>
              <motion.h2
                variants={item}
                className="text-3xl font-bold text-black mb-4"
              >
                Secure Examination Environment
              </motion.h2>
              <motion.p
                variants={item}
                className="text-black mb-6"
              >
                Our platform provides a secure environment for conducting online examinations with advanced proctoring options, time restrictions, and anti-cheating measures.
              </motion.p>
              <motion.ul
                variants={container}
                className="space-y-3"
              >
                {[
                  "Browser lockdown mode",
                  "Randomized question order",
                  "Copy-paste prevention"
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    variants={item}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-black">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              variants={slideInFromRight}
              whileHover={{ scale: 1.02 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="/asset/secure2.svg"
                alt="Secure examination"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>

          {/* Question Banks */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20"
          >
            <motion.div
              variants={slideInFromRight}
              whileHover={{ scale: 1.02 }}
              className="order-2 md:order-1 rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="/asset/exam.svg"
                alt="Question bank"
                className="w-full h-auto"
              />
            </motion.div>

            <motion.div variants={slideInFromLeft} className="order-1 md:order-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block p-4 bg-education-primary/10 rounded-full mb-4"
              >
                <BookOpen className="h-8 w-8 text-[#1447E6]" />
              </motion.div>
              <motion.h2
                variants={item}
                className="text-3xl font-bold text-black mb-4"
              >
                Comprehensive Question Banks
              </motion.h2>
              <motion.p
                variants={item}
                className="text-black mb-6"
              >
                Create, organize, and manage extensive question banks categorized by subject, difficulty level, and topic for easy exam creation.
              </motion.p>
              <motion.ul
                variants={container}
                className="space-y-3"
              >
                {[
                  "Multiple question formats supported",
                  "Collaborative question creation",
                  "Import/export capabilities"
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    variants={item}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-black">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>

          {/* Analytics */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={slideInFromLeft}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block p-4 bg-education-primary/10 rounded-full mb-4"
              >
                <LineChart className="h-8 w-8 text-[#1447E6]" />
              </motion.div>
              <motion.h2
                variants={item}
                className="text-3xl font-bold text-black mb-4"
              >
                Advanced Analytics & Reporting
              </motion.h2>
              <motion.p
                variants={item}
                className="text-black mb-6"
              >
                Gain valuable insights with detailed performance analytics, helping identify strengths and areas for improvement at individual and class levels.
              </motion.p>
              <motion.ul
                variants={container}
                className="space-y-3"
              >
                {[
                  "Visual performance dashboards",
                  "Comparative analysis tools",
                  "Downloadable detailed reports"
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    variants={item}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-black">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              variants={slideInFromRight}
              whileHover={{ scale: 1.02 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="/asset/chart.svg"
                alt="Analytics dashboard"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
            className="text-center mb-16"
          >
            <motion.h2
              variants={item}
              className="text-3xl font-bold text-black mb-4"
            >
              More Powerful Features
            </motion.h2>
            <motion.p
              variants={item}
              className="text-xl text-black max-w-3xl mx-auto"
            >
              Everything you need for effective exam management
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Clock className="h-6 w-6 text-blue-600" />,
                title: "Automated Scheduling",
                desc: "Schedule exams with automated notifications, reminders, and calendar integrations to keep everyone on track.",
                bg: "bg-blue-100"
              },
              {
                icon: <Zap className="h-6 w-6 text-green-600" />,
                title: "Instant Grading",
                desc: "Automatic grading for objective questions with support for custom rubrics for subjective answers.",
                bg: "bg-green-100"
              },
              {
                icon: <Users className="h-6 w-6 text-purple-600" />,
                title: "Role-Based Access",
                desc: "Customizable access controls for administrators, teachers, and students with detailed permission settings.",
                bg: "bg-purple-100"
              },
              {
                icon: <BarChart3 className="h-6 w-6 text-amber-600" />,
                title: "Progress Tracking",
                desc: "Monitor student progress over time with historical performance data and improvement metrics.",
                bg: "bg-amber-100"
              },
              {
                icon: <Settings className="h-6 w-6 text-red-600" />,
                title: "Customization Options",
                desc: "Tailor the platform to match your institution's branding and specific examination requirements.",
                bg: "bg-red-100"
              },
              {
                icon: <Shield className="h-6 w-6 text-teal-600" />,
                title: "Privacy Compliance",
                desc: "Built with privacy and data protection in mind, ensuring compliance with educational data regulations.",
                bg: "bg-teal-100"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className={`inline-block p-4 ${feature.bg} rounded-full mb-4`}
                >
                  {feature.icon}
                </motion.div>
                <motion.h3
                  whileHover={{ color: "#2563eb" }}
                  className="text-xl font-bold text-gray-900 mb-3"
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  className="text-black"
                >
                  {feature.desc}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-education-primary/20 from-blue-100">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-10 px-10"
        >
          <motion.div variants={slideInFromLeft}>
            <motion.h2
              variants={item}
              className="text-3xl font-bold text-black mb-6"
            >
              Experience These Features Yourself
            </motion.h2>
            <motion.p
              variants={item}
              className="text-xl text-black max-w-3xl mx-auto mb-8"
            >
              Schedule a demo today and see how Exam Elite can transform your examination process.
            </motion.p>
            <motion.div
              variants={container}
              className="flex flex-col sm:flex-row justify-center gap-4 lg:py-40 py-20"
            >
              <motion.a
                variants={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/website/contact"
                className="bg-[#1447E6] text-white hover:bg-gray-100 px-8 py-3 rounded-md font-medium text-lg transition-colors"
              >
                Request Demo
              </motion.a>
              <motion.a
                variants={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/auth/register"
                className="bg-black text-white border border-white hover:bg-blue-500 px-8 py-3 rounded-md font-medium text-lg transition-colors"
              >
                Sign Up Free
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={slideInFromRight}
            whileHover={{ scale: 1.02 }}
            className="order-2 md:order-1 rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src="/asset/online.svg"
              alt="Online exam illustration"
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </section>

      <div className="py-5">
        <Footer />
      </div>
    </div>
  );
};

export default Features;