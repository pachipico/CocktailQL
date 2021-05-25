import axios from "axios";
const CATEGORY_URL =
	"https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=";
const SEARCH_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const SEARCH_BY_ID_URL =
	"https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
export const getDrinksByCategory = async (category) => {
	const {
		data: { drinks },
	} = await axios.get(`${CATEGORY_URL}${category}`);
	return drinks;
};

export const getDrinksByName = async (name) => {
	const {
		data: { drinks },
	} = await axios.get(`${SEARCH_URL}${name}`);
	return drinks;
};

export const getDrinksById = async (id) => {
	const {
		data: { drinks },
	} = await axios.get(`${SEARCH_BY_ID_URL}${id}`);

	return drinks;
};
