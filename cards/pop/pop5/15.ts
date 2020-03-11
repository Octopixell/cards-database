import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop5-15",
	localId: 15,

	// Card informations
	name: {
		en: "Zangoose (Delta Species)",
	},

	hp: 70,

	type: [
		Type.METAL,
	],

	dexId: 335,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop5/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop5/15/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Detect",
		},
		text: {
			en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Zangoose during your opponent's next turn.",
		},
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Metal Claw",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "POP Series 5",
		code: "pop5"
	}
}

export default card
