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
    isMinion: boolean;
}

export const monsters: Monster[] = 
[
  {
    "id": 1,
    "name": "Basilisk",
    "encounterValue": 32,
    "keywords": ["Basilisk", "Monster"],
    "role": "Brute",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 2,
    "name": "Basilisk tonguesnapper",
    "encounterValue": 26,
    "keywords": ["Basilisk", "Monster"],
    "role": "Hexer",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 3,
    "name": "Bredbeddle",
    "encounterValue": 88,
    "keywords": ["Giant"],
    "role": "Solo",
    "level": 3,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 4,
    "name": "Bugbear channeler",
    "encounterValue": 30,
    "keywords": ["Bugbear", "Goblin", "Humanoid"],
    "role": "Controller",
    "level": 2,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 5,
    "name": "Bugbear commander",
    "encounterValue": 32,
    "keywords": ["Bugbear", "Goblin", "Humanoid"],
    "role": "Support",
    "level": 2,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 6,
    "name": "Bugbear roughneck",
    "encounterValue": 36,
    "keywords": ["Bugbear", "Goblin", "Humanoid"],
    "role": "Brute",
    "level": 2,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 7,
    "name": "Bugbear sneak",
    "encounterValue": 34,
    "keywords": ["Bugbear", "Goblin", "Humanoid"],
    "role": "Ambusher",
    "level": 2,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 8,
    "name": "Chimera",
    "encounterValue": 88,
    "keywords": ["Monster"],
    "role": "Solo",
    "level": 3,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 9,
    "name": "Demon ensnarer",
    "encounterValue": 6,
    "keywords": ["Demon", "Planar"],
    "role": "Brute",
    "level": 1,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 10,
    "name": "Demon ruinant",
    "encounterValue": 10,
    "keywords": ["Demon", "Planar"],
    "role": "Harrier",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 11,
    "name": "Demon frenzied",
    "encounterValue": 4,
    "keywords": ["Demon", "Planar"],
    "role": "Harrier",
    "level": 1,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 12,
    "name": "Demon torlas",
    "encounterValue": 9,
    "keywords": ["Demon", "Planar"],
    "role": "Controller",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 13,
    "name": "Demon pitling",
    "encounterValue": 2,
    "keywords": ["Demon", "Planar"],
    "role": "Artillery",
    "level": 1,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 14,
    "name": "Demon bendrak",
    "encounterValue": 11,
    "keywords": ["Demon", "Planar"],
    "role": "Hexer",
    "level": 2,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 15,
    "name": "Demon muceron",
    "encounterValue": 18,
    "keywords": ["Demon", "Planar"],
    "role": "Brute",
    "level": 3,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 16,
    "name": "Demon remasch",
    "encounterValue": 13,
    "keywords": ["Demon", "Planar"],
    "role": "Ambusher",
    "level": 2,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 17,
    "name": "Demon chorogaunt",
    "encounterValue": 36,
    "keywords": ["Demon", "Planar"],
    "role": "Leader",
    "level": 3,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 18,
    "name": "Dwarf driver",
    "encounterValue": 6,
    "keywords": ["Dwarf", "Humanoid"],
    "role": "Harrier",
    "level": 1,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 19,
    "name": "Dwarf hunter",
    "encounterValue": 6,
    "keywords": ["Dwarf", "Humanoid"],
    "role": "Support",
    "level": 1,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 20,
    "name": "Dwarf lurer",
    "encounterValue": 7,
    "keywords": ["Dwarf", "Humanoid"],
    "role": "Defender",
    "level": 1,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 21,
    "name": "Dwarf securer",
    "encounterValue": 8,
    "keywords": ["Dwarf", "Humanoid"],
    "role": "Brute",
    "level": 1,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 22,
    "name": "Dwarf grenadier",
    "encounterValue": 13,
    "keywords": ["Dwarf", "Humanoid"],
    "role": "Hexer",
    "level": 2,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 23,
    "name": "Dwarf reel winch",
    "encounterValue": 13,
    "keywords": ["Dwarf", "Humanoid"],
    "role": "Support",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 24,
    "name": "Dwarf gunner",
    "encounterValue": 12,
    "keywords": ["Dwarf", "Humanoid"],
    "role": "Artillery",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 25,
    "name": "Dwarf shieldwall",
    "encounterValue": 16,
    "keywords": ["Dwarf", "Humanoid"],
    "role": "Defender",
    "level": 3,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 26,
    "name": "Dwarf stonewhisperer",
    "encounterValue": 16,
    "keywords": ["Dwarf", "Humanoid"],
    "role": "Controller",
    "level": 3,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 27,
    "name": "Dwarf warden",
    "encounterValue": 18,
    "keywords": ["Dwarf", "Humanoid"],
    "role": "Brute",
    "level": 2,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 28,
    "name": "Dwarf trapper",
    "encounterValue": 13,
    "keywords": ["Dwarf", "Humanoid"],
    "role": "Harrier",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 29,
    "name": "Dwarf marauder lord",
    "encounterValue": 60,
    "keywords": ["Dwarf", "Humanoid"],
    "role": "Leader",
    "level": 3,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 30,
    "name": "Servitor battle walker",
    "encounterValue": 28,
    "keywords": ["Construct", "Dwarf"],
    "role": "Mount",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 31,
    "name": "Cradle crow",
    "encounterValue": 6,
    "keywords": ["Construct", "High Elf"],
    "role": "Harrier",
    "level": 1,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 32,
    "name": "Elemental mote",
    "encounterValue": 5,
    "keywords": ["Elemental", "High Elf"],
    "role": "Hexer",
    "level": 1,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 33,
    "name": "High elf quiver",
    "encounterValue": 6,
    "keywords": ["Fey", "High Elf", "Humanoid"],
    "role": "Artillery",
    "level": 1,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 34,
    "name": "High elf scribe",
    "encounterValue": 5,
    "keywords": ["Fey", "High Elf", "Humanoid"],
    "role": "Controller",
    "level": 1,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 35,
    "name": "Cradle credenza",
    "encounterValue": 15,
    "keywords": ["Construct", "High Elf"],
    "role": "Support",
    "level": 2,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 36,
    "name": "High elf bloodletter",
    "encounterValue": 7,
    "keywords": ["Fey", "High Elf", "Humanoid"],
    "role": "Ambusher",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 37,
    "name": "High elf deathtouch",
    "encounterValue": 14,
    "keywords": ["Fey", "High Elf", "Humanoid"],
    "role": "Artillery",
    "level": 2,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 38,
    "name": "High elf palinode",
    "encounterValue": 7,
    "keywords": ["Fey", "High Elf", "Humanoid"],
    "role": "Defender",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 39,
    "name": "High elf orbweaver",
    "encounterValue": 16,
    "keywords": ["Fey", "High Elf", "Humanoid"],
    "role": "Hexer",
    "level": 3,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 40,
    "name": "High elf wyrd",
    "encounterValue": 16,
    "keywords": ["Fey", "High Elf", "Humanoid"],
    "role": "Controller",
    "level": 3,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 41,
    "name": "High elf zephyr",
    "encounterValue": 13,
    "keywords": ["Fey", "High Elf", "Humanoid"],
    "role": "Harrier",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 42,
    "name": "High elf ordinator",
    "encounterValue": 60,
    "keywords": ["Fey", "High Elf", "Humanoid"],
    "role": "Leader",
    "level": 3,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 43,
    "name": "Cradle horse",
    "encounterValue": 13,
    "keywords": ["Construct", "High Elf"],
    "role": "Mount",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 44,
    "name": "Wode elf lookout",
    "encounterValue": 6,
    "keywords": ["Fey", "Humanoid", "Wode Elf"],
    "role": "Support",
    "level": 1,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 45,
    "name": "Wode elf runner",
    "encounterValue": 6,
    "keywords": ["Fey", "Humanoid", "Wode Elf"],
    "role": "Harrier",
    "level": 1,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 46,
    "name": "Wode elf scout",
    "encounterValue": 7,
    "keywords": ["Fey", "Humanoid", "Wode Elf"],
    "role": "Ambusher",
    "level": 1,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 47,
    "name": "Wode elf yeoman",
    "encounterValue": 6,
    "keywords": ["Fey", "Humanoid", "Wode Elf"],
    "role": "Artillery",
    "level": 1,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 48,
    "name": "Wode elf greenskeeper",
    "encounterValue": 15,
    "keywords": ["Fey", "Humanoid", "Wode Elf"],
    "role": "Defender",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 49,
    "name": "Wode elf green seer",
    "encounterValue": 11,
    "keywords": ["Fey", "Humanoid", "Wode Elf"],
    "role": "Hexer",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 50,
    "name": "Wode elf sentry",
    "encounterValue": 13,
    "keywords": ["Fey", "Humanoid", "Wode Elf"],
    "role": "Support",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 51,
    "name": "Wode elf druid",
    "encounterValue": 13,
    "keywords": ["Fey", "Humanoid", "Wode Elf"],
    "role": "Controller",
    "level": 2,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 52,
    "name": "Wode elf tree chirugeon",
    "encounterValue": 15,
    "keywords": ["Fey", "Humanoid", "Wode Elf"],
    "role": "Harrier",
    "level": 2,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 53,
    "name": "Wode elf tree guerilla",
    "encounterValue": 19,
    "keywords": ["Fey", "Humanoid", "Wode Elf"],
    "role": "Ambusher",
    "level": 3,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 54,
    "name": "Wode elf tree gweiadur",
    "encounterValue": 17,
    "keywords": ["Fey", "Humanoid", "Wode Elf"],
    "role": "Artillery",
    "level": 3,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 55,
    "name": "Wode elf penteulu",
    "encounterValue": 60,
    "keywords": ["Fey", "Humanoid. Wode Elf"],
    "role": "Leader",
    "level": 3,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 56,
    "name": "Wodenelg",
    "encounterValue": 13,
    "keywords": ["Plant", "Wode Elf"],
    "role": "Mount",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },

  {
    "id": 57,
    "name": "Fossil cryptic",
    "encounterValue": 76,
    "keywords": ["Elemental"],
    "role": "Solo",
    "level": 2,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 58,
    "name": "Abyssal hyena",
    "encounterValue": 7,
    "keywords": ["Animal", "Gnoll"],
    "role": "Brute",
    "level": 2,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 59,
    "name": "Gnoll flingflail",
    "encounterValue": 5,
    "keywords": ["Fiend", "Gnoll"],
    "role": "Artillery",
    "level": 2,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 60,
    "name": "Gnoll abyssal archer",
    "encounterValue": 12,
    "keywords": ["Fiend", "Gnoll"],
    "role": "Artillery",
    "level": 2,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 61,
    "name": "Gnoll mage-gorger",
    "encounterValue": 4,
    "keywords": ["Fiend", "Gnoll"],
    "role": "Hexer",
    "level": 2,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 62,
    "name": "Gnoll abyssal summoner",
    "encounterValue": 12,
    "keywords": ["Fiend", "Gnoll"],
    "role": "Support",
    "level": 2,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 63,
    "name": "Gnoll wildling",
    "encounterValue": 5,
    "keywords": ["Fiend", "Gnoll"],
    "role": "Harrier",
    "level": 2,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 64,
    "name": "Gnoll bonesplitter",
    "encounterValue": 15,
    "keywords": ["Fiend", "Gnoll"],
    "role": "Brute",
    "level": 2,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 65,
    "name": "Gnoll marauder",
    "encounterValue": 12,
    "keywords": ["Fiend", "Gnoll"],
    "role": "Harrier",
    "level": 2,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 66,
    "name": "Gnoll cackler",
    "encounterValue": 11,
    "keywords": ["Fiend", "Gnoll"],
    "role": "Hexer",
    "level": 2,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 67,
    "name": "Tusker demon",
    "encounterValue": 15,
    "keywords": ["Demon", "Gnoll", "Planar"],
    "role": "Brute",
    "level": 2,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 68,
    "name": "Last laugh",
    "encounterValue": 30,
    "keywords": ["Fiend", "Gnoll"],
    "role": "Leader",
    "level": 2,
    "quantity": 0,
    "isMinion": false
  },

  {
    "id": 69,
    "name": "Goblin runner",
    "encounterValue": 4,
    "keywords": ["Goblin", "Humanoid"],
    "role": "Harrier",
    "level": 1,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 70,
    "name": "Goblin sniper",
    "encounterValue": 4,
    "keywords": ["Goblin", "Humanoid"],
    "role": "Artillery",
    "level": 1,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 71,
    "name": "Skitterling",
    "encounterValue": 3,
    "keywords": ["Animal", "Goblin"],
    "role": "Hexer",
    "level": 1,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 72,
    "name": "Goblin spinecleaver",
    "encounterValue": 6,
    "keywords": ["Goblin", "Humanoid"],
    "role": "Brute",
    "level": 1,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 73,
    "name": "Goblin assassin",
    "encounterValue": 11,
    "keywords": ["Goblin", "Humanoid"],
    "role": "Ambusher",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 74,
    "name": "Goblin cursespitter",
    "encounterValue": 9,
    "keywords": ["Goblin", "Humanoid"],
    "role": "Hexer",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 75,
    "name": "Goblin underboss",
    "encounterValue": 10,
    "keywords": ["Goblin", "Humanoid"],
    "role": "Support",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 76,
    "name": "Goblin stinker",
    "encounterValue": 9,
    "keywords": ["Goblin", "Humanoid"],
    "role": "Controller",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 77,
    "name": "Goblin warrior",
    "encounterValue": 10,
    "keywords": ["Goblin", "Humanoid"],
    "role": "Harrier",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 78,
    "name": "Goblin monarch",
    "encounterValue": 24,
    "keywords": ["Goblin", "Humanoid"],
    "role": "Leader",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 79,
    "name": "War spider",
    "encounterValue": 28,
    "keywords": ["Animal", "Goblin"],
    "role": "Mount",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 80,
    "name": "Warg",
    "encounterValue": 10,
    "keywords": ["Animal", "Goblin"],
    "role": "Mount",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 81,
    "name": "Griffon",
    "encounterValue": 32,
    "keywords": ["Animal", "Griffon"],
    "role": "Mount",
    "level": 2,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 82,
    "name": "Striped condor griffon",
    "encounterValue": 36,
    "keywords": ["Animal", "Griffon"],
    "role": "Brute",
    "level": 2,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 83,
    "name": "Hag of the green and rot",
    "encounterValue": 88,
    "keywords": ["Fey", "Hag"],
    "role": "Solo",
    "level": 3,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 84,
    "name": "Human apprentice mage",
    "encounterValue": 6,
    "keywords": ["Human", "Humanoid"],
    "role": "Controller",
    "level": 2,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 85,
    "name": "Human guard",
    "encounterValue": 6,
    "keywords": ["Human", "Humanoid"],
    "role": "Brute",
    "level": 1,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 86,
    "name": "Human archer",
    "encounterValue": 6,
    "keywords": ["Human", "Humanoid"],
    "role": "Artillery",
    "level": 1,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 87,
    "name": "Human raider",
    "encounterValue": 6,
    "keywords": ["Human", "Humanoid"],
    "role": "Harrier",
    "level": 1,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 88,
    "name": "Human death acolyte",
    "encounterValue": 5,
    "keywords": ["Human", "Humanoid"],
    "role": "Hexer",
    "level": 1,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 89,
    "name": "Human rogue",
    "encounterValue": 7,
    "keywords": ["Human", "Humanoid"],
    "role": "Ambusher",
    "level": 1,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 90,
    "name": "Human brawler",
    "encounterValue": 16,
    "keywords": ["Human", "Humanoid"],
    "role": "Brute",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 91,
    "name": "Human knave",
    "encounterValue": 18,
    "keywords": ["Human", "Humanoid"],
    "role": "Defender",
    "level": 2,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 92,
    "name": "Human death cultist",
    "encounterValue": 16,
    "keywords": ["Human", "Humanoid"],
    "role": "Support",
    "level": 2,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 93,
    "name": "Human scoundrel",
    "encounterValue": 14,
    "keywords": ["Human", "Humanoid"],
    "role": "Ambusher",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 94,
    "name": "Human storm mage",
    "encounterValue": 17,
    "keywords": ["Human", "Humanoid"],
    "role": "Controller",
    "level": 3,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 95,
    "name": "Human blackguard",
    "encounterValue": 38,
    "keywords": ["Human", "Humanoid"],
    "role": "Leader",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 96,
    "name": "Human trickshot",
    "encounterValue": 12,
    "keywords": ["Human", "Humanoid"],
    "role": "Artillery",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 97,
    "name": "Human bandit chief",
    "encounterValue": 54,
    "keywords": ["Human", "Humanoid"],
    "role": "Leader",
    "level": 3,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 98,
    "name": "Giant hawk",
    "encounterValue": 13,
    "keywords": ["Animal"],
    "role": "Mount",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 99,
    "name": "Kobold princeps",
    "encounterValue": 3,
    "keywords": ["Humanoid", "Kobold"],
    "role": "Support",
    "level": 1,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 100,
    "name": "Kobold sagittarius",
    "encounterValue": 2,
    "keywords": ["Humanoid", "Kobold"],
    "role": "Artillery",
    "level": 1,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 101,
    "name": "Kobold tiro",
    "encounterValue": 3,
    "keywords": ["Humanoid", "Kobold"],
    "role": "Defender",
    "level": 1,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 102,
    "name": "Kobold veles",
    "encounterValue": 3,
    "keywords": ["Humanoid", "Kobold"],
    "role": "Harrier",
    "level": 1,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 103,
    "name": "Kobold adeptus",
    "encounterValue": 8,
    "keywords": ["Humanoid", "Kobold"],
    "role": "Artillery",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 104,
    "name": "Kobold artifex",
    "encounterValue": 7,
    "keywords": ["Humanoid", "Kobold"],
    "role": "Controller",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 105,
    "name": "Kobold legionary",
    "encounterValue": 9,
    "keywords": ["Humanoid", "Kobold"],
    "role": "Defender",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 106,
    "name": "Kobold signifier",
    "encounterValue": 8,
    "keywords": ["Humanoid", "Kobold"],
    "role": "Support",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 107,
    "name": "Shieldscale drangolin",
    "encounterValue": 16,
    "keywords": ["Animal", "Kobold"],
    "role": "Brute",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 108,
    "name": "Kobold venator",
    "encounterValue": 9,
    "keywords": ["Humanoid", "Kobold"],
    "role": "Ambusher",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 109,
    "name": "Kobold centurion",
    "encounterValue": 20,
    "keywords": ["Humanoid. Kobold"],
    "role": "Leader",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 110,
    "name": "Lightbender",
    "encounterValue": 38,
    "keywords": ["Lightbender", "Monster"],
    "role": "Ambusher",
    "level": 3,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 111,
    "name": "Lightbender pouncer",
    "encounterValue": 36,
    "keywords": ["Lightbender", "Monster"],
    "role": "Harrier",
    "level": 3,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 112,
    "name": "Minotaur",
    "encounterValue": 36,
    "keywords": ["Minotaur", "Monster"],
    "role": "Harrier",
    "level": 3,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 113,
    "name": "Minotaur sunderer",
    "encounterValue": 40,
    "keywords": ["Minotaur", "Monster"],
    "role": "Brute",
    "level": 3,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 114,
    "name": "Ogre goon",
    "encounterValue": 36,
    "keywords": ["Giant", "Ogre"],
    "role": "Brute",
    "level": 2,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 115,
    "name": "Ogre juggernaut",
    "encounterValue": 32,
    "keywords": ["Giant", "Ogre"],
    "role": "Harrier",
    "level": 2,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 116,
    "name": "Radenwight mischiever",
    "encounterValue": 7,
    "keywords": ["Humanoid", "Radenwight"],
    "role": "Ambusher",
    "level": 1,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 117,
    "name": "Radenwight redeye",
    "encounterValue": 6,
    "keywords": ["Humanoid", "Radenwight"],
    "role": "Artillery",
    "level": 1,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 118,
    "name": "Radenwight ratagast",
    "encounterValue": 7,
    "keywords": ["Humanoid", "Radenwight"],
    "role": "Defender",
    "level": 1,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 119,
    "name": "Radenwight bruxer",
    "encounterValue": 16,
    "keywords": ["Humanoid", "Radenwight"],
    "role": "Brute",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 120,
    "name": "Radenwight swiftpaw",
    "encounterValue": 6,
    "keywords": ["Humanoid", "Radenwight"],
    "role": "Harrier",
    "level": 1,
    "quantity": 0,
    "isMinion": true
  },
  {
    "id": 121,
    "name": "Radenwight piper",
    "encounterValue": 13,
    "keywords": ["Humanoid", "Radenwight"],
    "role": "Support",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 122,
    "name": "Radenwight maestro",
    "encounterValue": 38,
    "keywords": ["Humanoid", "Radenwight"],
    "role": "Leader",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
  {
    "id": 123,
    "name": "Radenwight ratcrobat",
    "encounterValue": 13,
    "keywords": ["Humanoid", "Radenwight"],
    "role": "Harrier",
    "level": 1,
    "quantity": 0,
    "isMinion": false
  },
]
 

