import React from "react";
import FriendList from "./FriendList";
import ChatBox from "./ChatBox";

/**
 * Sidebar droite fixe du Dashboard VegaPlay
 * Gère la liste des amis et une messagerie rapide.
 */
const SidebarRight: React.FC = () => {
  const friends = [
    { name: "Ami1", status: "En ligne", lastMessage: "Salut, on joue ?" },
    { name: "Ami2", status: "Hors ligne", lastMessage: "À demain !" },
    { name: "Ami3", status: "En ligne", lastMessage: "Bien joué !" },
  ];

  return (
    <aside className="fixed top-16 right-0 w-72 h-[calc(100vh-4rem)] bg-indigo-800 text-white p-4 overflow-y-auto">
      {/* Bouton ajouter un ami */}
      <button className="w-full bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700 transition-all duration-300 mb-4">
        Ajouter un ami
      </button>

      {/* Liste des amis */}
      <FriendList friends={friends} />

      {/* Messagerie rapide */}
      <ChatBox />
    </aside>
  );
};

export default SidebarRight;