import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-86",
	localId: 86,

	// Card informations
	name: {
		en: "Lanturn",
		fr: "Lanturn",
	},

	hp: 110,

	type: [
		Type.LIGHTNING,
	],

	dexId: 171,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/86/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/86/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/86/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/86/high",
		},
	},

	evolveFrom: {
		en: "Chinchou",
		fr: "Loupio",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hideaki Hakozaki",

	abilities: [{
		id: 64,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Submerge",
			fr: "Submerger",
		},
		text: {
			en: "Once during your turn (before your attack), you may use this power. Lanturn's type is Water until the end of your turn. This power can't be used if Lanturn is affected by a Special Condition.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir. Lanturn devient un Pokémon de type Water jusqu'à la fin de votre tour. Ce pouvoir ne peut pas être utilisé si Lanturn est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Powerful Spark",
			fr: "Étincelle puissante",
		},
		text: {
			en: "Does 40 damage plus 10 more damage for each Energy attached to all of your Pokémon.",
			fr: "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie attachée à tous vos Pokémon.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RarePrime,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
