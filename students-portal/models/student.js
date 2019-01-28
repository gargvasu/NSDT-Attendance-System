const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  regno: {
    type: String,
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

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;