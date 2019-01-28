const mongoose = require('mongoose');

const FacultySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  
  email: {
    type: String,
    required: true
  },
  pattern: {
    type: String,
    required: true
  }

});

const Faculty = mongoose.model('Faculty', FacultySchema);

module.exports = Faculty;