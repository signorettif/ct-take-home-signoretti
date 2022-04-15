const searchResults = require('../fixtures/cars.json')[0]['VehAvailRSCore'];

// See comments on README
export const getSearchResults = () => searchResults as SearchResults;
