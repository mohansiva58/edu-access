import React from 'react';
import { Search, Filter, Clock, Users, Star, BookOpen } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: 'Complete Web Development Bootcamp',
      instructor: 'Dr. Angela Yu',
      duration: '12 weeks',
      students: '125,000+',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      level: 'Beginner',
      price: '$99',
    },
    {
      title: 'Machine Learning A-Z',
      instructor: 'Kirill Eremenko',
      duration: '8 weeks',
      students: '95,000+',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      level: 'Intermediate',
      price: '$129',
    },
    {
      title: 'iOS App Development with Swift',
      instructor: 'Chris Anderson',
      duration: '10 weeks',
      students: '45,000+',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      level: 'Advanced',
      price: '$149',
    },
    {
      title: 'Data Science Fundamentals',
      instructor: 'Sarah Johnson',
      duration: '6 weeks',
      students: '75,000+',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      level: 'Beginner',
      price: '$79',
    },
    {
      title: 'UI/UX Design Masterclass',
      instructor: 'David Miller',
      duration: '8 weeks',
      students: '35,000+',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      level: 'Intermediate',
      price: '$119',
    },
    {
      title: 'Digital Marketing Pro',
      instructor: 'Emma Wilson',
      duration: '6 weeks',
      students: '55,000+',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      level: 'Beginner',
      price: '$89',
    },
  ];

  const categories = ['All Courses', 'Development', 'Business', 'Design', 'Marketing', 'IT & Software', 'Personal Development'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Online Courses</h1>
        <p className="mt-2 text-gray-600">
          Expand your skills with our comprehensive course catalog
        </p>
      </div>

      <div className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
          <button className="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-5 h-5 mr-2" />
            Filters
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-lg text-sm font-medium">
                {course.price}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-indigo-600">{course.level}</span>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">{course.rating}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.instructor}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{course.students}</span>
                </div>
              </div>
              <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;