
"use client"
import React, { useState, useRef } from "react";
// import { useState, useRef} from "react"
import { Camera } from 'lucide-react';
import { AlertCircle, Book, Eye, EyeOff, GraduationCap, Mail, Phone, User } from "lucide-react";

const Studentprofile = () => {

  const user = {
    name: "Student Name",
    email: "student@example.com"
  };

  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [studentData, setStudentData] = useState({
    name: user?.name || "Student Name",
    email: user?.email || "student@example.com",
    phone: "+234 812 345 6789",
    address: "123 Main Street, Lagos",
    gender: "Male",
    dateOfBirth: "2005-05-15",
    parentName: "Mr. & Mrs. Smith",
    parentPhone: "+234 803 456 7890",
    parentEmail: "parents@example.com",
    admissionDate: "2020-09-01",
    currentClass: "JSS 1",
    studentId: "STD-2020-0001"
  });

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully");
    setIsEditing(false);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    alert("Password changed successfully");
    setPasswordForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
  };


  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // trigger hidden file input
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // update preview
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Profile Summary Card */}
        <div className="md:w-1/3 border rounded-lg bg-white shadow-sm border-gray-300">
          <div className="p-6 text-center py-10">
            <div className="w-24 h-24 mx-auto rounded-full  pt-10 flex items-center justify-center text-blue-500 text-2xl font-bold">
              <div className="lg:col-span-1  rounded-lg  p-6 ">
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
            <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center text-3xl font-bold text-gray-600">
        {imagePreview ? (
          <img src={imagePreview} alt="Preview" className="object-cover w-full h-full" />
        ) : (
          'JS'
        )}
      </div>

      <button
        type="button"
        onClick={handleButtonClick}
        className="absolute bottom-0 right-0 rounded-full w-8 h-8 bg-[#FF7F46] text-white flex items-center justify-center"
      >
        <Camera className="h-4 w-4" />
      </button>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />
            </div>
          </div>
        </div>

            </div>
            <h3 className="mt-4 text-xl font-semibold py-10  text-black">{studentData.name}</h3>
            <div className="mt-2">
              <span className="inline-flex items-center rounded-full bg-blue-500 px-3 py-1 text-xs font-medium text-white">
                {studentData.currentClass}
              </span>
            </div>
            <p className="mt-2 text-sm  text-black ">{studentData.studentId}</p>
          </div>
          <div className="p-6 pt-0">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4  text-black" />
                <span className="text-sm  text-black">{studentData.gender}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4  text-black" />
                <span className="text-sm  text-black">{studentData.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4  text-black" />
                <span className="text-sm  text-black">{studentData.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4  text-black" />
                <span className="text-sm  text-black">Admitted: {new Date(studentData.admissionDate).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
          <div className="p-6 pt-0">
            {!isEditing && (
              <button
                className="w-full inline-flex  text-black items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="mb-4 flex border-b border-gray-300">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-4 py-2 text-sm  text-black font-medium ${activeTab === 'profile' ? "border-b-2 border-blue-500 text-blue-600" : " text-black"}`}
            >
              Profile Details
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`px-4 py-2 text-sm  text-black font-medium ${activeTab === 'security' ? "border-b-2 border-blue-500 text-blue-600" : " text-black"}`}
            >
              Security
            </button>
          </div>

          {activeTab === 'profile' ? (
            <>
              <div className="border rounded-lg bg-white shadow-sm border-gray-300">
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold  text-black">Personal Information</h3>
                      <p className="text-sm  text-black">Manage your personal details</p>
                    </div>
                    {!isEditing && (
                      <button
                        className="text-sm font-medium text-blue-500 hover:text-blue-600"
                        onClick={() => setIsEditing(true)}
                      >
                        Edit
                      </button>
                    )}
                  </div>
                </div>
                  <div className="py-6">
                  <div className="px-6 pb-6 ">
                  <form onSubmit={handleProfileSubmit}>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium  text-black">Full Name</label>
                        <input
                          id="name"
                          className="w-full rounded-md border  text-black border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                          value={studentData.name}
                          onChange={(e) => setStudentData({...studentData, name: e.target.value})}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium  text-black">Email</label>
                        <input
                          id="email"
                          type="email"
                          className="w-full rounded-md  text-black border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                          value={studentData.email}
                          onChange={(e) => setStudentData({...studentData, email: e.target.value})}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium  text-black">Phone Number</label>
                        <input
                          id="phone"
                          className="w-full rounded-md  text-black border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                          value={studentData.phone}
                          onChange={(e) => setStudentData({...studentData, phone: e.target.value})}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="address" className="block text-sm font-medium  text-black">Address</label>
                        <input
                          id="address"
                          className="w-full  text-black rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                          value={studentData.address}
                          onChange={(e) => setStudentData({...studentData, address: e.target.value})}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="gender" className="block text-sm font-medium  text-black">Gender</label>
                        <select
                          id="gender"
                          className="w-full  text-black rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                          value={studentData.gender}
                          onChange={(e) => setStudentData({...studentData, gender: e.target.value})}
                          disabled={!isEditing}
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="dob" className="block text-sm font-medium  text-black">Date of Birth</label>
                        <input
                          id="dob"
                          type="date"
                          className="w-full rounded-md border  text-black border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                          value={studentData.dateOfBirth}
                          onChange={(e) => setStudentData({...studentData, dateOfBirth: e.target.value})}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>

                    <div className="my-6 border-t  border-gray-300"></div>

                    <div>
                      <h3 className="text-lg font-medium mb-4  text-black">Parent/Guardian Information</h3>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="parentName" className="block text-sm font-medium  text-black">Parent/Guardian Name</label>
                          <input
                            id="parentName"
                            className="w-full rounded-md   text-black border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                            value={studentData.parentName}
                            onChange={(e) => setStudentData({...studentData, parentName: e.target.value})}
                            disabled={!isEditing}
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="parentPhone" className="block  text-black text-sm font-medium">Parent/Guardian Phone</label>
                          <input
                            id="parentPhone"
                            className="w-full rounded-md  text-black border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                            value={studentData.parentPhone}
                            onChange={(e) => setStudentData({...studentData, parentPhone: e.target.value})}
                            disabled={!isEditing}
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="parentEmail" className="block  text-black text-sm font-medium">Parent/Guardian Email</label>
                          <input
                            id="parentEmail"
                            type="email"
                            className="w-full  text-black rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                            value={studentData.parentEmail}
                            onChange={(e) => setStudentData({...studentData, parentEmail: e.target.value})}
                            disabled={!isEditing}
                          />
                        </div>
                      </div>
                    </div>

                    {isEditing && (
                      <div className="flex justify-end gap-2 mt-6">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50"
                          onClick={() => setIsEditing(false)}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600"
                        >
                          Save Changes
                        </button>
                      </div>
                    )}
                  </form>
                </div>
              </div>
                  </div>

               <div className="py-3">
               <div className="border rounded-lg bg-white shadow-sm border-gray-300">
                <div className="p-6">
                  <h3 className="text-lg font-semibold  text-black">Academic Information</h3>
                  <p className="text-sm  text-black">Your enrollment and class details</p>
                </div>
                <div className="px-6 pb-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <div className="text-sm font-medium  text-black">Student ID</div>
                      <div className="mt-1  text-black">{studentData.studentId}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium  text-black">Current Class</div>
                      <div className="mt-1  text-black">{studentData.currentClass}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium  text-black">Admission Date</div>
                      <div className="mt-1  text-black">{new Date(studentData.admissionDate).toLocaleDateString()}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium  text-black">Academic Status</div>
                      <div className="mt-1">
                        <span className="inline-flex items-center rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white">
                          Active
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

               </div>
            </>
          ) : (
  <div className="">
 <div className="border rounded-lg bg-white shadow-sm border-gray-300">
              <div className="p-6">
                <h3 className="text-lg font-semibold  text-black">Change Password</h3>
                <p className="text-sm  text-black">Update your password to keep your account secure</p>
              </div>
              <div className="px-6 pb-6">
                <form onSubmit={handlePasswordSubmit}>
                  <div className="mb-6 rounded-md bg-blue-50 p-4">
                    <div className="flex">
                      <AlertCircle className="h-5 w-5 text-blue-400" />
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-blue-800">Security Tip</h3>
                        <p className="text-sm text-blue-700 mt-1">
                          Create a strong password with a mix of letters, numbers, and symbols. Avoid using personal information.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="currentPassword" className="block text-sm font-medium">Current Password</label>
                      <div className="relative">
                        <input
                          id="currentPassword"
                          type={showPassword ? "text" : "password"}
                          className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                          value={passwordForm.currentPassword}
                          onChange={(e) => setPasswordForm({...passwordForm, currentPassword: e.target.value})}
                        />
                        <button
                          type="button"
                          className="absolute right-0 top-0 h-full px-3  text-black hover: "
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4  text-black" />
                          ) : (
                            <Eye className="h-4 w-4  text-black" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="newPassword" className="block text-sm font-medium  text-black">New Password</label>
                      <div className="relative">
                        <input
                          id="newPassword"
                          type={showNewPassword ? "text" : "password"}
                          className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                          value={passwordForm.newPassword}
                          onChange={(e) => setPasswordForm({...passwordForm, newPassword: e.target.value})}
                        />
                        <button
                          type="button"
                          className="absolute right-0 top-0 h-full px-3  text-black hover: "
                          onClick={() => setShowNewPassword(!showNewPassword)}
                        >
                          {showNewPassword ? (
                            <EyeOff className="h-4 w-4  text-black" />
                          ) : (
                            <Eye className="h-4 w-4  text-black" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="confirmPassword" className="block text-sm font-medium  text-black">Confirm New Password</label>
                      <div className="relative">
                        <input
                          id="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                          value={passwordForm.confirmPassword}
                          onChange={(e) => setPasswordForm({...passwordForm, confirmPassword: e.target.value})}
                        />
                        <button
                          type="button"
                          className="absolute right-0 top-0 h-full px-3  text-black hover: text-black"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end mt-6">
                    <button
                      type="submit"
                      className="inline-flex items-center  text-black justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600 disabled:opacity-50"
                      disabled={!passwordForm.currentPassword || !passwordForm.newPassword || !passwordForm.confirmPassword}
                    >
                      Update Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
        </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Studentprofile;