"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { login } from "../../redux/authSlice";
import type { AppDispatch, RootState } from "../../redux/store";
import { mockUsers } from "../lib/mockData";

export default function LoginPage() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      router.replace("/dashboard");
    }
  }, [isLoggedIn, router]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    const user = mockUsers.find(
      (item) => item.email.toLowerCase() === email.toLowerCase() && item.password === password
    );

    if (!user) {
      setError("Email ou mot de passe incorrect.");
      return;
    }

    dispatch(login({ name: user.name, email: user.email }));
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white rounded-[32px] shadow-2xl overflow-hidden border border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-10 bg-[#083344] text-white flex flex-col justify-between gap-8">
            <div>
              <img src="/logo.png" alt="Bissa logo" className="h-16 mb-8" />
              <h1 className="text-4xl font-black uppercase tracking-tighter">Bienvenue</h1>
              <p className="mt-4 text-sm text-white/70 leading-relaxed">
                Connectez-vous pour accéder à votre tableau de bord Bissa et suivre l'impact RSE de vos collectes.
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Nouveau ici ?</p>
              <Link href="/register" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-black uppercase tracking-[0.2em] text-white hover:bg-white/20 transition-all">
                Créer un compte
              </Link>
            </div>
          </div>
          <div className="p-10">
            <div className="mb-10">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#00674F]">Connexion</p>
              <h2 className="mt-4 text-3xl font-black text-[#083344]">Accédez à votre espace Bissa</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-black uppercase tracking-[0.25em] text-gray-500 mb-2">Adresse e-mail</label>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="contact@entreprise.com"
                  className="w-full rounded-3xl border border-gray-200 bg-[#F8F9FA] px-5 py-4 text-sm text-[#083344] outline-none focus:border-[#00674F] focus:ring-2 focus:ring-[#00674F]/10"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-[0.25em] text-gray-500 mb-2">Mot de passe</label>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="********"
                  className="w-full rounded-3xl border border-gray-200 bg-[#F8F9FA] px-5 py-4 text-sm text-[#083344] outline-none focus:border-[#00674F] focus:ring-2 focus:ring-[#00674F]/10"
                />
              </div>

              {error && <p className="text-sm text-red-500 font-bold">{error}</p>}

              <button type="submit" className="w-full rounded-full bg-[#083344] px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-[#00674F]">
                Se connecter
              </button>
            </form>

            <p className="mt-8 text-sm text-gray-500">
              En continuant, vous acceptez que cette application soit une démonstration fictive avec des données factices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
