"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, AlertCircle, Clock } from "lucide-react"

export default function HistoryTestPage() {
  // Test data for History
  const testData = {
    id: 3,
    title: "World War II",
    subject: "History",
    duration: 60, // minutes
    totalQuestions: 20,
    questions: [
      {
        id: 1,
        question: "When did World War II begin?",
        options: ["1935", "1939", "1941", "1945"],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: "Who was the leader of Nazi Germany during World War II?",
        options: ["Joseph Stalin", "Winston Churchill", "Adolf Hitler", "Benito Mussolini"],
        correctAnswer: 2,
      },
      {
        id: 3,
        question: "What was the code name for the Allied invasion of Normandy in 1944?",
        options: ["Operation Barbarossa", "Operation Overlord", "Operation Market Garden", "Operation Torch"],
        correctAnswer: 1,
      },
      {
        id: 4,
        question: "Which country was NOT part of the Axis powers?",
        options: ["Germany", "Italy", "Soviet Union", "Japan"],
        correctAnswer: 2,
      },
      {
        id: 5,
        question: "What event directly led to the United States entering World War II?",
        options: [
          "The invasion of Poland",
          "The Battle of Britain",
          "The attack on Pearl Harbor",
          "The fall of France",
        ],
        correctAnswer: 2,
      },
      {
        id: 6,
        question: "What was the Holocaust?",
        options: [
          "A German military operation",
          "The systematic persecution and genocide of Jews and other groups",
          "A peace treaty",
          "An economic policy",
        ],
        correctAnswer: 1,
      },
      {
        id: 7,
        question: "Which battle is considered the turning point of the war in the Pacific?",
        options: ["Battle of Midway", "Battle of Iwo Jima", "Battle of Okinawa", "Battle of Leyte Gulf"],
        correctAnswer: 0,
      },
      {
        id: 8,
        question: "When did World War II end in Europe?",
        options: ["May 8, 1945", "August 15, 1945", "September 2, 1945", "December 7, 1941"],
        correctAnswer: 0,
      },
      {
        id: 9,
        question: "What was the name of the American program to develop atomic bombs during World War II?",
        options: [
          "Operation Overlord",
          "Manhattan Project",
          "Strategic Defense Initiative",
          "Operation Rolling Thunder",
        ],
        correctAnswer: 1,
      },
      {
        id: 10,
        question: "Which of the following was NOT a result of World War II?",
        options: [
          "The formation of the United Nations",
          "The beginning of the Cold War",
          "The dissolution of the Soviet Union",
          "The division of Germany",
        ],
        correctAnswer: 2,
      },
      // Additional questions to make 20 total
      {
        id: 11,
        question: "Who was the Prime Minister of Great Britain for most of World War II?",
        options: ["Neville Chamberlain", "Winston Churchill", "Clement Attlee", "Anthony Eden"],
        correctAnswer: 1,
      },
      {
        id: 12,
        question: "What was the name of the German air force during World War II?",
        options: ["Wehrmacht", "Luftwaffe", "Kriegsmarine", "Schutzstaffel (SS)"],
        correctAnswer: 1,
      },
      {
        id: 13,
        question: "Which battle marked the turning point of the war on the Eastern Front?",
        options: ["Battle of Moscow", "Battle of Stalingrad", "Battle of Kursk", "Battle of Berlin"],
        correctAnswer: 1,
      },
      {
        id: 14,
        question: "What was the code name for the German invasion of the Soviet Union?",
        options: ["Operation Barbarossa", "Operation Sea Lion", "Operation Citadel", "Operation Valkyrie"],
        correctAnswer: 0,
      },
      {
        id: 15,
        question: "Which city was the first to be attacked with an atomic bomb?",
        options: ["Tokyo", "Hiroshima", "Nagasaki", "Osaka"],
        correctAnswer: 1,
      },
      {
        id: 16,
        question:
          "What was the name of the conference where the Allied powers planned the post-war organization of Europe?",
        options: ["Tehran Conference", "Yalta Conference", "Potsdam Conference", "Cairo Conference"],
        correctAnswer: 1,
      },
      {
        id: 17,
        question: "Which country suffered the highest number of casualties during World War II?",
        options: ["Germany", "United States", "Soviet Union", "Japan"],
        correctAnswer: 2,
      },
      {
        id: 18,
        question: "What was the D-Day invasion?",
        options: [
          "The Allied invasion of Sicily",
          "The Allied invasion of Normandy",
          "The German invasion of Poland",
          "The Japanese attack on Pearl Harbor",
        ],
        correctAnswer: 1,
      },
      {
        id: 19,
        question: "What was the name of the German secret police during the Nazi regime?",
        options: ["Gestapo", "Abwehr", "Wehrmacht", "Waffen-SS"],
        correctAnswer: 0,
      },
      {
        id: 20,
        question: "When did Japan surrender, officially ending World War II?",
        options: ["August 6, 1945", "August 9, 1945", "August 15, 1945", "September 2, 1945"],
        correctAnswer: 3,
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
                  <h1 className="text-xl font-bold">{testData.title}</h1>
                  <p className="text-gray-500">{testData.subject}</p>
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
                    <label key={index} className="flex items-center space-x-2 border border-gray-300 p-3 rounded-md hover:bg-gray-50 cursor-pointer">
                      <input
                        type="radio"
                        name="answer"
                        value={index}
                        checked={answers[currentQuestion] === index}
                        onChange={() => handleAnswerSelect(index.toString())}
                        className="h-4 w-4 text-white focus:ring-blue-500"
                      />
                      <span className="flex-1">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-300 flex justify-between">
              <button
                onClick={handlePrevQuestion}
                disabled={currentQuestion === 0}
                className={`px-4 py-2 rounded-md border border-gray-300 ${currentQuestion === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
              >
                <div className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </div>
              </button>

              <div className="flex gap-2">
                {currentQuestion === testData.totalQuestions - 1 ? (
                  <button
                    onClick={handleSubmitTest}
                    className="px-4 py-2 bg-[#FF7F46] text-white rounded-md hover:bg-black"
                  >
                    Submit Test
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="px-4 py-2 bg-[#FF7F46] text-white rounded-md hover:bg-black"
                  >
                    <div className="flex items-center">
                      Next
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
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

              <div className="w-full border-t pt-4 mt-4">
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
                <button className="px-4 py-2 bg-[#FF7F46] text-white rounded-md hover:bg-black">
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