import React from 'react';
import { Users, Laptop, GraduationCap, Globe, BookOpen, Award, Clock, Target } from 'lucide-react';
import StatCard from '../components/StatCard';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const stats = [
    {
      title: 'Active Students',
      value: '24.5K',
      change: 12,
      icon: <Users className="w-6 h-6 text-indigo-600" />,
    },
    {
      title: 'Digital Access',
      value: '78%',
      change: 4,
      icon: <Laptop className="w-6 h-6 text-indigo-600" />,
    },
    {
      title: 'Completion Rate',
      value: '92%',
      change: 8,
      icon: <GraduationCap className="w-6 h-6 text-indigo-600" />,
    },
    {
      title: 'Countries Reached',
      value: '120+',
      change: 15,
      icon: <Globe className="w-6 h-6 text-indigo-600" />,
    },
  ];

  const enrollmentData = [
    { name: 'Jan', students: 4000 },
    { name: 'Feb', students: 4500 },
    { name: 'Mar', students: 5200 },
    { name: 'Apr', students: 4800 },
    { name: 'May', students: 6000 },
    { name: 'Jun', students: 7000 },
  ];

  const featuredCourses = [
    {
      title: 'Data Science Fundamentals',
      enrolled: '2.3k students',
      duration: '8 weeks',
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Web Development Bootcamp',
      enrolled: '1.8k students',
      duration: '12 weeks',
      level: 'Beginner',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'AI & Machine Learning',
      enrolled: '1.5k students',
      duration: '10 weeks',
      level: 'Advanced',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome to EduAccess</h1>
        <p className="mt-2 text-gray-600">
          Empowering global education through digital accessibility and innovation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Student Enrollment Trends</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={enrollmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="students" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-indigo-50 rounded-lg flex flex-col items-center text-indigo-600 hover:bg-indigo-100 transition-colors">
              <BookOpen className="w-8 h-8 mb-2" />
              <span>Browse Courses</span>
            </button>
            <button className="p-4 bg-indigo-50 rounded-lg flex flex-col items-center text-indigo-600 hover:bg-indigo-100 transition-colors">
              <Award className="w-8 h-8 mb-2" />
              <span>Certifications</span>
            </button>
            <button className="p-4 bg-indigo-50 rounded-lg flex flex-col items-center text-indigo-600 hover:bg-indigo-100 transition-colors">
              <Clock className="w-8 h-8 mb-2" />
              <span>Schedule</span>
            </button>
            <button className="p-4 bg-indigo-50 rounded-lg flex flex-col items-center text-indigo-600 hover:bg-indigo-100 transition-colors">
              <Target className="w-8 h-8 mb-2" />
              <span>Goals</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{course.enrolled}</span>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <Target className="w-4 h-4 mr-2" />
                  <span>{course.level}</span>
                </div>
                <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;