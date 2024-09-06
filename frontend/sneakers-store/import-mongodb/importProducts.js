// importProducts.js
const mongoose = require('mongoose');
const fs = require('fs');
const csv = require('csv-parser');
const Product = require('../models/shoes'); // Pfad zu deinem Modell
const MONGODB_URI = process.env.MONGODB_URI;


async function importCSVToMongoDB() {
    await mongoose.connect("mongodb+srv://kodirov-m-02:user321@cluster0.6q6ip.mongodb.net/ShoesDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected');
    
    fs.createReadStream('products.csv') // Pfad zu deiner CSV-Datei
    .pipe(csv({ separator: ';' }))
    .on('data', async (row) => {
        console.log(row.description)
    
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
        mongoose.disconnect();
        console.log('MongoDB unconnected');

    });
}

// importCSVToMongoDB()