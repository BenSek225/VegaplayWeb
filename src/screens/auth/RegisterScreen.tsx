import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import { auth, db } from '../config/firebase'; // Décommenter une fois Firebase configuré
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { doc, setDoc } from 'firebase/firestore';

// Composants mobiles
import Step1Gender from "../../components/auth/mobile/Step1Gender";
import Step2FirstName from "../../components/auth/mobile/Step2FirstName";
import Step3LastName from "../../components/auth/mobile/Step3LastName";
import Step4DateOfBirth from "../../components/auth/mobile/Step4DateOfBirth";
import Step5Username from "../../components/auth/mobile/Step5Username";
import Step6Password from "../../components/auth/mobile/Step6Password";
import Step7Email from "../../components/auth/mobile/Step7Email";
import Step8PhoneNumber from "../../components/auth/mobile/Step8PhoneNumber";
import Step9Address from "../../components/auth/mobile/Step9Address";
import Step10Verification from "../../components/auth/mobile/Step10Verification";

// Composants desktop
import Step1PersonalInfo from "../../components/auth/desktop/Step1PersonalInfo";
import Step2ContactInfo from "../../components/auth/desktop/Step2ContactInfo";
import Step3Credentials from "../../components/auth/desktop/Step3Credentials";

// Typage des données du formulaire
export interface FormData {
  gender: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  username: string;
  password: string;
  email: string;
  phoneNumber: string;
  city: string;
  quartier: string;
  postalCode: string;
  addressDetails: string;
  confirmationCode: string;
  over18Confirmed: boolean;
  marketingConsent: boolean;
}

const RegisterScreen = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    gender: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    username: "",
    password: "",
    email: "",
    phoneNumber: "",
    city: "",
    quartier: "",
    postalCode: "",
    addressDetails: "",
    confirmationCode: "",
    over18Confirmed: false,
    marketingConsent: false,
  });
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // Détection de la taille d’écran (mobile < 768px)
  const isMobile = window.innerWidth < 768;
  const totalSteps = isMobile ? 10 : 3;

  // Gestion des changements dans le formulaire
  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Validation du mot de passe
  const validatePassword = (password: string) => ({
    hasLowercase: /[a-z]/.test(password),
    hasUppercase: /[A-Z]/.test(password),
    hasNumber: /\d/.test(password),
    lengthValid: password.length >= 8 && password.length <= 20,
  });

  const passwordValidation = validatePassword(formData.password);
  const isPasswordValid =
    passwordValidation.hasLowercase &&
    passwordValidation.hasUppercase &&
    passwordValidation.hasNumber &&
    passwordValidation.lengthValid;

  // Vérification si le formulaire est complet
  const isFormComplete = () => {
    const requiredFields: (keyof FormData)[] = [
      "gender",
      "firstName",
      "lastName",
      "dateOfBirth",
      "username",
      "password",
      "email",
      "phoneNumber",
      "city",
      "quartier",
      "confirmationCode",
      "over18Confirmed",
    ];
    return requiredFields.every((field) => !!formData[field]) && isPasswordValid;
  };

  // Conditions pour passer à l’étape suivante
  const canProceed = () => {
    // Calcul de l’âge
    const calculateAge = (dateOfBirth: string): number => {
      const birthDate = new Date(dateOfBirth);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    };
    const age = formData.dateOfBirth ? calculateAge(formData.dateOfBirth) : null;
    const isUnder18 = age !== null && age < 18;

    // Validation du numéro de téléphone : doit être +225 suivi de 10 chiffres
    const isPhoneValid = formData.phoneNumber.length === 14 && /^\+225\d{10}$/.test(formData.phoneNumber);

    // Validation du mot de passe
  const isPasswordValid =
  passwordValidation.hasLowercase &&
  passwordValidation.hasUppercase &&
  passwordValidation.hasNumber &&
  passwordValidation.lengthValid;

// Validation du code de confirmation (doit être 5 chiffres et égal à "12345")
const isConfirmationCodeValid = formData.confirmationCode.length === 5 && formData.confirmationCode === "12345";

    if (isMobile) {
      switch (step) {
        case 1: return !!formData.gender;
        case 2: return !!formData.firstName;
        case 3: return !!formData.lastName;
        case 4: return !!formData.dateOfBirth && !isUnder18; // Bloque si < 18 ans
        case 5: return !!formData.username;
        case 6: return isPasswordValid;
        case 7: return !!formData.email;
        case 8: return !!formData.phoneNumber;
        case 9: return !!formData.city && !!formData.quartier;
        case 10: return isConfirmationCodeValid && formData.over18Confirmed;
        default: return true;
      }
    } else {
      switch (step) {
        case 1:
          return (
            !!formData.gender &&
            !!formData.firstName &&
            !!formData.lastName &&
            !!formData.dateOfBirth &&
            !isUnder18
          );
        case 2:
          return (
            isPhoneValid && // Validation stricte du numéro
            !!formData.email &&
            !!formData.city &&
            !!formData.quartier
          );
        case 3: 
          return (
            !!formData.username &&
            !!isPasswordValid &&
            !!isConfirmationCodeValid &&
            formData.over18Confirmed
          );
        default: return true;
      }
    }
  };

  // Gestion de la navigation
  const handleNext = () => {
    if (step === totalSteps) {
      if (isFormComplete()) {
        submitToFirebase();
      } else {
        setError("Veuillez compléter tous les champs obligatoires.");
      }
    } else if (canProceed()) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    } else {
      navigate("/");
    }
  };

  // Envoi des données à Firebase
  const submitToFirebase = async () => {
    try {
      // Décommenter une fois Firebase configuré
      // const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      // const userId = userCredential.user.uid;
      // await setDoc(doc(db, "users", userId), formData);
      console.log("Données envoyées à Firebase :", formData);
      navigate("/login");
    } catch (err) {
      setError("Erreur lors de l’inscription. Veuillez réessayer.");
      console.error(err);
    }
  };

  // Barre de progression
  const ProgressBar = () => {
    const progress = (step / totalSteps) * 100;
    return (
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div
          className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    );
  };

  // Liste des étapes
  const mobileSteps = [
    <Step1Gender formData={formData} handleChange={handleChange} />,
    <Step2FirstName formData={formData} handleChange={handleChange} />,
    <Step3LastName formData={formData} handleChange={handleChange} />,
    <Step4DateOfBirth formData={formData} handleChange={handleChange} />,
    <Step5Username formData={formData} handleChange={handleChange} />,
    <Step6Password
      formData={formData}
      handleChange={handleChange}
      showPassword={showPassword}
      setShowPassword={setShowPassword}
      passwordValidation={passwordValidation}
    />,
    <Step7Email formData={formData} handleChange={handleChange} />,
    <Step8PhoneNumber formData={formData} handleChange={handleChange} />,
    <Step9Address formData={formData} handleChange={handleChange} />,
    <Step10Verification formData={formData} handleChange={handleChange} />,
  ];

  const desktopSteps = [
    <Step1PersonalInfo formData={formData} handleChange={handleChange} />,
    <Step2ContactInfo formData={formData} handleChange={handleChange} />,
    <Step3Credentials
      formData={formData}
      handleChange={handleChange}
      showPassword={showPassword}
      setShowPassword={setShowPassword}
      passwordValidation={passwordValidation}
    />,
  ];

  const steps = isMobile ? mobileSteps : desktopSteps;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 bg-white p-6 rounded-xl shadow-lg relative">
        {/* Bouton de retour */}
        <button
          onClick={handleBack}
          className="absolute top-4 left-4 flex items-center text-indigo-600 hover:text-indigo-800 transition-all duration-300 focus:outline-none"
          aria-label="Retour à l’étape précédente ou à l’accueil"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">Retour</span>
        </button>

        {/* Barre de progression */}
        <ProgressBar />

        {/* Contenu de l’étape */}
        <div className="animate-slide-in-right">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleNext();
            }}
            className="space-y-6"
          >
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            {steps[step - 1]}

            {/* Boutons de navigation */}
            <div className={`flex ${!isMobile && step > 1 ? "justify-between" : "justify-center"} gap-4`}>
              {!isMobile && step > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="w-1/2 py-3 px-4 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all font-medium"
                >
                  Retour
                </button>
              )}
              <button
                type="submit"
                disabled={!canProceed()}
                className={`py-3 px-4 rounded-lg text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg ${
                  canProceed() ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-400 cursor-not-allowed"
                } ${isMobile ? "w-full" : step === 1 ? "w-full" : "w-1/2"}`}
              >
                {step === totalSteps ? "Terminer mon inscription" : isMobile ? "Suivant" : "Continuer"}
              </button>
            </div>
          </form>
        </div>

        {/* Lien vers connexion (mobile uniquement, étape 1) */}
        {isMobile && step === 1 && (
          <div className="text-sm text-center">
            <Link
              to="/login"
              className="font-medium text-indigo-600 hover:text-indigo-800 hover:underline transition duration-300"
            >
              Déjà un compte ? Connecte-toi
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterScreen;