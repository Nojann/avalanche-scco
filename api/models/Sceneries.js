const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Character = new Schema({
        id: Number,
        imageName: String,
        positionTop: Number,
        positionLeft: Number,
        width: Number,
        rotate: Number,
        scaleX: Number
});


let Scenery = new Schema({
    id: Number,
    background: String,
    characters: [Character],
    dialog: [String]
});

let Sceneries = new Schema({
    sceneries: [Scenery]
}
,{
    collection: 'Sceneries'
});



module.exports = mongoose.model('Sceneries', Sceneries);
