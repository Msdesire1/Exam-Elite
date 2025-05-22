
"use client"
import React, { useState } from "react";
import { Calendar, FileText, LineChart, ArrowUpDown, Download } from "lucide-react";
import StudentResults from '../../../../components/dashboard/student/results/StudentResults'

const examResults = [
  {
    id: "result1",
    title: "Science Chapter 4 Test",
    subject: "Science",
    class: "JSS 1",
    date: "April 5, 2023",
    score: 85,
    total: 100,
    percentage: 85,
    grade: "A",
    classAverage: 72,
  },
  {
    id: "result2",
    title: "Mathematics Quiz",
    subject: "Mathematics",
    class: "JSS 1",
    date: "March 22, 2023",
    score: 42,
    total: 50,
    percentage: 84,
    grade: "A",
    classAverage: 68,
  },
  {
    id: "result3",
    title: "English Grammar Test",
    subject: "English",
    class: "JSS 1",
    date: "March 15, 2023",
    score: 38,
    total: 50,
    percentage: 76,
    grade: "B",
    classAverage: 65,
  },
  {
    id: "result4",
    title: "Mathematics Algebra Quiz",
    subject: "Mathematics",
    class: "JSS 1",
    date: "February 28, 2023",
    score: 18,
    total: 25,
    percentage: 72,
    grade: "B",
    classAverage: 64,
  },
];

const getBadgeColor = (percentage) => {
  if (percentage >= 80) return "bg-green-500";
  if (percentage >= 70) return "bg-blue-500";
  if (percentage >= 60) return "bg-amber-500";
  if (percentage >= 50) return "bg-orange-500";
  return "bg-red-500";
};

const Studentresult = () => {
  const [filter, setFilter] = useState("all");

  const filteredResults = filter === "all"
    ? examResults
    : examResults.filter(result => result.subject.toLowerCase() === filter);

  const totalPercentage = examResults.reduce((sum, result) => sum + result.percentage, 0) / examResults.length;

  const handleDownloadResults = () => {
    alert("Downloading results...");
  };

  const handleViewReportCard = () => {
    alert("Opening report card...");
  };
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const handleOpen = () => {
    setIsDetailsVisible(true);
  };
  const handleCloseDetails = () => {
    setIsDetailsVisible(false);
  };
  return (
    <div className="p-6 space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Exam Results</h2>
        <div className="flex items-center gap-2">
        <div className="">
          <button
              className="w-full px-5 py-1.5 pr-8 rounded-md border cursor-pointer border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
               "
                            onClick={handleOpen}
                        >
                        Exam Results
                        </button>
                        </div>
          <div className="relative w-[175px]">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="block w-full px-4 py-2 pr-8 rounded-md border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Subjects</option>
              <option value="mathematics">Mathematics</option>
              <option value="english">English</option>
              <option value="science">Science</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
          <button
            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white p-2 shadow-sm hover:bg-gray-50"
            onClick={handleDownloadResults}
          >
            <Download className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Performance Overview */}
      <div className="border border-gray-300 rounded-lg bg-white shadow-sm">
        <div className="p-6">
          <h3 className="text-lg font-semibold">Overall Performance</h3>
          <p className="text-sm text-gray-500">Your aggregate score across all exams</p>
        </div>
        <div className="px-6 pb-6">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Overall Score</span>
                    <span className="text-sm font-medium">{totalPercentage.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${totalPercentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Exams Taken</div>
                    <div className="text-2xl font-bold">{examResults.length}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Average Grade</div>
                    <div className="text-2xl font-bold">{totalPercentage >= 80 ? 'A' : totalPercentage >= 70 ? 'B' : totalPercentage >= 60 ? 'C' : totalPercentage >= 50 ? 'D' : 'F'}</div>
                  </div>

                  <div className="bg-white rounded-lg shadow p-4">
                 <h3 className="text-sm font-medium text-gray-500">Best Subject</h3>
                            <div className="text-1xl font-bold">Science</div>
                   </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-[200px] aspect-square rounded-full border-8 border-blue-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold">{totalPercentage.toFixed(1)}%</div>
                  <div className="text-sm text-gray-500">Average Score</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Table */}
      <div className="border rounded-lg bg-white shadow-sm border-gray-300">
        <div className="p-6">
          <h3 className="text-lg font-semibold">Exam History</h3>
          <p className="text-sm text-gray-500">Detailed view of your past exam results</p>
        </div>
        <div className="px-6 pb-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exam</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Percentage</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredResults.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center">
                      <FileText className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                      <p className="text-gray-500">No results found</p>
                    </td>
                  </tr>
                ) : (
                  filteredResults.map((result) => (
                    <tr key={result.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{result.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500">{result.subject}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500">{result.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-gray-500">{result.score}/{result.total}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-white ${getBadgeColor(result.percentage)}`}>
                          {result.percentage}%
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-gray-500">{result.grade}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="px-6 py-4 border-t flex justify-between items-center border-gray-300">
          <div className="text-sm text-gray-500">
            Showing {filteredResults.length} of {examResults.length} results
          </div>
          <button
            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50"
            onClick={handleViewReportCard}
          >
            <FileText className="mr-2 h-4 w-4" />
            View Report Card
          </button>
        </div>
      </div>

      <StudentResults
  isVisible={isDetailsVisible}
  onClose={handleCloseDetails}

/>

    </div>
  );
};

export default Studentresult;