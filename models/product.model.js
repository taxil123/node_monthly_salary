const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const femaleData = new Schema({
  rec_id:{type:String, required:true},
  name:{type:String},
  designation:{type:String},
  description:{type:String},
  price:{type:Number},
  image:{type:String},
  category:{type:String},

});

module.exports = mongoose.model('Female', femaleData);