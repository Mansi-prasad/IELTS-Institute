import { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";

const Features = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = `${import.meta.env.VITE_BACKEND_API}/api/features`;

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch features");
        const data = await res.json();
        setFeatures(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatures();
  }, []);

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
          Our Key Features
        </h2>

        {loading && (
          <p className="text-gray-600 text-lg">Loading features...</p>
        )}

        {error && (
          <p className="text-red-500 text-lg">
            Error loading features: {error}
          </p>
        )}

        {/* Features Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((f, idx) => {
              const IconComponent = FaIcons[f.icon];
              return (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-left"
                >
                  <IconComponent className="text-yellow-400 text-4xl mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {f.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{f.desc}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;
