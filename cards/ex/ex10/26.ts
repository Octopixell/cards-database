import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-26",
	localId: 26,

	// Card informations
	name: {
		en: "Hitmontop",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 237,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/26/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hisao Nakamura",

	abilities: [{
		id: 66,
		type: AbilityType.POKEBODY,
		name: {
			en: "Stages of Evolution",
		},
		text: {
			en: "As long as Hitmontop is an Evolved Pokémon, is your Active Pokémon, and is damaged by an opponent's attack (even if Hitmontop is Knocked Out), put 2 damage counters on the Attacking Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Upward Kick",
		},
		text: {
			en: "If the Defending Pokémon already has at least 2 damage counters on it, this attack does 20 damage plus 30 more damage.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spiral Kick",
		},
		text: {
			en: "n/a",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card
