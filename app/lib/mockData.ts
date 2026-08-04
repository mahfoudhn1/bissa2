export type MockUser = {
  name: string;
  email: string;
  password: string;
  organization: string;
};

export const mockUsers: MockUser[] = [
  {
    name: "Amina Bissa",
    email: "amina@bissa.co",
    password: "Bissa2026!",
    organization: "Bissa Industries",
  },
  {
    name: "Youssef Larbi",
    email: "youssef@bissa-eco.com",
    password: "EcoBissa123",
    organization: "Bissa Lab",
  },
  {
    name: "Meriem K.",
    email: "meriem@greenlogistics.com",
    password: "GreenFlow22",
    organization: "BissaLink",
  },
];

export type DashboardCard = {
  label: string;
  value: string;
  unit: string;
  icon: "zap" | "recycle" | "leaf" | "trendingUp";
  trend: string;
  isPositive: boolean;
};

export const dashboardCards: DashboardCard[] = [
  {
    label: "Points Bissa",
    value: "12,450",
    unit: "Pts",
    icon: "zap",
    trend: "+24% total",
    isPositive: true,
  },
  {
    label: "Flux Valorisé",
    value: "3.8",
    unit: "Tonnes",
    icon: "recycle",
    trend: "+5.4%",
    isPositive: true,
  },
  {
    label: "Impact Carbone",
    value: "840",
    unit: "Kg CO2",
    icon: "leaf",
    trend: "-210kg",
    isPositive: true,
  },
  {
    label: "Indice de Tri",
    value: "94",
    unit: "%",
    icon: "trendingUp",
    trend: "Optimisé",
    isPositive: true,
  },
];

export type RecentCollection = {
  id: string;
  date: string;
  type: string;
  weight: string;
  status: string;
  color: string;
};

export const recentCollections: RecentCollection[] = [
  {
    id: "COL-882",
    date: "12 Jan 2026",
    type: "Plastique HDPE",
    weight: "450 kg",
    status: "Valorisé",
    color: "bg-[#00674F]/10 text-[#00674F]",
  },
  {
    id: "COL-881",
    date: "08 Jan 2026",
    type: "Carton Ondulé",
    weight: "1.2 t",
    status: "En Transit",
    color: "bg-[#083344]/10 text-[#083344]",
  },
  {
    id: "COL-880",
    date: "01 Jan 2026",
    type: "E-Waste (BissaLab)",
    weight: "120 kg",
    status: "Expertise",
    color: "bg-gray-100 text-gray-500",
  },
];
