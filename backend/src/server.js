/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import http from "http";
// import https from "https";
import fs from "fs";
// import * as io from 'socket.io';
import chalk from "chalk";
import { Server } from "socket.io";
import path from "path";
import mongoose from "mongoose";
import { app } from "./app.js";
import { seedUsersData } from "./seeds/seedUsers";

/* eslint-disable no-console */

// Get port from environment and store in Express.
const port = parseInt(process.env.PORT, 10) || 3005;
console.log(chalk.yellow("process.env.PORT", process.env.PORT));
// const appForHttps = app;
// const httpsPort = 3011;
// appForHttps.set("port", httpsPort);
app.set("port", port);

// Create HTTP server.
const server = http.createServer(app);

// Create HTTPS server.
// const privateKey = fs.readFileSync(path.resolve("src/ssl/online.mmlf.key"));
// const certificate = fs.readFileSync(path.resolve("src/ssl/online.mmlf.ru.crt"));

// const credentials = { key: privateKey, cert: certificate };
// const httpsServer = https.createServer(credentials, app);

server.listen(port, () => {
  console.log(chalk.yellow(`Server app listening on port ${port}!`));
});

// httpsServer.listen(httpsPort, () => {
//   console.log(chalk.yellow(`Server app https listening on port ${httpsPort}!`));
// });

// console.log('process.env.UI_URL :>> ', process.env.UI_URL);

// sockets
export const io = new Server(server, {
  pingInterval: 5000,
  pingTimeout: 10000,
  cookie: false,
  cors: {
    origin: `${process.env.UI_URL}`,
    methods: ["GET", "POST"],
  },
  perMessageDeflate: false,
});

let amountOfConnectedUsers = 0;

io.on("connection", (socket) => {
  socket.emit("giveMeConnectionInfo", "hello");
  amountOfConnectedUsers += 1;
  // id as room
  socket.on("connectToPersonalRoom", async (id) => {
    socket.leave(String(id));
    socket.join(String(id));

    // console.log(chalk.blueBright.underline(`connectedToPersonalRoom: ${room}`));

    // const ids = await io.allSockets();
    // console.log(chalk.blueBright.underline(`connectedToPersonalRoom: ${id}`));
    // console.log(chalk.blueBright.underline(`amount of connected users total ${ids.size}`));

    console.log(
      chalk.blueBright.underline(
        `amount of connected users total ${amountOfConnectedUsers}`
      )
    );
  });

  socket.on("connectToChannelRoom", (numberOfChannelToConnect) => {
    socket.join(`channel${String(numberOfChannelToConnect)}`);
    // console.log(chalk.blue.underline(`connectedToChannelRoom: channel${numberOfChannelToCoonect}`));
  });

  socket.on("disconnecting", (id) => {
    // console.log(chalk.blue.underline(`disconnected user: ${id}`));
    if (amountOfConnectedUsers > 0) amountOfConnectedUsers -= 1;
    console.log(
      chalk.blueBright.underline(
        `amount of connected users total ${amountOfConnectedUsers}`
      )
    );
    socket.leave(String(id));
  });
});

// MongoDB Connection
if (process.env.NODE_ENV !== "test") {
  mongoose.connect(
    "mongodb://admin:admin@localhost:27017",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
    (error) => {
      if (error) {
        console.error("Please make sure Mongodb is installed and running!");
        throw new Error("Please make sure Mongodb is installed and running!");
      } else {
        console.log("Success connection to DB");
      }

      // feed some dummy data in DB.
      seedUsersData();
    }
  );
}
