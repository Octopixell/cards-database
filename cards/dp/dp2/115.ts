import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-115",
	localId: 115,

	// Card informations
	name: {
		en: "Team Galactic's Wager",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/115/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/115/high",
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
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
