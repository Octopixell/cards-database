import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-94",
	localId: 94,

	// Card informations
	name: {
		en: "Rhydon",
		fr: "Rhinoféros",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
	],

	dexId: 112,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/94/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/94/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/94/high",
		},
	},

	evolveFrom: {
		en: "Rhyhorn",
		fr: "Rhinocorne",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "kirisAki",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dirty Work",
			fr: "Sale Boulot",
		},
		text: {
			en: "Discard the top card of your opponent's deck. If you played Giovanni's Exile from your hand during this turn, discard the top 5 cards instead.",
			fr: "Défaussez la carte du dessus du deck de votre adversaire. Si vous avez joué Exil de Giovanni de votre main pendant ce tour, défaussez les 5 cartes du dessus de son deck à la place.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Horn Attack",
			fr: "Koud’Korne",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
