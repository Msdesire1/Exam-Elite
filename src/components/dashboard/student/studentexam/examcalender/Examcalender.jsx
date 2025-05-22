
"use client"
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Calendar as CalendarIcon, List } from 'lucide-react';

const Examcalendar = () => {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState('calendar');
  const router = useRouter();

  const examEvents = [
    {
      id: '1',
      title: 'Mathematics Mid-Term',
      date: new Date(2025, 4, 15), // May 15, 2025
      time: '10:00 AM - 12:00 PM',
      subject: 'Mathematics',
      location: 'Room A101',
      teacher: 'Prof. Alan Johnson',
      status: 'upcoming'
    },
    {
      id: '2',
      title: 'Physics Laboratory Test',
      date: new Date(2025, 4, 20), // May 20, 2025
      time: '2:00 PM - 4:00 PM',
      subject: 'Physics',
      location: 'Science Lab 3',
      teacher: 'Dr. Emily Chen',
      status: 'upcoming'
    },
    {
      id: '3',
      title: 'Biology Quiz',
      date: new Date(2025, 3, 28), // April 28, 2025
      time: '9:30 AM - 10:30 AM',
      subject: 'Biology',
      location: 'Room B205',
      teacher: 'Dr. Michael Kim',
      status: 'completed'
    },
    {
      id: '4',
      title: 'History Assignment',
      date: new Date(2025, 3, 20), // April 20, 2025
      time: '11:00 AM - 12:30 PM',
      subject: 'History',
      location: 'Online',
      teacher: 'Prof. Sarah Thompson',
      status: 'completed'
    },
    {
      id: '5',
      title: 'Literature Essay',
      date: new Date(2025, 4, 10), // May 10, 2025
      time: '1:00 PM - 3:00 PM',
      subject: 'Literature',
      location: 'Room C103',
      teacher: 'Ms. Sofia Rodriguez',
      status: 'upcoming'
    },
    {
      id: '6',
      title: 'Chemistry Final',
      date: new Date(2025, 5, 5), // June 5, 2025
      time: '10:00 AM - 1:00 PM',
      subject: 'Chemistry',
      location: 'Auditorium',
      teacher: 'Dr. James Wilson',
      status: 'upcoming'
    }
  ];

  // Find events for the selected date
  const selectedDateEvents = date
    ? examEvents.filter(event =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
      )
    : [];

  // Get upcoming and past exams for list view
  const upcomingExams = examEvents
    .filter(event => event.status === 'upcoming')
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  const completedExams = examEvents
    .filter(event => event.status === 'completed')
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  // Function to highlight dates with exams
  const isDayWithExam = (day) => {
    return examEvents.some(event =>
      event.date.getDate() === day.getDate() &&
      event.date.getMonth() === day.getMonth() &&
      event.date.getFullYear() === day.getFullYear()
    );
  };

  // Calendar day renderer
  const renderDay = (day) => {
    const hasEvent = isDayWithExam(day);
    const isSelected = date && day.toDateString() === date.toDateString();

    return (
      <div
        className={`h-8 w-8 flex items-center justify-center rounded-full
          ${isSelected ? 'bg-blue-500 text-white' : ''}
          ${hasEvent ? 'font-bold bg-blue-100' : ''}
        `}
        onClick={() => setDate(day)}
      >
        {day.getDate()}
      </div>
    );
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-8 w-8"></div>);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDay = new Date(year, month, day);
      days.push(
        <div key={`day-${day}`}>
          {renderDay(currentDay)}
        </div>
      );
    }

    return days;
  };

  // Tab view state
  const [activeTab, setActiveTab] = useState('upcoming');

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Link href="/student/examinations" className="text-gray-500 hover:text-gray-700">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl font-bold">Exam Calendar</h1>
        </div>
        <div className="flex space-x-2">
          <button
            className={`px-3 py-1 text-sm rounded-md flex items-center ${
              view === 'calendar' ? 'bg-blue-500 text-white' : 'border border-gray-300'
            }`}
            onClick={() => setView('calendar')}
          >
            <CalendarIcon className="h-4 w-4 mr-1" /> Calendar
          </button>
          <button
            className={`px-3 py-1 text-sm rounded-md flex items-center ${
              view === 'list' ? 'bg-blue-500 text-white' : 'border border-gray-300'
            }`}
            onClick={() => setView('list')}
          >
            <List className="h-4 w-4 mr-1" /> List
          </button>
        </div>
      </div>

      {view === 'calendar' ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-lg shadow-md md:col-span-1 p-4">
            <div className="mb-4 flex justify-between items-center">
              <button
                onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1))}
                className="p-1 rounded hover:bg-gray-100"
              >
                &lt;
              </button>
              <h2 className="font-medium">
                {date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </h2>
              <button
                onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1))}
                className="p-1 rounded hover:bg-gray-100"
              >
                &gt;
              </button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="font-medium text-gray-500">{day}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {generateCalendarDays()}
            </div>
          </div>

          <div className="border rounded-lg shadow-md md:col-span-2 p-6">
            <div>
              <h2 className="text-lg font-bold mb-2">
                {date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
              </h2>
              {selectedDateEvents.length > 0 ? (
                <div className="space-y-4">
                  {selectedDateEvents.map((event) => (
                    <div key={event.id} className="p-4 border rounded-lg hover:border-blue-300">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold">{event.title}</h3>
                          <p className="text-sm text-gray-500">{event.subject} • {event.teacher}</p>
                          <div className="mt-2 flex flex-col gap-1 text-sm">
                            <p>Time: {event.time}</p>
                            <p>Location: {event.location}</p>
                          </div>
                        </div>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          event.status === 'completed'
                            ? 'border border-gray-300 text-gray-600'
                            : 'bg-blue-500 text-white'
                        }`}>
                          {event.status === 'completed' ? 'Completed' : 'Upcoming'}
                        </span>
                      </div>
                      <div className="mt-4 flex space-x-3">
                        {event.status === 'completed' ? (
                          <Link href={`/student/results/${event.id}`}>
                            <button className="px-3 py-1 border rounded-md text-sm hover:bg-gray-50">
                              View Results
                            </button>
                          </Link>
                        ) : (
                          <Link href={`/student/exams/prepare/${event.id}`}>
                            <button className="px-3 py-1 border rounded-md text-sm hover:bg-gray-50">
                              Prepare
                            </button>
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center">
                  <p className="text-gray-500">No exams scheduled for this date.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex border-b">
            <button
              className={`px-4 py-2 text-sm font-medium ${activeTab === 'upcoming' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming Exams
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium ${activeTab === 'completed' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('completed')}
            >
              Completed Exams
            </button>
          </div>

          {activeTab === 'upcoming' ? (
            <div className="border rounded-lg shadow-md mt-6">
              <div className="p-6">
                {upcomingExams.length > 0 ? (
                  <div className="divide-y">
                    {upcomingExams.map((exam) => (
                      <div key={exam.id} className="py-4 first:pt-0 last:pb-0">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold">{exam.title}</h3>
                            <p className="text-sm text-gray-500">
                              {exam.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} • {exam.time}
                            </p>
                            <p className="text-sm text-gray-500">{exam.subject} • {exam.location}</p>
                          </div>
                          <div className="flex flex-col items-end">
                            <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full">
                              Upcoming
                            </span>
                            <p className="text-xs text-gray-500 mt-1">
                              {Math.ceil((exam.date.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days left
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex space-x-3">
                          <Link href={`/student/exams/prepare/${exam.id}`}>
                            <button className="px-3 py-1 border rounded-md text-sm hover:bg-gray-50">
                              Prepare
                            </button>
                          </Link>
                          <Link href={`/student/exams/${exam.id}`}>
                            <button className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600">
                              Start Exam
                            </button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-12 text-center">
                    <p className="text-gray-500">No upcoming exams.</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="border rounded-lg shadow-md mt-6">
              <div className="p-6">
                {completedExams.length > 0 ? (
                  <div className="divide-y">
                    {completedExams.map((exam) => (
                      <div key={exam.id} className="py-4 first:pt-0 last:pb-0">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold">{exam.title}</h3>
                            <p className="text-sm text-gray-500">
                              {exam.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} • {exam.time}
                            </p>
                            <p className="text-sm text-gray-500">{exam.subject} • {exam.location}</p>
                          </div>
                          <span className="px-2 py-1 border border-gray-300 text-gray-600 text-xs rounded-full">
                            Completed
                          </span>
                        </div>
                        <div className="mt-3">
                          <Link href={`/student/results/${exam.id}`}>
                            <button className="px-3 py-1 border rounded-md text-sm hover:bg-gray-50">
                              View Results
                            </button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-12 text-center">
                    <p className="text-gray-500">No completed exams.</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Examcalendar;