import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-127",
	localId: 127,

	// Card informations
	name: {
		en: "Potion",
		fr: "Potion",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/127/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/127/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/127/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/127/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Shin-ichi Yoshikawa",



	attacks: [{
		name: {},
		text: {
			fr: "Retirez à 1 de vos Pokémon 2 marqueurs de dégât (retirez-en 1 si ce Pokémon n'en possède qu'1).",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
