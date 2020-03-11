import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-62",
	localId: 62,

	// Card informations
	name: {
		en: "Gulpin",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 316,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/62/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yuka Morii",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Yawn",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Spit Poison",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
