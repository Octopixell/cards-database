import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-73",
	localId: 73,

	// Card informations
	name: {
		en: "Fieldworker",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/73/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Ken Sugimori",











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
