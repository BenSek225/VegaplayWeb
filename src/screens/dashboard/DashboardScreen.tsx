import React, { useState, useEffect } from "react";
import Header from "../../components/dashboard/desktop/Header";
import SidebarLeft from "../../components/dashboard/desktop/SidebarLeft";
import SidebarRight from "../../components/dashboard/desktop/SidebarRight";
import MainContent from "../../components/dashboard/desktop/MainContent";

/**
 * Point d’entrée principal du Dashboard VegaPlay
 * Orchestre l’affichage global et adapte le layout selon la taille de l’écran (grand écran uniquement pour l’instant).
 */
const DashboardScreen: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("parties"); // Section active du Header
  const [selectedGame, setSelectedGame] = useState<string | null>(null); // Jeu sélectionné dans SidebarLeft
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(true); // Détection écran

  // Détection de la taille de l’écran
  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {isLargeScreen ? (
        <>
          {/* Header fixe en haut */}
          <Header setActiveSection={setActiveSection} />

          {/* Layout principal avec sidebars et contenu central */}
          <div className="flex flex-1">
            <SidebarLeft setSelectedGame={setSelectedGame} setActiveSection={setActiveSection} />
            <MainContent activeSection={activeSection} selectedGame={selectedGame} />
            <SidebarRight />
          </div>
        </>
      ) : (
        <div className="flex-1 flex items-center justify-center text-indigo-900">
          Version mobile en cours de développement
        </div>
      )}
    </div>
  );
};

export default DashboardScreen;