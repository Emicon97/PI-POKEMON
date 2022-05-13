const { Pokemon } = require('../db');
const { checkPokemon } = require('./apiCalls');
const { getFakeTypes, typeManager } = require('./typeCalls');

async function getDbPokemon (value, request) {
   if (request === 'id') {
      value = idFixer(value);
      var data = await Pokemon.findByPk(value);
      if(!data) throw new Error (`¡No tenemos esa entrada en nuesta Fakedex! Podés crear Fakemon aquí`);
   }
   else if (request === 'name') {
      var data = await Pokemon.findOne({where:{name:value}});
      if(!data) return null;
   }
   
   let fakemon = getFakeTypes(data);

   return fakemon;
}

async function getDbDex () {
   let fakes = await Pokemon.count();
   if (!fakes) return [ null , 0 ];
   fakes = Math.ceil(Math.random()*fakes);
   fakes === 0 ? fakes = 1 : fakes;

   let data = [];
   let limit = fakes+1;
   for (let i = 1; i < limit; i++) {
      fakemon = await Pokemon.findByPk(`Fakemon ${i}`);
      if (!fakemon) {
         limit++;
      } else {
         fakemon = await getFakeTypes(fakemon);
         fakemon = {
            sprite: fakemon.sprite,
            name: fakemon.name,
            types: fakemon.dataValues.types,
            id: fakemon.id
         }
         data.push(fakemon);
      }
   }

   data.length > 20 ? data.length = 20 : data.length;
   return [ data, fakes ];
}

async function postPokemon (name, hp, attack, defense, speed, height, weight, types, sprite) {
   if (!name) throw new Error ('¡Si descubriste un Fakemon, deberías ponerle un nombre!');
   name = name.toLowerCase().trim();
   let pokemon = await checkPokemon(name);
   if (pokemon) throw new Error ('¡Ese es un Pokémon!');
   
   let id = await idChecker();

   let [ fakemon, created ] = await Pokemon.findOrCreate({
      where:{name},
      defaults:{
         id,
         hp,
         attack,
         defense,
         speed,
         height,
         weight,
         sprite
      }
   });
   if (!created) throw new Error ('¡Ese Fakemon ya está registrado en nuestra Fakedex!');
   
   if (types) fakemon = await typeManager(fakemon, types);
   return '¡¡¡Felicitaciones!!! Tu Pokémon fue creado con éxito.';
}

async function idChecker (id) {
   if (!id) {
      var id = await Pokemon.count();
      id++;
   } else {
      id++
   }
   let checker = await Pokemon.findByPk(`Fakemon ${id}`)
   if (checker) return idChecker(id);
   else return id;
}

function idFixer (id) {
   if (id.includes('%20')) return id.replace('%20', ' ');
   else if (id.includes('+')) return id.replace('+', ' ');
   return id;
}

async function deleteFunction (id) {
   if (id) {
      idFixer(id);
      var deleted = await Pokemon.destroy({where: {id}})
   }
   if (deleted) return 'Este Fakemon fue borrado exitosamente.';
   //else throw new Error ('¡Ese es un Pokémon! Y no se puede borrar. NO. SE. PUEDE. BORRAR.');
   else throw new Error (`Esta es la id que estás tratando de eliminar ${id}`);
}

module.exports = { getDbPokemon, postPokemon, getDbDex, deleteFunction };