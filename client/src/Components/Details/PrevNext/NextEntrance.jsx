import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import { PrevNext, LinkBox } from "../Aspect/PrevNext";
import { ImgError, Name, Types, Type } from "../Aspect/SideContent";

import { getNext } from "../../../Redux/actions";

const NextEntrance = ({id}) => {;
   const dispatch = useDispatch();
   const selector = useSelector(state => state.nextPokemon);
   const [ loading, setLoading ] = useState(true);
   
   useEffect(() => {
      dispatch(getNext(id));
      return () => setLoading(true);
      // eslint-disable-next-line
   }, [id]);
    
   let { name, sprite, types } = selector;

   useEffect(() => {
      loadManager();
      // eslint-disable-next-line
   }, [name]);

   const loadManager = () => {
      setTimeout(() => {
         if (name) setLoading(false);
         else loadManager();
      }, "500");
   }
   
   return (
      <PrevNext order={'isNext'}>
         {loading ? <LinkBox><Name>Identificando Pokémon...</Name></LinkBox> :
            <Link to={`/pokemon/${id}`} >
               <LinkBox>
                  <Name>{name && name[0].toUpperCase() + name.slice(1)}</Name>
                  {sprite ? <img src={sprite} alt='' width='115em' height='115em'/> :
                     <ImgError>Este Fakemon no tiene imagen</ImgError>
                  }
                  <Types>
                     {types ? types.map(type => {
                        type = type[0].toUpperCase() + type.slice(1);
                        return <Type key={type} name={type}>{type}</Type>;
                     }) : types = <Type key={0} name={0}>{'¡Este Fakemon no tiene tipos!'}</Type>}
                  </Types>
               </LinkBox>
            </Link>
         }
      </PrevNext>
   );
};

export default NextEntrance;