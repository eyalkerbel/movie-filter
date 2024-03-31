import axios from 'axios';
import { Video, Genre } from './types';

export const fetchData = async (): Promise<{ genres: Genre[], videos: Video[] }> => {
  try {
    console.log("calling the api...")
    const response = await axios.get('https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/main/data/dataset.json');
    return response.data;
  } catch (e) {
    console.error('error in getting the data' , e)
    throw e;
  }
};
