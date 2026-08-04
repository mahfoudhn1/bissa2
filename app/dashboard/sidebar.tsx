"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  Truck, 
  Award, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  ChevronRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { logout } from '../../redux/authSlice';
import type { AppDispatch } from '../../redux/store';

const Sidebar = ({ activeView, setActiveView }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const menuItems = [
    { id: 'dashboard', icon: <LayoutDashboard size={20} />, label: 'Tableau de Bord' },
    { id: 'collectes', icon: <Truck size={20} />, label: 'Mes Collectes' },
    { id: 'points', icon: <Award size={20} />, label: 'Impact RSE' },
    { id: 'settings', icon: <Settings size={20} />, label: 'Paramètres' },
    { id: 'home', icon: <LayoutDashboard size={20} />, label: 'Accueil', href: '/' },
  ];

  const handleNavClick = (id: string) => {
    setActiveView(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* 1. MOBILE TRIGGER: Petrol Blue background */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-6 right-6 z-[60] bg-[#083344] text-white p-3 rounded-2xl shadow-2xl border border-white/10"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* 2. OVERLAY */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-[#083344]/80 backdrop-blur-md z-[40] lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 3. SIDEBAR: Architectural & Technical Design */}
      <aside className={`
        fixed left-0 top-0 h-screen bg-[#083344] border-r border-white/5 flex flex-col z-[50] transition-all duration-500 ease-in-out
        w-72
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} 
      `}>
        
        {/* Brand Identity Section */}
        <div className="p-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#00674F] rounded-xl flex items-center justify-center shadow-lg shadow-[#00674F]/20">
               <Zap size={16} className="text-white" fill="white" />
            </div>
            <span className="text-2xl font-black text-white uppercase tracking-tighter">
              Bissa<span className="text-[#00674F]">Link.</span>
            </span>
          </div>

        </div>

        {/* Navigation Items */}
        <nav className="flex-grow px-4 mt-8 space-y-2">
          {menuItems.map((item) => {
            const isActive = activeView === item.id;
            const buttonClass = `w-full flex items-center justify-between px-5 py-4 rounded-[20px] transition-all duration-300 group ${isActive ? 'bg-[#00674F] text-white shadow-xl shadow-[#00674F]/10' : 'text-white/50 hover:bg-white/5 hover:text-white'}`;

            if (item.href) {
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => handleNavClick(item.id)}
                  className={buttonClass}
                >
                  <div className="flex items-center gap-4">
                    <span className={`${isActive ? 'text-white' : 'text-[#00674F] group-hover:text-white'} transition-colors`}>
                      {item.icon}
                    </span>
                    <span className="font-black uppercase text-[11px] tracking-widest">{item.label}</span>
                  </div>
                  {isActive && <ChevronRight size={14} className="text-white/50" />}
                </Link>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={buttonClass}
              >
                <div className="flex items-center gap-4">
                  <span className={`${isActive ? 'text-white' : 'text-[#00674F] group-hover:text-white'} transition-colors`}>
                    {item.icon}
                  </span>
                  <span className="font-black uppercase text-[11px] tracking-widest">{item.label}</span>
                </div>
                {isActive && <ChevronRight size={14} className="text-white/50" />}
              </button>
            );
          })}
        </nav>

        {/* Upgrade / Status Card (Shows expert status) */}
        <div className="px-6 mb-6">
          <div className="bg-white/5 border border-white/10 rounded-[32px] p-6">
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck size={18} className="text-[#00674F]" />
              <span className="text-[10px] font-black text-white uppercase tracking-widest">Plan Expert</span>
            </div>
            <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
               <div className="bg-[#00674F] h-full w-[75%] rounded-full" />
            </div>
            <p className="text-[9px] text-white/40 font-bold uppercase mt-3 tracking-tight">
              Prochaine collecte : 14 Jan.
            </p>
          </div>
        </div>

        {/* Logout Section */}
        <div className="p-6 border-t border-white/5 bg-[#062a38]">
          <button
            onClick={() => {
              dispatch(logout());
              router.push('/login');
            }}
            className="flex items-center gap-4 px-5 py-3 text-white/40 hover:text-red-400 transition-all font-black uppercase text-[10px] tracking-[0.2em] w-full"
          >
            <LogOut size={18} />
            Quitter BissaLink
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
