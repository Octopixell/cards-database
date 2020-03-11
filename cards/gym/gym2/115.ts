import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-115",
	localId: 115,

	// Card informations
	name: {
		en: "Koga's Ninja Trick",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/115/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/115/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: "Sumiyoshi Kizuki",











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
