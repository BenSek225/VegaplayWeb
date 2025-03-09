import React from "react";
import { FormData } from "../../../screens/auth/RegisterScreen"; // Importer le type depuis le parent

interface Props {
  formData: FormData;
  handleChange: (field: keyof FormData, value: string | boolean) => void;
}

/**
 * Étape 2 pour desktop : Informations de contact
 * Regroupe le numéro de téléphone (avec préfixe +225 et limite de 10 chiffres),
 * l’email et l’adresse (quartier en premier, ville en dernier)
 */
const Step2ContactInfo: React.FC<Props> = ({ formData, handleChange }) => {
  // Gestion du numéro de téléphone avec préfixe +225
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Supprime tout sauf les chiffres
    if (value.length <= 10) {
      handleChange("phoneNumber", `+225${value}`);
    }
  };

  // Extraction de la partie modifiable du numéro (sans +225)
  const phoneNumberValue = formData.phoneNumber.startsWith("+225")
    ? formData.phoneNumber.slice(4)
    : formData.phoneNumber;

  // Validation : exactement 10 chiffres après +225
  const isPhoneValid = formData.phoneNumber.length === 1 && /^\+225\d{10}$/.test(formData.phoneNumber);

  return (
    <>
      <h2 className="text-2xl font-bold text-indigo-900 text-center mb-6">Tes informations</h2>
      <div className="space-y-8">
        {/* Numéro de téléphone avec préfixe +225 */}
        <div className="relative">
          <label className="absolute -top-2 left-4 bg-white px-1 text-sm text-gray-600 transition-all duration-200">
            Numéro de mobile
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 transition-all">
            <span className="pl-4 py-3 text-gray-900">+225</span>
            <input
              type="tel"
              value={phoneNumberValue}
              onChange={handlePhoneChange}
              maxLength={10}
              className="w-full px-4 py-3 text-gray-900 focus:outline-none rounded-r-lg"
              placeholder="0705010000"
              autoComplete="off"
            />
          </div>
          {!isPhoneValid && formData.phoneNumber.length > 4 && (
            <p className="text-sm text-gray-500 italic">
              Met les 10 chiffres de ton numéro après le +225.
            </p>
          )}
        </div>

        {/* Email */}
        <div className="relative">
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full px-10 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            placeholder="Email"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
        </div>

        {/* Adresse avec nouvel ordre */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-indigo-900">Ton adresse</h3>
          {/* Quartier (obligatoire) */}
          <input
            type="text"
            value={formData.quartier}
            onChange={(e) => handleChange("quartier", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            placeholder="Quartier *"
          />
          {/* Complément d’adresse (facultatif) */}
          <input
            type="text"
            value={formData.addressDetails}
            onChange={(e) => handleChange("addressDetails", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            placeholder="Complément d’adresse (facultatif)"
          />
          {/* Code postal (facultatif) */}
          <input
            type="text"
            value={formData.postalCode}
            onChange={(e) => handleChange("postalCode", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            placeholder="Code postal (facultatif)"
          />
          {/* Ville (obligatoire) */}
          <input
            type="text"
            value={formData.city}
            onChange={(e) => handleChange("city", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            placeholder="Ville *"
          />
        </div>
      </div>
    </>
  );
};

export default Step2ContactInfo;