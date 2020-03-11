import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-50",
	localId: 50,

	// Card informations
	name: {
		en: "Team Aqua's Corphish",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 341,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/50/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Jungo Suzuki",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Toxic Grip",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Team Magma vs Team Aqua",
		code: "ex4"
	}
}

export default card
