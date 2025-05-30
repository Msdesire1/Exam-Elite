"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  BookOpen,
  PlusIcon,
  SearchIcon,
  Trash2Icon,
  Users,
  School
} from "lucide-react";


const classes = [
  {
    id: "CLS001",
    name: "JSS 1A",
    level: "JSS 1",
    students: 35,
    teacher: "Dr. Sarah Johnson",
    subjects: ["Mathematics", "English", "Science", "Social Studies"],
    status: "active"
  },
  {
    id: "CLS002",
    name: "JSS 1B",
    level: "JSS 1",
    students: 32,
    teacher: "Mr. David Okafor",
    subjects: ["Mathematics", "English", "Science", "Social Studies"],
    status: "active"
  },
  {
    id: "CLS003",
    name: "JSS 2A",
    level: "JSS 2",
    students: 30,
    teacher: "Ms. Emily Rodriguez",
    subjects: ["Mathematics", "English", "Science", "Social Studies"],
    status: "active"
  },
  {
    id: "CLS004",
    name: "JSS 2B",
    level: "JSS 2",
    students: 28,
    teacher: "Prof. Michael Chen",
    subjects: ["Mathematics", "English", "Science", "Social Studies"],
    status: "active"
  },
  {
    id: "CLS005",
    name: "JSS 3A",
    level: "JSS 3",
    students: 26,
    teacher: "Dr. Aisha Patel",
    subjects: ["Mathematics", "English", "Science", "Social Studies"],
    status: "active"
  },
  {
    id: "CLS006",
    name: "JSS 3B",
    level: "JSS 3",
    students: 28,
    teacher: "Mr. James Wilson",
    subjects: ["Mathematics", "English", "Science", "Social Studies"],
    status: "active"
  },
  {
    id: "CLS007",
    name: "SS 1A",
    level: "SS 1",
    students: 25,
    teacher: "Mrs. Helen Adams",
    subjects: ["Mathematics", "English", "Physics", "Chemistry", "Biology"],
    status: "active"
  },
  {
    id: "CLS008",
    name: "SS 1B",
    level: "SS 1",
    students: 26,
    teacher: "Mr. Robert Taylor",
    subjects: ["Mathematics", "English", "Physics", "Chemistry", "Biology"],
    status: "active"
  },
  {
    id: "CLS009",
    name: "SS 2A",
    level: "SS 2",
    students: 24,
    teacher: "Ms. Sophia Parker",
    subjects: ["Mathematics", "English", "Physics", "Chemistry", "Biology"],
    status: "active"
  },
  {
    id: "CLS010",
    name: "SS 3A",
    level: "SS 3",
    students: 22,
    teacher: "Dr. William Johnson",
    subjects: ["Mathematics", "English", "Physics", "Chemistry", "Biology"],
    status: "inactive"
  }
];

// Available class levels
const levels = ["JSS 1", "JSS 2", "JSS 3", "SS 1", "SS 2", "SS 3"];

// Sample teachers
const teachers = [
  "Dr. Sarah Johnson",
  "Mr. David Okafor",
  // ... (rest of the teachers)
];

  export default function Classes () {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLevel, setFilterLevel] = useState("all");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [classForm, setClassForm] = useState({
    name: "",
    level: "",
    teacher: "",
    status: "active",
  });

  // Filter classes based on search term and level filter
  const filteredClasses = classes.filter(classItem => {
    const matchesSearch =
      classItem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      classItem.teacher.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLevel = filterLevel === "all" || classItem.level === filterLevel;

    return matchesSearch && matchesLevel;
  });

  const handleAddClass = (e) => {
    e.preventDefault();
    alert(`${classForm.name} has been added successfully.`);
    setClassForm({
      name: "",
      level: "",
      teacher: "",
      status: "active",
    });
    setIsAddDialogOpen(false);
  };

  const handleDeleteClass = (id, name) => {
    if (confirm(`Are you sure you want to delete ${name}?`)) {
      alert(`${name} has been removed from the system.`);
    }
  };

  return (
    <div className="space-y-6 p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-black">Classes</h2>
        <button
          onClick={() => setIsAddDialogOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"
        >
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Class
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-900" />
          <input
            placeholder="Search by class name or teacher..."
            className="pl-8 w-full h-10 text-black rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          value={filterLevel}
          onChange={(e) => setFilterLevel(e.target.value)}
          className="w-full sm:w-[180px] h-10 rounded-md  text-black border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Levels</option>
          {levels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
      </div>

      {/* Classes Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredClasses.map((classItem) => (
          <div
            key={classItem.id}
            className={`border text-black border-gray-300 rounded-lg shadow-sm ${classItem.status === 'active' ? 'border-l-4 border-l-green-500' : 'border-l-4 border-l-red-500'}`}
          >
            <div className="p-4 border-b border-gray-300">
              <div className="flex justify-between items-start">
                <div>
                  <span className="inline-block px-2 py-1 text-xs rounded-md border border-gray-300 mb-2">
                    {classItem.level}
                  </span>
                  <h3 className="text-lg font-semibold text-black">{classItem.name}</h3>
                </div>
                <button
                  onClick={() => handleDeleteClass(classItem.id, classItem.name)}
                  className="text-red-500 hover:text-red-700 t hover:bg-red-50 h-8 w-8 p-0 rounded-md flex items-center justify-center"
                >
                  <Trash2Icon className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-gray-900" />
                  <span className="text-sm text-black">{classItem.students} Students</span>
                </div>
                <div className="flex items-center">
                  <School className="h-4 w-4 mr-2 text-gray-900" />
                  <span className="text-sm text-black">{classItem.teacher}</span>
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <BookOpen className="h-4 w-4 mr-2 text-gray-900" />
                    <span className="text-sm text-black">Subjects:</span>
                  </div>
                  <div className="flex flex-wrap gap-1 ml-6">
                    {classItem.subjects.slice(0, 3).map((subject) => (
                      <span key={subject} className="px-2 py-1 text-xs rounded-md text-black bg-gray-100">
                        {subject}
                      </span>
                    ))}
                    {classItem.subjects.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-md text-black bg-gray-100">
                        +{classItem.subjects.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-300">
              <button className="w-full text-black py-2 px-4 border  border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* No results */}
      {filteredClasses.length === 0 && (
        <div className="text-center py-10">
          <BookOpen className="mx-auto h-12 w-12 text-gray-300" />
          <h3 className="mt-4 text-lg font-semibold text-black">No Classes Found</h3>
          <p className="text-gray-900">No classes match your search criteria.</p>
        </div>
      )}

      {/* Summary */}
      <div className="border rounded-lg shadow-sm border-gray-300">
        <div className="p-4 border-b border-gray-300">
          <h3 className="text-lg font-semibold text-black">Class Summary</h3>
          <p className="text-gray-900">Overview of classes by level</p>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-black">
            {levels.map((level) => {
              const count = classes.filter(c => c.level === level && c.status === 'active').length;
              const students = classes
                .filter(c => c.level === level && c.status === 'active')
                .reduce((sum, c) => sum + c.students, 0);

              return (
                <div key={level} className="border-2 rounded-lg border-gray-300">
                  <div className="p-4 text-center">
                    <div className="text-xl font-bold">{level}</div>
                    <div className="text-2xl font-bold text-blue-600">{count}</div>
                    <div className="text-sm text-gray-900">Classes</div>
                    <div className="text-sm text-gray-900 mt-1">{students} Students</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Add Class Dialog */}
      {isAddDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40  flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b border-gray-300">
              <h3 className="text-lg font-semibold text-black">Add New Class</h3>
              <p className="text-gray-900">
                Create a new class by filling out the information below.
              </p>
            </div>

            <form onSubmit={handleAddClass}>
              <div className="p-4 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-black text-sm font-medium mb-1">
                    Class Name
                  </label>
                  <input
                    id="name"
                    value={classForm.name}
                    onChange={(e) => setClassForm({...classForm, name: e.target.value})}
                    className="w-full h-10 rounded-md text-black border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="level" className="block text-sm text-black font-medium mb-1">
                    Level
                  </label>
                  <select
                    id="level"
                    value={classForm.level}
                    onChange={(e) => setClassForm({...classForm, level: e.target.value})}
                    className="w-full h-10 text-black rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select level</option>
                    {levels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="teacher" className="block text-black text-sm font-medium mb-1">
                    Teacher
                  </label>
                  <select
                    id="teacher"
                    value={classForm.teacher}
                    onChange={(e) => setClassForm({...classForm, teacher: e.target.value})}
                    className="w-full h-10 text-black rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Assign teacher</option>
                    {teachers.map((teacher) => (
                      <option key={teacher} value={teacher}>
                        {teacher}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="p-4 border-t text-black border-gray-300 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsAddDialogOpen(false)}
                  className="px-4 py-2 border text-black border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Add Class
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

