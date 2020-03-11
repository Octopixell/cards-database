import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-146",
	localId: 146,

	// Card informations
	name: {
		en: "Crystal Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/146/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/146/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "Shin-ichi Yoshikawa",











	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
