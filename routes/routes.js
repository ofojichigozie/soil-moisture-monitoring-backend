const express = require('express');
const SoilMoistures = require('../models/SoilMoistures');

const router = express.Router();

router.get('/soil-moistures', (req, res) => {
    const soilMoistures = SoilMoistures.find();
    soilMoistures.exec()
    .then(result => {
        res.status(200).json({
            data: result,
            message: 'READ'
        });
    })
    .catch(error => {
        res.status(500).json({
            message: 'Failed to read soil moistures from DB'
        });
    });
});

router.get('/soil-moistures/:percentage', (req, res) => {
    let percentage = req.params.percentage;

    const dateTime = new Date();
    dateTime.setHours(dateTime.getHours() + 1);
    let date = dateTime.toLocaleDateString();
    let time = dateTime.toLocaleTimeString();

    const soilMoistures = new SoilMoistures({
        percentage,
        date,
        time
    });

    soilMoistures.save()
    .then(result => {
        res.status(200).json({
            data: result,
            message: 'CREATED'
        });
    })
    .catch(error => {
        res.status(500).json({
            message: 'Failed to add soil moisture to DB'
        });
    });
});

router.delete('/soil-moistures', (req, res) => {
    const soilMoistures = SoilMoistures.deleteMany({});
    soilMoistures.exec()
    .then(result => {
        res.status(200).json({
            data: result,
            message: 'DELETED'
        });
    })
    .catch(error => {
        res.status(500).json({
            message: 'Could not delete soil moistures from DB'
        });
    });
});

module.exports = router;