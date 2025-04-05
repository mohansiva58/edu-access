import React from 'react';
import { Search, Filter, FileText, Download, Star } from 'lucide-react';
import './Documents.css';
const Documents = () => {
  const documents = [
    {
      title: 'Complete Python Programming Guide',
      author: 'Tech Education Team',
      type: 'PDF Guide',
      size: '2.5 MB',
      downloads: '15K+',
      rating: 4.8,
      category: 'Programming',
    },
    {
      title: 'Data Structures and Algorithms',
      author: 'CS Foundation',
      type: 'Study Material',
      size: '4.2 MB',
      downloads: '12K+',
      rating: 4.9,
      category: 'Computer Science',
    },
    {
      title: 'Machine Learning Fundamentals',
      author: 'AI Research Hub',
      type: 'eBook',
      size: '3.8 MB',
      downloads: '8K+',
      rating: 4.7,
      category: 'AI & ML',
    }
  ];

  const categories = ['All Documents', 'Programming', 'Computer Science', 'AI & ML'];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="header mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Learning Documents</h1>
        <p className="mt-2 text-gray-600">
          Access comprehensive study materials and resources
        </p>
      </div>

      <div className="search-filters mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search documents..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
        </div>
        <button className="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
          <Filter className="w-5 h-5 mr-2" />
          Filters
        </button>
      </div>

      <div className="categories mb-8 flex flex-wrap gap-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              index === 0
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="documents-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((doc, index) => (
          <div key={index} className="doc-card bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <FileText className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm text-gray-600">{doc.rating}</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{doc.title}</h3>
            <p className="text-gray-600 mb-4">{doc.author}</p>
            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <span>{doc.type}</span>
              <span>{doc.size}</span>
            </div>
            <button className="download-btn flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              <Download className="w-4 h-4 mr-2" />
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documents;
