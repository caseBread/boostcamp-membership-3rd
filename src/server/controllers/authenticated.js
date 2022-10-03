const isAuthenticated = (req, res, next) => {
  console.log(312);
  if (req.user) {
    next();
  } else {
    console.log(401);
    res.send({ status: 401, data: "" });
  }
};

module.exports = { isAuthenticated };
