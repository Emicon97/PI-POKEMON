import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import PokedexEntrance from '../PokedexEntrance/PokedexEntrance.jsx';
import Pagination from '../Pagination/Pagination.jsx';

import { Container, Background, Grid } from "../Aspect/Body.jsx";
import { Buttons, Button, Select, Searchbar, PokeButton } from '../Aspect/Buttons.jsx';
import { Loader, Error } from '../Aspect/Alternate.jsx';

import { getPokedex, getTypes, searchByName, getSorted, getFiltered, loadingTrue, emptyPokemon, emptyCard } from "../../../Redux/actions";

import { sortManager, filterManager } from '../FilterAndSort/filterAndSort';

const MainRoute = () => {
   const dispatch = useDispatch();

   const pokedex = useSelector(state => state.pokedex);
   const backupdex = useSelector(state => state.backupdex);
   const types = useSelector(state => state.types);
   const pokemon = useSelector(state => state.pokemon);
   const pages = useSelector(state => state.page);
   const loading = useSelector(state => state.loading);
   const lesserError = useSelector(state => state.lesserError);
   const error = useSelector(state => state.error);

   const [ searcher, setSearcher ] = useState();
   const [ sorter, setSorter ] = useState();
   const [ filters, setFilters ] = useState();
   const [ changer, setChanger ] = useState(backupdex);

   const [ pok, setPok ] = useState(true);
   const [ fak, setFak ] = useState(true);
   const [ tod, setTod ] = useState(true);
   const [ fil, setFil ] = useState(false);
   const [ sor, setSor ] = useState(false);

   useEffect(() => {
      dispatch(getPokedex());
      dispatch(getTypes());
      dispatch(emptyCard);
      return () => dispatch(loadingTrue());
      // eslint-disable-next-line
   }, []);

   useEffect(() => {
      dispatch(getSorted(changer));
      // eslint-disable-next-line
   }, [sorter]);

   useEffect(() => {
      dispatch(getFiltered(changer));
      // eslint-disable-next-line
   }, [filters]);
   
   const handleInput = e => {
      e.preventDefault();
      setSearcher(e.target.value);
   }
   
   const searchManager = e => {
      e.preventDefault();
      dispatch(loadingTrue());
      dispatch(searchByName(searcher));
      setSearcher('');
   };
   
   const eventManager = (event, type) => {
      event.preventDefault();
      dispatch(emptyPokemon());
      event = event.target.value;
      if (type === 'filter') {
         filtering(event.toLowerCase());
      } else {
         sorting(event);
      }
   };

   const sorting = type => {
      dispatch(emptyPokemon());
      if (type === 'default') {
         setFil(false);
         setSor(false);
         setChanger(sortManager(type, backupdex));
         sorter ? setSorter(false) : setSorter(true);
         setPok(true); 
         setFak(true);
         return setTod(true);
      }
      if (pokedex.length) {
         sorter ? setSorter(false) : setSorter(true);
         setChanger(sortManager(type, pokedex));
         setSor(type);
      }
   };

   const filtering = type => {
      dispatch(emptyPokemon());
      if (type === 'pokemon') {
         setPok(true);
         setFak(false);
         setTod(false);
      } else if (type === 'fakemon') {
         setPok(false);
         setFak(true);
         setTod(false);
      } else {
         setTod(false)
         setFil(type);
      }
      setChanger(filterManager(type, [pok, fak, fil], backupdex, sor));
      filters ? setFilters(false) : setFilters(true);
   };
   
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
               <Link to={'/creation'}>
                  <Button isSpecial={true} isOn={true}>Crear Pokémon</Button>
               </Link>
               <form onSubmit={e => searchManager(e)}>
                  <Searchbar placeholder="Buscá Pokémon o Fakemon..." value={searcher}
                     onChange={e => handleInput(e)}></Searchbar>
                  <PokeButton type="submit" >―⬤—</PokeButton>
               </form>
            </Buttons>
            <Buttons>
               <Select name="typeFilter" isOn={fil} value="" onChange={value => eventManager(value, 'filter')}>
                     <option value="0" hidden>Filtrar por tipo</option>
                     {types && types.map(type => {
                        type = type.name[0].toUpperCase() + type.name.slice(1);
                        return (
                           <option key={type} value={type}>{type}</option>
                        );
                     })}
               </Select>
               <Button onClick={() => filtering('pokemon')} isOn={pok}>Pokémon</Button>
               <Button isSpecial={true} onClick={() => sorting('default')} isOn={tod}>¡Atrapalos ya!</Button>
               <Button onClick={() => filtering('fakemon')} isOn={fak}>Fakemon</Button>
               <Select name="sort" value="" isOn={sor} onChange={value => eventManager(value, 'sort')}>
                     <option key={0} value="0" hidden>Ordenar</option>
                     <option key={1} value ="aToZ">Alfabéticamente</option>
                     <option key={2} value="zToA">De la Z a la A</option>
                     <option key={3} value ="maxToMin">De más fuerte a más débil</option>
                     <option key={4} value="minToMax">De más débil a más fuerte</option>
               </Select>
            </Buttons>
            <Grid>
               {pokemon.name ? <PokedexEntrance
                        key = {pokemon.id}
                        sprite = {pokemon.sprite}
                        name = {pokemon.name}
                        types = {pokemon.types ? pokemon.types : ['¡Este Fakemon no tiene tipos!']}
                        id = {pokemon.id}
                     /> : lesserError.length ? <PokedexEntrance lesserError={true}/> :

               pokedex.length ? pokedex.slice(pages[1]-1, pages[2]).map(pokemon => {
                  pokemon.name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
                  return (
                     <PokedexEntrance
                        key = {pokemon.id}
                        sprite = {pokemon.sprite}
                        name = {pokemon.name}
                        types = {pokemon.types ? pokemon.types : ['¡Este Fakemon no tiene tipos!']}
                        id = {pokemon.id}
                     />
                  );
               }) : <PokedexEntrance lesserError={true}/>}
            </Grid>
            <Pagination></Pagination>
            </>           
            }
         </Background>
      </Container>
   );
};

export default MainRoute;