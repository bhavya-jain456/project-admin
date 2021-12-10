const ejs = require('ejs');
const path = require('path');
const session = require('express-session');

async function middleware(app) {
    app.use(require("cookie-parser"));
    const bcrypt = require('bcrypt')
    app.set('views', path.join(__dirname,  'views'));
    app.set("view engine", "ejs");
    const bodyParser = require('body-parser')
    app.use(bodyParser.urlencoded({ extended: true }));
    console.log("jbvgk")
    const router=require('./login/login.js')
    app.use('/user',router)
   await require('./mongodb/mongodb.js') 
    const oneDay = 1000 * 60 * 60 * 24;
    
    app.use(session({
        secret: "Authentication",
        saveUninitialized: true,
        cookie: { maxAge: oneDay },
        resave: false
    }));

}

module.exports = middleware