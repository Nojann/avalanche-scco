const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let UserData = new Schema({
    gender: Number,
    age: Number,
    skiLevel : Number,
    skiExperience: Number,
    skiFreeRide: Number,
    skiFreeRideFreq: Number,
    videoType: Number,
    familiarity: Boolean,
    finalEvaluation: Number,
    choice1: Boolean,
    choice2: Boolean,
    choice3: Boolean,
    opt1: Number,
    opt2: Number,
    opt3: String
},{
    collection: 'UserData'
});

module.exports = mongoose.model('UserData', UserData);