"use client"

import Link from "next/link"
import { CheckCircle, AlertCircle, ArrowLeft } from "lucide-react"

export default function PhysicsResultsPage() {
  // Mock data for physics test results

  const testData = {
    id: 6,
    title: "Mechanics",
    subject: "Physics",
    date: "2023-10-20",
    time: "10:15 AM",
    duration: "60 min",
    score: 78,
    totalQuestions: 20,
    correctAnswers: 16,
    questions: [
      {
        id: 1,
        question: "What is Newton's First Law of Motion?",
        options: [
          "Force equals mass times acceleration",
          "An object at rest stays at rest unless acted upon by an external force",
          "For every action, there is an equal and opposite reaction",
          "Energy cannot be created or destroyed",
        ],
        correctAnswer: 1,
        userAnswer: 1,
      },
      {
        id: 2,
        question: "What is the SI unit of force?",
        options: ["Watt", "Joule", "Newton", "Pascal"],
        correctAnswer: 2,
        userAnswer: 2,
      },
      {
        id: 3,
        question: "What is the formula for kinetic energy?",
        options: ["KE = mgh", "KE = 1/2 mv²", "KE = Fd", "KE = P/t"],
        correctAnswer: 1,
        userAnswer: 1,
      },
      {
        id: 4,
        question: "Which of the following is a vector quantity?",
        options: ["Mass", "Temperature", "Time", "Velocity"],
        correctAnswer: 3,
        userAnswer: 3,
      },
      {
        id: 5,
        question: "What is the acceleration due to gravity on Earth?",
        options: ["9.8 m/s²", "9.8 m/s", "9.8 kg/m²", "9.8 N/kg"],
        correctAnswer: 0,
        userAnswer: 0,
      },
      {
        id: 6,
        question: "What is the principle of conservation of momentum?",
        options: [
          "Energy cannot be created or destroyed",
          "The total momentum of a closed system remains constant",
          "Force equals mass times acceleration",
          "For every action, there is an equal and opposite reaction",
        ],
        correctAnswer: 1,
        userAnswer: 3, // Incorrect answer
      },
      {
        id: 7,
        question: "What is the formula for work?",
        options: ["W = F × d", "W = m × g", "W = P × t", "W = 1/2 mv²"],
        correctAnswer: 0,
        userAnswer: 0,
      },
      {
        id: 8,
        question: "What is the relationship between force, mass, and acceleration?",
        options: ["F = ma", "F = m/a", "F = a/m", "F = m²a"],
        correctAnswer: 0,
        userAnswer: 0,
      },
      {
        id: 9,
        question: "What is the formula for potential energy?",
        options: ["PE = 1/2 mv²", "PE = mgh", "PE = Fd", "PE = P/t"],
        correctAnswer: 1,
        userAnswer: 1,
      },
      {
        id: 10,
        question: "What is the law of conservation of energy?",
        options: [
          "Energy can be created but not destroyed",
          "Energy can be destroyed but not created",
          "Energy cannot be created or destroyed, only transformed",
          "Energy can be created and destroyed",
        ],
        correctAnswer: 2,
        userAnswer: 2,
      },
      {
        id: 11,
        question: "What is the formula for power?",
        options: ["P = W/t", "P = F × d", "P = m × g", "P = 1/2 mv²"],
        correctAnswer: 0,
        userAnswer: 0,
      },
      {
        id: 12,
        question: "What is the formula for pressure?",
        options: ["P = F/A", "P = F × A", "P = m/V", "P = W/t"],
        correctAnswer: 0,
        userAnswer: 0,
      },
      {
        id: 13,
        question: "What is the principle of Archimedes?",
        options: [
          "A body immersed in a fluid experiences a buoyant force equal to the weight of the fluid displaced",
          "The pressure in a fluid increases with depth",
          "A moving fluid has less pressure than a stationary fluid",
          "The volume of a gas is inversely proportional to its pressure",
        ],
        correctAnswer: 0,
        userAnswer: 0,
      },
      {
        id: 14,
        question: "What is the formula for density?",
        options: ["ρ = m/V", "ρ = V/m", "ρ = F/A", "ρ = P/t"],
        correctAnswer: 0,
        userAnswer: 0,
      },
      {
        id: 15,
        question: "What is the principle of conservation of angular momentum?",
        options: [
          "The total angular momentum of a closed system remains constant",
          "The angular velocity of a rotating body is constant",
          "The moment of inertia of a body is constant",
          "The angular acceleration of a body is constant",
        ],
        correctAnswer: 0,
        userAnswer: 0,
      },
      {
        id: 16,
        question: "What is the formula for centripetal force?",
        options: ["F = mv²/r", "F = ma", "F = mg", "F = kx"],
        correctAnswer: 0,
        userAnswer: 1, // Incorrect answer
      },
      {
        id: 17,
        question: "What is the formula for momentum?",
        options: ["p = mv", "p = Ft", "p = 1/2 mv²", "p = mgh"],
        correctAnswer: 0,
        userAnswer: 0,
      },
      {
        id: 18,
        question: "What is the principle of superposition?",
        options: [
          "When two waves meet, the resulting displacement is the sum of the individual displacements",
          "When two forces act on a body, the resulting force is the sum of the individual forces",
          "When two masses combine, the resulting mass is the sum of the individual masses",
          "All of the above",
        ],
        correctAnswer: 3,
        userAnswer: 1, // Incorrect answer
      },
      {
        id: 19,
        question: "What is the formula for Hooke's Law?",
        options: ["F = kx", "F = ma", "F = mg", "F = μN"],
        correctAnswer: 0,
        userAnswer: 0,
      },
      {
        id: 20,
        question: "What is the formula for the period of a simple pendulum?",
        options: ["T = 2π√(l/g)", "T = 2π√(m/k)", "T = 1/f", "T = d/v"],
        correctAnswer: 0,
        userAnswer: 2, // Incorrect answer
      },
    ],
  }

  // Calculate performance metrics
  const percentageScore = (testData.correctAnswers / testData.totalQuestions) * 100
  const incorrectAnswers = testData.totalQuestions - testData.correctAnswers

  // Group questions by topic for analysis
  const topicAnalysis = [
    { topic: "Newton's Laws", correct: 3, total: 4, percentage: 75 },
    { topic: "Energy & Work", correct: 5, total: 5, percentage: 100 },
    { topic: "Momentum", correct: 2, total: 3, percentage: 67 },
    { topic: "Circular Motion", correct: 0, total: 1, percentage: 0 },
    { topic: "Simple Harmonic Motion", correct: 0, total: 1, percentage: 0 },
    { topic: "Fluid Mechanics", correct: 3, total: 3, percentage: 100 },
    { topic: "Waves & Oscillations", correct: 1, total: 2, percentage: 50 },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/dashboard/student/studentresult" className="flex items-center text-black hover:text-[#FF7F46]">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Results
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md mb-6 overflow-hidden">
          <div className="p-6 border-b border-gray-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-black">{testData.title}</h1>
                <p className="text-gray-900">{testData.subject}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-yellow-50 flex items-center justify-center">
                  <span className="text-xl font-bold text-yellow-600">{testData.score}%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-900">Date Taken</p>
                <p className="font-medium text-black">{testData.date}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-900">Time</p>
                <p className="font-medium text-black">
                  {testData.time} ({testData.duration})
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-900">Score</p>
                <p className="font-medium text-black">
                  {testData.correctAnswers} out of {testData.totalQuestions} correct
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2 text-black">Performance Summary</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between mb-1 text-black">
                    <span>Overall Score</span>
                    <span className="font-medium text-black">{percentageScore.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div
                      className="bg-black h-2 rounded-full"
                      style={{ width: `${percentageScore}%` }}
                    ></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <div>
                        <p className="text-sm font-medium text-black">Correct Answers</p>
                        <p className="text-sm text-gray-900">{testData.correctAnswers} questions</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                      <div>
                        <p className="text-sm font-medium">Incorrect Answers</p>
                        <p className="text-sm text-gray-900">{incorrectAnswers} questions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2 text-black">Topic Analysis</h3>
                <div className="space-y-3">
                  {topicAnalysis.map((topic, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between mb-1 text-black">
                        <span>{topic.topic}</span>
                        <span className="font-medium text-black">{topic.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-black h-2 rounded-full text-black"
                          style={{ width: `${topic.percentage}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-900 mt-1">
                        {topic.correct} out of {topic.total} correct
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2 text-black">Question Details</h3>
                <div className="space-y-4">
                  {testData.questions.map((question, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start gap-2 text-black">
                        {question.userAnswer === question.correctAnswer ? (
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                        )}
                        <div>
                          <p className="font-medium text-black">
                            {index + 1}. {question.question}
                          </p>
                          <p className="text-sm text-gray-900">Your answer: {question.options[question.userAnswer]}</p>
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
              className="inline-flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-black transition-colors"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}