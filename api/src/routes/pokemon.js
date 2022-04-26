const { Pokemon, Type, Op } = require('../db');
const { getApiPokemon, fullPokedex } = require('./apiCalls');
const { getDbPokemon } = require('./dbCalls');
const { json, Router } = require('express');

const router = Router();
router.use(json());

router.get('/', async (req, res) => {
   try {
      let { name } = req.query;
      if (name) {
         const pokeData = await getApiPokemon(name);
         res.json(pokeData);
      } else {
         const apiDex = await fullPokedex();
         res.json(apiDex);
      }
   } catch (err) {
      console.log(err);
   }
});

router.get('/:idPokemon', async (req, res) => {
   try {
      let { idPokemon } = req.params;

      const pokeData = await getApiPokemon(idPokemon);
      
      res.json(pokeData);
   } catch (err) {
      console.log(err);
   }
});

router.post('/', async (req, res) => {
   try {
      let { id, name, hp, attack, defense, speed, height, weight } = req.body;
      console.log(id)
      // const [ pokemon, created ] = await Pokemon.findOrCreate({
      //    where: {
      //       name: name
      //    },
      //    default: {
      //       id: id,
      //       hp,
      //       attack,
      //       defense,
      //       speed,
      //       height,
      //       weight
      //    }
      // })

      // console.log(pokemon)
      // console.log(created)

      // res.send(pokemon);

   } catch (err) {
      console.log(err);
   }
});

module.exports = router;