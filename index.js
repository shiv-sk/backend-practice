const express = require('express')
const app = express();

const cors = require('cors');
const cookie_parser = require('cookie-parser');

const Route = require('./routes/user.router')



app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(cookie_parser());
app.use(express.json());
app.use(express.urlencoded({
    extended:true,
    limit:'10kb'
}))

//routes

app.use(express.static('public'))
app.use("/api/v1/testing" , Route)

module.exports = app;