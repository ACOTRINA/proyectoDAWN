var ProductosactualesModel = require('../models/productosactualesModel.js');

/**
 * productosactualesController.js
 *
 * @description :: Server-side logic for managing productosactualess.
 */
module.exports = {

    /**
     * productosactualesController.list()
     */
    list: function (req, res) {
        ProductosactualesModel.find(function (err, productosactualess) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting productosactuales.',
                    error: err
                });
            }

            return res.json(productosactualess);
        });
    },

    /**
     * productosactualesController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        ProductosactualesModel.findOne({_id: id}, function (err, productosactuales) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting productosactuales.',
                    error: err
                });
            }

            if (!productosactuales) {
                return res.status(404).json({
                    message: 'No such productosactuales'
                });
            }

            return res.json(productosactuales);
        });
    },

    /**
     * productosactualesController.create()
     */
    create: function (req, res) {
        var productosactuales = new ProductosactualesModel({
			productos : req.body.productos
        });

        productosactuales.save(function (err, productosactuales) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating productosactuales',
                    error: err
                });
            }

            return res.status(201).json(productosactuales);
        });
    },

    /**
     * productosactualesController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        ProductosactualesModel.findOne({_id: id}, function (err, productosactuales) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting productosactuales',
                    error: err
                });
            }

            if (!productosactuales) {
                return res.status(404).json({
                    message: 'No such productosactuales'
                });
            }

            productosactuales.productos = req.body.productos ? req.body.productos : productosactuales.productos;
			
            productosactuales.save(function (err, productosactuales) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating productosactuales.',
                        error: err
                    });
                }

                return res.json(productosactuales);
            });
        });
    },

    /**
     * productosactualesController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        ProductosactualesModel.findByIdAndRemove(id, function (err, productosactuales) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the productosactuales.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
