const Command = require('../models/Command')
const commande = require ('../models/Command')

const addcommand = async (req, res)=>{
    const ajout = await Command.create({
        cart : req.body.cart,
        nom: req.body.nom,
        prenom: req.body.prenom,
        adresse: req.body.adresse,
        ville: req.body.ville,
        zip: req.body.zip,
        total: req.body.total,
        statut: req.body.statut,
        telephone: req.body.telephone,
        mail: req.body.mail
    })
    res.json({msg: 'ajouter'})
}

const getallcommand = async (req, res)=>{
    const gettous = await Command.find()
    res.json(gettous)
}

const getcommand = async (req,res)=>{
    const getone = await Command.findById(req.params.id)
    res.json(getone)
}

const updateCommand = async (req, res)=>{
    const updateone = await Command.findByIdAndUpdate(req.params.id, req.body)
    res.json(updateone)
}

const removecommand = async (req,res)=>{
    const removeone = await Command.findByIdAndRemove(req.params.id)
    res.json({msg: 'removed'})
}

module.exports = {
    addcommand,
    getallcommand,
    getcommand,
    updateCommand,
    removecommand
}