import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-10",
	localId: 10,

	// Card informations
	name: {
		en: "Charmeleon",
		fr: "Reptincel",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 5,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/10/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/10/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/10/high",
		},
	},

	evolveFrom: {
		en: "Charmander",
		fr: "Salamèche",
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
			en: "Slash",
			fr: "Tranche",
		},
		damage: 50
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flamethrower",
			fr: "Lance-Flammes",
		},
		text: {
			en: "Discard a Fire Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie Fire attachée à ce Pokémon.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
