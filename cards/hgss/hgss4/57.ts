import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-57",
	localId: 57,

	// Card informations
	name: {
		en: "Bellsprout",
		fr: "Chétiflor",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 69,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/57/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/57/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/57/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/57/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Inviting Scent",
			fr: "Senteur ensorcelante",
		},
		text: {
			en: "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon.",
			fr: "Échangez le Pokémon Défenseur avec l'un des Pokémon de Banc de votre adversaire.",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Careless Tackle",
			fr: "Plaquage imprudent",
		},
		text: {
			en: "Bellsprout does 10 damage to itself.",
			fr: "Chetiflor s'inflige 10 dégâts.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
