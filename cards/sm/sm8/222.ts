import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-222",
	localId: 222,

	// Card informations
	name: {
		en: "Sigilyph-GX",
		fr: "Cryptéro-GX",
	},

	hp: 170,

	type: [
		Type.PSYCHIC,
	],

	dexId: 561,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/222/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/222/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/222/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/222/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "PLANETA Otani",

	abilities: [{
		id: 1274,
		type: AbilityType.TALENT,
		name: {
			en: "Mirror Counter",
			fr: "Riposte Miroir",
		},
		text: {
			en: "If this Pokémon is your Active Pokémon and is damaged by an attack from your opponent's Pokémon-GX or Pokémon-EX (even if this Pokémon is Knocked Out), put damage counters on the Attacking Pokémon equal to the damage done to this Pokémon.",
			fr: "Si ce Pokémon est votre Pokémon Actif et qu’il subit les dégâts d’une attaque d’un Pokémon-GX ou Pokémon-EX de votre adversaire (même si ce Pokémon est mis K.O.), placez des marqueurs de dégâts sur le Pokémon Attaquant équivalents au nombre de dégâts infligés à ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sonic Wing",
			fr: "Aile Supersonique",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
		},
		damage: 80
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Intercept-GX",
			fr: "Interception-GX",
		},
		text: {
			en: "This attack does 60 damage times the amount of Energy attached to your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Cette attaque inflige 60 dégâts multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
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

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
