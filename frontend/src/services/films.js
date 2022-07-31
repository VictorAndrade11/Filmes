import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ghibliapi.herokuapp.com',
});

export const getFilmList = async (page) => {
    return await api.get('/films', {
        params: {
          page,
        },
    });
}