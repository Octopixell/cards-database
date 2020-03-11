import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-5",
	localId: 5,

	// Card informations
	name: {
		en: "Beedrill",
		fr: "Dardargnan",
	},

	hp: 120,

	type: [
		Type.GRASS,
	],

	dexId: 15,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/5/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/5/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/5/high",
		},
	},

	evolveFrom: {
		en: "Kakuna",
		fr: "Coconfort",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Poison Jab",
			fr: "Direct Toxik",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Flash Needle",
			fr: "Luminodard",
		},
		text: {
			en: "Flip 3 coins. This attack does 40 damage times the number of heads. If all of them are heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
			fr: "Lancez 3 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face. Si vous obtenez seulement des côtés face, évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
