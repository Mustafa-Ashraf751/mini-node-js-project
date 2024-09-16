const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'You must enter your name'],
    unique: [true, 'This name is already exist'],
    trim: true,
    maxlength: [20, 'A name must have less or equal then 20 characters'],
    minlength: [3, 'A name must have more or equal then 3 characters'],
  },
  email: {
    type: String,
    required: [true, 'You must enter your name'],
    unique: [true, 'This email is already exist'],
    trim: true,
    validate: {
      validator: function (email) {
        var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailRegex.test(email);
      },
    },
  },
  age: {
    type: Number,
    required: [true, 'You must enter your age'],
    validate: [this.age >= 18, 'You are not adult:('],
  },
  score: {
    type: Number,
    required: [true, 'Please enter your score to continue!'],
  },
});

const Tour = mongoose.model('user', userSchema);

module.exports = Tour;
