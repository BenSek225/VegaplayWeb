import React, { useState } from "react";

/**
 * Messagerie rapide dans SidebarRight
 * Affiche les messages récents et permet d’envoyer un message (simulé).
 */
const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([
    { sender: "Ami1", text: "Salut, on joue ?" },
    { sender: "Moi", text: "Oui, pourquoi pas !" },
  ]);
  const [newMessage, setNewMessage] = useState<string>("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: "Moi", text: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-1/2">
      {/* Messages */}
      <div className="flex-1 bg-indigo-900 p-2 rounded-lg overflow-y-auto space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`text-sm ${msg.sender === "Moi" ? "text-right text-purple-300" : "text-left text-white"}`}
          >
            <span className="font-semibold">{msg.sender}:</span> {msg.text}
          </div>
        ))}
      </div>

      {/* Zone de saisie */}
      <div className="mt-2 flex gap-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Écrire un message..."
          className="flex-1 p-2 bg-indigo-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
        />
        <button
          onClick={handleSendMessage}
          className="bg-purple-600 text-white px-2 py-1 rounded-lg hover:bg-purple-700 transition-all duration-300"
        >
          ➤
        </button>
      </div>
    </div>
  );
};

export default ChatBox;