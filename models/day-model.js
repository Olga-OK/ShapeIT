const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Exercise = require('./exercise-model');

 
const daySchema = new Schema({
  name: Number,
  exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }]
});
 
const Day = mongoose.model('Day', daySchema);
 
module.exports = Day;
