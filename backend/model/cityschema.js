const mongoose = require ("mongoose")

citySchema = new mongoose.Schema({
    id : {type:Number, required:true},
    name : {type:String, required:true},
    state: {type:String, required:true}
})

const City = mongoose.model("city", citySchema);

module.exports = City;


