const mongoose = require ('mongoose')

const commandschema = mongoose.Schema({
    cart: [
        {
            title: {
                type: String
            },
            image:{
                type:String
            }, 
            price: {
                type: Number
            },
            quantity: {
                type: Number
            }
        }
    ],
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    }, 
    mail: {
        type: String,
        required: true
    }, 
    telephone: {
        type: String,
        required: true
    }, 
    pays:   {
        type: String
    },
    adresse: {
        type: String,
        required: true
    },
    ville: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    },
    proovince:{
        type: Number,
    },
    total:{
        type: Number,
    },
    statut:{
        type: String,
    }
},
{timestamps: true})

const Command = mongoose.model('Command', commandschema)
module.exports = Command
