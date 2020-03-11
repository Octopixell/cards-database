import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-135",
	localId: 135,

	// Card informations
	name: {
		en: "Stark Mountain",
		fr: "Mont Abrupt",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/135/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/135/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/135/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/135/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.",
		},
	},{
		name: {},
		text: {
			fr: "Une seule fois lors du tour de chaque joueur, ce joueur peut choisir une Énergie Fire ou Fighting attachée à 1 de ses Pokémon et déplacer cette Énergie sur 1 de ses Pokémon Fire ou Fighting.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
