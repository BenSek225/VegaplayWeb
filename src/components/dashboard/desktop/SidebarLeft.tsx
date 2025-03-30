import React from "react";
import GameCard from "./GameCard";

/**
 * Sidebar gauche fixe du Dashboard VegaPlay
 * Affiche une barre de recherche et une liste de jeux disponibles.
 */
interface SidebarLeftProps {
  setSelectedGame: (game: string | null) => void;
  setActiveSection: (section: string) => void;
}

const SidebarLeft: React.FC<SidebarLeftProps> = ({ setSelectedGame, setActiveSection }) => {
  const games = [
    { name: "Ludo", image: "https://via.placeholder.com/50" },
    { name: "Dames", image: "https://via.placeholder.com/50" },
    { name: "Échecs", image: "https://via.placeholder.com/50" },
    { name: "Cartes", image: "https://via.placeholder.com/50" },
    { name: "Casino", image: "https://via.placeholder.com/50" },
  ];

  const handleGameClick = (gameName: string) => {
    setSelectedGame(gameName);
    setActiveSection("jeux");
  };

  return (
    <aside className="fixed top-16 left-0 w-72 h-[calc(100vh-4rem)] bg-indigo-800 text-white p-4 overflow-y-auto">
      {/* Barre de recherche */}
      <input
        type="text"
        placeholder="Rechercher un jeu..."
        className="w-full p-2 mb-4 bg-indigo-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
        disabled // Simulé pour le MVP
      />

      {/* Liste des jeux */}
      <div className="space-y-4">
        {games.map((game) => (
          <GameCard
            key={game.name}
            name={game.name}
            image={game.image}
            onClick={() => handleGameClick(game.name)}
          />
        ))}
      </div>
    </aside>
  );
};

export default SidebarLeft;