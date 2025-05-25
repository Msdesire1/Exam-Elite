"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, BookOpen, FileText, Calendar } from 'lucide-react';
import { useState } from 'react';

const Classdetail = ({ params }) => {
  const router = useRouter();
//   const { classId } = params;

  // This would come from an API in a real application
  const classData = {
    // id: classId,
    name: 'Mathematics 101',
    description: 'Introduction to calculus, algebra, and geometry concepts for first-year students.',
    teacher: 'Prof. Alan Johnson',
    schedule: 'Mon, Wed, Fri 10:00 AM - 11:30 AM',
    location: 'Room A101',
    progress: 65,
    announcements: [
      {
        id: '1',
        date: '2025-04-28',
        content: 'Remember to complete the practice problems for Chapter 5 before Wednesday\'s class. We will be discussing them in detail.'
      },
      {
        id: '2',
        date: '2025-04-25',
        content: 'Office hours will be extended this week to help prepare for the upcoming midterm exam.'
      }
    ],
    materials: [
      {
        id: '1',
        title: 'Calculus Fundamentals',
        uploadDate: '2025-04-15',
        type: 'Reading'
      },
      {
        id: '2',
        title: 'Algebra Practice Problems',
        uploadDate: '2025-04-10',
        type: 'Practice'
      },
      {
        id: '3',
        title: 'Geometry Formula Sheet',
        uploadDate: '2025-04-05',
        type: 'Reference'
      }
    ],
    assignments: [
      {
        id: '1',
        title: 'Calculus Problem Set',
        dueDate: '2025-05-10',
        status: 'In Progress'
      },
      {
        id: '2',
        title: 'Algebra Quiz Preparation',
        dueDate: '2025-05-05',
        status: 'Not Started'
      }
    ],
    exams: [
      {
        id: '1',
        title: 'Mathematics Mid-Term',
        date: '2025-05-15',
        timeRemaining: '8 days'
      },
      {
        id: '2',
        title: 'Mathematics Final',
        date: '2025-06-10',
        timeRemaining: '34 days'
      }
    ],
    classmates: [
      { id: '1', name: 'Alex Johnson', avatar: '/placeholder.svg' },
      { id: '2', name: 'Emma Wilson', avatar: '/placeholder.svg' },
      { id: '3', name: 'Michael Brown', avatar: '/placeholder.svg' },
      { id: '4', name: 'Sophia Garcia', avatar: '/placeholder.svg' },
      { id: '5', name: 'Daniel Lee', avatar: '/placeholder.svg' }
    ]
  };

  const [activeTab, setActiveTab] = useState('materials');

  return (
    <div className="space-y-6 p-4">
      <div className="flex items-center space-x-2 mb-6">
        <button
          onClick={() => router.back()}
          className="text-gray-500 hover:text-gray-700"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl font-bold text-black">{classData.name}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="border border-gray-300 rounded-lg shadow-md p-6 mb-6">
            <div className="pb-4">
              <h2 className="text-xl font-semibold text-black">{classData.name}</h2>
              <p className="text-sm text-gray-500">{classData.teacher}</p>
            </div>
            <div className="space-y-4">
              <p>{classData.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Schedule</p>
                  <p className="font-medium text-black">{classData.schedule}</p>
                </div>
                <div>
                  <p className="text-gray-500">Location</p>
                  <p className="font-medium">{classData.location}</p>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Class Progress</span>
                  <span>{classData.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${classData.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-300 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold pb-4">Announcements</h2>
            <div className="space-y-4">
              {classData.announcements.map((announcement) => (
                <div key={announcement.id} className="border-b  border-gray-300 pb-4 last:border-b-0 last:pb-0">
                  <p className="text-sm text-gray-500 mb-1">{announcement.date}</p>
                  <p>{announcement.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="border border-gray-300 rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold pb-4">Upcoming Exams</h2>
            <div className="space-y-3">
              {classData.exams.map((exam) => (
                <div key={exam.id} className="p-3 border border-gray-300 rounded-md hover:border-blue-300">
                  <h3 className="font-medium">{exam.title}</h3>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-sm text-gray-500">{exam.date}</p>
                    <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                      {exam.timeRemaining}
                    </span>
                  </div>
                  <div className="mt-2">
                    <Link
                      href={"/dashboard/student/studentexam/prepareexam"}
                      className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-1 text-sm font-medium shadow-sm hover:bg-gray-50 w-full"
                    >
                      Prepare
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-gray-300 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold pb-4 text-black">Classmates</h2>
            <div className="flex flex-wrap gap-4">
              {classData.classmates.map((classmate) => (
                <div key={classmate.id} className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    {classmate.avatar ? (
                      <img src={classmate.avatar} alt={classmate.name} className="h-full w-full object-cover" />
                    ) : (
                      <span className="text-sm font-medium">
                        {classmate.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    )}
                  </div>
                  <p className="text-xs mt-1">{classmate.name.split(' ')[0]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-300">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('materials')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 border-gray-300 font-medium text-sm flex items-center ${activeTab === 'materials' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
          >
            <BookOpen className="h-4 w-4 mr-2" /> Materials
          </button>
          <button
            onClick={() => setActiveTab('assignments')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 border-gray-300 font-medium text-sm flex items-center ${activeTab === 'assignments' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
          >
            <FileText className="h-4 w-4 mr-2" /> Assignments
          </button>
          <button
            onClick={() => setActiveTab('schedule')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 border-gray-300 font-medium text-sm flex items-center ${activeTab === 'schedule' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
          >
            <Calendar className="h-4 w-4 mr-2" /> Schedule
          </button>
        </nav>
      </div>

      {activeTab === 'materials' && (
        <div className="mt-6">
          <div className="border border-gray-300 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold">Course Materials</h2>
            <p className="text-sm text-gray-500 mt-1">Access your course materials and resources</p>
            <div className="mt-6 space-y-4">
              {classData.materials.map((material) => (
                <div key={material.id} className="border p-4 rounded-lg flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{material.title}</h3>
                    <p className="text-sm text-gray-500">Upload date: {material.uploadDate}</p>
                    <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 mt-2">
                      {material.type}
                    </span>
                  </div>
                  <Link
                    href={"/dashboard/student/studentclass/materials"}
                    className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-1 text-sm font-medium shadow-sm hover:bg-gray-50"
                  >
                    View
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link
                href={"/dashboard/student/studentclass/materials"}
                className="text-blue-600 hover:text-blue-800 flex items-center justify-center"
              >
                View All Materials <ArrowLeft className="rotate-180 ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'assignments' && (
        <div className="mt-6">
          <div className="border border-gray-300 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold">Assignments</h2>
            <p className="text-sm text-gray-500 mt-1">View and complete your assignments</p>
            <div className="mt-6 space-y-4">
              {classData.assignments.map((assignment) => (
                <div key={assignment.id} className="border  border-gray-300 p-4 rounded-lg flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{assignment.title}</h3>
                    <p className="text-sm text-gray-500">Due date: {assignment.dueDate}</p>
                    <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium mt-2 ${
                      assignment.status === 'In Progress'
                        ? 'bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10'
                        : 'bg-gray-50 text-gray-600 ring-1 ring-inset ring-gray-500/10'
                    }`}>
                      {assignment.status}
                    </span>
                  </div>
                  <Link
                    href={`/student/assignments/${assignment.id}`}
                    className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-1 text-sm font-medium shadow-sm hover:bg-gray-50"
                  >
                    Work On
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'schedule' && (
        <div className="mt-6">
          <div className="border border-gray-300 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold">Class Schedule</h2>
            <p className="text-sm text-gray-500 mt-1">Weekly schedule and important dates</p>
            <div className="mt-6 space-y-4">
              <div className="border border-gray-300 p-4 rounded-lg">
                <h3 className="font-medium mb-3">Regular Schedule</h3>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-3 text-sm font-medium w-16 text-center">
                      Mon
                    </div>
                    <div>
                      <p className="font-medium">10:00 AM - 11:30 AM</p>
                      <p className="text-sm text-gray-500">Room A101</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-3 text-sm font-medium w-16 text-center">
                      Wed
                    </div>
                    <div>
                      <p className="font-medium">10:00 AM - 11:30 AM</p>
                      <p className="text-sm text-gray-500">Room A101</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-3 text-sm font-medium w-16 text-center">
                      Fri
                    </div>
                    <div>
                      <p className="font-medium">10:00 AM - 11:30 AM</p>
                      <p className="text-sm text-gray-500">Room A101</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-gray-300 p-4 rounded-lg">
                <h3 className="font-medium mb-3">Office Hours</h3>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded mr-3 text-sm font-medium w-16 text-center">
                      Tue
                    </div>
                    <div>
                      <p className="font-medium">2:00 PM - 4:00 PM</p>
                      <p className="text-sm text-gray-500">Faculty Office 230</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded mr-3 text-sm font-medium w-16 text-center">
                      Thu
                    </div>
                    <div>
                      <p className="font-medium">1:00 PM - 3:00 PM</p>
                      <p className="text-sm text-gray-500">Faculty Office 230</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Classdetail;