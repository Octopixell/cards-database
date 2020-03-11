import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop7-4",
	localId: 4,

	// Card informations
	name: {
		en: "Latios",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 381,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop7/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop7/4/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Daisuke Ito",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Draw",
		},
		text: {
			en: "Flip a coin. If heads, search your deck for a basic Energy card and attach it to Latios. Shuffle your deck afterward.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Luster Purge",
		},
		text: {
			en: "Discard 3 Energy attached to Latios.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "POP Series 7",
		code: "pop7"
	}
}

export default card
