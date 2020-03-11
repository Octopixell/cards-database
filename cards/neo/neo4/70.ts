import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-70",
	localId: 70,

	// Card informations
	name: {
		en: "Larvitar",
	},

	hp: 40,

	type: [
		Type.FIGHTING,
	],

	dexId: 246,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/70/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/70/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Leer",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon can't attack during your opponent's next turn. (Benching or evolving either Pokémon ends this effect.)",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Rock Throw",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-30"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
