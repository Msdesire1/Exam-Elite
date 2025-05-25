
"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, BookOpen, FileText, BookText } from 'lucide-react';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('all');
  const [activeTab, setActiveTab] = useState('documents');
  const router = useRouter();

  const subjects = ['all', 'Mathematics', 'Physics', 'Biology', 'Literature', 'History'];

  const resources = [
    {
      id: '1',
      title: 'Mathematics Formula Sheet',
      type: 'document',
      subject: 'Mathematics',
      description: 'Complete collection of formulas for algebra, trigonometry, and calculus',
      thumbnail: '/placeholder.svg',
      downloadable: true
    },
    {
      id: '2',
      title: 'Physics Core Concepts',
      type: 'document',
      subject: 'Physics',
      description: 'Overview of mechanics, thermodynamics, and electromagnetism',
      thumbnail: '/placeholder.svg',
      downloadable: true
    },
    {
      id: '3',
      title: 'Literature Analysis Guide',
      type: 'document',
      subject: 'Literature',
      description: 'Techniques for analyzing poetry, prose, and drama',
      thumbnail: '/placeholder.svg',
      downloadable: true
    },
    {
      id: '4',
      title: 'Biology Interactive Course',
      type: 'interactive',
      subject: 'Biology',
      description: 'Interactive lessons on cell biology and genetics',
      thumbnail: '/placeholder.svg'
    },
    {
      id: '5',
      title: 'Algebra Video Tutorials',
      type: 'video',
      subject: 'Mathematics',
      description: 'Step-by-step video lessons for solving algebraic equations',
      thumbnail: '/placeholder.svg'
    },
    {
      id: '6',
      title: 'History Timeline Explorer',
      type: 'interactive',
      subject: 'History',
      description: 'Interactive timeline of major historical events',
      thumbnail: '/placeholder.svg'
    }
  ];

  // Filter resources based on search term and subject
  const filterResources = (type) => {
    return resources
      .filter(resource => resource.type === type)
      .filter(resource => {
        const matchesSearch =
          resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          resource.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSubject = subjectFilter === 'all' || resource.subject === subjectFilter;
        return matchesSearch && matchesSubject;
      });
  };

  const documents = filterResources('document');
  const videos = filterResources('video');
  const interactives = filterResources('interactive');

  const ResourceCard = ({ resource }) => (
    <div className="h-full flex flex-col border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="p-4 flex flex-col flex-grow">
        <div className="w-full h-36 mb-3 overflow-hidden rounded-md bg-gray-100">
          <div className="relative w-full h-full">
            <img
              src={resource.thumbnail}
              alt={resource.title}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <h3 className="text-lg font-semibold  text-black">{resource.title}</h3>
        <p className="text-sm mb-2  text-black">{resource.subject}</p>
        <p className="text-sm mb-4 flex-grow  text-black">{resource.description}</p>
        <div className="w-full flex justify-between">
          <button
            onClick={() => router.push(`/dashboard/student/studentexam/resourcesid`)}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50"
          >
            View Details
          </button>
          {resource.downloadable && (
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700">
              Download
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const EmptyState = () => (
    <div className="text-center py-12 border border-gray-300 rounded-lg">
      <BookText className="mx-auto h-12 w-12  text-black" />
      <h3 className="mt-4 text-lg font-medium  text-black">No resources found</h3>
      <p className=" text-black mt-2">Try adjusting your search or filters.</p>
    </div>
  );

  return (
    <div className="space-y-8 p-4 md:p-6">
      <div>
        <h1 className="text-3xl font-bold mb-2  text-black">Study Resources</h1>
        <p className=" text-black">Access a variety of materials to help prepare for your exams</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="relative flex-grow max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4  text-black" />
          <input
            placeholder="Search resources..."
            className="pl-9 w-full px-3 py-2 border  text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <select
          value={subjectFilter}
          onChange={(e) => setSubjectFilter(e.target.value)}
          className="w-[180px] px-3 py-2 border  text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject === 'all' ? 'All Subjects' : subject}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full">
        <div className="flex w-full border-b border-gray-300">
          <button
            onClick={() => setActiveTab('documents')}
            className={`flex-1 py-2 px-4 flex items-center justify-center border-b-2 border-gray-300 ${activeTab === 'documents' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
          >
            <FileText className="h-4 w-4 mr-2" /> Documents
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`flex-1 py-2 px-4 flex items-center justify-center border-b-2 border-gray-300 ${activeTab === 'videos' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
          >
            <BookOpen className="h-4 w-4 mr-2" /> Videos
          </button>
          <button
            onClick={() => setActiveTab('interactive')}
            className={`flex-1 py-2 px-4 flex items-center justify-center border-b-2 border-gray-300 ${activeTab === 'interactive' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
          >
            <BookText className="h-4 w-4 mr-2" /> Interactive
          </button>
        </div>

        <div className="mt-6">
          {activeTab === 'documents' && (
            <>
              {documents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  text-black">
                  {documents.map(resource => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))}
                </div>
              ) : (
                <EmptyState />
              )}
            </>
          )}

          {activeTab === 'videos' && (
            <>
              {videos.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  text-black">
                  {videos.map(resource => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))}
                </div>
              ) : (
                <EmptyState />
              )}
            </>
          )}

          {activeTab === 'interactive' && (
            <>
              {interactives.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  text-black">
                  {interactives.map(resource => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))}
                </div>
              ) : (
                <EmptyState />
              )}
            </>
          )}
        </div>
      </div>

      <div className="p-6 bg-blue-50 rounded-lg border border-blue-100">
        <h3 className="text-lg font-medium text-blue-800 mb-2">Study Tips</h3>
        <ul className="space-y-2 text-blue-700">
          <li>• Create a study schedule and stick to it</li>
          <li>• Take short breaks to maintain concentration</li>
          <li>• Use the Pomodoro technique: 25 minutes study, 5 minutes break</li>
          <li>• Teach concepts to others to solidify understanding</li>
          <li>• Review materials regularly rather than cramming</li>
        </ul>
      </div>
    </div>
  );
};

export default Resources;