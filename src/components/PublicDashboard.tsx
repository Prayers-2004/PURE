'use client';

import React from 'react';

export default function PublicDashboard() {
  // Mock data for public viewing
  const regionalAirQuality = [
    { area: 'Downtown Business District', aqi: 42, status: 'Good', purifiers: 89, improvement: '+22%' },
    { area: 'Residential North', aqi: 38, status: 'Good', purifiers: 156, improvement: '+18%' },
    { area: 'University Campus', aqi: 34, status: 'Good', purifiers: 67, improvement: '+25%' },
    { area: 'Shopping Mall Area', aqi: 45, status: 'Good', purifiers: 78, improvement: '+15%' },
    { area: 'Industrial Zone', aqi: 67, status: 'Moderate', purifiers: 234, improvement: '+12%' },
    { area: 'Airport Vicinity', aqi: 58, status: 'Moderate', purifiers: 123, improvement: '+8%' }
  ];

  const todayStats = {
    totalAirCleaned: '34.2M L',
    activePurifiers: 1189,
    avgAQIImprovement: '+17%',
    cleanZones: 15
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Good': return 'bg-green-100 text-green-800';
      case 'Moderate': return 'bg-yellow-100 text-yellow-800';
      case 'Unhealthy': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAQIColor = (aqi: number) => {
    if (aqi <= 50) return 'text-green-600';
    if (aqi <= 100) return 'text-yellow-600';
    if (aqi <= 150) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Real-Time Air Quality Monitor</h2>
        <p className="text-lg text-gray-600">
          Explore live air quality data across different areas and see the impact of our purification network
        </p>
      </div>

      {/* Today's Impact */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="cloud-card p-6 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">{todayStats.totalAirCleaned}</div>
          <div className="text-sm text-gray-600">Air Cleaned Today</div>
        </div>
        
        <div className="cloud-card p-6 text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">{todayStats.activePurifiers}</div>
          <div className="text-sm text-gray-600">Active Purifiers</div>
        </div>
        
        <div className="cloud-card p-6 text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">{todayStats.avgAQIImprovement}</div>
          <div className="text-sm text-gray-600">Avg AQI Improvement</div>
        </div>
        
        <div className="cloud-card p-6 text-center">
          <div className="text-3xl font-bold text-orange-600 mb-2">{todayStats.cleanZones}</div>
          <div className="text-sm text-gray-600">Clean Zones</div>
        </div>
      </div>

      {/* Regional Air Quality */}
      <div className="cloud-card p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Area Air Quality Status</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {regionalAirQuality.map((area, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900">{area.area}</h4>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(area.status)}`}>
                  {area.status}
                </span>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className={`text-2xl font-bold ${getAQIColor(area.aqi)}`}>{area.aqi}</div>
                  <div className="text-xs text-gray-500">AQI</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">{area.purifiers}</div>
                  <div className="text-xs text-gray-500">Purifiers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">{area.improvement}</div>
                  <div className="text-xs text-gray-500">Improvement</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Zone Classification */}
      <div className="cloud-card p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Zone Classification</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="air-quality-excellent p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold mb-2">8</div>
            <div className="text-lg font-semibold mb-2">Clean Zones</div>
            <div className="text-sm opacity-90">AQI 0-50 • Excellent air quality</div>
          </div>
          
          <div className="air-quality-good p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold mb-2">7</div>
            <div className="text-lg font-semibold mb-2">Good Zones</div>
            <div className="text-sm opacity-90">AQI 51-100 • Acceptable air quality</div>
          </div>
          
          <div className="air-quality-moderate p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold mb-2">3</div>
            <div className="text-lg font-semibold mb-2">Needs Attention</div>
            <div className="text-sm opacity-90">AQI 101+ • Consider purifier installation</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cloud-card p-8 text-center bg-gradient-to-r from-blue-50 to-cyan-50">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to improve your area&apos;s air quality?</h3>
        <p className="text-lg text-gray-600 mb-6">
          Join our network of air purifier owners and help create cleaner zones in your community
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/login"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200"
          >
            Register Your Purifier
          </a>
          <a
            href="/about"
            className="px-8 py-3 border-2 border-blue-500 text-blue-600 rounded-2xl font-semibold hover:bg-blue-50 transition-all duration-200"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}