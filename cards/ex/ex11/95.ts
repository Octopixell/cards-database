import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-95",
	localId: 95,

	// Card informations
	name: {
		en: "Holon Researcher",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/95/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Kanako Eo",











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
