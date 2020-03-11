import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-84",
	localId: 84,

	// Card informations
	name: {
		en: "Ancient Technical Machine (Ice)",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/84/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Mitsuhiro Arita",











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
