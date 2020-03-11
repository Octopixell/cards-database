import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "g1-7",
	localId: 7,

	// Card informations
	name: {
		en: "Parasect",
		fr: "Parasect",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 47,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/7/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/7/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/7/high",
		},
	},

	evolveFrom: {
		en: "Paras",
		fr: "Paras",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sumiyoshi Kizuki",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Colorful Spores",
			fr: "Spores Colorées",
		},
		text: {
			en: "Choose 3 of your Pokémon. For each of those Pokémon, search your deck for a different type of basic Energy card and attach it to that Pokémon. Shuffle your deck afterward.",
			fr: "Choisissez 3 de vos Pokémon. Pour chacun de ces Pokémon, cherchez une carte Énergie de base de type différent dans votre deck et attachez-la au Pokémon. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "X-Scissor",
			fr: "Plaie-Croix",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
