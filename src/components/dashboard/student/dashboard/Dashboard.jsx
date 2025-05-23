

"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  BookOpen,
  FileText,
  Clock,
  BarChart3,
  Calendar,
  ArrowRight,
  Trophy,
  CheckCircle2,
  TimerIcon,
} from "lucide-react";
import StudentResults from "../results/StudentResults";
import Modal from "../studentexam/modal/Modal";

// Mock data
const MOCK_CLASSES = [
  { id: "1", name: "Mathematics", level: "JSS 1" },
  { id: "2", name: "English", level: "JSS 1" },
  { id: "3", name: "Science", level: "JSS 1" },
];

// Filter classes for student
const getStudentClasses = (studentClassIds = []) => {
  return MOCK_CLASSES.filter(c => studentClassIds.includes(c.id));
};

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const router = useRouter();

  // Mock user data
  const user = {
    classIds: ["1", "2", "3"]
  };

  const studentClasses = getStudentClasses(user?.classIds);

  const handleViewAllExams = () => {
    router.push("/student/exams");
  };

  const handlePrepareExam = () => {
    router.push("/dashboard/student/studentexam/prepareexam");
  };


  const handleViewResults = () => {
    router.push("/student/results");
  };

  const handleViewClasses = () => {
    router.push("/student/classes");
  };

  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const handleOpen = () => {
    setIsDetailsVisible(true);
  };
  const handleCloseDetails = () => {
    setIsDetailsVisible(false);
  };


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExam, setSelectedExam] = useState(null);

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
    <div className="p-6">
      <div className="space-y-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white rounded-lg border p-4 border-gray-300 shadow-sm">
            <div className="flex flex-row items-center justify-between pb-2">
              <h3 className="text-sm font-medium text-black">My Classes</h3>
              <BookOpen className="h-4 w-4 text-gray-800" />
            </div>
            <div className="p-2">
              <div className="text-2xl font-bold">{studentClasses.length}</div>
              <p className="text-xs text-gray-800">
                Enrolled classes
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg border p-4 border-gray-300 shadow-sm">
            <div className="flex flex-row items-center justify-between pb-2">
              <h3 className="text-sm font-medium text-black">Upcoming Exams</h3>
              <FileText className="h-4 w-4 text-gray-800" />
            </div>
            <div className="p-2">
              <div className="text-2xl font-bold text-black">3</div>
              <p className="text-xs text-gray-800">
                In the next 7 days
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg border p-4  border-gray-300 shadow-sm">
            <div className="flex flex-row items-center justify-between pb-2">
              <h3 className="text-sm font-medium text-black">Completed Exams</h3>
              <CheckCircle2 className="h-4 w-4 text-gray-800" />
            </div>
            <div className="p-2">
              <div className="text-2xl font-bold text-black">8</div>
              <p className="text-xs text-gray-800">
                Total completed
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg border p-4 border-gray-300 shadow-sm">
            <div className="flex flex-row items-center justify-between pb-2">
              <h3 className="text-sm font-medium  text-black">Average Score</h3>
              <Trophy className="h-4 w-4 text-gray-800" />
            </div>
            <div className="p-2">
              <div className="text-2xl font-bold text-black">82%</div>
              <p className="text-xs text-gray-800">
                +5% from last term
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex space-x-2 border-b  border-gray-300">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-2 text-sm font-medium ${activeTab === "overview" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-800"}`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("exams")}
              className={`px-4 py-2 text-sm font-medium ${activeTab === "exams" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-800"}`}
            >
              My Exams
            </button>
            <button
              onClick={() => setActiveTab("results")}
              className={`px-4 py-2 text-sm font-medium ${activeTab === "results" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-800"}`}
            >
              My Results
            </button>
          </div>

          {activeTab === "overview" && (
            <div className="space-y-4">
              <div className="bg-white rounded-lg border border-gray-300 p-6 shadow-sm">
                <div className="pb-4">
                  <h2 className="text-lg font-bold text-black">Upcoming Exams</h2>
                  <p className="text-sm text-gray-800">
                    Your scheduled exams for the next few days
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4 border-gray-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                          <Calendar className="h-5 w-5 text-blue-500" />
                        </div>
                        <div>
                          <p className="font-medium text-black">Mathematics End of Term</p>
                          <p className="text-sm text-gray-800">JSS 1 • 45 minutes</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-flex  text-black items-center rounded-full border border-gray-300 px-2.5 py-0.5 text-xs font-semibold mb-1">
                          Tomorrow, 9:00 AM
                        </span>
                        <p className="text-sm text-gray-800">20 questions</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4  border-gray-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                          <Calendar className="h-5 w-5 text-blue-500" />
                        </div>
                        <div>
                          <p className="font-medium text-black">English Comprehension</p>
                          <p className="text-sm text-gray-800">JSS 1 • 60 minutes</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-flex text-black items-center rounded-full border  border-gray-300 px-2.5 py-0.5 text-xs font-semibold mb-1">
                          In 3 days, 10:30 AM
                        </span>
                        <p className="text-sm text-gray-800">25 questions</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4  border-gray-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                          <Calendar className="h-5 w-5 text-blue-500" />
                        </div>
                        <div>
                          <p className="font-medium text-black">Science Quiz</p>
                          <p className="text-sm text-gray-800">JSS 1 • 30 minutes</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-flex text-black items-center rounded-full border border-gray-300 px-2.5 py-0.5 text-xs font-semibold mb-1">
                          In 5 days, 2:00 PM
                        </span>
                        <p className="text-sm text-gray-800">15 questions</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <button
                    className="flex items-center justify-center gap-1 w-full border border-gray-300 rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-50"
                    onClick={handleViewAllExams}
                  >
                    View All Exams <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="bg-white rounded-lg border  border-gray-300 p-6 shadow-sm">
                  <div className="pb-4">
                    <h2 className="text-lg font-bold text-black">Performance Overview</h2>
                    <p className="text-sm text-gray-800">
                      Your exam performance by subject
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-black">Mathematics</p>
                        <p className="text-sm font-medium text-black">85%</p>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-black">English</p>
                        <p className="text-sm font-medium text-black">78%</p>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: "78%" }}></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-black">Science</p>
                        <p className="text-sm font-medium text-black">92%</p>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: "92%" }}></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-black">Social Studies</p>
                        <p className="text-sm font-medium text-black">75%</p>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <button
                      className="w-full border text-black border-gray-300 rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-50"
                      onClick={handleOpen}
                    >
                      View Detailed Results
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-300 p-6 shadow-sm">
                  <div className="pb-4">
                    <h2 className="text-lg font-bold text-black">Recent Activity</h2>
                    <p className="text-sm text-gray-800">
                      Your recent exam activities
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="rounded-full bg-green-100 p-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-black">Science Quiz Completed</p>
                        <p className="text-xs text-gray-800">Score: 90% • Yesterday</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="rounded-full bg-blue-100 p-2">
                        <BookOpen className="h-4 w-4 text-blue-500" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-black">English Practice Test</p>
                        <p className="text-xs text-gray-800">Attempted 3 days ago</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="rounded-full bg-blue-100 p-2">
                        <Trophy className="h-4 w-4 text-blue-500" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-black">Math Badge Earned</p>
                        <p className="text-xs text-gray-800">Top 5% in class • Last week</p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <button
                      className="w-full border text-black border-gray-300 rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-50"
                      onClick={handleViewClasses}
                    >
                      View Class Activities
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "exams" && (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-lg border-gray-300 p-6 shadow-sm">
                <div className="pb-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-black">Mathematics End of Term</h3>
                    <span className="inline-flex text-black items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-semibold text-yellow-800">
                      Tomorrow
                    </span>
                  </div>
                  <p className="text-sm text-gray-800">JSS 1 • 9:00 AM</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-gray-800" />
                    <span>45 minutes • 20 questions</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BookOpen className="h-4 w-4 text-gray-800" />
                    <span>Topics: Algebra, Geometry</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Link href={"/dashboard/student/studentexam/prepareexam"}
                    className="w-full border text-black  border-gray-300 rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-50"
                    onClick={handlePrepareExam}
                  >
                    Prepare
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-300 p-6 shadow-sm">
                <div className="pb-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-black">English Comprehension</h3>
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-semibold text-yellow-800">
                      In 3 days
                    </span>
                  </div>
                  <p className="text-sm text-gray-800">JSS 1 • 10:30 AM</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-gray-800" />
                    <span>60 minutes • 25 questions</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BookOpen className="h-4 w-4 text-gray-800" />
                    <span>Topics: Reading, Grammar</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Link href={"/dashboard/student/studentexam/prepareexam"}
                    className="w-full border text-black  border-gray-300 rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-50"
                  >
                    Prepare
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-300 p-6 shadow-sm">
                <div className="pb-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-black">Science Quiz</h3>
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-semibold text-yellow-800">
                      In 5 days
                    </span>
                  </div>
                  <p className="text-sm text-gray-800">JSS 1 • 2:00 PM</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-gray-800" />
                    <span>30 minutes • 15 questions</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BookOpen className="h-4 w-4 text-gray-800" />
                    <span>Topics: Biology, Physics</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Link href={"/dashboard/student/studentexam/prepareexam"}
                    className="w-full border text-black border-gray-300 rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-50"
                  >
                    Prepare
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-green-200 p-6 shadow-sm">
                <div className="pb-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-black">Mathematics Practice</h3>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800">
                      Ready
                    </span>
                  </div>
                  <p className="text-sm text-gray-800">JSS 1 • Available now</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <TimerIcon className="h-4 w-4 text-gray-800" />
                    <span>No time limit • 10 questions</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BookOpen className="h-4 w-4 text-gray-800" />
                    <span>Topic: Practice Problems</span>
                  </div>
                </div>
                <div className="pt-4">
                  <button
                    className="w-full bg-blue-500 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-blue-600"
                    onClick={handleOpenModal }
                  >
                    Start Now
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "results" && (
            <div className="space-y-4">
              <div className="bg-white rounded-lg border border-gray-300 p-6 shadow-sm">
                <div className="pb-4">
                  <h2 className="text-lg font-bold text-black">Exam Results</h2>
                  <p className="text-sm text-gray-800">
                    Your performance in recent exams
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4  border-gray-300">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                          <Trophy className="h-5 w-5 text-green-500" />
                        </div>
                        <div>
                          <p className="font-medium text-black">Science Quiz</p>
                          <p className="text-sm text-gray-800">Completed yesterday</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-green-50">90%</p>
                        <p className="text-sm text-gray-800 ">18/20 correct</p>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4 border-gray-300">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                          <Trophy className="h-5 w-5 text-blue-500" />
                        </div>
                        <div>
                          <p className="font-medium text-black">English Practice Test</p>
                          <p className="text-sm text-gray-800">Completed 3 days ago</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-blue-500">78%</p>
                        <p className="text-sm text-gray-800">39/50 correct</p>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "78%" }}></div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4  border-gray-300">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                          <Trophy className="h-5 w-5 text-blue-500" />
                        </div>
                        <div>
                          <p className="font-medium text-black">Mathematics Mid-Term</p>
                          <p className="text-sm text-gray-800">Completed last week</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-blue-500">85%</p>
                        <p className="text-sm text-gray-800">17/20 correct</p>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4  border-gray-300">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                          <Trophy className="h-5 w-5 text-orange-500" />
                        </div>
                        <div>
                          <p className="font-medium text-black">Social Studies Quiz</p>
                          <p className="text-sm text-gray-800">Completed 2 weeks ago</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-orange-500">75%</p>
                        <p className="text-sm text-gray-800">15/20 correct</p>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <button
                    onClick={handleViewResults}
                    className="w-full bg-blue-500 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-blue-600"
                  >
                    View Detailed Results
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <StudentResults
  isVisible={isDetailsVisible}
  onClose={handleCloseDetails}

/>


<Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onStart={handleStartExam}
        subject={selectedExam?.subject}
      />

      </div>
    </div>
  );
};

export default StudentDashboard;