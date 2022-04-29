const { getApiPokemon, fullPokedex } = require('./apiCalls');
const { getDbPokemon, getDbDex, postPokemon } = require('./dbCalls');
const { json, Router } = require('express');

const router = Router();
router.use(json());

router.get('/', async (req, res) => {
   try {
      let { name } = req.query;
      if (name) {
         name = name.toLowerCase()
         let data = await getDbPokemon(name, 'name');
         data ? data : data = await getApiPokemon(name);
         res.json(data);
      } else {
         const [ dbDex, surplus ] = await getDbDex();
         const apiDex  = await fullPokedex(surplus);
         
         var fakeDex = [];
         dbDex ? fakeDex = [ ...dbDex, ...apiDex ] : fakeDex = [apiDex];
         res.json(fakeDex);
      }
   } catch (err) {
      res.status(404).send(err.message);
   }
});

router.get('/:idPokemon', async (req, res) => {
   try {
      let { idPokemon } = req.params;
      let pokeData;
      idPokemon.includes('Fakemon') ? 
      pokeData = await getDbPokemon(idPokemon, 'id') : 
      pokeData = await getApiPokemon(idPokemon);

      res.json(pokeData);
   } catch (err) {
      res.send(err.message);
   }
});

router.post('/', async (req, res) => {
   try {
      var { name, hp, attack, defense, speed, height, weight, types } = req.body;
      let pokemon = await postPokemon(name, hp, attack, defense, speed, height, weight, types);
      res.json(pokemon);
   } catch (err) {
      res.send(err.message);
   }
});

module.exports = router;