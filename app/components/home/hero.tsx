"use client";

import React from 'react';
import { Play, ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-white pt-10 pb-20 lg:pt-10 lg:pb-10 px-6 lg:px-16">
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#2E6F40] rounded-full opacity-15 blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="reveal-item inline-flex items-center gap-2 bg-[#F4F4F1] px-4 py-2 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00674F] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00674F]"></span>
            </span>
            <p className="text-[#2D2D2D] text-[11px] font-black uppercase tracking-widest">Expert en Économie Circulaire</p>
          </div>

          <h1 className="reveal-item text-6xl md:text-8xl font-black text-[#2D2D2D] leading-[0.95] tracking-tight">
            analyser. <br />
            <span className="text-[#00674F]">Gérer .</span> <br />
            Valoriser.
          </h1>

          <p className="reveal-item text-lg text-gray-600 max-w-lg font-medium leading-relaxed">
            Bissa accompagne les entreprises dans la gestion intelligente de leurs déchets avec des solutions sur-mesure et un suivi 100% digitalisé.
          </p>

          <div className="reveal-item flex flex-wrap items-center gap-5">
            {/* BUTTON: Petrol Blue */}
            <button className="bg-[#083344] text-white px-8 py-4 rounded-full font-bold text-sm flex items-center gap-3 hover:bg-[#00674F] transition-all shadow-lg">
              Découvrir nos solutions <ArrowRight size={18} />
            </button>
            <div className="flex items-center gap-3 group cursor-pointer">
              {/* ICON: Emerald Green */}
              <div className="h-12 w-12 rounded-full bg-[#00674F] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play size={16} fill="white" className="ml-1 text-white" />
              </div>
              <span className="text-sm font-bold text-[#2D2D2D]">Voir la vidéo</span>
            </div>
          </div>

          <div className="reveal-item pt-8 flex items-center gap-12 border-t border-gray-100">
            <div>
              <span className="text-4xl font-black text-[#2D2D2D] block">6 +</span>
              <p className="text-[11px] font-bold text-gray-400 uppercase">Filières de recyclage</p>
            </div>
            <div>
              <span className="text-4xl font-black text-[#2D2D2D] block">5.7k</span>
              <p className="text-[11px] font-bold text-gray-400 uppercase">Tonnes Valorisées</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="reveal-item relative z-10">
            <div className="rounded-[40px] overflow-hidden border-[8px] border-[#F4F4F1] shadow-xl">
              <img src="truck.png" alt="Logistique" className="w-full h-[500px] object-cover" />
            </div>
            <div className="reveal-item absolute -bottom-10 -left-10 bg-white p-8 rounded-[32px] shadow-2xl border border-gray-50 max-w-[280px] hidden md:block">
              <div className="bg-[#083344] w-12 h-12 rounded-2xl flex items-center justify-center mb-4">
                <CheckCircle2 className="text-white" />
              </div>
              <h4 className="font-black text-[#2D2D2D] uppercase text-sm mb-3 tracking-tighter">Notre Accompagnement</h4>
              <ul className="space-y-2">
                {['BissaLab', 'Logistique Optimisée', 'Reporting RSE'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs font-bold text-gray-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2E6F40]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#2E6F40] rounded-full -z-10 opacity-30" />
        </div>
      </div>
    </section>
  );
};

export default Hero;