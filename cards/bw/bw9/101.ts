import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-101",
	localId: 101,

	// Card informations
	name: {
		en: "Ghetsis",
		fr: "Ghetis",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/101/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/101/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/101/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/101/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Yusuke Ohmura",



	attacks: [{
		name: {},
		text: {
			fr: "Votre adversaire montre sa main et mélange toutes les cartes Objet qui s'y trouvent avec son deck. Ensuite, piochez un nombre de cartes égal au nombre de cartes Objet que votre adversaire a mélangées avec son deck.",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
