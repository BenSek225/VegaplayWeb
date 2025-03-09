import React, { useState } from "react";
import { FormData } from "../../../screens/auth/RegisterScreen";

interface Props {
  formData: FormData;
  handleChange: (field: keyof FormData, value: string | boolean) => void;
  showPassword: boolean;
  setShowPassword: (value: boolean) => void;
  passwordValidation: {
    hasLowercase: boolean;
    hasUppercase: boolean;
    hasNumber: boolean;
    lengthValid: boolean;
  };
}

/**
 * Étape 6 pour mobile : Saisie du mot de passe;
 * Affiche un champ mot de passe avec une icône de visibilité, des critères de validation et une erreur pour les espaces.
 */
const Step6Password: React.FC<Props> = ({
  formData,
  handleChange,
  showPassword,
  setShowPassword,
  passwordValidation,
}) => {
  const [hasSpaceError, setHasSpaceError] = useState(false);

  // Gestion du mot de passe avec détection d’espace
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setHasSpaceError(value.includes(" "));
    handleChange("password", value);
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-indigo-900 text-center mb-4">Et ton mot de passe</h2>
      <div className="space-y-4">
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handlePasswordChange}
            className="w-full px-10 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            placeholder="Mot de passe"
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
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none"
          >
            {showPassword ? (
              <svg
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            )}
          </button>
        </div>
        <ul className="text-sm space-y-2">
          <li
            className={`flex items-center gap-2 ${
              passwordValidation.hasLowercase ? "text-green-500" : "text-gray-600"
            }`}
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Utilisez au moins une minuscule
          </li>
          <li
            className={`flex items-center gap-2 ${
              passwordValidation.hasUppercase ? "text-green-500" : "text-gray-600"
            }`}
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Utilisez au moins une majuscule
          </li>
          <li
            className={`flex items-center gap-2 ${
              passwordValidation.hasNumber ? "text-green-500" : "text-gray-600"
            }`}
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Utilisez au moins un chiffre
          </li>
          <li
            className={`flex items-center gap-2 ${
              passwordValidation.lengthValid ? "text-green-500" : "text-gray-600"
            }`}
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Utilisez entre 8 et 20 caractères
          </li>
          {hasSpaceError && (
            <li className="flex items-center gap-2 text-red-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Certains caractères saisis ne sont pas acceptés
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Step6Password;