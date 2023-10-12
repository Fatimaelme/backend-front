const express = require('express')
const { getallproduct, getproduct, addproduct, updateproduct, removeproduct } = require('../controlers/Productctrl')

const Productrouter = require ('express').Router()

Productrouter.get('/', getallproduct)
Productrouter.get('/:id', getproduct)
Productrouter.post('/', addproduct)
Productrouter.put('/:id', updateproduct)
Productrouter.delete('/:id', removeproduct)

module.exports = Productrouter
