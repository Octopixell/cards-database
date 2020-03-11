import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-122",
	localId: 122,

	// Card informations
	name: {
		en: "Kingdra-EX",
		fr: "Hyporoi-EX",
	},

	hp: 170,

	type: [
		Type.DRAGON,
	],

	dexId: 230,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/122/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/122/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/122/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/122/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Big Storm",
			fr: "Forte Tempête",
		},
		text: {
			en: "Discard any Stadium card in play.",
			fr: "Défaussez toute carte Stade en jeu.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Trail",
			fr: "Draco-Traînée",
		},
		text: {
			en: "This attack does 30 more damage for each basic Lightning Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Lightning de base attachée à ce Pokémon.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
