import React from "react";

/**
 * Portefeuille et historique des transactions pour VegaPlay MVP
 * Affiche le solde et un historique statique avec icônes colorées.
 */
const Wallet: React.FC = () => {
  const transactions = [
    { type: "Dépôt", amount: "5,000 FCFA", icon: "🔵" },
    { type: "Gain", amount: "2,000 FCFA", icon: "🟢" },
    { type: "Perte", amount: "-1,000 FCFA", icon: "🔴" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-indigo-900 dark:text-indigo-200">
        Portefeuille
      </h2>
      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md">
        <p className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          25,000 FCFA
        </p>
        <div className="space-y-2">
          {transactions.map((tx, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-gray-800 dark:text-gray-100"
            >
              <span>{tx.icon}</span>
              <p>
                {tx.type}: {tx.amount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wallet;