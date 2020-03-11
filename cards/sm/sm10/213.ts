import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-213",
	localId: 213,

	// Card informations
	name: {
		en: "Red's Challenge",
		fr: "Défi de Red",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/213/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/213/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/213/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/213/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer cette carte que si vous défaussez 2 autres cartes de votre main.\n\nCherchez une carte dans votre deck, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
