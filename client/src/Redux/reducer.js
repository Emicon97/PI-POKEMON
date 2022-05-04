import { GET_POKEDEX, PAGE_SETTER, ERROR_HANDLER } from './actions';

const initialState = {
   pokedex: [],
   pokemon: {},
   fakemon: {},
   page: 1,
   loading: true,
   error: ''
};

const rootReducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case GET_POKEDEX:
         return {
            ...state,
            pokedex: payload,
            loading: false
         };
      case PAGE_SETTER:
         return {
            ...state,
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