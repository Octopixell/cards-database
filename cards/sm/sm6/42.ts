import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-42",
	localId: 42,

	// Card informations
	name: {
		en: "Mesprit",
		fr: "Créfollet",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 481,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/42/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/42/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/42/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/42/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kodama",

	abilities: [{
		id: 899,
		type: AbilityType.TALENT,
		name: {
			en: "Silent Waves",
			fr: "Vagues Silencieuses",
		},
		text: {
			en: "If you have Azelf in play, your opponent's Pokémon in play have no Resistance.",
			fr: "Si vous avez Créfadet en jeu, les Pokémon en jeu de votre adversaire n’ont pas de Résistance.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mind Splash",
			fr: "Splash Cérébral",
		},
		text: {
			en: "If Uxie is on your Bench, this attack does 50 more damage.",
			fr: "Si Créhelf est sur votre Banc, cette attaque inflige 50 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
