import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-108",
	localId: 108,

	// Card informations
	name: {
		en: "Gengar ex",
	},

	hp: 150,

	type: [
		Type.PSYCHIC,
	],

	dexId: 94,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/108/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/108/high",
		},
	},

	evolveFrom: {
		en: "Haunter",
	},

	tags: [
		Tag.EX,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Poltergeist",
		},
		text: {
			en: "Look at your opponent's hand. This attack does 40 damage plus 10 more damage for each Trainer card in your opponent's hand.",
		},
		damage: 40
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Prize Count",
		},
		text: {
			en: "If you have more Prize cards left than your opponent, this attack does 60 damage plus 40 more damage.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	},{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	},{
		type: Type.COLORLESS,
		value: "-30"
	}],



	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
