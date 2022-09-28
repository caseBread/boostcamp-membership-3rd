const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const MemoryStore = require("memorystore")(session);
const port = 3000;
const indexRouter = require("./routes/index");
const { createTable } = require("./models/db");

const app = express();

// session setting
const sessionObj = {
  secret: "fleamarket-secret",
  resave: false,
  saveUninitialized: true,
  store: new MemoryStore({ checkPeriod: 24000 * 60 * 60 }),
  cookie: {
    maxAge: 24000 * 60 * 60,
  },
};
app.use(session(sessionObj));

// view engine setup
//app.set("views", path.join(__dirname, "views"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "../client/public")));
app.use(express.static(path.join(__dirname, "../client/source")));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// create table
(async () => {
  //await createDB();
  await createTable();
})();

app.listen(port, () => {
  console.log(`서버가 생성되었습니다. port:${port}`);
});

module.exports = app;
