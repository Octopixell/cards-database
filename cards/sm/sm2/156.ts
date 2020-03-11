import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-156",
	localId: 156,

	// Card informations
	name: {
		en: "Lycanroc-GX",
		fr: "Lougaroc-GX",
	},

	hp: 200,

	type: [
		Type.FIGHTING,
	],

	dexId: 745,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/156/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/156/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/156/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/156/high",
		},
	},

	evolveFrom: {
		en: "Rockruff",
		fr: "Rocabot",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 1155,
		type: AbilityType.TALENT,
		name: {
			en: "Bloodthirsty Eyes",
			fr: "Regard Sanguinaire",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez échanger l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Claw Slash",
			fr: "Tranch’Griffe",
		},
		damage: 110
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Dangerous Rogue-GX",
			fr: "Dangereux Truand-GX",
		},
		text: {
			en: "This attack does 50 damage for each of your opponent's Benched Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Cette attaque inflige 50 dégâts pour chaque Pokémon de Banc de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
