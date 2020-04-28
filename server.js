const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const dotenv = require('dotenv');


const clientRouter = require("./client/client-router");
const instructorRouter = require("./instructor/instructor-router");
const ClientAuthRouter = require("./client/client-authRouter");
const InstructorAuthRouter = require("./instructor/instructor-authRouter");
<<<<<<< HEAD
=======
const classRouter = require("./class/class-router");
>>>>>>> 25cf192ed51f278aaf1b71fa488febcce5977505
const authenticator = require("./authenticator");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/client", authenticator, clientRouter);
server.use("/api/instructor", authenticator, instructorRouter);
server.use("/api/auth", ClientAuthRouter, InstructorAuthRouter);
<<<<<<< HEAD
=======
server.use("/api/class", authenticator, classRouter);
>>>>>>> 25cf192ed51f278aaf1b71fa488febcce5977505

server.get("/", (req, res) => {
    res.status(200).json({ message: "It's alive!"})
});

<<<<<<< HEAD
module.exports = server;
=======
module.exports = server; 
>>>>>>> 25cf192ed51f278aaf1b71fa488febcce5977505
