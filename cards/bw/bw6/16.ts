import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-16",
	localId: 16,

	// Card informations
	name: {
		en: "Maractus",
		fr: "Maracachi",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 556,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/16/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/16/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/16/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "sui",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Stun Needle",
			fr: "Para-Dard",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Reinforced Needle",
			fr: "Épine Renforcée",
		},
		text: {
			en: "If this Pokémon has a Pokémon Tool card attached to it, this attack does 40 more damage.",
			fr: "Si une carte Outil Pokémon est attachée à ce Pokémon, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
