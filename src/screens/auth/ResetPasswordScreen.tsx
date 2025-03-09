import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const ResetPasswordScreen = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit= (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Veuillez entrer une adresse email valide.");
      return;
    }
    // Simulation de réinitialisation (remplace par Firebase si besoin)
    setSuccess("Un email de réinitialisation a été envoyé à votre adresse.");
    setError("");
    setTimeout(() => navigate("/login"), 2000); // Redirection après 2 secondes
  };

  const handleBack = () => {
    navigate("/"); // Retour à la page d'accueil
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 bg-white p-6 rounded-xl shadow-lg relative">
        {/* Bouton de retour */}
        <button
          onClick={handleBack}
          className="absolute top-4 left-4 flex items-center text-indigo-600 hover:text-indigo-800 transition-all duration-300 focus:outline-none"
          aria-label="Retour à la page d'accueil"
        >
          <svg
            className="w-5 h-5 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="text-sm font-medium">Retour</span>
        </button>

        {/* Titre */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-indigo-900">
            Réinitialiser votre mot de passe
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Entrez votre email pour recevoir un lien de réinitialisation.
          </p>
        </div>

        {/* Formulaire */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}
          {success && (
            <p className="text-green-500 text-sm text-center">{success}</p>
          )}

          {/* Champ email */}
          <div className="relative">
            <label htmlFor="email" className="sr-only">
              Adresse email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="appearance-none relative block w-full px-10 py-3 border border-gray-300 rounded-lg placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all"
              placeholder="Adresse email"
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

          {/* Bouton de soumission */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all shadow-md hover:shadow-lg font-medium"
            >
              Envoyer la demande
            </button>
          </div>

          {/* Lien vers connexion */}
          <div className="text-sm text-center">
            <Link
              to="/login"
              className="font-medium text-indigo-600 hover:text-indigo-800 hover:underline transition duration-300"
            >
              Retour à la page de connexion
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordScreen;