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
      <main className="min-h-screen flex items-center justify-center bg-gray-900 text-blue-300">
        <p className="text-xl animate-pulse">Loading...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-900 text-red-400">
        <p className="text-xl">Error: {error}</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-10">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-400 drop-shadow-md">
          Devices
        </h1>
        <p className="text-blue-300 mt-2">Popular devices list</p>
      </header>

      {/* Empty message */}
      {!rows || rows.length === 0 ? (
        <div className="text-center text-blue-300 text-lg">
          No devices found.
        </div>
      ) : (
        <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {rows.map((x) => (
            <article
              key={x.id}
              className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-blue-500/20 transition shadow duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              {x.coverimage && (
                <div className="w-full h-48 bg-gray-700 overflow-hidden">
                  <img
                    src={x.coverimage}
                    alt={x.name}
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-400">
                  {x.name}
                </h3>

                {x.detail && (
                  <p className="text-gray-300 text-sm mt-2 line-clamp-4">
                    {x.detail}
                  </p>
                )}
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}
