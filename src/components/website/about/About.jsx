
import React from "react";
import Footer from "../../../components/Footer";
import { CheckCircle, Book, Clock, Award, Users, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-28 bg-gradient-to-b from-education-primary/20 from-blue-100 to-white dark:from-education-primary/10 dark:to-gray-900">
        <div className="px-4 mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold  text-black  mb-6">
              About Exam Elite
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mb-8">
              We're dedicated to revolutionizing how educational institutions manage examinations,
              making the process seamless, secure, and student-focused.
            </p>
            <div className="w-24 h-1 bg-education-primary rounded mb-12"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/asset/blue.svg"
                alt="Students taking exam"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold  text-black  mb-4">
                Our Mission
              </h2>
              <p className=" text-black mb-4">
                To empower educational institutions with cutting-edge examination tools that
                enhance assessment quality, reduce administrative burden, and support student
                academic growth.
              </p>
              <p className=" text-black ">
                We believe that efficient and effective examination processes are fundamental
                to quality education, providing students and educators with valuable insights
                for continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-10 bg-gray-50 ">
        <div className=" px-4 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold  text-black  mb-4">
              Our Core Values
            </h2>
            <p className="text-xl  text-black  max-w-3xl mx-auto">
              These principles guide everything we do at Exam Elite
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white  rounded-lg p-8 shadow-md text-center">
              <div className="inline-block p-4 bg-education-primary/10 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-[#1447E6]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Integrity
              </h3>
              <p className=" text-black ">
                We maintain the highest standards of honesty and ethical conduct,
                ensuring exam security and fairness.
              </p>
            </div>

            <div className="bg-white  text-black  rounded-lg p-8 shadow-md text-center">
              <div className="inline-block p-4 bg-education-primary/10 rounded-full mb-4">
                <Book className="h-8 w-8 text-[#1447E6]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Excellence
              </h3>
              <p className=" text-black ">
                We continuously strive for excellence in our platform, features,
                and support to help institutions deliver quality assessments.
              </p>
            </div>

            <div className="bg-white  rounded-lg p-8 shadow-md text-center">
              <div className="inline-block p-4 bg-education-primary/10 rounded-full mb-4">
                <Clock className="h-8 w-8 text-[#1447E6]" />
              </div>
              <h3 className="text-xl font-bold  text-black  mb-3">
                Innovation
              </h3>
              <p className=" text-black ">
                We embrace new technologies and approaches to improve the
                examination experience for students and educators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-block p-4 bg-education-primary/10 rounded-full mb-4">
                <Award className="h-8 w-8 text-[#1447E6]" />
              </div>
              <h3 className="text-4xl font-bold  text-black  mb-2">10+</h3>
              <p className=" text-black ">Years of Experience</p>
            </div>

            <div className="text-center">
              <div className="inline-block p-4 bg-education-primary/10 rounded-full mb-4">
                <Users className="h-8 w-8 text-[#1447E6]" />
              </div>
              <h3 className="text-4xl font-bold  text-black  mb-2">50,000+</h3>
              <p className=" text-black ">Students Served</p>
            </div>

            <div className="text-center">
              <div className="inline-block p-4 bg-education-primary/10 rounded-full mb-4">
                <GraduationCap className="h-8 w-8 text-[#1447E6]" />
              </div>
              <h3 className="text-4xl font-bold  text-black  mb-2">500+</h3>
              <p className=" text-black ">Schools</p>
            </div>

            <div className="text-center">
              <div className="inline-block p-4 bg-education-primary/10 rounded-full mb-4">
                <Book className="h-8 w-8 text-[#1447E6]" />
              </div>
              <h3 className="text-4xl font-bold  text-black mb-2">1M+</h3>
              <p className=" text-black ">Exams Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold  text-black  mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl  text-black  max-w-3xl mx-auto">
              Experienced professionals dedicated to educational innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white  text-black  rounded-lg overflow-hidden shadow-md">
              <img
                src="/asset/teacher.svg"
                alt="Team member"
                className="w-full  object-cover pt-3"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold  text-black  mb-1">
                  Sarah Johnson
                </h3>
                <p className="text-education-primary mb-3">Chief Executive Officer</p>
                <p className=" text-black ">
                  Former school principal with 15 years of experience in education technology.
                </p>
              </div>
            </div>

            <div className="bg-white  rounded-lg overflow-hidden shadow-md">
              <img
                src="/asset/teacher1.svg"
                alt="Team member"
                className="w-full pt-10 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold  text-black  mb-1">
                  James Thompson
                </h3>
                <p className="text-education-primary mb-3">Chief Technology Officer</p>
                <p className=" text-black ">
                  Software architect specialized in secure assessment platforms.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="/asset/teacher2.svg"
                alt="Team member"
                className="w-full pt-10 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold  text-black  mb-1">
                  Emily Chen
                </h3>
                <p className="text-education-primary mb-3">Head of Educational Content</p>
                <p className=" text-black ">
                  PhD in Education with expertise in assessment methodologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-education-primary/20 from-blue-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-10 px-10">
         <div>
        <h2 className="text-3xl font-bold  text-black mb-6">
            Ready to Transform Your Examination Process?
          </h2>
          <p className="text-xl  text-black  max-w-3xl mx-auto mb-8">
            Join over 500 schools already using Exam Elite to streamline their assessments.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 lg:py-40 py-20">
            <a
              href="/contact"
              className="bg-[#1447E6] text-white hover:bg-gray-300 px-8 py-3 rounded-md font-medium text-lg transition-colors"
            >
           Contact Us
            </a>
            <a
              href="/register"
              className="bg-black text-white border border-white hover:bg-blue-500 px-8 py-3 rounded-md font-medium text-lg transition-colors"
            >
              Register Now
            </a>
          </div>
</div>

<div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-xl">
              <img
                src="/asset/data.svg"
                alt="Question bank"
                className="w-full h-auto"
              />
            </div>



        </div>
      </section>
<Footer/>
    </div>
  );
};

export default About;
