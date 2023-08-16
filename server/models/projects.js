const projectQueries = require("../queries/project.queries");
const pool = require("../utils/db_pgsql");

const getAllProjects = async () => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(projectQueries.getAllProjects);
    result = data.rows;
    // console.log(result);
    console.log('getALlProjects')
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const getProjectsDateOrder = async () => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(projectQueries.getProjectsDateOrder);
    result = data.rows;
    // console.log(result);
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const getProjectsCurseOrder = async () => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(projectQueries.getProjectsCurseOrder);
    result = data.rows;
    // console.log(result);
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};
const getProjectsDevelopmentOrder = async () => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(projectQueries.getProjectsDevelopmentOrder);
    result = data.rows;
    // console.log(result);
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const getProjectByID = async (project_id) => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(projectQueries.getProjectByID, [
      project_id,
    ]);
    result = data.rows;
    // console.log(result);
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const getProjectsByUser = async (user_id) => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(projectQueries.getProjectsByUser, [
      user_id,
    ]);
    result = data.rows;
    // console.log(result);
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};
const getProjectsByEmail = async (email) => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(projectQueries.getProjectsByEmail, [email]);
    result = data.rows;
    // console.log(result);
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const getProjectsByKeyword = async (keyword) => {
  let client, result;
  keyword = keyword.toLowerCase();
  try {
    client = await pool.connect();
    const data = await client.query(`
    SELECT project_id, p.user_id, u.photo, u.firstname, u.lastname, u.curse, u.github,
    title, date, development, description, done, todo, img_small, img_big, p.github, site
    FROM projects AS p
    INNER JOIN users AS u ON p.user_id=u.user_id
    WHERE LOWER ( title ) LIKE '%${keyword}%' 
      OR LOWER (development) LIKE '%${keyword}%' 
      OR LOWER (description) LIKE '%${keyword}%'
      OR LOWER (u.firstname) LIKE '%${keyword}%'
      OR LOWER (u.lastname) LIKE '%${keyword}%'`);
    result = data.rows;
    // console.log(result);
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const createProject = async (project) => {
  let client, result;
  const {
    user_id,
    title,
    date,
    development,
    description,
    done,
    todo,
    img_small,
    img_big,
    github,
    site,
  } = project;
  try {
    client = await pool.connect();
    const data = await client.query(projectQueries.createProject, [
      user_id,
      title,
      date,
      development,
      description,
      done,
      todo,
      img_small,
      img_big,
      github,
      site,
    ]);
    result = data.rows;
    console.log(result);
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const deleteProject = async (project_id) => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(projectQueries.deleteProject, [project_id]);
    result = data.rows;
    console.log(result);
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

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
  getProjectsDateOrder,
  getProjectsCurseOrder,
  getProjectsDevelopmentOrder,
  getProjectByID,
  getProjectsByUser,
  getProjectsByEmail,
  getProjectsByKeyword,
  createProject,
  deleteProject,
};
