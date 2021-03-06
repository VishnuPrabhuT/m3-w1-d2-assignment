require('dotenv').config();
const mongoose = require("mongoose");


mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on("open", () => {
    console.log("Mongoose connection open");
}).on("error", err => {
    console.log(`Connection error: ${err.message}`);
});

require("./models/Registration.js");

const app = require("./app.js");

const server = app.listen(3000, () => {
    console.log(`Express is running on port ${server.address().port}`);
});