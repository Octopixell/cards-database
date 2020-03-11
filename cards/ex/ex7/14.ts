import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-14",
	localId: 14,

	// Card informations
	name: {
		en: "Togetic",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 176,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/14/high",
		},
	},

	evolveFrom: {
		en: "Togepi",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sumiyoshi Kizuki",

	abilities: [{
		id: 1235,
		type: AbilityType.POKEBODY,
		name: {
			en: "Holy Shield",
		},
		text: {
			en: "Prevent all effects of attacks, including damage, done to Togetic by your opponent's Pokémon that has Dark in its name.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dive",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rainbow Moves",
		},
		text: {
			en: "Choose 1 of your opponent's Benched Pokémon's attacks. Rainbow Moves copies that attack except for its Energy cost. (You must still do anything else required for that attack.) (No matter what type that Pokémon is, Togetic's type is still Colorless. Togetic performs that attack.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
