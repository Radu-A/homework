const express = require("express");
const testController = require("../controllers/testController");
const testRouter = express.Router();
const authMiddlewares = require("../middlewares/authMiddleware");

testRouter.get("/", authMiddlewares.authenticateToken, testController.getBooks);
testRouter.post("/", authMiddlewares.authenticateToken, testController.createBook);

module.exports = testRouter;
