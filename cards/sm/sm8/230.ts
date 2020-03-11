import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-230",
	localId: 230,

	// Card informations
	name: {
		en: "Counter Gain",
		fr: "Rattrape-Riposte",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/230/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/230/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/230/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/230/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "S’il vous reste plus de cartes Récompense que votre adversaire, les attaques du Pokémon auquel cette carte est attachée coûtent Colorless de moins.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
