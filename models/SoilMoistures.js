const mongoose = require('mongoose');

const SoilMoisturesSchema = mongoose.Schema({
    percentage: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('SoilMoistures', SoilMoisturesSchema);