import React, { useState } from "react";

/**
 * Barre latérale de navigation pour VegaPlay MVP
 * Fixée à gauche sur desktop, devient un menu déroulant sur mobile avec un bouton burger.
 */
const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // État pour toggle sur mobile

  return (
    <>
      {/* Bouton burger pour mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-indigo-900 text-white rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Sidebar */}
      <aside
        className={`w-64 h-screen bg-indigo-900 text-white p-4 fixed top-0 left-0 z-40 transition-all duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Logo */}
        <h2 className="text-xl font-bold mb-6 hover:text-indigo-200 transition-all duration-300">
          VegaPlay
        </h2>

        {/* Liste de navigation */}
        <ul className="space-y-4">
          {[
            { icon: "🏠", label: "Accueil" },
            { icon: "🎮", label: "Jeux" },
            { icon: "📜", label: "Parties en cours" },
            { icon: "👥", label: "Amis" },
            { icon: "💰", label: "Portefeuille" },
            { icon: "⚙️", label: "Paramètres" },
            { icon: "🚪", label: "Déconnexion" },
          ].map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 cursor-pointer"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Overlay pour fermer sur mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;