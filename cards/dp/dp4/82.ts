import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-82",
	localId: 82,

	// Card informations
	name: {
		en: "Slowpoke",
		fr: "Ramoloss",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 79,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/82/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/82/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/82/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Saya　Tsuruta",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Rest",
			fr: "Repos",
		},
		text: {
			en: "Remove all Special Conditions and 3 damage counters from Slowpoke. Slowpoke is now Asleep.",
			fr: "Retirez à Ramoloss tous ses États Spéciaux et 3 marqueurs de dégât. Ramoloss est maintenant Endormi.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Tumble Over",
			fr: "Culbuter",
		},
		text: {
			en: "Slowpoke can't attack during your next turn.",
			fr: "Ramoloss ne peut pas attaquer lors de votre prochain tour.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
