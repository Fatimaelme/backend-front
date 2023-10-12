const Category = require('../models/Category')

const addcat = async(req,res)=> {
    const ajouter = await Category.create({
        title : req.body.title,
        icone: req.body.icone
    })
    res.json ({mesg: 'ajouter'})
}

const modifycat = async (req,res) =>{
    const modifier = await Category.findByIdAndUpdate(req.params.id, req.body)
    res.json({msg: 'product found'})
}

const getallcat = async(req,res) =>{
    const getall = await Category.find()
    res.json(getall)
}

const trouvcat = async (req, res)=>{
    const trouver = await Category.findById(req.params.id)
    res.json(trouver)
}

const deletecat = async (req,res) =>{
    const supprimer = await Category.findByIdAndRemove (req.params.id)
    res.json({msg: 'deleted'})
}

module.exports = {
    addcat,
    modifycat,
    trouvcat,
    deletecat,
    getallcat
}