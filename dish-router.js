const express = require('express')

const router = require('express').Router()

const Recipes = require('./data/recipe-model.js')

router.get('/', (req, res) => {
  Recipes.getRecipes().then(recipe => {
    res.status(200).json(recipe)
  }).catch(err => res.status(500).json(err))
})

router.post('/', (req, res) => {
  Recipes.addRecipe(req.body).then(id => {
    res.status(201).json(id)
  }).catch(err => res.status(500).json(err))
})

module.exports = router
