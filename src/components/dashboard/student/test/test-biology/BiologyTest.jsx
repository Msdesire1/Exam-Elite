"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, ArrowRight, CheckCircle, Clock, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function BiologyTestPage() {
  // Test data for Biology
  const testData = {
    id: 2,
    title: "Cell Biology",
    subject: "Biology",
    duration: 45, // minutes
    totalQuestions: 15,
    questions: [
      {
        id: 1,
        question: "Which organelle is known as the 'powerhouse of the cell'?",
        options: ["Nucleus", "Mitochondria", "Endoplasmic Reticulum", "Golgi Apparatus"],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: "What is the primary function of the cell membrane?",
        options: ["Energy production", "Protein synthesis", "Selective permeability", "DNA replication"],
        correctAnswer: 2,
      },
      {
        id: 3,
        question: "Which of the following is NOT a function of the nucleus?",
        options: ["Storing genetic information", "Controlling cell division", "Energy production", "RNA synthesis"],
        correctAnswer: 2,
      },
      {
        id: 4,
        question: "The process by which cells engulf large particles is called:",
        options: ["Exocytosis", "Endocytosis", "Phagocytosis", "Pinocytosis"],
        correctAnswer: 2,
      },
      {
        id: 5,
        question: "Which of the following is a difference between plant and animal cells?",
        options: [
          "Plant cells have mitochondria, animal cells don't",
          "Animal cells have a cell wall, plant cells don't",
          "Plant cells have chloroplasts, animal cells don't",
          "Animal cells have a nucleus, plant cells don't",
        ],
        correctAnswer: 2,
      },
      {
        id: 6,
        question: "What is the main function of ribosomes?",
        options: ["Lipid synthesis", "Protein synthesis", "Carbohydrate breakdown", "DNA replication"],
        correctAnswer: 1,
      },
      {
        id: 7,
        question: "Which of the following is the correct sequence of the cell cycle?",
        options: ["G1, S, G2, M", "M, G1, S, G2", "S, G1, G2, M", "G1, G2, S, M"],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "The process of programmed cell death is called:",
        options: ["Necrosis", "Apoptosis", "Autophagy", "Lysis"],
        correctAnswer: 1,
      },
      {
        id: 9,
        question: "Which organelle is responsible for detoxifying harmful substances in the cell?",
        options: ["Lysosome", "Peroxisome", "Golgi apparatus", "Endoplasmic reticulum"],
        correctAnswer: 1,
      },
      {
        id: 10,
        question: "What is the main component of the cell wall in plants?",
        options: ["Protein", "Lipid", "Cellulose", "Chitin"],
        correctAnswer: 2,
      },
      {
        id: 11,
        question: "Which of the following is NOT a function of the cytoskeleton?",
        options: ["Cell movement", "Cell shape maintenance", "Protein synthesis", "Intracellular transport"],
        correctAnswer: 2,
      },
      {
        id: 12,
        question: "The fluid mosaic model describes the structure of:",
        options: ["Cell wall", "Cell membrane", "Nuclear membrane", "Mitochondrial membrane"],
        correctAnswer: 1,
      },
      {
        id: 13,
        question: "Which of the following is a passive transport process?",
        options: ["Endocytosis", "Exocytosis", "Active transport", "Diffusion"],
        correctAnswer: 3,
      },
      {
        id: 14,
        question: "What is the function of the Golgi apparatus?",
        options: [
          "Protein synthesis",
          "Energy production",
          "Packaging and modification of proteins",
          "DNA replication",
        ],
        correctAnswer: 2,
      },
      {
        id: 15,
        question: "Which of the following statements about stem cells is correct?",
        options: [
          "They can only differentiate into one type of cell",
          "They are found only in embryos",
          "They have the ability to self-renew",
          "They cannot be used in medical treatments",
        ],
        correctAnswer: 2,
      },
    ],
  }
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState(Array(testData.totalQuestions).fill(null))
  const [timeLeft, setTimeLeft] = useState(testData.duration * 60) // in seconds
  const [testSubmitted, setTestSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  // Timer effect
  useEffect(() => {
    if (!testSubmitted && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)

      return () => clearTimeout(timer)
    } else if (timeLeft === 0 && !testSubmitted) {
      handleSubmitTest()
    }
  }, [timeLeft, testSubmitted])

  const handleAnswerSelect = (value) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = Number.parseInt(value)
    setAnswers(newAnswers)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < testData.totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmitTest = () => {
    // Calculate score
    let correctAnswers = 0
    answers.forEach((answer, index) => {
      if (answer === testData.questions[index].correctAnswer) {
        correctAnswers++
      }
    })

    const finalScore = Math.round((correctAnswers / testData.totalQuestions) * 100)
    setScore(finalScore)
    setTestSubmitted(true)
  }

  // Format time
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        {!testSubmitted ? (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b  border-gray-300">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-xl font-bold">{testData.title}</h1>
                  <p className="text-gray-500">{testData.subject}</p>
                </div>
                <div className="flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1 rounded-full">
                  <Clock className="h-4 w-4" />
                  <span className="font-medium">{formatTime(timeLeft)}</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                <div
                  className=" bg-black h-2 rounded-full"
                  style={{ width: `${((currentQuestion + 1) / testData.totalQuestions) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span>
                  Question {currentQuestion + 1} of {testData.totalQuestions}
                </span>
                <span>{Math.round(((currentQuestion + 1) / testData.totalQuestions) * 100)}% Complete</span>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-6">
                <div className="text-lg font-medium">{testData.questions[currentQuestion].question}</div>

                <div className="space-y-3">
                  {testData.questions[currentQuestion].options.map((option, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 border border-gray-300 p-3 rounded-md hover:bg-gray-50 cursor-pointer"
                      onClick={() => handleAnswerSelect(index.toString())}
                    >
                      <input
                        type="radio"
                        name="answer"
                        value={index.toString()}
                        checked={answers[currentQuestion] === index}
                        onChange={() => {}}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <label className="flex-1 cursor-pointer">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 border-t  border-gray-300 flex justify-between">
              <button
                onClick={handlePrevQuestion}
                disabled={currentQuestion === 0}
                className={`flex items-center px-4 py-2 rounded-md ${currentQuestion === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </button>

              <div className="flex gap-2">
                {currentQuestion === testData.totalQuestions - 1 ? (
                  <button
                    onClick={handleSubmitTest}
                    className="flex items-center px-4 py-2  bg-[#FF7F46] text-white rounded-md hover:bg-black"
                  >
                    Submit Test
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="flex items-center px-4 py-2  bg-[#FF7F46] text-white rounded-md hover:bg-black"
                  >
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b  border-gray-300 text-center">
              <h1 className="text-xl font-bold">Test Completed!</h1>
              <p className="text-gray-500">
                {testData.title} - {testData.subject}
              </p>
            </div>

            <div className="p-6 flex flex-col items-center gap-6">
              <div className="w-32 h-32 rounded-full bg-green-50 flex items-center justify-center">
                <span className="text-4xl font-bold text-green-600">{score}%</span>
              </div>

              <div className="text-center">
                <p className="text-lg font-medium">
                  {score >= 80 ? (
                    <span className="text-green-600">Excellent work!</span>
                  ) : score >= 60 ? (
                    <span className="text-yellow-600">Good effort!</span>
                  ) : (
                    <span className="text-red-600">Needs improvement</span>
                  )}
                </p>
                <p className="text-gray-500 mt-1">
                  You answered{" "}
                  {answers.filter((answer, index) => answer === testData.questions[index].correctAnswer).length} out of{" "}
                  {testData.totalQuestions} questions correctly.
                </p>
              </div>

              <div className="w-full border-t border-gray-300 pt-4 mt-4">
                <h3 className="font-medium mb-4">Question Summary:</h3>
                <div className="space-y-2">
                  {testData.questions.map((question, index) => (
                    <div key={index} className="flex items-start gap-2">
                      {answers[index] === question.correctAnswer ? (
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <p className="font-medium">{question.question}</p>
                        <p className="text-sm text-gray-500">
                          Your answer: {answers[index] !== null ? question.options[answers[index]] : "Not answered"}
                        </p>
                        {answers[index] !== question.correctAnswer && (
                          <p className="text-sm text-green-600">
                            Correct answer: {question.options[question.correctAnswer]}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-300 flex justify-center">
              <Link
                href="/dashboard/student/studentexam"
                className="px-4 py-2  bg-[#FF7F46] text-white rounded-md hover:bg-black"
              >
                Back to Dashboard
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}