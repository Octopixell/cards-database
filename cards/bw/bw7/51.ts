import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-51",
	localId: 51,

	// Card informations
	name: {
		en: "Voltorb",
		fr: "Voltorbe",
	},

	hp: 50,

	type: [
		Type.LIGHTNING,
	],

	dexId: 100,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/51/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/51/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/51/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Static Shock",
			fr: "Choc Statique",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
