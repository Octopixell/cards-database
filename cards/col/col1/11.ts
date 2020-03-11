import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "col1-11",
	localId: 11,

	// Card informations
	name: {
		en: "Jirachi",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 385,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/11/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "match",

	abilities: [{
		id: 1008,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Stardust Song",
		},
		text: {
			en: "Once during your turn, when you put Jirachi from your hand onto your Bench, you may flip 3 coins. For each heads, search your discard pile for a Psychic Energy card and attach it to Jirachi.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Time Hollow",
		},
		text: {
			en: "Choose a number of your opponent's Stage 1 or Stage 2 Evolved Pokémon up to the amount of Energy attached to Jirachi. Remove the highest Stage Evolution card from each of those Pokémon and put those cards back into your opponent's hand.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
