import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-3",
	localId: 3,

	// Card informations
	name: {
		en: "Beedrill",
		fr: "Dardargnan",
	},

	hp: 120,

	type: [
		Type.GRASS,
	],

	dexId: 15,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/3/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/3/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/3/high",
		},
	},

	evolveFrom: {
		en: "Kakuna",
		fr: "Coconfort",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "kirisAki",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Sudden Sting",
			fr: "Piqûre Inattendue",
		},
		text: {
			en: "If this Pokémon evolved from Kakuna during this turn, your opponent's Active Pokémon is now Paralyzed and Poisoned.",
			fr: "Si ce Pokémon a évolué de Coconfort pendant ce tour, le Pokémon Actif de votre adversaire est maintenant Paralysé et Empoisonné.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Sharp Sting",
			fr: "Piqûre Pointue",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
