import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-4",
	localId: 4,

	// Card informations
	name: {
		en: "Ditto",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 132,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/4/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "MikiTanaka",

	abilities: [{
		id: 939,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Form Variation",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your discard pile for a Basic Pokémon (excluding Pokémon-ex and Ditto) and switch it with Ditto. (Any cards attached to Ditto, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Place Ditto in the discard pile.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Ball",
		},
		text: {
			en: "Does 10 damage plus 10 more damage for each Energy attached to Ditto but not used to pay for this attack's Energy cost. You can't add more then 20 damage in this way.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
