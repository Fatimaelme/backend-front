const express = require('express')
const { addcat, modifycat, trouvcat, deletecat, getallcat } = require('../controlers/Categoryctrl')

const Categoryrouters = require('express').Router()
Categoryrouters.get('/:id', trouvcat)
Categoryrouters.get('/',getallcat)
Categoryrouters.post('/', addcat)
Categoryrouters.put('/:id', modifycat)
Categoryrouters.delete('/:id', deletecat)


module.exports = Categoryrouters