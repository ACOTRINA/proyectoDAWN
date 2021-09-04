var express = require('express');
var router = express.Router();
var graficasController = require('../controllers/graficasController.js');

/*
 * GET
 */
router.get('/', graficasController.list);

/*
 * GET
 */
router.get('/:id', graficasController.show);
//router.get("/cliente/:id",graficasController.facturaPorCliente);
/*
 * POST
 */
//router.post('/', graficasController.create);

/*
 * PUT
 */
//router.put('/:id', graficasController.update);

/*
 * DELETE
 */
//router.delete('/:id', graficasController.remove);

module.exports = router;
