"use client";

import React from 'react';
import { Zap, Recycle, Leaf, TrendingUp, ArrowUpRight, MoreHorizontal, FileCheck } from 'lucide-react';
import { dashboardCards, recentCollections } from '../lib/mockData';

const iconMap: Record<string, React.ReactElement> = {
  zap: <Zap />,
  recycle: <Recycle />,
  leaf: <Leaf />,
  trendingUp: <TrendingUp />,
};

const StatCard = ({ label, value, unit, icon, trend, isPositive }: any) => (
  <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
    <div className="flex justify-between items-start mb-8">
      <div className="w-12 h-12 rounded-2xl bg-[#F4F4F1] text-[#083344] flex items-center justify-center group-hover:bg-[#00674F] group-hover:text-white transition-all duration-300">
        {React.cloneElement(icon, { size: 24 })}
      </div>
      <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black tracking-tighter ${isPositive ? 'bg-[#00674F]/10 text-[#00674F]' : 'bg-gray-100 text-gray-400'}`}>
        <ArrowUpRight size={12} />
        {trend}
      </div>
    </div>

    <div>
      <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{label}</p>
      <div className="flex items-baseline gap-2">
        <span className="text-4xl font-black text-[#083344] tracking-tighter">{value}</span>
        <span className="text-xs font-black text-gray-300 uppercase">{unit}</span>
      </div>
    </div>
    
    {/* Subtle architectural accent */}
    <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#F4F4F1] rounded-tl-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
  </div>
);

const Overview = () => {
  return (
    <div className="p-10 space-y-10">
      {/* 1. KEY PERFORMANCE INDICATORS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardCards.map((card) => (
          <StatCard
            key={card.label}
            label={card.label}
            value={card.value}
            unit={card.unit}
            icon={iconMap[card.icon] ?? <Zap />}
            trend={card.trend}
            isPositive={card.isPositive}
          />
        ))}
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* 2. TRANSACTIONAL LEDGER (Recent Collections) */}
        <div className="lg:col-span-8 bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden flex flex-col">
          <div className="p-8 border-b border-gray-50 flex justify-between items-center">
            <div>
              <h3 className="text-[#083344] font-black uppercase tracking-tighter text-lg">Activités Récentes</h3>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Flux de matières secondaires</p>
            </div>
            <button className="p-2 hover:bg-[#F4F4F1] rounded-xl transition-colors">
              <MoreHorizontal className="text-gray-400" />
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#F4F4F1]/50 text-[10px] font-black uppercase tracking-widest text-gray-400">
                  <th className="px-8 py-5">Identifiant / Date</th>
                  <th className="px-8 py-5">Nature du Flux</th>
                  <th className="px-8 py-5">Masse Net</th>
                  <th className="px-8 py-5">Statut Logistique</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {recentCollections.map((row, i) => (
                  <tr key={i} className="group hover:bg-[#F4F4F1]/30 transition-colors">
                    <td className="px-8 py-6">
                      <p className="font-black text-[#083344] text-xs uppercase">{row.id}</p>
                      <p className="text-[10px] text-gray-400 font-bold">{row.date}</p>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#00674F]" />
                        <span className="text-sm font-bold text-[#083344] uppercase tracking-tight">{row.type}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-sm font-black text-[#083344]">{row.weight}</td>
                    <td className="px-8 py-6">
                      <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${row.color}`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 bg-gray-50/50 mt-auto text-center">
             <button className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00674F] hover:tracking-[0.3em] transition-all">Télécharger le rapport mensuel (PDF)</button>
          </div>
        </div>

        {/* 3. PERFORMANCE & GOALS (Expert Card) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#083344] rounded-[40px] p-10 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-8">
                <FileCheck className="text-[#00674F]" size={20} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00674F]">Certification RSE</span>
              </div>
              
              <h3 className="text-3xl font-black uppercase tracking-tighter leading-none mb-4">
                Objectif <br /><span className="text-[#00674F]">Circularité</span>
              </h3>
              
              <div className="mt-10">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-5xl font-black tracking-tighter">85%</span>
                  <span className="text-[10px] font-bold text-white/40 uppercase">Niveau Expert</span>
                </div>
                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#00674F] w-[85%] rounded-full shadow-[0_0_20px_rgba(0,103,127,0.5)]" />
                </div>
              </div>

              <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
                <p className="text-[10px] font-black text-[#00674F] uppercase tracking-widest mb-2">Prochaine Étape</p>
                <p className="text-sm font-bold leading-snug">Obtention du label "Site Industriel Propre"</p>
                <p className="text-[10px] text-white/30 font-medium mt-2 italic">+1,200 pts bonus à l'audit BissaLab.</p>
              </div>
            </div>
            
            {/* Background pattern */}
            <Recycle size={280} className="absolute -bottom-20 -right-20 text-white opacity-[0.03] -rotate-12" />
          </div>

          <div className="bg-[#F4F4F1] p-8 rounded-[40px] flex items-center justify-between group cursor-pointer border border-transparent hover:border-[#00674F] transition-all">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Support Technique</p>
              <h4 className="font-black text-[#083344] uppercase tracking-tighter">Besoins d'expertise ?</h4>
            </div>
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#083344] group-hover:bg-[#00674F] group-hover:text-white transition-all">
              <ArrowUpRight size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;