"use client";

import React from 'react';
import { Check, ArrowRight, Zap, Info, Package, Trash2, Truck, ClipboardList, Link2 } from 'lucide-react';

const BissaProducts = () => {
  const plans = [
    {
      name: "LITE",
      type: "Service Essentiel",
      capacity: "Pack S",
      includes: [
        { label: "Bacs Plastiques", icon: <Package size={14} /> },
        { label: "Bacs Carton", icon: <Package size={14} /> },
        { label: "Suivi Collecte", icon: <Truck size={14} /> }
      ],
      color: "bg-[#F4F4F1]",
      textColor: "text-[#2D2D2D]",
      buttonStyle: "bg-[#083344] text-white hover:bg-[#00674F]"
    },
    {
      name: "BUREAU",
      type: "Solution Tertiaire",
      capacity: "Pack M",
      includes: [
        { label: "Bacs Carton", icon: <Package size={14} /> },
        { label: "Bissa Certificat", icon: <ClipboardList size={14} /> },
        { label: "Suivi Collecte", icon: <Truck size={14} /> },
        { label: "BissaLink", icon: <Link2 size={14} /> }
      ],
      color: "bg-[#083344]", // Petrol Blue for professional Bureau feel
      textColor: "text-white",
      buttonStyle: "bg-white text-[#083344] hover:bg-[#00674F] hover:text-white"
    },
    {
      name: "EXPERT",
      type: "Accompagnement Total",
      capacity: "Pack XL",
      highlight: true,
      includes: [
        { label: "Bacs Plastiques", icon: <Package size={14} /> },
        { label: "Bacs Carton", icon: <Package size={14} /> },
        { label: "Bennes Extérieures", icon: <Trash2 size={14} /> },
        { label: "Bissa Certificat", icon: <ClipboardList size={14} /> },
        { label: "Suivi Collecte", icon: <Truck size={14} /> },
        { label: "BissaLink Pro", icon: <Link2 size={14} /> }
      ],
      color: "bg-[#00674F]", // Emerald Green for the "All Services" Expert plan
      textColor: "text-white",
      buttonStyle: "bg-white text-[#00674F] hover:bg-[#2D2D2D] hover:text-white shadow-xl"
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Aligned with BissaLab/BissaCycle Design Pattern */}
        <div className="reveal-stagger flex flex-col md:flex-row items-end justify-between gap-6 mb-20">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-1.5 bg-[#00674F] rounded-full" />
              <span className="text-[#2D2D2D] font-black uppercase tracking-[0.2em] text-[11px]">Pricing & Infrastructure</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-[#2D2D2D] uppercase leading-[0.9]">
              Nos <br />
              <span className="text-gray-300">Offres.</span>
            </h2>
          </div>
          <p className="text-gray-500 font-medium max-w-[350px] text-right md:mb-2 italic">
            "Une solution adaptée à chaque flux, du bureau à l'industrie."
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="reveal-stagger grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative ${plan.color} p-12 rounded-[50px] flex flex-col transition-all duration-700 hover:-translate-y-4 ${plan.highlight ? 'shadow-[0_20px_50px_rgba(0,103,79,0.3)]' : 'shadow-xl'}`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2D2D2D] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                  Recommandé Expert
                </div>
              )}

              <div className="mb-12">
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] opacity-60 block mb-2 ${plan.textColor}`}>{plan.type}</span>
                <h3 className={`text-5xl font-black tracking-tighter ${plan.textColor}`}>{plan.name}</h3>
              </div>

              <div className="mb-12">
                <div className="flex items-baseline gap-2">
                  <span className={`text-2xl font-black uppercase tracking-widest ${plan.textColor}`}>{plan.capacity}</span>
                </div>
                <div className={`h-1 w-12 mt-2 rounded-full ${plan.highlight || plan.name === "BUREAU" ? 'bg-white/20' : 'bg-[#00674F]'}`} />
              </div>

              <div className="flex-grow space-y-5 mb-14">
                {plan.includes.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors duration-300 ${plan.highlight || plan.name === "BUREAU" ? 'bg-white/10 text-white' : 'bg-[#083344]/5 text-[#083344]'}`}>
                      {item.icon}
                    </div>
                    <span className={`text-[12px] font-bold uppercase tracking-tight group-hover:translate-x-1 transition-transform ${plan.textColor}`}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-6 rounded-full font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-3 transition-all duration-300 active:scale-95 ${plan.buttonStyle}`}>
                Choisir cette offre
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="reveal-item mt-20 text-center">
           <div className="inline-flex items-center gap-4 bg-white px-10 py-6 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-10 h-10 bg-[#F4F4F1] rounded-full flex items-center justify-center">
                <Info size={18} className="text-[#00674F]" />
              </div>
              <p className="text-sm font-bold text-[#2D2D2D] uppercase tracking-tighter">
                Besoin d'un audit spécifique ? <span className="text-[#00674F] cursor-pointer hover:underline underline-offset-4">Consulter BissaLab</span>
              </p>
           </div>
        </div>

      </div>
    </section>
  );
};

export default BissaProducts;