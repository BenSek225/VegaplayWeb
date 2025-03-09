import React from "react";
import { FormData } from "../../../screens/auth/RegisterScreen"; // Importer le type depuis le parent

interface Props {
  formData: FormData;
  handleChange: (field: keyof FormData, value: string | boolean) => void;
}

/**
 * Étape 2 pour mobile : Saisie du prénom
 * Affiche un champ texte pour le prénom avec un sous-titre explicatif
 */
const Step2FirstName: React.FC<Props> = ({ formData, handleChange }) => {
  return (
    <>
      <h2 className="text-2xl font-bold text-indigo-900 text-center mb-4">Comment t’appelles-tu ?</h2>
      <p className="text-sm text-gray-600 text-center mb-4">
        Saisis tes informations comme stipulé sur ta pièce d’identité
      </p>
      <input
        type="text"
        value={formData.firstName}
        onChange={(e) => handleChange("firstName", e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        placeholder="Prénom(s)"
      />
    </>
  );
};

export default Step2FirstName;