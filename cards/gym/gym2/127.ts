import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-127",
	localId: 127,

	// Card informations
	name: {
		en: "Fighting Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/127/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/127/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Keiji Kinebuchi",











	rarity: Rarity.Common,

	category: Category.ENERGY,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
