





// "use client"
// import { useParams } from 'next/navigation';
// import { Download, BookOpen } from 'lucide-react';

// const Resourceid = () => {
//   const params = useParams();
//   const resourceid = params?.resourceid;

//   if (!resourceid) {
//     return <div>Loading...</div>;
//   }

//   const resource = {
//     id: resourceid,
//     title: resourceid === '1' ? 'Mathematics Formula Sheet' :
//            resourceid === '2' ? 'Physics Core Concepts' :
//            resourceid === '3' ? 'Literature Analysis Guide' :
//            resourceid === '4' ? 'Biology Interactive Course' :
//            resourceid === '5' ? 'Algebra Video Tutorials' :
//            'History Timeline Explorer',
//     type: resourceid === '1' || resourceid === '2' || resourceid === '3' ? 'document' :
//           resourceid === '4' || resourceid === '6' ? 'interactive' : 'video',
//     subject: resourceid === '1' || resourceid === '5' ? 'Mathematics' :
//              resourceid === '2' ? 'Physics' :
//              resourceid === '3' ? 'Literature' :
//              resourceid === '4' ? 'Biology' :
//              'History',
//     description: resourceid === '1' ? 'Complete collection of formulas for algebra, trigonometry, and calculus' :
//                 resourceid === '2' ? 'Overview of mechanics, thermodynamics, and electromagnetism' :
//                 resourceid === '3' ? 'Techniques for analyzing poetry, prose, and drama' :
//                 resourceid === '4' ? 'Interactive lessons on cell biology and genetics' :
//                 resourceid === '5' ? 'Step-by-step video lessons for solving algebraic equations' :
//                 'Interactive timeline of major historical events',
//     content: "This is a detailed view of the resource content. In a real application, this would contain the actual educational content, whether it's a document to read, a video to watch, or an interactive element to engage with.",
//     thumbnail: '/placeholder.svg',
//     downloadable: resourceid === '1' || resourceid === '2' || resourceid === '3',
//     relatedResources: [
//       { id: '1', title: 'Mathematics Formula Sheet', subject: 'Mathematics', thumbnail: '/placeholder.svg' },
//       { id: '2', title: 'Physics Core Concepts', subject: 'Physics', thumbnail: '/placeholder.svg' },
//       { id: '3', title: 'Literature Analysis Guide', subject: 'Literature', thumbnail: '/placeholder.svg' }
//     ].filter(item => item.id !== resourceid).slice(0, 2)
//   };

//   return (
//     <div className="space-y-8 p-4 md:p-6">
//       <div className="flex flex-col md:flex-row gap-4 justify-between items-start">
//         <div>
//           <h1 className="text-3xl font-bold mb-2">{resource.title}</h1>
//           <p className="text-gray-500">{resource.subject} • {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}</p>
//         </div>

//         {resource.downloadable && (
//           <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
//             <Download className="mr-2 h-4 w-4" /> Download Resource
//           </button>
//         )}
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div className="md:col-span-2 space-y-6">
//           <div className="border rounded-lg overflow-hidden shadow-sm">
//             <div className="w-full overflow-hidden">
//               <div className="relative w-full aspect-video bg-gray-100">
//                 <img
//                   src={resource.thumbnail}
//                   alt={resource.title}
//                   className="object-cover w-full h-full"
//                 />
//               </div>
//             </div>
//             <div className="p-6">
//               <h2 className="text-xl font-semibold mb-4">Description</h2>
//               <p className="text-gray-700 mb-6">{resource.description}</p>

//               <h2 className="text-xl font-semibold mb-4">Content</h2>
//               <div className="max-w-none">
//                 <p>{resource.content}</p>

//                 {resource.type === 'document' && (
//                   <div className="mt-6 p-6 bg-gray-50 rounded-lg border">
//                     <p>Document preview would be displayed here.</p>
//                   </div>
//                 )}

//                 {resource.type === 'video' && (
//                   <div className="mt-6 aspect-video bg-gray-100 flex items-center justify-center rounded-lg">
//                     <BookOpen className="h-12 w-12 text-gray-400" />
//                     <p className="ml-4">Video player would be displayed here</p>
//                   </div>
//                 )}

//                 {resource.type === 'interactive' && (
//                   <div className="mt-6 p-6 bg-blue-50 rounded-lg border border-blue-100">
//                     <p>Interactive content would be displayed here.</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="space-y-6">
//           <div className="border rounded-lg p-6 shadow-sm">
//             <h2 className="text-lg font-semibold mb-4">How to use this resource</h2>
//             <ul className="space-y-3 text-sm">
//               <li>• Read through the material carefully</li>
//               <li>• Take notes on key concepts</li>
//               <li>• Try to solve example problems</li>
//               <li>• Review the material regularly</li>
//             </ul>
//           </div>

//           <div className="border rounded-lg p-6 shadow-sm">
//             <h2 className="text-lg font-semibold mb-4">Related Resources</h2>
//             {resource.relatedResources.length > 0 ? (
//               <div className="space-y-4">
//                 {resource.relatedResources.map(related => (
//                   <a
//                     key={related.id}
//                     href={`/student/resources/${related.id}`}
//                     className="flex items-start p-2 hover:bg-gray-50 rounded-lg transition-colors"
//                   >
//                     <img
//                       src={related.thumbnail}
//                       alt={related.title}
//                       className="h-12 w-12 rounded object-cover mr-3"
//                     />
//                     <div>
//                       <h3 className="font-medium text-sm">{related.title}</h3>
//                       <p className="text-xs text-gray-500">{related.subject}</p>
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             ) : (
//               <p className="text-sm text-gray-500">No related resources available.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Resourceid;



"use client"
import { useParams } from 'next/navigation';
import { Download, BookOpen } from 'lucide-react';

const Resourceid = () => {
  const params = useParams();
  const resourceId = params?.resourceid;

//   if (!resourceId) {
//     return <div className="flex items-center justify-center h-screen">Loading...</div>;
//   }

  // Resource data based on the ID
  const resource = {
    id: resourceId,
    title: resourceId === '1' ? 'Mathematics Formula Sheet' :
           resourceId === '2' ? 'Physics Core Concepts' :
           resourceId === '3' ? 'Literature Analysis Guide' :
           resourceId === '4' ? 'Biology Interactive Course' :
           resourceId === '5' ? 'Algebra Video Tutorials' :
           'History Timeline Explorer',
    type: resourceId === '1' || resourceId === '2' || resourceId === '3' ? 'document' :
          resourceId === '4' || resourceId === '6' ? 'interactive' : 'video',
    subject: resourceId === '1' || resourceId === '5' ? 'Mathematics' :
             resourceId === '2' ? 'Physics' :
             resourceId === '3' ? 'Literature' :
             resourceId === '4' ? 'Biology' :
             'History',
    description: resourceId === '1' ? 'Complete collection of formulas for algebra, trigonometry, and calculus' :
                resourceId === '2' ? 'Overview of mechanics, thermodynamics, and electromagnetism' :
                resourceId === '3' ? 'Techniques for analyzing poetry, prose, and drama' :
                resourceId === '4' ? 'Interactive lessons on cell biology and genetics' :
                resourceId === '5' ? 'Step-by-step video lessons for solving algebraic equations' :
                'Interactive timeline of major historical events',
    content: "This is a detailed view of the resource content. In a real application, this would contain the actual educational content, whether it's a document to read, a video to watch, or an interactive element to engage with.",
    thumbnail: '/placeholder.svg',
    downloadable: resourceId === '1' || resourceId === '2' || resourceId === '3',
    relatedResources: [
      { id: '1', title: 'Mathematics Formula Sheet', subject: 'Mathematics', thumbnail: '/placeholder.svg' },
      { id: '2', title: 'Physics Core Concepts', subject: 'Physics', thumbnail: '/placeholder.svg' },
      { id: '3', title: 'Literature Analysis Guide', subject: 'Literature', thumbnail: '/placeholder.svg' }
    ].filter(item => item.id !== resourceId).slice(0, 2)
  };

  return (
    <div className="space-y-8 p-4 md:p-6 max-w-7xl mx-auto">
      {/* Resource Header */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold mb-2">{resource.title}</h1>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
              {resource.subject}
            </span>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
              {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
            </span>
          </div>
        </div>

        {resource.downloadable && (
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            <Download className="mr-2 h-4 w-4" /> Download Resource
          </button>
        )}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - Primary Content */}
        <div className="md:col-span-2 space-y-6">
          <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm bg-white">
            <div className="w-full overflow-hidden">
              <div className="relative w-full aspect-video bg-gray-100">
                <img
                  src={resource.thumbnail}
                  alt={resource.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4  text-black">Description</h2>
              <p className=" text-black mb-6">{resource.description}</p>

              <h2 className="text-xl font-semibold mb-4  text-black">Content</h2>
              <div className="max-w-none prose">
                <p className=' text-black'>{resource.content}</p>

                {resource.type === 'document' && (
                  <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-300">
                    <div className="flex items-center justify-center flex-col gap-2 text-gray-500">
                      <BookOpen className="h-12 w-12  text-black" />
                      <p>Document preview would be displayed here</p>
                    </div>
                  </div>
                )}

                {resource.type === 'video' && (
                  <div className="mt-6 aspect-video bg-gray-100 flex items-center justify-center rounded-lg">
                    <div className="text-center text-gray-500">
                      <BookOpen className="h-12 w-12 mx-auto" />
                      <p className="mt-2">Video player would be displayed here</p>
                    </div>
                  </div>
                )}

                {resource.type === 'interactive' && (
                  <div className="mt-6 p-6 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-center justify-center flex-col gap-2 text-blue-500">
                      <BookOpen className="h-12 w-12" />
                      <p>Interactive content would be displayed here</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* How to Use Section */}
          <div className="border  border-gray-300 rounded-lg p-6 shadow-sm bg-white">
            <h2 className="text-lg font-semibold mb-4">How to use this resource</h2>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Read through the material carefully</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Take notes on key concepts</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Try to solve example problems</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Review the material regularly</span>
              </li>
            </ul>
          </div>

          {/* Related Resources Section */}
          <div className="border border-gray-300 rounded-lg p-6 shadow-sm bg-white">
            <h2 className="text-lg font-semibold mb-4">Related Resources</h2>
            {resource.relatedResources.length > 0 ? (
              <div className="space-y-4">
                {resource.relatedResources.map(related => (
                  <a
                    key={related.id}
                    href={`/student/resources/${related.id}`}
                    className="flex items-start p-2 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <img
                      src={related.thumbnail}
                      alt={related.title}
                      className="h-12 w-12 rounded object-cover mr-3"
                    />
                    <div>
                      <h3 className="font-medium text-sm">{related.title}</h3>
                      <p className="text-xs text-gray-500">{related.subject}</p>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">No related resources available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resourceid;