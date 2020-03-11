import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-6",
	localId: 6,

	// Card informations
	name: {
		en: "Dark Hypno",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
		Type.DARKNESS,
	],

	dexId: 97,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/6/high",
		},
	},

	evolveFrom: {
		en: "Drowzee",
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
			en: "Dark Link",
		},
		text: {
			en: "Flip a coin. If heads, choose an attack on 1 of your Pokémon in play that has Dark in its name (excluding this one). Dark Link copies that attack except for its Energy cost. (You must still do anything else required for that attack.) (No matter what type that Pokémon is, Dark Hypno's type is still PsychicDarkness.) Dark Hypno performs that attack.\"",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Black Magic",
		},
		text: {
			en: "Does 20 damage times the number of your opponent's Benched Pokémon.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
