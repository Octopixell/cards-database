import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY99",
	localId: "XY99",

	// Card informations
	name: {
		en: "Aerodactyl Spirit Link",
		fr: "Lien Spirituel Ptéra",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY99/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY99/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY99/high",
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
			fr: "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Ptéra-EX.",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
