'use client';

import React, { useState } from 'react';

export default function CompanyDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [showMaintenanceModal, setShowMaintenanceModal] = useState(false);
  const [selectedAlert, setSelectedAlert] = useState<number | null>(null);

  // Mock data
  const overviewData = {
    totalPurifiers: 1247,
    activePurifiers: 1189,
    maintenanceRequired: 23,
    totalAirCleaned: '847.2M L',
    avgEfficiency: '94.2%',
    costSavings: '$127,450'
  };

  const regionalData = [
    { region: 'North District', purifiers: 234, active: 221, efficiency: 95.2, alerts: 2 },
    { region: 'South District', purifiers: 189, active: 185, efficiency: 97.8, alerts: 0 },
    { region: 'East District', purifiers: 298, active: 278, efficiency: 93.3, alerts: 5 },
    { region: 'West District', purifiers: 156, active: 148, efficiency: 94.9, alerts: 1 },
    { region: 'Central District', purifiers: 370, active: 357, efficiency: 96.5, alerts: 3 }
  ];

  const maintenanceAlerts = [
    { id: 1, device: 'AP-North-001', issue: 'Filter replacement needed', priority: 'High', location: 'Building A', time: '2 hours ago' },
    { id: 2, device: 'AP-East-045', issue: 'Performance degradation', priority: 'Medium', location: 'Office Complex', time: '5 hours ago' },
    { id: 3, device: 'AP-Central-123', issue: 'Sensor calibration required', priority: 'Low', location: 'Retail Center', time: '1 day ago' }
  ];

  const analyticsData = [
    { metric: 'Energy Consumption', value: '2,847 kWh', change: '-12%', trend: 'down' },
    { metric: 'Cost per Liter', value: '$0.0034', change: '-8%', trend: 'down' },
    { metric: 'Customer Satisfaction', value: '4.8/5', change: '+5%', trend: 'up' },
    { metric: 'Network Uptime', value: '99.7%', change: '+0.3%', trend: 'up' }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? '📈' : '📉';
  };

  const handleResolveAlert = (alertId: number) => {
    setSelectedAlert(alertId);
    setTimeout(() => setSelectedAlert(null), 2000);
  };

  const filteredRegionalData = selectedRegion === 'all' 
    ? regionalData 
    : regionalData.filter(region => region.region.toLowerCase().includes(selectedRegion.toLowerCase()));

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Company Dashboard</h2>
          <p className="text-gray-600">Comprehensive air purification network management</p>
        </div>
        <button
          onClick={() => setShowMaintenanceModal(true)}
          className="px-6 py-3 bg-blue-600 text-white rounded-2xl font-semibold hover:bg-blue-700 transition-colors"
        >
          Schedule Maintenance
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {['overview', 'regional', 'maintenance', 'analytics'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="cloud-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Purifiers</p>
                  <p className="text-3xl font-bold text-gray-900">{overviewData.totalPurifiers}</p>
                </div>
                <div className="text-3xl">🏭</div>
              </div>
            </div>

            <div className="cloud-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Now</p>
                  <p className="text-3xl font-bold text-green-600">{overviewData.activePurifiers}</p>
                </div>
                <div className="text-3xl">✅</div>
              </div>
            </div>

            <div className="cloud-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Maintenance Required</p>
                  <p className="text-3xl font-bold text-orange-600">{overviewData.maintenanceRequired}</p>
                </div>
                <div className="text-3xl">⚠️</div>
              </div>
            </div>

            <div className="cloud-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Air Cleaned (Total)</p>
                  <p className="text-3xl font-bold text-blue-600">{overviewData.totalAirCleaned}</p>
                </div>
                <div className="text-3xl">💨</div>
              </div>
            </div>

            <div className="cloud-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Efficiency</p>
                  <p className="text-3xl font-bold text-purple-600">{overviewData.avgEfficiency}</p>
                </div>
                <div className="text-3xl">⚡</div>
              </div>
            </div>

            <div className="cloud-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Cost Savings</p>
                  <p className="text-3xl font-bold text-green-600">{overviewData.costSavings}</p>
                </div>
                <div className="text-3xl">💰</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Regional Tab */}
      {activeTab === 'regional' && (
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium text-gray-700">Filter by Region:</label>
            <select 
              value={selectedRegion} 
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Regions</option>
              <option value="north">North District</option>
              <option value="south">South District</option>
              <option value="east">East District</option>
              <option value="west">West District</option>
              <option value="central">Central District</option>
            </select>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredRegionalData.map((region, index) => (
              <div key={index} className="cloud-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{region.region}</h3>
                  {region.alerts > 0 && (
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                      {region.alerts} alert{region.alerts > 1 ? 's' : ''}
                    </span>
                  )}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Total Purifiers</p>
                    <p className="text-2xl font-bold text-gray-900">{region.purifiers}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Active</p>
                    <p className="text-2xl font-bold text-green-600">{region.active}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-gray-600">Efficiency</p>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${region.efficiency}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium">{region.efficiency}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Maintenance Tab */}
      {activeTab === 'maintenance' && (
        <div className="space-y-6">
          <div className="cloud-card p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Maintenance Alerts</h3>
            <div className="space-y-4">
              {maintenanceAlerts.map((alert) => (
                <div key={alert.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="font-semibold text-gray-900">{alert.device}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(alert.priority)}`}>
                          {alert.priority}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-1">{alert.issue}</p>
                      <p className="text-gray-500 text-xs">📍 {alert.location} • 🕒 {alert.time}</p>
                    </div>
                    <button
                      onClick={() => handleResolveAlert(alert.id)}
                      disabled={selectedAlert === alert.id}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedAlert === alert.id
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      {selectedAlert === alert.id ? '✓ Resolved' : 'Resolve'}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {analyticsData.map((item, index) => (
              <div key={index} className="cloud-card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{item.metric}</p>
                    <p className="text-2xl font-bold text-gray-900">{item.value}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <span className="text-lg">{getTrendIcon(item.trend)}</span>
                      <span className={`text-sm font-medium ${item.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {item.change}
                      </span>
                      <span className="text-xs text-gray-500">vs last month</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cloud-card p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">Peak Hours</div>
                <div className="text-sm text-gray-600">2 PM - 6 PM</div>
                <div className="text-xs text-gray-500 mt-1">Highest purifier usage</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">Best Region</div>
                <div className="text-sm text-gray-600">South District</div>
                <div className="text-xs text-gray-500 mt-1">97.8% efficiency rate</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-2">Maintenance</div>
                <div className="text-sm text-gray-600">Every 90 days</div>
                <div className="text-xs text-gray-500 mt-1">Optimal service interval</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Maintenance Modal */}
      {showMaintenanceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Schedule Maintenance</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Device ID</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., AP-North-001"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Maintenance Type</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Filter Replacement</option>
                  <option>Sensor Calibration</option>
                  <option>Performance Check</option>
                  <option>Full Service</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
            </div>
            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowMaintenanceModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowMaintenanceModal(false)}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Schedule
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <button className="cloud-card p-4 text-left hover:shadow-lg transition-shadow">
          <div className="text-2xl mb-2">📊</div>
          <div className="font-semibold text-gray-900">Generate Report</div>
          <p className="text-gray-600">Create comprehensive analytics report</p>
        </button>
        
        <button className="cloud-card p-4 text-left hover:shadow-lg transition-shadow">
          <div className="text-2xl mb-2">🔧</div>
          <div className="font-semibold text-gray-900">Bulk Maintenance</div>
          <p className="text-gray-600">Schedule maintenance for multiple units</p>
        </button>
        
        <button className="cloud-card p-4 text-left hover:shadow-lg transition-shadow">
          <div className="text-2xl mb-2">📱</div>
          <div className="font-semibold text-gray-900">Mobile Alerts</div>
          <p className="text-gray-600">Configure mobile notification settings</p>
        </button>
        
        <button className="cloud-card p-4 text-left hover:shadow-lg transition-shadow">
          <div className="text-2xl mb-2">🏗️</div>
          <div className="font-semibold text-gray-900">Expansion Planning</div>
          <p className="text-gray-600">Plan installation of new purifiers</p>
        </button>
      </div>
    </div>
  );
}