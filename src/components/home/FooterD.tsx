// components/home/FooterD.jsx
import React from "react";
import { Link } from "react-router-dom";

const FooterD = () => {
  const dashboardLinks = [
    { to: "/dashboard", label: "Tableau de bord" },
    { to: "/bets", label: "Mes paris" },
    { to: "/profile", label: "Profil" },
    { to: "/support", label: "Support" },
  ];

  const socialLinks = [
    { icon: "https://placehold.co/24?text=D", label: "Discord", href: "#" },
    { icon: "https://placehold.co/24?text=T", label: "Twitter", href: "#" },
    { icon: "https://placehold.co/24?text=I", label: "Instagram", href: "#" },
  ];

  return (
    <footer className="bg-indigo-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo et description */}
          <div>
            <Link to="/dashboard" className="flex items-center mb-4">
              <span className="text-xl md:text-2xl font-['Georgia'] font-bold text-indigo-400">VegaPlay</span>
            </Link>
            <p className="text-gray-300 text-sm">
              Votre espace gaming sécurisé. Gérez vos paris et profitez de l’expérience VegaPlay.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-300 mb-4">Navigation</h3>
            <ul className="space-y-3">
              {dashboardLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.to}
                    className="text-gray-400 hover:text-indigo-200 transition-colors duration-200 text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-semibold text-indigo-300 mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-800 p-2 rounded-full hover:bg-indigo-700 transition-all duration-300"
                  aria-label={`Rejoignez-nous sur ${social.label}`}
                >
                  <img src={social.icon} alt={`${social.label} icône`} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-indigo-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} VegaPlay. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterD;