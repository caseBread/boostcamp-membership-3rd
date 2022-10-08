const { selectProductList } = require("../models/db");

const product = {
  getList: async (req, res, next) => {
    const { address } = req.query;
    const value = await selectProductList(address);

    if (value) {
      res.send(value[0]); // [0] 붙혀주어야함 아니면 _buf 이상한값 붙음.
      res.status(200);
    } else {
      res.status(204);
    }
  },
  insertProduct: async (req, res, next) => {
    res.redirect("/");
  },
};

module.exports = product;
