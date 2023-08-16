const { Pool } = require('pg');
require('dotenv').config();

// Database connection
const pool = new Pool({ 
    user: process.env.PG_USER, 
    host: process.env.PG_HOST, 
    database: process.env.PG_DB, 
    password: process.env.PG_PASS,
    ssl: true
})

module.exports = pool;