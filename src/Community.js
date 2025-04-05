import React from 'react';
import { Users, MessageSquare, Heart, Share2, Search, Filter } from 'lucide-react';
import './Community.css';

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
    <div className="community-container">
      <div className="header">
        <h1>Community Discussions</h1>
        <p>Connect, share, and learn from fellow students and educators</p>
      </div>

      <div className="search-filter">
        <div className="search-bar">
          <input type="text" placeholder="Search discussions..." />
          <Search className="search-icon" />
        </div>
        <button className="filter-button">
          <Filter className="icon" /> Filters
        </button>
        <button className="start-discussion">Start Discussion</button>
      </div>

      <div className="categories">
        {categories.map((category, index) => (
          <button key={index} className={`category ${index === 0 ? 'active' : ''}`}>{category}</button>
        ))}
      </div>

      <div className="discussions">
        {discussions.map((discussion, index) => (
          <div key={index} className="discussion-card">
            <div className="discussion-header">
              <img src={discussion.author.avatar} alt={discussion.author.name} className="avatar" />
              <div>
                <h3>{discussion.title}</h3>
                <div className="meta">
                  <span>{discussion.author.name}</span>
                  <span className="dot">•</span>
                  <span>{discussion.timeAgo}</span>
                </div>
              </div>
            </div>
            <span className="category-label">{discussion.category}</span>
            <div className="actions">
              <button className="action-button"><MessageSquare className="icon" /> {discussion.replies} replies</button>
              <button className="action-button"><Heart className="icon" /> {discussion.likes} likes</button>
              <button className="action-button"><Share2 className="icon" /> Share</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
