const Product = require('../models/Product')


const addproduct = async (req, res)=>{
    console.log(req.body)
    const ajouter = await Product.create({
        title : req.body.title,
        Image: req.body.Image,
        description: req.body.description,
        marque: req.body.marque,
        category : req.body.category,
        price: req.body.price,
        promotion: req.body.promotion,
        quantity: req.body.quantity
    })
    res.json ({msg: 'added'})
}

const getallproduct = async (req,res)=>{
    const gettout = await Product.find()
    res.json(gettout)
}

const getproduct = async (req, res) =>{
    const getid= await Product.findById(req.params.id)
    res.json(getid)
}

const updateproduct = async (req, res)=>{
    const modifier = await Product.findByIdAndUpdate(req.params.id, req.body)
    res.json(modifier)
}

const removeproduct = async (req, res)=> {
    const supprime = await Product.findByIdAndRemove(req.params.id)
    res.json ({msg: 'deleted'})
}


module.exports = {
    addproduct, 
    getallproduct, 
    getproduct,
    updateproduct,
    removeproduct
}