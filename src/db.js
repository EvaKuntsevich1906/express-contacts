const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'university',
    password: 'hannaeva1021',
    port: '8000'
}); 


module.exports = pool;