import {Axios} from '../axios-client';
import {GET_EVERYTHING} from '../endpoints';

// get everything
export const getEverything = (query = 'bitcoin') => {
  return Axios.get(GET_EVERYTHING(query));
};
