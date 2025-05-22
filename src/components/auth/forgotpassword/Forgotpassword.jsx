
"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, ArrowLeft } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Yup validation schema
const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
});

export default function Forgotpassword() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");

  const handleSubmit = async (values, actions) => {
    setIsLoading(true);
    setEnteredEmail(values.email);
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setEmailSent(true);
      alert("Reset link sent. Please check your email for password reset instructions");
    } catch (error) {
      alert(error instanceof Error ? error.message : "Failed to send email");
    } finally {
      setIsLoading(false);
      actions.setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-2">Exam Elite</h1>
          <p className="text-gray-600">Reset your password</p>
        </div>

        <div className="w-full bg-white rounded-lg shadow-lg border-t-4 border-t-blue-600 p-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">Forgot Password</h2>
            <p className="text-gray-500">
              {emailSent
                ? "Check your email for reset instructions"
                : "Enter your email and we'll send you a reset link"}
            </p>
          </div>

          {emailSent ? (
            <div className="text-center space-y-4">
              <div className="mx-auto bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-sm text-gray-600">
                We've sent an email to <strong>{enteredEmail}</strong> with instructions to reset your password.
              </p>
              <button
                onClick={() => setEmailSent(false)}
                className="mt-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Try another email
              </button>
            </div>
          ) : (
            <Formik
              initialValues={{ email: "" }}
              validationSchema={ForgotPasswordSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={isLoading}
                    />
                    <ErrorMessage name="email" component="p" className="text-sm text-red-600" />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading || isSubmitting}
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Reset Link"
                    )}
                  </button>
                </Form>
              )}
            </Formik>
          )}

          <div className="mt-6 text-center">
            <Link href="/auth/restpassword" className="text-sm text-blue-600 hover:underline flex items-center justify-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Rest password
            </Link>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
