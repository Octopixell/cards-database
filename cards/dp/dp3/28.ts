import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-28",
	localId: 28,

	// Card informations
	name: {
		en: "Golduck",
		fr: "Akwakwak",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 55,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/28/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/28/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/28/high",
		},
	},

	evolveFrom: {
		en: "Psyduck",
		fr: "Psykokwak",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Encore",
			fr: "Encore",
		},
		text: {
			en: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can use only that attack during your opponent's next turn.",
			fr: "Choisissez 1 des attaques du Pokémon Défenseur. Ce Pokémon ne peut utiliser que cette attaque lors du prochain tour de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.PSYCHIC
		],
		name: {
			en: "Break Beam",
			fr: "Rayon brisant",
		},
		text: {
			en: "You may do 40 damage plus 20 more damage. If you do, Golduck is now Confused.",
			fr: "Vous pouvez infliger 40 dégâts plus 20 dégâts supplémentaires. Akwakwak devient alors Confus.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
