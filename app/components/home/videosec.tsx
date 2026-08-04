"use client";

import React from 'react';
import { Play, ShieldCheck, ArrowRight } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section className="pt-40 pb-24 bg-[#083344] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="relative w-full h-full opacity-5 pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#white 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#00674F] rounded-full blur-[150px] opacity-20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative ">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content */}
          <div className="reveal-stagger lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-1 bg-[#00674F] rounded-full" />
              <span className="text-white/60 font-black uppercase tracking-[0.3em] text-[10px]">Impact en Action</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9]">
              L'économie <br />
              <span className="text-[#00674F]">Circulaire</span> <br />
              Expliquée.
            </h2>
            
            <p className="text-blue-100/60 font-medium leading-relaxed max-w-sm">
              Découvrez comment nos solutions BissaLab et BissaCycle transforment la gestion des déchets industriels en un cycle de valeur continue.
            </p>

            <button className="flex items-center gap-4 text-white font-black uppercase text-[11px] tracking-widest group">
              Voir notre étude de cas 
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#00674F] group-hover:border-[#00674F] transition-all">
                <ArrowRight size={14} />
              </div>
            </button>
          </div>

          {/* Video Player Frame */}
          <div className="reveal-item lg:col-span-7">
            <div className="relative group cursor-pointer">
              {/* Decorative Frame Elements */}
              <div className="relative -inset-4 border border-white/5 rounded-[40px] pointer-events-none" />
              
              <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-2xl border border-white/10 bg-[#2D2D2D]">
                <img 
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1400&h=800&fit=crop" 
                  alt="Bissa Environnement Concept" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 group-hover:scale-105"
                />
                
                {/* Play Overlay */}
                <div className="relative inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Animated Pulse Ring */}
                    <div className="absolute inset-0 bg-[#00674F] rounded-full animate-ping opacity-20" />
                    
                    <button className="relative bg-white text-[#083344] w-24 h-24 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                      <Play size={32} className="fill-[#083344] ml-1" />
                    </button>
                  </div>
                </div>

                {/* Video Info Tag */}
                <div className="relative bottom-8 left-8 flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                  <ShieldCheck size={16} className="text-[#00674F]" />
                  <span className="text-[10px] text-white font-black uppercase tracking-widest">Vision Bissa 2026</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoSection;