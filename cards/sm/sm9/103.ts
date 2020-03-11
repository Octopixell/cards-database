import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-103",
	localId: 103,

	// Card informations
	name: {
		en: "Ferrothorn",
		fr: "Noacier",
	},

	hp: 120,

	type: [
		Type.METAL,
	],

	dexId: 598,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/103/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/103/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/103/high",
		},
	},

	evolveFrom: {
		en: "Ferroseed",
		fr: "Grindur",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hasuno",



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Guard Press",
			fr: "Pression de Garde",
		},
		text: {
			en: "During your opponent's next turn, this Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Thorn Pod Throw",
			fr: "Lancer de Boule Épine",
		},
		text: {
			en: "This attack does 20 damage times the amount of Metal Energy attached to this Pokémon to 1 of your opponent's Benched Pokémon. You can't do more than 100 damage to a Benched Pokémon in this way. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts, multipliés par le nombre d’Énergies Metal attachées à ce Pokémon, à l’un des Pokémon de Banc de votre adversaire. Vous ne pouvez pas infliger plus de 100 dégâts à un Pokémon de Banc de cette façon. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
