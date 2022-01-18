import axios from 'axios';

export const getProducts = (): Promise<any> => {
  return axios.get('/products')
      .then(({data}) => data);
};
