import { getDrinksByCategory, getDrinksByName, getDrinksById } from "./db";

const resolvers = {
	Query: {
		getDrinksByCategory: (_, { category }) => getDrinksByCategory(category),
		getDrinksByName: (_, { name }) => getDrinksByName(name),
		getDrinksById: (_, { id }) => getDrinksById(id),
	},
};

export default resolvers;
