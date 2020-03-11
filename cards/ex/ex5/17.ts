import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-17",
	localId: 17,

	// Card informations
	name: {
		en: "Chimecho",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 358,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/17/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Miki Tanaka",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Chime",
		},
		text: {
			en: "Search your opponent's discard pile for a Supporter card and use the effect of that card as the effect of this attack. (The Supporter card remains in your opponent's discard pile.)",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Psychic Boom",
		},
		text: {
			en: "Does 10 damage times the amount of Energy attached to the Defending Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
