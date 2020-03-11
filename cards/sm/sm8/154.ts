import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-154",
	localId: 154,

	// Card informations
	name: {
		en: "Ditto ◇",
		fr: "Métamorph ",
	},

	hp: 40,

	type: [
		Type.COLORLESS,
	],

	dexId: 132,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/154/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/154/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/154/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/154/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kirisAki",

	abilities: [{
		id: 1265,
		type: AbilityType.TALENT,
		name: {
			en: "Almighty Evolution",
			fr: "Évolution Toute-Puissante",
		},
		text: {
			en: "Once during your turn (before your attack), you may put any Stage 1 card from your hand onto this Pokémon to evolve it. You can't use this Ability during your first turn or the turn this Pokémon was put into play.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer n’importe quelle carte de Niveau 1 de votre main sur ce Pokémon pour le faire évoluer. Vous ne pouvez utiliser ce talent ni pendant votre premier tour ni pendant le tour durant lequel ce Pokémon a été joué.",
		}
	}],

	attacks: [{
		name: {
			fr: "Règle pour les cartes  (Prisme Étoile)",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
