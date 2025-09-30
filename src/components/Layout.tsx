'use client';

import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { user } = useAuth();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className={`${user ? 'pt-32' : 'pt-40'} px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}