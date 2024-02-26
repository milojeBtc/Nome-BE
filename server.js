const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");

// const dbConfig = require("./app/config/db.config");

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "bezkoder-session",
    keys: ["COOKIE_SECRET"], // should use as secret environment variable
    httpOnly: true,
  })
);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Nome application." });
});

// routes
require("./app/routes/verify.route")(app);

// set port, listen for requests
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// import { Server } from "socket.io";
// const socketIO = require("socket.io");
// const {
//   setTrueOnline,
//   setFalseOnline,
// } = require("./app/controllers/online.controller");
// const Server = socketIO.Server;

// const io = new Server(8080);

// const onlinePlayers = {};
// const socketToUserID = {};

// io.on("connection", (socket) => {
//   console.log(`connect ${socket.id}`);

//   socket.on("ping", (userID) => {
//     console.log("ping", userID);
//     onlinePlayers[userID] = true;
//     socketToUserID[socket.id] = userID;
//     console.log('onlinePlayers ==> ', onlinePlayers);
//     console.log('socketToUserID ==> ', socketToUserID);
//     socket.emit("update", {
//       onlinePlayers,
//       socketToUserID
//     });
//   });

//   socket.on("disconnect", () => {
//     console.log(`disconnect ${socket.id}`);
//     console.log(`disconnect ${socket.id}`);
//     const userID = socketToUserID[socket.id];
//     console.log("userID ==> ", userID);
//     if (userID) {
//       delete onlinePlayers[userID];
//       delete socketToUserID[socket.id];
//     }
//     socket.emit("update", {
//       onlinePlayers,
//       socketToUserID
//     });
//     console.log('onlinePlayers ==> ', onlinePlayers);
//     console.log('socketToUserID ==> ', socketToUserID);
//     // setFalseOnline()
//   });
// });
