// Require express
const express = require("express");
var cors = require("cors");
require("dotenv").config();

// Session
const session = require("express-session");
const cookieParser = require("cookie-parser");

// Initialize express
const app = express();
const port = 3000;

// Routes modules
const usersRouter = require("./routes/usersRoutes");
const projectsRouter = require("./routes/projectsRoutes");
const authRouter = require("./routes/authRoutes");
const testRouter = require("./routes/testRoutes");

// Session
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

// Middlewares
//Enable all CORS requests
app.use(cors({credentials: true, origin: "https://homework-lg52.onrender.com"}));
// app.use(cors());
app.use(express.json());
app.use(cookieParser()); //Better access to cookies
app.use("/api/users", usersRouter);
app.use("/api/projects", projectsRouter);
app.use("/auth", authRouter);

app.use("/test", testRouter);

// Set localhost
const server = app.listen(port, () => {
  console.log(`****Your host is: http://localhost${port}`);
});

module.exports = server;
