import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-98",
	localId: 98,

	// Card informations
	name: {
		en: "Brock",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/98/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/98/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: "Ken Sugimori",











	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Gym Heroes",
		code: "gym1"
	}
}

export default card
