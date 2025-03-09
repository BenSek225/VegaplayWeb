// components/home/HeaderD.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

// import { auth } from '../../firebase-config';
// import { signOut } from 'firebase/auth';

const HeaderD = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
     // signOut(auth)
     //    .then(() => {
     //       console.log('Deconnexion reussi');
     //       alert('Deconnexion reussi');
     //       navigate('/login');
     //    })
     //    .catch((error) => {
     //       alert(error.message);
     //    });
      console.log("Déconnexion");
      navigate("/");
  };

  return (
    <header className="bg-indigo-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/dashboard" className="flex-shrink-0">
          <span className="text-2xl md:text-3xl font-['Georgia']">VegaPlay</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          <Link
            to="/dashboard"
            className="text-sm font-medium hover:text-indigo-200 transition-colors duration-200"
          >
            Tableau de bord
          </Link>
          <Link
            to="/bets"
            className="text-sm font-medium hover:text-indigo-200 transition-colors duration-200"
          >
            Mes paris
          </Link>
          <Link
            to="/profile"
            className="text-sm font-medium hover:text-indigo-200 transition-colors duration-200"
          >
            Profil
          </Link>
          <button
            onClick={handleLogout}
            className="text-sm font-medium bg-indigo-700 px-4 py-2 rounded-lg hover:bg-indigo-800 transition-all duration-300"
          >
            Déconnexion
          </button>
        </nav>
      </div>
    </header>
  );
};

export default HeaderD;