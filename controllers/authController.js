const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("../utils/config");

const app = express();

app.set('key', config.key)

const getJWT = (req, res) => {
  if (req.body.user === "user" && req.body.password === "password") {
    const payload = {
      check: true,
      email: req.body.email
    };
    const token = jwt.sign(payload, app.get('key'), {
      expiresIn: 1440000,
    });

    // res.json({
    //   message: "Successful authentication",
    //   token: token,
    // });

    return res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      })
      .status(200)
      .json({ message: "Logged in successfully 😊 👌" });
    
    console.log(token);
  } else {
    res.json({ mensaje: "Wrong user or password" });
  }
};

module.exports = {
    getJWT
}