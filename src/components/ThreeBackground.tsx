
import React from 'react';

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="absolute inset-0 opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <g fill="none" fillRule="evenodd">
                <g fill="url(#gradient)" fillOpacity="0.3">
                  <path d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/>
                </g>
              </g>
            </pattern>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-green-400/20 to-blue-600/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
    </div>
  );
};

export default ThreeBackground;
