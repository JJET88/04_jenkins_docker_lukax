"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getDevices() {
      try {
        const apiHost = process.env.NEXT_PUBLIC_API_HOST;
        const res = await fetch(`${apiHost}/devices`, { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setRows(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    getDevices();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="relative inline-block">
              {/* Animated rings */}
              <div className="w-20 h-20 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
              <div className="absolute inset-0 w-20 h-20 border-4 border-blue-500 border-b-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
              <div className="absolute inset-2 w-16 h-16 border-4 border-purple-500 border-l-transparent rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>
            </div>
            <p className="text-xl text-cyan-400 font-bold mt-6 animate-pulse tracking-wider">
              INITIALIZING SYSTEM...
            </p>
            <div className="flex justify-center gap-1 mt-4">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="relative bg-red-500/10 backdrop-blur-xl border-2 border-red-500/50 rounded-2xl shadow-2xl shadow-red-500/20 p-8 max-w-md">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 blur-xl opacity-20"></div>
            <div className="relative">
              <div className="text-red-400 text-6xl mb-4 text-center animate-pulse">⚠️</div>
              <p className="text-xl text-red-400 font-bold text-center tracking-wide">SYSTEM ERROR</p>
              <p className="text-red-300 text-center mt-2">{error}</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 px-6 py-10 max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 pt-6">
          {/* <div className="inline-flex items-center gap-3 bg-cyan-500/10 backdrop-blur-sm border border-cyan-400/30 rounded-full px-6 py-2 shadow-lg shadow-cyan-500/20 mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <p className="text-sm font-bold text-cyan-400 tracking-wider">SYSTEM ONLINE</p>
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
          </div> */}

          <div className="relative inline-block mb-6">
            <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-2xl tracking-tight">
              TECH DEVICES
            </h1>
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 blur-3xl opacity-20 -z-10"></div>
          </div>

          <p className="text-xl text-cyan-300 font-light tracking-wide mb-2">
            💻 Explore Cutting-Edge Technology 🚀
          </p>

          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="inline-block w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></span>
            <span className="inline-block w-3 h-3 bg-blue-500 rounded-full animate-ping"></span>
            <span className="inline-block w-3 h-3 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></span>
          </div>
        </header>

        {/* Empty message */}
        {!rows || rows.length === 0 ? (
          <div className="flex items-center justify-center py-20">
            <div className="relative bg-slate-900/50 backdrop-blur-xl border border-cyan-400/30 rounded-3xl shadow-2xl shadow-cyan-500/10 p-12 text-center">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 blur-xl opacity-10"></div>
              <div className="relative">
                <div className="text-7xl mb-4 animate-pulse">📱</div>
                <p className="text-2xl text-cyan-300 font-semibold tracking-wide">NO DEVICES DETECTED</p>
              </div>
            </div>
          </div>
        ) : (
          <section 
            className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-12"
            aria-live="polite"
          >
            {rows.map((x, index) => (
              <article
                key={x.id}
                className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
                tabIndex={0}
                style={{
                  animationDelay: `${index * 0.05}s`,
                  animation: "slideInUp 0.6s ease-out forwards",
                  opacity: 0
                }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none"></div>

                {/* Image */}
                {x.coverimage && (
                  <div className="relative w-full h-48 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                    <img
                      src={x.coverimage}
                      alt={x.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                    
                    {/* Tech overlay */}
                    <div className="absolute top-3 right-3 bg-cyan-400/20 backdrop-blur-md border border-cyan-400/30 text-cyan-400 font-bold text-xs px-3 py-1 rounded-full flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
                      <span>AVAILABLE</span>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="relative p-5">
                  <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2 line-clamp-2 group-hover:from-cyan-300 group-hover:to-blue-400 transition-all">
                    {x.name}
                  </h3>

                  {x.detail && (
                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-3 mb-4">
                      {x.detail}
                    </p>
                  )}

                  <div className="pt-4 border-t border-slate-700/50">
                    <button className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-bold py-2.5 rounded-xl hover:shadow-lg hover:shadow-cyan-400/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                      <span>⚡</span>
                      <span>EXPLORE</span>
                    </button>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-400/0 group-hover:border-cyan-400/50 rounded-tl-2xl transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-400/0 group-hover:border-cyan-400/50 rounded-br-2xl transition-all duration-500"></div>
              </article>
            ))}
          </section>
        )}
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}