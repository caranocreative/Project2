const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Reviews = require("./reviews.js");
const restaurantSchema = new mongoose.Schema({
	name: {type: String, required: true}, 
	zipcode: String,
	restaurantLocation: String,
	typeOfRestaurant: String,
	price: Number,
	comment: String,
	rating: Number,
	website: String,
	reviews: [Reviews.schema],
	imageURL: String, 
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
