import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "base6-100",
	localId: 100,

	// Card informations
	name: {
		en: "Full Heal Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base6/100/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base6/100/high",
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
		name: "Legendary Collection",
		code: "base6"
	}
}

export default card
