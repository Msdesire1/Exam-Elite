




"use client"

import { useState } from "react"
import { Bar } from "react-chartjs-2"

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

export default function Analytics() {
  const [timeRange, setTimeRange] = useState("month")
  const [subjectFilter, setSubjectFilter] = useState("all")
  const [classFilter, setClassFilter] = useState("all")

  const testPerformance = [
    { title: "Algebra Test", subject: "Mathematics", class: "10-A", averageScore: 85 },
    { title: "Physics Quiz", subject: "Science", class: "9-B", averageScore: 78 },
    { title: "Grammar Test", subject: "English", class: "10-A", averageScore: 82 },
    { title: "World War II Quiz", subject: "History", class: "10-A", averageScore: 79 },
    { title: "Continents Test", subject: "Geography", class: "9-B", averageScore: 81 },
  ]

  const subjects = ["all", ...new Set(testPerformance.map((t) => t.subject))]
  const classes = ["all", ...new Set(testPerformance.map((t) => t.class))]

  const filteredData = testPerformance.filter(
    (test) =>
      (subjectFilter === "all" || test.subject === subjectFilter) &&
      (classFilter === "all" || test.class === classFilter)
  )

  const chartData = {
    labels: filteredData.map((item) => item.title),
    datasets: [
      {
        label: "Average Score",
        data: filteredData.map((item) => item.averageScore),
        backgroundColor: "#3B82F6",
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    scales: {
      y: { beginAtZero: true, max: 100 },
    },
  }

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Analytics Overview</h1>
        <p className="text-gray-600">Performance summary across tests</p>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <select
          className="p-2 border rounded w-40 border-gray-300"
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
        >
          <option value="week">Last Week</option>
          <option value="month">Last Month</option>
          <option value="quarter">Last Quarter</option>
          <option value="year">Last Year</option>
        </select>

        <select
          className="p-2 border rounded w-40 border-gray-300"
          value={subjectFilter}
          onChange={(e) => setSubjectFilter(e.target.value)}
        >
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject === "all" ? "All Subjects" : subject}
            </option>
          ))}
        </select>

        <select
          className="p-2 border rounded w-40 border-gray-300"
          value={classFilter}
          onChange={(e) => setClassFilter(e.target.value)}
        >
          {classes.map((cls) => (
            <option key={cls} value={cls}>
              {cls === "all" ? "All Classes" : cls}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500 text-sm mb-1">Average Score</p>
          <h2 className="text-2xl font-semibold">82%</h2>
          <p className="text-green-600 text-sm mt-1">+2.5% from previous</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500 text-sm mb-1">Tests Completed</p>
          <h2 className="text-2xl font-semibold">15</h2>
          <p className="text-green-600 text-sm mt-1">+3 from previous</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500 text-sm mb-1">Participation</p>
          <h2 className="text-2xl font-semibold">96%</h2>
          <p className="text-green-600 text-sm mt-1">+1.2% from previous</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Average Scores by Test</h2>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  )
}
