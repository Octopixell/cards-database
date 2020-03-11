import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-46",
	localId: 46,

	// Card informations
	name: {
		en: "Nidoking BREAK",
		fr: "Nidoking TURBO",
	},

	hp: 180,

	type: [
		Type.PSYCHIC,
	],

	dexId: 34,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/46/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/46/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/46/high",
		},
	},

	evolveFrom: {
		en: "Nidoking",
		fr: "Nidoking",
	},

	tags: [
		Tag.BREAK,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Toxic Drill",
			fr: "Règle des Évolutions TURBO",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned. Put 2 damage counters instead of 1 on that Pokémon between turns.",
		},
		damage: 120
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			fr: "Perce Toxique",
		},
		text: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 2 marqueurs de dégâts au lieu d’un sur le Pokémon ciblé entre chaque tour.",
		},
		damage: 120
	}],







	rarity: Rarity.RareBREAK,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
