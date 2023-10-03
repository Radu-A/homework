const jwt = require("jsonwebtoken");
require("dotenv").config();

const tokenSecret = process.env.TOKEN_SECRET;

const getToken = (req, res) => {
  console.log("You arrived at getToken");
  // Creating token using JWT and tokenSecret
  const token = jwt.sign(
    { email: req.email, user_id: req.user_id },
    tokenSecret,
    {
      expiresIn: "7d",
    }
  );

  // Sending token in a cookie
  res
    .status(201)
    .cookie("access-token", token, {
      // httpOnly: true,
      samesite: "lax",
    })
    .cookie("user-logged", req.user_id, {
      // httpOnly: true,
      samesite: "lax",
    })
    .json({
      message: "Correct password, user logged",
    });
};

const deleteToken = (req, res) => {
  console.log("You arrived at deleteToken");
  res.clearCookie("access-token").clearCookie("user-logged").json({
    message: "Session closed",
  });
};

module.exports = {
  getToken,
  deleteToken,
};
