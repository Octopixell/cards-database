import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-108",
	localId: 108,

	// Card informations
	name: {
		en: "M Charizard-EX",
		fr: "M Dracaufeu-EX",
	},

	hp: 230,

	type: [
		Type.DRAGON,
	],

	dexId: 6,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/108/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/108/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/108/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/108/high",
		},
	},

	evolveFrom: {
		en: "Charizard-EX",
		fr: "Dracaufeu-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wild Blaze",
			fr: "Règle des Méga-Évolutions",
		},
		text: {
			en: "Discard the top 5 cards of your deck.",
		},
		damage: 300
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Feu Furieux",
		},
		text: {
			fr: "Défaussez les 5 cartes du dessus de votre deck.",
		},
		damage: 300
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
