import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-47",
	localId: 47,

	// Card informations
	name: {
		en: "Plusle",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 311,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/47/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tag Draw",
		},
		text: {
			en: "Shuffle your hand into your deck. Then, draw 4 cards. If Minun is on your Bench, draw 4 more cards.",
		},
	},{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Positive Ion",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 more damage.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
