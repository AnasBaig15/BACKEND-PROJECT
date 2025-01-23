const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const ownerRouter = require('./routes/ownerRouter');
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsUser');
const db = require('./config/mongoose-connection');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");

// Use the routers
app.use("/owner", ownerRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.listen(3005, () => {
    console.log('Server is running on port 3005');
});