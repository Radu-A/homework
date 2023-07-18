const projects = require("../models/projects");

const getProjects = async (req, res) => {
  let data;
  try {
    if (req.query.user_id) {
      data = await projects.getProjectsByUser(req.query.user_id);
      res.status(200).json(data);
    } else if (req.query.project_id) {
      data = await projects.getProjectByID(req.query.project_id);
      res.status(200).json(data);
    } else if (req.query.email) {
      data = await projects.getProjectsByEmail(req.query.email);
      res.status(200).json(data);
    } else {
      data = await projects.getAllProjects();
      res.status(200).json(data);
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};
const getOrderProjects = async (req, res) => {
  let data;
  try {
    if (req.query.sort == 'date') {
        console.log('has intentado date')
      data = await projects.getProjectsDateOrder();
      res.status(200).json(data);
    } else if (req.query.sort == 'curse') {
      data = await projects.getProjectsCurseOrder();
      res.status(200).json(data);
    } else if (req.query.sort == 'development') {
      data = await projects.getProjectsDevelopmentOrder();
      res.status(200).json(data);
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getProjecsByKeyword = async (req, res) => {
  let data;
  try {
      data = await projects.getProjectsByKeyword(req.query.keyword);
      res.status(200).json(data);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const createProject = async (req, res) => {
  console.log("Check new user data: ", req.body);
  console.log("This is date");
  console.log(req.body.date);
  const nowDate = new Date();
  let date = "";
  if (nowDate.getMonth() + 1 < 10) {
    date =
      nowDate.getFullYear() +
      "-0" +
      (nowDate.getMonth() + 1) +
      "-" +
      nowDate.getDate();
  } else {
    date =
      nowDate.getFullYear() +
      "-" +
      (nowDate.getMonth() + 1) +
      "-" +
      nowDate.getDate();
  }
  let newProject = {
    user_id: req.body.user_id,
    title: req.body.title,
    date: date,
    development: req.body.development,
    description: req.body.description,
    done: req.body.done,
    todo: req.body.todo,
    img_small: req.body.img_small,
    img_big: req.body.img_big,
    github: req.body.github,
    site: req.body.site,
  };
  try {
    const data = await projects.createProject(newProject);
    console.log({
      msj: `Project ${req.body.title} inserted on data base`,
    });
    res.status(201).json({
      msj: `Project ${req.body.title} inserted on data base`,
    });
  } catch (error) {
    console.log(`ERROR: ${error}`);
    res.status(400).json({
      msj: `ERROR: ${error}`,
    });
  }
};

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

const deleteProject = async (req, res) => {
  try {
    let deleteInfo = await projects.deleteProject(req.body.project_id);

    res.status(200).json({
      "user deleted": deleteInfo,
      msj: "User deleted successfully",
    });
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

module.exports = {
  getProjects,
  getOrderProjects,
  getProjecsByKeyword,
  createProject,
  deleteProject,
};
