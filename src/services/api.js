import axios from 'axios';
const API_KEY = '718f2a56dca2d55e08ad2e8b7789586d';
const URL = 'https://api.themoviedb.org/3';

export async function getTrending() {
  try {
    const response = await axios.get(URL + '/trending/all/day', {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });

    return response.data;
  } catch (err) {
    console.log('FETCH ERROR: ' + err);
  }
}
