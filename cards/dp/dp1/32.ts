import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-32",
	localId: 32,

	// Card informations
	name: {
		en: "Medicham",
		fr: "Charmina",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 308,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/32/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/32/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/32/high",
		},
	},

	evolveFrom: {
		en: "Meditite",
		fr: "Meditikka",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Force Palm",
			fr: "Forte-Paume",
		},
		text: {
			en: "Count the number of damage counters on Medicham. Put that many damage counters on 1 of your opponent's Pokémon.",
			fr: "Comptabilisez le nombre de marqueurs de dégât sur Charmina. Placez autant de marqueurs de dégât sur 1 des Pokémon de votre adversaire.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Spinning Kick",
			fr: "Coup tournant",
		},
		text: {
			en: "Medicham does 20 damage to itself.",
			fr: "Charmina s'inflige 20 dégâts.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
