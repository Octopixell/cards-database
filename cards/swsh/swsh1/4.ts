import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-4",
	localId: 4,

	dexId: 407,

	// Card informations
	name: {
		en: "Roserade",
		fr: "Roserade",
	},

	hp: 120,

	type: [
		Type.GRASS,
	],

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/4/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/4/low",
		}
	},

	evolveFrom: {
		en: "Roselia",
		fr: "Rosélia",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "chibi",

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Paralyze Poison",
			fr: "Poison Paralysant",
		},
		text: {
			en: "Your opponent’s Active Pokémon is now Poisoned. Flip a coin. If heads, your opponent’s Active Pokémon is also Paralyzed.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est également Paralysé.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mega Drain",
			fr: "Méga-Sangsue",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
