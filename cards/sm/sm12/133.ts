import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-133",
	localId: 133,

	// Card informations
	name: {
		en: "Absol",
		fr: "Absol",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 359,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/133/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/133/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/133/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/133/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mizue",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Ominous News",
			fr: "Mauvais Augure",
		},
		text: {
			en: "Discard a Special Energy from 1 of your opponent's Pokémon.",
			fr: "Défaussez une Énergie spéciale de l’un des Pokémon de votre adversaire.",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Dirty Throw",
			fr: "Vilain Lancer",
		},
		text: {
			en: "Discard a card from your hand. If you can't discard a card, this attack does nothing.",
			fr: "Défaussez une carte de votre main. Si vous ne pouvez pas défausser de carte, cette attaque ne fait rien.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
