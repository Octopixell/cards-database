import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-100",
	localId: 100,

	// Card informations
	name: {
		en: "Counter Energy",
		fr: "Énergie Riposte",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/100/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/100/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/100/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/100/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],





	attacks: [{
		name: {},
		text: {
			fr: "Cette carte fournit de l’Énergie Colorless. \n\nS’il vous reste plus de cartes Récompense que votre adversaire et que cette carte est attachée à un Pokémon qui n’est pas un Pokémon-GX ou un Pokémon-EX, cette carte fournit tout type d’Énergie mais seulement 2 Énergies à la fois.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
