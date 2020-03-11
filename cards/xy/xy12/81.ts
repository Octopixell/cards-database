import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-81",
	localId: 81,

	// Card informations
	name: {
		en: "Pidgeot Spirit Link",
		fr: "Lien Spirituel Roucarnage",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/81/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/81/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/81/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Roucarnage-EX.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
