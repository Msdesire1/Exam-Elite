"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Plus, Save, Trash } from "lucide-react"

export default function Create() {
  const router = useRouter()

  const [testDetails, setTestDetails] = useState({
    title: "",
    subject: "",
    class: "",
    duration: 30,
    instructions: "",
  })

  const [questions, setQuestions] = useState([
    {
      question: "",
      options: ["", "", "", ""],
      correctAnswer: 0,
    },
  ])

  const [activeTab, setActiveTab] = useState("details")

  const handleTestDetailsChange = (field, value) => {
    setTestDetails({
      ...testDetails,
      [field]: value,
    })
  }

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions]
    updatedQuestions[index][field] = value
    setQuestions(updatedQuestions)
  }

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = [...questions]
    updatedQuestions[questionIndex].options[optionIndex] = value
    setQuestions(updatedQuestions)
  }

  const handleCorrectAnswerChange = (questionIndex, value) => {
    const updatedQuestions = [...questions]
    updatedQuestions[questionIndex].correctAnswer = Number.parseInt(value)
    setQuestions(updatedQuestions)
  }

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        question: "",
        options: ["", "", "", ""],
        correctAnswer: 0,
      },
    ])
  }

  const removeQuestion = (index) => {
    if (questions.length > 1) {
      const updatedQuestions = [...questions]
      updatedQuestions.splice(index, 1)
      setQuestions(updatedQuestions)
    }
  }

  const handleSubmit = () => {
    // In a real app, you would save the test to a database here
    console.log("Test Details:", testDetails)
    console.log("Questions:", questions)


    router.push("/dashboard/teacher/dashboard")
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-black">Create New Test</h1>
          <Link href="/dashboard/teacher/dashboard">
            <button className="px-4 py-2 text-black border border-gray-300 rounded-md hover:bg-gray-100">
              Cancel
            </button>
          </Link>
        </div>

        <div className="mb-6">
          <div className="flex w-full border-b border-gray-300 ">
            <button
              className={`px-4 py-2 font-medium  text-black ${activeTab === "details" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"}`}
              onClick={() => setActiveTab("details")}
            >
              Test Details
            </button>
            <button
              className={`px-4 py-2 font-medium text-black ${activeTab === "questions" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"}`}
              onClick={() => setActiveTab("questions")}
            >
              Questions
            </button>
          </div>
        </div>

        {activeTab === "details" && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6 border-b border-gray-300 ">
              <h2 className="text-lg font-semibold text-black">Test Information</h2>
              <p className="text-sm text-gray-900">Enter the basic details for your test</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-900">Test Title</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300  text-black rounded-md"
                    placeholder="Enter test title text-black"
                    value={testDetails.title}
                    onChange={(e) => handleTestDetailsChange("title", e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-900">Subject</label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300   text-black rounded-md"
                      value={testDetails.subject}
                      onChange={(e) => handleTestDetailsChange("subject", e.target.value)}
                    >
                      <option value="">Select subject</option>
                      <option value="mathematics">Mathematics</option>
                      <option value="science">Science</option>
                      <option value="english">English</option>
                      <option value="history">History</option>
                      <option value="geography">Geography</option>
                      <option value="computer_science">Computer Science</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-900">Class</label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 text-black rounded-md"
                      value={testDetails.class}
                      onChange={(e) => handleTestDetailsChange("class", e.target.value)}
                    >
                      <option value="">Select class</option>
                      <option value="9-A">JSS 1 </option>
                      <option value="9-B">JSS 2</option>
                      <option value="10-A">JSS 3</option>
                      <option value="10-B">SS 1</option>
                      <option value="11-A">SS 2</option>
                      <option value="11-B">SS 3</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-900">Duration (minutes)</label>
                  <input
                    type="number"
                    min="5"
                    max="180"
                    className="w-full px-3 py-2 border text-black border-gray-300  rounded-md"
                    value={testDetails.duration}
                    onChange={(e) => handleTestDetailsChange("duration", Number.parseInt(e.target.value))}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Instructions</label>
                  <textarea
                    className="w-full px-3 py-2 border text-black border-gray-300  rounded-md"
                    placeholder="Enter test instructions for students"
                    rows={4}
                    value={testDetails.instructions}
                    onChange={(e) => handleTestDetailsChange("instructions", e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-300  flex justify-end">
              <button
                onClick={() => setActiveTab("questions")}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Continue to Questions
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {activeTab === "questions" && (
          <div className="space-y-6">
            {questions.map((question, questionIndex) => (
              <div key={questionIndex} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-6 border-b border-gray-300  flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-semibold text-black">Question {questionIndex + 1}</h2>
                    <p className="text-sm text-gray-900">Multiple choice question</p>
                  </div>
                  {questions.length > 1 && (
                    <button
                      onClick={() => removeQuestion(questionIndex)}
                      className="p-2 text-gray-500 hover:text-red-500"
                    >
                      <Trash className="h-4 w-4" />
                    </button>
                  )}
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-900">Question</label>
                    <textarea
                      className="w-full px-3 py-2 border text-black border-gray-300  rounded-md"
                      placeholder="Enter your question"
                      value={question.question}
                      onChange={(e) => handleQuestionChange(questionIndex, "question", e.target.value)}
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-900">Options</label>
                    {question.options.map((option, optionIndex) => (
                      <div key={optionIndex} className="flex items-center gap-2">
                        <input
                          type="text"
                          className="w-full px-3 py-2 text-black border border-gray-300  rounded-md"
                          placeholder={`Option ${optionIndex + 1}`}
                          value={option}
                          onChange={(e) => handleOptionChange(questionIndex, optionIndex, e.target.value)}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-900">Correct Answer</label>
                    <div className="space-y-2">
                      {question.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="flex items-center text-black gap-2">
                          <input
                            type="radio"
                            name={`correct-${questionIndex}`}
                            value={optionIndex}
                            checked={question.correctAnswer === optionIndex}
                            onChange={() => handleCorrectAnswerChange(questionIndex, optionIndex)}
                            className="h-4 w-4 text-blue-600"
                          />
                          <label>
                            Option {optionIndex + 1}
                            {option ? `: ${option}` : ""}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-center">
              <button
                onClick={addQuestion}
                className="flex items-center text-black gap-2 px-4 py-2 border border-gray-300  rounded-md hover:bg-gray-100"
              >
                <Plus className="h-4 w-4 text-black" />
                Add Question
              </button>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between">
                  <button
                    onClick={() => setActiveTab("details")}
                    className="flex items-center gap-2 text-black px-4 py-2 border border-gray-300  rounded-md hover:bg-gray-100"
                  >
                    <ArrowLeft className="h-4 w-4 text-black" />
                    Back to Details
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    <Save className="h-4 w-4 text-black" />
                    Save Test
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}