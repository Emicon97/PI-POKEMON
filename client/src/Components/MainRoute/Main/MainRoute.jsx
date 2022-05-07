import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PokedexEntrance from '../PokedexEntrance/PokedexEntrance.jsx';
import Pagination from '../Pagination/Pagination.jsx';

import { Container, Background, Grid } from "../Aspect/Body.jsx";
import { Buttons, Button, Select, Option } from '../Aspect/Buttons.jsx';
import { Error, Loader } from '../Aspect/Alternate.jsx';

import { getPokedex, getTypes, getSorted, getFiltered, loadingTrue } from "../../../Redux/actions";
import { emptyCard } from './../../../Redux/actions';

const MainRoute = () => {
   const dispatch = useDispatch();
   const pokedex = useSelector(state => state.pokedex);
   const types = useSelector(state => state.types);
   const pages = useSelector(state => state.page);
   const loading = useSelector(state => state.loading);
   const error = useSelector(state => state.error);
   const lesserError = useSelector(state => state.lesserError);
   const [ sorter, setSorter ] = useState(0);
   const [ filtering, setFiltering ] = useState(0);
   const [ pok, setPok ] = useState(true);
   const [ fak, setFak ] = useState(true);
   const [ tod, setTod ] = useState(true);

   useEffect(() => {
      dispatch(getPokedex());
      dispatch(getTypes());
      dispatch(emptyCard);
      return () => dispatch(loadingTrue());
      // eslint-disable-next-line
   }, []);

   useEffect(() => {
      dispatch(getSorted(sorter));
      setSorter(0);
      // eslint-disable-next-line
   }, [sorter]);

   useEffect(() => {
      dispatch(getFiltered(filtering));
      // eslint-disable-next-line
   }, [filtering]);

   const sortManager = (type) => {
      setSorter(type);
      if (type === '6') {setTod(true); setPok(true); return setFak(true)};
   };

   const eventManager = (e, type) => {
      e.preventDefault();
      e = e.target.value
      type === 'filter' ? filterManager(e.toLowerCase()) :
         sortManager(e);
   };

   const filterManager = (type) => {
      setFiltering(type);
      
      if (type === 1) {
         setPok(true);
         setTod(false);
         return setFak(false)
      };
      if (type === 2) {
         setFak(true);
         setTod(false);
         return setPok(false)
      }
      else  {
         return setTod(false);
      }
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
               <Button isSpecial={true} isOn={true}>Crear Pokémon</Button>
            </Buttons>
            <Buttons>
               <Select name="typeFilter" value="" onChange={value => eventManager(value, 'filter')}>
                  <option>Filtrar por tipo</option>
                  {types && types.map(type => {
                     type.name = type.name[0].toUpperCase() + type.name.slice(1);
                     return (
                        <Option key={type.name} value={type.name}>{type.name}</Option>
                     );
                  })}
               </Select>
               <Button onClick={() => filterManager(3)} isOn={pok}>Pokémon</Button>
               <Button isSpecial={true} onClick={() => sortManager('6')} isOn={tod}>¡Atrapalos ya!</Button>
               <Button onClick={() => filterManager(2)} isOn={fak}>Fakemon</Button>
               <Select name="sort" value="" onChange={value => eventManager(value, 'sort')}
                  filterOption={(option) => option.value !== "0"}>
                     <Option key={0} value="0" hidden>Ordenar</Option>
                     <Option key={1} value="6">Por defecto</Option>
                     <Option key={2} value ="2">Alfabéticamente</Option>
                     <Option key={3} value="3">De la Z a la A</Option>
                     <Option key={4} value ="4">De más fuerte a más débil</Option>
                     <Option key={5} value="5">De más débil a más fuerte</Option>
               </Select>
            </Buttons>
            <Grid>
               {lesserError ? <PokedexEntrance lesserError={lesserError}></PokedexEntrance> :
                  pokedex && pokedex.slice(pages[1]-1, pages[2]).map(pokemon => {
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