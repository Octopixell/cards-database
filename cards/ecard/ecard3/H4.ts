import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-H4",
	localId: "H4",

	// Card informations
	name: {
		en: "Beedrill",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 15,


	evolveFrom: {
		en: "Kakuna",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Hikaru Koike",

	abilities: [{
		id: 1307,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Venom Spray",
		},
		text: {
			en: "When you play Beedrill from your hand to evolve your Active Pokémon, the Defending Pokémon is now Paralyzed and Poisoned.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Needle Rush",
		},
		text: {
			en: "Flip 4 coins. If you get 1 heads, this attack does 10 damage plus 10 more damage. If you get 2 heads, this attack does 10 damage plus 20 more damage. If you get 3 heads, this attack does 10 damage plus 50 more damage. If you get 4 heads, this attack does 10 damage plus 90 more damage.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
