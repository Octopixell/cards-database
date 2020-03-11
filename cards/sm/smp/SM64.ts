import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM64",
	localId: "SM64",

	// Card informations
	name: {
		en: "Silvally",
		fr: "Silvallié",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 773,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM64/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM64/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM64/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM64/high",
		},
	},

	evolveFrom: {
		en: "Type: Null",
		fr: "Type:0",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Gear Scan",
			fr: "Scan d’Engrenage",
		},
		text: {
			en: "Search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez une carte Objet dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "X-Scissor",
			fr: "Plaie-Croix",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
