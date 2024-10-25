const mongoose = require('mongoose');


const BestsellersSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  category: String,
  imageUrl: String,
});


const Bestsellers = mongoose.models.bestsellers || mongoose.model('bestsellers', BestsellersSchema);

module.exports = Bestsellers;