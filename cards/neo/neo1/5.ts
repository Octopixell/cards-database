import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-5",
	localId: 5,

	// Card informations
	name: {
		en: "Feraligatr",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 160,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/5/high",
		},
	},

	evolveFrom: {
		en: "Croconaw",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Riptide",
		},
		text: {
			en: "Does 10 damage plus 10 damage times the number of Energy cards in your discard pile. Then, shuffle all Energy cards from your discard pile into your deck.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card
