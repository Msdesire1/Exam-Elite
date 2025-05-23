

"use client"
import React, { useState } from "react";
import Footer from "../../../components/Footer";
import { Mail, Phone, MapPin, Clock, Send, ChevronDown, ChevronUp } from "lucide-react";

const Contact = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How quickly can we implement Exam Elite at our school?",
      answer: "Most institutions can be fully set up within 1-2 weeks. Our onboarding team will guide you through the entire process, including data migration and staff training."
    },
    {
      question: "Is Exam Elite suitable for all educational levels?",
      answer: "Yes, our platform is designed to accommodate various educational levels from primary schools to universities with customizable features for each level's specific needs."
    },
    {
      question: "What kind of support do you offer after implementation?",
      answer: "We provide ongoing technical support, regular updates, and access to our knowledge base. Premium plans include dedicated account managers and priority support."
    },
    {
      question: "Can we integrate Exam Elite with our existing school management system?",
      answer: "Yes, we offer integration capabilities with most major school management systems through our API. Our team can assist with custom integration requirements."
    },

    {
      question: "Can I upgrade or downgrade anytime?",
      answer: "Yes, you can change your subscription plan at any time. When upgrading, the new features will be available immediately. When downgrading, you'll retain your current benefits until the end of your billing cycle."
    },
    {
      question: "How does the School License work?",
      answer: "The School License allows unlimited access for teachers and students at your institution. Teachers can create custom exams, monitor student progress, and access detailed performance analytics."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 14-day money-back guarantee for all subscription plans. If you're not satisfied with our service, contact support within 14 days of your purchase for a full refund."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans. School licenses can also be paid via purchase order."
    },
    {
      question: "Can I upgrade or downgrade anytime?",
      answer: "Yes, you can change your subscription plan at any time. When upgrading, the new features will be available immediately. When downgrading, you'll retain your current benefits until the end of your billing cycle."
    },
    {
      question: "How does the School License work?",
      answer: "The School License allows unlimited access for teachers and students at your institution. Teachers can create custom exams, monitor student progress, and access detailed performance analytics."
    },
  ];

  return (
    <div className="bg-gray-50 ">
      {/* Hero Section */}
      <section className="py-28 bg-gradient-to-b from-blue-100 to-white">
        <div className=" px-4 mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mb-8">
              Have questions or need assistance? We're here to help you get the most out of Exam Elite.
            </p>
            <div className="w-24 h-1 bg-blue-600 rounded mb-12"></div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-10 bg-white">
        <div className="px-4 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-2 border text-gray-700 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="w-full px-4 py-2 border text-gray-700 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 border  text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="demo">Request a Demo</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="How can we help you?"
                    className="w-full min-h-[150px] px-4 py-2 border text-gray-700 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center justify-center"
                >
                  <Send className="mr-2 h-4 w-4 text-black" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8">
                Our support team is available to assist you with any questions or concerns.
                Feel free to reach out through any of the following channels:
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Email Us
                    </h3>
                    <p className="mt-1 text-gray-600">
                      <a href="mailto:support@examelite.com" className="hover:underline">
                        support@examelite.com
                      </a>
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      We respond to all emails within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <Phone className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Call Us
                    </h3>
                    <p className="mt-1 text-gray-600">
                      <a href="tel:+1-800-123-4567" className="hover:underline">
                        +1 (800) 123-4567
                      </a>
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Monday to Friday, 9AM to 6PM EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <MapPin className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Visit Us
                    </h3>
                    <p className="mt-1 text-gray-600">
                      123 Education Street<br />
                      Suite 400<br />
                      Boston, MA 02110
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Business Hours
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                      Saturday: 10:00 AM - 2:00 PM EST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </h3>
                  {activeIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {activeIndex === index && (
                  <div className="px-6 pb-4 pt-0 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">
              Still have questions? Contact our support team directly.
            </p>
            <a
              href="mailto:support@examelite.com"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              <Mail className="mr-2 h-4 w-4  text-black" />
              Email Support
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-5">
        <div className="h-[] rounded-lg">
          <div className="mt-8">
            <div className="rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12733662.66327811!2d2.676932973802914!3d9.082054539435576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104c112f1b4e32f5%3A0xc84b1d00d2f6a6a!2sNigeria!5e0!3m2!1sen!2sng!4v1712160000000!5m2!1sen!2sng"
                width="1500px"
                height="500px"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Nigeria"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;