import React from "react";
import { FormData } from "../../../screens/auth/RegisterScreen"; // Importer le type depuis le parent

interface Props {
  formData: FormData;
  handleChange: (field: keyof FormData, value: string | boolean) => void;
}

/**
 * Étape 3 pour mobile : Saisie du nom de famille
 * Affiche un champ texte pour le nom, personnalisé avec le prénom déjà saisi.
 */
const Step3LastName: React.FC<Props> = ({ formData, handleChange }) => {
  return (
    <>
      <h2 className="text-2xl font-bold text-indigo-900 text-center mb-4">
        Merci {formData.firstName}, quel est ton nom ?
      </h2>
      <input
        type="text"
        value={formData.lastName}
        onChange={(e) => handleChange("lastName", e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        placeholder="Nom de famille"
      />
    </>
  );
};

export default Step3LastName;