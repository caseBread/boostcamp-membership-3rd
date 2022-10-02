const mysql = require("mysql2/promise");

const connectionPool = mysql.createPool({
  host: "localhost",
  user: "root",
  port: "3306",
  database: "fleamarketdb",
});

const createUserTable = async () => {
  const connection = connectionPool.getConnection();
  const q = `
    CREATE TABLE IF NOT EXISTS user
      (
        user_id INT NOT NULL,
        name VARCHAR(45) NOT NULL,
        address VARCHAR(45) NOT NULL,
        PRIMARY KEY (user_id)
      );
    `;

  try {
    (await connection).query(q);
  } catch (err) {
    throw err;
  }
};

/**
 * Type orm
 * query builder
 */

const createProductTable = async () => {
  const connection = connectionPool.getConnection();
  const q = `
    CREATE TABLE IF NOT EXISTS product 
      (
        product_id INT NOT NULL AUTO_INCREMENT,
        product_name VARCHAR(45) NOT NULL,
        address VARCHAR(45) NOT NULL,
        update_time TIMESTAMP DEFAULT NOW(),
        price INT NULL,
        chat_count INT NULL,
        heart_count INT NULL,
        view_count INT NULL,
        product_image VARCHAR(200) NULL,
        category VARCHAR(45) NULL,
        product_content VARCHAR(45) NOT NULL,
        product_status VARCHAR(45) NOT NULL,
        seller_id VARCHAR(45) NOT NULL,
        PRIMARY KEY (product_id)
      );
    `;

  try {
    (await connection).query(q);
  } catch (err) {
    throw err;
  }
};

const checkUser = async (id) => {
  const connection = connectionPool.getConnection();
  const q = `
    SELECT * FROM user
    WHERE user_id = "${id}"
  `;

  try {
    return (await connection).query(q);
  } catch (err) {
    throw err;
  }
};

const selectProductList = async (address) => {
  const connection = connectionPool.getConnection();
  const q = `
    SELECT * FROM product
    WHERE address = "${address}"
    ORDER BY update_time DESC
    ;
  `;

  try {
    return (await connection).query(q);
  } catch (err) {
    throw err;
  }
};

// 서버 최초 실행 시 테이블 생성
(async () => {
  await createUserTable();
  await createProductTable();
})();

module.exports = {
  selectProductList,
  createProductTable,
  createUserTable,
  checkUser,
};
