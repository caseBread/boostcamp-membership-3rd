const mysql = require("mysql2/promise");

const connectionPool = mysql.createPool({
  host: "localhost",
  user: "root",
  port: "3306",
  database: "fleamarketdb",
});

const productTable = {
  create: async () => {
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
  },

  insert: async (obj) => {
    const connection = connectionPool.getConnection();
    const q = `
        INSERT INTO product(product_name, address, price, product_image, category, product_content, product_status, seller_id)
        VALUES("${obj.product_name}", "${obj.address}","${obj.price}","${obj.product_image}","${obj.category}","${obj.product_content}","${obj.product_status}","${obj.seller_id}");
      `;

    try {
      return (await connection).query(q);
    } catch (err) {
      throw err;
    }
  },

  selectWhereAddress: async (address) => {
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
  },
  selectIdWhereName: async (name) => {
    const connection = connectionPool.getConnection();
    const q = `
        SELECT product_id FROM product
        WHERE product_name = "${name}";
    `;
    try {
      return (await connection).query(q);
    } catch (err) {
      throw err;
    }
  },
};

module.exports = productTable;
