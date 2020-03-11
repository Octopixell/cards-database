import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM32",
	localId: "SM32",

	// Card informations
	name: {
		en: "Tapu Bulu-GX",
		fr: "Tokotoro-GX",
	},

	hp: 180,

	type: [
		Type.GRASS,
	],

	dexId: 787,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM32/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM32/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM32/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "PLANETA",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Horn Attack",
			fr: "Koud’Korne",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Nature's Judgment",
			fr: "Jugement de la Nature",
		},
		text: {
			en: "You may discard all Energy from this Pokémon. If you do, this attack does 60 more damage.",
			fr: "Vous pouvez défausser toute l’Énergie attachée à ce Pokémon. Dans ce cas, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 120
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Tapu Wilderness-GX",
			fr: "Toko Nature-GX",
		},
		text: {
			en: "Heal all damage from this Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Soignez tous les dégâts de ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 150
	}],





	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
