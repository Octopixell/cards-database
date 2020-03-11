import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-199",
	localId: 199,

	// Card informations
	name: {
		en: "Grimsley",
		fr: "Pieris",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/199/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/199/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/199/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/199/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "kodama",



	attacks: [{
		name: {},
		text: {
			fr: "Déplacez jusqu’à 3 marqueurs de dégâts de l’un des Pokémon de votre adversaire vers un autre de ses Pokémon.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
