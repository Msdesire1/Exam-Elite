"use client"

import Link from "next/link"
import { AlertCircle, CheckCircle, ArrowLeft } from "lucide-react"

export default function ChemistryResultsPage() {
  // Mock data for chemistry test results
  const testData = {
    id: 4,
    title: "Chemical Reactions",
    subject: "Chemistry",
    date: "2023-11-05",
    time: "11:00 AM",
    duration: "45 min",
    score: 85,
    totalQuestions: 15,
    correctAnswers: 13,
    questions: [
        {
          id: 1,
          question: "What is the chemical formula for water?",
          options: ["H2O", "CO2", "NaCl", "O2"],
          correctAnswer: 0,
          userAnswer: 0,
        },
        {
          id: 2,
          question: "Which of the following is an example of a chemical reaction?",
          options: ["Melting ice", "Dissolving sugar in water", "Rusting of iron", "Evaporation of water"],
          correctAnswer: 2,
          userAnswer: 2,
        },
        {
          id: 3,
          question: "What type of reaction occurs when an acid reacts with a base?",
          options: ["Decomposition", "Neutralization", "Combustion", "Redox"],
          correctAnswer: 1,
          userAnswer: 1,
        },
        {
          id: 4,
          question: "Which of the following is NOT a sign of a chemical reaction?",
          options: ["Color change", "Temperature change", "Formation of a precipitate", "Change in state"],
          correctAnswer: 3,
          userAnswer: 1, // Incorrect answer
        },
        {
          id: 5,
          question: "What is the pH of a neutral solution?",
          options: ["0", "7", "14", "1"],
          correctAnswer: 1,
          userAnswer: 1,
        },
        {
          id: 6,
          question: "Which of the following is an example of an exothermic reaction?",
          options: ["Photosynthesis", "Melting ice", "Burning wood", "Electrolysis of water"],
          correctAnswer: 2,
          userAnswer: 2,
        },
        {
          id: 7,
          question: "What is the chemical formula for table salt?",
          options: ["NaCl", "H2O", "CO2", "CaCO3"],
          correctAnswer: 0,
          userAnswer: 0,
        },
        {
          id: 8,
          question: "Which of the following is a catalyst?",
          options: [
            "A substance that increases the rate of a reaction",
            "A substance that decreases the rate of a reaction",
            "A substance that is consumed in a reaction",
            "A substance that is produced in a reaction",
          ],
          correctAnswer: 0,
          userAnswer: 0,
        },
        {
          id: 9,
          question: "What is the law of conservation of mass?",
          options: [
            "Matter can be created or destroyed",
            "Mass is conserved in a chemical reaction",
            "Energy is conserved in a chemical reaction",
            "Mass and energy are the same",
          ],
          correctAnswer: 1,
          userAnswer: 1,
        },
        {
          id: 10,
          question: "Which of the following is an example of a physical change?",
          options: ["Burning paper", "Rusting of iron", "Digestion of food", "Freezing water"],
          correctAnswer: 3,
          userAnswer: 3,
        },
        {
          id: 11,
          question: "What is the chemical formula for carbon dioxide?",
          options: ["CO", "CO2", "C2O", "C2O2"],
          correctAnswer: 1,
          userAnswer: 1,
        },
        {
          id: 12,
          question: "Which of the following is NOT an element?",
          options: ["Oxygen", "Carbon", "Water", "Gold"],
          correctAnswer: 2,
          userAnswer: 2,
        },
        {
          id: 13,
          question: "What is the chemical formula for methane?",
          options: ["CH3", "CH4", "C2H6", "C2H4"],
          correctAnswer: 1,
          userAnswer: 3, // Incorrect answer
        },
        {
          id: 14,
          question: "Which of the following is a noble gas?",
          options: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
          correctAnswer: 2,
          userAnswer: 2,
        },
        {
          id: 15,
          question: "What happens to the energy during an endothermic reaction?",
          options: ["Energy is released", "Energy is absorbed", "Energy remains constant", "Energy is destroyed"],
          correctAnswer: 1,
          userAnswer: 1,
        },
      ],
  }

  // Calculate performance metrics
  const percentageScore = (testData.correctAnswers / testData.totalQuestions) * 100
  const incorrectAnswers = testData.totalQuestions - testData.correctAnswers

  // Group questions by topic for analysis
  const topicAnalysis = [
    { topic: "Chemical Formulas", correct: 3, total: 4, percentage: 75 },
    { topic: "Reaction Types", correct: 4, total: 4, percentage: 100 },
    { topic: "Physical vs Chemical Changes", correct: 2, total: 3, percentage: 67 },
    { topic: "Energy in Reactions", correct: 2, total: 2, percentage: 100 },
    { topic: "Elements and Compounds", correct: 2, total: 2, percentage: 100 },
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