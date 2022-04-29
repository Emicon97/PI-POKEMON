const axios = require('axios');

async function getApiPokemon (value, isCb) {
   var pokeData = [];
   await axios(`https://pokeapi.co/api/v2/pokemon/${value}`)
      .then( apiPokemon => {
         if (!isCb) {
            pokeData = {
               sprite: apiPokemon.data.sprites.other.dream_world.front_default,
               name: apiPokemon.data.name,
               types: apiPokemon.data.types.map(i => i.type.name),
               id: apiPokemon.data.id,
               hp: apiPokemon.data.stats[0].base_stat,
               attack: apiPokemon.data.stats[1].base_stat,
               defense: apiPokemon.data.stats[2].base_stat,
               speed: apiPokemon.data.stats[5].base_stat,
               height: apiPokemon.data.height,
               weight: apiPokemon.data.weight      
            };
         } else {
            pokeData = {
               sprite: apiPokemon.data.sprites.other.dream_world.front_default,
               name: apiPokemon.data.name,
               types: apiPokemon.data.types.map(i => i.type.name)
            };
         }
      })
      .catch(() => {
         throw new Error (`¡Ese Pokémon no existe! Pero podés crearlo como Fakemon aquí.`);
      });

   return pokeData;
}

async function fullPokedex (surplus=0) {
   let apiPokemon = await axios('https://pokeapi.co/api/v2/pokemon');
   let secondApiPokemon = apiPokemon.data.next;
   secondApiPokemon = await axios.get(secondApiPokemon);
   
   let apiDex = [];

   const first = apiPokemon.data.results.map(async poke => {
      let firstHalfDex = await getApiPokemon(poke.name, 1);
      apiDex.push(firstHalfDex);
   });

   if (surplus >= 20) {
      await Promise.all(first);
      apiDex.length + surplus > 40 ? apiDex.length = apiDex.length - surplus + 20 : apiDex.length;
   } else {
      const second = secondApiPokemon.data.results.map(async poke => {
         let secondHalfDex = await getApiPokemon(poke.name, true);
         apiDex.push(secondHalfDex);
      });

      await Promise.all(first, second);
      apiDex.length + surplus > 40 ? apiDex.length = apiDex.length - surplus : apiDex.length;
   }
   return apiDex;
}

async function checkPokemon (name) {
   let pokemon = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .catch(() => {return});
   if (pokemon) return true;
}

module.exports = { getApiPokemon, fullPokedex, checkPokemon };