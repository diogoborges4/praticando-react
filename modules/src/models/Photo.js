const mongoose = require("mongoose");
const { Schema } = mongoose;

const photoSchema = new Schema({
 name: {type: String, require: true},
 src: {type: String, require: true},
});

const Photo = mongoose.model("Photo", photoSchema);

module.exports = Photo;
