const { Type } = require('../db');
const axios = require('axios');

async function getTypes () {
   const apiTypes = await axios('https://pokeapi.co/api/v2/type');
   var loadedTypes = [];

   for (let pokeType of apiTypes.data.results) {
      const [ type ] = await Type.findOrCreate({where:{name: pokeType.name}});
      loadedTypes.push(type);
   }
   
   return loadedTypes;
}

async function typeManager (fakemon, types) {
   await getTypes();
   
   for (let type of types) {
      type = await Type.findOne({where:{name:type}});
      await fakemon.addType(type);
   }
   
   fakemon = getFakeTypes(fakemon);
   return fakemon;
}

async function getFakeTypes (data) {
   let fakemon = [];
   fakemon.push(data);

   data = await data.getTypes();
   if (data.length) {
      fakemon[0].dataValues.types = data.map(fakeType => fakeType.dataValues.name);
   }

   return fakemon[0];
}

module.exports = { getTypes, typeManager, getFakeTypes };