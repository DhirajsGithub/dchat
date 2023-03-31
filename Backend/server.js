// npm init -y
// npm install express socket.io nodemon
const express = require("express");
const app = express();

const server = require("http").createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

// making a connection
io.on("connection", (socket) => {
  // console.log("socket", socket);
  // console.log("socket is active to be connected ...");

  socket.on("dchat", (payload) => {
    // console.log("payload", payload);
    // dchat receives all the information as the payload and with io.emit we broadcast this payload
    io.emit("dchat", payload);
  });
});

// don't listen to app as app.listen

const port = 5500 || process.env.PORT;
server.listen(port, () => {
  console.log("server is listening at port " + String(port) + "...");
});
