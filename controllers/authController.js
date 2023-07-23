const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();

const tokenSecret = process.env.TOKEN_SECRET;

const users = [
  {
    email: "saana.toivonen@example.com",
    password: "saana.toivonen@example.com",
    role: "admin",
  },
  {
    email: "debra.rodriquez@example.com",
    password: "debra.rodriquez@example.com",
    role: "member",
  },
];

const getToken = (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  const user = users.find((u) => {
    return u.email === email && u.password === password;
  });

  console.log(user);

  if (user) {
    const token = jwt.sign(
      { username: user.email, role: user.role },
      tokenSecret,
      {
        expiresIn: "7d",
      }
    );

    res
      .status(201)
      .cookie("access-token", token, {
        httpOnly: true,
        simesite: "lax",
      })
      .json({
        message: "User loged",
        token,
      });

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
