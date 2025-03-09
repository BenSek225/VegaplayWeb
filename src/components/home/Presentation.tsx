import React from "react";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  icon: React.ReactNode; // Ajuste selon le type réel (ex. : ReactNode si c’est un composant)
  title: string;
  description: string;
  actionText: string;
}
const FeatureCard = ({ icon, title, description, actionText }: FeatureCardProps) => {
  return (
    <div className="flex flex-col gap-6 p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col gap-4">
        <div data-svg-wrapper className="text-black">{icon}</div>
        <h3 className="text-black text-xl sm:text-2xl font-bold leading-tight">{title}</h3>
        <p className="text-gray-700 text-base font-normal leading-relaxed">{description}</p>
      </div>
      <Link to="/register" className="mt-auto group">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="text-black text-base font-medium group-hover:underline">{actionText}</span>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="transform transition-transform group-hover:translate-x-1"
          >
            <path d="M9.70697 16.9496L15.414 11.2426L9.70697 5.53564L8.29297 6.94964L12.586 11.2426L8.29297 15.5356L9.70697 16.9496Z" fill="black"/>
          </svg>
        </div>
      </Link>
    </div>
  );
};

const Presentation = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-28 bg-white flex flex-col gap-12 lg:gap-20 overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-20">
        <div className="w-full lg:w-1/2 flex flex-col gap-4 overflow-hidden">
          <h2 className="text-black text-3xl lg:text-4xl font-bold leading-tight">
            Découvrez les fonctionnalités passionnantes de VegaPlay pour une expérience de jeu inégalée.
          </h2>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-6 overflow-hidden">
          <p className="text-gray-700 text-base lg:text-lg font-normal leading-relaxed">
            VegaPlay vous offre un système de matchmaking intelligent qui vous connecte avec des joueurs de votre niveau. Pariez en toute sécurité sur vos jeux préférés et profitez de gains réels. Notre plateforme est conçue pour maximiser votre plaisir tout en vous offrant des opportunités de gains.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
        <FeatureCard
          icon={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M41.46 14.24L41.18 13.74C40.8188 13.1354 40.3094 12.6329 39.7 12.28L26.28 4.54C25.6724 4.1875 24.9826 4.00124 24.28 4H23.7C22.9974 4.00124 22.3076 4.1875 21.7 4.54L8.28 12.3C7.67394 12.6505 7.17052 13.1539 6.82 13.76L6.54 14.26C6.1875 14.8677 6.00124 15.5575 6 16.26V31.76C6.00124 32.4626 6.1875 33.1524 6.54 33.76L6.82 34.26C7.17958 34.859 7.68098 35.3604 8.28 35.72L21.72 43.46C22.3246 43.8198 23.0164 44.0066 23.72 44H24.28C24.9826 43.9988 25.6724 43.8126 26.28 43.46L39.7 35.7C40.312 35.3574 40.8174 34.852 41.16 34.24L41.46 33.74C41.8082 33.1306 41.9942 32.442 42 31.74V16.24C41.9988 15.5375 41.8126 14.8477 41.46 14.24ZM23.7 8H24.28L36 14.76L24 21.68L12 14.76L23.7 8ZM26 39L37.7 32.24L38 31.74V18.22L26 25.16V39Z" fill="black"/></svg>}
          title="Matchmaking : Jouez avec des adversaires de votre niveau pour plus de fun."
          description="Notre système de matchmaking garantit des parties équilibrées et compétitives."
          actionText="Jouer"
        />
        <FeatureCard
          icon={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M41.7934 14.24L41.5134 13.74C41.1522 13.1354 40.6428 12.6329 40.0334 12.28L26.6134 4.54C26.0058 4.1875 25.316 4.00124 24.6134 4H24.0334C23.3308 4.00124 22.641 4.1875 22.0334 4.54L8.61337 12.3C8.00731 12.6505 7.50389 13.1539 7.15337 13.76L6.87337 14.26C6.52087 14.8677 6.33461 15.5575 6.33337 16.26V31.76C6.33461 32.4626 6.52087 33.1524 6.87337 33.76L7.15337 34.26C7.51295 34.859 8.01435 35.3604 8.61337 35.72L22.0534 43.46C22.658 43.8198 23.3498 44.0066 24.0534 44H24.6134C25.316 43.9988 26.0058 43.8126 26.6134 43.46L40.0334 35.7C40.6454 35.3574 41.1508 34.852 41.4934 34.24L41.7934 33.74C42.1416 33.1306 42.3276 32.442 42.3334 31.74V16.24C42.3322 15.5375 42.146 14.8477 41.7934 14.24ZM24.0334 8H24.6134L36.3334 14.76L24.3334 21.68L12.3334 14.76L24.0334 8ZM26.3334 39L38.0334 32.24L38.3334 31.74V18.22L26.3334 25.16V39Z" fill="black"/></svg>}
          title="Paris sécurisés : Misez en toute confiance sur vos jeux favoris."
          description="Profitez d'un environnement de paris sécurisé pour des transactions sans souci."
          actionText="Parier"
        />
        <FeatureCard
          icon={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M42.1267 14.24L41.8467 13.74C41.4855 13.1354 40.9761 12.6329 40.3667 12.28L26.9467 4.54C26.3391 4.1875 25.6493 4.00124 24.9467 4H24.3667C23.6641 4.00124 22.9743 4.1875 22.3667 4.54L8.94675 12.3C8.34069 12.6505 7.83727 13.1539 7.48675 13.76L7.20675 14.26C6.85425 14.8677 6.66799 15.5575 6.66675 16.26V31.76C6.66799 32.4626 6.85425 33.1524 7.20675 33.76L7.48675 34.26C7.84633 34.859 8.34773 35.3604 8.94675 35.72L22.3867 43.46C22.9913 43.8198 23.6831 44.0066 24.3867 44H24.9467C25.6493 43.9988 26.3391 43.8126 26.9467 43.46L40.3667 35.7C40.9787 35.3574 41.4841 34.852 41.8267 34.24L42.1267 33.74C42.4749 33.1306 42.6609 32.442 42.6667 31.74V16.24C42.6655 15.5375 42.4793 14.8477 42.1267 14.24ZM24.3667 8H24.9467L36.6667 14.76L24.6667 21.68L12.6667 14.76L24.3667 8ZM26.6667 39L38.3667 32.24L38.6667 31.74V18.22L26.6667 25.16V39Z" fill="black"/></svg>}
          title="Gains réels : Transformez votre passion du jeu en récompenses tangibles."
          description="Gagnez des récompenses réelles en jouant à vos jeux préférés sur VegaPlay."
          actionText="Gagner"
        />
      </div>
    </section>
  );
};

export default Presentation;