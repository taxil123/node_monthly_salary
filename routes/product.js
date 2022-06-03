const express = require("express");
const { verifyToken } = require("../middlewares/authentication");
const _ = require("underscore");
const Female = require("../models/female.model");
const Male = require("../models/male.model");
const Worker = require("../models/worker.model");
const jsonData = require("../config/sampleData.json");

const updateOptions = { new: true, runValidators: true, context: "query" };
const app = express();

app.get("/quest", async (req, res) => {
  const from = Number(req.query.from || 0);
  const limit = Number(req.query.limit || 5);

  // get feb month data

  const febMonthSalaryData = jsonData.filter((item) =>
    item.date.startsWith("Feb")
  );

  // filter data form filteredData where gennder is female

  const femaleSalaryData = febMonthSalaryData.filter((item) =>
    item.gender.startsWith("Female") && item.total_hours > 4 && item.designation != 'Worker'
  );

  const maleSalaryData = febMonthSalaryData.filter((item) =>
    item.gender.startsWith("Male") && item.total_hours > 4 && item.designation != 'Worker'
  );

  const workerSalaryData = febMonthSalaryData.filter((item) => item.designation == 'Worker')

  // insert data in female model
  await Female.create(femaleSalaryData);

  await Male.create(maleSalaryData);

  await Worker.create(workerSalaryData);

  res.json(maleSalaryData);
});

app.get("/basic", async (req, res) => {
  
  // get sum of basic salary data
  Worker.aggregate
    
  res.json({});
});

module.exports = app;
