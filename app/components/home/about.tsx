"use client";

import React from 'react';
import Link from 'next/link';
import { Beaker, Globe, Truck, CheckCircle2, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const pillars = [
    { id: '01', title: 'BissaLab', subtitle: 'Expertise Homologuée', desc: "Bureau d’études agréé par le Ministère de l’Environnement.", icon: <Beaker size={28} />, href: "/bissalab", color: "bg-[#F4F4F1]" },
    { id: '02', title: 'BissaLink', subtitle: 'Traçabilité Digitale', desc: "Digitalisation de la gestion de vos déchets en temps réel.", icon: <Globe size={28} />, href: "/bissatrack", color: "bg-[#2E6F40]" },
    { id: '03', title: 'BissaCycle', subtitle: 'Logistique & Valorisation', desc: "Transformation physique à Chlef via notre propre flotte.", icon: <Truck size={28} />, href: "/bissacycle", color: "bg-[#F4F4F1]" },
  ];

  return (
    <section id="about" className="bg-white py-24 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        
        <div className="reveal-stagger flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-1.5 bg-[#00674F] rounded-full"></span>
              <span className="text-[#2D2D2D] font-black uppercase tracking-[0.2em] text-[11px]">À Propos de Nous</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black leading-[0.9] text-[#2D2D2D] tracking-tighter">
              L'Expertise au service de <br />
              <span className="text-gray-300">l'Économie</span> <span className="underline decoration-[#00674F] decoration-8 underline-offset-[10px]">Circulaire</span>
            </h2>
          </div>
          <div className="lg:max-w-sm">
            <p className="text-gray-500 text-lg font-medium leading-relaxed">Depuis 2018, Bissa fusionne rigueur industrielle et innovation digitale.</p>
          </div>
        </div>

        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <Link href={pillar.href} key={pillar.id} className={`group relative ${pillar.color} p-10 rounded-[40px] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full`}>
              <div className="mb-12 flex justify-between items-start">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <div className="text-[#2D2D2D] group-hover:text-[#00674F] transition-colors">{pillar.icon}</div>
                </div>
                <span className={`text-sm font-black uppercase tracking-widest ${pillar.color === 'bg-[#2E6F40]' ? 'text-white/30' : 'text-[#2D2D2D]/20'}`}>{pillar.id}</span>
              </div>
              
              <div className="flex-grow">
                <h3 className={`text-3xl font-black mb-2 tracking-tighter uppercase ${pillar.color === 'bg-[#2E6F40]' ? 'text-white' : 'text-[#2D2D2D]'}`}>{pillar.title}</h3>
                <p className={`font-bold text-[10px] uppercase tracking-widest mb-6 opacity-60 ${pillar.color === 'bg-[#2E6F40]' ? 'text-white' : 'text-[#2D2D2D]'}`}>{pillar.subtitle}</p>
                <p className={`font-medium text-sm ${pillar.color === 'bg-[#2E6F40]' ? 'text-white/80' : 'text-gray-600'}`}>{pillar.desc}</p>
              </div>

              <div className={`mt-10 flex items-center gap-2 font-black text-[11px] uppercase tracking-widest ${pillar.color === 'bg-[#2E6F40]' ? 'text-white' : 'text-[#2D2D2D]'}`}>
                En savoir plus 
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:bg-[#083344] group-hover:text-white transition-all shadow-sm">
                    <ArrowRight size={14} className="text-[#2D2D2D] group-hover:text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* BANNER: Petrol Blue Background */}
        <div className="reveal-item mt-12 bg-[#083344] rounded-[40px] p-8 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="w-20 h-20 bg-[#00674F] rounded-full flex items-center justify-center">
                <CheckCircle2 className="text-white" size={36} />
            </div>
            <div>
              <h4 className="text-white text-3xl font-black uppercase tracking-tighter">Unité de Valorisation Intégrée</h4>
              <p className="text-blue-100/60 font-medium text-lg">Traçabilité totale garantie.</p>
            </div>
          </div>
          <Link href="/contact" className="group bg-white text-[#083344] px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-[#00674F] hover:text-white transition-all flex items-center gap-4">
            Demander un Audit <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;