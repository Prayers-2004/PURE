'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Layout from '@/components/Layout';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'user' | 'company'>('user');
  const { login, isLoading } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password, role);
      router.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center py-12">
        <div className="cloud-card w-full max-w-md p-8 space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to access your air quality dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Role Selection */}
            <div className="flex bg-gray-100 rounded-2xl p-1">
              <button
                type="button"
                onClick={() => setRole('user')}
                className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                  role === 'user'
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Product Owner
              </button>
              <button
                type="button"
                onClick={() => setRole('company')}
                className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                  role === 'company'
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Company
              </button>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your password"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 disabled:opacity-50 flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <div className="loading-spinner w-5 h-5"></div>
                  <span>Signing In...</span>
                </>
              ) : (
                <span>Sign In</span>
              )}
            </button>
          </form>

          {/* Demo Note */}
          <div className="text-center pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Demo Mode: Enter any credentials to continue
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}