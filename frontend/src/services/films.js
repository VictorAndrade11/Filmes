import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ghibliapi.herokuapp.com',
});

export const getFilmList = async () => {
    return await api.get('/films');
}