import React from 'react';
import { Users, MessageSquare, Heart, Share2, Search, Filter } from 'lucide-react';

const Community = () => {
  const discussions = [
    {
      title: 'Best resources for learning React in 2024?',
      author: {
        name: 'Sarah Chen',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      category: 'Web Development',
      replies: 24,
      likes: 45,
      timeAgo: '2 hours ago',
    },
    {
      title: 'How to prepare for technical interviews?',
      author: {
        name: 'Michael Brown',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      category: 'Career Advice',
      replies: 56,
      likes: 89,
      timeAgo: '5 hours ago',
    },
    {
      title: 'Tips for learning Data Structures efficiently',
      author: {
        name: 'Emily Wilson',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      category: 'Computer Science',
      replies: 18,
      likes: 32,
      timeAgo: '1 day ago',
    },
    {
      title: 'Machine Learning project ideas for beginners',
      author: {
        name: 'David Kim',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      category: 'AI & ML',
      replies: 41,
      likes: 67,
      timeAgo: '2 days ago',
    },
  ];

  const categories = ['All Topics', 'Web Development', 'Data Science', 'Career Advice', 'Computer Science', 'AI & ML', 'Study Groups'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Community Discussions</h1>
        <p className="mt-2 text-gray-600">
          Connect, share, and learn from fellow students and educators
        </p>
      </div>

      <div className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search discussions..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
          <button className="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-5 h-5 mr-2" />
            Filters
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Start Discussion
          </button>
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              index === 0
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {discussions.map((discussion, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <img
                  src={discussion.author.avatar}
                  alt={discussion.author.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{discussion.title}</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-sm text-gray-600">{discussion.author.name}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-600">{discussion.timeAgo}</span>
                  </div>
                </div>
              </div>
              <span className="px-3 py-1 text-sm bg-indigo-100 text-indigo-800 rounded-full">
                {discussion.category}
              </span>
            </div>
            <div className="mt-4 flex items-center space-x-6">
              <button className="flex items-center text-gray-500 hover:text-gray-700">
                <MessageSquare className="w-5 h-5 mr-2" />
                <span>{discussion.replies} replies</span>
              </button>
              <button className="flex items-center text-gray-500 hover:text-gray-700">
                <Heart className="w-5 h-5 mr-2" />
                <span>{discussion.likes} likes</span>
              </button>
              <button className="flex items-center text-gray-500 hover:text-gray-700">
                <Share2 className="w-5 h-5 mr-2" />
                <span>Share</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;