"use client";

import React from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F4F4F1] pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* TOP SECTION: BENTO-STYLE CONTACT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-8 rounded-[32px] shadow-sm flex items-center gap-5 border border-gray-100 transition-all hover:border-[#00674F]">
            {/* ICON: Forest Green */}
            <div className="w-12 h-12 bg-[#2E6F40] rounded-2xl flex items-center justify-center text-white">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Appelez-nous</p>
              <p className="text-sm font-black text-[#2D2D2D]">+213 697 228 406</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[32px] shadow-sm flex items-center gap-5 border border-gray-100 transition-all hover:border-[#00674F]">
            {/* ICON: Petrol Blue */}
            <div className="w-12 h-12 bg-[#083344] rounded-2xl flex items-center justify-center text-white">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Email pro</p>
              <p className="text-sm font-black text-[#2D2D2D]">contact@bissa.dz</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[32px] shadow-sm flex items-center gap-5 border border-gray-100 transition-all hover:border-[#00674F]">
            {/* ICON: Forest Green */}
            <div className="w-12 h-12 bg-[#2E6F40] rounded-2xl flex items-center justify-center text-white">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Localisation</p>
              <p className="text-sm font-black text-[#2D2D2D]">Zone Industrielle, Chlef</p>
            </div>
          </div>
        </div>

        {/* MAIN LINKS AREA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="text-3xl font-black tracking-tighter uppercase text-[#2D2D2D] mb-6">
              Bissa<span className="text-[#00674F]">.</span> {/* Emerald Dot */}
            </div>
            <p className="text-gray-500 text-lg font-medium leading-relaxed mb-8 max-w-sm">
              Leader de la collecte intelligente et de la valorisation des déchets en Algérie.
            </p>
            <div className="flex gap-3">
              {[Facebook, Linkedin, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[#2D2D2D] hover:bg-[#083344] hover:text-white transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-black uppercase text-[11px] tracking-[0.2em] mb-8 text-[#2D2D2D]">Navigation</h4>
              <ul className="space-y-4 text-sm font-bold text-gray-500">
                <li><a href="#" className="hover:text-[#00674F] transition-colors">Accueil</a></li>
                <li><a href="#" className="hover:text-[#00674F] transition-colors">À Propos</a></li>
                <li><a href="#" className="hover:text-[#00674F] transition-colors">Solutions</a></li>
                <li><a href="#" className="hover:text-[#00674F] transition-colors">BissaLink</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black uppercase text-[11px] tracking-[0.2em] mb-8 text-[#2D2D2D]">Entreprise</h4>
              <ul className="space-y-4 text-sm font-bold text-gray-500">
                <li><a href="#" className="hover:text-[#00674F] transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-[#00674F] transition-colors">Actualités</a></li>
                <li><a href="#" className="hover:text-[#00674F] transition-colors">Carrières</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
               {/* NEWSLETTER: Using Petrol Blue Background */}
               <div className="bg-[#083344] p-8 rounded-[32px] text-white">
                  <p className="text-[10px] font-black uppercase tracking-widest mb-4">Newsletter</p>
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full bg-white/10 border-none rounded-full px-5 py-3 text-sm focus:ring-2 ring-[#00674F] outline-none"
                    />
                    {/* BUTTON: Emerald Green */}
                    <button className="absolute right-1 top-1 bottom-1 bg-[#00674F] rounded-full px-3 text-white transition-transform hover:scale-105">
                      <ArrowRight size={16} />
                    </button>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="py-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase font-black tracking-[0.2em] text-gray-400">
          <p>© {currentYear} Bissa Environnement. Solutions Circulaires.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#2D2D2D] transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-[#2D2D2D] transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;