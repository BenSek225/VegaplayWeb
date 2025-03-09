
import React from 'react';
import Header from '../../components/home/Header';
import HeroSection from '../../components/home/HeroSection';
import Presentation from '../../components/home/Presentation';
import Jeux from '../../components/home/Jeux';
import Testimonial from '../../components/home/Testimonial';
import Contact from '../../components/home/Contact';
import Footer from '../../components/home/Footer';

const HomePage = () => {
  return (
      <div className="min-h-screen flex flex-col justify-start items-center bg-gray-50 overflow-hidden">
         {/* Conteneur global avec largeur max pour un bon alignement */}
         <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Header />

            <main className="flex flex-col space-y-16 py-8">
               <HeroSection />
               <Presentation />
               <Jeux />
               <Testimonial />
               <Contact />
            </main>

            <Footer />
         </div>
      </div>
  );
};

export default HomePage;
