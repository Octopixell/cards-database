import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-105",
	localId: 105,

	// Card informations
	name: {
		en: "M Rayquaza-EX",
		fr: "M Rayquaza-EX",
	},

	hp: 220,

	type: [
		Type.COLORLESS,
	],

	dexId: 384,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/105/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/105/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/105/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/105/high",
		},
	},

	evolveFrom: {
		en: "Rayquaza-EX",
		fr: "Rayquaza-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: -1,
		type: AbilityType.ANCIENTTRAIT,
		name: {
			fr: "Évolution Δ",
		},
		text: {
			fr: "Vous pouvez jouer cette carte de votre main pour faire évoluer un Pokémon pendant votre premier tour ou pendant le tour où vous le jouez.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Emerald Break",
			fr: "Règle des Méga-Évolutions",
		},
		text: {
			en: "This attack does 30 damage times the number of your Benched Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Bris'Émeraude",
		},
		text: {
			fr: "Cette attaque inflige 30 dégâts multipliés par le nombre de vos Pokémon de Banc.",
		},
		damage: "30×"
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
