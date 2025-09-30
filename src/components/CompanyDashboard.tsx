'use client';

import React from 'react';

export default function CompanyDashboard() {
  // Mock data for company overview
  const overallStats = {
    totalPurifiers: 1247,
    activePurifiers: 1189,
    totalAirCleaned: '12.4M L',
    regionsServed: 23
  };

  const regionalData = [
    { region: 'Central Business District', purifiers: 89, aqi: 38, status: 'Good', improvement: '+22%' },
    { region: 'Residential Area North', purifiers: 156, aqi: 45, status: 'Good', improvement: '+18%' },
    { region: 'Industrial Zone', purifiers: 234, aqi: 67, status: 'Moderate', improvement: '+12%' },
    { region: 'University Campus', purifiers: 67, aqi: 34, status: 'Good', improvement: '+25%' }
  ];

  const maintenanceAlerts = [
    { id: 1, location: 'Building A - Floor 12', issue: 'Filter replacement needed', priority: 'High' },
    { id: 2, location: 'Mall Central - Food Court', issue: 'Sensor calibration required', priority: 'Medium' },
    { id: 3, location: 'Office Complex B', issue: 'Regular maintenance due', priority: 'Low' }
  ];

  return (
    <div className="space-y-8">
      {/* Overall Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="cloud-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Purifiers</p>
              <p className="text-2xl font-bold text-blue-600">{overallStats.totalPurifiers.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="cloud-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Now</p>
              <p className="text-2xl font-bold text-green-600">{overallStats.activePurifiers.toLocaleString()}</p>
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
              <p className="text-sm text-gray-600">Total Air Cleaned</p>
              <p className="text-2xl font-bold text-purple-600">{overallStats.totalAirCleaned}</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 6.707 6.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <div className="cloud-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Regions Served</p>
              <p className="text-2xl font-bold text-orange-600">{overallStats.regionsServed}</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Regional Performance */}
      <div className="cloud-card p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Regional Performance</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Region</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Purifiers</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-900">AQI</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Status</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Improvement</th>
              </tr>
            </thead>
            <tbody>
              {regionalData.map((region, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 font-medium text-gray-900">{region.region}</td>
                  <td className="py-4 px-4 text-gray-600">{region.purifiers}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      region.aqi <= 50 
                        ? 'bg-green-100 text-green-800'
                        : region.aqi <= 100
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {region.aqi}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      region.status === 'Good'
                        ? 'bg-green-100 text-green-800'
                        : region.status === 'Moderate'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {region.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-green-600 font-medium">{region.improvement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Maintenance Alerts */}
      <div className="cloud-card p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Maintenance Alerts</h2>
        <div className="space-y-4">
          {maintenanceAlerts.map((alert) => (
            <div key={alert.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="flex items-center space-x-4">
                <div className={`w-3 h-3 rounded-full ${
                  alert.priority === 'High' 
                    ? 'bg-red-500'
                    : alert.priority === 'Medium'
                    ? 'bg-yellow-500'
                    : 'bg-green-500'
                }`}></div>
                <div>
                  <p className="font-medium text-gray-900">{alert.location}</p>
                  <p className="text-sm text-gray-600">{alert.issue}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                alert.priority === 'High'
                  ? 'bg-red-100 text-red-800'
                  : alert.priority === 'Medium'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-green-100 text-green-800'
              }`}>
                {alert.priority}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button className="cloud-card p-6 text-left hover:shadow-xl transition-all duration-300 group">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Generate Report</h3>
            <svg className="w-6 h-6 text-blue-600 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-gray-600">Create comprehensive performance reports</p>
        </button>

        <button className="cloud-card p-6 text-left hover:shadow-xl transition-all duration-300 group">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Schedule Maintenance</h3>
            <svg className="w-6 h-6 text-green-600 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-gray-600">Plan and schedule maintenance tasks</p>
        </button>

        <button className="cloud-card p-6 text-left hover:shadow-xl transition-all duration-300 group">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Deploy New Units</h3>
            <svg className="w-6 h-6 text-purple-600 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-gray-600">Plan installation of new purifiers</p>
        </button>
      </div>
    </div>
  );
}