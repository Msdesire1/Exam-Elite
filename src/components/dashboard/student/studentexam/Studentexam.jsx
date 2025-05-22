
"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Calendar, ArrowRight, FileText, Search } from 'lucide-react';
import Modal from './modal/Modal';

const Studentexam = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('all');
  const [activeTab, setActiveTab] = useState('upcoming');
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExam, setSelectedExam] = useState(null);

  const exams = [
    {
      title: 'Mathematics Mid-Term',
      date: '2025-05-15',
      subject: 'mathematics',
      teacher: 'Prof. Alan Johnson',
      status: 'upcoming',
      timeRemaining: '8 days'
    },
    {
      title: 'Physics Laboratory Test',
      date: '2025-05-20',
      subject: 'science',
      teacher: 'Dr. Emily Chen',
      status: 'upcoming',
      timeRemaining: '13 days'
    },
    {
      title: 'Literature Essay',
      date: '2025-05-10',
      subject: 'literature',
      teacher: 'Ms. Sofia Rodriguez',
      status: 'upcoming',
      timeRemaining: '3 days'
    },
    {
      title: 'Biology Quiz',
      date: '2025-04-28',
      subject: 'science',
      teacher: 'Dr. Michael Kim',
      status: 'completed',
      score: 85,
      maxScore: 100
    },
    {
      title: 'History Assignment',
      date: '2025-04-20',
      subject: 'history',
      teacher: 'Prof. Sarah Thompson',
      status: 'completed',
      score: 92,
      maxScore: 100
    }
  ];

  // Get unique subjects for the filter
  const subjects = ['all', ...new Set(exams.map(exam => exam.subject))];

  // Filter exams based on search and subject filter
  const filteredUpcomingExams = exams
    .filter(exam => exam.status === 'upcoming')
    .filter(exam => {
      const matchesSearch = exam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exam.subject.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSubject = subjectFilter === 'all' || exam.subject === subjectFilter;
      return matchesSearch && matchesSubject;
    });

  const filteredCompletedExams = exams
    .filter(exam => exam.status === 'completed')
    .filter(exam => {
      const matchesSearch = exam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exam.subject.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSubject = subjectFilter === 'all' || exam.subject === subjectFilter;
      return matchesSearch && matchesSubject;
    });

  const handleOpenModal = (exam) => {
    setSelectedExam(exam);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleStartExam = () => {
    router.push('/dashboard/student/studentexam/examst');
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Examinations</h1>
        <p className="text-gray-500">View all your exams, prepare for upcoming tests, and review past results</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="relative flex-grow max-w-md py-5">
          <div className="absolute inset-y-0 left-0 pl-3 mb- flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search exams..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex gap-4">
          <select
            value={subjectFilter}
            onChange={(e) => setSubjectFilter(e.target.value)}
            className="block w-[60%] pl-3 pr-20 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject === 'all' ? 'All Subjects' : subject.charAt(0).toUpperCase() + subject.slice(1)}
              </option>
            ))}
          </select>

          <button
            onClick={() => router.push('/dashboard/student/studentexam/examcalender')}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Calendar className="h-4 w-4 mr-2" /> Calendar View
          </button>
        </div>
      </div>

      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`${activeTab === 'upcoming' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Upcoming Exams
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`${activeTab === 'completed' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Completed Exams
          </button>
        </nav>
      </div>

      {activeTab === 'upcoming' && (
        <div className="mt-6">
          {filteredUpcomingExams.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredUpcomingExams.map((exam, index) => (
                <div key={index} className="border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-6 pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-bold">{exam.title}</h3>
                        <p className="text-gray-500 text-sm">{exam.subject.charAt(0).toUpperCase() + exam.subject.slice(1)} • {exam.teacher}</p>
                      </div>
                      {exam.timeRemaining && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {exam.timeRemaining}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="px-6 pb-2">
                    <p className="text-sm text-gray-500">Exam Date: {exam.date}</p>
                  </div>
                  <div className="px-6 pb-4 pt-2 flex justify-between">
                    <button
                      onClick={() => router.push('/dashboard/student/studentexam/prepareexam')}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Prepare Now
                    </button>
                    <button
                      onClick={() => handleOpenModal(exam)}
                      className="inline-flex items-center px-4 py-2 border b border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Start Exam
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border rounded-lg">
              <FileText className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-4 text-lg font-medium">No upcoming exams found</h3>
              <p className="text-gray-500 mt-2">There are no upcoming exams matching your filters.</p>
            </div>
          )}
        </div>
      )}

      {activeTab === 'completed' && (
        <div className="mt-6">
          {filteredCompletedExams.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCompletedExams.map((exam, index) => (
                <div key={index} className="border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-6 pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-bold">{exam.title}</h3>
                        <p className="text-gray-500 text-sm">{exam.subject.charAt(0).toUpperCase() + exam.subject.slice(1)} • {exam.teacher}</p>
                      </div>
                      {exam.score !== undefined && exam.maxScore !== undefined && (
                        <div className="text-lg font-bold">
                          {exam.score}/{exam.maxScore}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="px-6 pb-2">
                    <p className="text-sm text-gray-500">Completed on: {exam.date}</p>
                  </div>
                  <div className="px-6 pb-4 pt-2 flex justify-between">
                    <button
                      onClick={() => router.push('/dashboard/student/studentexam/detailsrt')}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      View Details
                    </button>
                    <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Download Result
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border rounded-lg">
              <FileText className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-4 text-lg font-medium">No completed exams found</h3>
              <p className="text-gray-500 mt-2">There are no completed exams matching your filters.</p>
            </div>
          )}
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between items-center p-6 border border-gray-300 rounded-lg">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-500">Need help preparing for exams?</p>
          <p>Check out our study resources and tips.</p>
        </div>
        <button
          onClick={() => router.push('/dashboard/student/studentexam/resources')}
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Study Resources <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onStart={handleStartExam}
        subject={selectedExam?.subject}
      />
    </div>
  );
};

export default Studentexam;