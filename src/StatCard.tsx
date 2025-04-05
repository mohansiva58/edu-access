import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import type { StatCard as StatCardType } from '../types';

const StatCard: React.FC<StatCardType> = ({ title, value, change, icon }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="text-gray-500">{title}</div>
        <div className="p-2 bg-indigo-50 rounded-lg">
          {icon}
        </div>
      </div>
      <div className="mt-4">
        <div className="text-2xl font-semibold">{value}</div>
        <div className="flex items-center mt-2">
          {change >= 0 ? (
            <ArrowUpRight className="w-4 h-4 text-green-500" />
          ) : (
            <ArrowDownRight className="w-4 h-4 text-red-500" />
          )}
          <span className={`ml-1 ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {Math.abs(change)}%
          </span>
          <span className="ml-2 text-gray-500">vs last month</span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;