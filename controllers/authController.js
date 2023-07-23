const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("../utils/config");
require("dotenv").config();

const app = express();

const tokenSecret = process.env.TOKEN_SECRET;

const users = [
  {
    username: "john",
    password: "password123admin",
    role: "admin",
  },
  {
    username: "anna",
    password: "password123member",
    role: "member",
  },
];

app.set("key", config.key);

const getToken = (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);

  const user = users.find((u) => {
    return u.username === username && u.password === password;
  });

  console.log(user);

  if (user) {
    const token = jwt.sign(
      { username: user.username, role: user.role },
      tokenSecret,
      {
        expiresIn: "7d",
      }
    );

    res.status(201).cookie("access-token", token, {
      httpOnly: true,
      simesite: "lax"
    }).json({
      message: 'User loged',
      token,
    })

    // res.json({
    //   message: 'User loged',
    //   token,
    // });
  } else {
    res.send("Username or password incorrect, nerd");
  }
};

module.exports = {
  getToken,
};
