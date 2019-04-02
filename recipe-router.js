const express = require('express')

const router = require('express').Router()

const Recipes = require('./data/recipe-model.js')

router.get('/', (req, res) => {
  Recipes.getDishes().then(dish => {
    res.status(200).json(dish)
  }).catch(err => res.status(500).json(err))
})

router.get('/:id', (req, res) => {
  Recipes.getDish(req.params.id).then(dish => {
    res.status(200).json(dish)
  }).catch(err => res.status(500).json(err))
})

router.post('/', (req, res) => {
  Recipes.addDish({name: req.body.name}).then(id => {
    res.status(201).json(id)
  }).catch(err => res.status(500).json(err))
})


module.exports = router
