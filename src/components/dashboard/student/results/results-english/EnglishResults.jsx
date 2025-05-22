"use client"

import Link from "next/link"
import { AlertCircle, CheckCircle, ArrowLeft } from "lucide-react"

export default function EnglishResultsPage() {
  // Mock data for English test results
  const testData = {
    id: 5,
    title: "Grammar and Vocabulary",
    subject: "English",
    date: "2023-10-28",
    time: "01:30 PM",
    duration: "40 min",
    score: 92,
    totalQuestions: 25,
    correctAnswers: 23,
    questions: [
      // ... (keep all the question data from your original)
    ],
  }

  // Calculate performance metrics
  const percentageScore = (testData.correctAnswers / testData.totalQuestions) * 100
  const incorrectAnswers = testData.totalQuestions - testData.correctAnswers

  // Group questions by topic for analysis
  const topicAnalysis = [
    { topic: "Grammar", correct: 12, total: 13, percentage: 92 },
    { topic: "Vocabulary", correct: 5, total: 5, percentage: 100 },
    { topic: "Parts of Speech", correct: 4, total: 5, percentage: 80 },
    { topic: "Sentence Structure", correct: 2, total: 2, percentage: 100 },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/dashboard/student/studentresult" className="flex items-center text-black hover:text-[#FF7F46]">
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Back to Results</span>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="p-6 border-b border-gray-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold">{testData.title}</h1>
                <p className="text-gray-500">{testData.subject}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                  <span className="text-xl font-bold text-green-600">{testData.score}%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Date Taken</p>
                <p className="font-medium">{testData.date}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Time</p>
                <p className="font-medium">
                  {testData.time} ({testData.duration})
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Score</p>
                <p className="font-medium">
                  {testData.correctAnswers} out of {testData.totalQuestions} correct
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Performance Summary</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span>Overall Score</span>
                    <span className="font-medium">{percentageScore}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div
                      className="h-2 rounded-full bg-black"
                      style={{ width: `${percentageScore}%` }}
                    ></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <div>
                        <p className="text-sm font-medium">Correct Answers</p>
                        <p className="text-sm text-gray-500">{testData.correctAnswers} questions</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                      <div>
                        <p className="text-sm font-medium">Incorrect Answers</p>
                        <p className="text-sm text-gray-500">{incorrectAnswers} questions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Topic Analysis</h3>
                <div className="space-y-3">
                  {topicAnalysis.map((topic, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between mb-1">
                        <span>{topic.topic}</span>
                        <span className="font-medium">{topic.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            topic.percentage >= 80 ? 'bg-green-500' :
                            topic.percentage >= 60 ? 'bg-black' : 'bg-red-500'
                          }`}
                          style={{ width: `${topic.percentage}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        {topic.correct} out of {topic.total} correct
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Question Details</h3>
                <div className="space-y-4">
                  {testData.questions.map((question, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start gap-2">
                        {question.userAnswer === question.correctAnswer ? (
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                        )}
                        <div>
                          <p className="font-medium">
                            {index + 1}. {question.question}
                          </p>
                          <p className="text-sm text-gray-500">Your answer: {question.options[question.userAnswer]}</p>
                          {question.userAnswer !== question.correctAnswer && (
                            <p className="text-sm text-green-600">
                              Correct answer: {question.options[question.correctAnswer]}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-gray-300">
            <Link
              href="/dashboard/student/studentresult"
              className="inline-flex items-center justify-center px-4 py-2 bg-[#FF7F46] text-white rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}