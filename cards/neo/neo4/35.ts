import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-35",
	localId: 35,

	// Card informations
	name: {
		en: "Dark Forretress",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 205,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/35/high",
		},
	},

	evolveFrom: {
		en: "Pineco",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Armor Up",
		},
		text: {
			en: "Until the end of your next turn, if Dark Forretress would be Knocked Out by damage from an attack, flip a coin. If heads, Dark Forretress is not Knocked Out and its remaining HP become 10 instead.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Explosion",
		},
		text: {
			en: "Dark Forretress does 60 damage to itself.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
