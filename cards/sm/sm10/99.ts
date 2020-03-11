import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-99",
	localId: 99,

	// Card informations
	name: {
		en: "Gliscor",
		fr: "Scorvol",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
	],

	dexId: 472,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/99/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/99/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/99/high",
		},
	},

	evolveFrom: {
		en: "Gligar",
		fr: "Scorplane",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mizue",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Collect",
			fr: "Collecte",
		},
		text: {
			en: "Draw 3 cards.",
			fr: "Piochez 3 cartes.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Jab",
			fr: "Direct Toxik",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
