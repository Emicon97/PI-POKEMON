import axios from 'axios';

export const GET_POKEDEX = 'GET_POKEDEX';
export const ERROR_HANDLER = 'ERROR_HANDLER';
export const PAGE_SETTER = 'PAGE_SETTER';

export function getPokedex () {
   return dispatch => {
      return axios('http://localhost:3001/pokemons')
         .then (response => dispatch({
            type: GET_POKEDEX,
            payload: response.data
         }))
         .catch (error => dispatch({
            type: ERROR_HANDLER,
            payload: error.response.data
         }));
   };
};
export function pageSetter (payload) {
   return {
      type: PAGE_SETTER,
      payload
   }
};