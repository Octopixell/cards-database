import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-2",
	localId: 2,

	// Card informations
	name: {
		en: "Venomoth",
		fr: "Aéromite",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 49,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/2/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/2/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/2/high",
		},
	},

	evolveFrom: {
		en: "Venonat",
		fr: "Mimitoss",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Dizzying Wind",
			fr: "Vent Fou",
		},
		text: {
			en: "Whenever your opponent plays a Trainer card from his or her hand during his or her next turn, your opponent flips a coin. If tails, that card has no effect. (Your opponent still discards that card.)",
			fr: "Chaque fois que votre adversaire joue une carte Dresseur de sa main pendant son prochain tour, votre adversaire lance une pièce. Si c'est pile, la carte Dresseur n'a aucun effet. (Votre adversaire défausse la carte.)",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Noxious Scales",
			fr: "Écailles Nocives",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused and Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
