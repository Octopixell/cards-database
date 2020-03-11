import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-151",
	localId: 151,

	// Card informations
	name: {
		en: "Tapu Fini",
		fr: "Tokopisco",
	},

	hp: 120,

	type: [
		Type.FAIRY,
	],

	dexId: 788,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/151/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/151/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/151/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/151/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Dream Away",
			fr: "Rêve d’Éloignement",
		},
		text: {
			en: "Flip a coin. If heads, your opponent shuffles their Active Pokémon and all cards attached to it into their deck.",
			fr: "Lancez une pièce. Si c’est face, votre adversaire mélange son Pokémon Actif et toutes les cartes qui lui sont attachées avec son deck.",
		},
	},{
		cost: [
			Type.FAIRY,
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Wonder Shine",
			fr: "Éclat Merveilleux",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 100
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

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
