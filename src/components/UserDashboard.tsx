'use client';

import React, { useState } from 'react';

export default function UserDashboard() {
  const [selectedPurifier, setSelectedPurifier] = useState<number | null>(null);
  const [timeRange, setTimeRange] = useState('today');
  const [showSettings, setShowSettings] = useState(false);
  const [autoMode, setAutoMode] = useState(true);

  // Mock data for user's purifiers with enhanced details
  const [purifiers, setPurifiers] = useState([
    {
      id: 1,
      name: 'Living Room AirPure Pro',
      status: 'Active',
      airCleaned: '2,340L',
      filterLife: 85,
      lastActive: '2 minutes ago',
      powerConsumption: 45,
      fanSpeed: 'Auto',
      mode: 'Smart',
      room: 'Living Room',
      temperature: 22,
      humidity: 45,
      noiseLevel: 32
    },
    {
      id: 2,
      name: 'Bedroom AirPure Mini',
      status: 'Active',
      airCleaned: '1,650L',
      filterLife: 72,
      lastActive: '5 minutes ago',
      powerConsumption: 28,
      fanSpeed: 'Low',
      mode: 'Sleep',
      room: 'Bedroom',
      temperature: 20,
      humidity: 50,
      noiseLevel: 18
    },
    {
      id: 3,
      name: 'Office AirPure Compact',
      status: 'Standby',
      airCleaned: '890L',
      filterLife: 60,
      lastActive: '1 hour ago',
      powerConsumption: 0,
      fanSpeed: 'Off',
      mode: 'Manual',
      room: 'Office',
      temperature: 24,
      humidity: 42,
      noiseLevel: 0
    }
  ]);

  const todayStats = {
    totalAirCleaned: '4,880L',
    averageAQI: 42,
    energyUsed: '1.8 kWh',
    co2Reduced: '18.3 kg',
    hoursActive: 18,
    filterEfficiency: 89
  };

  const togglePurifier = (id: number) => {
    setPurifiers(prev => prev.map(purifier => 
      purifier.id === id 
        ? { ...purifier, status: purifier.status === 'Active' ? 'Standby' : 'Active' }
        : purifier
    ));
  };

  const changeFanSpeed = (id: number, speed: string) => {
    setPurifiers(prev => prev.map(purifier => 
      purifier.id === id ? { ...purifier, fanSpeed: speed } : purifier
    ));
  };

  return (
    <div className="space-y-8">
      {/* Interactive Header */}
      <div className="cloud-card p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">My Air Quality Dashboard</h2>
            <p className="text-gray-600">Monitor and control your air purifiers</p>
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
            </select>
            
            <button
              onClick={() => setShowSettings(true)}
              className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-200"
            >
              Settings
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="cloud-card p-6 group hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Air Cleaned</p>
              <p className="text-3xl font-bold text-blue-600">{todayStats.totalAirCleaned}</p>
              <p className="text-sm text-green-600 mt-1">↗ +12% from yesterday</p>
            </div>
            <div className="p-4 bg-blue-100 rounded-full">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 6.707 6.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <div className="cloud-card p-6 group hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Average AQI</p>
              <p className="text-3xl font-bold text-green-600">{todayStats.averageAQI}</p>
              <p className="text-sm text-blue-600 mt-1">Excellent quality</p>
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
              <p className="text-sm text-gray-600">Energy Used</p>
              <p className="text-3xl font-bold text-orange-600">{todayStats.energyUsed}</p>
              <p className="text-sm text-green-600 mt-1">Efficient usage</p>
            </div>
            <div className="p-4 bg-orange-100 rounded-full">
              <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Purifier Controls */}
      <div className="cloud-card p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Air Purifiers</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {purifiers.map((purifier) => (
            <div 
              key={purifier.id} 
              className={`border-2 rounded-2xl p-6 transition-all duration-300 cursor-pointer ${
                selectedPurifier === purifier.id 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 bg-gray-50 hover:border-blue-300'
              }`}
              onClick={() => setSelectedPurifier(selectedPurifier === purifier.id ? null : purifier.id)}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{purifier.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    purifier.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {purifier.status}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePurifier(purifier.id);
                    }}
                    className={`p-2 rounded-full transition-colors duration-200 ${
                      purifier.status === 'Active'
                        ? 'bg-green-500 hover:bg-green-600 text-white'
                        : 'bg-gray-300 hover:bg-gray-400 text-gray-600'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Air Cleaned</span>
                  <p className="font-medium text-gray-900">{purifier.airCleaned}</p>
                </div>
                <div>
                  <span className="text-gray-600">Mode</span>
                  <p className="font-medium text-gray-900">{purifier.mode}</p>
                </div>
                <div>
                  <span className="text-gray-600">Filter Life</span>
                  <p className="font-medium text-gray-900">{purifier.filterLife}%</p>
                </div>
                <div>
                  <span className="text-gray-600">Power</span>
                  <p className="font-medium text-gray-900">{purifier.powerConsumption}W</p>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${purifier.filterLife}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500">Last active: {purifier.lastActive}</p>
              </div>

              {/* Expanded Controls */}
              {selectedPurifier === purifier.id && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Fan Speed</label>
                      <div className="flex space-x-2">
                        {['Low', 'Medium', 'High', 'Auto'].map((speed) => (
                          <button
                            key={speed}
                            onClick={(e) => {
                              e.stopPropagation();
                              changeFanSpeed(purifier.id, speed);
                            }}
                            className={`px-3 py-1 rounded-lg text-sm transition-colors duration-200 ${
                              purifier.fanSpeed === speed
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                          >
                            {speed}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-sm text-gray-600">Temperature</p>
                        <p className="text-lg font-semibold text-blue-600">{purifier.temperature}°C</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Humidity</p>
                        <p className="text-lg font-semibold text-green-600">{purifier.humidity}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Noise</p>
                        <p className="text-lg font-semibold text-orange-600">{purifier.noiseLevel}dB</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="cloud-card p-8 m-4 max-w-md w-full">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Auto Mode</span>
                <button
                  onClick={() => setAutoMode(!autoMode)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    autoMode ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      autoMode ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              
              <div className="flex space-x-3 pt-4">
                <button 
                  onClick={() => setShowSettings(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => setShowSettings(false)}
                  className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}