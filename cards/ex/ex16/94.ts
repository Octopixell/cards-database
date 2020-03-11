import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex16-94",
	localId: 94,

	// Card informations
	name: {
		en: "Flygon ex",
	},

	hp: 150,

	type: [
		Type.COLORLESS,
	],

	dexId: 330,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex16/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex16/94/high",
		},
	},

	evolveFrom: {
		en: "Vibrava",
	},

	tags: [
		Tag.EX,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 625,
		type: AbilityType.POKEBODY,
		name: {
			en: "Psychic Protector",
		},
		text: {
			en: "If Flygon ex is damaged by an opponent's attack, you may discard up to 4 cards from your hand. If you do, any damage done to Flygon ex is reduced by 10 for each card you discarded.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slashing Strike",
		},
		text: {
			en: "Flip a coin. If tails, Flygon ex can't use Slashing Strike during your next turn.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-30"
	},{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Power Keepers",
		code: "ex16"
	}
}

export default card
