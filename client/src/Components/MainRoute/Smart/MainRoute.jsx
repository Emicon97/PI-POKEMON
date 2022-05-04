import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PokedexEntrance from '../../PokedexEntrance/PokedexEntrance.jsx';
import Pagination from '../../Pagination/Pagination.jsx';

import { Container, Background, Grid } from "../Dumb/Body.jsx";
import { Buttons, Button } from '../Dumb/Buttons.jsx';
import { Error, Loader } from '../Dumb/Alternate.jsx';

import { getPokedex } from "../../../Redux/actions";

const MainRoute = () => {
   const dispatch = useDispatch();
   const selector = useSelector(state => state.pokedex);
   const pages = useSelector(state => state.page);
   const loading = useSelector(state => state.loading);
   const error = useSelector(state => state.error);

   useEffect(()=> {
      dispatch(getPokedex());
      // eslint-disable-next-line
   }, []);
   
   if (error) {
      return (
      <Container>
         <Background>
            <Error>{error}</Error>
         </Background>
      </Container>
      );
   }

   return (
      <Container>
         <Background>
            {loading ? <Loader>Completando tu Pokédex...</Loader> :
            <>
            <Buttons>
               <Button isSpecial={true}>Crear Pokémon</Button>
            </Buttons>
            <Buttons>
               <Button>Ordenar Ascendente</Button>
               <Button>Pokémon</Button>
               <Button isSpecial={true}>Todos</Button>
               <Button>Fakemon</Button>
               <Button>Ordenar Descendente</Button>
            </Buttons>
            <Grid>
               {selector.slice(pages[1]-1, pages[2]).map(pokemon => {
                  return (
                     <PokedexEntrance
                        key = {pokemon.id}
                        sprite = {pokemon.sprite}
                        name = {pokemon.name}
                        types = {pokemon.types ? pokemon.types : ['¡Este Fakemon no tiene tipos!']}
                     />
                  );
               })}
            </Grid>
            <Pagination></Pagination>
            </>           
            }
         </Background>
      </Container>
   );
};

export default MainRoute;