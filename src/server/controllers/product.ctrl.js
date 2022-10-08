const imageTable = require("../models/image.db");
const productTable = require("../models/product.db");

const product = {
  getList: async (req, res, next) => {
    const { address } = req.query;
    const value = await productTable.selectWhereAddress(address);

    if (value) {
      res.send(value[0]); // [0] 붙혀주어야함 아니면 _buf 이상한값 붙음.
      res.status(200);
    } else {
      res.status(204);
    }
  },
  insertProduct: async (req, res, next) => {
    console.log(req.body);
    const inputList = req.body;
    const imageList = req.files.map((file) => file.filename);
    const product_obj = {
      product_name: inputList.title,
      address: inputList.address,
      price: inputList.price,
      product_image: imageList[0],
      category: null,
      product_content: inputList.content,
      product_status: "판매중",
      seller_id: "3",
    };
    await productTable.insert(product_obj);

    // product table에 집어넣은 후 자동 생성되는 id를 다시 가져온다. (리팩토링 필요 아마도..?)
    const product_id = await productTable.selectIdWhereName(inputList.title);

    imageList.map(async (image) => {
      const image_obj = {
        product_id: product_id,
        path: image,
      };
      await imageTable.insert(image_obj);
    });

    res.redirect("/");
  },
};

module.exports = product;
