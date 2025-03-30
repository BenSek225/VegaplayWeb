import React from "react";

/**
 * Carte individuelle pour un match dans MainContent
 * Affiche les détails du match et un bouton "Rejoindre" au hover.
 */
interface MatchCardProps {
  name: string;
  status: string;
  time: string;
}

const MatchCard: React.FC<MatchCardProps> = ({ name, status, time }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 group">
      <p className="font-medium text-indigo-900">{name}</p>
      <p className="text-sm text-gray-600">État : {status}</p>
      <p className="text-sm text-gray-600">Temps : {time}</p>
      <button className="mt-2 opacity-0 group-hover:opacity-100 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-all duration-300">
        Rejoindre
      </button>
    </div>
  );
};

export default MatchCard;