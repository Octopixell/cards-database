import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo3-39",
	localId: 39,

	// Card informations
	name: {
		en: "Unown [B]",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo3/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo3/39/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "CR CG gangs",

	abilities: [{
		id: 728,
		type: AbilityType.POKEPOWER,
		name: {
			en: "[Bear]",
		},
		text: {
			en: "Once during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon with Unown in its name to Unown . This power can't be used if Unown has 10 HP left. This power can be used even if Unown is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Hidden Power",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Neo Revelation",
		code: "neo3"
	}
}

export default card
