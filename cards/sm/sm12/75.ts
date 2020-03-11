import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-75",
	localId: 75,

	// Card informations
	name: {
		en: "Solgaleo & Lunala-GX",
		fr: "Solgaleo et Lunala-GX",
	},

	hp: 270,

	type: [
		Type.PSYCHIC,
	],

	dexId: 791,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/75/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/75/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/75/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/75/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TAGTEAM,
	],

	illustrator: "Hideki Ishikawa",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Cosmic Burn",
			fr: "Brûlure Cosmique",
		},
		text: {
			en: "This Pokémon can't use Cosmic Burn during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Brûlure Cosmique pendant votre prochain tour.",
		},
		damage: 230
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Light of the Protector-GX",
			fr: "Lumière de la Protectrice-GX",
		},
		text: {
			en: "If you played Lillie's Full Force from your hand during this turn, prevent all effects of attacks, including damage, done to each of your Pokémon during your opponent's next turn. (You can't use more than 1 GX attack in a game.)",
			fr: "Si vous avez joué Pleine Puissance de Lilie de votre main pendant ce tour, évitez tous les effets d’attaques, y compris les dégâts, infligés à chacun de vos Pokémon pendant le prochain tour de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 200
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
