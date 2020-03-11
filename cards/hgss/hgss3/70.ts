import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-70",
	localId: 70,

	// Card informations
	name: {
		en: "Togepi",
		fr: "Togepi",
	},

	hp: 40,

	type: [
		Type.COLORLESS,
	],

	dexId: 175,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/70/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/70/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/70/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/70/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Plead",
			fr: "Supplication",
		},
		text: {
			en: "Ask your opponent if you may draw 2 cards. If yes, draw 2 cards. If no, this attack does 20 damage to the Defending Pokémon.",
			fr: "Demandez à votre adversaire si vous pouvez piocher 2 cartes. S'il accepte, piochez 2 cartes. S'il refuse, cette attaque inflige 20 dégâts au Pokémon Défenseur.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
