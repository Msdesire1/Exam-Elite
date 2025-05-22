
"use client"
import { useState } from "react";
import {
  Settings,
  Bell,
  Shield,
  UserCog,
  Building,
  Mail,
  Upload,
  Save
} from "lucide-react";


  export default function Setting  () {
  const [activeTab, setActiveTab] = useState("general");

  // General settings state
  const [generalSettings, setGeneralSettings] = useState({
    schoolName: "Exam Elite Academy",
    address: "123 Education Street, Learning City",
    phone: "+1 (123) 456-7890",
    email: "info@exameliteacademy.com",
    website: "www.exameliteacademy.com",
    logo: "/placeholder.svg"
  });

  // Notification settings state
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    examCreated: true,
    examScheduled: true,
    examCompleted: true,
    studentEnrolled: true,
    resultsPublished: true,
    systemUpdates: false
  });

  // Security settings state
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    passwordExpiry: 90, // days
    sessionTimeout: 30, // minutes
    allowMultipleLogin: false,
    logFailedAttempts: true,
    requireStrongPassword: true,
  });

  // User management settings state
  const [userSettings, setUserSettings] = useState({
    allowTeacherRegistration: false,
    allowStudentRegistration: true,
    autoApproveTeachers: false,
    autoApproveStudents: true,
    defaultTeacherRole: "teacher",
    defaultStudentRole: "student",
  });

  // Handle form submissions
  const handleSaveGeneral = () => {
    alert("General settings have been updated successfully.");
  };

  const handleSaveNotifications = () => {
    alert("Notification settings have been updated successfully.");
  };

  const handleSaveSecurity = () => {
    alert("Security settings have been updated successfully.");
  };

  const handleSaveUserManagement = () => {
    alert("User management settings have been updated successfully.");
  };

  return (
    <div className="space-y-6 p-4">
      <div className="flex items-center">
        <Settings className="mr-2 h-6 w-6" />
        <h2 className="text-3xl font-bold">System Settings</h2>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-col sm:flex-row gap-2 border-b border-gray-300">
        <button
          className={`px-4 py-2 flex items-center ${activeTab === "general" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"}`}
          onClick={() => setActiveTab("general")}
        >
          <Building className="mr-2 h-4 w-4" />
          <span>General</span>
        </button>
        <button
          className={`px-4 py-2 flex items-center ${activeTab === "notifications" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"}`}
          onClick={() => setActiveTab("notifications")}
        >
          <Bell className="mr-2 h-4 w-4" />
          <span>Notifications</span>
        </button>
        <button
          className={`px-4 py-2 flex items-center ${activeTab === "security" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"}`}
          onClick={() => setActiveTab("security")}
        >
          <Shield className="mr-2 h-4 w-4" />
          <span>Security</span>
        </button>
        <button
          className={`px-4 py-2 flex items-center ${activeTab === "users" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"}`}
          onClick={() => setActiveTab("users")}
        >
          <UserCog className="mr-2 h-4 w-4" />
          <span>User Management</span>
        </button>
      </div>

      {/* General Settings Tab */}
      {activeTab === "general" && (
        <div className="border rounded-lg shadow-sm border-gray-300">
          <div className="p-4 border-b border-gray-300">
            <h3 className="text-lg font-semibold">General Settings</h3>
            <p className="text-gray-500">
              Manage your institution's basic information and appearance
            </p>
          </div>
          <div className="p-4 space-y-6">
            <div className="space-y-2">
              <label htmlFor="schoolName" className="block text-sm font-medium">Institution Name</label>
              <input
                id="schoolName"
                className="w-full h-10 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={generalSettings.schoolName}
                onChange={(e) => setGeneralSettings({...generalSettings, schoolName: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="address" className="block text-sm font-medium">Address</label>
              <textarea
                id="address"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={generalSettings.address}
                onChange={(e) => setGeneralSettings({...generalSettings, address: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium">Phone Number</label>
                <input
                  id="phone"
                  className="w-full h-10 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={generalSettings.phone}
                  onChange={(e) => setGeneralSettings({...generalSettings, phone: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
                <input
                  id="email"
                  type="email"
                  className="w-full h-10 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={generalSettings.email}
                  onChange={(e) => setGeneralSettings({...generalSettings, email: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="website" className="block text-sm font-medium">Website</label>
              <input
                id="website"
                className="w-full h-10 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={generalSettings.website}
                onChange={(e) => setGeneralSettings({...generalSettings, website: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Institution Logo</label>
              <div className="flex items-center gap-4">
                <div className="h-20 w-20 rounded-md border border-gray-300 overflow-hidden">
                  <img
                    src={generalSettings.logo}
                    alt="School logo"
                    className="h-full w-full object-cover"
                  />
                </div>
                <button className="border  border-gray-300 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-50">
                  <Upload className="h-4 w-4" />
                  Upload New Logo
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Recommended size: 200x200 pixels. Max file size: 2MB.
              </p>
            </div>
          </div>
          <div className="p-4 border-t border-gray-300">
            <button
              onClick={handleSaveGeneral}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2"
            >
              <Save className="h-4 w-4" />
              Save Changes
            </button>
          </div>
        </div>
      )}

      {/* Notifications Settings Tab */}
      {activeTab === "notifications" && (
        <div className="border rounded-lg shadow-sm border-gray-300">
          <div className="p-4 border-b border-gray-300">
            <h3 className="text-lg font-semibold">Notification Settings</h3>
            <p className="text-gray-500">
              Configure how and when notifications are sent
            </p>
          </div>
          <div className="p-4 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Email Notifications</h3>
                <p className="text-sm text-gray-500">
                  Enable email notifications for admins and teachers
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={notificationSettings.emailNotifications}
                  onChange={(e) => setNotificationSettings({...notificationSettings, emailNotifications: e.target.checked})}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="border-t pt-4 border-gray-300">
              <h3 className="font-medium mb-4">Notification Preferences</h3>
              <div className="space-y-4">
                {[
                  {
                    name: "examCreated",
                    title: "When an exam is created",
                    description: "Notify administrators about new exams"
                  },
                  {
                    name: "examScheduled",
                    title: "When an exam is scheduled",
                    description: "Notify teachers and students about exam schedules"
                  },
                  {
                    name: "examCompleted",
                    title: "When an exam is completed",
                    description: "Notify teachers when all students complete an exam"
                  },
                  {
                    name: "studentEnrolled",
                    title: "When a student is enrolled",
                    description: "Notify teachers about new students in their classes"
                  },
                  {
                    name: "resultsPublished",
                    title: "When results are published",
                    description: "Notify students about their exam results"
                  },
                  {
                    name: "systemUpdates",
                    title: "System updates and maintenance",
                    description: "Notify all users about system changes"
                  }
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={notificationSettings[item.name]}
                        onChange={(e) => setNotificationSettings({...notificationSettings, [item.name]: e.target.checked})}
                        disabled={!notificationSettings.emailNotifications}
                      />
                      <div className={`w-11 h-6 ${!notificationSettings.emailNotifications ? 'bg-gray-100' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600`}></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-4 border-gray-300">
              <div className="space-y-2">
                <label htmlFor="notificationEmail" className="block text-sm font-medium">Notification Email Sender</label>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <input
                    id="notificationEmail"
                    className="w-full h-10 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                    value="notifications@exameliteacademy.com"
                    disabled={!notificationSettings.emailNotifications}
                  />
                </div>
                <p className="text-xs text-gray-500">
                  This is the email address that will appear as the sender for all system notifications.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-gray-300">
            <button
              onClick={handleSaveNotifications}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2"
            >
              <Save className="h-4 w-4" />
              Save Changes
            </button>
          </div>
        </div>
      )}

      {/* Security Settings Tab */}
      {activeTab === "security" && (
        <div className="border rounded-lg shadow-sm border-gray-300">
          <div className="p-4 border-b border-gray-300">
            <h3 className="text-lg font-semibold">Security Settings</h3>
            <p className="text-gray-500">
              Configure security options to protect your data and users
            </p>
          </div>
          <div className="p-4 space-y-6">
            {[
              {
                name: "twoFactorAuth",
                title: "Two-Factor Authentication",
                description: "Require 2FA for administrative accounts"
              },
              {
                name: "allowMultipleLogin",
                title: "Allow Multiple Logins",
                description: "Allow users to be logged in on multiple devices simultaneously"
              },
              {
                name: "logFailedAttempts",
                title: "Log Failed Login Attempts",
                description: "Keep records of failed login attempts for security monitoring"
              },
              {
                name: "requireStrongPassword",
                title: "Require Strong Passwords",
                description: "Enforce password complexity requirements for all users"
              }
            ].map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={securitySettings[item.name]}
                    onChange={(e) => setSecuritySettings({...securitySettings, [item.name]: e.target.checked})}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            ))}

            <div className="space-y-2">
              <label htmlFor="passwordExpiry" className="block text-sm font-medium">Password Expiry (Days)</label>
              <input
                id="passwordExpiry"
                type="number"
                className="w-full h-10 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={securitySettings.passwordExpiry}
                onChange={(e) => setSecuritySettings({...securitySettings, passwordExpiry: parseInt(e.target.value)})}
              />
              <p className="text-xs text-gray-500">
                Number of days before users are required to change their password. Set to 0 to disable.
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="sessionTimeout" className="block text-sm font-medium">Session Timeout (Minutes)</label>
              <input
                id="sessionTimeout"
                type="number"
                className="w-full h-10 rounded-md border  border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={securitySettings.sessionTimeout}
                onChange={(e) => setSecuritySettings({...securitySettings, sessionTimeout: parseInt(e.target.value)})}
              />
              <p className="text-xs text-gray-500">
                Automatically log out inactive users after this period of inactivity.
              </p>
            </div>
          </div>
          <div className="p-4 border-t border-gray-300">
            <button
              onClick={handleSaveSecurity}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2"
            >
              <Save className="h-4 w-4" />
              Save Changes
            </button>
          </div>
        </div>
      )}

      {/* User Management Settings Tab */}
      {activeTab === "users" && (
        <div className="border rounded-lg shadow-sm border-gray-300">
          <div className="p-4 border-b border-gray-300">
            <h3 className="text-lg font-semibold">User Management Settings</h3>
            <p className="text-gray-500">
              Configure user registration and default permissions
            </p>
          </div>
          <div className="p-4 space-y-6">
            {[
              {
                name: "allowTeacherRegistration",
                title: "Allow Teacher Registration",
                description: "Allow teachers to register accounts through the public registration page"
              },
              {
                name: "allowStudentRegistration",
                title: "Allow Student Registration",
                description: "Allow students to register accounts through the public registration page"
              },
              {
                name: "autoApproveTeachers",
                title: "Auto-approve Teacher Accounts",
                description: "Automatically approve new teacher registrations without admin review",
                disabled: !userSettings.allowTeacherRegistration
              },
              {
                name: "autoApproveStudents",
                title: "Auto-approve Student Accounts",
                description: "Automatically approve new student registrations without admin review",
                disabled: !userSettings.allowStudentRegistration
              }
            ].map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={userSettings[item.name]}
                    onChange={(e) => setUserSettings({...userSettings, [item.name]: e.target.checked})}
                    disabled={item.disabled}
                  />
                  <div className={`w-11 h-6 ${item.disabled ? 'bg-gray-100' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600`}></div>
                </label>
              </div>
            ))}

            <div className="space-y-2">
              <label htmlFor="defaultTeacherRole" className="block text-sm font-medium">Default Teacher Role</label>
              <select
                id="defaultTeacherRole"
                className="w-full h-10 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={userSettings.defaultTeacherRole}
                onChange={(e) => setUserSettings({...userSettings, defaultTeacherRole: e.target.value})}
              >
                <option value="teacher">Standard Teacher</option>
                <option value="teacher_limited">Limited Teacher</option>
                <option value="teacher_admin">Teacher Admin</option>
              </select>
              <p className="text-xs text-gray-500">
                The default role assigned to new teacher accounts.
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="defaultStudentRole" className="block text-sm font-medium">Default Student Role</label>
              <select
                id="defaultStudentRole"
                className="w-full h-10 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={userSettings.defaultStudentRole}
                onChange={(e) => setUserSettings({...userSettings, defaultStudentRole: e.target.value})}
              >
                <option value="student">Standard Student</option>
                <option value="student_monitor">Student Monitor</option>
              </select>
              <p className="text-xs text-gray-500">
                The default role assigned to new student accounts.
              </p>
            </div>
          </div>
          <div className="p-4 border-t border-gray-300">
            <button
              onClick={handleSaveUserManagement}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2"
            >
              <Save className="h-4 w-4" />
              Save Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

