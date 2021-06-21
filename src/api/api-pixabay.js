import axios from 'axios';

const KEY = '21278728-75c92b248ac1d6dd7323efa86';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchArticlesWithQuery = (searchQuery, currentPage) => {
  return axios
    .get(`${BASE_URL}?key=${KEY}&q=${searchQuery}&page=${currentPage}&per_page=12`)
    .then(response => response.data.hits);
};
