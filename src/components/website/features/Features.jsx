
import React from "react";
import Footer from "../../../components/Footer";
import { Shield, Clock, LineChart, BookOpen, Users, BarChart3, CheckCircle, Zap, Settings } from "lucide-react";

const Features = () => {
  return (
    <div className="bg-gray-50 ">
      {/* Hero Section */}
      <section className="py-10 bg-gradient-to-b from-education-primary/20 from-blue-100 to-white dark:from-education-primary/10">
        <div className=" px-4 mx-auto max-w-6xl lg:pt-20 pt-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold  text-black  mb-6">
              Powerful Features for Modern Education
            </h1>
            <p className="text-xl text-black  max-w-3xl mb-8">
              Discover how Exam Elite transforms assessment management with our comprehensive feature set
            </p>
            <div className="w-24 h-1 bg-education-primary rounded mb-12"></div>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-5 ">
        <div className=" px-4 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="inline-block p-4 bg-education-primary/10 rounded-full mb-4">
                <Shield className="h-8 w-8 text-[#1447E6]" />
              </div>
              <h2 className="text-3xl font-bold  text-black  mb-4">
                Secure Examination Environment
              </h2>
              <p className="  text-black  mb-6">
                Our platform provides a secure environment for conducting online examinations with advanced proctoring options, time restrictions, and anti-cheating measures.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="  text-black ">Browser lockdown mode</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="  text-black ">Randomized question order</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="  text-black ">Copy-paste prevention</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/asset/secure2.svg"
                alt="Secure examination"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-xl">
              <img
                src="/asset/exam.svg"
                alt="Question bank"
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block p-4 bg-education-primary/10 rounded-full mb-4">
                <BookOpen className="h-8 w-8 text-[#1447E6]" />
              </div>
              <h2 className="text-3xl font-bold  text-black  mb-4">
                Comprehensive Question Banks
              </h2>
              <p className=" text-black  mb-6">
                Create, organize, and manage extensive question banks categorized by subject, difficulty level, and topic for easy exam creation.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="  text-black ">Multiple question formats supported</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className=" text-black ">Collaborative question creation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className=" text-black ">Import/export capabilities</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block p-4 bg-education-primary/10 rounded-full mb-4">
                <LineChart className="h-8 w-8 text-[#1447E6]" />
              </div>
              <h2 className="text-3xl font-bold  text-black  mb-4">
                Advanced Analytics & Reporting
              </h2>
              <p className=" text-black  mb-6">
                Gain valuable insights with detailed performance analytics, helping identify strengths and areas for improvement at individual and class levels.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className=" text-black ">Visual performance dashboards</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className=" text-black ">Comparative analysis tools</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className=" text-black ">Downloadable detailed reports</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/asset/chart.svg"
                alt="Analytics dashboard"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold  text-black   mb-4">
              More Powerful Features
            </h2>
            <p className="text-xl   text-black  max-w-3xl mx-auto">
              Everything you need for effective exam management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white  p-8 rounded-lg shadow-md">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Automated Scheduling
              </h3>
              <p className="text-black ">
                Schedule exams with automated notifications, reminders, and calendar integrations to keep everyone on track.
              </p>
            </div>

            <div className="bg-white  p-8 rounded-lg shadow-md">
              <div className="inline-block p-4 bg-green-100  rounded-full mb-4">
                <Zap className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Instant Grading
              </h3>
              <p className="text-black ">
                Automatic grading for objective questions with support for custom rubrics for subjective answers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-block p-4 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
                <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Role-Based Access
              </h3>
              <p className="text-black ">
                Customizable access controls for administrators, teachers, and students with detailed permission settings.
              </p>
            </div>

            <div className="bg-white  p-8 rounded-lg shadow-md">
              <div className="inline-block p-4 bg-amber-100  rounded-full mb-4">
                <BarChart3 className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Progress Tracking
              </h3>
              <p className="text-black ">
                Monitor student progress over time with historical performance data and improvement metrics.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-block p-4 bg-red-100  rounded-full mb-4">
                <Settings className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Customization Options
              </h3>
              <p className="text-black ">
                Tailor the platform to match your institution's branding and specific examination requirements.
              </p>
            </div>

            <div className="bg-white  p-8 rounded-lg shadow-md">
              <div className="inline-block p-4 bg-teal-100 dark:bg-teal-900/30 rounded-full mb-4">
                <Shield className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Privacy Compliance
              </h3>
              <p className=" text-black ">
                Built with privacy and data protection in mind, ensuring compliance with educational data regulations.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-education-primary/20 from-blue-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-10 px-10">
         <div>
        <h2 className="text-3xl font-bold  text-black  mb-6">
        Experience These Features Yourself
          </h2>
          <p className="text-xl  text-black  max-w-3xl mx-auto mb-8">
          Schedule a demo today and see how Exam Elite can transform your examination process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 lg:py-40 py-20">
            <a
              href="/website/contact"
              className="bg-[#1447E6] text-white hover:bg-gray-100 px-8 py-3 rounded-md font-medium text-lg transition-colors"
            >
            Request Demo
            </a>
            <a
              href="/auth/register"
              className="bg-black text-white border border-white hover:bg-blue-500 px-8 py-3 rounded-md font-medium text-lg transition-colors"
            >
            Sign Up Free
            </a>
          </div>
          </div>

             <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-xl">
              <img
                src="/asset/bg2.svg"
                alt="hi"
                className="w-full h-auto"
              />
            </div>
          </div>
      </section>
   <div className="py-5">
   <Footer/>
   </div>
    </div>
  );
};

export default Features;
