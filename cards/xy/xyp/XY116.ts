import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY116",
	localId: "XY116",

	// Card informations
	name: {
		en: "Arceus",
		fr: "Arceus",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 493,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY116/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY116/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY116/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY116/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Type Switch",
			fr: "Échange de Type",
		},
		text: {
			en: "Choose Grass, Fire, Water, Lightning, Psychic, Fighting, Darkness, Metal, Fairy, or Dragon type. Until the end of your next turn, this Pokémon is that type.",
			fr: "Choisissez le type Grass, Fire, Water, Lightning, Psychic, Fighting, Darkness, Metal, Fairy ou Dragon. Jusqu'à la fin de votre prochain tour, ce Pokémon est de ce type.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Power Blast",
			fr: "Violente Déflagration",
		},
		text: {
			en: "Discard an Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie attachée à ce Pokémon.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
