import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-82",
	localId: 82,

	// Card informations
	name: {
		en: "Dangerous Energy",
		fr: "Énergie Danger",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/82/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/82/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/82/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Cette carte ne peut être attachée qu'à un Pokémon Darkness. Cette carte ne fournit de l'Énergie Darkness que pendant qu'elle est attachée à un Pokémon Darkness.\n\nChaque fois que le Pokémon Darkness auquel cette carte est attachée est votre Pokémon Actif et qu'il subit les dégâts d'une attaque du Pokémon-EX de votre adversaire (même si le Pokémon est mis K.O.), placez 2 marqueurs de dégâts sur le Pokémon-EX Attaquant.\n\n(Si cette carte est attachée à autre chose qu'un Pokémon Darkness, défaussez cette carte.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
