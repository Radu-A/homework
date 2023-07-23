const express = require('express');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const tokenSecret = process.env.TOKEN_SECRET;

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
  
    if (authHeader) {
      const token = authHeader.split(' ')[1];
      console.log("condicional");
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
    authenticateJWT
}