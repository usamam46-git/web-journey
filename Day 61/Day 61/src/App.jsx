import React, { useEffect, useState } from "react";

function QuoteComponent() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      const url = "https://api.freeapi.app/api/v1/public/quotes/quote/random";
      const options = { method: "GET", headers: { accept: "application/json" } };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setQuote(result.data);
      } catch (err) {
        setError("Failed to fetch quote.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (loading) return <p>Loading quote...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-100 rounded-xl shadow-lg text-center">
      <p className="text-xl italic text-gray-700 mb-4">“{quote.content}”</p>
      <h2 className="text-lg font-semibold text-gray-900">— {quote.author}</h2>
      <div className="mt-3 flex justify-center gap-2">
        {quote.tags.map((tag, i) => (
          <span
            key={i}
            className="text-sm bg-blue-200 text-blue-800 px-2 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">🌟 Random Quote Generator</h1>
      <QuoteComponent />
    </div>
  );
};

export default App;
