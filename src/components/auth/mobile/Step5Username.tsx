import React from "react";
import { FormData } from "../../../screens/auth/RegisterScreen"; // Importer le type depuis le parent

interface Props {
  formData: FormData;
  handleChange: (field: keyof FormData, value: string | boolean) => void;
}

/**
 * Étape 5 pour mobile : Choix du pseudo
 * Affiche un champ texte pour le pseudo
 */
const Step5Username: React.FC<Props> = ({ formData, handleChange }) => {
  return (
    <>
      <h2 className="text-2xl font-bold text-indigo-900 text-center mb-4">
        Choisis ton pseudo, il ne te quittera plus
      </h2>
      <input
        type="text"
        value={formData.username}
        onChange={(e) => handleChange("username", e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        placeholder="Pseudo"
      />
    </>
  );
};

export default Step5Username;