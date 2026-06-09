const mythicalCreatures = [
	{name: "Dragon", type: "Fire", lastSeen: "Volcano Valley"},
	{name: "Mermaid", type: "Water", lastSeen: "Coral Caves"},
	{name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest"},
	{name: "Griffin", type: "Air", lastSeen: "Highwind Mountains"},
	{name: "Kraken", type: "Water", lastSeen: "Abyssal Depths"}
];

// First Water creature
const waterCreature = mythicalCreatures.find(
  creature => creature.type === "Water"
);
console.log(waterCreature.name);

// Index of Griffin
const griffinIndex = mythicalCreatures.findIndex(
  creature => creature.name === "Griffin"
);
console.log(griffinIndex);

// First creature seen in Enchanted Forest
const enchantedForestCreature = mythicalCreatures.find(
  creature => creature.lastSeen === "Enchanted Forest"
);
console.log(enchantedForestCreature);
