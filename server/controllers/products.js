require('../models/product')
const mongoose = require('mongoose')
const Product = mongoose.model("Product"),
    Review = mongoose.model("Review")
module.exports = {
    index: (req, res) => {
        Product.find()
            .then(result => res.json({ results: result}))
            .catch(err => res.json({errors: err.errors}));
    },
    show: (req, res) => {
        Product.findOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({ errors: err.errors  }));
    },
    create: (req, res) =>{
        Product.create(req.body)
            .then(result => res.json({ results: result }))
            .catch( err => res.json({errors: err.errors}));
    },

    createReview: (req, res) => {
        Review.create(req.body)
            .then(result => Product.findOneAndUpdate({_id: req.params.id}, {$push: {reviews: result}}, {useFindAndModify: false}))
            .then(saveResult => res.json({results: saveResult }))
            .catch( err => res.json({errors: err.errors}))
    },
    update: (req, res) => {
        Product.findOneAndUpdate({_id: req.params.id},req.body,{useFindAndModify: false, runValidations: true, context: 'query'})
            .then(result => res.json({ results : result }))
            .catch(err => res.json({ errors: err.errors }));
    },
    destroy: (req,res) => {
        Product.deleteOne({_id:req.params.id})
            .then(result => res.json({ results: result }))
            .catch(err => res.json({ errors: err.errors }));
    }
}