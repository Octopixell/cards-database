import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "det1-SM190",
	localId: "SM190",

	// Card informations
	name: {
		fr: "Détective Pikachu",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],



	image: {
		low: {
			fr: "https://assets.tcgdex.net/fr/sm/det1/SM190/low",
		},
		high: {
			fr: "https://assets.tcgdex.net/fr/sm/det1/SM190/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Framestore",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			fr: "Pause Café",
		},
		text: {
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Poing Tire-Bouchon",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Détective Pikachu",
		code: "det1"
	}
}

export default card
