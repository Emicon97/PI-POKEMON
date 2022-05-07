import { GET_POKEDEX, GET_TYPES, SORT, FILTER, PAGE_SETTER, GET_POKEMON, GET_PREV, GET_NEXT, LOADING, EMPTY_CARD, ERROR_HANDLER } from './actions';

const initialState = {
   pokedex: [],
   backupdex: [],
   sortState: 'default',
   types: [],
   pokemon: {},
   prevPokemon: {},
   nextPokemon: {},
   page: [1, 1, 12],
   loading: true,
   error: '',
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
      case PAGE_SETTER:
         return {
            ...state,
            page: payload
         };
      case SORT:
         if (!payload) return {...state};
         let sorted = [];
         let err = state.lesserError;
         if (payload === '6') {
            sorted = state.backupdex;
            err = '';
         } else if (payload === '2') {
            sorted = state.pokedex.slice().sort((a, b) => {
               if (a.name < b.name) return -1;
               if (a.name > b.name) return 1;
               return 0;
            });
         } else if (payload === '3') {
            sorted = state.pokedex.slice().sort((a, b) => {
               if (a.name > b.name) return -1;
               if (a.name < b.name) return 1;
               return 0; 
            });
         } else if (payload === '4') {
            sorted = state.pokedex.slice().sort((a, b) => {
               return b.attack-a.attack;
            });
         } else if (payload === '5') {
            sorted = state.pokedex.slice().sort((a, b) => {
               return a.attack-b.attack;
            });
         }
         return {
               ...state,
               pokedex: sorted,
               sortState: payload,
               lesserError: err

            };
      case FILTER:
         if (!payload) return {...state};
         let filtered = [];
         let lesserError = '';
         if (payload === 3) {
            filtered = state.backupdex.filter(pokemon => {
               return typeof pokemon.id !== 'string';
            });
         } else if (payload === 2) {
            filtered = state.backupdex.filter(pokemon => {
               return typeof pokemon.id === 'string';
            });
         } else {
            filtered = state.pokedex.filter(pokemon => {
               if (pokemon.types) {
                  for (let x of pokemon.types) {
                     if (x === payload) return pokemon;
                  }
               }
               return false;
            });
         }
         if (!filtered.length) lesserError = '¡No hay Pokémon registrados de ese tipo! Pero podés crear uno aquí.';
         return {
            ...state,
            pokedex: filtered,
            page: [1, 1, 12],
            lesserError
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
            error: payload
         };
      default:
         return {...state};
   }
};
 
 export default rootReducer;