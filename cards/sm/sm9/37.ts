import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-37",
	localId: 37,

	// Card informations
	name: {
		en: "Alolan Golem",
		fr: "Grolem d’Alola",
	},

	hp: 180,

	type: [
		Type.LIGHTNING,
	],

	dexId: 76,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/37/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/37/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/37/high",
		},
	},

	evolveFrom: {
		en: "Alolan Graveler",
		fr: "Gravalanch d’Alola",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "kawayoo",



	attacks: [{
		name: {
			en: "Electromagnetic Bomb",
			fr: "Bombe Électromagnétique",
		},
		text: {
			en: "Move any number of Lightning Energy from your Benched Pokémon to this Pokémon. This attack does 20 damage for each Energy card you moved in this way.",
			fr: "Déplacez autant d’Énergies Lightning que vous voulez de vos Pokémon de Banc vers ce Pokémon. Cette attaque inflige 20 dégâts pour chaque carte Énergie déplacée de cette façon.",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Super Zap Cannon",
			fr: "Super Élecanon",
		},
		text: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
		},
		damage: 190
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
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
