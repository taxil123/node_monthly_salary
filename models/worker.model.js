const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workerData = new Schema({
  rec_id: { type: String, required: true },
  emp_id: { type: String },
  date: { type: String },
  time_in: { type: String },
  time_out: { type: String },
  total_hours: { type: Number },
  weekday: { type: Number },
  name: { type: String },
  gender: { type: String },
  designation: { type: String },
  department: { type: String },
  calculate: { type: String },
  basic_salary: { type: Number },
  per_day_salary: { type: Number },
});
module.exports = mongoose.model("Worker", workerData);
