import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo3-20",
	localId: 20,

	// Card informations
	name: {
		en: "Lugia",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 249,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo3/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo3/20/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Aya Kusube",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aerowing",
		},
		text: {
			en: "You may flip a coin. If heads, this attack does 80 damage. If tails, this attack does nothing.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Revelation",
		code: "neo3"
	}
}

export default card
