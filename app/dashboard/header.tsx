"use client";

import React from 'react';
import { Bell, Search, ChevronDown, Activity } from 'lucide-react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';

const DashboardHeader = () => {
  const userName = useSelector((state: RootState) => state.auth.user?.name ?? 'Utilisateur Bissa');
  return (
    <header className="h-24 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-10 sticky top-0 z-30 transition-all">
      
      {/* Search Bar or Breadcrumbs */}
      <div className="hidden md:flex items-center gap-8">
        <div>
          <h2 className="text-[#083344] font-black uppercase text-xl tracking-tighter leading-none">
            Espace <span className="text-gray-300">Client</span>
          </h2>
          <div className="flex items-center gap-2 mt-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00674F] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00674F]"></span>
            </span>
            <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">Synchronisation Directe</p>
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="relative group ml-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#00674F] transition-colors" size={16} />
          <input 
            type="text" 
            placeholder="Rechercher une collecte, un certificat..."
            className="bg-[#F4F4F1] border-none rounded-2xl py-3 pl-12 pr-6 text-xs font-bold text-[#083344] w-80 focus:ring-2 focus:ring-[#00674F]/20 transition-all outline-none"
          />
        </div>
      </div>
      
      {/* Profile & Notifications */}
      <div className="flex items-center gap-8">
        {/* Notifications Button */}
        <button className="relative p-3 bg-white border border-gray-100 rounded-2xl text-gray-400 hover:text-[#083344] hover:shadow-lg transition-all">
          <Bell size={20} />
          <span className="absolute top-3 right-3 w-2 h-2 bg-[#00674F] rounded-full border-2 border-white"></span>
        </button>

        {/* Vertical Divider */}
        <div className="w-[1px] h-10 bg-gray-100" />

        {/* User Profile */}
        <div className="flex items-center gap-5 group cursor-pointer">
          <div className="text-right hidden sm:block">
            <p className="text-[#083344] font-black text-sm uppercase tracking-tight group-hover:text-[#00674F] transition-colors">{userName}</p>
            <div className="flex items-center justify-end gap-2">
               <Activity size={10} className="text-[#00674F]" />
               <p className="text-[#00674F] text-[9px] font-black uppercase tracking-widest">Compte Expert</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-14 h-14 bg-gradient-to-br from-[#083344] to-[#062a38] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-[#083344]/10 border-b-4 border-[#00674F] overflow-hidden">
                <span className="font-black text-lg tracking-tighter">IA</span>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-lg border border-gray-100 shadow-sm">
                <ChevronDown size={12} className="text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;