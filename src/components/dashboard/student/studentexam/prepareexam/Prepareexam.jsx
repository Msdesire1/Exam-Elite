

"use client"
import { useRouter } from 'next/navigation';
import { ArrowLeft, BookOpen, FileText, ListOrdered, Calendar } from 'lucide-react';
import { useState } from 'react';

const Prepareexam = () => {
  const router = useRouter();
//   const { examId } = router.query;
  const [activeTab, setActiveTab] = useState('topics');

  // This would come from an API in a real application
  const exam = {
    // id: examId,
    title: 'Mathematics Mid-Term',
    subject: 'Mathematics',
    description: 'This exam covers algebra, calculus, and geometry topics from chapters 1-5 of the textbook.',
    date: '2025-05-15',
    duration: '120 minutes',
    questionCount: 45,
    teacher: 'Prof. Alan Johnson',
    topicsToStudy: [
      'Linear Algebra Fundamentals',
      'Differential Calculus',
      'Integral Calculus',
      'Geometry and Trigonometry',
      'Mathematical Problem Solving'
    ],
    resources: [
      { id: '1', title: 'Calculus Textbook Chapter 3', type: 'Reading' },
      { id: '2', title: 'Algebra Practice Problems', type: 'Practice' },
      { id: '3', title: 'Geometry Formula Sheet', type: 'Reference' },
      { id: '4', title: 'Previous Year Question Paper', type: 'Practice' }
    ],
    practiceTests: [
      { id: '1', title: 'Practice Test 1: Algebra', questionsCount: 15, estimatedTime: '30 minutes' },
      { id: '2', title: 'Practice Test 2: Calculus', questionsCount: 10, estimatedTime: '25 minutes' },
      { id: '3', title: 'Practice Test 3: Geometry', questionsCount: 12, estimatedTime: '35 minutes' }
    ]
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center space-x-2 mb-6">
        <button
          onClick={() => router.push('/student/dashboard')}
          className=" text-black hover:text-gray-700"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl font-bold  text-black">Prepare for {exam.title}</h1>
      </div>

      <div className="border border-gray-200 rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2  text-black">Exam Details</h2>
          <p className=" text-black mb-4">{exam.subject} • {exam.teacher}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="space-y-3">
                <div>
                  <div className="text-sm  text-black">Date</div>
                  <div className="font-medium  text-black">{exam.date}</div>
                </div>
                <div>
                  <div className="text-sm  text-black">Duration</div>
                  <div className="font-medium  text-black">{exam.duration}</div>
                </div>
                <div>
                  <div className="text-sm  text-black">Questions</div>
                  <div className="font-medium  text-black">{exam.questionCount} questions</div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-sm  text-black mb-2">Description</div>
              <p className=' text-black'>{exam.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex border-b border-gray-200 mb-4">
          <button
            onClick={() => setActiveTab('topics')}
            className={`px-4 py-2 font-medium text-sm ${activeTab === 'topics' ? 'border-b-2 border-blue-500 text-blue-600' : ' text-black hover:text-gray-700'}`}
          >
            Topics to Study
          </button>
          <button
            onClick={() => setActiveTab('resources')}
            className={`px-4 py-2 font-medium text-sm ${activeTab === 'resources' ? 'border-b-2 border-blue-500 text-blue-600' : ' text-black hover:text-gray-700'}`}
          >
            Study Resources
          </button>
          <button
            onClick={() => setActiveTab('practice')}
            className={`px-4 py-2 font-medium text-sm ${activeTab === 'practice' ? 'border-b-2 border-blue-500 text-blue-600' : ' text-black hover:text-gray-700'}`}
          >
            Practice Tests
          </button>
        </div>

        {activeTab === 'topics' && (
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-bold flex items-center mb-2  text-black">
                  <ListOrdered className="mr-2 h-5 w-5 text-blue-600" />
                  Key Topics
                </h3>
                <p className=" text-black mb-4">Focus on these topics for the exam</p>
                <ul className="space-y-2">
                  {exam.topicsToStudy.map((topic, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className=' text-black'>{topic}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'resources' && (
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-bold flex items-center mb-2  text-black">
                  <BookOpen className="mr-2 h-5 w-5 text-blue-600" />
                  Study Materials
                </h3>
                <p className=" text-black mb-4">Resources to help you prepare</p>
                <div className="space-y-4">
                  {exam.resources.map((resource) => (
                    <div key={resource.id} className="border p-4 rounded-lg hover:border-blue-500 transition-colors">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium  text-black">{resource.title}</h4>
                          <p className="text-sm  text-black">{resource.type}</p>
                        </div>
                        <button
                          onClick={() => router.push(`/dashboard/student/studentclass/materials`)}
                          className="inline-flex items-center px-3 py-1 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          View
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'practice' && (
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-bold flex items-center mb-2  text-black">
                  <FileText className="mr-2 h-5 w-5 text-blue-600" />
                  Practice Tests
                </h3>
                <p className=" text-black mb-4">Take these tests to assess your preparation</p>
                <div className="space-y-4">
                  {exam.practiceTests.map((test) => (
                    <div key={test.id} className="border p-4 rounded-lg hover:border-blue-500 transition-colors">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                        <div>
                          <h4 className="font-medium  text-black">{test.title}</h4>
                          <p className="text-sm  text-black">{test.questionsCount} questions • {test.estimatedTime}</p>
                        </div>
                        <button className="inline-flex items-center px-3 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                          Start Practice
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between pt-4">
        <button
          onClick={() => router.push('/dashboard/student/dashboard')}
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Back to Dashboard
        </button>
        <button
          onClick={() => router.push(`/student/exams/${exam.id}`)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Start Exam
        </button>
      </div>
    </div>
  );
};

export default Prepareexam;