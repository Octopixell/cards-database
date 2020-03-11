import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-77",
	localId: 77,

	// Card informations
	name: {
		en: "Honchkrow G",
		fr: "Corboss ",
	},

	hp: 80,

	type: [
		Type.DARKNESS,
	],

	dexId: 430,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/77/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/77/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/77/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
		Tag.SP,
	],

	illustrator: "Yusuke Ishikawa",



	attacks: [{
		name: {
			en: "Honcho's Command",
			fr: "L'ordre d'Honcho",
		},
		text: {
			en: "Search your deck for up to 2 in any combination of Stadium cards or Trainer cards that has Team Galactic's Invention in its name, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
			fr: "Choisissez dans votre deck n'importe quelle combinaison de jusqu'à 2 cartes Stade ou cartes Dresseur dont le nom comporte Invention de Team Galaxie. Montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Target Attack",
			fr: "Attaque ciblée",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. If that Pokémon already has any damage counters on it, this attack does 20 damage plus 20 more damage. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 20 dégâts. Si ce Pokémon possède déjà des marqueurs de dégât, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
