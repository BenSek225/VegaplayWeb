import React from "react";

/**
 * Carte individuelle pour un jeu dans SidebarLeft
 * Affiche une image, un nom et un bouton "Jouer" au hover.
 */
interface GameCardProps {
  name: string;
  image: string;
  onClick: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ name, image, onClick }) => {
  return (
    <div
      className="flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 cursor-pointer group"
      onClick={onClick}
    >
      <img src={image} alt={name} className="w-10 h-10 rounded" />
      <span className="flex-1 text-white">{name}</span>
      <button className="opacity-0 group-hover:opacity-100 bg-purple-600 text-white px-2 py-1 rounded-lg hover:bg-purple-700 transition-all duration-300">
        Jouer
      </button>
    </div>
  );
};

export default GameCard;