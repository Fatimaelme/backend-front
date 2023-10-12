const mongoose = require ('mongoose')

const productschema = mongoose.Schema({
    title : {
        type : String,
        required : true
    }, 
    Image: {
        type : String,
    },
    marque: {
        type: String,
    }, 
    description: {
        type : String,
    }, 
    category: {
        type: String,
    },
    price: {
        type: Number,
    },
    promotion: {
        type: Boolean
    }, 
    quantity: {
        type: Number,
    }
}, 
{timestamps: true})

const Product = mongoose.model('Product', productschema)
module.exports = Product