import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-15",
	localId: 15,

	// Card informations
	name: {
		en: "Kingler",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 99,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/15/high",
		},
	},

	evolveFrom: {
		en: "Krabby",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shin-ichi Yoshida",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Bubble",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Giant Claw",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
