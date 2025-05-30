"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  BookOpen,
  Search,
  Users,
  Clock,
  CalendarDays,
  ClipboardList,
  ChevronRight
} from "lucide-react";

// Sample class data
const classes = [
  {
    id: "CLS001",
    name: "JSS 1A",
    level: "JSS 1",
    students: 35,
    schedule: [
      { day: "Monday", time: "9:00 AM - 10:30 AM" },
      { day: "Wednesday", time: "10:45 AM - 12:15 PM" }
    ],
    subjects: ["Mathematics"],
    upcomingLessons: 2,
    pendingAssignments: 1,
    scheduledExams: 1
  },
  {
    id: "CLS002",
    name: "JSS 1B",
    level: "JSS 1",
    students: 32,
    schedule: [
      { day: "Tuesday", time: "9:00 AM - 10:30 AM" },
      { day: "Thursday", time: "10:45 AM - 12:15 PM" }
    ],
    subjects: ["Mathematics"],
    upcomingLessons: 2,
    pendingAssignments: 0,
    scheduledExams: 1
  },
  {
    id: "CLS003",
    name: "JSS 2A",
    level: "JSS 2",
    students: 30,
    schedule: [
      { day: "Monday", time: "1:00 PM - 2:30 PM" },
      { day: "Friday", time: "9:00 AM - 10:30 AM" }
    ],
    subjects: ["Mathematics"],
    upcomingLessons: 1,
    pendingAssignments: 2,
    scheduledExams: 0
  },
  {
    id: "CLS004",
    name: "JSS 3A",
    level: "JSS 3",
    students: 28,
    schedule: [
      { day: "Tuesday", time: "1:00 PM - 2:30 PM" },
      { day: "Thursday", time: "2:45 PM - 4:15 PM" }
    ],
    subjects: ["Mathematics", "Physics"],
    upcomingLessons: 2,
    pendingAssignments: 1,
    scheduledExams: 1
  }
];

// Sample students for a class
const sampleStudents = [
  {
    id: "STD001",
    name: "John Doe",
    avatar: "/placeholder.svg",
    attendance: "92%",
    avgScore: "88%",
    lastActive: "Today"
  },
  {
    id: "STD002",
    name: "Jane Smith",
    avatar: "/placeholder.svg",
    attendance: "95%",
    avgScore: "91%",
    lastActive: "Today"
  },
  {
    id: "STD003",
    name: "Michael Johnson",
    avatar: "/placeholder.svg",
    attendance: "88%",
    avgScore: "78%",
    lastActive: "Yesterday"
  },
  {
    id: "STD004",
    name: "Sarah Williams",
    avatar: "/placeholder.svg",
    attendance: "85%",
    avgScore: "82%",
    lastActive: "Yesterday"
  },
  {
    id: "STD005",
    name: "David Brown",
    avatar: "/placeholder.svg",
    attendance: "90%",
    avgScore: "85%",
    lastActive: "3 days ago"
  }
];

const sampleLessons = [
  {
    id: "LES001",
    title: "Introduction to Algebra",
    date: "2023-10-18",
    time: "9:00 AM - 10:30 AM",
    status: "completed"
  },
  {
    id: "LES002",
    title: "Linear Equations",
    date: "2023-10-20",
    time: "9:00 AM - 10:30 AM",
    status: "completed"
  },
  {
    id: "LES003",
    title: "Quadratic Equations",
    date: "2023-10-25",
    time: "9:00 AM - 10:30 AM",
    status: "upcoming"
  },
  {
    id: "LES004",
    title: "Polynomials",
    date: "2023-10-27",
    time: "9:00 AM - 10:30 AM",
    status: "upcoming"
  }
];

// Sample assignments for a class
const sampleAssignments = [
  {
    id: "ASG001",
    title: "Algebra Practice Problems",
    dueDate: "2023-10-22",
    status: "past",
    submitted: 30,
    total: 35
  },
  {
    id: "ASG002",
    title: "Linear Equations Worksheet",
    dueDate: "2023-10-25",
    status: "active",
    submitted: 20,
    total: 35
  },
  {
    id: "ASG003",
    title: "Quadratic Equations Quiz",
    dueDate: "2023-10-30",
    status: "upcoming",
    submitted: 0,
    total: 35
  }
];

const TeacherClass = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  // Filter classes based on search term
  const filteredClasses = classes.filter(cls =>
    cls.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cls.level.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Get current class details
  const currentClass = classes.find(c => c.id === selectedClass);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center lg:flex-row flex-col ">
        <h2 className="text-3xl font-bold  text-black">My Classes</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Create Lesson Plan
        </button>
      </div>

      {/* Search */}
      <div className="relative w-full md:max-w-xs">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
        <input
          placeholder="Search classes..."
          className="w-full pl-8 pr-4 py-2  text-black border rounded-md border-gray-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {selectedClass ? (
        // Class details view
        <div className="space-y-6">
          <div className="flex items-center justify-between  text-black">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedClass(null)}
                className="flex items-center gap-1 px-2 py-1 text-sm hover:bg-gray-100 rounded-md"
              >
                <ChevronRight className="h-4 w-4 rotate-180" />
                <span>Back</span>
              </button>
              <h3 className="text-xl font-semibold  text-black">
                {currentClass?.name}
              </h3>
              <span className="px-2 py-1  text-black text-xs border rounded-full border-gray-300">
                {currentClass?.level}
              </span>
            </div>
            <button className="px-4 py-2 border  text-black rounded-md hover:bg-gray-50 border-gray-300">
              Take Attendance
            </button>
          </div>

          <div className="flex space-x-2 overflow-x-auto pb-2 text-black">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-2 text-sm rounded-md whitespace-nowrap ${activeTab === "overview" ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("students")}
              className={`px-4 py-2 text-sm rounded-md whitespace-nowrap ${activeTab === "students" ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
            >
              Students
            </button>
            <button
              onClick={() => setActiveTab("lessons")}
              className={`px-4 py-2 text-sm rounded-md whitespace-nowrap ${activeTab === "lessons" ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
            >
              Lessons
            </button>
            <button
              onClick={() => setActiveTab("assignments")}
              className={`px-4 py-2 text-sm rounded-md whitespace-nowrap ${activeTab === "assignments" ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
            >
              Assignments
            </button>
          </div>

          {activeTab === "overview" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Students</p>
                      <h3 className="text-2xl font-bold text-black">
                        {currentClass?.students}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Upcoming Lessons</p>
                      <h3 className="text-2xl font-bold text-black">
                        {currentClass?.upcomingLessons}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <BookOpen className="h-5 w-5 text-green-600" />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Pending Assignments</p>
                      <h3 className="text-2xl font-bold text-black">
                        {currentClass?.pendingAssignments}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                      <ClipboardList className="h-5 w-5 text-yellow-600" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold  text-black">Class Schedule</h3>
                  <p className="text-sm text-gray-900 mb-4">
                    Regular schedule for {currentClass?.name}
                  </p>
                  <div className="space-y-4">
                    {currentClass?.schedule.map((schedule, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                          <Clock className="h-5 w-5 text-gray-900" />
                        </div>
                        <div>
                          <p className="font-medium  text-black">{schedule.day}</p>
                          <p className="text-sm text-gray-900">{schedule.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold  text-black">Recent Activity</h3>
                  <p className="text-sm text-gray-900 mb-4">
                    Recent activities in {currentClass?.name}
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <BookOpen className="h-5 w-5 text-gray-900" />
                      </div>
                      <div>
                        <p className="font-medium  text-black">Lesson completed: Introduction to Algebra</p>
                        <p className="text-sm text-gray-900">Yesterday at 10:30 AM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <ClipboardList className="h-5 w-5 text-gray-900" />
                      </div>
                      <div>
                        <p className="font-medium  text-black">Assignment submitted by 30 students</p>
                        <p className="text-sm text-gray-900">2 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "students" && (
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold  text-black">Student List</h3>
              <p className="text-sm text-gray-900 mb-4">
                All students enrolled in {currentClass?.name}
              </p>
              <div className="space-y-4">
                {sampleStudents.map((student) => (
                  <div key={student.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                        {student.name.split(" ").map(n => n[0]).join("").toUpperCase()}
                      </div>
                      <div>
                        <p className="font-medium  text-black">{student.name}</p>
                        <p className="text-xs text-gray-900">Last active: {student.lastActive}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <p className="text-sm font-medium  text-black">{student.attendance}</p>
                        <p className="text-xs text-gray-900">Attendance</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium  text-black">{student.avgScore}</p>
                        <p className="text-xs text-gray-900">Avg. Score</p>
                      </div>
                      <button className="px-2 py-1 text-sm hover:bg-gray-100 rounded-md  text-black">View</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 pt-4 border-t border-gray-300">
                <p className="text-sm text-gray-900">
                  Showing {sampleStudents.length} of {currentClass?.students} students
                </p>
                <button className="px-4 py-2  text-black border border-gray-300 rounded-md text-sm hover:bg-gray-50">
                  View All
                </button>
              </div>
            </div>
          )}

          {activeTab === "lessons" && (
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-lg font-semibold  text-black">Lessons</h3>
                  <p className="text-sm text-gray-900">
                    All lessons for {currentClass?.name}
                  </p>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Create New Lesson
                </button>
              </div>
              <div className="space-y-4">
                {sampleLessons.map((lesson) => (
                  <div key={lesson.id} className="p-4 border  text-black border-gray-300 rounded-lg hover:bg-gray-50">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium  text-black">{lesson.title}</h4>
                        <p className="text-sm text-gray-900">
                          {formatDate(lesson.date)} • {lesson.time}
                        </p>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        lesson.status === 'completed' ? 'bg-green-100 text-green-800' :
                        lesson.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {lesson.status.charAt(0).toUpperCase() + lesson.status.slice(1)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "assignments" && (
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-lg font-semibold  text-black">Assignments</h3>
                  <p className="text-sm text-gray-900">
                    All assignments for {currentClass?.name}
                  </p>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Create New Assignment
                </button>
              </div>
              <div className="space-y-4">
                {sampleAssignments.map((assignment) => (
                  <div key={assignment.id} className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-black">{assignment.title}</h4>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        assignment.status === 'past' ? 'bg-gray-100 text-gray-800' :
                        assignment.status === 'active' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-900 mb-2">
                      Due: {formatDate(assignment.dueDate)}
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${(assignment.submitted / assignment.total) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-900 mt-1">
                      {assignment.submitted} of {assignment.total} students submitted
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        // Class overview grid
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClasses.length > 0 ? (
            filteredClasses.map((cls) => (
              <div
                key={cls.id}
                className="bg-white p-6 rounded-lg shadow border border-gray-300 hover:border-blue-500 cursor-pointer"
                onClick={() => setSelectedClass(cls.id)}
              >
                <div className="flex justify-between mb-2">
                  <span className="px-2 py-1 text-xs border  border-gray-300 rounded-full  text-black">{cls.level}</span>
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">
                    {cls.subjects.join(", ")}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-1  text-black">{cls.name}</h3>
                <p className="text-sm text-gray-900 mb-4">{cls.students} Students</p>

                <div className="space-y-3 mb-4">
                  {cls.schedule.map((schedule, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-gray-900" />
                      <span className=" text-black">{schedule.day}: {schedule.time}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-300">
                  <div className="flex items-center text-sm text-gray-900">
                    <CalendarDays className="h-4 w-4 mr-1" />
                    <span className=" text-black">{cls.upcomingLessons} upcoming</span>
                  </div>
                  <button
                    className="px-2 py-1 text-sm hover:bg-gray-100 rounded-md  text-black"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedClass(cls.id);
                    }}
                  >
                    View Class
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <BookOpen className="mx-auto h-12 w-12 text-gray-900" />
              <h3 className="mt-4 text-lg font-semibold">No Classes Found</h3>
              <p className="text-gray-900">No classes match your search criteria.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TeacherClass;