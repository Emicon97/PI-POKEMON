// import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { Entrance, LinkBox, Err } from './Entrance';
import { Name, ImgError, Types, Type } from './Content';

// import { deleteFakemon } from '../../../Redux/actions';

const PokedexEntrance = ({ sprite, name, types, id, lesserError }) => {
   // const dispatch = useDispatch();

   // const clickManager =  e => {
   //    e.preventDefault();
   //    console.log(e.target.value)
   //    dispatch(deleteFakemon(e.target.value));
   // };

   return (
      <Entrance>
         {lesserError ? <Err><Name>'¡No hay Pokémon registrados de ese tipo! Pero podés crear uno aquí.'</Name></Err> :
         <Link to={`/pokemon/${id}`}>
            <LinkBox>
               {/* <button value={id} onClick={e => clickManager(e)}>X</button> */}
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
         }
      </Entrance>
   );
};

export default PokedexEntrance;