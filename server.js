const express = require('express')
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 4000;
const middleware = require('./app/middleware');
const startServer = () => {
    return new Promise(async (resolve, reject) => {
        await require('./app/middleware')(app);
        resolve();
    });
}
startServer().then(() => {
    app.listen(port, () => { console.log(`Server started on ${port}`) });
}).catch(err => { console.log(err.message); });