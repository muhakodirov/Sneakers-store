const mongoose = require('mongoose');


const UsersSchema = new mongoose.Schema({
  name: String,
  password: Number
});


const Users = mongoose.models.users || mongoose.model('users', UsersSchema);

module.exports = Users;