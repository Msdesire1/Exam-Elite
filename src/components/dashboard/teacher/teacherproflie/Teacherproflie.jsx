"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  Phone,
  BookOpen,
  Briefcase,
  MapPin,
  Shield,
  Eye,
  EyeOff,
  AlertTriangle,
  Save,
  Upload,
  Bell,
  Laptop,
  Smartphone
} from "lucide-react";

const Teacherprofile = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("personal");
  const [showPassword, setShowPassword] = useState(false);

  // Profile state
  const [profile, setProfile] = useState({
    name: "Teacher One",
    email: "teacher@example.com",
    phone: "+1 234 567 8901",
    address: "123 Teacher Street, Education City",
    bio: "Experienced mathematics and physics teacher with a passion for making complex concepts accessible to students of all abilities.",
    qualification: "M.Sc. in Mathematics Education",
    experience: "10 years",
    specialization: "Mathematics, Physics",
    interests: "Educational technology, outdoor activities, reading",
    avatar: "/placeholder.svg"
  });

  // Password change state
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  // Notification settings state
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    examReminders: true,
    studentSubmissions: true,
    systemUpdates: false,
    classAssignments: true
  });

  // Form handlers
  const handleSaveProfile = () => {
    alert("Profile updated successfully");
  };

  const handleChangePassword = (e) => {
    e.preventDefault();

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Password changed successfully");

    setPasswordForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
  };

  const handleSaveNotifications = () => {
    alert("Notification settings saved");
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full border-2 border-blue-600 overflow-hidden">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18e1f1e8e9a%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18e1f1e8e9a%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.84375%22%20y%3D%2236.5%22%3ETO%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              }}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold">{profile.name}</h2>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">Teacher</span>
              <span className="text-sm text-gray-500">{profile.email}</span>
            </div>
          </div>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Edit Profile
        </button>
      </div>

      <div className="flex border-b border-gray-300">
        <button
          onClick={() => setActiveTab("personal")}
          className={`px-4 py-2 flex items-center gap-2 ${activeTab === "personal" ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
        >
          <User className="h-4 w-4" />
          <span>Personal Information</span>
        </button>
        <button
          onClick={() => setActiveTab("security")}
          className={`px-4 py-2 flex items-center gap-2 ${activeTab === "security" ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
        >
          <Shield className="h-4 w-4" />
          <span>Security</span>
        </button>
        <button
          onClick={() => setActiveTab("notifications")}
          className={`px-4 py-2 flex items-center gap-2 ${activeTab === "notifications" ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
        >
          <Bell className="h-4 w-4" />
          <span>Notifications</span>
        </button>
      </div>

      {/* Personal Information Tab */}
      {activeTab === "personal" && (
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Basic Information</h3>
              <p className="text-sm text-gray-500">
                Update your personal details
              </p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">Full Name</label>
                <input
                  id="name"
                  className="w-full px-3 py-2 border rounded-md border-gray-300"
                  value={profile.name}
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
                <div className="flex items-center bg-gray-100 border  border-gray-300 rounded-md px-3 py-2 text-gray-500">
                  <Mail className="mr-2 h-4 w-4" />
                  <span>{profile.email}</span>
                </div>
                <p className="text-xs text-gray-500">
                  Contact the administrator to change your email address.
                </p>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium">Phone Number</label>
                <input
                  id="phone"
                  className="w-full px-3 py-2 border rounded-md border-gray-300"
                  value={profile.phone}
                  onChange={(e) => setProfile({...profile, phone: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="address" className="block text-sm font-medium">Address</label>
                <textarea
                  id="address"
                  className="w-full px-3 py-2 border rounded-md border-gray-300"
                  value={profile.address}
                  onChange={(e) => setProfile({...profile, address: e.target.value})}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="avatar" className="block text-sm font-medium">Profile Picture</label>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden">
                    <img
                      src={profile.avatar}
                      alt={profile.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <button className="px-4 py-2 border border-gray-300 rounded-md flex items-center gap-2">
                    <Upload className="h-4 w-4" />
                    Upload Image
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Professional Information</h3>
              <p className="text-sm text-gray-500">
                Update your professional details
              </p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="bio" className="block text-sm font-medium">Professional Bio</label>
                <textarea
                  id="bio"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={profile.bio}
                  onChange={(e) => setProfile({...profile, bio: e.target.value})}
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="qualification" className="block text-sm font-medium">Qualifications</label>
                <input
                  id="qualification"
                  className="w-full px-3 py-2 border  border-gray-300 rounded-md"
                  value={profile.qualification}
                  onChange={(e) => setProfile({...profile, qualification: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="experience" className="block text-sm font-medium">Years of Experience</label>
                <input
                  id="experience"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={profile.experience}
                  onChange={(e) => setProfile({...profile, experience: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="specialization" className="block text-sm font-medium">Subject Specialization</label>
                <input
                  id="specialization"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={profile.specialization}
                  onChange={(e) => setProfile({...profile, specialization: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="interests" className="block text-sm font-medium">Interests</label>
                <input
                  id="interests"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={profile.interests}
                  onChange={(e) => setProfile({...profile, interests: e.target.value})}
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleSaveProfile}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2"
              >
                <Save className="h-4 w-4" />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Security Tab */}
      {activeTab === "security" && (
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Change Password</h3>
              <p className="text-sm text-gray-500">
                Update your password to keep your account secure
              </p>
            </div>
            <form onSubmit={handleChangePassword} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="currentPassword" className="block text-sm font-medium">Current Password</label>
                <div className="relative">
                  <input
                    id="currentPassword"
                    type={showPassword ? "text" : "password"}
                    className="w-full px-3 py-2 border rounded-md border-gray-300"
                    value={passwordForm.currentPassword}
                    onChange={(e) => setPasswordForm({...passwordForm, currentPassword: e.target.value})}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="newPassword" className="block text-sm font-medium">New Password</label>
                <input
                  id="newPassword"
                  type={showPassword ? "text" : "password"}
                  className="w-full px-3 py-2 border rounded-md border-gray-300"
                  value={passwordForm.newPassword}
                  onChange={(e) => setPasswordForm({...passwordForm, newPassword: e.target.value})}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="block text-sm font-medium">Confirm New Password</label>
                <input
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  className="w-full px-3 py-2 border rounded-md border-gray-300"
                  value={passwordForm.confirmPassword}
                  onChange={(e) => setPasswordForm({...passwordForm, confirmPassword: e.target.value})}
                  required
                />
              </div>

              <div className="flex items-center border-l-4 border-yellow-500 pl-3 py-2 bg-yellow-100">
                <AlertTriangle className="h-4 w-4 text-yellow-500 mr-2" />
                <p className="text-sm">
                  Your password should be at least 8 characters and include a mix of letters, numbers, and symbols.
                </p>
              </div>

              <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Change Password
              </button>
            </form>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Login Activity</h3>
              <p className="text-sm text-gray-500">
                Recent login sessions on your account
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-3 border rounded-md bg-green-100 border-green-200">
                <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center shrink-0">
                  <Laptop className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="flex items-center">
                    <p className="font-medium">Current Session</p>
                    <span className="ml-2 px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Active</span>
                  </div>
                  <p className="text-sm text-gray-500">Today at 10:45 AM</p>
                  <div className="flex items-center mt-1 text-xs text-gray-500">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>Lagos, Nigeria • Chrome on Windows</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 border rounded-md border-gray-300">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                  <Smartphone className="h-5 w-5 text-gray-500" />
                </div>
                <div>
                  <p className="font-medium">Mobile Device</p>
                  <p className="text-sm text-gray-500">Yesterday at 2:30 PM</p>
                  <div className="flex items-center mt-1 text-xs text-gray-500">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>Lagos, Nigeria • Safari on iOS</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 border rounded-md border-gray-300">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                  <Laptop className="h-5 w-5 text-gray-500" />
                </div>
                <div>
                  <p className="font-medium">Library Computer</p>
                  <p className="text-sm text-gray-500">3 days ago at 5:15 PM</p>
                  <div className="flex items-center mt-1 text-xs text-gray-500">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>Lagos, Nigeria • Firefox on Windows</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <button className="w-full px-4 py-2 border  border-gray-300 rounded-md hover:bg-gray-50">
                Sign Out All Other Sessions
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notifications Tab */}
      {activeTab === "notifications" && (
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Notification Preferences</h3>
            <p className="text-sm text-gray-500">
              Manage how and when you receive notifications
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Email Notifications</h3>
                <p className="text-sm text-gray-500">
                  Receive notifications via email
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

            <div className="border-t pt-6 border-gray-300">
              <h3 className="font-medium mb-4">Notification Types</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Exam Reminders</p>
                    <p className="text-sm text-gray-500">Get notified about upcoming exams you've created</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={notificationSettings.examReminders}
                      onChange={(e) => setNotificationSettings({...notificationSettings, examReminders: e.target.checked})}
                      disabled={!notificationSettings.emailNotifications}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 peer-disabled:opacity-50"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Student Submissions</p>
                    <p className="text-sm text-gray-500">Get notified when students submit assignments or exams</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={notificationSettings.studentSubmissions}
                      onChange={(e) => setNotificationSettings({...notificationSettings, studentSubmissions: e.target.checked})}
                      disabled={!notificationSettings.emailNotifications}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 peer-disabled:opacity-50"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">System Updates</p>
                    <p className="text-sm text-gray-500">Get notified about platform updates and maintenance</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={notificationSettings.systemUpdates}
                      onChange={(e) => setNotificationSettings({...notificationSettings, systemUpdates: e.target.checked})}
                      disabled={!notificationSettings.emailNotifications}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 peer-disabled:opacity-50"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Class Assignments</p>
                    <p className="text-sm text-gray-500">Get notified when you're assigned to new classes</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={notificationSettings.classAssignments}
                      onChange={(e) => setNotificationSettings({...notificationSettings, classAssignments: e.target.checked})}
                      disabled={!notificationSettings.emailNotifications}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 peer-disabled:opacity-50"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button
              onClick={handleSaveNotifications}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2"
            >
              <Save className="h-4 w-4" />
              Save Preferences
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Teacherprofile;