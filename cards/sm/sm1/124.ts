import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-124",
	localId: 124,

	// Card informations
	name: {
		en: "Poison Barb",
		fr: "Pic Venin",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/124/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/124/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/124/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/124/high",
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
			fr: "Si le Pokémon auquel cette carte est attachée est votre Pokémon Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même si le Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Empoisonné.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
