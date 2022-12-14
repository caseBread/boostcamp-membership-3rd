const userTable = require("../models/user.db");

const user = {
  checkUser: async (req, res, next) => {
    const user_id = req.query.userid;
    const value = await userTable.check(user_id);
    if (value) {
      res.send(value[0]);
      res.status(200);
    } else {
      res.status(204);
    }
  },
};

module.exports = user;
