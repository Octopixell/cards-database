import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "base4-31",
	localId: 31,

	// Card informations
	name: {
		en: "Venomoth",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 49,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base4/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base4/31/high",
		},
	},

	evolveFrom: {
		en: "Venonat",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 168,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Shift",
		},
		text: {
			en: "Once during your turn (before your attack), you may change the type of Venomoth to the type of any other Pokémon in play other than Colorless. This power can't be used if Venomoth is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Venom Powder",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused and Poisoned.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Base Set 2",
		code: "base4"
	}
}

export default card
