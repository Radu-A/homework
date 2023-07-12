const projectQueries = require('../queries/project.queries');
const pool = require('../utils/db_pgsql');

const getAllProjects = async ()=> {
        let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(projectQueries.getAllProjects);
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

const getProjectByID = async (project_id)=> {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(
            projectQueries.getProjectByID,
            [project_id]
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

const getProjectsByUser = async (user_id)=> {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(
            projectQueries.getProjectsByUser,
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

const createProject = async (project)=> {
    let client, result;
    const {user_id, title, description, todo, img_small, img_big, github, site} = project;
    try {
        client = await pool.connect();
        const data = await client.query(
            projectQueries.createProject,
            [user_id, title, description, todo, img_small, img_big, github, site]
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

const deleteProject = async (project_id)=> {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(
            projectQueries.deleteProject,
            [project_id]
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

// getAllProjects();
// getProjectByID(2);
// getProjectsByUser(1);
// const newProject = {
//     user_id: 4, 
//     title: 'quiz form', 
//     description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent sed euismod ante. Vestibulum eget purus in nunc molestie pharetra. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent volutpat nunc aliquet, accumsan ligula pretium, venenatis ante.', 
//     todo: 'Curabitur commodo a elit sit amet aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris at mauris nec risus tempor rutrum. Praesent rhoncus, risus vitae finibus viverra, lacus orci cursus lorem, ac venenatis magna tortor nec justo. Duis ut consequat risus, sed porta arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui in est molestie tempus. Donec tempus lacus non tincidunt faucibus.', 
//     img_small: 'https://ibb.co/c8h2nSk', 
//     img_big: 'https://ibb.co/B6vHS3J', 
//     github: 'https://github.com/Radu-A/web-personal', 
//     site: 'https://web-personal-omega.vercel.app/'
// }
// createProject(newProject);
// deleteProject(8);

module.exports = {
    getAllProjects,
    getProjectByID,
    getProjectsByUser,
    createProject,
    deleteProject
}