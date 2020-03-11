import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-72",
	localId: 72,

	// Card informations
	name: {
		en: "Light Sunflora",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 192,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/72/high",
		},
	},

	evolveFrom: {
		en: "Sunkern",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Toshinao Aoki",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Reflected Sunlight",
		},
		text: {
			en: "Attach up to 2 Energy cards from your hand to 1 of your Pokémon.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Solarbeam",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
