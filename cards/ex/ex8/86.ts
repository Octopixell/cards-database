import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-86",
	localId: 86,

	// Card informations
	name: {
		en: "Energy Charge",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/86/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/86/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "Keiji Kinebuchi",











	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
