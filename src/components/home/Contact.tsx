import React from "react";

const infos = [
  {
    titre: "Discord",
    texte: "Rejoignez notre serveur",
    icon: "https://placehold.co/24?text=D", // Remplacer par une vraie icône Discord;
  },
  {
    titre: "Email",
    texte: "support@vegaplay.com",
    icon: "https://placehold.co/24?text=E", // Remplacer par une icône email;
  },
  {
    titre: "Live Chat",
    texte: "Support 24/7",
    icon: "https://placehold.co/24?text=C", // Remplacer par une icône chat;
  },
];

const Contact = () => {
   return (
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 bg-gray-50 flex flex-col items-center gap-12">
         {/* Titre et sous-titre */}
         <div className="text-center max-w-3xl animate-fade-in-up">
         <h2 className="text-indigo-900 text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-4">
            Contactez-nous
         </h2>
         <p className="text-gray-600 text-lg md:text-xl font-normal leading-relaxed">
            Une question ? Notre équipe est disponible 24/7 pour vous accompagner.
         </p>
         </div>

         {/* Contenu principal */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
         {/* Informations de contact */}
         <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {infos.map((info, index) => (
               <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
               >
                  <div className="flex justify-center mb-4">
                     <img src={info.icon} alt={`${info.titre} icône`} className="w-8 h-8" />
                  </div>
                  <h4 className="text-indigo-700 text-xl font-semibold mb-2">{info.titre}</h4>
                  <p className="text-gray-600 text-sm">{info.texte}</p>
               </div>
               ))}
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
               <h3 className="text-indigo-700 text-xl font-bold mb-4">Horaires du support</h3>
               <div className="space-y-3 text-gray-600">
               <p className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span className="font-medium text-indigo-600">24/24</span>
               </p>
               <p className="flex justify-between">
                  <span>Samedi - Dimanche</span>
                  <span className="font-medium text-indigo-600">24/24</span>
               </p>
               </div>
            </div>
         </div>

         {/* Formulaire */}
         <div className="bg-white p-6 rounded-xl shadow-md">
            <form className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                  <label htmlFor="name" className="sr-only">
                     Nom
                  </label>
                  <input
                     id="name"
                     className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                     type="text"
                     placeholder="Nom"
                     required
                  />
               </div>
               <div>
                  <label htmlFor="email" className="sr-only">
                     Email
                  </label>
                  <input
                     id="email"
                     className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                     type="email"
                     placeholder="Email"
                     required
                  />
               </div>
               </div>

               <div>
               <label htmlFor="subject" className="sr-only">
                  Sujet
               </label>
               <input
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  type="text"
                  placeholder="Sujet"
                  required
               />
               </div>

               <div>
               <label htmlFor="message" className="sr-only">
                  Message
               </label>
               <textarea
                  id="message"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  rows={4}
                  placeholder="Votre message..."
                  required
               ></textarea>
               </div>

               <button
               type="submit"
               className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
               >
               Envoyer le message
               </button>
            </form>
         </div>
         </div>
      </section>
   );
};
export default Contact;