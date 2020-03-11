import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-5",
	localId: 5,

	// Card informations
	name: {
		en: "Carnivine",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 455,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/5/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "HiRON",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Ambush Bite",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage and discard an Energy attached to the Defending Pokémon.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
