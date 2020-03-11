import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-1",
	localId: 1,

	// Card informations
	name: {
		en: "Banette",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 354,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/1/high",
		},
	},

	evolveFrom: {
		en: "Shuppet",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kyoko Umemoto",

	abilities: [{
		id: 148,
		type: AbilityType.POKEBODY,
		name: {
			en: "Safeguard",
		},
		text: {
			en: "Prevent all effects of attacks, including damage, done to Banette by your opponent's Pokémon-ex.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Night Murmurs",
		},
		text: {
			en: "If the Defending Pokémon is a Basic Pokémon, that Pokémon is now Confused.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
