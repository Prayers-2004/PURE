'use client';

import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Layout from '@/components/Layout';
import UserDashboard from '@/components/UserDashboard';
import CompanyDashboard from '@/components/CompanyDashboard';

export default function DashboardPage() {
  const { user } = useAuth();

  if (!user) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="cloud-card p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
            <p className="text-gray-600 mb-6">Please log in to view your dashboard</p>
            <a
              href="/login"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-200"
            >
              Go to Login
            </a>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-shadow">
            {user.role === 'company' ? 'Company Dashboard' : 'My Air Quality Dashboard'}
          </h1>
          <p className="text-xl text-gray-600">
            {user.role === 'company' 
              ? 'Monitor all purifiers and air quality across regions'
              : 'Track your air purifier performance and air quality data'
            }
          </p>
        </div>

        {user.role === 'company' ? <CompanyDashboard /> : <UserDashboard />}
      </div>
    </Layout>
  );
}