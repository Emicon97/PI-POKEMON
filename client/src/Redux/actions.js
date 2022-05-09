import axios from 'axios';

export const GET_POKEDEX = 'GET_POKEDEX';
export const GET_TYPES = 'GET_TYPES';
export const POST_FAKEMON = 'POST_FAKEMON';
export const SORT = 'SORT';
export const FILTER =  'FILTER';
export const PAGE_SETTER = 'PAGE_SETTER';
export const GET_POKEMON = 'GET_POKEMON';
export const GET_PREV = 'GET_PREV';
export const GET_NEXT = 'GET_NEXT';
export const LOADING = 'LOADING';
export const EMPTY_CARD = 'EMPTY_CARD';
export const ERROR_HANDLER = 'ERROR_HANDLER';
export const CLEAR_MESSAGES = 'CLEAR_MESSAGES';

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
export function getTypes () {
   return dispatch => {
      return axios('http://localhost:3001/types')
         .then (response => dispatch({
            type: GET_TYPES,
            payload: response.data
         }))
         .catch (error => dispatch ({
            type: ERROR_HANDLER,
            payload: error.response.data
         }));
   };
};
export function postFakemon (payload) {
   return dispatch => {
      return axios.post('http://localhost:3001/pokemons', payload)
         .then (response => dispatch({
            type: POST_FAKEMON,
            payload: response.data
         }))
         .catch (error => dispatch({
            type: ERROR_HANDLER,
            payload: error.response.data
         }));
   };
};
export function getSorted (payload) {
   return {
      type: SORT,
      payload
   };
};
export function getFiltered (payload) {
   return {
      type: FILTER,
      payload
   };
};
export function pageSetter (payload) {
   return {
      type: PAGE_SETTER,
      payload
   };
};
export function getPokeData (id) {
   return dispatch => {
      return axios(`http://localhost:3001/pokemons/${id}`)
         .then (response => dispatch({
            type: GET_POKEMON,
            payload: response.data
         }));
   };
};
export function getPrev (id) {
   return dispatch => {
      return axios(`http://localhost:3001/pokemons/${id}`)
         .then (response => dispatch({
            type: GET_PREV,
            payload: response.data
         }));
   };
};
export function getNext (id) {
   return dispatch => {
      return axios(`http://localhost:3001/pokemons/${id}`)
         .then (response => dispatch({
            type: GET_NEXT,
            payload: response.data
         }));
   };
};
export function loadingTrue () {
   return {
      type: LOADING
   };
};
export function emptyCard (payload) {
   return {
      type: EMPTY_CARD,
      payload
   };
};
export function clearMessages () {
   return {
      type: CLEAR_MESSAGES
   }
}