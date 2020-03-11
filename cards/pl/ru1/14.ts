import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ru1-14",
	localId: 14,

	// Card informations
	name: {
		en: "Bastiodon",
	},

	hp: 120,

	type: [
		Type.METAL,
	],

	dexId: 411,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/ru1/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/ru1/14/high",
		},
	},

	evolveFrom: {
		en: "Shieldon",
	},

	tags: [
		Tag.STAGE2,
	],





	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Strength",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Pokémon Rumble",
		code: "ru1"
	}
}

export default card
