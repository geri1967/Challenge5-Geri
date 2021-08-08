const express = require("express");
const path = require("path");






var app = express();
var fs = require('fs');

var dir = path.join(__dirname, 'static');
var mime = {
    html: 'text/html',
    txt: 'text/plain',
    css: 'text/css',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    js: 'application/javascript'
};


const morgan = require("morgan");
const compression = require("compression");
const helmet = require("helmet");
require("dotenv").config();

//const app = express();
const port = process.env.API_GATEWAY_PORT || 3000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

const home = require("./routes/home");
const api = require("./routes/api");
const { handleHomePage, handleLogin, handleSuitPage } = require("./handler");
app.use("/home", home);
app.use("/api", api);

// third party middleware
app.use(morgan("dev"));
app.use(compression());
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/views'));
// folder untuk file file staticnya ada di 1 project ini
// app.use(express.static(path.join(__dirname)));

// folder untuk file file staticnya ada di 1 folder static ini
app.use(express.static(path.join(__dirname, "static")));

const handleServer = () => console.log(`App running at port ${port}`);
app.get("/suit", handleSuitPage);
app.get("/login", handleLogin);
app.get("/", handleHomePage);

app.listen(port, handleServer);
