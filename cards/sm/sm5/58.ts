import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-58",
	localId: 58,

	// Card informations
	name: {
		en: "Giratina ◇",
		fr: "Giratina ",
	},

	hp: 160,

	type: [
		Type.PSYCHIC,
	],

	dexId: 487,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/58/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/58/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/58/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",

	abilities: [{
		id: 1039,
		type: AbilityType.TALENT,
		name: {
			en: "Chaotic Star",
			fr: "Étoile Chaotique",
		},
		text: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may attach 2 Psychic Energy cards from your hand to it.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez lui attacher 2 cartes Énergie Psychic de votre main.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Crisis Dive",
			fr: "Règle pour les cartes  (Prisme Étoile)",
		},
		text: {
			en: "Discard 2 Energy from this Pokémon.",
		},
		damage: 160
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			fr: "Plongeon Critique",
		},
		text: {
			fr: "Défaussez 2 Énergies de ce Pokémon.",
		},
		damage: 160
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
