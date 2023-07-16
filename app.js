// Require express
const express = require('express');
var cors = require('cors');
require("dotenv").config();
// Session
const session = require("express-session");
const cookieParser = require("cookie-parser");

// Initialize express
const app = express();
const port = 3000;

// Routes modules
const usersRouter = require('./routes/usersRoutes');
const projectsRouter = require('./routes/projectsRoutes');
const authRouter = require('./routes/authRoutes');

// Session
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: true
}));

// Middlewares
//Enable all CORS requests
// app.use(cors({credentials: false, origin: process.env.FRONTEND_DOMAIN}));
app.use(cors());
app.use(express.json());
app.use(cookieParser()); //Better access to cookies
app.use('/api/users', usersRouter);
app.use('/api/projects', projectsRouter);
app.use('/auth', authRouter);

app.get("/logintest", (req, res) => {
    const token = jwt.sign({ id: 7, role: "captain" }, "YOUR_SECRET_KEY");
    return res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      })
      .status(200)
      .json({ message: "Logged in successfully 😊 👌" });
  });



// Set localhost
const server = app.listen(port, () => {
    console.log(`****Your host is: http://localhost${port}`);
})

module.exports = server;