const express = require("express");
const { selectProductList } = require("../models/db");
const router = express.Router();

router.get("/get-list", async function (req, res, next) {
  // 주소 받으면 주소에 해당하는 상품 select하여 보내준다.
  const { address } = req.query;

  // 원래 이거 쓰면 됨
  const value = await selectProductList(address);

  // temp
  //   const value = [
  //     {
  //       product_name: "파랑 선풍기",
  //       address: "역삼동",
  //       update_time: 2,
  //       price: 24500,
  //       chat_count: 1,
  //       product_image:
  //         "https://user-images.githubusercontent.com/92029332/192843294-3d3a66b7-c171-4626-9475-b64445aa9447.png",
  //     },
  //     {
  //       product_name: "잎사귀 포스터",
  //       address: "역삼동",
  //       update_time: 3,
  //       price: 59000,
  //       chat_count: 2,
  //       product_image:
  //         "https://user-images.githubusercontent.com/92029332/192860107-f1fed102-8bcf-4517-b2bc-a857bcdd74ff.png",
  //     },
  //   ];
  //

  if (value) {
    res.send(value[0]); // [0] 붙혀주어야함 아니면 _buf 이상한값 붙음.
    res.status(200);
  } else {
    res.status(204);
  }
});

module.exports = router;
