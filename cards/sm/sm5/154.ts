import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-154",
	localId: 154,

	// Card informations
	name: {
		en: "Mars",
		fr: "Mars",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/154/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/154/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/154/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/154/high",
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
			fr: "Piochez 2 cartes. Dans ce cas, défaussez au hasard une carte de la main de votre adversaire.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
