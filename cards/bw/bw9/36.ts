import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-36",
	localId: 36,

	// Card informations
	name: {
		en: "Lanturn",
		fr: "Lanturn",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 171,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/36/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/36/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/36/high",
		},
	},

	evolveFrom: {
		en: "Chinchou",
		fr: "Loupio",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mizue",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Special Tackle",
			fr: "Charge Spéciale",
		},
		text: {
			en: "If this Pokémon has any Special Energy attached to it, this attack does 30 more damage.",
			fr: "Si de l'Énergie spéciale est attachée à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Extreme Current",
			fr: "Courant Extrême",
		},
		text: {
			en: "Discard an Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie attachée à ce Pokémon.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
