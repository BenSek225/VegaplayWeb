import React from "react";

/**
 * Liste des jeux disponibles pour VegaPlay MVP
 * Affiche une grille de cartes avec image, nom et bouton "Jouer".
 */
const GameList: React.FC = () => {
  const games = [
    { name: "Jeu 1", image: "https://via.placeholder.com/150" },
    { name: "Jeu 2", image: "https://via.placeholder.com/150" },
    { name: "Jeu 3", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-indigo-900 dark:text-indigo-200">
        Jeux disponibles
      </h2>
      <div className="space-y-4">
        {games.map((game) => (
          <div
            key={game.name}
            className="bg-gradient-to-r from-indigo-700 to-gray-800 p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg text-white"
          >
            <img
              src={game.image}
              alt={game.name}
              className="w-full h-32 object-cover rounded-t-lg mb-2"
            />
            <p className="font-medium">{game.name}</p>
            <button className="w-full mt-2 bg-white text-indigo-900 px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-300">
              Jouer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameList;