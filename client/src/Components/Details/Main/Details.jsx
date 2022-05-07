import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import PrevEntrance from "../PrevNext/PrevEntrance.jsx";
import NextEntrance from "../PrevNext/NextEntrance.jsx";

import { Background } from "../Aspect/Styles.jsx";
import { Entrance } from "../Aspect/Entrance.jsx";
import { Name, Img, ImgError, Text, Types, Type } from "../Aspect/Content.jsx";

import { getPokeData, emptyCard } from "../../../Redux/actions";


const Details = props => {
   const dispatch = useDispatch();
   const selector = useSelector(state => state.pokemon);
   const [ loading, setLoading ] = useState(true);
   const page = useSelector(state => state.page);
   
   useEffect(() => {
      dispatch(getPokeData(props.pokemon.match.params.pokemonId));
      return () => {
         dispatch(emptyCard(page));
         setLoading(true)
      };
      // eslint-disable-next-line
   }, [props.pokemon.match.params.pokemonId]);

   let { name, sprite, types, id, hp, attack, defense, speed, height, weight } = selector;

   useEffect(() => {
      loadManager();
      // eslint-disable-next-line
   }, [name]);

   const loadManager = () => {
      setTimeout(() => {
         if (name) setLoading(false);
         else loadManager();
      }, "500");
   };

   return (
      <Background>
         <PrevEntrance id={id-1}></PrevEntrance>
         <Entrance>
            {loading ? <Name>Identificando Pokémon...</Name> :
               <>
               <Name>{name && name[0].toUpperCase() + name.slice(1)}</Name>
               {sprite ? <Img><img src={sprite} alt='' width='300em' height='300em'/></Img> :
                  <ImgError>Este Fakemon no tiene imagen</ImgError>
               }
               <Text>Health Points: {hp}</Text>
               <Text>Attack: {attack}</Text>
               <Text>Defense: {defense}</Text>
               <Text>Speed: {speed}</Text>
               <Text>Height: {height}</Text>
               <Text>Weight: {weight}</Text>
               <Types>
                  {types ? types.map(type => {
                     type = type[0].toUpperCase() + type.slice(1);
                     return <Type key={type} name={type}>{type}</Type>;
                  }) : types = <Type key={0} name={0}>{'¡Este Fakemon no tiene tipos!'}</Type>}
               </Types>   
               </>
            }
         </Entrance>
         <NextEntrance id={id+1}></NextEntrance>
      </Background>
   );
};

export default Details