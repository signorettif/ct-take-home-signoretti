const searchResults = require('../constants/cars.json')[0]['VehAvailRSCore'];

export const getSearchResults = () => searchResults as SearchResults;
