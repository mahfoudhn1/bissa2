"use client";
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Sidebar from './sidebar';
import DashboardHeader from './header';
import Overview from './overview';
import type { RootState } from '../../redux/store';

export default function UserDashboard() {
  // 1. Auth guard and state check
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const router = useRouter();
  const [activeView, setActiveView] = useState('dashboard');

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace('/login');
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) {
    return <div className="min-h-screen bg-[#F8F9FA]" />;
  }

  // 2. Fonction de rendu conditionnel
  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <Overview />;
      case 'collectes':
        return <div className="p-10 font-black italic uppercase text-[#0B1C14] text-4xl">Suivi des Collectes en cours...</div>;
      case 'points':
        return <div className="p-10 font-black italic uppercase text-[#FF5C28] text-4xl">Détail de vos points Bissa</div>;
      case 'settings':
        return <div className="p-10 font-black italic uppercase text-gray-400 text-4xl">Paramètres du compte</div>;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex">
      {/* 3. On passe l'état et la fonction au Sidebar */}
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      
      <main className="flex-grow lg:ml-64 ml-0">
        <DashboardHeader />
        
        {/* Contenu dynamique avec une petite animation de transition */}
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}