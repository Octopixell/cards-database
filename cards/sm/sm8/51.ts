import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-51",
	localId: 51,

	// Card informations
	name: {
		en: "Pyroar",
		fr: "Némélios",
	},

	hp: 130,

	type: [
		Type.FIRE,
	],

	dexId: 668,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/51/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/51/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/51/high",
		},
	},

	evolveFrom: {
		en: "Litleo",
		fr: "Hélionceau",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hasuno",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Crunch",
			fr: "Mâchouille",
		},
		text: {
			en: "Discard an Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heat Blast",
			fr: "Explosion de Chaleur",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
