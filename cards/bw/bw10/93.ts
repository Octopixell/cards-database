import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-93",
	localId: 93,

	// Card informations
	name: {
		en: "G Scope",
		fr: "Impact G",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/93/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/93/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/93/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Le Genesect-EX auquel cette carte est attachée peut aussi utiliser l'attaque sur cette carte. (Vous avez toujours besoin de l'Énergie nécessaire pour utiliser cette attaque.)",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			fr: "Impact G",
		},
		text: {
			fr: "Cette attaque inflige 100 dégâts à 1 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],







	rarity: Rarity.RareACE,

	category: Category.TRAINER,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
