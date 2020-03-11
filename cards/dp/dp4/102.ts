import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-102",
	localId: 102,

	// Card informations
	name: {
		en: "Rare Candy",
		fr: "Super bonbon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/102/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/102/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/102/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/102/high",
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
			fr: "Choisissez 1 de vos Pokémon de base en jeu. Si vous possédez dans votre main une carte Niveau 1 ou Niveau 2 qui évolue de ce Pokémon, placez-la sur le Pokémon de base. (Vous le faites ainsi évoluer.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
