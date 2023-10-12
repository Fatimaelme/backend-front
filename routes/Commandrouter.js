const express = require('express')
const { getallcommand, getcommand, addcommand, updateCommand, removecommand } = require('../controlers/Commandctrl')

const Commandrouters = require('express').Router()

Commandrouters.get('/', getallcommand)
Commandrouters.get('/:id', getcommand)
Commandrouters.post('/', addcommand)
Commandrouters.put('/:id', updateCommand)
Commandrouters.delete('/id', removecommand)

module.exports = Commandrouters