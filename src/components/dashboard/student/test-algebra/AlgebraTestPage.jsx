
"use client"
import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, Clock, AlertCircle } from "lucide-react"

export default function AlgebraTestPage() {
  // const router = useRouter()
  const searchParams = useSearchParams()
  const testId = searchParams.get("id") || "1"

  // Mock test data
  const testData = {
    id: testId,
    title: "Algebra Test",
    subject: "Mathematics",
    duration: 30, // minutes
    totalQuestions: 10,
    questions: [
      {
        id: 1,
        question: "What is the value of x in the equation 2x + 5 = 15?",
        options: ["x = 5", "x = 10", "x = 7.5", "x = 5.5"],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "Simplify the expression: 3(x + 2) - 2(x - 1)",
        options: ["x + 8", "x + 4", "5x + 4", "x + 7"],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: "Solve for y: 4y - 3 = y + 6",
        options: ["y = 3", "y = 2", "y = 4", "y = 1"],
        correctAnswer: 0,
      },
      {
        id: 4,
        question: "Factor the expression: x² - 9",
        options: ["(x - 3)(x + 3)", "(x - 9)(x + 1)", "(x - 3)²", "(x + 3)²"],
        correctAnswer: 0,
      },
      {
        id: 5,
        question: "What is the slope of the line passing through points (2, 3) and (4, 7)?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 1,
      },
      {
        id: 6,
        question: "Solve the inequality: 2x - 5 > 7",
        options: ["x > 6", "x > 5", "x > 4", "x > 3"],
        correctAnswer: 0,
      },
      {
        id: 7,
        question: "If f(x) = 2x² - 3x + 1, what is f(2)?",
        options: ["3", "5", "7", "9"],
        correctAnswer: 1,
      },
      {
        id: 8,
        question: "Simplify: (3x² - 2x + 1) - (x² + 3x - 4)",
        options: ["2x² - 5x + 5", "2x² - 5x - 3", "4x² - 5x + 5", "4x² + x + 5"],
        correctAnswer: 0,
      },
      {
        id: 9,
        question: "Solve the system of equations: 2x + y = 7 and x - y = 1",
        options: ["x = 2, y = 3", "x = 3, y = 1", "x = 4, y = -1", "x = 1, y = 5"],
        correctAnswer: 0,
      },
      {
        id: 10,
        question: "What is the value of y in the equation 3y/4 = 6?",
        options: ["y = 8", "y = 18", "y = 4.5", "y = 24"],
        correctAnswer: 0,
      },
    ],
  }

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState(Array(testData.totalQuestions).fill(null))
  const [timeLeft, setTimeLeft] = useState(testData.duration * 60)
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
            <div className="p-6 border-b border-gray-300">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold">{testData.title}</h1>
                  <p className="text-gray-600">{testData.subject}</p>
                </div>
                <div className="flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1 rounded-full">
                  <Clock className="h-4 w-4" />
                  <span className="font-medium">{formatTime(timeLeft)}</span>
                </div>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                <div
                  className="bg-black h-2.5 rounded-full"
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
                        value={index}
                        checked={answers[currentQuestion] === index}
                        onChange={() => {}}
                        className="h-4 w-4 text-white focus:ring-blue-500"
                      />
                      <label className="flex-1 cursor-pointer">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-300 flex justify-between">
              <button
                onClick={handlePrevQuestion}
                disabled={currentQuestion === 0}
                className={`inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium ${currentQuestion === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </button>

              <div className="flex gap-2">
                {currentQuestion === testData.totalQuestions - 1 ? (
                  <button
                    onClick={handleSubmitTest}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-black"
                  >
                    Submit Test
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-black"
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
            <div className="p-6 border-b text-center border-gray-300">
              <h1 className="text-2xl font-bold">Test Completed!</h1>
              <p className="text-gray-600">
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
                <div className="space-y-4">
                  {testData.questions.map((question, index) => (
                    <div key={index} className="flex items-start gap-3">
                      {answers[index] === question.correctAnswer ? (
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                      )}
                      <div className="flex-1">
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
              <Link href="/dashboard/student/studentexam">
                <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#FF7F46] hover:bg-black">
                  Back to Dashboard
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}





