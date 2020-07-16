'use strict';

/**@type {{[k: string]: TemplateData}} */
let BattlePokedex = {

shucklemega: {
num: 213, 
species: "Shuckle-Mega", 
baseSpecies: "Shuckle", 
forme: "Mega", 
formeLetter: "M", 
types:["Bug", "Rock "],
baseStats: {hp: 20, atk: 110, def: 205, spa: 10, spd: 205, spe: 55}, 
abilities: {0: "Technician"}, 
weightkg: 20.5, 
evoLevel: 1,
}, 
	
flygonmegax: {
num: 330, 
species: "Flygon-Mega-X", 
baseSpecies: "Flygon", 
forme: "Mega", 
formeLetter: "M", 
types:["Ground", "Dragon "],
baseStats: {hp: 80, atk: 150, def: 115, spa: 80, spd: 80, spe: 115}, 
abilities: {0: "Mold Breaker"}, 
weightkg: 82, 
evoLevel: 1,
},
	flygonmegay: {
num: 330, 
species: "Flygon-Mega-Y", 
baseSpecies: "Flygon", 
forme: "Mega", 
formeLetter: "M", 
types:["Ground", "Flying "],
baseStats: {hp: 80, atk: 120, def: 80, spa: 125, spd: 80, spe: 135}, 
abilities: {0: "Aerilate"}, 
weightkg: 82, 
evoLevel: 1,
},
miloticmega: {
num: 350, 
species: "Milotic-Mega", 
baseSpecies: "Milotic", 
forme: "Mega", 
formeLetter: "M", 
types:["Water", "Dragon "],
baseStats: {hp: 95, atk: 80, def: 89, spa: 135, spd: 150, spe: 91}, 
abilities: {0: "Adaptability"}, 
weightkg: 162, 
evoLevel: 1,
},
	kingdramega: {
num: 230, 
species: "Kingdra-Mega", 
baseSpecies: "Kingdra", 
forme: "Mega", 
formeLetter: "M", 
types:["Water", "Dragon "],
baseStats: {hp: 75, atk: 115, def: 115, spa: 145, spd: 115, spe: 75}, 
abilities: {0: "Swift Swim"}, 
weightkg: 152, 
evoLevel: 1,
},
	dragonitemega: {
num: 149, 
species: "Dragonite-Mega", 
baseSpecies: "Dragonite", 
forme: "Mega", 
formeLetter: "M", 
types:[""],
baseStats: {hp: 91, atk: 164, def: 105, spa: 130, spd: 110, spe: 100}, 
abilities: {0: "Multiscale"}, 
weightkg: 210, 
evoLevel: 1,
}, 
};

exports.BattlePokedex = BattlePokedex;
