// Loader.tsx
import { useState, useEffect } from "react";

const Loader = () => {
  const facts = [
    "Fisset leverages blockchain to bring transparency to the supply chain.",
    "Blockchain technology ensures the integrity of the data in Fisset.",
    "Fisset helps reduce fraud in the supply chain by recording every step on the blockchain.",
    "With Fisset, you can trace the origin of products with just a click.",
    "Supply chain management just got smarter with Fisset's blockchain integration.",
  ];

  const [randomFact, setRandomFact] = useState("");

  useEffect(() => {
    setRandomFact(facts[Math.floor(Math.random() * facts.length)]);
  }, []);

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center bg-white text-black">
      <div className="relative flex items-center justify-center mb-10">
        <div className="animate-spin rounded-full h-40 w-40 border-b-2 border-gray-900" />
      </div>
      <p className="mt-20 text-sm font-normal text-center max-w-lg">
        {randomFact}
      </p>
    </div>
  );
};

export default Loader;
