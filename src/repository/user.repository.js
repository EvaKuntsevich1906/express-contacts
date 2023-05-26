const pool = require("../db");


const getAllDataDB = async () => {
    const client = await pool.connect();
    const sql = `SELECT * FROM users`;
    const result = (await client.query(sql)).rows;
    return result;
};

// const getAllDataByIDDB = async (id) => {
//     const client = await pool.connect();
//     const sql = `SELECT * FROM users WHERE id = $1`;
//     const result = (await client.query(sql, [id])).rows;
//     return result;
// };


module.exports = {
    getAllDataDB, 
    getAllDataByIDDB 
}