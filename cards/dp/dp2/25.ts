import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-25",
	localId: 25,

	// Card informations
	name: {
		en: "Glalie",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 362,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/25/high",
		},
	},

	evolveFrom: {
		en: "Snorunt",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 1052,
		type: AbilityType.POKEBODY,
		name: {
			en: "Craggy Face",
		},
		text: {
			en: "As long as Glalie is your Active Pokémon, any damage done by attacks from your opponent's Stage 2 Evolved Pokémon is reduced by 20 (before applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Intimidation Pebble",
		},
		text: {
			en: "Flip a coin. If heads, your opponent can't play any Trainer cards or Supporter cards from his or her hand during your opponent's next turn.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "+20"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
