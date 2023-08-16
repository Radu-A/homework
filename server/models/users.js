const pool = require('../utils/db_pgsql');
const userQueries = require('../queries/user.queries');

const getAllUsers = async ()=> {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(userQueries.getAllUsers);
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

const getUserById = async (user_id)=> {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(
            userQueries.getUserById,
            [user_id]
        );
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

const getUserByEmail = async (email)=> {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(
            userQueries.getUserByEmail,
            [email]
        );
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

const createUser = async (user)=> {
    let client, result;
    const {email, photo, firstname, lastname, curse, github} = user;
    try {
        client = await pool.connect();
        const data = await client.query(
            userQueries.createUser,
            [email, photo, firstname, lastname, curse, github]
        );
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

const deleteUser = async (id)=> {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(
            userQueries.deleteUser,
            [id]
        );
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

// 
// getAllUsers();
// getUserById(2);
// const newUser = {
//     email: 'aerozfx.toivonen@example.com',
//     photo: 'https://avatars.githubusercontent.com/u/118265607?v=4',
//     firstname: 'Fernando',
//     lastname: 'Mariño',
//     curse: '23-04',
//     github: 'https://api.github.com/users/aerozfx'
// }
// createUser(newUser);
// deleteUser(6);

module.exports = {
    getAllUsers,
    getUserById,
    getUserByEmail,
    createUser,
    deleteUser
}