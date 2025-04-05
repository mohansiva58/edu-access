import React from 'react';
import { Download, Filter } from 'lucide-react';
import { LineChartComponent, PieChartComponent, BarChartComponent } from './Recharts';
import './Analytics.css';

const Analytics = () => {
  const enrollmentTrends = [
    { month: 'Jan', online: 4000, offline: 2400 },
    { month: 'Feb', online: 4500, offline: 2600 },
    { month: 'Mar', online: 5200, offline: 2900 },
    { month: 'Apr', online: 4800, offline: 2700 },
    { month: 'May', online: 6000, offline: 3100 },
    { month: 'Jun', online: 7000, offline: 3400 },
  ];

  const accessData = [
    { name: 'Mobile', value: 45 },
    { name: 'Desktop', value: 35 },
    { name: 'Tablet', value: 20 },
  ];

  const demographicData = [
    { age: '18-24', count: 1200 },
    { age: '25-34', count: 2100 },
    { age: '35-44', count: 1800 },
    { age: '45-54', count: 900 },
    { age: '55+', count: 400 },
  ];

  const COLORS = ['#4F46E5', '#818CF8', '#C7D2FE'];

  return (
    <div className="analytics-container">
      <div className="header">
        <div>
          <h1>Analytics Dashboard</h1>
          <p>Comprehensive insights into educational access and engagement</p>
        </div>
        <div className="header-buttons">
          <button className="filter-button">
            <Filter className="icon" />
            Filter
          </button>
          <button className="export-button">
            <Download className="icon" />
            Export
          </button>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h2>Enrollment Trends</h2>
          <div className="chart-container">
            <LineChartComponent
              data={enrollmentTrends}
              xAxisKey="month"
              line1Key="online"
              line2Key="offline"
              line1Color="#4F46E5"
              line2Color="#818CF8"
            />
          </div>
        </div>

        <div className="chart-card">
          <h2>Platform Access Distribution</h2>
          <div className="chart-container">
            <PieChartComponent data={accessData} colors={COLORS} />
          </div>
        </div>
      </div>

      <div className="chart-card">
        <h2>Age Demographics</h2>
        <div className="chart-container">
          <BarChartComponent
            data={demographicData}
            xAxisKey="age"
            barKey="count"
            barColor="#4F46E5"
          />
        </div>
      </div>

      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Average Session Duration</h3>
          <p className="metric-value">45 mins</p>
          <p className="metric-subtext">+12% from last month</p>
        </div>
        <div className="metric-card">
          <h3>Course Completion Rate</h3>
          <p className="metric-value">78%</p>
          <p className="metric-subtext">+5% from last month</p>
        </div>
        <div className="metric-card">
          <h3>Student Satisfaction</h3>
          <p className="metric-value">4.8/5</p>
          <p className="metric-subtext">Based on 2.4k reviews</p>
        </div>
        <div className="metric-card">
          <h3>Active Mentors</h3>
          <p className="metric-value">245</p>
          <p className="metric-subtext">Across 35 countries</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;