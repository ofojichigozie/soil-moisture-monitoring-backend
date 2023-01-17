const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require("./routes/routes");
require('dotenv').config();

const app = express();

//Middleware
app.use(cors());
app.use(bodyParser.json());

//Routes section
app.use("/api/v1", routes);

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

//Connect to remote database
mongoose.connect(process.env.DB_CONNECTION_STRING, options, error => {
    if(!error){
        console.log('Connected to remote database');
    } else {
        console.log('ERROR: ' + error);
    }
});

//Start the server application
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Soil moisture monitoring server started on port ${PORT}`);
});
