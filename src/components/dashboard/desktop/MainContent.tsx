import React from "react";
import MatchCard from "./MatchCard";

/**
 * Contenu central dynamique du Dashboard VegaPlay
 * Affiche les matchs en cours, tournois ou détails selon l’interaction utilisateur.
 */
interface MainContentProps {
  activeSection: string;
  selectedGame: string | null;
}

const MainContent: React.FC<MainContentProps> = ({ activeSection, selectedGame }) => {
  const matches = [
    { name: "Ludo Match 1", status: "En cours", time: "12:45" },
    { name: "Dames Match 1", status: "En attente", time: "Attente joueur" },
    { name: "Échecs Match 1", status: "En cours", time: "08:30" },
  ];

  const tournaments = [
    { name: "Tournoi Ludo", stake: "500 F", participants: "8/10" },
    { name: "Tournoi Échecs", stake: "1000 F", participants: "4/6" },
  ];

  const renderContent = () => {
    if (selectedGame) {
      return (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-indigo-900">Détails de {selectedGame}</h2>
          <div className="space-y-4">
            {matches
              .filter((match) => match.name.includes(selectedGame))
              .map((match) => (
                <MatchCard key={match.name} name={match.name} status={match.status} time={match.time} />
              ))}
          </div>
        </div>
      );
    }

    switch (activeSection) {
      case "parties":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-900">Matchs en cours</h2>
            <div className="space-y-4">
              {matches.map((match) => (
                <MatchCard key={match.name} name={match.name} status={match.status} time={match.time} />
              ))}
            </div>
          </div>
        );
      case "tournois":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-900">Tournois à venir</h2>
            <div className="space-y-4">
              {tournaments.map((tournament) => (
                <div
                  key={tournament.name}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <p className="font-medium text-indigo-900">{tournament.name}</p>
                  <p className="text-sm text-gray-600">Mise : {tournament.stake}</p>
                  <p className="text-sm text-gray-600">Participants : {tournament.participants}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case "jeux":
      case "social":
      case "bonus":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-900">
              {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
            </h2>
            <p className="text-gray-600">Contenu pour {activeSection} (à venir).</p>
          </div>
        );
      default:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-900">Matchs en cours & Tournois</h2>
            <div className="space-y-4">
              {matches.map((match) => (
                <MatchCard key={match.name} name={match.name} status={match.status} time={match.time} />
              ))}
              <h3 className="text-xl font-semibold text-indigo-900">Tournois à venir</h3>
              {tournaments.map((tournament) => (
                <div
                  key={tournament.name}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <p className="font-medium text-indigo-900">{tournament.name}</p>
                  <p className="text-sm text-gray-600">Mise : {tournament.stake}</p>
                  <p className="text-sm text-gray-600">Participants : {tournament.participants}</p>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <main className="flex-1 p-6 mt-16 ml-72 mr-72 bg-gray-100 overflow-y-auto">{renderContent()}</main>
  );
};

export default MainContent;