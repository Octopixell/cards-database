import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-5",
	localId: 5,

	// Card informations
	name: {
		en: "Combusken",
		fr: "Galifeu",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 256,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/5/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/5/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/5/high",
		},
	},

	evolveFrom: {
		en: "Torchic",
		fr: "Poussifeu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 22,
		type: AbilityType.TALENT,
		name: {
			en: "Natural Cure",
			fr: "Remède Naturel",
		},
		text: {
			en: "Whenever you attach an Energy card from your hand to this Pokémon, remove all Special Conditions from it.",
			fr: "Chaque fois que vous attachez une carte Énergie de votre main à ce Pokémon, retirez tous les États Spéciaux de ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Lunge",
			fr: "Coup Rapide",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
