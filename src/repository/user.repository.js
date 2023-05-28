const pool = require("../db");

const getAllDataDB = async () => {
    const client = await pool.connect();
    const sql = `SELECT * FROM users`;
    const result = (await client.query(sql)).rows;
    return result;
};

const getDataByIDDB = async (id) => {
    const client = await pool.connect();
    const sql = `SELECT * FROM users WHERE id = $1`;
    const result = (await client.query(sql, [id])).rows;
    return result;
};

const createDataDB = async (name, surname, birth, city, age) => {
    const client = await pool.connect(); 

    const sql1 = `insert into users_info( birth, city, age) values ($1, $2, $3) returning *`;
    const result1 = (await client.query(sql1, [birth, city, age])).rows;

    const sql2 = `insert into users(name, surname, info_id) values($1, $2, $3 ) returning *`;
    const result2 = (await client.query(sql2, [name, surname, result1[0].id])).rows;

    return { ...result1[0], ...result2[0] };

}

const updateDataByIDDB = async (id, name, surname, birth, city, age) => {
    const client = await pool.connect();

    const sql1 = `UPDATE users SET name=$1, surname=$2 WHERE info_id = $3 returning *`;
    const result1 = (await client.query(sql1, [name, surname, id])).rows;

    const sql2 = ` UPDATE users_info SET birth=$1, city=$2, age=$3 WHERE id = $4 returning *`;
    const result2 = (await client.query(sql2, [birth, city, age, id])).rows;

    return { ...result1[0], ...result2[0] };
}

const deleteDataByIDDB = async (id) =>  {
    const client = await pool.connect();

    const sql1 = `DELETE FROM users WHERE info_id = $1 RETURNING *`;
    const result1 = (await client.query(sql1, [id])).rows;

    const sql2 = `DELETE FROM users_info WHERE id = $1 RETURNING *`;
    const result2 = (await client.query(sql2, [id])).rows;

    return { ...result1[0], ...result2[0] };
}

module.exports = {
    getAllDataDB, 
    getDataByIDDB,
    createDataDB, 
    updateDataByIDDB, 
    deleteDataByIDDB
}