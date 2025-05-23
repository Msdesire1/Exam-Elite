"use client"
import React from 'react'
import Link from "next/link";
import { useState } from 'react';
import {
  Book,
  CheckCircle,
  Clock,
  GraduationCap,
  LineChart,
  Menu,
  Monitor,
  Shield,
  Users,
  X
} from "lucide-react";

export default function Navbar() {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className='bg-gray-50 w-full'>
 {/* Header */}
 <header className="fixed top-0 z-40 w-full border-b border-gray-300 bg-gray-50 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-xl  text-black">Exam Elite</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link  href="/" className="text-sm font-medium text-black transition-colors hover:text-blue-600">
              Home
            </Link>
            <Link href="/website/features" className="text-sm  text-black  font-medium transition-colors hover:text-blue-600">
              Features
            </Link>
            <Link  href="/website/about" className="text-sm   text-black font-medium transition-colors hover:text-blue-600">
              About
            </Link>
            <Link  href="/website/teachers" className="text-sm  text-black  font-medium transition-colors hover:text-blue-600">
              Teachers
            </Link>
            <Link  href="/website/contact" className="text-sm  text-black  font-medium transition-colors hover:text-blue-600">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2">
              <Link  href="/auth/login">
                <button className="px-4 py-2 text-sm  text-black  font-medium rounded-md border border-gray-300 hover:bg-gray-50">
                  Login
                </button>
              </Link>
              <Link  href="/auth/register">
                <button className="px-4 py-2 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700">
                  Register
                </button>
              </Link>
            </div>
            <button className="md:hidden" onClick={toggleMobileMenu}>
              <Menu className="h-6 w-6  text-black" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gray-50 backdrop-blur-sm md:hidden">
          <div className="container flex flex-col gap-8 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-blue-600" />
                <span className="font-bold text-xl  text-black">Exam Elite</span>
              </div>
              <button onClick={toggleMobileMenu}>
                <X className="h-6 w-6  text-black" />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              <Link
                 href="/"
                className="text-lg font-medium  text-black  transition-colors hover:text-blue-600"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
              <Link
                 href="/website/features"
                className="text-lg font-medium  text-black  transition-colors hover:text-blue-600"
                onClick={toggleMobileMenu}
              >
                Features
              </Link>
              <Link
                 href="/website/about"
                className="text-lg font-medium  text-black  transition-colors hover:text-blue-600"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
              <Link
                 href="/website/teachers"
                className="text-lg font-medium  text-black  transition-colors hover:text-blue-600"
                onClick={toggleMobileMenu}
              >
                Teachers
              </Link>
              <Link
                 href="/website/contact"
                className="text-lg font-medium  text-black  transition-colors hover:text-blue-600"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
            </nav>

            <div className="flex flex-col gap-2">
              <Link  href="/auth/login">
                <button className="w-full px-4 py-2  text-black  text-sm font-medium rounded-md border border-gray-300 hover:bg-gray-50">
                  Login
                </button>
              </Link>
              <Link  href="/auth/register">
                <button className="w-full px-4 py-2 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}




