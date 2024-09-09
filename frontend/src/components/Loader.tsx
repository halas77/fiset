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
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex gap-2 justify-center items-center my-4">
            <img
              src="/fissetLogo.png"
              alt="Logo Image"
              className="w-9 h-9 bg-gray-950 p-1
              rounded-full"
            />
            <h1 className="text-2xl font-semibold text-gray-900">Fisset.</h1>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="h-8 w-8 bg-gray-500 rounded-full animate-ping" />
          </div>
        </div>
      </div>
      <p className="mt-5 text-xs font-normal text-center max-w-xs">
        {randomFact}
      </p>
    </div>
  );
};

export default Loader;
