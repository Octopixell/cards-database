import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [723],
	set: Set,

	name: {
		fr: "Efflèche",
		en: "Dartrix",
		es: "Dartrix",
		it: "Dartrix",
		pt: "Dartrix",
		de: "Arboretoss"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		fr: "Brindibou",
		en: "Rowlet"
	},

	attacks: [{
		name: {
			fr: "Tranch'Herbe",
			en: "Razor Leaf",
			es: "Hoja Afilada",
			it: "Foglielama",
			pt: "Folha Navalha",
			de: "Rasierblatt"
		},

		damage: 40,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "It throws one knifelike feather after another at its enemies, and each one precisely strikes a weak point. These feathers are known as blade quills."
	}
}

export default card
