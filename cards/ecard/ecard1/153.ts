import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-153",
	localId: 153,

	// Card informations
	name: {
		en: "Energy Search",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/153/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/153/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: "Kai Ishikawa",











	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
