import React from "react";
import { FormData } from "../../../screens/auth/RegisterScreen"; // Importer le type depuis le parent

interface Props {
  formData: FormData;
  handleChange: (field: keyof FormData, value: string | boolean) => void;
}

/**
 * Étape 1 pour desktop : Informations personnelles
 * Regroupe le genre, le prénom, le nom et la date de naissance.
 * Version agrandie avec vérification d’âge en frontend.
 */
const Step1PersonalInfo: React.FC<Props> = ({ formData, handleChange }) => {
  // Calcul de l’âge à partir de la date de naissance
  const calculateAge = (dateOfBirth: string): number => {
    const birthDate = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const age = formData.dateOfBirth ? calculateAge(formData.dateOfBirth) : null;
  const isUnder18 = age !== null && age < 18;

  return (
    <div className="space-y-8 w-full max-w-lg mx-auto">
      {/* Choix du genre avec plus d’espace */}
      <div className="flex justify-center gap-6">
        <button
          type="button"
          onClick={() => handleChange("gender", "Monsieur")}
          className={`w-full py-4 px-6 rounded-lg font-medium text-lg transition-all duration-300 ${
            formData.gender === "Monsieur"
              ? "bg-indigo-600 text-white"
              : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
          }`}
        >
          Monsieur
        </button>
        <button
          type="button"
          onClick={() => handleChange("gender", "Madame")}
          className={`w-full py-4 px-6 rounded-lg font-medium text-lg transition-all duration-300 ${
            formData.gender === "Madame"
              ? "bg-indigo-600 text-white"
              : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
          }`}
        >
          Madame
        </button>
      </div>

      {/* Champ prénom avec indication */}
      <div className="space-y-2">
        <input
          type="text"
          value={formData.firstName}
          onChange={(e) => handleChange("firstName", e.target.value)}
          className="w-full px-5 py-4 border border-gray-300 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          placeholder="Prénom(s)"
        />
        <p className="text-sm text-gray-500 italic">Pas de surnom, pas de pseudo stp !</p>
      </div>

      {/* Champ nom */}
      <input
        type="text"
        value={formData.lastName}
        onChange={(e) => handleChange("lastName", e.target.value)}
        className="w-full px-5 py-4 border border-gray-300 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        placeholder="Nom de famille"
      />

      {/* Champ date de naissance avec vérification */}
      <div className="space-y-2">
        <input
          type="date"
          value={formData.dateOfBirth}
          onChange={(e) => handleChange("dateOfBirth", e.target.value)}
          className="w-full px-5 py-4 border border-gray-300 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        />
        {isUnder18 && (
          <div className="flex items-start gap-2 text-red-500 text-sm">
            <svg
              className="w-5 h-5 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <p>
              Désolé, il va falloir attendre tes 18 ans pour parier 🔞. Pour information, si tu rentres de fausses
              informations lors de ton inscription, ou que tu utilises l’identité d’un tiers, ton compte sera fermé et
              ton argent sera bloqué.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Step1PersonalInfo;