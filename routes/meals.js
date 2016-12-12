const express = require('express');
const { createMeal } = require('../models/meals.js')

const mealsRouter = express.Router();

mealsRouter.post('/', createMeal, (req, res) => {
  res.redirect('/');
})

module.exports = mealsRouter;