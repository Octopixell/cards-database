import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop3-2",
	localId: 2,

	// Card informations
	name: {
		en: "Flareon",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 136,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop3/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop3/2/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Quick Attack",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Fire Spin",
		},
		text: {
			en: "Discard 2 Basic energy cards attached to Flareon or this attack does nothing.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "POP Series 3",
		code: "pop3"
	}
}

export default card
