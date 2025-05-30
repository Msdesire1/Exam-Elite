


"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Download, BookOpen, FileText } from 'lucide-react';

const Materials= ({ params }) => {
  const router = useRouter();
//   const { materialId } = params;

  // This would come from an API in a real application
  const material = {
    // id: materialId,
    title: 'Calculus Fundamentals',
    type: 'Reading',
    class: 'Mathematics 101',
    teacher: 'Prof. Alan Johnson',
    uploadedDate: '2025-04-15',
    description: 'This document covers the fundamental concepts of calculus including limits, derivatives, and integrals. Read through each section carefully and complete the practice problems at the end.',
    content: `
      <h2>Introduction to Calculus</h2>
      <p>Calculus is a branch of mathematics that deals with the study of change. It provides a framework for modeling systems in which there is change, and a way to deduce the predictions of such models.</p>

      <h3>1. Limits</h3>
      <p>The concept of a limit is fundamental to calculus. A limit is the value that a function approaches as the input approaches a certain value.</p>
      <p>Example: lim(x→2) (x²-4)/(x-2) = 4</p>

      <h3>2. Derivatives</h3>
      <p>The derivative of a function represents its rate of change. It is defined as the limit of the difference quotient as the difference in input approaches zero.</p>
      <p>Example: If f(x) = x², then f'(x) = 2x</p>

      <h3>3. Integrals</h3>
      <p>Integration is the process of finding the area under a curve. The definite integral of a function provides the accumulated effect of the function over an interval.</p>
      <p>Example: ∫₀¹ x² dx = 1/3</p>

      <h2>Practice Problems</h2>
      <ol>
        <li>Find the limit: lim(x→3) (2x²-5x-3)/(x-3)</li>
        <li>Calculate the derivative of f(x) = x³ + 2x² - 5x + 3</li>
        <li>Evaluate the integral: ∫₀² (x² + 1) dx</li>
      </ol>
    `,
    attachments: [
      { id: '1', name: 'Calculus_Worksheet.pdf', size: '2.4 MB', type: 'pdf' },
      { id: '2', name: 'Practice_Problems.docx', size: '1.1 MB', type: 'docx' },
      { id: '3', name: 'Formulas_Cheatsheet.pdf', size: '0.8 MB', type: 'pdf' }
    ],
    relatedMaterials: [
      { id: '101', title: 'Advanced Derivatives', type: 'Reading' },
      { id: '102', title: 'Integration Techniques', type: 'Reading' },
      { id: '103', title: 'Calculus Quiz Prep', type: 'Practice' }
    ]
  };

  return (
    <div className="space-y-6 p-4">
      <div className="flex items-center space-x-2 mb-6">
        <button
          onClick={() => router.back()}
          className="text-gray-500 hover:text-gray-700"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl font-bold text-black">{material.title}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="border rounded-lg shadow-md p-6">
            <div className="pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-black">{material.title}</h2>
                  <p className="text-sm text-gray-500">{material.class} • {material.teacher}</p>
                </div>
                <span className="inline-flex   items-center rounded-md bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                  {material.type}
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Description</p>
                <p className="mt-1 text-black">{material.description}</p>
              </div>

              <div className="border-t my-4"></div>

              <div className="prose max-w-none text-black">
                <div dangerouslySetInnerHTML={{ __html: material.content }} />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="border rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-lg font-semibold pb-2 text-black">Attachments</h3>
            <div className="space-y-3">
              {material.attachments.map((attachment) => (
                <div
                  key={attachment.id}
                  className="flex items-center justify-between  p-3 border rounded-md hover:bg-gray-50"
                >
                  <div className="flex items-center">
                    <div className="mr-3">
                      <FileText className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="font-medium text-black">{attachment.name}</p>
                      <p className="text-sm text-gray-500 ">{attachment.size}</p>
                    </div>
                  </div>
                  <button className="p-1 rounded-md hover:bg-gray-100">
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="border rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold pb-2 text-black">Related Materials</h3>
            <div className="space-y-3">
              {material.relatedMaterials.map((relatedMaterial) => (
                <Link
                  key={relatedMaterial.id}
                  href={`/student/classes/materials/${relatedMaterial.id}`}
                  className="flex items-center  p-3 border rounded-md hover:bg-gray-50 hover:border-blue-300"
                >
                  <div className="mr-3">
                    <BookOpen className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium text-black">{relatedMaterial.title}</p>
                    <p className="text-sm text-gray-500">{relatedMaterial.type}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button
          onClick={() => router.push('/dashboard/student/studentclass')}
          className="inline-flex text-black items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50"
        >
          Back to Classes
        </button>
        <button className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
          Mark as Completed
        </button>
      </div>
    </div>
  );
};

export default Materials;