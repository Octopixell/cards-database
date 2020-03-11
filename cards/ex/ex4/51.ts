import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-51",
	localId: 51,

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
			en: "https://assets.tcgdex.net/en/ex/ex4/51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/51/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Jungo Suzuki",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Slash",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slow-Acting Poison",
		},
		text: {
			en: "At the end of your opponent's next turn, the Defending Pokémon is now Poisoned.",
		},
		damage: 10
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
