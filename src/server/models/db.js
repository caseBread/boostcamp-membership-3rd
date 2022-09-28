const mysql = require("mysql2/promise");

const connectionPool = mysql.createPool({
  host: "localhost",
  user: "root",
  port: "3306",
  database: "fleamarketdb",
});

const createTable = async () => {
  const connection = connectionPool.getConnection();
  const q = `
        CREATE TABLE IF NOT EXISTS fleamarket
        (
            id VARCHAR(45) NOT NULL,
            password VARCHAR(45) NOT NULL,
            name VARCHAR(45) NOT NULL
        );
    `;
  try {
    (await connection).query(q);
  } catch (err) {
    throw err;
  }
};

/**
 *
 * @param {Object} input id password
 * @returns input과 동일한 data가 있으면 그 data 반환.
 */
const findUserByDB = async (input) => {
  const connection = connectionPool.getConnection();
  const columnsToString = columns.join(",");
  const q = `
        SELECT * FROM fleamarket
        WHERE id = '${input.id}' AND password = '${input.password}'
        ;
    `;

  try {
    return (await connection).query(q);
  } catch (err) {
    throw err;
  }
};

const tempSelect = async () => {
  const connection = connectionPool.getConnection();
  const q = `SELECT * FROM fleamarket;`;
  try {
    return (await connection).query(q);
  } catch (err) {
    throw err;
  }
};

module.exports = { createTable, findUserByDB, tempSelect };
