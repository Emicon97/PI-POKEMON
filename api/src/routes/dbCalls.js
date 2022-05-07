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
   fakes = Math.floor(Math.random()*fakes);
   fakes === 0 ? fakes = 1 : fakes;

   let data = [];
   for (let i = 1; i < fakes+1; i++) {
      fakemon = await Pokemon.findByPk(`Fakemon ${i}`);
      fakemon = await getFakeTypes(fakemon);
      fakemon = {
         sprite: fakemon.sprite,
         name: fakemon.name,
         types: fakemon.dataValues.types,
         id: fakemon.id
      }
      data.push(fakemon);
   }

   data.length > 20 ? data.length = 20 : data.length;
   return [ data, fakes ];
}

async function postPokemon (name, hp, attack, defense, speed, height, weight, types, img) {
   if (!name) throw new Error ('¡Si descubriste un Fakemon, deberías ponerle un nombre!');
   name = name.toLowerCase();
   let pokemon = await checkPokemon(name);
   if (pokemon) throw new Error ('¡Ese es un Pokémon!');

   let id = await Pokemon.count();
   id++;
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
         img
      }
   });
   if (!created) throw new Error ('¡Ese Fakemon ya está registrado en nuestra Fakédex!');
   
   if (types) fakemon = await typeManager(fakemon, types);
   return fakemon;
}

function idFixer (id) {
   if (id.includes('%20')) return id.replace('%20', ' ');
   else if (id.includes('+')) return id.replace('+', ' ');
   return id;
}

module.exports = { getDbPokemon, postPokemon, getDbDex };