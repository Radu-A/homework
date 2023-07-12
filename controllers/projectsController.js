const projects = require('../models/projects');

const getProjects = async (req, res) => {
    let data;
    try {
        if (req.query.user_id) {
            data = await projects.getProjectsByUser(req.query.user_id);
            res.status(200).json(data);
        } else {
            data = await projects.getAllProjects();
            res.status(200).json(data);
        }
    } catch(err) {
        console.log(err);
        throw err;
    }
}

const createProject = async (req,res) => {
    console.log("Check new user data: ", req.body);
    try {
        const data = await projects.createProject(req.body);
        console.log({
            msj: `Project ${req.body.title} inserted on data base`
        });
        res.status(201).json({
            msj: `Project ${req.body.title} inserted on data base`
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
//     "user_id": "4", 
//     "title": "quiz form", 
//     "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent sed euismod ante. Vestibulum eget purus in nunc molestie pharetra. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent volutpat nunc aliquet, accumsan ligula pretium, venenatis ante.", 
//     "todo": "Curabitur commodo a elit sit amet aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris at mauris nec risus tempor rutrum. Praesent rhoncus, risus vitae finibus viverra, lacus orci cursus lorem, ac venenatis magna tortor nec justo. Duis ut consequat risus, sed porta arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui in est molestie tempus. Donec tempus lacus non tincidunt faucibus.", 
//     "img_small": "https://ibb.co/c8h2nSk", 
//     "img_big": "https://ibb.co/B6vHS3J", 
//     "github: https": "//github.com/Radu-A/web-personal", 
//     "site: https": "//web-personal-omega.vercel.app/"
// }

const deleteProject = async (req,res) => {
    try {
        let deleteInfo = await projects.deleteProject(req.body.project_id);

        res.status(200).json({
            "user deleted": deleteInfo,
            "msj": "User deleted successfully"
        });
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

module.exports = {
    getProjects,
    createProject,
    deleteProject
}