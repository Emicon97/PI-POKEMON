import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Entrance, LinkBox, Delete, Err } from './Entrance';
import { Name, ImgError, Types, Type } from './Content';

import { deleteFakemon, getPokedex, clearMessages } from '../../../Redux/actions';

const PokedexEntrance = ({ sprite, name, types, id }) => {
   const dispatch = useDispatch();
   
   const lesserError = useSelector(state => state.lesserError);
   const successMessage = useSelector(state => state.success);

   const [ cardId, setCardId ] = useState();

   useEffect (() => {
      return dispatch(clearMessages());
      // eslint-disable-next-line
   }, [])

   const clickHandler =  e => {
      e.preventDefault();

      setCardId(e.target.value);
      dispatch(deleteFakemon(id));
      
      dispatch(getPokedex());
   };

   return (
      <>
         {lesserError || !name ?
            <Entrance  hasErrors={lesserError}><Err><Name>{lesserError}</Name></Err></Entrance> :
         successMessage && cardId ? 
            <Entrance hasErrors={successMessage}><Err><Name>{successMessage}</Name></Err></Entrance> :

         <Entrance>
            <Link to={`/pokemon/${id}`}>
               <LinkBox>
                  <Delete id={"delete"} value={id} onClick={e => clickHandler(e)}>X</Delete>
                  <Name>{name}</Name>
                  {sprite ? <img src={sprite} alt='' width='115em' height='115em'/> :
                     <ImgError>Este Fakemon no tiene imagen</ImgError>
                  }
                  <Types>
                     {types.map(type => {
                        type = type[0].toUpperCase() + type.slice(1);
                        return <Type key={type} name={type}>{type}</Type>;
                     })}
                  </Types>
               </LinkBox>
            </Link>
         </Entrance>
         }
      </>
   );
};

export default PokedexEntrance;