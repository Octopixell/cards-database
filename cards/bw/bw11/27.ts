import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-27",
	localId: 27,

	// Card informations
	name: {
		en: "Emboar",
	},

	hp: 150,

	type: [
		Type.FIRE,
	],

	dexId: 500,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/27/high",
		},
	},

	evolveFrom: {
		en: "Pignite",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kanako Eo",

	abilities: [{
		id: 373,
		type: AbilityType.TALENT,
		name: {
			en: "Inferno Fandango",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may attach a Fire Energy card from your hand to 1 of your Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heat Crash",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
