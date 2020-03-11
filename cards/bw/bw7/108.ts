import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-108",
	localId: 108,

	// Card informations
	name: {
		en: "Ditto",
		fr: "Métamorph",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 132,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/108/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/108/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/108/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/108/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "HiRON",

	abilities: [{
		id: 163,
		type: AbilityType.TALENT,
		name: {
			en: "Transform",
			fr: "Morphing",
		},
		text: {
			en: "During your turn (before your attack), you may put a Basic Pokémon from your hand on top of this Pokémon. (This does not count as playing that Pokémon or evolving.) This Pokémon is now that Pokémon. (Any cards attached to this Pokémon, damage counters, Special Conditions, turns in play, and any other effects remain on the new Pokémon.)",
			fr: "Pendant votre tour (avant votre attaque), vous pouvez placer un Pokémon de base de votre main sur ce Pokémon. (Cela n'équivaut pas à jouer ou à faire évoluer le Pokémon de base choisi.) Ce Pokémon devient le Pokémon de base choisi. (Les cartes attachées à ce Pokémon, les marqueurs de dégâts, les États Spéciaux, le nombre de tours de jeu, et tous les autres effets restent sur le nouveau Pokémon.)",
		}
	}],



	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
