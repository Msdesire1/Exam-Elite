
'use client'

import { useState } from 'react'
import { Search, Mail, Download } from 'lucide-react'
import { UserCircle2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Studentt() {
  const [searchQuery, setSearchQuery] = useState('')
  const [classFilter, setClassFilter] = useState('all')

  const students = [
    { id: 1, name: 'Emma Wilson', email: 'emma.wilson@school.edu', class: '10-A', rollNumber: '10A01', averageScore: 92, testsCompleted: 15, lastActive: 'Today' },
    { id: 2, name: 'James Brown', email: 'james.brown@school.edu', class: '10-A', rollNumber: '10A02', averageScore: 88, testsCompleted: 14, lastActive: 'Today' },
    { id: 3, name: 'Sophia Davis', email: 'sophia.davis@school.edu', class: '10-A', rollNumber: '10A03', averageScore: 85, testsCompleted: 15, lastActive: 'Yesterday' },
    { id: 4, name: 'Liam Johnson', email: 'liam.johnson@school.edu', class: '10-A', rollNumber: '10A04', averageScore: 79, testsCompleted: 13, lastActive: 'Today' },
    { id: 5, name: 'Olivia Martinez', email: 'olivia.martinez@school.edu', class: '10-A', rollNumber: '10A05', averageScore: 91, testsCompleted: 15, lastActive: 'Yesterday' },
    { id: 6, name: 'Noah Taylor', email: 'noah.taylor@school.edu', class: '9-B', rollNumber: '9B01', averageScore: 84, testsCompleted: 12, lastActive: 'Today' },
    { id: 7, name: 'Ava Anderson', email: 'ava.anderson@school.edu', class: '9-B', rollNumber: '9B02', averageScore: 88, testsCompleted: 13, lastActive: '2 days ago' },
    { id: 8, name: 'William Thomas', email: 'william.thomas@school.edu', class: '9-B', rollNumber: '9B03', averageScore: 76, testsCompleted: 11, lastActive: 'Today' },
    { id: 9, name: 'Isabella White', email: 'isabella.white@school.edu', class: '11-A', rollNumber: '11A01', averageScore: 94, testsCompleted: 10, lastActive: 'Yesterday' },
    { id: 10, name: 'Benjamin Harris', email: 'benjamin.harris@school.edu', class: '11-A', rollNumber: '11A02', averageScore: 89, testsCompleted: 9, lastActive: 'Today' },
  ]

  const classes = ['all', ...new Set(students.map((s) => s.class))]

  const filteredStudents = students.filter(
    (s) =>
      (s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.rollNumber.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (classFilter === 'all' || s.class === classFilter)
  )



  const handleExportCSV = () => {
    const headers = ['Name', 'Email', 'Class', 'Roll Number', 'Average Score', 'Tests Completed', 'Last Active']
    const rows = filteredStudents.map((student) => [
      student.name,
      student.email,
      student.class,
      student.rollNumber,
      student.averageScore,
      student.testsCompleted,
      student.lastActive
    ])

    const csvContent = [headers, ...rows]
      .map((row) => row.map((val) => `"${val}"`).join(','))
      .join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.setAttribute('href', url)
    link.setAttribute('download', 'students.csv')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Students</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search students..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select
            value={classFilter}
            onChange={(e) => setClassFilter(e.target.value)}
            className="border px-4 py-2 rounded-md focus:outline-none shadow-sm border-gray-300"
          >
            {classes.map((cls) => (
              <option key={cls} value={cls}>
                {cls === 'all' ? 'All Classes' : cls}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm bg-white hover:bg-gray-100">
            <Mail className="w-4 h-4 mr-2" />
            Email All
          </button>
          <button
  onClick={handleExportCSV}
  className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm bg-white hover:bg-gray-100"
>
  <Download className="w-4 h-4 mr-2" />
  Export CSV
</button>

        </div>
      </div>

      <div className="overflow-x-auto rounded-lg shadow bg-white">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Class</th>
              <th className="px-6 py-3">Roll Number</th>
              <th className="px-6 py-3">Average Score</th>
              <th className="px-6 py-3">Tests Completed</th>
              <th className="px-6 py-3">Last Active</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id} className="border-b border-gray-300 hover:bg-gray-50">
                <td className="px-6 py-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-semibold">
                    {student.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{student.name}</p>
                    <p className="text-[14px] text-gray-500">{student.email}</p>
                  </div>
                </td>
                <td className="px-6 py-4">{student.class}</td>
                <td className="px-6 py-4">{student.rollNumber}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full text-white ${
                      student.averageScore >= 85
                        ? 'bg-green-500'
                        : student.averageScore >= 70
                        ? 'bg-yellow-500'
                        : 'bg-red-500'
                    }`}
                  >
                    {student.averageScore}%
                  </span>
                </td>
                <td className="px-6 py-4">{student.testsCompleted}</td>
                <td className="px-6 py-4">{student.lastActive}</td>
                <td className="px-6 py-4 text-right space-x-2 ">
                    <div className='py-5'>
                    <a href={`/teacher/student/${student.id}`} >
                    <button className="px-4 py-1  border  border-gray-300 rounded-md text-sm bg-gray-100 hover:bg-gray-200">
                      View
                    </button>
                  </a>
</div>
                  <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                    Results
                  </button>
                </td>
              </tr>
            ))}
            {filteredStudents.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500">
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
