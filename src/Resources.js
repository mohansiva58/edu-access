/* eslint-disable no-unused-vars */
import React from 'react';
import { Search, Filter, BookOpen, Video, FileText, Users } from 'lucide-react';
import ResourceCard from './ResourceCard';
import { Link, Routes, Route } from 'react-router-dom';
import './Resources.css';
import Community from './Community';
import Documents from './Documents';
import VideoGallery from './VideoGallery';

const Resources = () => {
  const resources = [
    {
      title: 'Introduction to Computer Science',
      description: 'Learn the fundamentals of computer science with this comprehensive course from MIT OpenCourseWare.',
      category: 'Course',
      link: 'https://ocw.mit.edu',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Data Science Scholarship Program',
      description: 'Full scholarship opportunity for aspiring data scientists, including mentorship and job placement support.',
      category: 'Scholarship',
      link: '#',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Global Mentorship Network',
      description: 'Connect with industry professionals and get personalized guidance for your career development.',
      category: 'Mentorship',
      link: '#',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Digital Library Access',
      description: 'Access thousands of educational resources, research papers, and academic journals.',
      category: 'Library',
      link: '#',
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Coding Bootcamp Scholarship',
      description: 'Full-stack web development bootcamp with guaranteed job placement upon completion.',
      category: 'Scholarship',
      link: '#',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Virtual Study Groups',
      description: 'Join peer-led study groups and collaborate with students from around the world.',
      category: 'Community',
      link: '#',
      image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ];

  const categories = [
   
    { name: 'Video Gallery', path: '/video-gallery', icon: <Video className="icon" /> },
    { name: 'Documents', path: '/documents', icon: <FileText className="icon" /> },
    { name: 'Community', path: '/community', icon: <Users className="icon" /> },
  ];

  return (
    <div className="resources-container">
      <div className="header">
        <h1>Educational Resources</h1>
        <p>Discover a wealth of learning materials, scholarships, and opportunities</p>
      </div>

      <div className="search-filter">
        <div className="search-bar">
          <Search className="search-icon" />
          <input type="text" placeholder="Search resources..." />
        </div>
        <button className="filter-button">
          <Filter className="filter-icon" />
          Filters
        </button>
      </div>

      <div className="categories">
        {categories.map((category, index) => (
          <Link key={index} to={category.path} className="category-button">
            {category.icon}
            <span>{category.name}</span>
          </Link>
        ))}
      </div>

      <div className="resources-grid">
        {resources.map((resource, index) => (
          <ResourceCard key={index} {...resource} />
        ))}
      </div>

      {/* Define Routes */}
      <Routes>
       
        <Route path="/video-gallery" element={<VideoGallery />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </div>
  );
};

export default Resources;