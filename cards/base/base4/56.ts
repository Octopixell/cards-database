import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "base4-56",
	localId: 56,

	// Card informations
	name: {
		en: "Persian",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 53,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base4/56/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base4/56/high",
		},
	},

	evolveFrom: {
		en: "Meowth",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Scratch",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pounce",
		},
		text: {
			en: "If the Defending Pokémon attacks Persian during your opponent's next turn, any damage done by the attack is reduce by 10 (after applying Weakness and Resistance). (Benching either Pokémon ends this effect.)",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Base Set 2",
		code: "base4"
	}
}

export default card
