import { GET_POKEDEX, GET_TYPES, POST_FAKEMON, SORT, FILTER, PAGE_SETTER, GET_POKEMON, GET_PREV, GET_NEXT, LOADING, EMPTY_CARD, ERROR_HANDLER, CLEAR_MESSAGES } from './actions';

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
   success: ''
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
      case POST_FAKEMON:
         return {
            ...state,
            success: payload,
            loading: false
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
      case GET_POKEMON:
         return {
            ...state,
            pokemon: payload,
            loading: false
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
      case EMPTY_CARD:
         return {
            ...state,
            pokemon: {},
            loading: true,
            page: payload
         };
      case ERROR_HANDLER:
         return {
            ...state,
            error: payload,
            loading: false
         };
      case CLEAR_MESSAGES:
         return {
            ...state,
            loading: false,
            error: '',
            success: ''
         }
      default:
         return {...state};
   }
};
 
 export default rootReducer;