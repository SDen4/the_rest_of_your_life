import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://text-translator2.p.rapidapi.com/'
});
