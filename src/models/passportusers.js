const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const schema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  username: String
})

schema.plugin(passportLocalMongoose)
module.exports = new mongoose.model('Passportusers', schema)
