import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-59",
	localId: 59,

	// Card informations
	name: {
		en: "Sabrina's Jynx",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 124,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/59/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/59/high",
		},
	},

	evolveFrom: {
		en: "Smoochum",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Good Night",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Good Morning",
		},
		text: {
			en: "If the Defending Pokémon was Asleep, it is no longer Asleep.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Gym Heroes",
		code: "gym1"
	}
}

export default card
