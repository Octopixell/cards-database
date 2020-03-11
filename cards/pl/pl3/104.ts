import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-104",
	localId: 104,

	// Card informations
	name: {
		en: "Feebas",
		fr: "Barpau",
	},

	hp: 30,

	type: [
		Type.WATER,
	],

	dexId: 349,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/104/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/104/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/104/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/104/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		name: {
			en: "Surprise Attack",
			fr: "Attaque surprise",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Count and Draw",
			fr: "Compter et piocher",
		},
		text: {
			en: "Draw a card for each of your opponent's Pokémon that isn't an Evolved Pokémon.",
			fr: "Piochez une carte pour chaque Pokémon de votre adversaire qui n'est pas un Pokémon Évolué.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
