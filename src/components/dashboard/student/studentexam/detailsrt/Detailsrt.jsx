// import React from 'react'

// const Detailsrt = () => {
//   return (
//     <div>Detailsrt</div>
//   )
// }

// export default Detailsrt




"use client"
import { useRouter } from 'next/navigation';
import { ArrowLeft, Download, CheckCircle, XCircle } from 'lucide-react';
import { useState } from 'react';

const Detailsrt = () => {
  const router = useRouter();
//   const { resultId } = router.query;
  const [activeTab, setActiveTab] = useState('questions');

  // This would come from an API in a real application
  const result = {
    // id: resultId,
    examTitle: 'Mathematics Mid-Term',
    subject: 'Mathematics',
    date: '2025-04-28',
    score: 75,
    maxScore: 100,
    timeTaken: '98 minutes',
    grade: 'B',
    teacher: 'Prof. Alan Johnson',
    feedback: 'Good understanding of concepts. Need to work more on calculus problems.',
    categoryScores: [
      { name: 'Algebra', score: 85, total: 100 },
      { name: 'Calculus', score: 65, total: 100 },
      { name: 'Geometry', score: 80, total: 100 }
    ],
    questions: [
      {
        id: '1',
        text: 'If f(x) = 2x² + 3x - 5, what is f(2)?',
        userAnswer: 'b',
        correctAnswer: 'b',
        correct: true,
        explanation: 'f(2) = 2(2)² + 3(2) - 5 = 2(4) + 6 - 5 = 8 + 6 - 5 = 9'
      },
      {
        id: '2',
        text: 'Solve for x: 3x + 7 = 22',
        userAnswer: 'a',
        correctAnswer: 'a',
        correct: true,
        explanation: '3x + 7 = 22, 3x = 15, x = 5'
      },
      {
        id: '3',
        text: 'What is the derivative of f(x) = x³ + 2x² - 5x + 3?',
        userAnswer: 'd',
        correctAnswer: 'a',
        correct: false,
        explanation: 'f\'(x) = 3x² + 4x - 5'
      }
    ]
  };

  const correctAnswers = result.questions.filter(q => q.correct).length;
  const incorrectAnswers = result.questions.length - correctAnswers;
  const percentageScore = (result.score / result.maxScore) * 100;

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center space-x-2 mb-6">
        <button
          onClick={() => router.push('/student/results')}
          className="text-gray-500 hover:text-gray-700"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl font-bold">Result Details</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2 border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">{result.examTitle}</h2>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4">
                <div>
                  <p className="text-sm text-gray-500">Subject</p>
                  <p className="font-medium">{result.subject}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-medium">{result.date}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Time Taken</p>
                  <p className="font-medium">{result.timeTaken}</p>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Score: {result.score}/{result.maxScore}</span>
                  <span className="font-medium">{percentageScore.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${percentageScore}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="flex-1 bg-green-50 p-4 rounded-md">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-green-600 font-medium">Correct</span>
                  </div>
                  <p className="text-2xl font-bold mt-1">{correctAnswers}</p>
                </div>
                <div className="flex-1 bg-red-50 p-4 rounded-md">
                  <div className="flex items-center">
                    <XCircle className="h-5 w-5 text-red-600 mr-2" />
                    <span className="text-red-600 font-medium">Incorrect</span>
                  </div>
                  <p className="text-2xl font-bold mt-1">{incorrectAnswers}</p>
                </div>
                <div className="flex-1 bg-blue-50 p-4 rounded-md">
                  <div className="flex items-center">
                    <span className="font-medium text-blue-600">Grade</span>
                  </div>
                  <p className="text-2xl font-bold mt-1">{result.grade}</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Teacher's Feedback</p>
                <p className="p-3 bg-gray-50 rounded-md">{result.feedback}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Performance by Category</h2>
            <div className="space-y-4">
              {result.categoryScores.map((category, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span>{category.name}</span>
                    <span>{category.score}/{category.total}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${(category.score / category.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('questions')}
            className={`${activeTab === 'questions' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Question Review
          </button>
          <button
            onClick={() => setActiveTab('summary')}
            className={`${activeTab === 'summary' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Summary Report
          </button>
        </nav>
      </div>

      {activeTab === 'questions' && (
        <div className="border border-gray-200 rounded-lg shadow-md overflow-hidden mt-6">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Question Review</h2>
            {result.questions.map((question, index) => (
              <div key={question.id} className="mb-8 border-b pb-6 last:border-0">
                <div className="flex items-start">
                  <div className="mr-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      question.correct ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                    }`}>
                      {question.correct ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        <XCircle className="h-5 w-5" />
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium mb-2">Question {index + 1}:</p>
                    <p className="mb-4">{question.text}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div className={`p-3 rounded-md ${
                        question.userAnswer === question.correctAnswer
                          ? 'bg-green-50 border border-green-200'
                          : 'bg-red-50 border border-red-200'
                      }`}>
                        <p className="text-sm text-gray-500 mb-1">Your Answer</p>
                        <p className="font-medium">Option {question.userAnswer.toUpperCase()}</p>
                      </div>
                      <div className="p-3 rounded-md bg-green-50 border border-green-200">
                        <p className="text-sm text-gray-500 mb-1">Correct Answer</p>
                        <p className="font-medium">Option {question.correctAnswer.toUpperCase()}</p>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm text-gray-500 mb-1">Explanation</p>
                      <p>{question.explanation}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'summary' && (
        <div className="border border-gray-200 rounded-lg shadow-md overflow-hidden mt-6">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Performance Summary</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <div className="text-3xl font-bold text-center">{percentageScore.toFixed(0)}%</div>
                  <div className="text-center text-gray-500 mt-2">Overall Score</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <div className="text-3xl font-bold text-center">{result.grade}</div>
                  <div className="text-center text-gray-500 mt-2">Grade</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <div className="text-3xl font-bold text-center">{correctAnswers}/{result.questions.length}</div>
                  <div className="text-center text-gray-500 mt-2">Correct Answers</div>
                </div>
              </div>

              <p className="text-center text-gray-500 italic">
                This report provides a summary of your performance on the {result.examTitle} exam.
              </p>

              <div className="flex justify-center pt-4">
                <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <Download className="mr-2 h-4 w-4" /> Download Result PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between pt-4">
        <button
          onClick={() => router.push('/student/results')}
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Back to Results
        </button>
      </div>
    </div>
  );
};

export default Detailsrt;