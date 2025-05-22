
"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Examst = () => {
  const router = useRouter();
//   const { examId } = router.query;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(120 * 60); // 120 minutes in seconds
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);
  const [showEndExamDialog, setShowEndExamDialog] = useState(false);

  // This would come from an API in a real application
  const examData = {
    // id: examId,
    title: 'Mathematics Mid-Term',
    totalTime: 120, // minutes
    questions: [
      {
        id: '1',
        text: 'If f(x) = 2x² + 3x - 5, what is f(2)?',
        options: [
          { id: 'a', text: '7' },
          { id: 'b', text: '9' },
          { id: 'c', text: '11' },
          { id: 'd', text: '13' }
        ]
      },
      {
        id: '2',
        text: 'Solve for x: 3x + 7 = 22',
        options: [
          { id: 'a', text: 'x = 5' },
          { id: 'b', text: 'x = 7' },
          { id: 'c', text: 'x = 3' },
          { id: 'd', text: 'x = 15' }
        ]
      },
      {
        id: '3',
        text: 'What is the derivative of f(x) = x³ + 2x² - 5x + 3?',
        options: [
          { id: 'a', text: '3x² + 4x - 5' },
          { id: 'b', text: '3x + 4' },
          { id: 'c', text: '3x² + 4x' },
          { id: 'd', text: '3x³ + 4x² - 5' }
        ]
      },
      {
        id: '4',
        text: 'The area of a circle with radius r is:',
        options: [
          { id: 'a', text: 'πr' },
          { id: 'b', text: '2πr' },
          { id: 'c', text: 'πr²' },
          { id: 'd', text: '2πr²' }
        ]
      },
      {
        id: '5',
        text: 'What is the value of sin(π/2)?',
        options: [
          { id: 'a', text: '0' },
          { id: 'b', text: '1' },
          { id: 'c', text: '-1' },
          { id: 'd', text: '1/2' }
        ]
      }
    ]
  };

  const questions = examData.questions;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerChange = (questionId, optionId) => {
    setAnswers({
      ...answers,
      [questionId]: optionId
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);

    // Normally we would send the answers to an API here
    console.log('Submitting answers:', answers);

    toast.success('Exam submitted successfully!');

    setTimeout(() => {
      router.push(`/dashboard/student/studentexam/detailsrt`);
    }, 1500);
  };

  const answeredQuestionsCount = Object.keys(answers).length;
  const progressPercentage = (answeredQuestionsCount / questions.length) * 100;

  return (
    <div className="flex flex-col min-h-screen">
 <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {/* Exam Header */}
      <div className="bg-white p-4 border-b sticky top-0 z-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-xl font-bold">{examData.title}</h1>
            <p className="text-sm text-gray-500">Question {currentQuestion + 1} of {questions.length}</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-sm">
              <div className="text-gray-500">Time Remaining</div>
              <div className="font-bold text-lg">{formatTime(timeLeft)}</div>
            </div>

            <button
              onClick={() => setShowEndExamDialog(true)}
              className="inline-flex items-center px-4  py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              End Exam
            </button>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-between items-center text-sm mb-1">
            <span>Progress</span>
            <span>{answeredQuestionsCount} of {questions.length} questions answered</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Exam Content */}
      <div className="flex-grow p-4">
        <div className="border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-lg font-medium mb-4">Question {currentQuestion + 1}</h2>
              <p className="text-lg">{questions[currentQuestion].text}</p>
            </div>

            <div className="space-y-4">
              {questions[currentQuestion].options.map((option) => (
                <div key={option.id} className="flex items-center space-x-2 border p-4 rounded-md hover:border-blue-500 transition-colors">
                  <input
                    type="radio"
                    id={option.id}
                    name={`question-${questions[currentQuestion].id}`}
                    value={option.id}
                    checked={answers[questions[currentQuestion].id] === option.id}
                    onChange={() => handleAnswerChange(questions[currentQuestion].id, option.id)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor={option.id} className="flex-grow cursor-pointer ml-2 block">
                    {option.text}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Exam Navigation */}
      <div className="bg-white p-4 border-t sticky bottom-0 mt-auto">
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className={`inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium ${currentQuestion === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            Previous
          </button>

          {currentQuestion < questions.length - 1 ? (
            <button
              onClick={handleNext}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Next
            </button>
          ) : (
            <button
              onClick={() => setShowSubmitDialog(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Finish Exam
            </button>
          )}
        </div>
      </div>

      {/* Submit Exam Dialog */}
      {showSubmitDialog && (
        // <div className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black/20 backdrop-blur-[2px] flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-medium mb-2">Submit your exam?</h3>
            <p className="text-gray-600 mb-4">
              You have answered {answeredQuestionsCount} of {questions.length} questions.
              Are you sure you want to submit your exam?
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowSubmitDialog(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Review Answers
              </button>
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit Exam"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* End Exam Dialog */}
      {showEndExamDialog && (
        // <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-2xl flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black/20 backdrop-blur-[2px] flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-medium mb-2">Are you sure?</h3>
            <p className="text-gray-600 mb-4">
              You are about to end the exam. This action cannot be undone. All your answers will be submitted.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowEndExamDialog(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit Exam"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Examst;