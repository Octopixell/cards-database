import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-90",
	localId: 90,

	// Card informations
	name: {
		en: "Bertha's Warmth",
		fr: "La chaleur de Terry",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/90/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/90/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/90/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.",
		},
	},{
		name: {},
		text: {
			fr: "Retirez à 1 de vos Pokémon SP 5 marqueurs de dégât.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
