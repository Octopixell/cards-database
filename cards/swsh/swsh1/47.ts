import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-47",
	localId: 47,

	dexId: 119,

	// Card informations
	name: {
		en: "Seaking",
		fr: "Poissoroy",
	},

	hp: 110,

	type: [
		Type.WATER,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/47/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/47/low",
		}
	},

	evolveFrom: {
		en: "Goldeen",
		fr: "Poissirène",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shibuzoh.",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Ripping Horn",
			fr: "Corne Déchirante",
		},
		text: {
			en: "Flip 3 coins. For each heads, discard an Energy from your opponent’s Active Pokémon.",
			fr: "Lancez 3 pièces. Pour chaque côté face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pierce",
			fr: "Transpercement",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
