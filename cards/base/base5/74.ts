import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "base5-74",
	localId: 74,

	// Card informations
	name: {
		en: "Challenge!",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base5/74/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base5/74/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: "Kagemaru Himeno",











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Team Rocket",
		code: "base5"
	}
}

export default card
