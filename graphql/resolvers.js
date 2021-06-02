import {
	getDrinksByCategory,
	getDrinksByName,
	getDrinksById,
	getRandomSelection,
	getPopularDrinks,
	getLatestDrinks,
	getOneRandomDrink,
} from "./db";

const resolvers = {
	Query: {
		getDrinksByCategory: (_, { category }) => getDrinksByCategory(category),
		getDrinksByName: (_, { name }) => getDrinksByName(name),
		getDrinksById: (_, { id }) => getDrinksById(id),
		getRandomSelection: () => getRandomSelection(),
		getPopularDrinks: () => getPopularDrinks(),
		getLatestDrinks: () => getLatestDrinks(),
		getOneRandomDrink: () => getOneRandomDrink(),
	},
};

export default resolvers;
