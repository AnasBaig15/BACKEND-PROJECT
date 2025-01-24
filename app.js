const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const expressSession = require("express-session");
const flash = require("connect-flash");
const ownerRouter = require('./routes/ownerRouter');
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsUser');
const indexRouter = require('./routes/index');
const db = require('./config/mongoose-connection');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
    expressSession({
        resave: false,
        saveUninitialized: false,
        secret: process.env.JWT_KEY,
    })
)
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");
console.log("NODE_ENV:", process.env.NODE_ENV || "default");

app.use("/", indexRouter);
app.use("/owner", ownerRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.listen(3005, () => {
    console.log('Server is running on port 3005');
});