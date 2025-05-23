// "use client"
// import React from 'react'
// import { X } from "lucide-react"
// import { useState, useEffect } from 'react'

// const EXAM_DATA = {
//     literature: {
//       examTitle: "Literature Essay",
//       duration: 120,
//       questions: 45,
//       attempts: 1,
//       description: "This literature exam will test your knowledge of classic and contemporary works."
//     },
//     mathematics: {
//       examTitle: "Advanced Mathematics",
//       duration: 90,
//       questions: 30,
//       attempts: 2,
//       description: "Covers topics in algebra, calculus, and geometry."
//     },
//     science: {
//       examTitle: "General Science",
//       duration: 60,
//       questions: 40,
//       attempts: 1,
//       description: "Test your knowledge of biology, chemistry, and physics fundamentals."
//     },
//     history: {
//       examTitle: "World History",
//       duration: 75,
//       questions: 50,
//       attempts: 1,
//       description: "Examination of major historical events and figures."
//     },
//     default: {
//       examTitle: "General Exam",
//       duration: 60,
//       questions: 25,
//       attempts: 1,
//       description: "You are about to begin this exam. This exam has a time limit and cannot be paused once started."
//     }
//   }
//     export default function Modal({ isVisible,isOpen,onClose,onStart,subject }) {

//         const [examDetails, setExamDetails] = useState(EXAM_DATA.default)
//          useEffect(() => {
//           if (subject && EXAM_DATA[subject]) {
//             setExamDetails(EXAM_DATA[subject])
//           } else {
//             setExamDetails(EXAM_DATA.default)
//           }
//         }, [subject])

//         if (!isOpen) return null

//   return (

//     <div className={`fixed inset-0 flex justify-center z-50 bg-[#000000]/50 transition-transform duration-500 py-7  ${
//       isVisible ? "-translate-x-0" : "translate-x-full"
//     }`}
//     // onClick={onClose}
//   >

//             <div className="bg-white rounded-lg shadow-lg w-full max-w-md relative">
//               <button
//                 onClick={onClose}
//                 className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
//                 aria-label="Close"
//               >
//                 <X size={20} />
//               </button>

//               <div className="p-6">
//                 <h2 className="text-xl font-semibold mb-2">Begin Exam: {examDetails.examTitle}</h2>
//                 <p className="text-gray-600 mb-6">
//                   {examDetails.description || EXAM_DATA.default.description}
//                 </p>

//                 <div className="mb-6">
//                   <h3 className="font-semibold mb-2">Exam Details:</h3>
//                   <ul className="space-y-1 text-gray-600">
//                     <li>• Duration: {examDetails.duration} minutes</li>
//                     <li>• Questions: {examDetails.questions}</li>
//                     <li>• Attempts allowed: {examDetails.attempts}</li>
//                   </ul>
//                 </div>

//                 <div className="flex justify-end gap-3">
//                   <button
//                     onClick={onClose}
//                     className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     onClick={onStart}
//                     className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
//                   >
//                     Start Exam
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//   )
// }





"use client"
import React from 'react'
import { X } from "lucide-react"
import { useState, useEffect } from 'react'

const EXAM_DATA = {
    literature: {
      examTitle: "Literature Essay",
      duration: 120,
      questions: 45,
      attempts: 1,
      description: "This literature exam will test your knowledge of classic and contemporary works."
    },
    mathematics: {
      examTitle: "Advanced Mathematics",
      duration: 90,
      questions: 30,
      attempts: 2,
      description: "Covers topics in algebra, calculus, and geometry."
    },
    science: {
      examTitle: "General Science",
      duration: 60,
      questions: 40,
      attempts: 1,
      description: "Test your knowledge of biology, chemistry, and physics fundamentals."
    },
    history: {
      examTitle: "World History",
      duration: 75,
      questions: 50,
      attempts: 1,
      description: "Examination of major historical events and figures."
    },
    default: {
      examTitle: "General Exam",
      duration: 60,
      questions: 25,
      attempts: 1,
      description: "You are about to begin this exam. This exam has a time limit and cannot be paused once started."
    }
}

export default function Modal({ isOpen, onClose, onStart, subject }) {
    const [examDetails, setExamDetails] = useState(EXAM_DATA.default)

    useEffect(() => {
        if (subject && EXAM_DATA[subject.toLowerCase()]) {
            setExamDetails(EXAM_DATA[subject.toLowerCase()])
        } else {
            setExamDetails(EXAM_DATA.default)
        }
    }, [subject])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md relative mx-4">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label="Close"
                >
                    <X size={20} />
                </button>

                <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2 text-black">Begin Exam: {examDetails.examTitle}</h2>
                    <p className="text-gray-600 mb-6">
                        {examDetails.description || EXAM_DATA.default.description}
                    </p>

                    <div className="mb-6">
                        <h3 className="font-semibold mb-2 text-black">Exam Details:</h3>
                        <ul className="space-y-1 text-gray-600">
                            <li>• Duration: {examDetails.duration} minutes</li>
                            <li>• Questions: {examDetails.questions}</li>
                            <li>• Attempts allowed: {examDetails.attempts}</li>
                        </ul>
                    </div>

                    <div className="flex justify-end gap-3">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 border text-black border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={onStart}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Start Exam
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
