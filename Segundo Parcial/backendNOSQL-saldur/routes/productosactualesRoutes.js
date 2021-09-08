var express = require('express');
var router = express.Router();
var productosactualesController = require('../controllers/productosactualesController.js');

/*
 * GET
 */
router.get('/', productosactualesController.list);

/*
 * GET
 */
router.get('/:id', productosactualesController.show);

/*
 * POST
 */
router.post('/', productosactualesController.create);

/*
 * PUT
 */
router.put('/:id', productosactualesController.update);

/*
 * DELETE
 */
router.delete('/:id', productosactualesController.remove);

module.exports = router;
