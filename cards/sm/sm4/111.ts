import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-111",
	localId: 111,

	// Card informations
	name: {
		en: "Olivia",
		fr: "Alyxia",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/111/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/111/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/111/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/111/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez jusqu’à 2 Pokémon-GX dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
