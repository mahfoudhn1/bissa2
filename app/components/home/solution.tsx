"use client";

import React from 'react';
import { Settings, Users, Truck, RotateCcw, BarChart3, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const SolutionsSection = () => {
  const solutions = [
    {
      id: '01',
      title: 'Diagnostic & Ingénierie',
      desc: 'Audit technique complet et analyse de gisement par BissaLab.',
      icon: <Settings size={28} />,
      color: 'bg-[#F4F4F1]'
    },
    {
      id: '02',
      title: 'Formation',
      desc: 'Instaurer une culture du tri sélectif auprès de vos collaborateurs.',
      icon: <Users size={28} />,
      color: 'bg-white'
    },
    {
      id: '03',
      title: 'Collecte & Logistique',
      desc: 'Évacuation optimisée par notre propre flotte motorisée.',
      icon: <Truck size={28} />,
      color: 'bg-[#F4F4F1]'
    },
    {
      id: '04',
      title: 'Valorisation Industrielle',
      desc: 'Transformation des plastiques en ressources via BissaCycle.',
      icon: <RotateCcw size={28} />,
      color: 'bg-white'
    },
    {
      id: '05',
      title: 'Traçabilité Dynamique',
      desc: 'Contrôle total en temps réel grâce au service BissaLink.',
      icon: <BarChart3 size={28} />,
      color: 'bg-[#2E6F40]' // Keep Forest Green brand signature
    },
    {
      id: '06',
      title: 'Certification & RSE',
      desc: 'Certificats annuels et calcul d’impact CO2 pour votre image.',
      icon: <ShieldCheck size={28} />,
      color: 'bg-white'
    },
  ];

  return (
    <section className="bg-white py-24 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Readability preserved with Petrol/Emerald accents */}
        <div className="reveal-stagger flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1.5 bg-[#00674F] rounded-full"></div> {/* Emerald */}
              <span className="text-[#2D2D2D] font-black uppercase tracking-[0.2em] text-[11px]">
                Notre Savoir-Faire
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-[#2D2D2D] tracking-tighter uppercase leading-[0.9]">
              Un Accompagnement <br />
              <span className="text-gray-300">Bout en Bout</span>
            </h2>
          </div>
          <Link 
            href="/solutions" 
            className="inline-flex items-center gap-4 bg-[#083344] text-white hover:bg-[#00674F] px-10 py-5 rounded-full transition-all duration-300 shadow-lg group"
          >
            <span className="font-black uppercase tracking-widest text-xs">Découvrir le parcours</span>
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* Solutions Grid */}
        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item) => (
            <div 
              key={item.id} 
              className={`${item.color} p-10 rounded-[40px] border border-gray-100 group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col`}
            >
              <div className="flex justify-between items-start mb-12">
                <div className={`w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm transition-all duration-500 group-hover:bg-[#083344] group-hover:text-white ${item.color === 'bg-[#2E6F40]' ? 'text-[#2E6F40]' : 'text-[#2D2D2D]'}`}>
                  {item.icon}
                </div>
                <span className={`text-sm font-black transition-opacity ${item.color === 'bg-[#2E6F40]' ? 'text-white/40' : 'text-[#2D2D2D] opacity-20'} group-hover:opacity-100`}>
                  {item.id}
                </span>
              </div>
              
              <div className="flex-grow">
                <h3 className={`text-2xl font-black uppercase tracking-tighter mb-4 ${item.color === 'bg-[#2E6F40]' ? 'text-white' : 'text-[#2D2D2D]'}`}>
                  {item.title}
                </h3>
                <p className={`font-medium leading-relaxed text-sm ${item.color === 'bg-[#2E6F40]' ? 'text-white/80' : 'text-gray-500'}`}>
                  {item.desc}
                </p>
              </div>

              {/* Process indicator - Emerald for white cards, White for green cards */}
              <div className="mt-8 flex items-center gap-2">
                <div className={`h-1 w-8 rounded-full ${item.color === 'bg-[#2E6F40]' ? 'bg-white' : 'bg-[#00674F]'}`}></div>
                <div className={`h-1 w-2 rounded-full ${item.color === 'bg-[#2E6F40]' ? 'bg-white/30' : 'bg-gray-200'}`}></div>
                <div className={`h-1 w-2 rounded-full ${item.color === 'bg-[#2E6F40]' ? 'bg-white/30' : 'bg-gray-200'}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;