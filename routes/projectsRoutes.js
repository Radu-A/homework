const express = require("express");
const projectsController = require("../controllers/projectsController");
const authMiddleware = require("../middlewares/authMiddleware");

const projectsRouter = express.Router();

// http://localhost:3000/api/projects
projectsRouter.get("/", projectsController.getProjects);
projectsRouter.get("/order", projectsController.getOrderProjects);
projectsRouter.get("/search", projectsController.getProjecsByKeyword);
projectsRouter.post("/", projectsController.createProject);
projectsRouter.delete(
  "/",
  authMiddleware.authenticateToken,
  projectsController.deleteProject
);

module.exports = projectsRouter;
