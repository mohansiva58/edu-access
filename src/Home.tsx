import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Video, Users, Award } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight animate-fade-in">
                Unlock Your Learning Potential with EduAccess
              </h1>
              <p className="text-xl text-gray-600 animate-fade-in-delay-1">
                Access world-class education resources, connect with mentors, and join a global
                community of learners. Your journey to success starts here.
              </p>
              <div className="flex gap-4 animate-fade-in-delay-2">
                <Link
                  to="/courses"
                  className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/resources"
                  className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-50 transition-colors border border-indigo-600"
                >
                  Browse Resources
                </Link>
              </div>
            </div>
            <div className="relative animate-float">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Students learning"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-indigo-600" />
                  <span className="font-semibold">24,000+ Students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">Why Choose EduAccess?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Quality Content</h3>
            <p className="text-gray-600">
              Access curated courses and resources from leading educators and institutions worldwide.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <Video className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Interactive Learning</h3>
            <p className="text-gray-600">
              Engage with video tutorials, live sessions, and hands-on projects for better understanding.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <Award className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Recognized Certification</h3>
            <p className="text-gray-600">
              Earn certificates that are valued by employers and institutions globally.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">24K+</div>
              <div className="text-indigo-200">Active Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-indigo-200">Expert Instructors</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1.2K+</div>
              <div className="text-indigo-200">Courses Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">92%</div>
              <div className="text-indigo-200">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to Start Your Learning Journey?</h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Join thousands of students who are already transforming their lives through education.
        </p>
        <Link
          to="/courses"
          className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center"
        >
          Explore Courses
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default Home;