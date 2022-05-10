const { getTypes } = require('../Controllers/typeCalls')
const { Router } = require('express');

const router = Router();

router.get('/', async (req, res) => {
   const types = await getTypes();
   res.json(types);
});

module.exports = router;