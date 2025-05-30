
"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ClipboardList,
  FileText,
  PlusIcon,
  SearchIcon,
  Clock,
  Users,
  Calendar,
  CheckCircle,
  XCircle,
  Eye,
  Edit,
  Trash
} from "lucide-react";

// Sample exam data
const exams = [
  {
    id: "EXM001",
    title: "Mid-Term Mathematics Test",
    subject: "Mathematics",
    class: "JSS 1",
    teacher: "Dr. Sarah Johnson",
    date: "2023-10-15",
    duration: 60,
    status: "completed",
    students: {
      total: 35,
      completed: 35
    },
    avgScore: 72
  },
  {
    id: "EXM002",
    title: "English Language Assessment",
    subject: "English",
    class: "JSS 2",
    teacher: "Ms. Emily Rodriguez",
    date: "2023-10-18",
    duration: 90,
    status: "completed",
    students: {
      total: 30,
      completed: 28
    },
    avgScore: 68
  },
  {
    id: "EXM003",
    title: "Physics Final Examination",
    subject: "Physics",
    class: "SS 2",
    teacher: "Prof. Michael Chen",
    date: "2023-10-20",
    duration: 120,
    status: "ongoing",
    students: {
      total: 24,
      completed: 15
    },
    avgScore: null
  },
  {
    id: "EXM004",
    title: "Biology Practical Test",
    subject: "Biology",
    class: "SS 1",
    teacher: "Dr. Aisha Patel",
    date: "2023-10-25",
    duration: 90,
    status: "scheduled",
    students: {
      total: 26,
      completed: 0
    },
    avgScore: null
  },
  {
    id: "EXM005",
    title: "Computer Science Quiz",
    subject: "Computer Science",
    class: "JSS 3",
    teacher: "Mr. David Okafor",
    date: "2023-10-28",
    duration: 45,
    status: "scheduled",
    students: {
      total: 28,
      completed: 0
    },
    avgScore: null
  },
  {
    id: "EXM006",
    title: "History Year-End Examination",
    subject: "History",
    class: "SS 3",
    teacher: "Mr. James Wilson",
    date: "2023-11-05",
    duration: 120,
    status: "draft",
    students: {
      total: 22,
      completed: 0
    },
    avgScore: null
  }
];

// Subjects
const subjects = [
    "Mathematics",
    "English",
    "Physics",
    "Chemistry",
    "Biology",
    "Computer Science",
    "History",
    "Geography",
    "Economics",
    "Literature"
];

// Class levels
const classes = [
    "JSS 1",
    "JSS 2",
    "JSS 3",
    "SS 1",
    "SS 2",
    "SS 3"
];

export default function Exam() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSubject, setFilterSubject] = useState("all");
  const [filterClass, setFilterClass] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  // Filter exams
  const filteredExams = exams.filter(exam => {
    const matchesSearch =
      exam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exam.teacher.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSubject = filterSubject === "all" || exam.subject === filterSubject;
    const matchesClass = filterClass === "all" || exam.class === filterClass;
    const matchesStatus = filterStatus === "all" || exam.status === filterStatus;

    return matchesSearch && matchesSubject && matchesClass && matchesStatus;
  });

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Get status badge
  const getStatusBadge = (status) => {
    switch(status) {
      case 'completed':
        return <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Completed</span>;
      case 'ongoing':
        return <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">In Progress</span>;
      case 'scheduled':
        return <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">Scheduled</span>;
      case 'draft':
        return <span className="px-2 py-1 text-xs rounded-full border border-gray-300">Draft</span>;
      default:
        return <span className="px-2 py-1 text-xs rounded-full border border-gray-300">{status}</span>;
    }
  };

  const handleDeleteExam = (id, title) => {
    if (confirm(`Are you sure you want to delete ${title}?`)) {
      alert(`${title} has been removed from the system.`);
    }
  };

  return (
    <div className="space-y-6 p-4 md:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-black">Exams</h2>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center w-full sm:w-auto justify-center"
          onClick={() => router.push('/exams/create')}
        >
          <PlusIcon className="mr-2 h-4 w-4" />
          Create New Exam
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="border rounded-lg p-4 md:p-6 border-gray-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">Total Exams</p>
              <h3 className="text-xl md:text-2xl font-bold text-black">{exams.length}</h3>
            </div>
            <div className="bg-blue-100 p-2 rounded-full">
              <FileText className="h-5 w-5 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4 md:p-6 border-gray-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">Completed</p>
              <h3 className="text-xl md:text-2xl font-bold text-black">{exams.filter(e => e.status === 'completed').length}</h3>
            </div>
            <div className="bg-green-100 p-2 rounded-full">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4 md:p-6 border-gray-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">Ongoing</p>
              <h3 className="text-xl md:text-2xl font-bold text-black">{exams.filter(e => e.status === 'ongoing').length}</h3>
            </div>
            <div className="bg-blue-100 p-2 rounded-full">
              <Clock className="h-5 w-5 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4 md:p-6 border-gray-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">Scheduled</p>
              <h3 className="text-xl md:text-2xl font-bold text-black">{exams.filter(e => e.status === 'scheduled').length}</h3>
            </div>
            <div className="bg-yellow-100 p-2 rounded-full">
              <Calendar className="h-5 w-5 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col gap-4">
        <div className="relative w-full">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-900" />
          <input
            placeholder="Search exams by title or teacher..."
            className="pl-8 w-full h-10 rounded-md border text-black border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <select
            value={filterSubject}
            onChange={(e) => setFilterSubject(e.target.value)}
            className="flex-1 min-w-[150px] h-10 rounded-md text-black border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Subjects</option>
            {subjects.map((subject) => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>

          <select
            value={filterClass}
            onChange={(e) => setFilterClass(e.target.value)}
            className="flex-1 min-w-[130px] h-10 rounded-md text-black border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Classes</option>
            {classes.map((cls) => (
              <option key={cls} value={cls}>{cls}</option>
            ))}
          </select>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="flex-1 min-w-[130px] h-10 rounded-md text-black border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="completed">Completed</option>
            <option value="ongoing">Ongoing</option>
            <option value="scheduled">Scheduled</option>
            <option value="draft">Draft</option>
          </select>
        </div>
      </div>

      {/* Exams Table */}
      <div className="border rounded-lg shadow-sm border-gray-300 overflow-hidden">
        <div className="p-4 border-b border-gray-300">
          <h3 className="text-lg font-semibold text-black">Exam List</h3>
          <p className="text-gray-900">Manage and monitor all exams in the system</p>
        </div>
        <div className="p-4 overflow-x-auto text-black">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-3 px-4">Exam Title</th>
                <th className="text-left py-3 px-4">Subject / Class</th>
                <th className="text-left py-3 px-4">Date</th>
                <th className="text-left py-3 px-4">Duration</th>
                <th className="text-left py-3 px-4">Completion</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-right py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredExams.length === 0 ? (
                <tr>
                  <td colSpan={7} className="h-24 text-center py-4">
                    No exams found matching your search criteria.
                  </td>
                </tr>
              ) : (
                filteredExams.map((exam) => (
                  <tr key={exam.id} className="border-b border-gray-300 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <ClipboardList className="h-4 w-4 text-gray-400" />
                        <div>
                          <div className="font-medium">{exam.title}</div>
                          <div className="text-xs text-gray-500 mt-1">
                            By {exam.teacher}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-block text-black px-2 py-1 text-xs rounded-md border border-gray-200 mb-1">
                        {exam.subject}
                      </span>
                      <div className="text-xs text-gray-900">
                        {exam.class}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      {formatDate(exam.date)}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1 text-gray-900" />
                        {exam.duration} mins
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="w-[100px]">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-gray-900">
                            {exam.students.completed}/{exam.students.total} students
                          </span>
                          <span className="text-xs font-medium text-black">
                            {Math.round((exam.students.completed / exam.students.total) * 100) || 0}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-blue-600 h-1.5 rounded-full text-black"
                            style={{ width: `${(exam.students.completed / exam.students.total) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      {getStatusBadge(exam.status)}
                      {exam.status === 'completed' && exam.avgScore !== null && (
                        <div className="text-xs text-gray-900 mt-1">
                          Avg. Score: {exam.avgScore}%
                        </div>
                      )}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          className="p-1 rounded-md hover:bg-gray-100 text-black"
                          onClick={() => router.push(`/exams/${exam.id}`)}
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        {(exam.status === 'draft' || exam.status === 'scheduled') && (
                          <button
                            className="p-1 rounded-md hover:bg-gray-100 text-black"
                            onClick={() => router.push(`/exams/${exam.id}/edit`)}
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                        )}
                        <button
                          className="p-1 rounded-md hover:bg-red-50 text-red-500 hover:text-red-700"
                          onClick={() => handleDeleteExam(exam.id, exam.title)}
                        >
                          <Trash className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="border rounded-lg shadow-sm border-gray-300">
        <div className="p-4 border-b border-gray-300">
          <h3 className="text-lg font-semibold text-black">Recent Exam Activity</h3>
          <p className="text-gray-900">Latest updates from the examination system</p>
        </div>
        <div className="p-4 space-y-4">
          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-2 rounded-full">
              <CheckCircle className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-black">Mid-Term Mathematics Test completed</p>
              <p className="text-xs text-gray-900">All 35 students have completed the exam with an average score of 72%</p>
              <p className="text-xs text-gray-900 mt-1">2 hours ago</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <Clock className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-black">Physics Final Examination started</p>
              <p className="text-xs text-gray-900">15 out of 24 students have started the exam</p>
              <p className="text-xs text-gray-900 mt-1">4 hours ago</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-yellow-100 p-2 rounded-full">
              <Calendar className="h-4 w-4 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-black">Biology Practical Test scheduled</p>
              <p className="text-xs text-gray-900">Test scheduled for October 25, 2023 at 10:00 AM</p>
              <p className="text-xs text-gray-900 mt-1">Yesterday</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <FileText className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-black">Computer Science Quiz created</p>
              <p className="text-xs text-gray-900">45-minute quiz with 30 questions created by Mr. David Okafor</p>
              <p className="text-xs text-gray-900 mt-1">2 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}