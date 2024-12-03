export type Role = 
    | 'Ambusher'
    | 'Artillery'
    | 'Leader'
    | 'Brute'
    | 'Controller'
    | 'Defender'
    | 'Harrier'
    | 'Hexer'
    | 'Mount'
    | 'Solo'
    | 'Support';

export interface Monster {
    id: number;
    name: string;
    encounterValue: number;
    keywords: string[];
    role: Role;
    level: number; // restricted to 1-10
    quantity: number;
}

export const monsters: Monster[] = [
  {
    id: 1,
    name: "Goblin Skirmisher",
    encounterValue: 50,
    keywords: ["Goblin"],
    role: "Ambusher",
    level: 2,
    quantity: 0
  },
  {
    id: 2,
    name: "Orc War Chief",
    encounterValue: 150,
    keywords: ["Orc"],
    role: "Leader",
    level: 5,
    quantity: 0
  },
  {
    id: 3,
    name: "Young Red Dragon",
    encounterValue: 300,
    keywords: ["Dragon", "Red"],
    role: "Solo",
    level: 7,
    quantity: 0
  },
  {
    id: 4,
    name: "Necromancer Acolyte",
    encounterValue: 75,
    keywords: ["Humanoid"],
    role: "Hexer",
    level: 3,
    quantity: 0
  },
  {
    id: 5,
    name: "Stone Golem",
    encounterValue: 250,
    keywords: ["Construct"],
    role: "Defender",
    level: 8,
    quantity: 0
  }
];
