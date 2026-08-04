"use client";

import React from 'react';
import { 
  BarChart, 
  Database, 
  Layers, 
  ShieldCheck, 
  Scale, 
  Recycle, 
  Leaf, 
  LineChart,
  Monitor,
  ArrowRight
} from 'lucide-react';
import Footer from '../components/home/footer';
import Header from '../components/home/header';

const BissaLinkPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#2E6F40] selection:text-white">
      <Header/>
      
      {/* --- HERO SECTION: DIGITAL INFRASTRUCTURE --- */}
      <section className="relative pt-40 pb-24 px-6 lg:px-16 overflow-hidden">
        {/* Signature Backdrop using Forest Green */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#2E6F40] rounded-full opacity-10 blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-1.5 bg-[#2E6F40] rounded-full" />
            <span className="text-[#2D2D2D] font-black uppercase tracking-[0.2em] text-[11px]">Infrastructure Numérique</span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
                <h1 className="text-6xl md:text-9xl font-black uppercase leading-[0.85] text-[#2D2D2D] tracking-tighter mb-10">
                  Bissa<br /><span className="text-[#2E6F40]">Link.</span>
                </h1>
                <p className="text-gray-500 max-w-xl text-xl font-medium leading-relaxed">
                  L'outil souverain de contrôle de votre conformité et de votre rentabilité. En centralisant chaque donnée à la source, nous éliminons l'approximation.
                </p>
            </div>
            <div className="flex justify-end lg:pb-4">
                {/* Hero Feature Card using Forest Green accent */}
                <div className="bg-[#2D2D2D] text-white p-10 rounded-[40px] shadow-2xl max-w-sm border-t-4 border-[#2E6F40]">
                    <Monitor className="text-[#2E6F40] mb-4" size={32} />
                    <p className="text-sm font-bold leading-relaxed">
                      "Une interface unique pour piloter 100% de vos flux de déchets en temps réel."
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- EXCELLENCE OPÉRATIONNELLE: BENTO GRID --- */}
      <section className="py-24 px-6 lg:px-16 bg-[#F4F4F1]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-[#2D2D2D] tracking-tighter leading-none">
              L'Excellence par <br /><span className="text-gray-400">la Donnée</span>
            </h2>
            <div className="bg-white px-6 py-3 rounded-full border border-gray-200 flex items-center gap-3 shadow-sm">
                <Database size={18} className="text-[#2E6F40]" />
                <span className="text-[11px] font-black uppercase tracking-widest text-[#2D2D2D]">SaaS Architecture</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: <BarChart />, 
                title: "Audit Permanent", 
                desc: "Agrégation en temps réel des bordereaux, factures et certificats. Chaque kilo est tracé.",
                color: "bg-white",
                accent: "text-[#2E6F40]"
              },
              { 
                icon: <Layers />, 
                title: "Multi-Sites", 
                desc: "Comparez les performances de vos différents sites et harmonisez vos processus groupe.",
                color: "bg-[#2E6F40]", // Dominate color
                isDark: true,
                accent: "text-white"
              },
              { 
                icon: <ShieldCheck />, 
                title: "Transparence", 
                desc: "Rapports de conformité réglementaire prêts pour l'audit vis-à-vis des autorités.",
                color: "bg-white",
                accent: "text-[#2E6F40]"
              }
            ].map((item, i) => (
              <div key={i} className={`${item.color} p-10 rounded-[48px] shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col`}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-10 transition-all ${item.isDark ? 'bg-white/20 text-white' : 'bg-[#F4F4F1] text-[#2D2D2D] group-hover:bg-[#2E6F40] group-hover:text-white'}`}>
                  {React.cloneElement(item.icon, { size: 28 })}
                </div>
                <h4 className={`font-black uppercase text-xl mb-4 tracking-tighter ${item.isDark ? 'text-white' : 'text-[#2D2D2D]'}`}>{item.title}</h4>
                <p className={`text-sm font-medium leading-relaxed ${item.isDark ? 'text-white/80' : 'text-gray-500'}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ARCHITECTURE DE DÉCISION (KPIs) --- */}
      <section className="py-32 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-5xl md:text-7xl font-black uppercase text-[#2D2D2D] tracking-tighter mb-4">
              Decision <span className="text-[#2E6F40]">Logic</span>
            </h2>
            <p className="text-gray-400 font-black uppercase tracking-[0.25em] text-[11px]">
              4 Piliers Stratégiques de Pilotage
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {[
              { icon: <Scale />, id: '01', title: 'Masse Critique', desc: 'Monitoring précis des tonnages pour ajuster vos rotations logistiques.' },
              { icon: <Recycle />, id: '02', title: 'Indice de Valorisation', desc: 'Analyse fine de la qualité du tri pour maximiser la transformation.' },
              { icon: <Leaf />, id: '03', title: 'Bilan Décarbonation', desc: 'Conversion automatique de vos données en tonnes de CO2 évitées (RSE).' },
              { icon: <LineChart />, id: '04', title: 'Optimisation Financière', desc: 'Visualisation des ratios coûts/économies pour transformer vos déchets en profit.' }
            ].map((kpi, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-8 p-10 rounded-[40px] bg-white border border-gray-100 hover:border-[#2E6F40] transition-all group shadow-hover">
                <div className="w-20 h-20 bg-[#F4F4F1] rounded-3xl flex items-center justify-center text-[#2D2D2D] group-hover:bg-[#2E6F40] group-hover:text-white transition-all shrink-0 shadow-sm">
                  {React.cloneElement(kpi.icon, { size: 32 })}
                </div>
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-black uppercase tracking-tighter text-[#2D2D2D]">{kpi.title}</h3>
                    <span className="text-sm font-black text-gray-200 group-hover:text-[#2E6F40]/20 transition-colors">{kpi.id}</span>
                  </div>
                  <p className="text-gray-500 font-medium leading-relaxed">
                    {kpi.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Card: Using Forest Green as the lead action color */}
          <div className="mt-20 bg-[#2D2D2D] rounded-[50px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 border-b-8 border-[#2E6F40]">
            <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-[#2E6F40] rounded-full flex items-center justify-center">
                    <ShieldCheck size={40} className="text-white" />
                </div>
                <div>
                    <h4 className="text-white text-2xl font-black uppercase tracking-tighter">Sécurité Industrielle</h4>
                    <p className="text-gray-400 font-medium">Garantie d'intégrité et confidentialité SaaS.</p>
                </div>
            </div>
            <button className="bg-[#2E6F40] text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs flex items-center gap-4 hover:bg-white hover:text-[#2E6F40] transition-all shadow-lg">
                Accéder au Démo <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BissaLinkPage;