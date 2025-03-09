import React from "react";
import { FormData } from "../../../screens/auth/RegisterScreen"; // Importer le type depuis le parent

interface Props {
  formData: FormData;
  handleChange: (field: keyof FormData, value: string | boolean) => void;
}

/**
 * Étape 9 pour mobile : Saisie de l’adresse
 * Affiche plusieurs champs pour la ville, le quartier, le code postal et les détails.
 */
const Step9Address: React.FC<Props> = ({ formData, handleChange }) => {
  return (
    <>
      <h2 className="text-2xl font-bold text-indigo-900 text-center mb-4">Quelle est ton adresse ?</h2>
      <div className="space-y-4">
        <input
          type="text"
          value={formData.quartier}
          onChange={(e) => handleChange("quartier", e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          placeholder="Quartier *"
        />
        <input
          type="text"
          value={formData.addressDetails}
          onChange={(e) => handleChange("addressDetails", e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          placeholder="Complément d’adresse (facultatif)"
        />
        <input
          type="text"
          value={formData.postalCode}
          onChange={(e) => handleChange("postalCode", e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          placeholder="Code postal (facultatif)"
        />
        <input
          type="text"
          value={formData.city}
          onChange={(e) => handleChange("city", e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          placeholder="Ville *"
        />
      </div>
    </>
  );
};

export default Step9Address;