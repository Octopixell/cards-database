import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-92",
	localId: 92,

	// Card informations
	name: {
		en: "Root Fossil",
	},

	hp: 40,





	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/92/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/92/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Ryo Ueda",











	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card
