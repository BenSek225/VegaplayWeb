import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
    const menuItems = [
        { to: "accueil", label: "Accueil" },
        { to: "jeux", label: "Jeux" },
        { to: "communaute", label: "Communauté" },
        { to: "contact", label: "Contact" }
    ];

    const socialLinks = [
        { icon: "https://placehold.co/24?text=D", label: "Discord", href: "#" },
        { icon: "https://placehold.co/24?text=T", label: "Twitter", href: "#" },
        { icon: "https://placehold.co/24?text=I", label: "Instagram", href: "#" },
    ];

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Logo et Description; */}
                    <div className="col-span-1 md:col-span-2">
                        <ScrollLink 
                            to="accueil" 
                            smooth={true} 
                            duration={500}  
                            className="flex items-center mb-6"
                        >
                            <span className="text-2xl md:text-3xl font-['Georgia'] font-bold text-indigo-400">VegaPlay</span>
                        </ScrollLink>
                        <p className="text-gray-300 text-sm mb-6 max-w-md">
                            Votre destination gaming de confiance. Jouez, pariez et gagnez en toute sécurité.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <a 
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-800 p-2 rounded-full hover:bg-indigo-600 transition-all duration-300"
                                    aria-label={`Rejoignez-nous sur ${social.label}`}
                                >
                                    <img  src={social.icon} alt={`${social.label} icône`} className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-lg font-semibold text-indigo-300 mb-6">Navigation</h3>
                        <ul className="space-y-3">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <ScrollLink 
                                        to={item.to} 
                                        smooth={true} 
                                        duration={500} 
                                        className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 cursor-pointer text-sm"
                                    >
                                        {item.label}
                                    </ScrollLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-semibold text-indigo-300 mb-6">Support</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm">
                                    Centre d'aide
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm">
                                    Règles du jeu
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm">
                                    Jeu responsable
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-8 pt-6 text-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} VegaPlay. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;