const {Schema, model} = require("mongoose");

const servicesSchema = new Schema({
    name:{type: String, required: true},
    description:{type: String, required: true},
    price:{type: String, required: true},
    provider:{type: String, required: true},
})

const Services = new model("Service",servicesSchema);

module.exports = Services;