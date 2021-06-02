import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const API_KEY = process.env.API_KEY;

const BASE_URL = `https://www.thecocktaildb.com/api/json/v2/${API_KEY}/`;
const CATEGORY_URL = `${BASE_URL}filter.php?c=`;
const SEARCH_URL = `${BASE_URL}search.php?s=`;
const SEARCH_BY_ID_URL = `l${BASE_URL}lookup.php?i=`;
const RANDOM_10_URL = `${BASE_URL}randomselection.php`;
const POPULAR_URL = `${BASE_URL}popular.php`;
const LATEST_URL = `${BASE_URL}latest.php`;
const RANDOM_ONE_URL = `${BASE_URL}random.php`;

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

export const getRandomSelection = async () => {
	const {
		data: { drinks },
	} = await axios.get(RANDOM_10_URL);
	return drinks;
};

export const getPopularDrinks = async () => {
	const {
		data: { drinks },
	} = await axios.get(POPULAR_URL);
	return drinks;
};

export const getLatestDrinks = async () => {
	const {
		data: { drinks },
	} = await axios.get(LATEST_URL);
	return drinks;
};

export const getOneRandomDrink = async () => {
	const {
		data: { drinks },
	} = await axios.get(RANDOM_ONE_URL);

	return drinks;
};
