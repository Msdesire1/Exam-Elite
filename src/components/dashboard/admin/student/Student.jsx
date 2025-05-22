
"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { DownloadIcon, FilterIcon, PlusIcon, SearchIcon, Trash2Icon, Upload, UserPlus } from "lucide-react";

// Sample student data
const students = [
  {
    id: "STD001",
    name: "John Doe",
    email: "john.doe@example.com",
    class: "JSS 1",
    gender: "Male",
    admissionDate: "2022-09-01",
    status: "active",
    studentId: "STD-2022-001",
  },
  {
    id: "STD002",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    class: "JSS 1",
    gender: "Female",
    admissionDate: "2022-09-01",
    status: "active",
    studentId: "STD-2022-002",
  },
  {
    id: "STD003",
    name: "Michael Johnson",
    email: "michael.j@example.com",
    class: "JSS 2",
    gender: "Male",
    admissionDate: "2021-09-01",
    status: "active",
    studentId: "STD-2021-003",
  },
  {
    id: "STD004",
    name: "Sarah Williams",
    email: "sarah.w@example.com",
    class: "JSS 2",
    gender: "Female",
    admissionDate: "2021-09-01",
    status: "inactive",
    studentId: "STD-2021-004",
  },
  {
    id: "STD005",
    name: "David Brown",
    email: "david.b@example.com",
    class: "JSS 3",
    gender: "Male",
    admissionDate: "2020-09-01",
    status: "active",
    studentId: "STD-2020-005",
  },
  {
    id: "STD006",
    name: "Emily Davis",
    email: "emily.d@example.com",
    class: "JSS 3",
    gender: "Female",
    admissionDate: "2020-09-01",
    status: "active",
    studentId: "STD-2020-006",
  },
  {
    id: "STD007",
    name: "Robert Wilson",
    email: "robert.w@example.com",
    class: "SS 1",
    gender: "Male",
    admissionDate: "2019-09-01",
    status: "active",
    studentId: "STD-2019-007",
  },
  {
    id: "STD008",
    name: "Jessica Taylor",
    email: "jessica.t@example.com",
    class: "SS 1",
    gender: "Female",
    admissionDate: "2019-09-01",
    status: "active",
    studentId: "STD-2019-008",
  },
  {
    id: "STD009",
    name: "Thomas Anderson",
    email: "thomas.a@example.com",
    class: "SS 2",
    gender: "Male",
    admissionDate: "2018-09-01",
    status: "active",
    studentId: "STD-2018-009",
  },
  {
    id: "STD010",
    name: "Olivia Martinez",
    email: "olivia.m@example.com",
    class: "SS 3",
    gender: "Female",
    admissionDate: "2017-09-01",
    status: "active",
    studentId: "STD-2017-010",
  },
];


const classes = [
  "JSS 1",
  "JSS 2",
  "JSS 3",
  "SS 1",
  "SS 2",
  "SS 3",
];


  export default function Student () {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterClass, setFilterClass] = useState("all");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [studentForm, setStudentForm] = useState({
    name: "",
    email: "",
    class: "",
    gender: "",
    status: "active",
  });

  // Filter students
  const filteredStudents = students.filter(student => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.studentId.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesClass = filterClass === "all" || student.class === filterClass;

    return matchesSearch && matchesClass;
  });

  const handleAddStudent = (e) => {
    e.preventDefault();
    alert(`${studentForm.name} has been added successfully.`);
    setStudentForm({
      name: "",
      email: "",
      class: "",
      gender: "",
      status: "active",
    });
    setIsAddDialogOpen(false);
  };

  const handleDeleteStudent = (id, name) => {
    if (confirm(`Are you sure you want to delete ${name}?`)) {
      alert(`${name} has been removed from the system.`);
    }
  };

  return (
    <div className="space-y-6 p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Students</h2>
        <div className="flex items-center gap-2">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"
            onClick={() => setIsAddDialogOpen(true)}
          >
            <UserPlus className="mr-2 h-4 w-4" />
            Add Student
          </button>

          <button className="border border-gray-300 px-4 py-2 rounded-md flex items-center hover:bg-gray-50">
            <Upload className="mr-2 h-4 w-4" />
            Import
          </button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
          <input
            placeholder="Search by name, email, or ID..."
            className="pl-8 w-full h-10 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          value={filterClass}
          onChange={(e) => setFilterClass(e.target.value)}
          className="w-[180px] h-10 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Classes</option>
          {classes.map((cls) => (
            <option key={cls} value={cls}>{cls}</option>
          ))}
        </select>
      </div>

      {/* Students Table */}
      <div className="border rounded-lg shadow-sm border-gray-300">
        <div className="p-4 border-b flex justify-between items-center border-gray-300">
          <div>
            <h3 className="text-lg font-semibold">Student List</h3>
            <p className="text-gray-500">Manage and view all registered students</p>
          </div>
          <button className="border px-4 py-2 rounded-md flex items-center hover:bg-gray-50 border-gray-300">
            <DownloadIcon className="mr-2 h-4 w-4" />
            Export
          </button>
        </div>
        <div className="p-4 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-3 px-4">Student ID</th>
                <th className="text-left py-3 px-4">Name</th>
                <th className="text-left py-3 px-4">Email</th>
                <th className="text-left py-3 px-4">Class</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-right py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan={6} className="h-24 text-center py-4">
                    No students found matching your search.
                  </td>
                </tr>
              ) : (
                filteredStudents.map((student) => (
                  <tr key={student.id} className="border-b border-gray-300 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{student.studentId}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-sm font-medium">
                            {student.name.split(" ").map(n => n[0]).join("").toUpperCase()}
                          </span>
                        </div>
                        {student.name}
                      </div>
                    </td>
                    <td className="py-3 px-4">{student.email}</td>
                    <td className="py-3 px-4">{student.class}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        student.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {student.status === 'active' ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          className="p-1 rounded-md hover:bg-gray-100"
                          onClick={() => router.push(`/students/${student.id}`)}
                        >
                          View
                        </button>
                        <button
                          className="p-1 rounded-md hover:bg-red-50 text-red-500 hover:text-red-700"
                          onClick={() => handleDeleteStudent(student.id, student.name)}
                        >
                          <Trash2Icon className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-gray-300 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Showing {filteredStudents.length} of {students.length} students
          </div>
          <div className="flex items-center gap-2">
            <button
              className="border border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-gray-50 disabled:opacity-50"
              disabled
            >
              Previous
            </button>
            <button
              className="border border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-gray-50 disabled:opacity-50"
              disabled
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Class Distribution */}
      <div className="border rounded-lg shadow-sm border-gray-300">
        <div className="p-4 border-b border-gray-300">
          <h3 className="text-lg font-semibold">Class Distribution</h3>
          <p className="text-gray-500">Number of students in each class</p>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {classes.map((cls) => {
              const count = students.filter(s => s.class === cls).length;
              return (
                <div key={cls} className="border-2 border-gray-300 rounded-lg">
                  <div className="p-4 text-center">
                    <div className="text-2xl font-bold">{count}</div>
                    <div className="text-sm text-gray-500">{cls}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Add Student Dialog */}
      {isAddDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b border-gray-300">
              <h3 className="text-lg font-semibold">Add New Student</h3>
              <p className="text-gray-500">
                Enter the student details below to register them in the system.
              </p>
            </div>

            <form onSubmit={handleAddStudent}>
              <div className="p-4 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    value={studentForm.name}
                    onChange={(e) => setStudentForm({...studentForm, name: e.target.value})}
                    className="w-full h-10 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={studentForm.email}
                    onChange={(e) => setStudentForm({...studentForm, email: e.target.value})}
                    className="w-full h-10 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="class" className="block text-sm font-medium mb-1">
                    Class
                  </label>
                  <select
                    id="class"
                    value={studentForm.class}
                    onChange={(e) => setStudentForm({...studentForm, class: e.target.value})}
                    className="w-full h-10 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select class</option>
                    {classes.map((cls) => (
                      <option key={cls} value={cls}>{cls}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium mb-1">
                    Gender
                  </label>
                  <select
                    id="gender"
                    value={studentForm.gender}
                    onChange={(e) => setStudentForm({...studentForm, gender: e.target.value})}
                    className="w-full h-10 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="p-4 border-t border-gray-300 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsAddDialogOpen(false)}
                  className="px-4 py-2 border  border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Add Student
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};