
"use client"
import { useState } from "react"
import Link from "next/link"
import { BookOpen, Home, LogOut, Settings, User, BarChart } from "lucide-react"

export default function StudentResults({ isVisible, onClose,}) {
  const [activeTab, setActiveTab] = useState("results")
  const [subjectFilter, setSubjectFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Mock data for student results
  const results = [
    {
      id: 1,
      subject: "Mathematics",
      title: "Algebra Test",
      date: "2023-05-01",
      score: 85,
      totalMarks: 100,
      questions: 10,
      correct: 8.5,
      path: "/dashboard/student/results/results-chemistry",
    },
    {
      id: 2,
      subject: "Science",
      title: "Physics Quiz",
      date: "2023-04-28",
      score: 92,
      totalMarks: 100,
      questions: 15,
      correct: 13.8,
      path: "/dashboard/student/results/results-physics",
    },
    {
      id: 3,
      subject: "English",
      title: "Grammar Test",
      date: "2023-04-25",
      score: 78,
      totalMarks: 100,
      questions: 20,
      correct: 15.6,
      path: "/dashboard/student/results/results-english",
    },
    {
      id: 4,
      subject: "History",
      title: "World War II Quiz",
      date: "2023-04-20",
      score: 88,
      totalMarks: 100,
      questions: 12,
      correct: 10.5,
      path: "/dashboard/student/results/results-physics",
    },
    {
      id: 5,
      subject: "Geography",
      title: "Continents Test",
      date: "2023-04-15",
      score: 75,
      totalMarks: 100,
      questions: 10,
      correct: 7.5,
      path: "/student/results-english",
    },
    {
      id: 6,
      subject: "Mathematics",
      title: "Geometry Quiz",
      date: "2023-04-10",
      score: 90,
      totalMarks: 100,
      questions: 15,
      correct: 13.5,
      path: "/dashboard/student/results/results-chemistry",
    },
    {
      id: 7,
      subject: "Science",
      title: "Chemistry Basics",
      date: "2023-04-05",
      score: 82,
      totalMarks: 100,
      questions: 20,
      correct: 16.4,
      path: "/dashboard/student/results/results-chemistry",
    },
  ]

  // Get unique subjects for filter
  const subjects = ["all", ...new Set(results.map((result) => result.subject))]

  // Filter results based on subject and search query
  const filteredResults = results.filter(
    (result) =>
      (subjectFilter === "all" || result.subject === subjectFilter) &&
      (result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.subject.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const handleModalClick = (e) => {
    e.stopPropagation()
  }

  // Calculate average score
  const averageScore =
    filteredResults.length > 0
      ? Math.round(filteredResults.reduce((acc, curr) => acc + curr.score, 0) / filteredResults.length)
      : 0

  return (


   <div className={`fixed inset-0 flex justify-center z-50 bg-[#000000]/50 transition-transform duration-500 py-7  ${
      isVisible ? "-translate-x-0" : "translate-x-full"
    }`}
    onClick={onClose}
  >
    <div  onClick={handleModalClick} className=" bg-gray-50 p-6 rounded-2xl overflow-y-auto lg:w-1/2">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">My Results</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="w-full md:w-1/3">
          <select
            value={subjectFilter}
            onChange={(e) => setSubjectFilter(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject === "all" ? "All Subjects" : subject}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full md:w-2/3">
          <input
            type="text"
            placeholder="Search by test title or subject..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-300">
          <h2 className="text-lg font-bold">Test Results</h2>
          <p className="text-gray-500">Your performance in all tests</p>
        </div>
        <div className="p-6">
          {filteredResults.length > 0 ? (
            <div className="space-y-6">
              {filteredResults.map((result) => (
                <div key={result.id} className="space-y-2 border-b border-gray-300 pb-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <h3 className="font-medium">{result.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="px-2 py-1 text-xs border border-gray-300 rounded-full">{result.subject}</span>
                        <span className="text-sm text-gray-500">{result.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        result.score >= 80 ? "bg-green-100 text-green-800" :
                        result.score >= 60 ? "bg-yellow-100 text-yellow-800" :
                        "bg-red-100 text-red-800"
                      }`}>
                        {result.score}%
                      </span>
                      <Link href={result.path}>
                        <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>
                        Score: {result.score}/{result.totalMarks}
                      </span>
                      <span>
                        Correct: {result.correct}/{result.questions} questions
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          result.score >= 80 ? "bg-green-500" :
                          result.score >= 60 ? "bg-black" :
                          "bg-red-500"
                        }`}
                        style={{ width: `${result.score}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6">
              <p className="text-gray-500">No results found matching your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  )
}