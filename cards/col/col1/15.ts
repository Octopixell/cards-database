import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "col1-15",
	localId: 15,

	// Card informations
	name: {
		en: "Lugia",
		fr: "Lugia",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 249,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/15/low",
			fr: "https://assets.tcgdex.net/fr/col/col1/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/15/high",
			fr: "https://assets.tcgdex.net/fr/col/col1/15/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Linear Attack",
			fr: "Attaque linéaire",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez l’un des Pokémon de votre adversaire. Cette attaque inflige 30 dégâts à ce Pokémon (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hydro Splash",
			fr: "Hydro-éclaboussure",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
