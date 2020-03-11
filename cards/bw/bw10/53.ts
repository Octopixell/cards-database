import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-53",
	localId: 53,

	// Card informations
	name: {
		en: "Archen",
		fr: "Arkéapti",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 566,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/53/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/53/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/53/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.RESTORED,
	],

	illustrator: "Mizue",

	abilities: [{
		id: 351,
		type: AbilityType.TALENT,
		name: {
			en: "Prehistoric Call",
			fr: "Appel Préhistorique",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is in your discard pile, you may put this Pokémon on the bottom of your deck.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est dans votre pile de défausse, vous pouvez placer ce Pokémon en dessous de votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wing Attack",
			fr: "Cru-Aile",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
