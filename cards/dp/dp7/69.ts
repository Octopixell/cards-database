import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-69",
	localId: 69,

	// Card informations
	name: {
		en: "Onix",
		fr: "Onix",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 95,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/69/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/69/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/69/high",
		},
	},

	evolveFrom: {
		fr: "Onix",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kyoko Umemoto",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Harden",
			fr: "Armure",
		},
		text: {
			en: "During your opponent's next turn, if Onix would be damaged by an attack, prevent that attack's damage done to Onix if that damage is 40 or less.",
			fr: "Lors du prochain tour de votre adversaire, si une attaque inflige des dégâts à Onix, prévenez ces dégâts s'ils sont de 40 ou moins.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bind",
			fr: "Étreinte",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+20"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
