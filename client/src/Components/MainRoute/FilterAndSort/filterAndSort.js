export function sortManager (sortType, pokedex) {
   let sorted = [];
   switch (sortType) {
      case 'aToZ':
         sorted = pokedex.slice().sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
         });
         break;
      case 'zToA':
         sorted = pokedex.slice().sort((a, b) => {
            if (a.name > b.name) return -1;
            if (a.name < b.name) return 1;
            return 0; 
         });
         break;
      case 'maxToMin':
         sorted = pokedex.slice().sort((a, b) => {
            return b.attack-a.attack;
         });
         break;
      case 'minToMax':
         sorted = pokedex.slice().sort((a, b) => {
            return a.attack-b.attack;
         });
         break;
      default: sorted = pokedex;
   }
   if (!sorted.length) throw new Error ('¡No hay nada que ordenar! Creá Fakemon aquí.');
   return sorted;
};
         
export function filterManager (type, [pok, fak, fil], backupdex, sor) {
   let pokemon = [];
   let fakemon = [];
   let filtered = [];
   pokemon = backupdex.filter(pokemon => {
      return typeof pokemon.id !== 'string';
   })
   
   fakemon = backupdex.filter(pokemon => {
      return typeof pokemon.id === 'string';
   });
   
   if (type === 'pokemon') {
      if (fil) pokemon = typeFilter(fil, pokemon);
      if (sor) pokemon = sortManager(sor, pokemon);
      return pokemon;
   }
   if (type === 'fakemon') {
      if (fil) fakemon = typeFilter(fil, fakemon);
      if (sor) fakemon = sortManager(sor, fakemon);
      if (!fakemon.length) throw new Error ('¡No hay Fakemon registrados aún! Pero podés crear uno aquí.');
      return fakemon;
   }
   
   pok && !fak ? filtered = pokemon :
   fak && !pok ? filtered = fakemon :
   filtered = backupdex;

   filtered = typeFilter(type, filtered);
   if (sor) filtered = sortManager(sor, filtered);
   if (!filtered.length) throw new Error ('¡No hay Pokémon registrados de ese tipo! Pero podés crear uno aquí.');
   return filtered;
};

function typeFilter (type, filtered) {
   filtered = filtered.filter(p => {
      if (p.types) {
         for (let x of p.types) {
            if (x === type) return p;
         }
      }
      return false;
   });
   return filtered;
};