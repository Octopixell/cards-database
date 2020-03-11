import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dc1-25",
	localId: 25,

	// Card informations
	name: {
		en: "Team Aqua Admin",
		fr: "Admin Team Aqua",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/dc1/25/low",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/dc1/25/high",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/25/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "GAME FREAK inc.",



	attacks: [{
		name: {},
		text: {
			fr: "Attachez une carte Énergie de base de votre pile de défausse à votre Pokémon Actif de la Team Aqua.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Double Crisis",
		code: "dc1"
	}
}

export default card
