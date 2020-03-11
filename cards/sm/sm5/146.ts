import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-146",
	localId: 146,

	// Card informations
	name: {
		en: "Dialga-GX",
		fr: "Dialga-GX",
	},

	hp: 180,

	type: [
		Type.DRAGON,
	],

	dexId: 483,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/146/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/146/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/146/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/146/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Overclock",
			fr: "Overclocker",
		},
		text: {
			en: "Draw cards until you have 6 cards in your hand.",
			fr: "Piochez des cartes jusqu’à ce que vous ayez 6 cartes en main.",
		},
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shred",
			fr: "Déchiquetage",
		},
		text: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
		},
		damage: 80
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Timeless-GX",
			fr: "Intemporel-GX",
		},
		text: {
			en: "Take another turn after this one. (Skip the between-turns step.) (You can't use more than 1 GX attack in a game.)",
			fr: "Jouez de nouveau après ce tour. (Sautez l’étape entre les tours.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
