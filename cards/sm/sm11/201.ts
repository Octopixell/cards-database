import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-201",
	localId: 201,

	// Card informations
	name: {
		en: "Karate Belt",
		fr: "Ceinture de Karaté",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/201/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/201/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/201/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/201/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Yoshinobu Saito",



	attacks: [{
		name: {},
		text: {
			fr: "S’il vous reste plus de cartes Récompense qu’à votre adversaire, les attaques du Pokémon auquel cette carte est attachée coûtent Fighting de moins.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
