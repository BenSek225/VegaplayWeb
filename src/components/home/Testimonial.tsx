import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Thomas D.",
      role: "Joueur VIP",
      content: "VegaPlay offre une expérience de jeu incroyable. Les jeux sont variés et les récompenses sont vraiment intéressantes !",
      avatar: "https://placehold.co/100?text=TD",
    },
    {
      name: "Sophie M.",
      role: "Membre actif",
      content: "La communauté est super accueillante et l’interface est très intuitive. Je recommande vivement !",
      avatar: "https://placehold.co/100?text=SM",
    },
    {
      name: "Lucas P.",
      role: "Joueur régulier",
      content: "Le système de pari est transparent et sécurisé. C’est vraiment rassurant de jouer sur VegaPlay.",
      avatar: "https://placehold.co/100?text=LP",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 bg-white flex flex-col items-center gap-12">
      {/* Titre et sous-titre; */}
      <div className="text-center max-w-3xl animate-fade-in-up">
        <h2 className="text-indigo-900 text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-4">
          Ce que disent nos joueurs
        </h2>
        <p className="text-gray-600 text-lg md:text-xl font-normal leading-relaxed">
          Découvrez les expériences authentiques de notre communauté passionnée.
        </p>
      </div>

      {/* Grille de témoignages */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            role="article"
          >
            {/* Citation */}
            <div className="relative">
              <svg
                className="absolute -top-4 -left-4 w-8 h-8 text-indigo-200"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 6c-2.2 0-4 1.8-4 4s1.8 4 4 4h1v4H6c-3.3 0-6-2.7-6-6s2.7-6 6-6h4zm8 0c-2.2 0-4 1.8-4 4s1.8 4 4 4h1v4h-5c-3.3 0-6-2.7-6-6s2.7-6 6-6h4z" />
              </svg>
              <p className="text-gray-700 text-base leading-relaxed mb-6">{testimonial.content}</p>
            </div>

            {/* Avatar et infos */}
            <div className="flex items-center">
              <img
                src={testimonial.avatar}
                alt={`Photo de ${testimonial.name}`}
                className="w-12 h-12 rounded-full mr-4 border-2 border-indigo-100"
              />
              <div>
                <h3 className="text-indigo-700 text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;