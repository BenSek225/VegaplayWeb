import React, { useState } from "react";

/**
 * Barre supérieure fixe du Dashboard VegaPlay
 * Affiche la navigation, le solde, l’historique et le profil utilisateur.
 */
interface HeaderProps {
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setActiveSection }) => {
  const navItems = [
    { label: "Parties", value: "parties" },
    { label: "Tournois", value: "tournois" },
    { label: "Jeux", value: "jeux" },
    { label: "Social", value: "social" },
    { label: "Bonus", value: "bonus" },
  ];
  const [activeItem, setActiveItem] = useState<string>("parties");

  const handleNavClick = (value: string) => {
    setActiveItem(value);
    setActiveSection(value);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-indigo-900 text-white p-4 flex items-center justify-between shadow-lg z-50">
      {/* Logo et navigation */}
      <div className="flex items-center gap-6">
        <h1
          className="text-xl font-bold cursor-pointer hover:text-purple-600 transition-all duration-300"
          onClick={() => handleNavClick("parties")}
        >
          VegaPlay
        </h1>
        <nav className="flex gap-4">
          {navItems.map((item) => (
            <button
              key={item.value}
              className={`relative px-2 py-1 transition-all duration-300 ${
                activeItem === item.value ? "text-purple-600" : "hover:text-purple-600"
              }`}
              onClick={() => handleNavClick(item.value)}
            >
              {item.label}
              {activeItem === item.value && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 animate-slide-in" />
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Infos utilisateur */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold">1250 F</span>
          <button className="bg-purple-600 text-white w-6 h-6 rounded-full hover:bg-purple-700 transition-all duration-300">
            +
          </button>
        </div>
        <button className="bg-purple-600 text-white px-3 py-1 rounded-lg hover:bg-purple-700 transition-all duration-300">
          Mes parties
        </button>
        <div className="flex items-center gap-2 cursor-pointer hover:text-purple-600 transition-all duration-300">
          <span>Utilisateur1</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;