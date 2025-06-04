"use client";
import React from "react";
import Footer from "../../../components/Footer";
import { CheckCircle, Book, Clock, Award, Users, GraduationCap } from "lucide-react";
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

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-28 bg-gradient-to-b from-education-primary/20 from-blue-100 to-white dark:from-education-primary/10">
        <div className="px-4 mx-auto max-w-6xl">
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
              About Exam Elite
            </motion.h1>
            <motion.p
              variants={item}
              className="text-xl text-gray-600 max-w-3xl mb-8"
            >
              We're dedicated to revolutionizing how educational institutions manage examinations,
              making the process seamless, secure, and student-focused.
            </motion.p>
            <motion.div
              variants={item}
              className="w-24 h-1 bg-education-primary rounded mb-12"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
          >
            <motion.div
              variants={slideInFromLeft}
              whileHover={{ scale: 1.02 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src="/asset/blue.svg"
                alt="Students taking exam"
                className="w-full h-full"
              />
            </motion.div>
            <motion.div
              variants={slideInFromRight}
              className="flex flex-col justify-center"
            >
              <motion.h2
                variants={item}
                className="text-2xl font-bold text-black mb-4"
              >
                Our Mission
              </motion.h2>
              <motion.p
                variants={item}
                className="text-black mb-4"
              >
                To empower educational institutions with cutting-edge examination tools that
                enhance assessment quality, reduce administrative burden, and support student
                academic growth.
              </motion.p>
              <motion.p
                variants={item}
                className="text-black"
              >
                We believe that efficient and effective examination processes are fundamental
                to quality education, providing students and educators with valuable insights
                for continuous improvement.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-10 bg-gray-50">
        <div className="px-4 mx-auto max-w-6xl">
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
              Our Core Values
            </motion.h2>
            <motion.p
              variants={item}
              className="text-xl text-black max-w-3xl mx-auto"
            >
              These principles guide everything we do at Exam Elite
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
                icon: <CheckCircle className="h-8 w-8 text-[#1447E6]" />,
                title: "Integrity",
                desc: "We maintain the highest standards of honesty and ethical conduct, ensuring exam security and fairness."
              },
              {
                icon: <Book className="h-8 w-8 text-[#1447E6]" />,
                title: "Excellence",
                desc: "We continuously strive for excellence in our platform, features, and support to help institutions deliver quality assessments."
              },
              {
                icon: <Clock className="h-8 w-8 text-[#1447E6]" />,
                title: "Innovation",
                desc: "We embrace new technologies and approaches to improve the examination experience for students and educators."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="bg-white rounded-lg p-8 shadow-md text-center"
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="inline-block p-4 bg-education-primary/10 rounded-full mb-4"
                >
                  {value.icon}
                </motion.div>
                <motion.h3
                  whileHover={{ color: "#2563eb" }}
                  className="text-xl font-bold text-gray-900 mb-3"
                >
                  {value.title}
                </motion.h3>
                <motion.p className="text-black">
                  {value.desc}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="container px-4 mx-auto max-w-6xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Award className="h-8 w-8 text-[#1447E6]" />, value: "10+", label: "Years of Experience" },
              { icon: <Users className="h-8 w-8 text-[#1447E6]" />, value: "50,000+", label: "Students Served" },
              { icon: <GraduationCap className="h-8 w-8 text-[#1447E6]" />, value: "500+", label: "Schools" },
              { icon: <Book className="h-8 w-8 text-[#1447E6]" />, value: "1M+", label: "Exams Completed" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="inline-block p-4 bg-education-primary/10 rounded-full mb-4">
                  {stat.icon}
                </div>
                <motion.h3
                  className="text-4xl font-bold text-black mb-2"
                  whileInView={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-black">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
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
              Meet Our Leadership Team
            </motion.h2>
            <motion.p
              variants={item}
              className="text-xl text-black max-w-3xl mx-auto"
            >
              Experienced professionals dedicated to educational innovation
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
                image: "/asset/teacher.svg",
                name: "Sarah Johnson",
                title: "Chief Executive Officer",
                bio: "Former school principal with 15 years of experience in education technology.",
                className: "pt-3"
              },
              {
                image: "/asset/teacher1.svg",
                name: "James Thompson",
                title: "Chief Technology Officer",
                bio: "Software architect specialized in secure assessment platforms.",
                className: "pt-10"
              },
              {
                image: "/asset/teacher2.svg",
                name: "Emily Chen",
                title: "Head of Educational Content",
                bio: "PhD in Education with expertise in assessment methodologies.",
                className: "pt-10"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
                className="bg-white text-black rounded-lg overflow-hidden shadow-md"
              >
                <motion.img
                  src={member.image}
                  alt="Team member"
                  className={`w-full object-cover ${member.className}`}
                  whileHover={{ scale: 1.05 }}
                />
                <div className="p-6">
                  <motion.h3
                    className="text-xl font-bold text-black mb-1"
                    whileHover={{ color: "#2563eb" }}
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p
                    className="text-education-primary mb-3"
                    whileHover={{ x: 5 }}
                  >
                    {member.title}
                  </motion.p>
                  <motion.p className="text-black">
                    {member.bio}
                  </motion.p>
                </div>
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
              Ready to Transform Your Examination Process?
            </motion.h2>
            <motion.p
              variants={item}
              className="text-xl text-black max-w-3xl mx-auto mb-8"
            >
              Join over 500 schools already using Exam Elite to streamline their assessments.
            </motion.p>
            <motion.div
              variants={container}
              className="flex flex-col sm:flex-row justify-center gap-4 lg:py-40 py-20"
            >
              <motion.a
                variants={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="bg-[#1447E6] text-white hover:bg-gray-300 px-8 py-3 rounded-md font-medium text-lg transition-colors"
              >
                Contact Us
              </motion.a>
              <motion.a
                variants={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/register"
                className="bg-black text-white border border-white hover:bg-blue-500 px-8 py-3 rounded-md font-medium text-lg transition-colors"
              >
                Register Now
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={slideInFromRight}
            whileHover={{ scale: 1.02 }}
            className="order-2 md:order-1 rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src="/asset/class.svg"
              alt="Question bank"
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
