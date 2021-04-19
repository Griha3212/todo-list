/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import express from "express";

import chalk from "chalk";
import cors from "cors";
import compression from "compression";
import passport from "passport";
import { router as userRouter } from "./routes/user.routes";

import errorHandler from "./middlewares/error.middleware.js";

// Create a new express application instance
export const app = express();

// passport and strategies initialization
app.use(passport.initialize());
// app.use(localSignInStrategy.initialize());
// app.use(jwtStrategy.initialize());
// app.use(jwtStrategyIsAdmin.initialize());

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(cors());
app.use(compression());

// app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
// app.use("/api/admin", adminRouter);
// app.use("/api/stats", statsRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(errorHandler);

// console.log('process.env.JWT_SECRET :>> ', process.env.JWT_SECRET);

// console.log('process.env.BACKEND_URL :>> ', process.env.BACKEND_URL);

// TO DO create db for staging/prod version without seeding
// createConnection().then(async () => {
//   // seed only if dataBase is empty

//   const countOfUsers = await getRepository(Users)
//     .createQueryBuilder("user")
//     .getCount();

//   if (countOfUsers === 0) {
//     console.log(chalk.yellow("Found 0 users, mocking data"));

//     await seedMockedChannels();
//     console.log(chalk.yellow("Channels mocking complete"));
//     await seedMockedUsers();
//     console.log(chalk.yellow("Users mocking complete"));
//     await seedMockedSessions();
//     console.log(chalk.yellow("Sessions mocking complete"));
//     await seedMockedSpeakers();
//     console.log(chalk.yellow("Speakers mocking complete"));
//   }
// });

// mongoose.connect("mongodb://localhost/", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });

// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => {
//   // we're connected!
//   console.log("connected to mongo :>> ");
// });
