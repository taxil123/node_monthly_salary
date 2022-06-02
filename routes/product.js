const express = require('express');
const { verifyToken } = require('../middlewares/authentication');
const _ = require('underscore');
const Femonmale = require('../models/product.model');
const male = require('../models/product.model');
const jsonData = require('../config/sampleData.json');

const updateOptions = { new: true, runValidators: true, context: 'query' };
const app = express();

app.get('/product', (req, res) => {
  const from = Number(req.query.from || 0);
  const limit = Number(req.query.limit || 5);

  // get feb month data
  
  const febMonthSalaryData = jsonData.filter(item => item.date.startsWith('Feb'));

  // filter data form filteredData where gennder is female

  const femaleSalaryData = febMonthSalaryData.filter(item => item.gender.startsWith('Female'));
  const maleSalaryData = febMonthSalaryData.filter(item => item.gender.startsWith('Male'));

  // insert data in female model
  Female.create(femaleSalaryData)

  res.json(maleSalaryData)
});



module.exports = app;