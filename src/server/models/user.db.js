const mysql = require("mysql2/promise");

const connectionPool = mysql.createPool({
  host: "localhost",
  user: "root",
  port: "3306",
  database: "fleamarketdb",
});

const userTable = {
  create: async () => {
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
  },

  check: async (name) => {
    const connection = connectionPool.getConnection();
    const q = `
        SELECT * FROM user
        WHERE name = "${name}";
      `;

    try {
      return (await connection).query(q);
    } catch (err) {
      throw err;
    }
  },

  insert: async (obj) => {
    const connection = connectionPool.getConnection();
    const q = `
        INSERT INTO user 
        VALUES(${obj.user_id}, ${obj.name}, ${obj.address});
      `;

    try {
      return (await connection).query(q);
    } catch (err) {
      throw err;
    }
  },

  select: async (user_id) => {
    const connection = connectionPool.getConnection();
    const q = `
        SELECT * FROM user
        WHERE user_id = "${user_id}";
      `;
    try {
      return (await connection).query(q);
    } catch (err) {
      throw err;
    }
  },
};

module.exports = userTable;
