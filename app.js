var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var pingRouter = require("./routes/ping");

var errorHandler = require("./middlewares/errorHandler");
var fourHundredHandler = require("./middlewares/404Handler");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Routes
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/ping", pingRouter);

//Shared middlewares
app.use(fourHundredHandler);
app.use(errorHandler);

module.exports = app;
