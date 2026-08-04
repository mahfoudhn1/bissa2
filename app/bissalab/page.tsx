"use client";

import React from 'react';
import { 
  ShieldCheck, 
  BookOpen, 
  Lock, 
  FileText, 
  Users, 
  Zap, 
  HardHat, 
  CheckCircle, 
  ArrowRight,
  ClipboardCheck
} from 'lucide-react';
import Header from '../components/home/header';
import Footer from '../components/home/footer';

const BissaLabPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#083344] selection:text-white">
      <Header/>
      
      {/* --- HERO SECTION: PETROL BLUE AUTHORITY --- */}
      <section className="relative bg-white pt-40 pb-24 px-6 lg:px-16 overflow-hidden">
        {/* Abstract pattern - Emerald technical glow */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#083344] rounded-full opacity-10 blur-3xl -z-0" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-1.5 bg-[#083344] rounded-full" />
            <span className="text-[#2D2D2D] font-black uppercase tracking-[0.2em] text-[11px]">Pôle Expertise & Ingénierie</span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
                <h1 className="text-6xl md:text-9xl font-black uppercase leading-[0.85] text-[#2D2D2D] tracking-tighter mb-10">
                  Bissa<br /><span className="text-[#083344]">Lab.</span>
                </h1>
                <p className="text-gray-500 max-w-xl text-xl font-medium leading-relaxed border-l-4 border-[#083344] pl-6">
                  Maîtrise des risques et optimisation des performances environnementales. Nous transformons vos contraintes réglementaires en leviers de rentabilité.
                </p>
            </div>
            <div className="hidden lg:flex justify-end pb-4">
                <div className="backdrop-blur-lg border border-white/10 p-10 bg-[#083344] rounded-[40px] max-w-sm">
                    <ClipboardCheck className="text-white/80 mb-4" size={32} />
                    <p className="text-sm font-bold text-white/80 leading-relaxed italic">
                      "Une approche pragmatique : nos études ne sont pas des rapports, ce sont des feuilles de route opérationnelles."
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BUREAU D'ÉTUDES: BENTO STYLE --- */}
      <section className="py-24 px-6 lg:px-16 bg-[#F4F4F1]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-[#2D2D2D] tracking-tighter leading-none">
              Maîtrise des <br /><span className="text-gray-400">Risques Critiques</span>
            </h2>
            <div className="bg-white px-6 py-3 rounded-full border border-gray-200 flex items-center gap-3 shadow-sm">
                <ShieldCheck size={18} className="text-[#083344]" />
                <span className="text-[11px] font-black uppercase tracking-widest text-[#2D2D2D]">Conformité ICPE</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Étude d'Impact (EIE)", desc: "Évaluation rigoureuse des effets de vos projets sur l'écosystème pour garantir leur acceptabilité." },
              { title: "Étude de Danger (EDD)", desc: "Identification des risques technologiques et définition des barrières de sécurité industrielles." },
              { title: "Plan d'Intervention (PII)", desc: "Protocoles de gestion de crise pour protéger vos collaborateurs et vos actifs en cas d'incident." },
              { title: "Audit Environnemental", desc: "Diagnostic exhaustif pour identifier les non-conformités et optimiser vos ressources." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-100">
                <div className="flex justify-between items-start mb-6">
                  <h4 className="font-black text-[#2D2D2D] uppercase text-xl tracking-tighter max-w-[200px]">{item.title}</h4>
                  <div className="w-12 h-12 bg-[#F4F4F1] text-[#2D2D2D] group-hover:bg-[#083344] group-hover:text-white rounded-xl flex items-center justify-center transition-colors">
                    <FileText size={20} />
                  </div>
                </div>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FORMATION: THE HIGHLIGHT SECTION --- */}
      <section className="py-32 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="w-12 h-1.5 bg-[#083344] rounded-full mb-6" />
              <h2 className="text-5xl font-black uppercase text-[#2D2D2D] tracking-tighter mb-6">
                Le Savoir est <br /><span className="text-[#083344]">un Moteur</span>
              </h2>
              <p className="text-gray-500 font-medium mb-8">
                Nous formons vos équipes pour transformer vos contraintes environnementales en leviers de performance durable.
              </p>
              <button className="flex items-center gap-4 bg-[#083344] text-white px-8 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-[#083344] transition-all">
                Catalogue Formation <ArrowRight size={16} />
              </button>
            </div>

            <div className="lg:col-span-3 grid gap-4">
              {[
                { icon: <Zap />, title: "Management Environnement", label: "Normes ISO & Réglementation" },
                { icon: <CheckCircle />, title: "Économie Circulaire", label: "Éco-conception & Flux" },
                { icon: <HardHat />, title: "Sécurité Industrielle", label: "Risques & Urgences" }
              ].map((box, idx) => (
                <div key={idx} className="flex items-center gap-6 p-8 bg-[#083344] rounded-[32px] text-white group hover:translate-x-4 transition-transform">
                  <div className="text-[#083344] group-hover:scale-125 transition-transform">
                    {React.cloneElement(box.icon, { size: 32 })}
                  </div>
                  <div>
                    <h5 className="font-black uppercase tracking-tight">{box.title}</h5>
                    <p className="text-xs text-white/50 font-bold uppercase tracking-widest">{box.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES TABLE: CLEAN MINIMALISM --- */}
      <section className="pb-32 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-hidden rounded-[48px] border border-gray-100 shadow-2xl">
            <div className="bg-[#2D2D2D] p-12 text-white flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">Approche : Audit • Action • Acquisition</h3>
                <p className="text-gray-400 font-medium">BissaLab s'appuie sur la réalité du terrain de Bissa Environnement.</p>
              </div>
              <div className="shrink-0 bg-[#083344] px-6 py-3 rounded-full font-black uppercase text-[10px] tracking-widest">
                Méthodologie Validée
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-[#F4F4F1] border-b border-gray-100">
                  <tr>
                    <th className="px-12 py-6 font-black uppercase text-[10px] tracking-widest text-gray-400">Service</th>
                    <th className="px-12 py-6 font-black uppercase text-[10px] tracking-widest text-gray-400">Livrable Clé</th>
                    <th className="px-12 py-6 font-black uppercase text-[10px] tracking-widest text-gray-400">Impact Client</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    { s: "Audit", l: "Rapport de conformité", i: "Sécurité juridique totale", icon: <Lock /> },
                    { s: "EIE / EDD", l: "Dossier réglementaire", i: "Autorisation sécurisée", icon: <FileText /> },
                    { s: "Formation", l: "Certificat de compétences", i: "Équipes autonomes", icon: <Users /> }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors group">
                      <td className="px-12 py-8 font-black text-[#083344] uppercase">{row.s}</td>
                      <td className="px-12 py-8 text-gray-500 font-medium italic">{row.l}</td>
                      <td className="px-12 py-8">
                        <div className="flex items-center gap-3 font-black text-[#083344] uppercase text-[11px] tracking-tight">
                          {React.cloneElement(row.icon, { size: 14 })} {row.i}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BissaLabPage;