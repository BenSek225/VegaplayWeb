import React from "react";

const Jeux = () => {
  const games = [
    { name: "Dames", img: "https://placehold.co/300x200?text=Dames", description: "Stratégie et compétition" },
    { name: "Échecs", img: "https://placehold.co/300x200?text=Échecs", description: "Un classique intemporel" },
    { name: "Poker", img: "https://placehold.co/300x200?text=Poker", description: "Bluff et récompenses" },
    { name: "Ludo", img: "https://placehold.co/300x200?text=Ludo", description: "Fun en famille" },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 bg-gray-50 flex flex-col items-center gap-12 overflow-hidden">
      {/* Titre et description */}
      <div className="flex flex-col items-center text-center gap-6">
        <h2 className="text-indigo-900 text-3xl md:text-5xl font-bold leading-tight tracking-tight">
          Vos jeux préférés, en ligne
        </h2>
        <p className="text-gray-700 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
          Affrontez des joueurs du monde entier dans des parties endiablées et pariez pour des gains réels.
        </p>
      </div>

      {/* Grille de jeux */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {games.map((game, index) => (
          <div
            key={game.name}
            className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            <img
              src={game.img}
              alt={`Jouez à ${game.name} sur VegaPlay`}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-indigo-700 text-xl font-semibold">{game.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{game.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bouton CTA */}
      <a
        href="/games"
        className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg text-base font-medium"
      >
        Explorer tous les jeux
      </a>
    </section>
  );
};

export default Jeux;