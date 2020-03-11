import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-28",
	localId: 28,

	// Card informations
	name: {
		en: "Helioptile",
		fr: "Galvaran",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 694,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/28/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/28/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/28/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "HiRON",



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Tail Rap",
			fr: "Frap'Keu",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
