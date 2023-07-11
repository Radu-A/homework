const pool = require('../utils/db_pgsql');

const getAllUsers = async ()=> {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(`SELECT * FROM users`);
        result = data.rows;
        console.log(result);
    } catch(err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
}

getAllUsers();