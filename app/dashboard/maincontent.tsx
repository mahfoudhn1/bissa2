// Composant pour la vue par défaut
const Overview = () => (
  <div className="animate-in fade-in duration-500">
    <h1 className="text-2xl font-black italic uppercase mb-6">Tableau de Bord</h1>
    {/* Insérez ici vos StatCards et votre tableau de collectes */}
  </div>
);

// Composant pour la vue Points
const PointsView = () => (
  <div className="animate-in slide-in-from-bottom-4 duration-500">
    <h1 className="text-2xl font-black italic uppercase mb-6 text-[#FF5C28]">Mes Points & Impact</h1>
    <div className="bg-[#0B1C14] p-10 rounded-[32px] text-white">
      <p className="text-4xl font-black italic">12,450 PTS</p>
      <p className="text-gray-400 uppercase text-xs font-bold tracking-widest mt-2">Score de durabilité actuel</p>
    </div>
  </div>
);