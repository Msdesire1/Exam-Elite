"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  FileText,
  ChevronDown,
  Award,
  BookOpen,
  Users,
  CheckCircle,
  Clock,
  ChevronRight
} from "lucide-react";

// Sample results data
const exams = [
  {
    id: "EXM001",
    title: "Mid-Term Mathematics Test",
    class: "JSS 1A",
    subject: "Mathematics",
    date: "2023-09-15",
    students: {
      total: 35,
      submitted: 35
    },
    published: true,
    averageScore: 72
  },
  {
    id: "EXM002",
    title: "Linear Equations Quiz",
    class: "JSS 1B",
    subject: "Mathematics",
    date: "2023-09-20",
    students: {
      total: 32,
      submitted: 32
    },
    published: true,
    averageScore: 68
  },
  {
    id: "EXM003",
    title: "Geometry Assessment",
    class: "JSS 2A",
    subject: "Mathematics",
    date: "2023-09-25",
    students: {
      total: 30,
      submitted: 30
    },
    published: true,
    averageScore: 75
  },
  {
    id: "EXM004",
    title: "Physics Fundamentals Test",
    class: "JSS 3A",
    subject: "Physics",
    date: "2023-10-05",
    students: {
      total: 28,
      submitted: 28
    },
    published: true,
    averageScore: 70
  },
  {
    id: "EXM005",
    title: "Forces and Motion Quiz",
    class: "JSS 3A",
    subject: "Physics",
    date: "2023-10-12",
    students: {
      total: 28,
      submitted: 26
    },
    published: false,
    averageScore: 65
  }
];

// Sample detailed exam results
const examResults = {
  grades: [
    { grade: "A (90-100%)", count: 5 },
    { grade: "B (80-89%)", count: 8 },
    { grade: "C (70-79%)", count: 10 },
    { grade: "D (60-69%)", count: 7 },
    { grade: "F (Below 60%)", count: 5 }
  ],
  performance: [
    { name: "Question 1", correct: 28, wrong: 7 },
    { name: "Question 2", correct: 25, wrong: 10 },
    { name: "Question 3", correct: 20, wrong: 15 },
    { name: "Question 4", correct: 30, wrong: 5 },
    { name: "Question 5", correct: 22, wrong: 13 },
    { name: "Question 6", correct: 26, wrong: 9 },
    { name: "Question 7", correct: 18, wrong: 17 },
    { name: "Question 8", correct: 24, wrong: 11 },
    { name: "Question 9", correct: 27, wrong: 8 },
    { name: "Question 10", correct: 21, wrong: 14 }
  ],
  topStudents: [
    { id: "STD001", name: "John Doe", score: 95, timeTaken: "45 mins" },
    { id: "STD002", name: "Jane Smith", score: 92, timeTaken: "50 mins" },
    { id: "STD003", name: "Michael Johnson", score: 88, timeTaken: "48 mins" },
    { id: "STD004", name: "Sarah Williams", score: 85, timeTaken: "52 mins" },
    { id: "STD005", name: "David Brown", score: 82, timeTaken: "55 mins" }
  ]
};

// Sample class performance data for comparison
const classPerformance = [
  { name: "JSS 1A", mathematics: 72, physics: 68 },
  { name: "JSS 1B", mathematics: 68, physics: 65 },
  { name: "JSS 2A", mathematics: 75, physics: 70 },
  { name: "JSS 3A", mathematics: 70, physics: 72 }
];

const Teacherresult = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSubject, setFilterSubject] = useState("all");
  const [filterClass, setFilterClass] = useState("all");
  const [selectedExam, setSelectedExam] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  // Filter exams based on search and filters
  const filteredExams = exams.filter(exam => {
    const matchesSearch = exam.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = filterSubject === "all" || exam.subject === filterSubject;
    const matchesClass = filterClass === "all" || exam.class === filterClass;

    return matchesSearch && matchesSubject && matchesClass;
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

  // Calculate aggregated stats
  const calculateStats = () => {
    const totalStudents = exams.reduce((sum, exam) => sum + exam.students.total, 0);
    const totalSubmitted = exams.reduce((sum, exam) => sum + exam.students.submitted, 0);
    const completionRate = Math.round((totalSubmitted / totalStudents) * 100);

    const totalScores = exams
      .filter(exam => exam.published)
      .reduce((sum, exam) => sum + exam.averageScore, 0);
    const publishedExams = exams.filter(exam => exam.published).length;
    const averageScore = Math.round(totalScores / publishedExams);

    return {
      totalExams: exams.length,
      publishedExams,
      completionRate,
      averageScore
    };
  };

  const stats = calculateStats();
  const currentExam = exams.find(e => e.id === selectedExam);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Exam Results</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Generate Report
        </button>
      </div>

      {selectedExam ? (
        // Detailed exam results view
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedExam(null)}
                className="flex items-center gap-1 px-2 py-1 text-sm hover:bg-gray-100 rounded-md"
              >
                <ChevronRight className="h-4 w-4 rotate-180" />
                <span>Back</span>
              </button>
              <h3 className="text-xl font-semibold">
                {currentExam?.title}
              </h3>
              <span className="px-2 py-1 text-xs border rounded-full border-gray-300">
                {currentExam?.class}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-500">
                Date: {formatDate(currentExam?.date || "")}
              </p>
              {currentExam?.published ? (
                <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Published</span>
              ) : (
                <span className="px-2 py-1 text-xs border rounded-full border-gray-300">Not Published</span>
              )}
            </div>
          </div>

          <div className="flex space-x-2 overflow-x-auto pb-2">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-2 text-sm rounded-md whitespace-nowrap ${activeTab === "overview" ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("questions")}
              className={`px-4 py-2 text-sm rounded-md whitespace-nowrap ${activeTab === "questions" ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
            >
              Question Analysis
            </button>
            <button
              onClick={() => setActiveTab("students")}
              className={`px-4 py-2 text-sm rounded-md whitespace-nowrap ${activeTab === "students" ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
            >
              Student Performance
            </button>
          </div>

          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-blue-600">
                      {currentExam?.averageScore}%
                    </h3>
                    <p className="text-sm text-gray-500">Average Score</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-green-600">
                      {examResults.grades[0].count + examResults.grades[1].count}
                    </h3>
                    <p className="text-sm text-gray-500">A & B Grades</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-red-600">
                      {examResults.grades[4].count}
                    </h3>
                    <p className="text-sm text-gray-500">Failed Students</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold">Grade Distribution</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Breakdown of student grades for this exam
                  </p>
                  <div className="h-[300px]">
                    {/* Replace with your chart implementation */}
                    <div className="flex items-center justify-center h-full bg-gray-100 rounded">
                      <p>Grade Distribution Chart</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold">Top Performers</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Students with the highest scores
                  </p>
                  <div className="space-y-4">
                    {examResults.topStudents.map((student, index) => (
                      <div key={student.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-medium">
                            {index + 1}
                          </div>
                          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                            {student.name.split(" ").map(n => n[0]).join("").toUpperCase()}
                          </div>
                          <div>
                            <p className="font-medium">{student.name}</p>
                            <p className="text-xs text-gray-500">Time taken: {student.timeTaken}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            student.score >= 80 ? 'bg-green-100 text-green-800' :
                            student.score >= 70 ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {student.score}%
                          </span>
                          {index === 0 && (
                            <Award className="h-5 w-5 text-yellow-500" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "questions" && (
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold">Question Analysis</h3>
              <p className="text-sm text-gray-500 mb-6">
                Performance breakdown by question
              </p>
              <div className="h-[300px] mb-6 bg-gray-100 rounded flex items-center justify-center">
                <p>Question Performance Chart</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Difficulty Analysis</h3>

                {examResults.performance.map((question, index) => {
                  const totalAnswers = question.correct + question.wrong;
                  const correctPercentage = Math.round((question.correct / totalAnswers) * 100);

                  let difficulty;
                  let color;

                  if (correctPercentage >= 80) {
                    difficulty = "Easy";
                    color = "text-green-600";
                  } else if (correctPercentage >= 60) {
                    difficulty = "Medium";
                    color = "text-blue-600";
                  } else {
                    difficulty = "Hard";
                    color = "text-red-600";
                  }

                  return (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <p className="text-sm font-medium">{question.name}</p>
                        <p className={`text-sm font-medium ${color}`}>{difficulty}</p>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${correctPercentage}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-500 text-right">{correctPercentage}% correct</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === "students" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold">Class Comparison</h3>
                <p className="text-sm text-gray-500 mb-4">
                  How this class performed compared to others
                </p>
                <div className="h-[300px] bg-gray-100 rounded flex items-center justify-center">
                  <p>Class Comparison Chart</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold">Completion Statistics</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Time taken and completion rates
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Average Completion Time</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <Clock className="h-4 w-4 text-blue-600" />
                        </div>
                        <span className="font-medium">52 minutes</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        out of 60 minutes allowed
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-2">Completion Rate</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="font-medium">95%</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        33 out of 35 students completed all questions
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-4">Time Distribution</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Under 30 minutes</span>
                        <span>5 students</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '14%' }}></div>
                      </div>

                      <div className="flex justify-between text-sm">
                        <span>30-45 minutes</span>
                        <span>12 students</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '34%' }}></div>
                      </div>

                      <div className="flex justify-between text-sm">
                        <span>45-55 minutes</span>
                        <span>15 students</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '43%' }}></div>
                      </div>

                      <div className="flex justify-between text-sm">
                        <span>Over 55 minutes</span>
                        <span>3 students</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '9%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        // Exam results overview
        <>
          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Exams</p>
                  <h3 className="text-2xl font-bold">{stats.totalExams}</h3>
                </div>
                <div className="bg-blue-100 p-2 rounded-full">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Published Results</p>
                  <h3 className="text-2xl font-bold">{stats.publishedExams}</h3>
                </div>
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Completion Rate</p>
                  <h3 className="text-2xl font-bold">{stats.completionRate}%</h3>
                </div>
                <div className="bg-blue-100 p-2 rounded-full">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Average Score</p>
                  <h3 className="text-2xl font-bold">{stats.averageScore}%</h3>
                </div>
                <div className="bg-yellow-100 p-2 rounded-full">
                  <Award className="h-5 w-5 text-yellow-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
              <input
                placeholder="Search exams by title..."
                className="w-full pl-8 pr-4 py-2 border rounded-md border-gray-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <select
                value={filterSubject}
                onChange={(e) => setFilterSubject(e.target.value)}
                className="w-[150px] px-3 py-2 border rounded-md text-sm border-gray-300"
              >
                <option value="all">All Subjects</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physics">Physics</option>
              </select>

              <select
                value={filterClass}
                onChange={(e) => setFilterClass(e.target.value)}
                className="w-[130px] px-3 py-2 border rounded-md text-sm border-gray-300"
              >
                <option value="all">All Classes</option>
                <option value="JSS 1A">JSS 1A</option>
                <option value="JSS 1B">JSS 1B</option>
                <option value="JSS 2A">JSS 2A</option>
                <option value="JSS 3A">JSS 3A</option>
              </select>
            </div>
          </div>

          {/* Exams List */}
          <div className="space-y-4">
            {filteredExams.length > 0 ? (
              filteredExams.map((exam) => (
                <div
                  key={exam.id}
                  className="bg-white p-6 rounded-lg shadow border border-gray-300 cursor-pointer hover:border-blue-500 transition-colors"
                  onClick={() => setSelectedExam(exam.id)}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <FileText className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">{exam.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span>{exam.class}</span>
                          <span>•</span>
                          <span>{exam.subject}</span>
                          <span>•</span>
                          <span>{formatDate(exam.date)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">
                          {exam.students.submitted}/{exam.students.total} completed
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        {exam.published ? (
                          <>
                            <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Published</span>
                            <div className="flex items-center gap-1">
                              <Award className="h-4 w-4 text-yellow-500" />
                              <span className="font-medium">{exam.averageScore}%</span>
                            </div>
                          </>
                        ) : (
                          <span className="px-2 py-1 text-xs border border-gray-300 rounded-full">Not Published</span>
                        )}
                        <button className="px-2 py-1 text-sm hover:bg-gray-100 rounded-md">View</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10">
                <FileText className="mx-auto h-12 w-12 text-gray-300" />
                <h3 className="mt-4 text-lg font-semibold">No Exams Found</h3>
                <p className="text-gray-500">No exams match your search criteria.</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Teacherresult;