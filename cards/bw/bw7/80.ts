import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-80",
	localId: 80,

	// Card informations
	name: {
		en: "Gligar",
		fr: "Scorplane",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 207,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/80/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/80/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/80/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Tail Smack",
			fr: "Coup de Queue",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Wicked Jab",
			fr: "Piqûre Infernale",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
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
