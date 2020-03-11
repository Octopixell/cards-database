import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-23",
	localId: 23,

	// Card informations
	name: {
		en: "Roserade",
		fr: "Roserade",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 407,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/23/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/23/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/23/high",
		},
	},

	evolveFrom: {
		en: "Roselia",
		fr: "Roselia",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Takashi Yamaguchi",

	abilities: [{
		id: 95,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Energy Signal",
			fr: "Signal d'énergie",
		},
		text: {
			en: "When you attach a Grass Energy card or Psychic Energy card from your hand to Roserade during your turn, you may use this power. If you attach a Grass Energy card, the Defending Pokémon is now Confused. If you attach a Psychic Energy card, the Defending Pokémon is now Poisoned. This power can't be used if Roserade is affected by a Special Condition.",
			fr: "Lorsque vous attachez une carte Énergie Grass ou Énergie Psychic de votre main à Roserade, vous pouvez utiliser ce pouvoir. Si vous attachez une carte Énergie Grass, le Pokémon Défenseur est maintenant Confus. Si vous attachez une carte Énergie Psychic, le Pokémon Défenseur est maintenant Empoisonné. Ce pouvoir ne peut pas être utilisé si Roserade est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Power Blow",
			fr: "Coup puissant",
		},
		text: {
			en: "Does 20 damage times the amount of Energy attached to Roserade.",
			fr: "Inflige 20 dégâts multipliés par le nombre de cartes Énergie attachées à Roserade.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
