import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-85",
	localId: 85,

	// Card informations
	name: {
		en: "Krookodile",
		fr: "Crocorible",
	},

	hp: 150,

	type: [
		Type.DARKNESS,
	],

	dexId: 553,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/85/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/85/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/85/high",
		},
	},

	evolveFrom: {
		en: "Krokorok",
		fr: "Escroco",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Hajime Kusajima",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "False Accusation",
			fr: "Fausse Accusation",
		},
		text: {
			en: "This attack does 20 more damage for each card in your opponent's hand.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque carte dans la main de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Obsidian Fang",
			fr: "Croc d'Obsidienne",
		},
		text: {
			en: "Before doing damage, discard all Pokémon Tool cards from your opponent's Active Pokémon.",
			fr: "Avant d’infliger des dégâts, défaussez toutes les cartes Outil Pokémon du Pokémon Actif de votre adversaire.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
