import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-59",
	localId: 59,

	// Card informations
	name: {
		en: "Vikavolt",
		fr: "Lucanon",
	},

	hp: 150,

	type: [
		Type.LIGHTNING,
	],

	dexId: 738,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/59/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/59/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/59/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/59/high",
		},
	},

	evolveFrom: {
		en: "Charjabug",
		fr: "Chrysapile",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Hasuno",

	abilities: [{
		id: 425,
		type: AbilityType.TALENT,
		name: {
			en: "Stealthy Body",
			fr: "Corps Furtif",
		},
		text: {
			en: "If there is any Stadium card in play, this Pokémon has no Weakness.",
			fr: "S’il y a une carte Stade en jeu, ce Pokémon n’a pas de Faiblesse.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Electricannon",
			fr: "Canon Électrique",
		},
		text: {
			en: "You may discard all Lightning Energy from this Pokémon. If you do, this attack does 100 more damage.",
			fr: "Vous pouvez défausser toute l’Énergie Lightning attachée à ce Pokémon. Dans ce cas, cette attaque inflige 100 dégâts supplémentaires.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
