import React from "react";
import { FormData } from "../../../screens/auth/RegisterScreen"; // Importer le type depuis le parent

interface Props {
  formData: FormData;
  handleChange: (field: keyof FormData, value: string | boolean) => void;
}

/**
 * Étape 4 pour mobile : Saisie de la date de naissance
 * Affiche un champ de type date.
 */
const Step4DateOfBirth: React.FC<Props> = ({ formData, handleChange }) => {
  return (
    <>
      <h2 className="text-2xl font-bold text-indigo-900 text-center mb-4">
        Parfait, quelle est ta date de naissance ?
      </h2>
      <input
        type="date"
        value={formData.dateOfBirth}
        onChange={(e) => handleChange("dateOfBirth", e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
      />
    </>
  );
};

export default Step4DateOfBirth;