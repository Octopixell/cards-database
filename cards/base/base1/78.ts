import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "base1-78",
	localId: 78,

	// Card informations
	name: {
		en: "Scoop Up",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base1/78/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base1/78/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: "Keiji Kinebuchi",











	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Base",
		code: "base1"
	}
}

export default card
