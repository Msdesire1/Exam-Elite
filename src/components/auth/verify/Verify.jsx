"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { CheckCircle, Mail, ArrowRight } from "lucide-react";


 export default function Verify() {
  const router = useRouter();
  const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [activeInput, setActiveInput] = useState(0);

  // In a real app, you would get the email from query params or state
  const email = "adeyemok831@gmail.com";

  // Focus the first input field when the component mounts
  useEffect(() => {
    const firstInput = document.getElementById("code-0");
    if (firstInput) {
      firstInput.focus();
    }
  }, []);

  const handleInputChange = (index, value) => {
    // Only allow numeric values
    if (value && !/^[0-9]$/.test(value)) return;

    // Update the verification code
    const newVerificationCode = [...verificationCode];
    newVerificationCode[index] = value;
    setVerificationCode(newVerificationCode);

    // Move to the next input field if the current one is filled
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
        setActiveInput(index + 1);
      }
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to the previous input field on backspace if the current one is empty
    if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
        setActiveInput(index - 1);
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text");
    if (pastedData) {
      const digits = pastedData.replace(/\D/g, "").slice(0, 6).split("");
      const newVerificationCode = [...verificationCode];

      digits.forEach((digit, index) => {
        if (index < 6) {
          newVerificationCode[index] = digit;
        }
      });

      setVerificationCode(newVerificationCode);

      // Focus the last input filled
      const lastIndex = Math.min(digits.length - 1, 5);
      if (lastIndex >= 0) {
        const lastInput = document.getElementById(`code-${lastIndex}`);
        if (lastInput) {
          lastInput.focus();
          setActiveInput(lastIndex);
        }
      }
    }
  };

  const formik = useFormik({
    initialValues: {},
    onSubmit: async () => {
      const code = verificationCode.join("");

      if (code.length !== 6) {
        alert("Please enter a 6-digit verification code");
        return;
      }

      setIsLoading(true);

      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsVerified(true);
        alert("Your email has been successfully verified");
      } catch (error) {
        alert(error instanceof Error ? error.message : "Verification failed");
      } finally {
        setIsLoading(false);
      }
    },
  });

  const handleResend = async () => {
    setIsLoading(true);

    try {
      // In a real app, this would be an API call to resend the verification code
      await new Promise(resolve => setTimeout(resolve, 1500));
      alert("A new verification code has been sent to your email");
    } catch (error) {
      alert(error instanceof Error ? error.message : "Failed to resend code");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-2">Exam Elite</h1>
          <p className="text-gray-600">Verify your email address</p>
        </div>

        <div className="w-full bg-white rounded-lg shadow-lg border-t-4 border-t-blue-600 p-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">
              {isVerified ? "Email Verified" : "Verify Your Email"}
            </h2>
            <p className="text-gray-500">
              {isVerified
                ? "Thank you for verifying your email address"
                : `We've sent a verification code to ${email}`}
            </p>
          </div>

          {isVerified ? (
            <div className="text-center space-y-4">
              <div className="mx-auto bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-green-500" />
              </div>
              <p className="text-center text-gray-600">
                Your account has been verified successfully.
              </p>
              <button
                onClick={() => router.push("/auth/login")}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center justify-center mx-auto"
              >
                <span className="flex items-center">
                  Proceed to Login
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </button>
            </div>
          ) : (
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <div className="flex justify-center mb-6">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
              </div>

              <div className="text-sm text-center text-gray-600 mb-6">
                Enter the 6-digit code we sent to your email
              </div>

              <div className="flex justify-center gap-2">
                {verificationCode.map((digit, index) => (
                  <input
                    key={index}
                    id={`code-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    pattern="[0-9]"
                    autoComplete="one-time-code"
                    className="w-12 h-12 text-center text-lg font-semibold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={digit}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={index === 0 ? handlePaste : undefined}
                    disabled={isLoading}
                  />
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                  disabled={isLoading || verificationCode.join("").length !== 6}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Verifying...
                    </span>
                  ) : (
                    "Verify Email"
                  )}
                </button>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={handleResend}
                    disabled={isLoading}
                    className="text-blue-600 hover:underline disabled:opacity-50"
                  >
                    Didn't receive a code? Resend
                  </button>
                </div>
              </div>
            </form>
          )}

          {!isVerified && (
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Wrong email?{" "}
                <Link href="/auth/register" className="text-blue-600 hover:underline">
                  Register again
                </Link>
              </p>
            </div>
          )}
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

