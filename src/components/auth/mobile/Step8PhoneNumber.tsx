import React, { useState } from "react";
import { FormData } from "../../../screens/auth/RegisterScreen";

interface Props {
  formData: FormData;
  handleChange: (field: keyof FormData, value: string | boolean) => void;
}

/**
 * Étape 8 pour mobile : Saisie du numéro de téléphone
 * Affiche un champ téléphone avec préfixe +225 fixe et validation comme sur desktop.
 */
const Step8PhoneNumber: React.FC<Props> = ({ formData, handleChange }) => {
  // Extrait les 10 chiffres après +225 ou une chaîne vide
  const phoneNumberValue = formData.phoneNumber.startsWith("+225")
    ? formData.phoneNumber.slice(4)
    : formData.phoneNumber;

  // Validation : 10 chiffres exactement après +225
  const isPhoneValid = formData.phoneNumber.length === 14 && /^\+225\d{10}$/.test(formData.phoneNumber);

  // Gestion du changement : Ajoute +225 automatiquement
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Supprime tout sauf les chiffres
    handleChange("phoneNumber", value ? `+225${value}` : "");
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-indigo-900 text-center mb-4">Et ton numéro de téléphone</h2>
      <p className="text-sm text-gray-600 text-center mb-4">Pour sécuriser ton compte</p>
      <div className="space-y-4">
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
      </div>
    </>
  );
};

export default Step8PhoneNumber;