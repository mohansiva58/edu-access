import React from 'react';
import { Play, Clock, Star, Filter, Search } from 'lucide-react';

const Videos = () => {
  const videos = [
    {
      title: 'Introduction to Machine Learning',
      instructor: 'Dr. Sarah Johnson',
      duration: '45 minutes',
      rating: 4.8,
      thumbnail: 'https://source.unsplash.com/400x250/?technology',
      category: 'Technology',
    },
    {
      title: 'Web Development Fundamentals',
      instructor: 'Mike Chen',
      duration: '60 minutes',
      rating: 4.9,
      thumbnail: 'https://source.unsplash.com/400x250/?coding',
      category: 'Programming',
    },
    {
      title: 'Digital Marketing Essentials',
      instructor: 'Emma Wilson',
      duration: '55 minutes',
      rating: 4.7,
      thumbnail: 'https://source.unsplash.com/400x250/?marketing',
      category: 'Marketing',
    },
    {
      title: 'Data Science for Beginners',
      instructor: 'Alex Thompson',
      duration: '50 minutes',
      rating: 4.6,
      thumbnail: 'https://source.unsplash.com/400x250/?data',
      category: 'Data Science',
    },
    {
      title: 'UX Design Principles',
      instructor: 'Lisa Wang',
      duration: '40 minutes',
      rating: 4.9,
      thumbnail: 'https://source.unsplash.com/400x250/?design',
      category: 'Design',
    },
    {
      title: 'Business Analytics',
      instructor: 'James Miller',
      duration: '65 minutes',
      rating: 4.7,
      thumbnail: 'https://source.unsplash.com/400x250/?business',
      category: 'Business',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900">Video Tutorials</h1>
      <p className="mt-2 text-gray-600">Learn from expert instructors through high-quality video content</p>
      
      <div className="flex flex-col sm:flex-row gap-4 my-6">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search videos..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
        </div>
        <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
          <Filter className="w-5 h-5 mr-2" />
          Filters
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <button className="p-3 bg-white rounded-full">
                  <Play className="w-8 h-8 text-indigo-600" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-indigo-600">{video.category}</span>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">{video.rating}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{video.title}</h3>
              <p className="text-gray-600 mb-4">{video.instructor}</p>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-2" />
                <span>{video.duration}</span>
              </div>
              <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                Watch Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
