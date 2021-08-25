const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    // name: req.body.name,
    // description: req.body.description,
    // price: parseFloat(req.body.price), // store this as 128bit decimal in MongoDB
    // image: req.body.image


    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: mongoose.Decimal128,
        require: true
    },
    image: {
        type: String
    }

});

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;