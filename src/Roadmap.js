import React from 'react';
import { CheckCircle, Circle, ArrowRight, Download, Calendar, Users, Target, Trophy } from 'lucide-react';

const Roadmap = () => {
  const milestones = [
    {
      phase: 'Phase 1: Foundation',
      status: 'completed',
      duration: 'Q1 2024',
      items: [
        'Platform architecture setup',
        'Core features implementation',
        'Initial content creation',
        'Beta testing with select users',
      ],
    },
    {
      phase: 'Phase 2: Expansion',
      status: 'current',
      duration: 'Q2 2024',
      items: [
        'Launch mobile application',
        'Integrate AI-powered learning paths',
        'Expand course catalog',
        'Partnership program rollout',
      ],
    },
    {
      phase: 'Phase 3: Enhancement',
      status: 'upcoming',
      duration: 'Q3 2024',
      items: [
        'Advanced analytics implementation',
        'Personalized learning features',
        'Community features expansion',
        'Enterprise solutions development',
      ],
    },
    {
      phase: 'Phase 4: Scale',
      status: 'upcoming',
      duration: 'Q4 2024',
      items: [
        'Global market expansion',
        'Advanced certification programs',
        'Industry partnerships',
        'Research and development initiatives',
      ],
    },
  ];

  const initiatives = [
    {
      title: 'Digital Literacy Program',
      description: 'Empowering communities with essential digital skills',
      icon: <Users className="w-6 h-6" />,
      metrics: '50,000+ beneficiaries',
    },
    {
      title: 'Mentor Connect',
      description: 'Connecting students with industry professionals',
      icon: <Target className="w-6 h-6" />,
      metrics: '2,000+ active mentors',
    },
    {
      title: 'Skill Development',
      description: 'Focused training for in-demand skills',
      icon: <Trophy className="w-6 h-6" />,
      metrics: '85% placement rate',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Strategic Roadmap</h1>
          <p className="mt-2 text-gray-600">
            Our vision and planned initiatives for expanding educational access
          </p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <Calendar className="w-5 h-5 mr-2" />
            Timeline
          </button>
          <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            <Download className="w-5 h-5 mr-2" />
            Download Plan
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {initiatives.map((initiative, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                {initiative.icon}
              </div>
              <h3 className="ml-3 text-lg font-semibold">{initiative.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{initiative.description}</p>
            <div className="flex items-center text-sm text-indigo-600 font-medium">
              <span>{initiative.metrics}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-semibold mb-8">Development Timeline</h2>
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative">
              <div className="flex items-center mb-4">
                {milestone.status === 'completed' ? (
                  <CheckCircle className="w-6 h-6 text-green-500" />
                ) : milestone.status === 'current' ? (
                  <Circle className="w-6 h-6 text-indigo-600 fill-current" />
                ) : (
                  <Circle className="w-6 h-6 text-gray-300" />
                )}
                <h3 className="ml-3 text-lg font-semibold">{milestone.phase}</h3>
                <span className="ml-4 px-3 py-1 text-sm bg-indigo-100 text-indigo-800 rounded-full">
                  {milestone.duration}
                </span>
              </div>
              <div className="ml-9 space-y-3">
                {milestone.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;