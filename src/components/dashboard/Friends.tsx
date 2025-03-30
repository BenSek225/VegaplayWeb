import React from "react";

/**
 * Section amis pour VegaPlay MVP
 * Affiche une liste d’amis avec statut et boutons d’interaction (simulés).
 * Sur mobile, réduit à une icône avec pop-up.
 */
const Friends: React.FC = () => {
  const friends = [
    { name: "Ami1", status: "En ligne" },
    { name: "Ami2", status: "Occupé" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-indigo-900 dark:text-indigo-200">Amis</h2>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hidden md:block">
        {friends.map((friend) => (
          <div
            key={friend.name}
            className="flex justify-between items-center mb-2 last:mb-0"
          >
            <p className="text-gray-800 dark:text-gray-100">
              {friend.name} - {friend.status}
            </p>
            <button className="text-indigo-600 hover:text-indigo-700 transition-all duration-300">
              ✉️
            </button>
          </div>
        ))}
        <button className="w-full mt-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300">
          Inviter un ami
        </button>
      </div>
      {/* Version mobile : Icône avec compteur */}
      <div className="md:hidden flex items-center justify-center">
        <button className="relative bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-all duration-300">
          👥
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            2
          </span>
        </button>
      </div>
    </div>
  );
};

export default Friends;