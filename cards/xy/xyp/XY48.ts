import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY48",
	localId: "XY48",

	// Card informations
	name: {
		en: "Meowstic",
		fr: "Mistigrix",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 678,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY48/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY48/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY48/high",
		},
	},

	evolveFrom: {
		en: "Espurr",
		fr: "Psystigri",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "kirisAki",

	abilities: [{
		id: 1250,
		type: AbilityType.TALENT,
		name: {
			en: "Mysterious Ears",
		},
		text: {
			en: "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Confused.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psyblast",
			fr: "Oreilles Mystérieuses",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
			fr: "Si ce Pokémon est votre Pokémon Actif et qu'il subit les dégâts d'une attaque de votre adversaire (même si ce Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Confus.",
		},
		damage: 60
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Explopsy",
		},
		text: {
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
