import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-12",
	localId: 12,

	// Card informations
	name: {
		en: "Misty's Golduck",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 55,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/12/high",
		},
	},

	evolveFrom: {
		en: "Psyduck",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Electro Beam",
		},
		text: {
			en: "Flip a coin. If tails, discard all Energy cards attached to Misty's Golduck.",
		},
		damage: 40
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Super Removal",
		},
		text: {
			en: "Flip a coin. If heads, choose 1 Energy card attached to each of your opponent's Pokémon that has any Energy cards and discard those Energy cards.",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
