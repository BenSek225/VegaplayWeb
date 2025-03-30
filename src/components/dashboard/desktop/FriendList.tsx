import React from "react";

/**
 * Liste des amis dans SidebarRight
 * Affiche les amis avec leur statut et un bouton d’invitation.
 */
interface Friend {
  name: string;
  status: string;
  lastMessage: string;
}

interface FriendListProps {
  friends: Friend[];
}

const FriendList: React.FC<FriendListProps> = ({ friends }) => {
  return (
    <div className="space-y-4 mb-4">
      {friends.map((friend) => (
        <div
          key={friend.name}
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-700 transition-all duration-300"
        >
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-indigo-900">
            {friend.name[0]}
          </div>
          <div className="flex-1">
            <p className="font-medium text-white">{friend.name}</p>
            <p className="text-sm text-gray-300">{friend.status}</p>
          </div>
          <button className="bg-purple-600 text-white px-2 py-1 rounded-lg hover:bg-purple-700 transition-all duration-300">
            Inviter
          </button>
        </div>
      ))}
    </div>
  );
};

export default FriendList;