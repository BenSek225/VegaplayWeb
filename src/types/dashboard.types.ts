/**
 * Types pour les données du Dashboard VegaPlay
 */
export interface Game {
    name: string;
    image: string;
  }
  
  export interface Match {
    name: string;
    status: string;
    time: string;
  }
  
  export interface Tournament {
    name: string;
    stake: string;
    participants: string;
  }
  
  export interface Friend {
    name: string;
    status: string;
    lastMessage: string;
  }
  
  export interface Message {
    sender: string;
    text: string;
  }