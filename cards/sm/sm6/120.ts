import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-120",
	localId: 120,

	// Card informations
	name: {
		en: "Greninja-GX",
		fr: "Amphinobi-GX",
	},

	hp: 230,

	type: [
		Type.WATER,
	],

	dexId: 658,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/120/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/120/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/120/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/120/high",
		},
	},

	evolveFrom: {
		en: "Frogadier",
		fr: "Croâporal",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 998,
		type: AbilityType.TALENT,
		name: {
			en: "Shuriken Flurry",
			fr: "Rafale de Shuriken",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put 3 damage counters on 1 of your opponent's Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez placer 3 marqueurs de dégâts sur l’un des Pokémon de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Haze Slash",
			fr: "Brouillard Lacérant",
		},
		text: {
			en: "You may shuffle this Pokémon and all cards attached to it into your deck.",
			fr: "Vous pouvez mélanger ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
		},
		damage: 110
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shadowy Hunter-GX",
			fr: "Chasseur Tapi-GX",
		},
		text: {
			en: "This attack does 130 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 GX attack in a game.)",
			fr: "Cette attaque inflige 130 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
