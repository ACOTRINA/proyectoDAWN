const nodbConfig = require("../config/nodb.config");
const mongoose = require('mongoose');
//../config/nodb.config.js
const db_path = nodbConfig.dialect + '://' + nodbConfig.HOST + '/' + nodbConfig.noDB;
const config = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    poolSize: 4
}

    mongoose.connect(db_path)
    .then(() => console.log('DB connnection successful!'))
    .catch(err => {
        console.error.bind(console, 'MongoDB connection error:')
    })



