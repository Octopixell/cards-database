import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-85",
	localId: 85,

	// Card informations
	name: {
		en: "Black Belt",
		fr: "Karatéka",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/85/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/85/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/85/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Kanako Eo",



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous jouez cette carte, placez-la près de votre Pokémon Actif. Une fois votre tour terminé, défaussez cette carte.",
		},
	},{
		name: {},
		text: {
			fr: "Vous pouvez utiliser cette carte uniquement s'il vous reste plus de cartes Récompense que votre adversaire. Pendant ce tour, chaque attaque de votre Pokémon Actif inflige 40 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
