const users = require('../models/users');

const getUsers = async (req, res) => {
    let data;
    try {
        if (req.query.email) {
            data = await users.getUserByEmail(req.query.email);
            res.status(200).json(data);
        } else {
            data = await users.getAllUsers();
            res.status(200).json(data);
        }
    } catch(err) {
        console.log(err);
        throw err;
    }
}

const createUser = async (req,res) => {
    console.log("Check new user data: ", req.body);
    const newUser = {
        email: req.body.email, 
        photo: req.body.photo, 
        firstname: req.body.firstname, 
        lastname: req.body.lastname, 
        curse: req.body.curse, 
        github: req.body.github
    }
    try {
        const data = await users.createUser(newUser);
        console.log({
            msj: `User ${req.body.email} inserted on data base`
        });
        res.status(201).json({
            msj: `User ${req.body.email} inserted on data base`
        });
    }        
    
    catch (error) {
        console.log(`ERROR: ${error}`);
        res.status(400).json({
            msj: `ERROR: ${error}`
        });
    }
}

// {
//     "email": "aerozfx.toivonen@example.com",
//     "photo": "https://avatars.githubusercontent.com/u/118265607?v=4",
//     "firstname": "Fernando",
//     "lastname": "Mariño",
//     "curse": "23-04",
//     "github": "https://api.github.com/users/aerozfx"
// }

const deleteUser = async (req,res) => {
    try {
        let deleteInfo = await users.deleteUser(req.body.user_id);

        res.status(200).json({
            "user deleted": deleteInfo,
            "msj": "User deleted successfully"
        });
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

module.exports = {
    getUsers,
    createUser,
    deleteUser
}