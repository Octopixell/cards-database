import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-47",
	localId: 47,

	// Card informations
	name: {
		en: "Snorunt",
		fr: "Stalgamin",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 361,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/47/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/47/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/47/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "sowsow",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Continuous Headbutt",
			fr: "Coup d’Boule Sans Fin",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 20 damage for each heads.",
			fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 20 dégâts pour chaque côté face.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
