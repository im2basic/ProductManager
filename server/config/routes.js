// --------------SET UP ROUTES---------------
const mongoose = require('mongoose'),
    products = require('../controllers/products')

module.exports = (app) => {
    app.get('/index', (req,res) => products.index(req,res))
    app.get('/:id', (req,res) => products.show(req,res) )
    app.post('/create', (req,res) => products.create(req,res))
    app.post('/update/:id', (req,res) => products.update(req,res))
    app.post('/create/review/:id', (req, res) => products.createReview(req,res))
    app.delete('/destroy/:id', (req,res) => products.destroy(req,res))
}