const express = require("express");
const testController = require("../controllers/testController");
const testRouter = express.Router();
const authMiddlewares = require("../middlewares/authMiddleware");

testRouter.get("/", authMiddlewares.authenticateJWT, testController.getBooks);
testRouter.post("/", authMiddlewares.authenticateJWT, testController.createBook);

module.exports = testRouter;
