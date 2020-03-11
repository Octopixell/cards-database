import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-236",
	localId: 236,

	// Card informations
	name: {
		en: "Rosa",
		fr: "Écho",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/236/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/236/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/236/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/236/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "kirisAki",



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer cette carte que si l’un de vos Pokémon a été mis K.O. pendant le dernier tour de votre adversaire.\n\nCherchez un Pokémon, une carte Dresseur et une carte Énergie de base dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
