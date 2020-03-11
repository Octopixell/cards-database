import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-100",
	localId: 100,

	// Card informations
	name: {
		en: "Cofagrigus",
		fr: "Tutankafer",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],

	dexId: 563,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/100/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/100/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/100/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/100/high",
		},
	},

	evolveFrom: {
		en: "Yamask",
		fr: "Tutafeh",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "tetsuya koizumi",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Spirit Juggling",
			fr: "Jeu d’Esprits",
		},
		text: {
			en: "Discard any number of your Benched Pokémon. This attack does 30 more damage for each Benched Pokémon you discarded in this way.",
			fr: "Défaussez autant de vos Pokémon de Banc que vous voulez. Cette attaque inflige 30 dégâts supplémentaires pour chaque Pokémon de Banc défaussé de cette façon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
