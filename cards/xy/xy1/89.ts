import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-89",
	localId: 89,

	// Card informations
	name: {
		en: "Wigglytuff",
		fr: "Grodoudou",
	},

	hp: 100,

	type: [
		Type.FAIRY,
	],

	dexId: 40,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/89/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/89/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/89/high",
		},
	},

	evolveFrom: {
		en: "Jigglypuff",
		fr: "Rondoudou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mizue",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Gather Energy",
			fr: "Récolte d'Énergie",
		},
		text: {
			en: "Search your deck for a basic Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
			fr: "Cherchez une carte Énergie de base dans votre deck et attachez-la à l'un de vos Pokémon. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hocus Pinkus",
			fr: "Abracadabra",
		},
		text: {
			en: "The Defending Pokémon can't attack during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas attaquer pendant le prochain tour de votre adversaire.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
