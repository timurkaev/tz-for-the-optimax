import axios from 'axios';

export const getProducts = (): Promise<any> => {
  return axios.get('http://localhost:5000/products')
      .then(({data}) => data);
};
