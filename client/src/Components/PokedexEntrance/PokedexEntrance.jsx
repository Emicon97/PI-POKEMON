import { Link } from 'react-router-dom';
import { Entrance, LinkBox, Name, ImgError, Types, Type } from './Styles';

const PokedexEntrance = ({ sprite, name, types, id }) => {
   name = name[0].toUpperCase() + name.slice(1);
   return (
      <Entrance>
         <Link to={`/${id}`}>
            <LinkBox>
               <Name>{name}</Name>
               {sprite ? <img src={sprite} alt='' width='115em' height='115em'/> :
                  <ImgError>Este Fakemon no tiene imagen</ImgError>
               }
               <Types>
                  {types.map(type => {
                     let isEven;
                     type === types[1] ? isEven = true : isEven = false;
                     type = type[0].toUpperCase() + type.slice(1);
                     return <Type key={type} isEven={isEven} name={type}>{type}</Type>;
                  })}
               </Types>
            </LinkBox>
         </Link>
      </Entrance>
   );
};

export default PokedexEntrance;