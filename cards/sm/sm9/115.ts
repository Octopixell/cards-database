import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-115",
	localId: 115,

	// Card informations
	name: {
		en: "Alolan Exeggutor",
		fr: "Noadkoko d’Alola",
	},

	hp: 160,

	type: [
		Type.DRAGON,
	],

	dexId: 103,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/115/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/115/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/115/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/115/high",
		},
	},

	evolveFrom: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sanosuke Sakuma",



	attacks: [{
		name: {
			en: "Paradise Draw",
			fr: "Pioche Paradisiaque",
		},
		text: {
			en: "You may discard any number of cards from your hand. Then, draw cards until you have 6 cards in your hand.",
			fr: "Vous pouvez défausser autant de cartes que vous voulez de votre main. Ensuite, piochez des cartes jusqu’à ce que vous ayez 6 cartes dans votre main.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Egg Splat",
			fr: "Floc Œuf",
		},
		text: {
			en: "Discard any number of Exeggcute from your hand. This attack does 60 damage for each card you discarded in this way.",
			fr: "Défaussez autant de Noeunoeuf que vous voulez de votre main. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
