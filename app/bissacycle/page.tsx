"use client";

import React from 'react';
import { 
  RotateCcw, 
  Factory, 
  Zap, 
  BarChart3, 
  ChevronRight, 
  CheckCircle2, 
  Droplets, 
  Box, 
  ArrowRight,
  TrendingUp,
  Wind
} from 'lucide-react';
import Header from '../components/home/header';
import Footer from '../components/home/footer';

const BissaCyclePage = () => {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#00674F] selection:text-white">
      <Header/>
      
      {/* --- HERO SECTION: EMERALD ARCHITECTURE --- */}
      <section className="relative pt-48 pb-32 px-6 lg:px-16 bg-[#00674F] overflow-hidden">
        {/* Abstract "Cycle" Pattern Overlay */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] border-[1px] border-white/10 rounded-full animate-pulse -z-0" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-white opacity-5 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-1.5 bg-white rounded-full" />
                <span className="text-white/60 font-black uppercase tracking-[0.2em] text-[11px]">Pôle Valorisation & Transformation</span>
              </div>
              
              <h1 className="text-6xl md:text-[120px] font-black uppercase leading-[0.8] text-white tracking-tighter mb-10">
                Bissa<span className="text-white/30 block">Cycle.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl font-medium leading-relaxed border-l-4 border-white/20 pl-8">
                Transformer le déchet en ressource n'est plus une option. Nous extrayons la valeur maximale de chaque flux pour garantir une <span className="text-white font-black underline decoration-[#083344] underline-offset-8">seconde vie infinie</span> aux matières.
              </p>
            </div>

            <div className="lg:col-span-4 hidden lg:flex justify-end">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-12 rounded-[50px] rotate-2">
                    <RotateCcw className="text-white mb-6 animate-spin-slow" size={48} />
                    <p className="text-white font-bold italic leading-tight">
                        "Zéro déchet ultime : notre objectif pour vos sites industriels."
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- L'INGÉNIERIE: BENTO GRID PATTERN --- */}
      <section className="py-32 px-6 lg:px-16 bg-[#F4F4F1]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <h2 className="text-4xl md:text-6xl font-black uppercase text-[#2D2D2D] tracking-tighter leading-none">
              L'Ingénierie de la <br /><span className="text-gray-400">Transformation</span>
            </h2>
            <div className="bg-white px-8 py-4 rounded-full shadow-sm flex items-center gap-4">
                <Factory size={20} className="text-[#00674F]" />
                <span className="text-[11px] font-black uppercase tracking-[0.2em]">Procédés Circulaires</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: <Droplets />, 
                title: "Régénération Pureté", 
                desc: "Protocoles de tri stricts garantissant des gisements sans impuretés pour la réintégration industrielle.",
                color: "bg-white" 
              },
              { 
                icon: <Box />, 
                title: "Expertise Multi-Flux", 
                desc: "Maîtrise technique des polymères, fibres cellulosiques, métaux et déchets complexes.",
                color: "bg-[#00674F]", // Highlight card
                isDark: true
              },
              { 
                icon: <Wind />, 
                title: "Impact Bas Carbone", 
                desc: "Privilégier les circuits courts et les filières locales pour minimiser l'empreinte de traitement.",
                color: "bg-white" 
              }
            ].map((card, i) => (
              <div key={i} className={`${card.color} p-12 rounded-[50px] shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col justify-between group`}>
                <div>
                    <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-10 transition-colors ${card.isDark ? 'bg-white/10 text-white' : 'bg-[#F4F4F1] text-[#00674F] group-hover:bg-[#00674F] group-hover:text-white'}`}>
                        {React.cloneElement(card.icon, { size: 32 })}
                    </div>
                    <h4 className={`text-2xl font-black uppercase tracking-tighter mb-4 ${card.isDark ? 'text-white' : 'text-[#2D2D2D]'}`}>
                        {card.title}
                    </h4>
                    <p className={`font-medium leading-relaxed ${card.isDark ? 'text-white/70' : 'text-gray-500'}`}>
                        {card.desc}
                    </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PERFORMANCE DATA: REDESIGNED TABLE --- */}
      <section className="py-32 px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            
            <div className="lg:col-span-2 space-y-8 lg:sticky lg:top-32">
                <h2 className="text-5xl font-black uppercase text-[#2D2D2D] tracking-tighter">
                  Mesurer <br /><span className="text-[#00674F]">L'Impact.</span>
                </h2>
                <p className="text-gray-500 font-medium">
                  Nous ne nous contentons pas de recycler ; nous mesurons l'efficacité réelle de la transformation pour garantir un impact tangible sur votre RSE.
                </p>
                <div className="p-8 bg-[#083344] rounded-[40px] text-white">
                    <TrendingUp className="text-[#00674F] mb-4" size={32} />
                    <h5 className="text-lg font-black uppercase tracking-tighter">Reporting Précis</h5>
                    <p className="text-sm text-white/50">Certificats de valorisation émis systématiquement.</p>
                </div>
            </div>

            <div className="lg:col-span-3">
              <div className="overflow-hidden rounded-[48px] border border-gray-100 shadow-xl">
                <table className="w-full text-left">
                  <thead className="bg-[#2D2D2D] text-white">
                    <tr>
                      <th className="px-10 py-8 font-black uppercase text-[10px] tracking-widest italic">Indicateur</th>
                      <th className="px-10 py-8 font-black uppercase text-[10px] tracking-widest italic text-right">Objectif</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {[
                      { t: "Rendement Matière", o: "Maximiser le ratio collecté/valorisé" },
                      { t: "Pureté des Sorties", o: "Standards qualité fonderie & plasturgie" },
                      { t: "Évitement Matière Vierge", o: "Économie de pétrole, eau et bois" },
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-[#F4F4F1] transition-colors group">
                        <td className="px-10 py-10">
                          <span className="block font-black text-[#2D2D2D] group-hover:text-[#00674F] transition-colors uppercase text-xl tracking-tighter">
                            {row.t}
                          </span>
                        </td>
                        <td className="px-10 py-10 text-right">
                          <p className="text-sm text-gray-500 font-bold uppercase tracking-tight italic">
                            {row.o}
                          </p>
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-[#00674F]/5">
                        <td colSpan={2} className="px-10 py-12">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#00674F] rounded-full flex items-center justify-center text-white">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-black uppercase text-[#00674F]">Certificats de Valorisation</h4>
                                        <p className="text-xs font-bold text-gray-400">CONFORMITÉ RÉGLEMENTAIRE TOTALE</p>
                                    </div>
                                </div>
                                <ArrowRight className="text-[#00674F]" />
                            </div>
                        </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BissaCyclePage;