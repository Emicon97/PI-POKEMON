import { Link } from 'react-router-dom';
import { Entrance, LinkBox, Err } from './Entrance';
import { Name, ImgError, Types, Type } from './Content';

const PokedexEntrance = ({ sprite, name, types, id, lesserError }) => {
   return (
      <Entrance>
         {lesserError ? <Err><Name>{lesserError}</Name></Err> :
         <Link to={`/pokemon/${id}`}>
            <LinkBox>
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