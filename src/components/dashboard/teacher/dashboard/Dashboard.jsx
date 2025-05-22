
"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  BookOpen,
  FileText,
  Clock,
  BarChart3,
  Users,
  Plus,
  CalendarDays,
  Edit,
  FileQuestion,
  Eye,
} from "lucide-react";

// Mock data
const MOCK_CLASSES = [
  { id: "1", name: "JSS 1", subject: "Mathematics", students: 45 },
  { id: "2", name: "JSS 2", subject: "English", students: 32 },
  { id: "3", name: "JSS 3", subject: "Science", students: 38 },
];

// Filter classes for teacher
const getTeacherClasses = (teacherClassIds = []) => {
  return MOCK_CLASSES.filter(c => teacherClassIds.includes(c.id));
};

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const router = useRouter();

  // Mock user data
  const user = { classIds: ["1", "2"] };
  const teacherClasses = getTeacherClasses(user?.classIds);

  const handleCreateExam = () => {
    router.push("/dashboard/teacher/create-test");
  };

  const handleViewClasses = () => {
    router.push("/teacher/classes");
  };

  const handleViewResults = () => {
    router.push("/teacher/results");
  };

  const handleViewExams = () => {
    router.push("/teacher/exams");
  };

  const handleEditExam = (examId) => {
    router.push("/teacher/exams/create");
  };

  const handleViewExam = (examId) => {
    alert("View exam details");
  };

  const handleMonitorExam = () => {
    alert("Monitoring exam in progress");
  };

  return (
    <div className="p-6 space-y-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex flex-row items-center justify-between">
            <h3 className="text-sm font-medium">My Classes</h3>
            <BookOpen className="h-4 w-4 text-gray-400" />
          </div>
          <div className="mt-4">
            <div className="text-2xl font-bold">{teacherClasses.length}</div>
            <p className="text-xs text-gray-500">
              Assigned classes
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex flex-row items-center justify-between">
            <h3 className="text-sm font-medium">Created Exams</h3>
            <FileText className="h-4 w-4 text-gray-400" />
          </div>
          <div className="mt-4">
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-gray-500">
              3 pending exams
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex flex-row items-center justify-between">
            <h3 className="text-sm font-medium">Total Students</h3>
            <Users className="h-4 w-4 text-gray-400" />
          </div>
          <div className="mt-4">
            <div className="text-2xl font-bold">87</div>
            <p className="text-xs text-gray-500">
              Across all classes
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2 text-sm rounded-md ${activeTab === "overview" ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("classes")}
            className={`px-4 py-2 text-sm rounded-md ${activeTab === "classes" ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
          >
            My Classes
          </button>
          <button
            onClick={() => setActiveTab("exams")}
            className={`px-4 py-2 text-sm rounded-md ${activeTab === "exams" ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
          >
            My Exams
          </button>
        </div>

        {activeTab === "overview" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="mb-4">
                  <h2 className="text-lg font-semibold">Upcoming Exams</h2>
                  <p className="text-sm text-gray-500">
                    Exams scheduled in the next 7 days
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-1 rounded-md p-2 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-blue-600" />
                        <span className="font-medium">End of Term Mathematics</span>
                      </div>
                      <span className="text-xs text-gray-500">Tomorrow</span>
                    </div>
                    <div className="pl-6 text-sm text-gray-500">JSS 2 • 45 min</div>
                  </div>

                  <div className="space-y-1 rounded-md p-2 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-blue-600" />
                        <span className="font-medium">Physics Quiz</span>
                      </div>
                      <span className="text-xs text-gray-500">In 3 days</span>
                    </div>
                    <div className="pl-6 text-sm text-gray-500">JSS 1 • 30 min</div>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    onClick={handleCreateExam}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50"
                  >
                    <Plus className="h-4 w-4" />
                    Create New Exam
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="mb-4">
                  <h2 className="text-lg font-semibold">Recent Results</h2>
                  <p className="text-sm text-gray-500">
                    Latest exam performance statistics
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-1 rounded-md p-2 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="h-4 w-4 text-blue-600" />
                        <span className="font-medium">English Test</span>
                      </div>
                      <span className="text-sm font-medium">Avg: 78%</span>
                    </div>
                    <div className="pl-6 text-sm text-gray-500">JSS 2 • 32 students</div>
                  </div>

                  <div className="space-y-1 rounded-md p-2 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="h-4 w-4 text-blue-600" />
                        <span className="font-medium">Mathematics Quiz</span>
                      </div>
                      <span className="text-sm font-medium">Avg: 65%</span>
                    </div>
                    <div className="pl-6 text-sm text-gray-500">JSS 1 • 45 students</div>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    onClick={handleViewResults}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50"
                  >
                    View All Results
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="mb-4">
                <h2 className="text-lg font-semibold">Quick Actions</h2>
                <p className="text-sm text-gray-500">
                  Frequently used teacher actions
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <button
                  onClick={handleCreateExam}
                  className="h-24 flex flex-col items-center justify-center border border-gray-300 rounded-lg p-4 hover:bg-gray-50"
                >
                  <FileQuestion className="mb-2 h-6 w-6" />
                  <span>Create Exam</span>
                </button>

                <button
                  onClick={handleViewClasses}
                  className="h-24 flex flex-col items-center justify-center border border-gray-300 rounded-lg p-4 hover:bg-gray-50"
                >
                  <BookOpen className="mb-2 h-6 w-6" />
                  <span>View Classes</span>
                </button>

                <button
                  onClick={handleViewResults}
                  className="h-24 flex flex-col items-center justify-center border border-gray-300 rounded-lg p-4 hover:bg-gray-50"
                >
                  <BarChart3 className="mb-2 h-6 w-6" />
                  <span>View Results</span>
                </button>

                <button
                  onClick={handleViewExams}
                  className="h-24 flex flex-col items-center justify-center border border-gray-300 rounded-lg p-4 hover:bg-gray-50"
                >
                  <Edit className="mb-2 h-6 w-6" />
                  <span>Edit Exams</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "classes" && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">My Classes</h2>
            <div className="space-y-4">
              {teacherClasses.map((classItem) => (
                <div key={classItem.id} className="border rounded-lg p-4 hover:bg-gray-50 border-gray-300">
                  <h3 className="font-medium">{classItem.name} - {classItem.subject}</h3>
                  <p className="text-sm text-gray-500">{classItem.students} students</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "exams" && (
          <div className="space-y-4">
            <div className="flex justify-end">
              <button
                onClick={handleCreateExam}
                className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Plus className="h-4 w-4" /> Create Exam
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="mb-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">End of Term Mathematics</h3>
                    <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">Upcoming</span>
                  </div>
                  <p className="text-sm text-gray-500">JSS 2 • Tomorrow</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span>45 minutes • 20 questions</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span>32 students assigned</span>
                  </div>
                </div>
                <div className="mt-6 flex gap-2">
                  <button
                    onClick={() => handleEditExam("exam1")}
                    className="flex-1 flex items-center justify-center gap-1 px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50"
                  >
                    <Edit className="h-4 w-4" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleViewExam("exam1")}
                    className="flex-1 flex items-center justify-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
                  >
                    <Eye className="h-4 w-4" />
                    View
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="mb-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">Physics Quiz</h3>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">In Progress</span>
                  </div>
                  <p className="text-sm text-gray-500">JSS 1 • Active now</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span>30 minutes • 15 questions</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span>28/45 students completed</span>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    onClick={handleMonitorExam}
                    className="w-full flex items-center justify-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
                  >
                    <Eye className="h-4 w-4" />
                    Monitor
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="mb-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">English Comprehension</h3>
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Completed</span>
                  </div>
                  <p className="text-sm text-gray-500">JSS 2 • Last week</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span>60 minutes • 25 questions</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BarChart3 className="h-4 w-4 text-gray-400" />
                    <span>Avg. score: 76%</span>
                  </div>
                </div>
                <div className="mt-6 flex gap-2">
                  <button
                    onClick={handleViewResults}
                    className="flex-1 flex items-center justify-center gap-1 px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50"
                  >
                    <BarChart3 className="h-4 w-4" />
                    Results
                  </button>
                  <button
                    onClick={() => handleViewExam("exam3")}
                    className="flex-1 flex items-center justify-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
                  >
                    <Eye className="h-4 w-4" />
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherDashboard;