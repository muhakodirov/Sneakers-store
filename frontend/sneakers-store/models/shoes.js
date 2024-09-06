const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
  name: String,
  size: Array,
  price: Number,
  description: String,
  category: String,
  men: Boolean,
  women: Boolean,
  imageUrl: String,
  stock: {
    type: Number,
    required: false,
  },
  sale: Boolean,
});


const Product = mongoose.models.shoes || mongoose.model('shoes', ProductSchema);

module.exports = Product;