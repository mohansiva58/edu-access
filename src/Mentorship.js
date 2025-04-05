import React from 'react';
import './Mentorship.css';

const JobCard = ({ title, company, location, type, description, requirements, accommodations }) => {
  return (
    <div className="job-card">
      <h2 className="job-title">{title}</h2>
      <p className="company">
        <strong>{company}</strong> • {location} • {type}
      </p>
      <p className="description">{description}</p>
      <div className="requirements">
        <strong>Requirements</strong>
        <div className="tags">
          {requirements.map((req, index) => (
            <span key={index} className="tag">{req}</span>
          ))}
        </div>
      </div>
      <div className="accommodations">
        <strong>Accommodations</strong>
        <div className="tags">
          {accommodations.map((acc, index) => (
            <span key={index} className="tag">{acc}</span>
          ))}
        </div>
      </div>
      <button className="apply-btn">Apply Now</button>
    </div>
  );
};

const Mentorship = () => {
  const jobs = [
    {
      title: 'UX/UI Designer',
      company: 'Creative Minds Inc',
      location: 'New York, NY',
      type: 'Hybrid',
      description: 'Design inclusive and accessible user interfaces for our products.',
      requirements: ['Figma', 'User Research', 'Accessibility knowledge'],
      accommodations: ['Flexible schedule', 'Noise-canceling headphones', 'Mentorship program'],
    },
    {
      title: 'Data Analyst',
      company: 'DataVision Analytics',
      location: 'Remote',
      type: 'Remote',
      description: 'Analyze complex datasets and create meaningful insights.',
      requirements: ['SQL', 'Python', 'Data visualization'],
      accommodations: ['Work from home', 'Flexible deadlines', 'Written communication'],
    },
    {
        title: 'Data Analyst',
        company: 'DataVision Analytics',
        location: 'Remote',
        type: 'Remote',
        description: 'Analyze complex datasets and create meaningful insights.',
        requirements: ['SQL', 'Python', 'Data visualization'],
        accommodations: ['Work from home', 'Flexible deadlines', 'Written communication'],
      },
      {
        title: 'Data Analyst',
        company: 'DataVision Analytics',
        location: 'Remote',
        type: 'Remote',
        description: 'Analyze complex datasets and create meaningful insights.',
        requirements: ['SQL', 'Python', 'Data visualization'],
        accommodations: ['Work from home', 'Flexible deadlines', 'Written communication'],
      },
  ];

  return (
    <div className="job-list">
      {jobs.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </div>
  );
};

export default Mentorship;
