import React from "react";
import { Link } from "react-router-dom";
import HeaderD from "../../components/home/HeaderD";
import FooterD from "../../components/home/FooterD";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header; */}
      <HeaderD />

      {/* Main Content */}
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* En-tête du tableau de bord */}
          <div className="bg-white p-6 rounded-xl shadow-md mb-8 animate-fade-in-up">
            <div className="flex flex-col items-center justify-center">
              <img
                src="logo/Logos.png" // Remplace par ton logo réel ou SVG
                alt="Profil utilisateur"
                className="w-20 h-20 rounded-full border-4 border-indigo-600 mb-4"
              />
              <h1 className="text-3xl font-bold text-indigo-900">
                Bienvenue sur votre tableau de bord
              </h1>
              <p className="text-sm text-gray-600 mt-2">
                Gérez vos paris et suivez vos performances en un clin d’œil.
              </p>
            </div>
          </div>

          {/* Grille des statistiques */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <h2 className="text-lg font-semibold text-indigo-900 mb-2">Solde actuel</h2>
              <p className="text-3xl font-bold text-green-600">0.00 €</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <h2 className="text-lg font-semibold text-indigo-900 mb-2">Paris en cours</h2>
              <p className="text-3xl font-bold text-indigo-600">0</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <h2 className="text-lg font-semibold text-indigo-900 mb-2">Gains totaux</h2>
              <p className="text-3xl font-bold text-purple-600">0.00 €</p>
            </div>
          </div>

          {/* Section des actions rapides */}
          <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <h2 className="text-xl font-semibold text-indigo-900 mb-4">Actions rapides</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                to="/deposit"
                className="p-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 text-center font-medium"
              >
                Déposer
              </Link>
              <Link
                to="/withdraw"
                className="p-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 text-center font-medium"
              >
                Retirer
              </Link>
              <Link
                to="/bet"
                className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 text-center font-medium"
              >
                Parier
              </Link>
              <Link
                to="/history"
                className="p-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 text-center font-medium"
              >
                Historique
              </Link>
            </div>
          </div>

          {/* Section des jeux récents */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-indigo-900 mb-4">Jeux récents</h2>
            <div className="space-y-4">
              <p className="text-gray-600 text-center">Aucun jeu récent pour le moment.</p>
              <Link
                to="/games"
                className="block text-center text-indigo-600 hover:text-indigo-800 hover:underline transition duration-300 font-medium"
              >
                Explorer les jeux disponibles
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* FooterD */}
      <FooterD />
    </div>
  );
};

export default Dashboard;