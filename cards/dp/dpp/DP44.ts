import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dpp-DP44",
	localId: "DP44",

	// Card informations
	name: {
		en: "Magnezone",
	},

	hp: 130,

	type: [
		Type.LIGHTNING,
	],

	dexId: 462,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP44/high",
		},
	},

	evolveFrom: {
		en: "Magneton",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Charge Beam",
		},
		text: {
			en: "Search your discard pile for an Energy card and attach it to Magnezone.",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Metallic Bolt",
		},
		text: {
			en: "You may discard a Lightning Energy and a Metal Energy attached to Magnezone. If you do, this attack's base damage is 120 instead of 60.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+30"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "DP Black Star Promos",
		code: "dpp"
	}
}

export default card
