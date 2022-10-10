const mysql = require("mysql2/promise");
const imageTable = require("./image.db");
const productTable = require("./product.db");
const userTable = require("./user.db");

/**
 * Type orm
 * query builder
 */

// 서버 최초 실행 시 테이블 생성
(async () => {
  await userTable.create();
  await productTable.create();
  await imageTable.create();
})();
