import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-98",
	localId: 98,

	// Card informations
	name: {
		en: "Fearow",
		fr: "Rapasdepic",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 22,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/98/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/98/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/98/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/98/high",
		},
	},

	evolveFrom: {
		en: "Spearow",
		fr: "Piafabec",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hideki Ishikawa",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Devastating Wind",
			fr: "Vent Dévastateur",
		},
		text: {
			en: "Your opponent shuffles their hand into their deck and draws 3 cards.",
			fr: "Votre adversaire mélange sa main avec son deck et pioche 3 cartes.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Slashing Strike",
			fr: "Coup Déchirant",
		},
		text: {
			en: "This Pokémon can't use Slashing Strike during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Coup Déchirant pendant votre prochain tour.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
