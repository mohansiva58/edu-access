import React from 'react';
import type { Resource } from '../types';

const ResourceCard: React.FC<Resource> = ({ title, description, category, link, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center">
          <span className="px-3 py-1 text-sm bg-indigo-100 text-indigo-800 rounded-full">
            {category}
          </span>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500"
        >
          Learn more →
        </a>
      </div>
    </div>
  );
};

export default ResourceCard;