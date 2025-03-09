import React from "react";
import { FormData } from "../../../screens/auth/RegisterScreen"; // Importer le type depuis le parent

interface Props {
  formData: FormData;
  handleChange: (field: keyof FormData, value: string | boolean) => void;
}

/**
 * Étape 1 pour mobile : Choix du genre (Monsieur/Madame)
 * Affiche deux boutons pour sélectionner le genre et met à jour formData via handleChange.
 */
const Step1Gender: React.FC<Props> = ({ formData, handleChange }) => {
  return (
    <>
      <h2 className="text-2xl font-bold text-indigo-900 text-center mb-4">Pour commencer, on t’appelle ?</h2>
      <div className="flex justify-center gap-4">
        <button
          type="button"
          onClick={() => handleChange("gender", "Monsieur")}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
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
          className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
            formData.gender === "Madame"
              ? "bg-indigo-600 text-white"
              : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
          }`}
        >
          Madame
        </button>
      </div>
    </>
  );
};

export default Step1Gender;