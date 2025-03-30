import React from "react";

/**
 * Résumé du portefeuille pour VegaPlay MVP
 * Affiche le solde actuel avec des boutons pour dépôt/retrait (simulés).
 */
const WalletSummary: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
      <h2 className="text-lg font-semibold text-indigo-900 dark:text-indigo-200 mb-2">
        Résumé du portefeuille
      </h2>
      <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">25,000 FCFA</p>
      <div className="flex gap-4 mt-4">
        <button className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300">
          ➕ Déposer
        </button>
        <button className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300">
          ➖ Retirer
        </button>
      </div>
    </div>
  );
};

export default WalletSummary;