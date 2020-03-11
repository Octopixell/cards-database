import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "base4-22",
	localId: 22,

	// Card informations
	name: {
		en: "Dragonair",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 148,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base4/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base4/22/high",
		},
	},

	evolveFrom: {
		en: "Dratini",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slam",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hyper Beam",
		},
		text: {
			en: "If the Defending Pokémon has any Energy cards attached to it, choose 1 of them and discard it.",
		},
		damage: 20
	}],



	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Base Set 2",
		code: "base4"
	}
}

export default card
