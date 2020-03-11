import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-48",
	localId: 48,

	// Card informations
	name: {
		en: "Binacle",
		fr: "Opermine",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 688,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/48/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/48/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/48/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Double Scratch",
			fr: "Double Écorchure",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
