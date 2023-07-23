const express = require("express");
const jwt = require("jsonwebtoken");
const users = require("../models/users");
require("dotenv").config();

const tokenSecret = process.env.TOKEN_SECRET;

const checkEmailAndPassword = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // Check in db if user exists using "users models"
    const data = await users.getUserByEmail(email);
    const user = data[0];
    // If the user exists in the system
    if (user) {
      // If the password is correct, next
      if (user.password === password) {
        req.email = email;
        console.log("Correct password, user logged");
        next();
      // If the password is wrong
      } else {
        res.status(400).json({
          message: "Incorrect user or password"
        });
      }
    // If the user doesn't exists in the system
    } else {
      res.status(401).json({
        message: "Email doesn't exists in the system",
      });
    }
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, tokenSecret, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

module.exports = {
  checkEmailAndPassword,
  authenticateJWT,
};
