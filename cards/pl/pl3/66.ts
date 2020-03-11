import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-66",
	localId: 66,

	// Card informations
	name: {
		en: "Manectric G",
		fr: "Élecsprint ",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	dexId: 310,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/66/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/66/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/66/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
		Tag.SP,
	],

	illustrator: "Ryota Saito",



	attacks: [{
		name: {
			en: "Energy Absorption",
			fr: "Absorption d'énergie",
		},
		text: {
			en: "Search your discard pile for up to 2 Energy cards and attach them to Manectric G.",
			fr: "Choisissez dans votre pile de défausse jusqu'à 2 cartes Énergie et attachez-les à Elecsprint .",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Thunder Fang",
			fr: "Crocs Éclair",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
