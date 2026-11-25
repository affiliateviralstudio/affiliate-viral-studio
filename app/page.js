
"use client";

import { useState } from "react";

const features = [
  { icon: "🔎", name: "Product Analyzer", desc: "Analisis produk affiliate yang berpotensi viral." },
  { icon: "✍️", name: "AI Content Studio", desc: "Buat caption, hook, dan konten promosi." },
  { icon: "🎬", name: "AI Video Engine", desc: "Rancang konsep video pendek untuk promosi." },
  { icon: "📈", name: "SEO Studio", desc: "Optimalkan kata kunci dan jangkauan konten." },
  { icon: "📅", name: "Content Planner", desc: "Susun kalender dan jadwal publikasi." },
  { icon: "📊", name: "Performance Tracker", desc: "Pantau performa konten dan kampanye." }
];

export default function Home() {
  const [active, setActive] = useState("Dashboard");

  return (
    <main className="min-h-screen bg-[#101010] text-white flex">
      <aside className="w-64 border-r border-[#333] p-6 hidden md:block">
        <h1 className="text-2xl font-bold text-yellow-400">
          Affiliate<span className="text-white">Viral</span>
        </h1>
        <p className="text-xs text-gray-400 mt-1">STUDIO</p>
        <nav className="mt-12 space-y-3">
          {["Dashboard", ...features.map(f => f.name)].map(item => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`w-full text-left p-3 rounded-xl ${
                active === item ? "bg-yellow-500 text-black" : "text-gray-300 hover:bg-[#292929]"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      <section className="flex-1 p-6 md:p-10">
        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-gray-400 text-sm">WELCOME TO</p>
            <h2 className="text-3xl font-bold mt-1">{active}</h2>
          </div>
          <div className="rounded-full border border-yellow-500 px-4 py-2 text-yellow-400 text-sm">
            PRO STUDIO
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-r from-[#3b2b0b] to-[#171717] border border-yellow-700 p-8 mb-10">
          <p className="text-yellow-400 font-semibold mb-3">YOUR AFFILIATE COMMAND CENTER</p>
          <h3 className="text-3xl md:text-4xl font-bold max-w-2xl">
            Turn Products Into Viral Content.
          </h3>
          <p className="text-gray-300 mt-4 max-w-xl">
            Satu studio untuk menganalisis produk, membuat konten AI,
            merencanakan publikasi, dan mengembangkan strategi affiliate.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {features.map(feature => (
            <button
              key={feature.name}
              onClick={() => setActive(feature.name)}
              className="text-left bg-[#1c1c1c] border border-[#333] hover:border-yellow-500 rounded-2xl p-6 transition"
            >
              <div className="text-3xl mb-5">{feature.icon}</div>
              <h4 className="text-lg font-bold text-yellow-400">{feature.name}</h4>
              <p className="text-gray-400 text-sm mt-2">{feature.desc}</p>
              <p className="text-xs text-yellow-500 mt-5">EXPLORE MODULE →</p>
            </button>
          ))}
        </div>

        <footer className="text-center text-gray-500 text-xs mt-12">
          © 2026 Affiliate Viral Studio. All rights reserved.
        </footer>
      </section>
    </main>
  );
}
