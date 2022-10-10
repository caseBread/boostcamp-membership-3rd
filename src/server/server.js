const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const MemoryStore = require("memorystore")(session);
const port = 3000;
const indexRouter = require("./routes/index");
const passport = require("passport");
const oauth = require("./oauth.json");
var GitHubStrategy = require("passport-github").Strategy;
const multer = require("multer");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});

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

require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());

// view engine setup
//app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.set("views", path.join(__dirname, "../client/views"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "../client/public")));
app.use(express.static(path.join(__dirname, "../client/source")));
app.use(express.static(path.join(__dirname, "../uploads")));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


io.on("connection", (socket) => {
  console.log("server connect!" + socket.id);

  /**
   * @params msg : { name(string), msg(string) }
   */
  socket.on("client_to_server", (msg) => {
    console.log(msg); // 모든 메시지가 열로 온다  => db
    io.emit("server_to_client", msg);
  });
});

httpServer.listen(port, () => {
  console.log("create server, port : " + port);
});



module.exports = app;
