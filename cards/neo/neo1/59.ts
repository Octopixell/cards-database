import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-59",
	localId: 59,

	// Card informations
	name: {
		en: "Gligar",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 207,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/59/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/59/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hironobu Yoshida",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Poison Sting",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slash",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card
