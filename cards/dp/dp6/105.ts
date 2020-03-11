import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-105",
	localId: 105,

	// Card informations
	name: {
		en: "Lileep",
		fr: "Lilia",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 345,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/105/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/105/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/105/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/105/high",
		},
	},

	evolveFrom: {
		en: "Root Fossil",
		fr: "Wurzelfossil",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Astonish",
			fr: "Etonnément",
		},
		text: {
			en: "Choose 1 card from your opponent's hand without looking. Look at that card you chose, then have your opponent shuffle that card into his or her deck.",
			fr: "Choisissez sans regarder une carte de la main de votre adversaire. Regardez-la et demandez à votre adversaire de la mélanger à son deck.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Absorb",
			fr: "Vol-vie",
		},
		text: {
			en: "Remove 2 damage counters from Lileep.",
			fr: "Retirez à Lilia 2 marqueurs de dégât.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
