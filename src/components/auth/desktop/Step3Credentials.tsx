import React, { useState, useRef, useEffect } from "react";
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

// Code de vérification simulé (à remplacer par une API plus tard)
const VALID_CONFIRMATION_CODE = "12345";

const Step3Credentials: React.FC<Props> = ({
  formData,
  handleChange,
  showPassword,
  setShowPassword,
  passwordValidation,
}) => {
  const [verificationMethod, setVerificationMethod] = useState<"email" | "phone" | null>(null);
  const [hasSpaceError, setHasSpaceError] = useState(false);
  const [resendCooldown, setResendCooldown] = useState<number | null>(null);
  const [verificationError, setVerificationError] = useState<string | null>(null);
  const codeInputs = useRef<(HTMLInputElement | null)[]>(new Array(5).fill(null));

  // Gestion du mot de passe avec détection d’espace
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setHasSpaceError(value.includes(" "));
    handleChange("password", value);
  };

  // Gestion des inputs du code de confirmation
  const handleCodeChange = (index: number, value: string) => {
    if (!/^\d$/.test(value) && value !== "") return; // Accepte uniquement les chiffres
    const newCode = formData.confirmationCode.split("");
    newCode[index] = value;
    handleChange("confirmationCode", newCode.join(""));

    // Passe au champ suivant si une valeur est entrée
    if (value && index < 4) {
      codeInputs.current[index + 1]?.focus();
    }

    // Réinitialise l’erreur si l’utilisateur modifie le code
    setVerificationError(null);
  };

  // Masquer une partie de l’email pour l’affichage
  const maskEmail = (email: string) => {
    const [name, domain] = email.split("@");
    return `${name.slice(0, 2)}.....@${domain}`;
  };

  // Gestion du clic sur "Renvoyer"
  const handleResend = () => {
    if (resendCooldown !== null) return;
    setResendCooldown(45);
    setVerificationError(null); // Réinitialise l’erreur au renvoi
  };

  // Gestion du compte à rebours
  useEffect(() => {
    if (resendCooldown === null || resendCooldown <= 0) return;
    const timer = setInterval(() => {
      setResendCooldown((prev) => (prev !== null ? prev - 1 : null));
    }, 1000);
    return () => clearInterval(timer);
  }, [resendCooldown]);

  // Déclenche une requête API au choix de la méthode (simulé ici)
  useEffect(() => {
    if (verificationMethod) {
      setVerificationError(null); // Réinitialise l’erreur au choix
    }
  }, [verificationMethod]);

  // Vérifie le code et affiche une erreur si incorrect
  useEffect(() => {
    if (formData.confirmationCode.length === 5 && formData.confirmationCode !== VALID_CONFIRMATION_CODE) {
      setVerificationError("Le code de vérification que vous avez entré est incorrect, veuillez réessayer.");
      setVerificationMethod(null); // Revient au choix email/numéro
      handleChange("confirmationCode", ""); // Réinitialise le code
    }
  }, [formData.confirmationCode, handleChange]);

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-bold text-indigo-900 text-center mb-4">Tes identifiants VegaPlay</h2>
      <div className="space-y-6">
        {/* Pseudo */}
        <input
          type="text"
          value={formData.username}
          onChange={(e) => handleChange("username", e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          placeholder="Pseudo"
        />

        {/* Mot de passe */}
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
                <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              ) : (
                <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              )}
            </button>
          </div>
          <ul className="text-sm space-y-2">
            <li className={`flex items-center gap-2 ${passwordValidation.hasLowercase ? "text-green-500" : "text-gray-600"}`}>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Utilisez au moins une minuscule
            </li>
            <li className={`flex items-center gap-2 ${passwordValidation.hasUppercase ? "text-green-500" : "text-gray-600"}`}>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Utilisez au moins une majuscule
            </li>
            <li className={`flex items-center gap-2 ${passwordValidation.hasNumber ? "text-green-500" : "text-gray-600"}`}>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Utilisez au moins un chiffre
            </li>
            <li className={`flex items-center gap-2 ${passwordValidation.lengthValid ? "text-green-500" : "text-gray-600"}`}>
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

        {/* Vérification */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-indigo-900">Vérification</h3>
          {verificationError && (
            <p className="text-red-500 text-sm text-center">{verificationError}</p>
          )}
          {!verificationMethod ? (
            <div className="flex gap-4 justify-center">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="verification"
                  onChange={() => setVerificationMethod("email")}
                  className="hidden"
                />
                <span
                  className={`cursor-pointer px-4 py-2 rounded-full border transition-all ${
                    verificationMethod === "email"
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "border-gray-300 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Par email
                </span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="verification"
                  onChange={() => setVerificationMethod("phone")}
                  className="hidden"
                />
                <span
                  className={`cursor-pointer px-4 py-2 rounded-full border transition-all ${
                    verificationMethod === "phone"
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "border-gray-300 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Par numéro
                </span>
              </label>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Nous avons envoyé un code de confirmation à votre{" "}
                {verificationMethod === "email" ? "email" : "numéro"} :{" "}
                <span className="font-semibold">
                  {verificationMethod === "email" ? maskEmail(formData.email) : formData.phoneNumber}
                </span>{" "}
                <span
                  onClick={handleResend}
                  className={`cursor-pointer text-indigo-600 hover:underline ${
                    resendCooldown !== null ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Renvoyer {resendCooldown !== null ? `(${resendCooldown}s)` : ""}
                </span>
              </p>
              <div className="flex justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <input
                    key={i}
                    type="text"
                    maxLength={1}
                    value={formData.confirmationCode[i] || ""}
                    onChange={(e) => handleCodeChange(i, e.target.value)}
                    ref={(el) => {
                      codeInputs.current[i] = el;
                    }}
                    className="w-12 h-12 text-center border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Consentements */}
        <div className="space-y-4">
          <label className="flex items-center justify-between gap-3 text-sm text-gray-600">
            <span className="flex-1 text-left">
              Je confirme avoir plus de 18 ans et avoir fourni des informations conformes à mon identité. J’ai lu et
              j’accepte les{" "}
              <span className="text-indigo-600 hover:underline cursor-pointer">Conditions Générales</span> et la{" "}
              <span className="text-indigo-600 hover:underline cursor-pointer">
                Charte sur le Respect de la Vie Privée
              </span>.
            </span>
            <div
              className={`relative w-10 h-4 rounded-full border-2 transition-all duration-300 ${
                formData.over18Confirmed ? "bg-indigo-200 border-indigo-200" : "bg-gray-200 border-gray-300"
              }`}
              onClick={() => handleChange("over18Confirmed", !formData.over18Confirmed)}
            >
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full transition-all duration-300 ${
                  formData.over18Confirmed ? "translate-x-5 bg-indigo-600" : "translate-x-0 bg-gray-400"
                }`}
              />
            </div>
          </label>
          <label className="flex items-center justify-between gap-3 text-sm text-gray-600">
            <span className="flex-1 text-left">
              J’accepte de recevoir les offres et informations de la part de VegaPlay.
            </span>
            <div
              className={`relative w-10 h-4 rounded-full border-2 transition-all duration-300 ${
                formData.marketingConsent ? "bg-indigo-200 border-indigo-200" : "bg-gray-200 border-gray-300"
              }`}
              onClick={() => handleChange("marketingConsent", !formData.marketingConsent)}
            >
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full transition-all duration-300 ${
                  formData.marketingConsent ? "translate-x-5 bg-indigo-600" : "translate-x-0 bg-gray-400"
                }`}
              />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Step3Credentials;