import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-13",
	localId: 13,

	// Card informations
	name: {
		en: "Aerodactyl",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 142,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/13/high",
		},
	},

	evolveFrom: {
		en: "Old Amber",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",

	abilities: [{
		id: 1084,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Unearth",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for Helix Fossil, Dome Fossil, or Old Amber, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Aerodactyl is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hyper Beam",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
