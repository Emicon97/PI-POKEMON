import { GET_POKEDEX, GET_TYPES, POST_FAKEMON, SORT, FILTER, PAGE_SETTER, GET_POKEMON,
   GET_PREV, GET_NEXT, LOADING, EMPTY_POKEMON, EMPTY_CARD, ERROR_HANDLER, CLEAR_MESSAGES, LESSER_ERROR, DELETE_POKEMON } from './actions';

const initialState = {
   pokedex: [],
   backupdex: [],
   types: [],
   pokemon: {},
   prevPokemon: {},
   nextPokemon: {},
   page: [1, 1, 12],
   loading: true,
   error: '',
   success: '',
   lesserError: ''
};

const rootReducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case GET_POKEDEX:
         return {
            ...state,
            pokedex: payload,
            backupdex: payload,
            loading: false
         };
      case GET_TYPES:
         return {
            ...state,
            types: payload
         };
      case GET_POKEMON:
         return {
            ...state,
            pokemon: payload,
            lesserError: '',
            loading: false
         };
      case POST_FAKEMON:
         return {
            ...state,
            success: payload,
            loading: false
         }
      case DELETE_POKEMON:
         return {
            ...state,
            success: payload
         }
      case PAGE_SETTER:
         return {
            ...state,
            page: payload
         };
      case SORT:
         return {
               ...state,
               pokedex: payload
            };
      case FILTER:
         return {
            ...state,
            pokedex: payload,
            page: [1, 1, 12]
         };
      case GET_PREV:
         return {
            ...state,
            prevPokemon: payload,
            loading: false
         };
      case GET_NEXT:
         return {
            ...state,
            nextPokemon: payload,
            loading: false
         };
         case LOADING:
         return {
            ...state,
            loading: true
         };
      case EMPTY_POKEMON:
         return {
            ...state,
            pokemon: {},
            lesserError: ''
         };
      case EMPTY_CARD:
         return {
            ...state,
            pokemon: {},
            loading: true,
            page: payload
         };
      case CLEAR_MESSAGES:
         return {
            ...state,
            loading: false,
            error: '',
            success: ''
         };
      case LESSER_ERROR:
         return {
            ...state,
            pokemon: {},
            loading: false,
            lesserError: payload
         };
      case ERROR_HANDLER:
         return {
            ...state,
            error: payload,
            loading: false
         };
      default:
         return {...state};
   }
};
 
 export default rootReducer;