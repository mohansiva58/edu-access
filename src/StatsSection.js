import React, { useState, useEffect } from 'react';
import './StatsSection.css';
import { BookOpenCheck, Users, Target, ArrowRight } from 'lucide-react';
import './FeaturesSection.css';

const StatsSection = () => {
  const [counts, setCounts] = useState({
    startups: 0,
    fundingRaised: 0,
    programs: 0,
    valuePartners: 0,
    events: 0,
    corporateEngagements: 0,
    internationalConnects: 0,
    mentors: 0,
  });

  useEffect(() => {
    const animateNumbers = (targetValue, key) => {
      let count = 0;
      const step = Math.ceil(targetValue / 80);
      const interval = setInterval(() => {
        if (count < targetValue) {
          count += step;
          if (count > targetValue) count = targetValue;
          setCounts((prevCounts) => ({ ...prevCounts, [key]: count }));
        } else {
          clearInterval(interval);
        }
      }, 30);
    };

    animateNumbers(50 , 'Students');
    animateNumbers(1000, 'Cources');
    animateNumbers(200, 'Mentors');
    animateNumbers(90, 'SuccessRate');
    animateNumbers(22, 'events');
    animateNumbers(1222, 'corporateEngagements');
    animateNumbers(400, 'internationalConnects');
    animateNumbers(2394, 'mentors');
  }, []);

  return (
    <div className="stats-section">
      <div className="container">
        <div className="grid">
          <div className="stat-card">
            <div className="stat-value">{counts.Students}k +</div>
            <div className="stat-label">Students</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{counts.Cources}+</div>
            <div className="stat-label">Cources</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{counts.Mentors}+</div>
            <div className="stat-label">Mentors</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{counts.SuccessRate}%</div>
            <div className="stat-label">Success Rate</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{counts.events}</div>
            <div className="stat-label">Events</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{counts.corporateEngagements}+</div>
            <div className="stat-label">Corporate Engagements</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{counts.internationalConnects}+</div>
            <div className="stat-label">International Connects</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{counts.mentors}+</div>
            <div className="stat-label">Mentors</div>
          </div>
        </div>
      </div>
    
      <div className="card-container">
          <div className="card">
            <div className="card-content">
              <div className="icon-container">
                <div className="icon-bg">
                  <BookOpenCheck className="icon" />
                </div>
              </div>
              <div className="text-content">
                <h3 className="card-title">Resources Hub</h3>
                <p className="card-description">
                  "Access high-quality educational materials, courses, and study guides tailored to your learning needs."
                </p>
                <a href="/resources" className="link">
                  LEARN MORE
                  <ArrowRight className="arrow" />
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <div className="icon-container">
                <div className="icon-bg">
                  <Target className="icon" />
                </div>
              </div>
              <div className="text-content">
                <h3 className="card-title">Mentorship</h3>
                <p className="card-description">
                  "Connect with experienced mentors who provide guidance and support throughout your educational journey."
                </p>
                <a href="/mentorship" className="link">
                  LEARN MORE
                  <ArrowRight className="arrow" />
                </a>
              </div>
             
            </div>
          </div>
          
          <div className="card">
            <div className="card-content">
              <div className="icon-container">
                <div className="icon-bg">
                  <Users className="icon" />
                </div>
              </div>
              <div className="text-content">
                <h3 className="card-title">Learning paths</h3>
                <p className="card-description">
                  "Follow personalized learning experiences designed to help you achieve your educational goals."
                </p>
                <a href="/apps" className="link">
                  LEARN MORE
                  <ArrowRight className="arrow" />
                </a>
              </div>
             
            </div>
          </div>

        
        </div>
    </div>
  );
};

export default StatsSection;
