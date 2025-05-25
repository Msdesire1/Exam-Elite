



"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BookOpen, FileText, Calendar, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Studentclass = () => {
  const router = useRouter();

  const classes = [
    {
      id: '1',
      name: 'Mathematics 101',
      teacher: 'Prof. Alan Johnson',
      progress: 65,
      nextClass: 'Tomorrow, 10:00 AM',
      materials: 12,
      assignments: 5,
      exams: 2,
      color: 'bg-blue-100 text-blue-800',
      icon: <BookOpen className="h-5 w-5 text-blue-600" />
    },
    {
      id: '2',
      name: 'Physics 202',
      teacher: 'Dr. Emily Chen',
      progress: 45,
      nextClass: 'Today, 2:00 PM',
      materials: 8,
      assignments: 3,
      exams: 1,
      color: 'bg-purple-100 text-purple-800',
      icon: <BookOpen className="h-5 w-5 text-purple-600" />
    },
    {
      id: '3',
      name: 'History 101',
      teacher: 'Prof. Sarah Thompson',
      progress: 30,
      nextClass: 'Thursday, 9:00 AM',
      materials: 10,
      assignments: 4,
      exams: 1,
      color: 'bg-yellow-100 text-yellow-800',
      icon: <BookOpen className="h-5 w-5 text-yellow-600" />
    }
  ];

  const recentMaterials = [
    {
      id: '1',
      title: 'Calculus Fundamentals',
      class: 'Mathematics 101',
      date: '2025-04-15',
      type: 'Reading'
    },
    {
      id: '2',
      title: 'Physics Laboratory Guide',
      class: 'Physics 202',
      date: '2025-04-12',
      type: 'Guide'
    },
    {
      id: '3',
      title: 'Literary Analysis Techniques',
      class: 'Literature Studies',
      date: '2025-04-10',
      type: 'Reading'
    }
  ];

  const upcomingAssignments = [
    {
      id: '1',
      title: 'Calculus Problem Set',
      class: 'Mathematics 101',
      dueDate: '2025-05-10',
      status: 'In Progress'
    },
    {
      id: '2',
      title: 'Physics Lab Report',
      class: 'Physics 202',
      dueDate: '2025-05-15',
      status: 'Not Started'
    },
    {
      id: '3',
      title: 'Literary Essay Draft',
      class: 'Literature Studies',
      dueDate: '2025-05-05',
      status: 'In Progress'
    }
  ];

  const [activeTab, setActiveTab] = useState('materials');

  return (
    <div className="space-y-8 p-4">
      <div>
        <h1 className="text-3xl font-bold mb-2 text-black">My Classes</h1>
        <p className="text-gray-500">Manage your classes, materials, and assignments</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((classItem) => (
          <div key={classItem.id} className="border border-gray-300 rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 pb-2">
              <div className="flex justify-between items-start">
                <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${classItem.color}`}>
                  {classItem.icon}
                </span>
              </div>
              <h3 className="mt-2 text-lg font-semibold text-black">{classItem.name}</h3>
              <p className="text-sm text-gray-500">{classItem.teacher}</p>
            </div>
            <div className="px-4 pb-4">
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-black ">Progress</span>
                    <span className='text-black'>{classItem.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${classItem.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-sm">
                  <p className="text-gray-500">Next class:</p>
                  <p className="text-black ">{classItem.nextClass}</p>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 border-t border-gray-300">
              <div className="w-full grid grid-cols-3 gap-2 text-center text-sm">
                <div>
                  <p className="font-bold text-black">{classItem.materials}</p>
                  <p className="text-gray-500">Materials</p>
                </div>
                <div>
                  <p className="font-bold text-black">{classItem.assignments}</p>
                  <p className="text-gray-500">Assignments</p>
                </div>
                <div>
                  <p className="font-bold text-black">{classItem.exams}</p>
                  <p className="text-gray-500">Exams</p>
                </div>
              </div>
            </div>
            <div className="px-4 pb-4">
              <Link
                href={"/dashboard/student/studentclass/classdetail"}
                className="w-full text-black inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="border-b border-gray-300">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('materials')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 border-gray-300 font-medium text-sm flex items-center ${activeTab === 'materials' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
          >
            <FileText className="h-4 w-4 mr-2" /> Materials
          </button>
          <button
            onClick={() => setActiveTab('assignments')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 border-gray-300 font-medium text-sm flex items-center ${activeTab === 'assignments' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
          >
            <Calendar className="h-4 w-4 mr-2" /> Assignments
          </button>
        </nav>
      </div>

      {activeTab === 'materials' && (
        <div className="mt-6">
          <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-black">Recent Materials</h2>
              <p className="text-sm text-gray-500 mt-1">Study materials uploaded by your teachers</p>
            </div>
            <div className="px-6 pb-6">
              <div className="space-y-4">
                {recentMaterials.map((material) => (
                  <div key={material.id} className="border border-gray-300 p-4 rounded-lg flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-black">{material.title}</h3>
                      <p className="text-sm text-gray-500">{material.class} • {material.date}</p>
                      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 mt-2">
                        {material.type}
                      </span>
                    </div>
                    <Link
                      href={`/dashboard/student/studentclass/materials`}
                      className="inline-flex text-black items-center rounded-md border border-gray-300 bg-white px-3 py-1 text-sm font-medium shadow-sm hover:bg-gray-50"
                    >
                      View
                    </Link>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Link
                  href="/dashboard/student/studentclass/materials"
                  className="text-blue-600 hover:text-blue-800 flex items-center justify-center"
                >
                  View All Materials <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'assignments' && (
        <div className="mt-6">
          <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-black">Upcoming Assignments</h2>
              <p className="text-sm text-gray-500 mt-1">Assignments due in the next two weeks</p>
            </div>
            <div className="px-6 pb-6">
              <div className="space-y-4">
                {upcomingAssignments.map((assignment) => (
                  <div key={assignment.id} className="border border-gray-300 p-4 rounded-lg flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-black">{assignment.title}</h3>
                      <p className="text-sm text-gray-500">{assignment.class} • Due: {assignment.dueDate}</p>
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
                      className="inline-flex text-black items-center rounded-md border border-gray-300 bg-white px-3 py-1 text-sm font-medium shadow-sm hover:bg-gray-50"
                    >
                      Work On
                    </Link>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Link
                  href="/dashboard/student/test"
                  className="text-blue-600 hover:text-blue-800 flex items-center justify-center"
                >
                  View All Assignments <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Studentclass;