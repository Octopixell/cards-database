import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-29",
	localId: 29,

	// Card informations
	name: {
		en: "Xatu",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 178,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/29/high",
		},
	},

	evolveFrom: {
		en: "Natu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Yuka Morii",

	abilities: [{
		id: 415,
		type: AbilityType.POKEBODY,
		name: {
			en: "Mirror Coat",
		},
		text: {
			en: "If Xatu is Burned or Poisoned by an opponent's attack (even if Xatu is Knocked Out), the Attacking Pokémon is now affected by the same Special Conditions (1 if there is only 1).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Dazzle Dance",
		},
		text: {
			en: "Each Defending Pokémon is now Confused.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psyloop",
		},
		text: {
			en: "Does 30 damage plus 30 more damage for each Trainer card your opponent has in play.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
