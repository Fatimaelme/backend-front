const mongoose = require ('mongoose')

const catetgorySchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    icone: {
        type: String,
        required: true
    }
}, {
    timestamps : true})

const Category = mongoose.model('Categories',catetgorySchema)
module.exports = Category
