import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-91",
	localId: 91,

	// Card informations
	name: {
		en: "Focus Sash",
		fr: "Ceinture Force",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/91/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/91/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/91/high",
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
			fr: "Si le Pokémon Fighting auquel cette carte est attachée a tous ses PV et doit être mis K.O. par les dégâts d'une attaque de l'adversaire, le Pokémon n'est pas mis K.O. mais il ne lui reste que 10 PV. Ensuite, défaussez cette carte.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
