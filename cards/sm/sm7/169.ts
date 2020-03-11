import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-169",
	localId: 169,

	// Card informations
	name: {
		en: "Shiftry-GX",
		fr: "Tengalice-GX",
	},

	hp: 240,

	type: [
		Type.GRASS,
	],

	dexId: 275,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/169/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/169/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/169/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/169/high",
		},
	},

	evolveFrom: {
		en: "Nuzleaf",
		fr: "Pifeuil",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "PLANETA Igarashi",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Perplex",
			fr: "Affolement",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 40
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Extrasensory",
			fr: "Extrasenseur",
		},
		text: {
			en: "If you have the same number of cards in your hand as your opponent, this attack does 90 more damage.",
			fr: "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
		},
		damage: 90
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Den of Iniquity-GX",
			fr: "Lieu de Perdition-GX",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. Your opponent shuffles that Pokémon and all cards attached to it into their deck. (You can't use more than 1 GX attack in a game.)",
			fr: "Choisissez l’un des Pokémon de votre adversaire. Votre adversaire mélange ce Pokémon et toutes les cartes qui lui sont attachées avec son deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
