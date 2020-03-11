import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-53",
	localId: 53,

	// Card informations
	name: {
		en: "Carnivine",
		fr: "Vortente",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 455,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/53/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/53/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/53/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Satoshi Ohta",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Vine Whip",
			fr: "Fouet lianes",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Swallow",
			fr: "Avale",
		},
		text: {
			en: "Flip a coin. If heads, remove from Carnivine the number of damage counters equal to the damage you did to the Defending Pokémon.",
			fr: "Lancez une pièce. Si c'est face, retirez à Vortente autant de marqueurs de dégât que vous avez infligé de dégâts au Pokémon Défenseur.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
