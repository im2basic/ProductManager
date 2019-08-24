// -----------SET UP MODELS------------------
const mongoose = require('mongoose')


const ReviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: [true, "Cant leave a review without rating"],
        min: [1, "too low"],
        max: [5, "too high"]
    },
    comment: {
        type: String,
        required: [true, "Cant leave a review without a review"],
    },
},{timestamps: true})

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "You must have a title!"],
        minlength: [4, "Must be at least 4 characters"],
        maxlength: [20, "Calm down there buddy, slow it down"]
    },
    price: {
        type: Number,
        required: [true, "You must have a price!"],
        min: [1, "pricetag must be higher. no brokeboi shit on this site"]
        
    },
    imageUrl: {
        type: String,
        required: [true, "Show off those goods"]
    }


},{timestamps: true})


const Product = mongoose.model("Product",ProductSchema);
const Review = mongoose.model("Review",ReviewSchema);

module.exports = Product, Review;