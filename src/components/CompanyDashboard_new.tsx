'use client';

import React, { useState } from 'react';

export default function CompanyDashboard() {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [timeRange, setTimeRange] = useState('today');
  const [activeTab, setActiveTab] = useState('overview');
  const [showMaintenanceModal, setShowMaintenanceModal] = useState(false);
  const [notifications, setNotifications] = useState(3);

  // Mock data for company overview
  const overallStats = {
    totalPurifiers: 1247,
    activePurifiers: 1189,
    totalAirCleaned: '12.4M L',
    regionsServed: 23,
    energySaved: '4.2 MWh',
    co2Offset: '2.1 tons'
  };

  const regionalData = [
    { region: 'Central Business District', purifiers: 89, aqi: 38, status: 'Good', improvement: '+22%', alerts: 2 },
    { region: 'Residential Area North', purifiers: 156, aqi: 45, status: 'Good', improvement: '+18%', alerts: 0 },
    { region: 'Industrial Zone', purifiers: 234, aqi: 67, status: 'Moderate', improvement: '+12%', alerts: 5 },
    { region: 'University Campus', purifiers: 67, aqi: 34, status: 'Good', improvement: '+25%', alerts: 1 },
    { region: 'Shopping District', purifiers: 98, aqi: 42, status: 'Good', improvement: '+15%', alerts: 0 },
    { region: 'Airport Area', purifiers: 145, aqi: 58, status: 'Moderate', improvement: '+8%', alerts: 3 }
  ];

  const [maintenanceAlerts, setMaintenanceAlerts] = useState([
    { id: 1, location: 'Building A - Floor 12', issue: 'Filter replacement needed', priority: 'High', time: '2 hours ago', type: 'filter' },
    { id: 2, location: 'Mall Central - Food Court', issue: 'Sensor calibration required', priority: 'Medium', time: '4 hours ago', type: 'sensor' },
    { id: 3, location: 'Office Complex B', issue: 'Regular maintenance due', priority: 'Low', time: '1 day ago', type: 'maintenance' },
    { id: 4, location: 'Hospital Wing C', issue: 'Air flow irregularity detected', priority: 'High', time: '3 hours ago', type: 'airflow' },
    { id: 5, location: 'School Building D', issue: 'Power consumption anomaly', priority: 'Medium', time: '6 hours ago', type: 'power' }
  ]);

  const performanceData = [
    { time: '00:00', efficiency: 85, airCleaned: 1200 },
    { time: '04:00', efficiency: 78, airCleaned: 980 },
    { time: '08:00', efficiency: 92, airCleaned: 1580 },
    { time: '12:00', efficiency: 88, airCleaned: 1340 },
    { time: '16:00', efficiency: 95, airCleaned: 1680 },
    { time: '20:00', efficiency: 89, airCleaned: 1420 }
  ];

  const handleRegionFilter = (region: string) => {
    setSelectedRegion(region);
  };

  const handleMaintenanceAction = (alertId: number) => {
    setMaintenanceAlerts(prev => prev.filter(alert => alert.id !== alertId));
    setNotifications(prev => prev - 1);
  };

  return (
    <div className="space-y-8">
      {/* Interactive Header with Filters */}
      <div className="cloud-card p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Company Analytics Dashboard</h2>
            <p className="text-gray-600">Real-time monitoring and management</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <select 
              value={timeRange} 
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
            >
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
            
            <select 
              value={selectedRegion} 
              onChange={(e) => handleRegionFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Regions</option>
              {regionalData.map((region, index) => (
                <option key={index} value={region.region}>{region.region}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="cloud-card p-2">
        <div className="flex space-x-1">
          {['overview', 'regions', 'maintenance', 'analytics'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {tab === 'maintenance' && notifications > 0 && (
                <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                  {notifications}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <>
          {/* Enhanced Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="cloud-card p-6 group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Purifiers</p>
                  <p className="text-3xl font-bold text-blue-600">{overallStats.totalPurifiers.toLocaleString()}</p>
                  <p className="text-sm text-green-600 mt-1">↗ +12% from last month</p>
                </div>
                <div className="p-4 bg-blue-100 rounded-full">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="cloud-card p-6 group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Now</p>
                  <p className="text-3xl font-bold text-green-600">{overallStats.activePurifiers.toLocaleString()}</p>
                  <p className="text-sm text-blue-600 mt-1">{((overallStats.activePurifiers / overallStats.totalPurifiers) * 100).toFixed(1)}% operational</p>
                </div>
                <div className="p-4 bg-green-100 rounded-full">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="cloud-card p-6 group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Air Cleaned Today</p>
                  <p className="text-3xl font-bold text-purple-600">{overallStats.totalAirCleaned}</p>
                  <p className="text-sm text-green-600 mt-1">↗ +8% from yesterday</p>
                </div>
                <div className="p-4 bg-purple-100 rounded-full">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 6.707 6.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="cloud-card p-6 group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Energy Saved</p>
                  <p className="text-3xl font-bold text-orange-600">{overallStats.energySaved}</p>
                  <p className="text-sm text-green-600 mt-1">↗ Efficient operations</p>
                </div>
                <div className="p-4 bg-orange-100 rounded-full">
                  <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="cloud-card p-6 group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">CO₂ Offset</p>
                  <p className="text-3xl font-bold text-teal-600">{overallStats.co2Offset}</p>
                  <p className="text-sm text-green-600 mt-1">Environmental impact</p>
                </div>
                <div className="p-4 bg-teal-100 rounded-full">
                  <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="cloud-card p-6 group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Regions Served</p>
                  <p className="text-3xl font-bold text-indigo-600">{overallStats.regionsServed}</p>
                  <p className="text-sm text-blue-600 mt-1">Expanding coverage</p>
                </div>
                <div className="p-4 bg-indigo-100 rounded-full">
                  <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Chart */}
          <div className="cloud-card p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Today&apos;s Performance</h3>
            <div className="grid grid-cols-6 gap-4">
              {performanceData.map((data, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 rounded-lg p-4 mb-2">
                    <div 
                      className="bg-blue-500 rounded-md transition-all duration-500 mx-auto"
                      style={{
                        height: `${(data.efficiency / 100) * 60}px`,
                        width: '20px'
                      }}
                    ></div>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{data.efficiency}%</p>
                  <p className="text-xs text-gray-600">{data.time}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Regions Tab */}
      {activeTab === 'regions' && (
        <div className="cloud-card p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Regional Performance</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Region</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Purifiers</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">AQI</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Status</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Improvement</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Alerts</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {regionalData
                  .filter(region => selectedRegion === 'all' || region.region === selectedRegion)
                  .map((region, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
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
                    <td className="py-4 px-4">
                      {region.alerts > 0 ? (
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-medium">
                          {region.alerts}
                        </span>
                      ) : (
                        <span className="text-green-600">None</span>
                      )}
                    </td>
                    <td className="py-4 px-4">
                      <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Maintenance Tab */}
      {activeTab === 'maintenance' && (
        <div className="space-y-6">
          <div className="cloud-card p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Maintenance Alerts</h2>
              <button 
                onClick={() => setShowMaintenanceModal(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-200"
              >
                Schedule Maintenance
              </button>
            </div>
            
            <div className="space-y-4">
              {maintenanceAlerts.map((alert) => (
                <div key={alert.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-md transition-all duration-200">
                  <div className="flex items-center space-x-4">
                    <div className={`w-4 h-4 rounded-full ${
                      alert.priority === 'High' 
                        ? 'bg-red-500'
                        : alert.priority === 'Medium'
                        ? 'bg-yellow-500'
                        : 'bg-green-500'
                    }`}></div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <p className="font-medium text-gray-900">{alert.location}</p>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          alert.type === 'filter' ? 'bg-blue-100 text-blue-800' :
                          alert.type === 'sensor' ? 'bg-purple-100 text-purple-800' :
                          alert.type === 'maintenance' ? 'bg-green-100 text-green-800' :
                          alert.type === 'airflow' ? 'bg-orange-100 text-orange-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {alert.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{alert.issue}</p>
                      <p className="text-xs text-gray-500">{alert.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      alert.priority === 'High'
                        ? 'bg-red-100 text-red-800'
                        : alert.priority === 'Medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {alert.priority}
                    </span>
                    <button 
                      onClick={() => handleMaintenanceAction(alert.id)}
                      className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors duration-200"
                    >
                      Resolve
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Analytics Tab */}
      {activeTab === 'analytics' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="cloud-card p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Efficiency Trends</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Overall System Efficiency</span>
                  <span className="text-sm font-medium text-green-600">92.4% ↗</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '92.4%'}}></div>
                </div>
              </div>
            </div>

            <div className="cloud-card p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Cost Savings</h3>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">$45,230</p>
                <p className="text-sm text-gray-600">Saved this month</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Maintenance Modal */}
      {showMaintenanceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="cloud-card p-8 m-4 max-w-md w-full">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Schedule Maintenance</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Location"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
              />
              <select className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500">
                <option>Maintenance Type</option>
                <option>Filter Replacement</option>
                <option>Sensor Calibration</option>
                <option>General Maintenance</option>
                <option>Emergency Repair</option>
              </select>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex space-x-3">
                <button 
                  onClick={() => setShowMaintenanceModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => setShowMaintenanceModal(false)}
                  className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
                >
                  Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}