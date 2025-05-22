"use client"

import { useState } from "react"
import Link from "next/link"
import { Clock, Calendar, BookOpen, ArrowRight } from "lucide-react"

export default function TestsPage() {
  const [activeTab, setActiveTab] = useState("upcoming")

  // Mock data for tests
  const upcomingTests = [
    {
      id: 1,
      title: "Algebra Test",
      subject: "Mathematics",
      date: "2023-11-15",
      time: "10:00 AM",
      duration: "30 min",
      questions: 10,
      path: "/dashboard/student/test-algebra",
    },
    {
      id: 2,
      title: "Cell Biology",
      subject: "Biology",
      date: "2023-11-17",
      time: "02:00 PM",
      duration: "45 min",
      questions: 15,
      path: "/dashboard/student/test/test-biology",
    },
    {
      id: 3,
      title: "World War II",
      subject: "History",
      date: "2023-11-20",
      time: "09:30 AM",
      duration: "60 min",
      questions: 20,
      path: "/dashboard/student/test/test-history",
    },
  ]

  const pastTests = [
    {
      id: 4,
      title: "Chemical Reactions",
      subject: "Chemistry",
      date: "2023-11-05",
      time: "11:00 AM",
      duration: "45 min",
      questions: 15,
      score: 85,
      path: "/student/results-chemistry",
    },
    {
      id: 5,
      title: "Grammar and Vocabulary",
      subject: "English",
      date: "2023-10-28",
      time: "01:30 PM",
      duration: "40 min",
      questions: 25,
      score: 92,
      path: "/student/results-english",
    },
    {
      id: 6,
      title: "Mechanics",
      subject: "Physics",
      date: "2023-10-20",
      time: "10:15 AM",
      duration: "60 min",
      questions: 20,
      score: 78,
      path: "/student/results-physics",
    },
  ]

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Tests</h1>
        <p className="text-gray-500">View and take your upcoming tests or review past tests.</p>
      </div>

      <div className="w-full">
        <div className="flex space-x-4 mb-6 border-b border-gray-300">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`px-4 py-2 font-medium text-sm border-b-2 border-blue-500 ${activeTab === "upcoming" ? "border-blue-500 text-black" : "border-gray-300 text-gray-500 hover:text-gray-700"}`}
          >
            Upcoming Tests
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`px-4 py-2 font-medium text-sm border-b-2 border-blue-500 ${activeTab === "past" ? "border-blue-500 text-black" : "border-gray-300 text-gray-500 hover:text-gray-700"}`}
          >
            Past Tests
          </button>
        </div>

        <div className="mt-6">
          {activeTab === "upcoming" && (
            <div className="space-y-4">
              {upcomingTests.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <BookOpen className="h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium">No Upcoming Tests</h3>
                  <p className="text-gray-500 mt-2">You don't have any upcoming tests scheduled.</p>
                </div>
              ) : (
                upcomingTests.map((test) => (
                  <div key={test.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-300">
                    <div className="p-6 border-b border-gray-300">
                      <div className="flex items-start justify-between">
                        <div>
                          <h2 className="text-xl font-bold">{test.title}</h2>
                          <p className="text-gray-600">{test.subject}</p>
                        </div>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-700 text-white">
                          Upcoming
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                          <span>{formatDate(test.date)}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-gray-400" />
                          <span>
                            {test.time} • {test.duration}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="h-4 w-4 mr-2 text-gray-400" />
                          <span>{test.questions} Questions</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 border-t border-gray-300 flex justify-between">
                      <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                        View Details
                      </button>
                      <Link href={test.path}>
                        <button className="inline-flex items-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium text-white border-gray-300 bg-blue-700 hover:bg-black">
                          Take Test
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === "past" && (
            <div className="space-y-4">
              {pastTests.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <BookOpen className="h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium">No Past Tests</h3>
                  <p className="text-gray-500 mt-2">You haven't taken any tests yet.</p>
                </div>
              ) : (
                pastTests.map((test) => (
                  <div key={test.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-300">
                    <div className="p-6 border-b border-gray-300">
                      <div className="flex items-start justify-between">
                        <div>
                          <h2 className="text-xl font-bold">{test.title}</h2>
                          <p className="text-gray-600">{test.subject}</p>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            test.score >= 80
                              ? "bg-green-50 text-green-700"
                              : test.score >= 60
                                ? "bg-yellow-50 text-yellow-700"
                                : "bg-red-50 text-red-700"
                          }`}>
                            {test.score}%
                          </span>
                          <span className="text-xs text-gray-500 mt-1">
                            {test.score >= 80 ? "Excellent" : test.score >= 60 ? "Good" : "Needs Improvement"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                          <span>{formatDate(test.date)}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-gray-400" />
                          <span>
                            {test.time} • {test.duration}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="h-4 w-4 mr-2 text-gray-400" />
                          <span>{test.questions} Questions</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 border-t border-gray-300 flex justify-between">
                      <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                        View Details
                      </button>
                      <Link href={test.path}>
                        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-black">
                          View Results
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}