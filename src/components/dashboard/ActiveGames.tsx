import React from "react";

/**
 * Liste des parties en cours pour VegaPlay MVP
 * Affiche les parties avec nom, adversaire et état, avec animation fade-in.
 */
const ActiveGames: React.FC = () => {
  const activeGames = [
    { name: "Jeu 1", opponent: "Ami1", status: "En attente" },
    { name: "Jeu 2", opponent: "Ami2", status: "En cours" },
  ];

  return (
    <div className="space-y-4 animate-fade-in">
      <h2 className="text-lg font-semibold text-indigo-900 dark:text-indigo-200">
        Parties en cours
      </h2>
      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
        {activeGames.map((game) => (
          <div
            key={game.name}
            className="flex justify-between items-center mb-2 last:mb-0 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 cursor-pointer"
          >
            <p className="text-gray-900 dark:text-gray-100">
              {game.name} vs {game.opponent} - {game.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveGames;