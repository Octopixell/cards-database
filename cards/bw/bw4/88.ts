import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-88",
	localId: 88,

	// Card informations
	name: {
		en: "Heavy Ball",
		fr: "Masse Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/88/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/88/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/88/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/88/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez dans votre deck un Pokémon avec un coût de Retraite de 3 ou plus, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
