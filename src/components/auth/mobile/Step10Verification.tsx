import React, { useState, useRef, useEffect } from "react";
import { FormData } from "../../../screens/auth/RegisterScreen";

interface Props {
  formData: FormData;
  handleChange: (field: keyof FormData, value: string | boolean) => void;
}

// Code de vérification simulé (à remplacer par une API plus tard)
const VALID_CONFIRMATION_CODE = "12345";

/**
 * Étape 10 pour mobile : Vérification finale
 * Affiche un choix email/numéro, un champ pour le code de confirmation et les consentements, comme en desktop.
 */
const Step10Verification: React.FC<Props> = ({ formData, handleChange }) => {
  const [verificationMethod, setVerificationMethod] = useState<"email" | "phone" | null>(null);
  const [resendCooldown, setResendCooldown] = useState<number | null>(null);
  const [verificationError, setVerificationError] = useState<string | null>(null);
  const codeInputs = useRef<(HTMLInputElement | null)[]>(new Array(5).fill(null));

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

  // Déclenche une vérification si le code est complet
  useEffect(() => {
    if (formData.confirmationCode.length === 5 && formData.confirmationCode !== VALID_CONFIRMATION_CODE) {
      setVerificationError("Le code de vérification que vous avez entré est incorrect, veuillez réessayer.");
      setVerificationMethod(null); // Revient au choix email/numéro
      handleChange("confirmationCode", ""); // Réinitialise le code
    }
  }, [formData.confirmationCode, handleChange]);

  return (
    <>
      <h2 className="text-2xl font-bold text-indigo-900 text-center mb-4">
        Dernière étape avant de rejoindre la communauté VegaPlay
      </h2>
      <div className="space-y-6">
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
            <p className="text-sm text-gray-600 text-center">
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
        {/* Consentements avec checkboxes stylées */}
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
    </>
  );
};

export default Step10Verification;