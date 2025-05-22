
"use client"
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  School,
  Users,
  GraduationCap,
  FileText,
  BookOpen,
  Book,
  Award,
  Sidebar,
} from "lucide-react";

// Mock data
const MOCK_CLASSES = [
  { id: 1, name: "JSS 1", students: 25, teacher: "Mr. Johnson" },
  { id: 2, name: "JSS 2", students: 30, teacher: "Mrs. Smith" },
  { id: 3, name: "JSS 3", students: 28, teacher: "Mr. Brown" },
  { id: 4, name: "SS 1", students: 32, teacher: "Mrs. Davis" },
  { id: 5, name: "SS 2", students: 29, teacher: "Mr. Wilson" },
  { id: 6, name: "SS 3", students: 35, teacher: "Mrs. Taylor" },
];

const MOCK_TEACHERS = [
  { id: 1, name: "Sarah Johnson", email: "sarah@example.com", status: "active" },
  { id: 2, name: "Michael Chen", email: "michael@example.com", status: "active" },
  { id: 3, name: "Emily Rodriguez", email: "emily@example.com", status: "inactive" },
];

const MOCK_STUDENTS = [
  { id: 1, name: "John Doe", class: "JSS 1", status: "active" },
  { id: 2, name: "Jane Smith", class: "JSS 2", status: "active" },
  { id: 3, name: "David Brown", class: "SS 1", status: "active" },
  { id: 4, name: "Emma Wilson", class: "SS 3", status: "inactive" },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const router = useRouter();

  // Handle adding a new teacher
  const handleAddTeacher = () => {
    router.push("/admin/teachers/create");
  };

  // Handle adding a new student
  const handleAddStudent = () => {
    router.push("/admin/students/create");
  };

  return (
    <div className="">
      <div className="space-y-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Total Classes Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500">Total Classes</h3>
              <School className="h-5 w-5 text-gray-400" />
            </div>
            <div className="mt-2">
              <div className="text-2xl font-bold">{MOCK_CLASSES.length}</div>
              <p className="text-xs text-gray-500">
                6 active classes
              </p>
            </div>
          </div>

          {/* Total Students Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500">Total Students</h3>
              <Users className="h-5 w-5 text-gray-400" />
            </div>
            <div className="mt-2">
              <div className="text-2xl font-bold">{MOCK_STUDENTS.length}</div>
              <p className="text-xs text-gray-500">
                {MOCK_STUDENTS.filter(s => s.status === "active").length} active students
              </p>
            </div>
          </div>

          {/* Total Teachers Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500">Total Teachers</h3>
              <GraduationCap className="h-5 w-5 text-gray-400" />
            </div>
            <div className="mt-2">
              <div className="text-2xl font-bold">{MOCK_TEACHERS.length}</div>
              <p className="text-xs text-gray-500">
                {MOCK_TEACHERS.filter(t => t.status === "active").length} active teachers
              </p>
            </div>
          </div>

          {/* Total Exams Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500">Total Exams</h3>
              <FileText className="h-5 w-5 text-gray-400" />
            </div>
            <div className="mt-2">
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-gray-500">
                8 ongoing exams
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="space-y-4">
          <div className="flex border-b border-gray-300">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-2 font-medium ${activeTab === "overview" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("classes")}
              className={`px-4 py-2 font-medium ${activeTab === "classes" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
            >
              Classes
            </button>
            <button
              onClick={() => setActiveTab("teachers")}
              className={`px-4 py-2 font-medium ${activeTab === "teachers" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
            >
              Teachers
            </button>
            <button
              onClick={() => setActiveTab("students")}
              className={`px-4 py-2 font-medium ${activeTab === "students" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
            >
              Students
            </button>
          </div>

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {/* Recent Exams */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-bold mb-2">Recent Exams</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Recently created examinations
                  </p>
                  <div className="space-y-3">
                    <div className="space-y-1 rounded-md p-2 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Book className="h-4 w-4 text-blue-500" />
                          <span className="font-medium">End of Term Mathematics</span>
                        </div>
                        <span className="text-xs text-gray-500">Today</span>
                      </div>
                      <div className="pl-6 text-sm text-gray-500">JSS 2 • 45 min</div>
                    </div>

                    <div className="space-y-1 rounded-md p-2 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Book className="h-4 w-4 text-blue-500" />
                          <span className="font-medium">Physics Quiz</span>
                        </div>
                        <span className="text-xs text-gray-500">Yesterday</span>
                      </div>
                      <div className="pl-6 text-sm text-gray-500">SS 1 • 30 min</div>
                    </div>

                    <div className="space-y-1 rounded-md p-2 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Book className="h-4 w-4 text-blue-500" />
                          <span className="font-medium">English Comprehension</span>
                        </div>
                        <span className="text-xs text-gray-500">2 days ago</span>
                      </div>
                      <div className="pl-6 text-sm text-gray-500">JSS 3 • 60 min</div>
                    </div>
                  </div>
                </div>

                {/* Top Performing Students */}
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-bold mb-2">Top Performing Students</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Students with the highest average scores
                  </p>
                  <div className="space-y-3">
                    <div className="space-y-1 rounded-md p-2 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-yellow-500" />
                          <span className="font-medium">Olivia Smith</span>
                        </div>
                        <span className="text-sm font-medium">98%</span>
                      </div>
                      <div className="pl-6 text-sm text-gray-500">SS 1 • 5 exams</div>
                    </div>

                    <div className="space-y-1 rounded-md p-2 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-gray-400" />
                          <span className="font-medium">Daniel Brown</span>
                        </div>
                        <span className="text-sm font-medium">95%</span>
                      </div>
                      <div className="pl-6 text-sm text-gray-500">JSS 3 • 4 exams</div>
                    </div>

                    <div className="space-y-1 rounded-md p-2 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-amber-600" />
                          <span className="font-medium">Jennifer Lee</span>
                        </div>
                        <span className="text-sm font-medium">92%</span>
                      </div>
                      <div className="pl-6 text-sm text-gray-500">JSS 2 • 6 exams</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-bold mb-2">Recent Activity</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Recent activities in the system
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-blue-100 p-2">
                      <Users className="h-4 w-4 text-blue-500" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">New student registered</p>
                      <p className="text-xs text-gray-500">Today at 9:42 AM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-blue-100 p-2">
                      <FileText className="h-4 w-4 text-blue-500" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">New exam created by Sarah Johnson</p>
                      <p className="text-xs text-gray-500">Yesterday at 2:15 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-blue-100 p-2">
                      <BookOpen className="h-4 w-4 text-blue-500" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">SS 3 completed Physics exam</p>
                      <p className="text-xs text-gray-500">Yesterday at 11:30 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Classes Tab */}
          {activeTab === "classes" && (
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-bold mb-4">Classes</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teacher</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {MOCK_CLASSES.map((cls) => (
                      <tr key={cls.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{cls.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cls.students}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cls.teacher}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Teachers Tab */}
          {activeTab === "teachers" && (
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Teachers</h3>
                <button
                  onClick={handleAddTeacher}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Add Teacher
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {MOCK_TEACHERS.map((teacher) => (
                      <tr key={teacher.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{teacher.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${teacher.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}>
                            {teacher.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Students Tab */}
          {activeTab === "students" && (
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Students</h3>
                <button
                  onClick={handleAddStudent}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Add Student
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {MOCK_STUDENTS.map((student) => (
                      <tr key={student.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.class}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${student.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}>
                            {student.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;