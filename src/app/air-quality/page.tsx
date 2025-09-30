'use client';

import React from 'react';
import Layout from '@/components/Layout';

export default function AirQualityPage() {
  const realTimeData = [
    { location: 'Central Park', aqi: 28, status: 'Good', pm25: 8.2, pm10: 12.5, o3: 45 },
    { location: 'Times Square', aqi: 52, status: 'Moderate', pm25: 18.5, pm10: 25.8, o3: 78 },
    { location: 'Brooklyn Bridge', aqi: 34, status: 'Good', pm25: 11.2, pm10: 16.7, o3: 52 },
    { location: 'Financial District', aqi: 41, status: 'Good', pm25: 14.8, pm10: 19.3, o3: 62 },
    { location: 'Greenwich Village', aqi: 29, status: 'Good', pm25: 9.1, pm10: 13.4, o3: 48 },
    { location: 'Midtown East', aqi: 47, status: 'Good', pm25: 16.2, pm10: 22.1, o3: 69 }
  ];

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
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Real-Time Air Quality</h1>
          <p className="text-xl text-gray-600">
            Live air quality monitoring across different locations in your city
          </p>
        </div>

        {/* AQI Scale */}
        <div className="cloud-card p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Air Quality Index (AQI) Scale</h2>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="bg-green-100 p-4 rounded-2xl text-center">
              <div className="text-lg font-bold text-green-800">0-50</div>
              <div className="text-sm text-green-600">Good</div>
            </div>
            <div className="bg-yellow-100 p-4 rounded-2xl text-center">
              <div className="text-lg font-bold text-yellow-800">51-100</div>
              <div className="text-sm text-yellow-600">Moderate</div>
            </div>
            <div className="bg-orange-100 p-4 rounded-2xl text-center">
              <div className="text-lg font-bold text-orange-800">101-150</div>
              <div className="text-sm text-orange-600">Unhealthy for Sensitive</div>
            </div>
            <div className="bg-red-100 p-4 rounded-2xl text-center">
              <div className="text-lg font-bold text-red-800">151-200</div>
              <div className="text-sm text-red-600">Unhealthy</div>
            </div>
            <div className="bg-purple-100 p-4 rounded-2xl text-center">
              <div className="text-lg font-bold text-purple-800">201-300</div>
              <div className="text-sm text-purple-600">Very Unhealthy</div>
            </div>
            <div className="bg-red-200 p-4 rounded-2xl text-center">
              <div className="text-lg font-bold text-red-900">301+</div>
              <div className="text-sm text-red-700">Hazardous</div>
            </div>
          </div>
        </div>

        {/* Real-time Data */}
        <div className="cloud-card p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Live Air Quality Data</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Location</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">AQI</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Status</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">PM2.5</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">PM10</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">O₃</th>
                </tr>
              </thead>
              <tbody>
                {realTimeData.map((location, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 font-medium text-gray-900">{location.location}</td>
                    <td className="py-4 px-4">
                      <span className={`text-2xl font-bold ${getAQIColor(location.aqi)}`}>
                        {location.aqi}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(location.status)}`}>
                        {location.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-600">{location.pm25} μg/m³</td>
                    <td className="py-4 px-4 text-gray-600">{location.pm10} μg/m³</td>
                    <td className="py-4 px-4 text-gray-600">{location.o3} ppb</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Health Recommendations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="cloud-card p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Health Recommendations</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <div className="font-medium text-gray-900">Good Air Quality (0-50)</div>
                  <div className="text-sm text-gray-600">Perfect for outdoor activities. No health concerns.</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <div>
                  <div className="font-medium text-gray-900">Moderate (51-100)</div>
                  <div className="text-sm text-gray-600">Generally acceptable, but sensitive individuals should limit prolonged outdoor exertion.</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <div className="font-medium text-gray-900">Unhealthy (101+)</div>
                  <div className="text-sm text-gray-600">Consider staying indoors or using air purifiers.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="cloud-card p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Pollutant Guide</h3>
            <div className="space-y-4">
              <div>
                <div className="font-medium text-gray-900">PM2.5</div>
                <div className="text-sm text-gray-600">Fine particles that can penetrate deep into lungs</div>
              </div>
              <div>
                <div className="font-medium text-gray-900">PM10</div>
                <div className="text-sm text-gray-600">Coarse particles from dust, pollen, and mold</div>
              </div>
              <div>
                <div className="font-medium text-gray-900">O₃ (Ozone)</div>
                <div className="text-sm text-gray-600">Ground-level ozone that can cause respiratory irritation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}