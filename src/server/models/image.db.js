const mysql = require("mysql2/promise");

const connectionPool = mysql.createPool({
  host: "localhost",
  user: "root",
  port: "3306",
  database: "fleamarketdb",
});

const imageTable = {
  create: async () => {
    const connection = connectionPool.getConnection();
    const q = `
        CREATE TABLE IF NOT EXISTS image
        (
            product_id INT NOT NULL AUTO_INCREMENT,
            image VARCHAR(100) NOT NULL,
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
        INSERT INTO image
        VALUES (${(obj.id, obj.path)});
    `;

    try {
      (await connection).query(q);
    } catch (err) {
      throw err;
    }
  },
};

module.exports = imageTable;
