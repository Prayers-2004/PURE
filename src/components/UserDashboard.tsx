'use client';

import React from 'react';

export default function UserDashboard() {
  // Mock data for user's purifiers
  const purifiers = [
    {
      id: 1,
      name: 'Living Room AirPure Pro',
      status: 'Active',
      airCleaned: '2,340L',
      filterLife: 85,
      lastActive: '2 minutes ago'
    },
    {
      id: 2,
      name: 'Bedroom AirPure Mini',
      status: 'Active',
      airCleaned: '1,650L',
      filterLife: 72,
      lastActive: '5 minutes ago'
    }
  ];

  const todayStats = {
    totalAirCleaned: '3,990L',
    averageAQI: 42,
    energyUsed: '1.2 kWh',
    co2Reduced: '12.5 kg'
  };

  const areaData = {
    zone: 'Clean Zone',
    aqi: 42,
    status: 'Good',
    improvement: '+15% from last week'
  };

  return (
    <div className="space-y-8">
      {/* Today's Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="cloud-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Air Cleaned</p>
              <p className="text-2xl font-bold text-blue-600">{todayStats.totalAirCleaned}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 6.707 6.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <div className="cloud-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Average AQI</p>
              <p className="text-2xl font-bold text-green-600">{todayStats.averageAQI}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <div className="cloud-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Energy Used</p>
              <p className="text-2xl font-bold text-orange-600">{todayStats.energyUsed}</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="cloud-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">CO₂ Reduced</p>
              <p className="text-2xl font-bold text-purple-600">{todayStats.co2Reduced}</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Your Purifiers */}
      <div className="cloud-card p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Air Purifiers</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {purifiers.map((purifier) => (
            <div key={purifier.id} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{purifier.name}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  purifier.status === 'Active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {purifier.status}
                </span>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Air Cleaned Today</span>
                  <span className="text-sm font-medium text-gray-900">{purifier.airCleaned}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Filter Life</span>
                  <span className="text-sm font-medium text-gray-900">{purifier.filterLife}%</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${purifier.filterLife}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Last Active</span>
                  <span className="text-sm font-medium text-gray-900">{purifier.lastActive}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Area Air Quality */}
      <div className="cloud-card p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Area Air Quality</h2>
        <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">{areaData.zone}</h3>
              <p className="text-green-100">AQI: {areaData.aqi} - {areaData.status}</p>
              <p className="text-green-100 text-sm mt-2">{areaData.improvement}</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold">{areaData.aqi}</div>
              <div className="text-sm">AQI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}