"use client";

import React from 'react';
import { 
  ClipboardCheck, 
  Users, 
  Truck, 
  Factory, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Target,
  Sparkles
} from 'lucide-react';
import Header from '../components/home/header';
import Footer from '../components/home/footer';

const BissaSolutionsPage = () => {
  const solutions = [
    {
      id: "01",
      title: "Diagnostic & Ingénierie",
      subTitle: "BissaLab",
      description: "Audit technique complet sur site pour quantifier vos gisements et définir vos besoins réels.",
      features: ["Analyse de gisement précise", "Schéma d'implantation", "Planification logistique"],
      icon: <ClipboardCheck size={28} />,
      accent: "text-[#00674F]"
    },
    {
      id: "02",
      title: "Formation Interne",
      subTitle: "L'Humain au cœur",
      description: "Nous formons vos équipes pour instaurer une culture du tri sélectif efficace à la source.",
      features: ["Sensibilisation environnementale", "Ateliers pratiques de tri"],
      icon: <Users size={28} />,
      accent: "text-[#083344]"
    },
    {
      id: "03",
      title: "Logistique Adaptée",
      subTitle: "Réactivité Pro",
      description: "Évacuation de vos matières selon votre rythme de production avec une flotte dédiée.",
      features: ["Gestion par flotte propre", "Réactivité sous 24h/48h"],
      icon: <Truck size={28} />,
      accent: "text-[#00674F]"
    },
    {
      id: "04",
      title: "Valorisation Matière",
      subTitle: "BissaCycle",
      description: "Transformation des déchets en ressources secondaires (granulation, lavage, broyage).",
      features: ["Seconde vie garantie", "Réduction déchets ultimes"],
      icon: <Factory size={28} />,
      accent: "text-[#083344]"
    },
    {
      id: "05",
      title: "Traçabilité Live",
      subTitle: "BissaLink",
      description: "Contrôle total sur vos données environnementales en temps réel via votre portail dédié.",
      features: ["Rapports périodiques", "Suivi multi-établissements"],
      icon: <Target size={28} />,
      accent: "text-[#00674F]"
    },
    {
      id: "06",
      title: "Impact & Certification",
      subTitle: "Validation RSE",
      description: "Validation officielle de vos efforts par des certificats annuels et indicateurs d'impact.",
      features: ["Certificat de recyclage", "Bilan CO2 économisé"],
      icon: <Award size={28} />,
      accent: "text-[#083344]"
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#00674F] selection:text-white">
      <Header/>

      {/* --- HERO: THE ARCHITECTURAL START --- */}
      <section className="relative bg-[#083344] pt-48 pb-32 px-6 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(#white 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#00674F]/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-1.5 bg-[#00674F] rounded-full" />
            <span className="text-white/60 font-black uppercase tracking-[0.3em] text-[11px]">Cycle de Valeur</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black uppercase leading-[0.8] text-white tracking-tighter mb-10">
            Solutions<br /><span className="text-[#00674F]">Bout en Bout.</span>
          </h1>
          <p className="text-xl text-blue-100/60 max-w-3xl font-medium leading-relaxed border-l-4 border-[#00674F] pl-8">
            BissaEnvironnement déploie une ingénierie complète pour transformer votre gestion des déchets. De l'audit stratégique à la valorisation finale, nous sommes votre partenaire unique.
          </p>
        </div>
      </section>

      {/* --- SOLUTIONS GRID: MODERN CARDS --- */}
      <section className="py-32 px-6 lg:px-16 bg-[#F4F4F1]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((item) => (
              <div key={item.id} className="group bg-white p-10 rounded-[48px] shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gray-100 flex flex-col">
                <div className="flex justify-between items-start mb-10">
                  <div className={`w-16 h-16 rounded-2xl bg-[#F4F4F1] ${item.accent} flex items-center justify-center group-hover:bg-[#083344] group-hover:text-white transition-all duration-500 shadow-sm`}>
                    {item.icon}
                  </div>
                  <span className="text-6xl font-black text-[#083344] opacity-[0.03] group-hover:opacity-10 transition-opacity">
                    {item.id}
                  </span>
                </div>

                <div className="mb-6">
                  <p className={`text-[10px] font-black uppercase tracking-[0.2em] mb-2 ${item.accent}`}>
                    {item.subTitle}
                  </p>
                  <h3 className="text-2xl font-black uppercase text-[#083344] tracking-tighter leading-none">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-500 font-medium text-sm leading-relaxed mb-8 flex-grow">
                  {item.description}
                </p>

                <div className="space-y-3 mb-10">
                  {item.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={14} className="text-[#00674F]" />
                      <span className="text-[11px] font-black uppercase text-[#083344]/70 tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="pt-6 border-t border-gray-50 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#083344] hover:text-[#00674F] transition-colors">
                  Détails techniques <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA: FINAL IMPACT --- */}
      <section className="py-32 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#083344] rounded-[60px] p-12 md:p-24 relative overflow-hidden group shadow-2xl">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00674F] rounded-full blur-[150px] opacity-20 -mr-20 -mt-20 group-hover:opacity-40 transition-opacity duration-700" />
            <Zap size={400} className="absolute -left-20 -bottom-20 text-white opacity-[0.02]" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="text-[#00674F]" size={24} />
                  <span className="text-white font-black uppercase tracking-[0.3em] text-xs">Innovation Durable</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black uppercase text-white leading-[0.9] tracking-tighter">
                  Prêt à <br /><span className="text-[#00674F]">Optimiser ?</span>
                </h2>
                <p className="text-blue-100/60 mt-8 font-medium text-lg max-w-md">
                  Rejoignez les leaders industriels qui transforment déjà leurs flux en performance économique.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <button className="bg-[#00674F] text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white hover:text-[#083344] transition-all shadow-xl active:scale-95 text-center">
                  Demander un Audit BissaLab
                </button>
                <button className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all text-center">
                  Consulter les Tarifs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BissaSolutionsPage;