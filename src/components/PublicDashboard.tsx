'use client';

import React, { useState } from 'react';

export default function PublicDashboard() {
  const [selectedTimeRange, setSelectedTimeRange] = useState('24h');
  const [sortBy, setSortBy] = useState('aqi');
  const [showDetails, setShowDetails] = useState<number | null>(null);
  const [selectedZone, setSelectedZone] = useState<string | null>(null);

  // Enhanced mock data with more details
  const regionalAirQuality = [
    { 
      id: 1,
      area: 'Downtown Business District', 
      aqi: 42, 
      status: 'Good', 
      purifiers: 89, 
      improvement: '+22%',
      temperature: 22,
      humidity: 65,
      wind: 5.2,
      pm25: 15,
      pm10: 25,
      trend: 'improving'
    },
    { 
      id: 2,
      area: 'Residential North', 
      aqi: 38, 
      status: 'Good', 
      purifiers: 156, 
      improvement: '+18%',
      temperature: 20,
      humidity: 70,
      wind: 7.8,
      pm25: 12,
      pm10: 22,
      trend: 'stable'
    },
    { 
      id: 3,
      area: 'University Campus', 
      aqi: 34, 
      status: 'Good', 
      purifiers: 67, 
      improvement: '+25%',
      temperature: 19,
      humidity: 75,
      wind: 6.3,
      pm25: 10,
      pm10: 18,
      trend: 'improving'
    },
    { 
      id: 4,
      area: 'Shopping Mall Area', 
      aqi: 45, 
      status: 'Good', 
      purifiers: 78, 
      improvement: '+15%',
      temperature: 23,
      humidity: 55,
      wind: 4.5,
      pm25: 18,
      pm10: 28,
      trend: 'stable'
    },
    { 
      id: 5,
      area: 'Industrial Zone', 
      aqi: 67, 
      status: 'Moderate', 
      purifiers: 234, 
      improvement: '+12%',
      temperature: 25,
      humidity: 45,
      wind: 3.1,
      pm25: 35,
      pm10: 55,
      trend: 'worsening'
    },
    { 
      id: 6,
      area: 'Airport Vicinity', 
      aqi: 58, 
      status: 'Moderate', 
      purifiers: 123, 
      improvement: '+8%',
      temperature: 24,
      humidity: 50,
      wind: 8.5,
      pm25: 28,
      pm10: 42,
      trend: 'improving'
    }
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

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'improving': return '📈';
      case 'worsening': return '📉';
      case 'stable': return '➡️';
      default: return '➡️';
    }
  };

  const sortedData = [...regionalAirQuality].sort((a, b) => {
    if (sortBy === 'aqi') return a.aqi - b.aqi;
    if (sortBy === 'area') return a.area.localeCompare(b.area);
    if (sortBy === 'purifiers') return b.purifiers - a.purifiers;
    return 0;
  });

  const filteredData = selectedZone 
    ? sortedData.filter(area => area.status.toLowerCase() === selectedZone.toLowerCase())
    : sortedData;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Interactive Air Quality Monitor</h2>
        <p className="text-lg text-gray-600">
          Explore live air quality data across different areas and see the impact of our purification network
        </p>
      </div>

      {/* Interactive Controls */}
      <div className="cloud-card p-6">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">Time Range:</label>
              <select 
                value={selectedTimeRange} 
                onChange={(e) => setSelectedTimeRange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="1h">Last Hour</option>
                <option value="24h">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">Sort by:</label>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="aqi">Air Quality (Best First)</option>
                <option value="area">Area Name</option>
                <option value="purifiers">Purifier Count</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">Filter:</label>
              <select 
                value={selectedZone || ''} 
                onChange={(e) => setSelectedZone(e.target.value || null)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Zones</option>
                <option value="good">Good Quality</option>
                <option value="moderate">Moderate Quality</option>
                <option value="unhealthy">Needs Attention</option>
              </select>
            </div>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm flex items-center space-x-2"
          >
            <span>🔄</span>
            <span>Refresh Data</span>
          </button>
        </div>
      </div>

      {/* Today's Impact */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="cloud-card p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
          <div className="text-3xl font-bold text-blue-600 mb-2">{todayStats.totalAirCleaned}</div>
          <div className="text-sm text-gray-600">Air Cleaned Today</div>
          <div className="text-xs text-gray-500 mt-1">Updated every 15 minutes</div>
        </div>
        
        <div className="cloud-card p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
          <div className="text-3xl font-bold text-green-600 mb-2">{todayStats.activePurifiers}</div>
          <div className="text-sm text-gray-600">Active Purifiers</div>
          <div className="text-xs text-gray-500 mt-1">Currently online</div>
        </div>
        
        <div className="cloud-card p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
          <div className="text-3xl font-bold text-purple-600 mb-2">{todayStats.avgAQIImprovement}</div>
          <div className="text-sm text-gray-600">Avg AQI Improvement</div>
          <div className="text-xs text-gray-500 mt-1">vs. last month</div>
        </div>
        
        <div className="cloud-card p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
          <div className="text-3xl font-bold text-orange-600 mb-2">{todayStats.cleanZones}</div>
          <div className="text-sm text-gray-600">Clean Zones</div>
          <div className="text-xs text-gray-500 mt-1">AQI below 50</div>
        </div>
      </div>

      {/* Regional Air Quality with Interactive Features */}
      <div className="cloud-card p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Area Air Quality Status 
          <span className="text-sm font-normal text-gray-500 ml-2">
            ({filteredData.length} of {regionalAirQuality.length} areas shown)
          </span>
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredData.map((area) => (
            <div key={area.id} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-md transition-all duration-200 hover:border-blue-300">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900">{area.area}</h4>
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{getTrendIcon(area.trend)}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(area.status)}`}>
                    {area.status}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center mb-4">
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

              {/* Expandable Details */}
              <button
                onClick={() => setShowDetails(showDetails === area.id ? null : area.id)}
                className="w-full px-3 py-2 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors"
              >
                {showDetails === area.id ? '▲ Hide Details' : '▼ Show Environmental Details'}
              </button>

              {showDetails === area.id && (
                <div className="mt-4 p-4 bg-white rounded-lg border space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Temperature:</span>
                      <span className="text-sm font-medium">{area.temperature}°C</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Humidity:</span>
                      <span className="text-sm font-medium">{area.humidity}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Wind Speed:</span>
                      <span className="text-sm font-medium">{area.wind} m/s</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Trend:</span>
                      <span className="text-sm font-medium capitalize">{area.trend}</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-lg font-semibold">{area.pm25}</div>
                        <div className="text-xs text-gray-500">PM2.5 (μg/m³)</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold">{area.pm10}</div>
                        <div className="text-xs text-gray-500">PM10 (μg/m³)</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Zone Classification */}
      <div className="cloud-card p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Zone Classification & Standards</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div 
            className="air-quality-excellent p-6 rounded-2xl text-center cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelectedZone(selectedZone === 'good' ? null : 'good')}
          >
            <div className="text-3xl font-bold mb-2">8</div>
            <div className="text-lg font-semibold mb-2">Clean Zones</div>
            <div className="text-sm opacity-90">AQI 0-50 • Excellent air quality</div>
            {selectedZone === 'good' && <div className="mt-2 text-xs">✓ Currently filtered</div>}
          </div>
          
          <div 
            className="air-quality-good p-6 rounded-2xl text-center cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelectedZone(selectedZone === 'moderate' ? null : 'moderate')}
          >
            <div className="text-3xl font-bold mb-2">7</div>
            <div className="text-lg font-semibold mb-2">Good Zones</div>
            <div className="text-sm opacity-90">AQI 51-100 • Acceptable air quality</div>
            {selectedZone === 'moderate' && <div className="mt-2 text-xs">✓ Currently filtered</div>}
          </div>
          
          <div 
            className="air-quality-moderate p-6 rounded-2xl text-center cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelectedZone(selectedZone === 'unhealthy' ? null : 'unhealthy')}
          >
            <div className="text-3xl font-bold mb-2">3</div>
            <div className="text-lg font-semibold mb-2">Needs Attention</div>
            <div className="text-sm opacity-90">AQI 101+ • Consider purifier installation</div>
            {selectedZone === 'unhealthy' && <div className="mt-2 text-xs">✓ Currently filtered</div>}
          </div>
        </div>

        {/* Health Recommendations */}
        <div className="bg-blue-50 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">🌿 Health Recommendations</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <div className="text-blue-600 font-semibold mb-2">💧 Stay Hydrated</div>
              <div className="text-sm text-gray-600">Drink plenty of water to help your body process pollutants naturally.</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-green-600 font-semibold mb-2">🏠 Indoor Air</div>
              <div className="text-sm text-gray-600">Keep windows closed during high pollution periods and use air purifiers.</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-purple-600 font-semibold mb-2">😷 Protection</div>
              <div className="text-sm text-gray-600">Consider wearing masks in areas with moderate to poor air quality.</div>
            </div>
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
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 hover:scale-105"
          >
            Register Your Purifier
          </a>
          <a
            href="/about"
            className="px-8 py-3 border-2 border-blue-500 text-blue-600 rounded-2xl font-semibold hover:bg-blue-50 transition-all duration-200 hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}