import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-72",
	localId: 72,

	// Card informations
	name: {
		en: "Buffer Piece",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/72/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Katsura Tabata",











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
